"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4924],{3446:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=o(4848),r=o(8453);const i={},t=void 0,c={id:"cpp/coroutines/promise_type",title:"promise_type",description:"promise type",source:"@site/docs/cpp/coroutines/promise_type.md",sourceDirName:"cpp/coroutines",slug:"/cpp/coroutines/promise_type",permalink:"/docs/cpp/coroutines/promise_type",draft:!1,unlisted:!1,editUrl:"https://github.com/1036-ce/1036-ce.github.io/blob/main/docs/cpp/coroutines/promise_type.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u534f\u7a0b\u7406\u8bba",permalink:"/docs/cpp/coroutines/coroutine_theory"},next:{title:"coroutines",permalink:"/docs/cpp/coroutines"}},d={},l=[{value:"promise type",id:"promise-type",level:2},{value:"\u534f\u7a0b\u6267\u884c\u8fc7\u7a0b",id:"\u534f\u7a0b\u6267\u884c\u8fc7\u7a0b",level:2},{value:"\u534f\u7a0b\u53e5\u67c4(coroutine_handle)",id:"\u534f\u7a0b\u53e5\u67c4coroutine_handle",level:2},{value:"\u81ea\u5b9a\u4e49<code>co_await</code>\u8868\u8fbe\u5f0f\u7684\u884c\u4e3a",id:"\u81ea\u5b9a\u4e49co_await\u8868\u8fbe\u5f0f\u7684\u884c\u4e3a",level:2},{value:"\u81ea\u5b9a\u4e49<code>co_yield</code>\u8868\u8fbe\u5f0f\u7684\u884c\u4e3a",id:"\u81ea\u5b9a\u4e49co_yield\u8868\u8fbe\u5f0f\u7684\u884c\u4e3a",level:2}];function a(e){const n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"promise-type",children:"promise type"}),"\n",(0,s.jsx)(n.p,{children:"\u4e00\u4e2a\u534f\u7a0b\u7684\u884c\u4e3a\u662f\u7531\u5b83\u7684Promise\u5bf9\u8c61\u63a7\u5236\u7684"}),"\n",(0,s.jsx)(n.p,{children:"\u4e00\u4e2aPromise\u5bf9\u8c61\u6709\u5982\u4e0b\u63a5\u53e3:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Coroutine {\npublic:\n    struct promise_type {\n        Coroutine get_return_object();\n\n        // for most coroutine, the initial_suspend method will return std::suspend_always or std::suspend_never\n        // but NOT ALL\n        auto initial_suspend();\n\n        // after the `return_void` or `return_value` or `unhandled_exception` \n        // methods have called and all local variables have been destructed, \n        // the final_suspend will be called to execture some additional logic \n        // before the execution is returned back to the called/resumer\n        auto final_suspend();\n\n        // catch exception\n        void unhandled_exception();\n\n        // for `co_return;`, the return_void() method is called\n        void return_void();\n\n        // for `co_return <expr> ;`, the return_value(<expr>) method is called\n        auto return_value();\n\n        auto await_transform();\n\n        // customising the behaviour of `co_yield`\n        auto yield_value() noexcept;\n\n        static Coroutine get_return_object_on_allocation_failure();\n    };\n};\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u534f\u7a0b\u6267\u884c\u8fc7\u7a0b",children:"\u534f\u7a0b\u6267\u884c\u8fc7\u7a0b"}),"\n",(0,s.jsx)(n.p,{children:"\u5bf9\u4e8e\u4e00\u4e2a\u534f\u7a0b\u51fd\u6570, \u4ee5\u4e0b\u9762\u7684\u51fd\u6570\u4e3a\u4f8b"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"task<> func() {\n    <body-statements>\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u7f16\u8bd1\u5668\u901a\u8fc7\u4ece\u5b83\u7684\u8fd4\u56de\u7c7b\u578b\u63d0\u53d6promise\u7c7b\u578b\uff0c\u5e76\u5c06\u643a\u7a0b\u51fd\u6570\u6539\u9020\u4e3a\u5982\u4e0b\u5f62\u5f0f"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"{\n    co_await promise.initial_suspend();\n    try {\n        <body-statements>\n    }\n    catch() {\n        promise.unhandled_exception();\n    }\nFinalSuspend:\n    co_await promise.final_suspend();\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5f53\u8c03\u7528\u534f\u7a0b\u51fd\u6570\u65f6\uff0c\u5728\u6267\u884c\u534f\u7a0b\u4e3b\u4f53\u4ee3\u7801\u4e4b\u524d\u4f1a\u6267\u884c\u5f88\u591a\u6b65\u9aa4:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u4f7f\u7528",(0,s.jsx)(n.code,{children:"operator new"}),"\u5206\u914d\u534f\u7a0b\u5e27(\u53ef\u9009)\n\u5982\u679c",(0,s.jsx)(n.code,{children:"promise_type"}),"\u81ea\u5b9a\u4e49\u4e86",(0,s.jsx)(n.code,{children:"operator new"}),"\u65b9\u6cd5\uff0c\u5219\u8c03\u7528\u8be5\u65b9\u6cd5\uff0c\u5426\u5219\u8c03\u7528\u5168\u5c40\u7684",(0,s.jsx)(n.code,{children:"operator new"})]}),"\n",(0,s.jsx)(n.li,{children:"\u5c06\u51fd\u6570\u53c2\u6570\u590d\u5236\u5230\u534f\u7a0b\u5e27\u4e2d"}),"\n",(0,s.jsxs)(n.li,{children:["\u8c03\u7528",(0,s.jsx)(n.code,{children:"promise"}),"\u7c7b\u578b\u5bf9\u8c61\u7684\u6784\u9020\u5668\uff0c\u6784\u9020promise\u5bf9\u8c61"]}),"\n",(0,s.jsxs)(n.li,{children:["\u8c03\u7528",(0,s.jsx)(n.code,{children:"promise.get_return_object()"}),"\u5f97\u5230\u8fd4\u56de\u7ed3\u679c",(0,s.jsx)(n.code,{children:"res"}),", \u5728\u534f\u7a0b\u7b2c\u4e00\u6b21\u88ab\u6302\u8d77\u65f6\u8fd9\u4e2a\u8fd4\u56de\u7ed3\u679c\u5c06\u88ab\u8fd4\u56de\u7ed9\u534f\u7a0b\u8c03\u7528\u8005."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"co_await promise.initial_suspend()"}),"\n\u5bf9\u4e8e\u5927\u591a\u6570\u534f\u7a0b",(0,s.jsx)(n.code,{children:"initial_suspend()"}),"\u65b9\u6cd5\u8fd4\u56de",(0,s.jsx)(n.code,{children:"std::suspend_always"}),"\u6216\u8005",(0,s.jsx)(n.code,{children:"std::suspend_never"})]}),"\n",(0,s.jsxs)(n.li,{children:["\u5f53",(0,s.jsx)(n.code,{children:"co_await promise.initial_suspend()"}),"\u6062\u590d\u65f6\uff0c\u534f\u7a0b\u5f00\u59cb\u6267\u884c",(0,s.jsx)(n.code,{children:"<body-statements>"}),"\u90e8\u5206"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5f53\u5728",(0,s.jsx)(n.code,{children:"<body-statements>"}),"\u4e2d\u6267\u884c\u5230",(0,s.jsx)(n.code,{children:"co_return"}),"\u8bed\u53e5\u65f6,\u4f1a\u6267\u884c\u5982\u4e0b\u6b65\u9aa4"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u8c03\u7528",(0,s.jsx)(n.code,{children:"promise.return_void()"}),"\u6216",(0,s.jsx)(n.code,{children:"promise.return_value(<expr>)"})]}),"\n",(0,s.jsx)(n.li,{children:"\u6309\u7167\u521b\u5efa\u7684\u76f8\u53cd\u987a\u5e8f\u9500\u6bc1\u6240\u6709\u5c40\u90e8\u53d8\u91cf"}),"\n",(0,s.jsxs)(n.li,{children:["\u6267\u884c",(0,s.jsx)(n.code,{children:"co_await promise.final_suspend()"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u6267\u884c\u7531\u4e8e\u4e00\u4e2a\u5f02\u5e38\u79bb\u5f00",(0,s.jsx)(n.code,{children:"<body-statements>"}),",\u5c06\u4f1a\u6267\u884c\u5982\u4e0b\u6b65\u9aa4"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u6355\u83b7\u5f02\u5e38\uff0c\u7136\u540e\u6267\u884c",(0,s.jsx)(n.code,{children:"promise.unhandled_exception()"})]}),"\n",(0,s.jsxs)(n.li,{children:["\u6267\u884c",(0,s.jsx)(n.code,{children:"co_await promise.final_suspend()"}),"\n\u5728final_suspend()\u65b9\u6cd5\u4e2d\uff0c\u53ef\u4ee5\u6302\u8d77\u534f\u7a0b\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u8fd4\u56de\u5230\u8c03\u7528\u8005(",(0,s.jsx)(n.code,{children:"std::suspend_never"}),")\u3002\n\u5982\u679c\u6302\u8d77\u534f\u7a0b\uff0c\u90a3\u4e48\u4e4b\u540e\u5c31\u53ea\u80fd\u8c03\u7528",(0,s.jsx)(n.code,{children:"destroy()"}),"\u65b9\u6cd5\uff0c\u800c\u4e0d\u80fd",(0,s.jsx)(n.code,{children:"resume"}),"(\u8fd9\u4f1a\u5bfc\u81f4\u672a\u5b9a\u4e49\u884c\u4e3a).\n\u4e00\u822c\u4e0d\u5efa\u8bae\u76f4\u63a5\u8fd4\u56de\u5230\u8c03\u7528\u8005,\u800c\u662f\u901a\u8fc7\u5728\u5916\u90e8\u8c03\u7528",(0,s.jsx)(n.code,{children:"destroy"}),"\u7684\u65b9\u6cd5\u6765\u9500\u6bc1\u534f\u7a0b\u5e27,\u56e0\u4e3a\u8fd9\u6837\u4fbf\u4e8e\u7f16\u8bd1\u5668\u4f18\u5316"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u9500\u6bc1\u534f\u7a0b\u5e27\u7684\u6b65\u9aa4:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u8c03\u7528Promise\u5bf9\u8c61\u7684\u6790\u6784\u51fd\u6570"}),"\n",(0,s.jsx)(n.li,{children:"\u8c03\u7528\u51fd\u6570\u53c2\u6570\u7684\u6790\u6784\u51fd\u6570"}),"\n",(0,s.jsxs)(n.li,{children:["\u8c03\u7528",(0,s.jsx)(n.code,{children:"operator delete"}),"\u91ca\u653e\u534f\u7a0b\u5e27\u7684\u5185\u5b58\u5360\u7528"]}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u56de\u5230\u534f\u7a0b\u8c03\u7528\u8005\u6216\u534f\u7a0b\u6062\u590d\u8005"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u534f\u7a0b\u53e5\u67c4coroutine_handle",children:"\u534f\u7a0b\u53e5\u67c4(coroutine_handle)"}),"\n",(0,s.jsx)(n.p,{children:"coroutine_handle \u7684\u63a5\u53e3\u5982\u4e0b\u6240\u793a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"template<typename Promise = void>\nstruct coroutine_handle;\n\n// Type-erased corountine handle. Can refer to any kind of coroutine\n// Donesn't allow access to the promise object;\ntemplate<>\nstruct coroutine_handle<void> {\n\n    // constructs to the null handle\n    constexpr coroutine_handle();\n\n    // convert to/from a void* for passing into C-style interop functions\n    constexpr void* address() const noexcept;\n    static constexpr coroutine_handle from_address(void* addr);\n\n    // query if the handle is non-null.\n    constexpr explicit operator bool() const noexcept;\n\n    // query if the coroutine is suspended at the final_suspend point.\n    // undefined behaviour if coroutine is not currently suspended.\n    bool done() const;\n\n    // resume/destroy the suspended corountine\n    void resume();\n    void destroy();\n};\n\n// coroutine handle for coroutines with a known promise type.\n// template argument must exactly match coroutine's promise type\ntemplate <typename Promise>\nstruct coroutine_handle : coroutine_handle<> {\n    using coroutine_handle<>::coroutine_handle;\n\n    static constexpr coroutine_handle from_address(void* addr);\n\n    // access to the coroutine's promise object;\n    Promise& promise() const;\n\n    // you can reconstruct the coroutine handle from the promise object\n    static coroutine_handle from_promise(Promise& promise);\n};\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"\u81ea\u5b9a\u4e49co_await\u8868\u8fbe\u5f0f\u7684\u884c\u4e3a",children:["\u81ea\u5b9a\u4e49",(0,s.jsx)(n.code,{children:"co_await"}),"\u8868\u8fbe\u5f0f\u7684\u884c\u4e3a"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u5728",(0,s.jsx)(n.code,{children:"promise_type"}),"\u4e2d\u5b9a\u4e49\u4e00\u4e2a",(0,s.jsx)(n.code,{children:"await_transform"}),"\u65b9\u6cd5, \u5219\u7f16\u8bd1\u5668\u4f1a\u5c06\u6240\u6709\u7684",(0,s.jsx)(n.code,{children:"co_await <expr>"}),"\u8f6c\u6362\u4e3a",(0,s.jsx)(n.code,{children:"co_await promise.await_transform(<expr>)"})]}),"\n",(0,s.jsxs)(n.li,{children:["\u53ef\u4ee5\u901a\u8fc7\u5c06",(0,s.jsx)(n.code,{children:"await_transform"}),"\u51fd\u6570\u8bbe\u7f6e\u4e3a",(0,s.jsx)(n.code,{children:"=delete"}),"\u6765\u7981\u6b62\u7b49\u5f85, \u4f8b\u5982"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"template <typename T>\nclass generator_promise {\n    //...\n\n    // Disable any use of co_await within this type of coroutine\n    template<typename U>\n    std::suspend_never await_transform(U&&) = delete;\n}\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"\u81ea\u5b9a\u4e49co_yield\u8868\u8fbe\u5f0f\u7684\u884c\u4e3a",children:["\u81ea\u5b9a\u4e49",(0,s.jsx)(n.code,{children:"co_yield"}),"\u8868\u8fbe\u5f0f\u7684\u884c\u4e3a"]}),"\n",(0,s.jsxs)(n.p,{children:["\u7f16\u8bd1\u5668\u5c06",(0,s.jsx)(n.code,{children:"co_yield <expr>"}),"\u8f6c\u6362\u4e3a",(0,s.jsx)(n.code,{children:"co_await promise.yield_value(<expr>)"}),"\n\u4f7f\u7528\u793a\u4f8b\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"template<typename T>\nclass generator_promise {\n    T* valuePtr;\npublic:\n    std::suspend_always yield_value(T& value) noexcept {\n        valuePtr = std::addressof(value);\n        return {}\n    }\n};\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>t,x:()=>c});var s=o(6540);const r={},i=s.createContext(r);function t(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);