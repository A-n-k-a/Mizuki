---
title: "Overload, Override and Static"
published: 2025-12-15
pinned: false
description: "Consolidation9"
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

## 1. Difference Between Overloading and Overriding

| Aspect               | Overloading                                           | Overriding                                           |
| -------------------- | ----------------------------------------------------- | ---------------------------------------------------- |
| Definition           | Same function name with **different parameter lists** | Redefining a **virtual function** in a derived class |
| Inheritance required | ❌ No                                                  | ✅ Yes                                                |
| Parameters           | Must be **different**                                 | Must be **the same**                                 |
| Return type          | Can differ (with rules)                               | Must be the **same or covariant**                    |
| Binding              | **Compile-time** (static binding)                     | **Run-time** (dynamic binding)                       |
| Keyword needed       | ❌ No                                                  | `virtual` (base), `override` (derived, recommended)  |
| Polymorphism         | Compile-time polymorphism                             | Run-time polymorphism                                |

---

## 2. How to Implement Overloading and Overriding

---

### (A) Function Overloading (Compile-Time Polymorphism)

```cpp
class Math {
public:
    int add(int a, int b) {
        return a + b;
    }

    double add(double a, double b) {
        return a + b;
    }
};
```

📌 Same function name, **different parameter types**.

---

### (B) Function Overriding (Run-Time Polymorphism)

```cpp
class Base {
public:
    virtual void show() {
        cout << "Base show" << endl;
    }
};

class Derived : public Base {
public:
    void show() override {
        cout << "Derived show" << endl;
    }
};
```

```cpp
Base* obj = new Derived();
obj->show();   // Output: Derived show
```

📌 Requires:

* Inheritance
* `virtual` function in base class
* Same function signature

---

## 3. Purpose of Using Static Data

A **static data member** belongs to the **class itself**, not to individual objects.

---

### Why Use Static Data?

* **Shared among all objects** of the class
* Maintains **common state**
* Saves memory (only one copy exists)
* Useful for **counting objects**
* Represents class-level information

---

### Example

```cpp
class Counter {
public:
    static int count;
    Counter() { count++; }
};

int Counter::count = 0;
```

```cpp
Counter a, b, c;
cout << Counter::count;  // Output: 3
```

---

## One-Line Exam Summary

* **Overloading**: Same function name, different parameters (compile-time).
* **Overriding**: Redefining a virtual function in a derived class (run-time).
* **Static data**: Shared class-level data used by all objects.
