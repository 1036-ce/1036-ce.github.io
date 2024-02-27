## std::mutex

`std::mutex`和`std::lock`定义在头文件`<mutex>`中

使用互斥锁的方法之一是使用`lock()`和`unlock()`

也可以使用`std::lock_guard`，其使用RAII模式管理锁，该模式在`std::lock_guard`对象销毁时自动释放锁

### more
- shared_mutex: 允许多个线程同时拥有一个互斥量
- recursive_mutex: 允许多个线程在一个互斥锁上叠加多个锁
- timed_mutex: 为互斥锁提供timeout。shared_mutex、recursive_mutex 也有定时版本可用

### 示例代码

```cpp
#include <fmt/core.h>
#include <future>
#include <iostream>
#include <list>
#include <mutex>
#include <optional>
#include <string_view>

using namespace fmt;

std::mutex animal_mutex;

class Animal {
private:
	using friend_t = std::list<Animal>;
	std::string_view s_name{"unk"};
	friend_t l_friends{};

public:
	Animal() = delete;
	Animal(const std::string_view n) : s_name(n) {}

	bool operator==(const Animal &o) const {
		return s_name.data() == o.s_name.data();
	}

	bool is_friend(const Animal &o) const {
		for (const auto &a : l_friends) {
			if (a == o)
				return true;
		}
		return false;
	}

	std::optional<friend_t::iterator> find_friend(const Animal &o) noexcept {
		for (auto it{l_friends.begin()}; it != l_friends.end(); ++it) {
			if (*it == o)
				return it;
		}
		return {};
	}

	void print() const noexcept {
		std::lock_guard<std::mutex> l(animal_mutex);
		// animal_mutex.lock();
		auto n_animals{l_friends.size()};
		std::cout << format("Animal: {}, friends: ", s_name);
		if (!n_animals)
			std::cout << "none";
		else {
			for (auto n : l_friends) {
				std::cout << n.s_name;
				if (--n_animals)
					std::cout << ", ";
			}
		}
		std::cout << "\n";
		// animal_mutex.unlock();
	}

	bool add_friend(Animal &o) noexcept {
		std::cout << format("add_friend {} -> {}\n", s_name, o.s_name);
		if (*this == o)
			return false;
		std::lock_guard<std::mutex> l(animal_mutex);
		// animal_mutex.lock();
		if (!is_friend(o))
			l_friends.emplace_back(o);
		if (!o.is_friend(*this))
			o.l_friends.emplace_back(*this);
		// animal_mutex.unlock();
		return true;
	}

	bool delete_friend(Animal &o) noexcept {
		std::cout << format("delete_friend {} -> {}\n", s_name, o.s_name);
		if (*this == o)
			return false;
		// animal_mutex.lock();
		std::lock_guard<std::mutex> l(animal_mutex);
		if (auto it = find_friend(o))
			l_friends.erase(it.value());
		if (auto it = o.find_friend(*this))
			o.l_friends.erase(it.value());
		// animal_mutex.unlock();
		return true;
	}
};

int main() {
	auto cat1    = std::make_unique<Animal>("cat");
	auto tiger1  = std::make_unique<Animal>("tiger");
	auto dog1    = std::make_unique<Animal>("dog");
	auto rabbit1 = std::make_unique<Animal>("rabbit");

	auto a1 = std::async([&] { cat1->add_friend(*tiger1); });
	auto a2 = std::async([&] { cat1->add_friend(*rabbit1); });
	auto a3 = std::async([&] { rabbit1->add_friend(*dog1); });
	auto a4 = std::async([&] { rabbit1->add_friend(*cat1); });
	a1.wait();
	a2.wait();
	a3.wait();
	a4.wait();

	auto p1 = std::async([&] { cat1->print(); });
	auto p2 = std::async([&] { tiger1->print(); });
	auto p3 = std::async([&] { dog1->print(); });
	auto p4 = std::async([&] { rabbit1->print(); });
	p1.wait();
	p2.wait();
	p3.wait();
	p4.wait();

	auto a5 = std::async([&] { cat1->delete_friend(*rabbit1); });
	a5.wait();
	auto p5 = std::async([&] { cat1->print(); });
	auto p6 = std::async([&] { rabbit1->print(); });
	return 0;
}

// output:

/* add_friend cat -> tiger
 * add_friend cat -> rabbit
 * add_friend rabbit -> dog
 * add_friend rabbit -> cat
 * Animal: cat, friends: tiger, rabbit
 * Animal: tiger, friends: cat
 * Animal: dog, friends: rabbit
 * Animal: rabbit, friends: cat, dog
 * delete_friend cat -> rabbit
 * Animal: cat, friends: tiger
 * Animal: rabbit, friends: dog */
```
