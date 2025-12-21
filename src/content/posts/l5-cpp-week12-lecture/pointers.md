---
title: "Pointers"
published: 2025-12-15
pinned: false
description: "Consolidation5"
tags: []
category: "Software Development with C and Cpp"
licenseName: "MIT"
author: "🐦‍🔥不死鸟Anka"
sourceLink: ""
draft: false
date: 2025-12-15
# image:
#   url: ''
#   alt: ''
pubDate: 2025-12-15
---

## 1. Features of Smart Pointers

Smart pointers are **C++ standard library objects** that manage dynamically allocated memory automatically.

### Main Features

* **Automatic memory management (RAII)**
  → Memory is released automatically when the smart pointer goes out of scope.
* **Prevents memory leaks**
  → Eliminates the need for manual `delete`.
* **Ownership semantics**
  → Clearly defines who owns an object.
* **Exception safety**
  → Memory is freed even if an exception occurs.
* **Overloaded operators**
  → Can be used like normal pointers (`*`, `->`).
* **Part of the STL**
  → Defined in `<memory>`.

---

## 2. When Would We Use Smart Pointers?

Use smart pointers **instead of raw pointers** when:

* Managing **dynamically allocated objects**
* You want **automatic lifetime management**
* Writing **exception-safe code**
* Avoiding **memory leaks and dangling pointers**
* Sharing ownership between objects (e.g., graphs, trees)
* Following **modern C++ best practices**

📌 In modern C++, **raw `new` and `delete` should be avoided** in most application code.

---

## 3. Difference Between `unique_ptr` and `shared_ptr`

| Feature            | `unique_ptr`               | `shared_ptr`              |
| ------------------ | -------------------------- | ------------------------- |
| Ownership          | Exclusive (only one owner) | Shared (multiple owners)  |
| Copyable           | ❌ No                       | ✅ Yes                     |
| Movable            | ✅ Yes                      | ✅ Yes                     |
| Reference counting | ❌ No                       | ✅ Yes                     |
| Memory overhead    | Low                        | Higher (due to ref count) |
| Performance        | Faster                     | Slightly slower           |
| Use case           | Single owner resource      | Shared resource           |
| Header             | `<memory>`                 | `<memory>`                |

---

### Example

```cpp
#include <memory>

// unique_ptr
std::unique_ptr<int> p1 = std::make_unique<int>(10);
// std::unique_ptr<int> p2 = p1;  // ❌ error
std::unique_ptr<int> p3 = std::move(p1); // ✅ ownership transferred

// shared_ptr
std::shared_ptr<int> s1 = std::make_shared<int>(20);
std::shared_ptr<int> s2 = s1; // ✅ shared ownership
```

---

## One-Line Exam Summary

* **Smart pointers** automatically manage memory and prevent leaks.
* Use **`unique_ptr`** when there is **one owner**.
* Use **`shared_ptr`** when **multiple owners** need access to the same object.
