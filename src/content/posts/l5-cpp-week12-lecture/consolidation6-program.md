---
title: "Consolidation6 Program's Output"
published: 2025-12-15
pinned: false
description: "Consolidation6"
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

# What will be the output of the following C++ program?  
```cpp
#include <iostream>
using namespace std;
class A{
public:
    A(){ cout<<"Constructor called\n"; }
    ~A(){ cout<<"Destructor called\n"; }
};
int main(int argc, char const *argv[]) {
    A *a = new A[4];
    delete[] a;
    return 0;
}
```

### Code behavior

```cpp
A *a = new A[4];
```

* This dynamically allocates an **array of 4 objects** of class `A`.
* The **constructor is called once for each object**, in order.

```cpp
delete[] a;
```

* This deletes the array.
* The **destructor is called once for each object**, in **reverse order**.

---

### Order of calls

1. **Constructors** (called 4 times):

   * Object 1
   * Object 2
   * Object 3
   * Object 4

2. **Destructors** (called 4 times, reverse order):

   * Object 4
   * Object 3
   * Object 2
   * Object 1

---

### Output

```console
Constructor called
Constructor called
Constructor called
Constructor called
Destructor called
Destructor called
Destructor called
Destructor called
```

---

### Key Concept (Exam Tip)

* `new[]` → constructor called for **each element**
* `delete[]` → destructor called for **each element in reverse order**
