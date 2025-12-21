---
title: "Implement Template"
published: 2025-12-15
pinned: false
description: "Consolidation7"
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

```cpp
template <typename T> class Area {
public:
    void setLength(T newValue);
protected:
    T length;
};
```

## 1. Implementing the template method `setLength()`

For **class templates**, method implementations must also be **templated** and usually placed in the **header file**.

```cpp
template <typename T>
void Area<T>::setLength(T newValue) {
    length = newValue;
}
```

---

## 2. Implementing two different template methods to calculate the area of a square

We can interpret “two different template methods” in two common, correct ways:

### Option 1: Two methods with different return types / purposes

```cpp
template <typename T>
class Area {
public:
    void setLength(T newValue);
    T getArea() const;           // returns area
    void printArea() const;      // prints area
protected:
    T length;
};
```

**Implementations:**

```cpp
template <typename T>
T Area<T>::getArea() const {
    return length * length;
}

template <typename T>
void Area<T>::printArea() const {
    std::cout << length * length << std::endl;
}
```

---

### Option 2: Method template specialization using different numeric types

If “two different template methods” means **overloading** for different types:

```cpp
template <typename T>
class Area {
public:
    void setLength(T newValue);
    T area() const;
};
```

```cpp
template <typename T>
T Area<T>::area() const {
    return length * length;
}
```

Then specialize if needed (example):

```cpp
template <>
double Area<double>::area() const {
    return length * length;
}
```

---

## Complete Minimal Example

```cpp
#include <iostream>
using namespace std;

template <typename T>
class Area {
public:
    void setLength(T newValue);
    T getArea() const;
protected:
    T length;
};

template <typename T>
void Area<T>::setLength(T newValue) {
    length = newValue;
}

template <typename T>
T Area<T>::getArea() const {
    return length * length;
}
```

---

## Exam-Friendly Summary

* Template member functions must be implemented using
  `template<typename T> return_type Class<T>::function(...)`
* Area of a square is computed as
  `length * length`
* Template methods are usually implemented in **header files**
