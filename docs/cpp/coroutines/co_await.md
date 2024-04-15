# 深入理解co_await

**本文翻译自[原文](https://lewissbaker.github.io/2017/11/17/understanding-operator-co-await)**

在之前关于协程理论的[文章](https://1036-ce.github.io/docs/cpp/coroutines/coroutine_theory)中，我描述了函数和协程之间的概念上的区别，但没有详细介绍C++协程TS（N4680）描述的语法和语义。

Coroutines TS向C++语言添加的关键新功能是能够挂起协程，允许稍后恢复它。TS提供此功能的机制是通过新的`co_await`运算符。

理解`co_await`运算符的工作原理可以帮助揭示协程的行为以及它们如何被挂起和恢复。在本文中，我将解释`co_await`运算符的机制，并介绍相关的`Awaitable`和`Awaiter`类型概念。

但在我深入讨论co_await之前，我想简要概述一下Coroutines TS，以提供一些背景信息。

## What does tohe Coroutines TS give us?

1. 三个新的关键字: `co_await`, `co_yield`, `co_return`
2. 几个新类型:
    - `coroutine_handle<P>`
    - `coroutine_traits<Ts...>`
    - `suspend_always`
    - `suspend_never`
3. 一个通用机制，库编写者可以使用它来与协程交互，并定制它们的行为
4. 一个使编写异步代码变得更加容易的语言设施！

## 编译器与库的交互

有趣的是，协程TS实际上并没有定义协程的语义。它不定义如何生成返回给调用者的值。它不定义对co_return语句传递的返回值的处理方式，也不定义如何处理从协程中传播出来的异常。它也不定义协程应该在哪个线程上恢复。

相反，它指定了一个通用机制，供库代码通过实现符合特定接口的类型来定制协程的行为。然后编译器会生成调用库提供的类型实例的方法的代码。这种方法类似于库编写者可以通过定义begin()/end()方法和迭代器类型来定制基于范围的for循环的行为。

协程TS并未为协程的机制规定任何特定的语义，这使其成为一个强大的工具。它允许库编写者定义各种不同类型的协程，用于各种不同的目的。

例如，您可以定义一个异步产生单个值的协程，或者一个惰性产生值序列的协程，或者一个简化了对可选类型(`optional<T>1)值进行控制流处理的协程，如果遇到 nullopt 值则提前退出。

协程TS定义了两种接口：`Promise` 接口和 `Awaitable` 接口。

`Promise` 接口指定了自定义协程行为的方法。库编写者能够自定义协程被调用时的行为，协程返回时的行为（无论是通过正常手段还是通过未处理的异常），以及协程内部任何 co_await 或 co_yield 表达式的行为。

`Awaitable` 接口指定了控制 co_await 表达式语义的方法。当一个值被 co_await 时，代码将被转换为一系列对 awaitable 对象上方法的调用，这些方法允许它指定：是否挂起当前协程，执行一些逻辑，以在挂起后安排协程以便稍后恢复，以及在协程恢复后执行一些逻辑以产生 co_await 表达式的结果。

我将在未来的文章中详细介绍 Promise 接口的细节，但现在让我们来看看 Awaitable 接口。

## Awaiters and Awaitables

`co_await` 运算符是一种新的一元运算符，可以应用于一个值。例如：`co_await someValue`

`co_await` 运算符只能在协程的上下文中使用。尽管这有些自相矛盾，因为任何包含 `co_await` 运算符使用的函数体，按定义将被编译为协程。

**支持co_await运算符的类型称为Awaitable类型**

需要注意的是，`co_await` 运算符是否能够应用于一种类型可能取决于 `co_await` 表达式出现的上下文。用于协程的promise类型可以通过其 await_transform 方法改变协程内部 co_await 表达式的含义（稍后会详细介绍）。

为了更具体地说明,使用术语**Normally Awaitable**来描述一种类型，它在promise type 中没有`await_transform`成员的协程上下文中支持`co_await`.

使用术语**Contextually Awaitable**来描述一种类型，它仅在promise type 中有`await_transform`成员的协程上下文中支持`co_await`

**Awaiter类型是实现了`await_ready`, `await_suspend`, `await_ready`三个方法的类型,这三个方法作为`co_await`表达式的一部分被调用**

需要注意的是，我在这里无耻地从 C# 的 async 关键字的机制中“借用”了术语“Awaiter”，它是通过 GetAwaiter() 方法实现的，该方法返回一个具有与 C++ 中 Awaiter 概念非常相似的接口的对象。请参阅此[文章](https://weblogs.asp.net/dixin/understanding-c-sharp-async-await-2-awaitable-awaiter-pattern)以了解有关 C# awaiter 的更多详细信息。

需要注意的是，一种类型可以同时是 Awaitable 类型和 Awaiter 类型。

当编译器看到 co_await <expr> 表达式时，实际上有许多可能的情况，它可以根据所涉及的类型进行转换。


## 获得Awaiter

编译器所作的第一件事是生成代码来获取等待值的Awaiter对象, N4680第5.3.8(3)节中列出了获取Awaiter对象的步骤

假设等待携程的Promuse对象的类型为P
