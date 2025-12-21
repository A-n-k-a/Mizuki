---
title: "Constructors and Destructors"
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

## Features of a Constructor

A **constructor** is a special member function that is **automatically called when an object is created**.

### Main Features

* Has the **same name as the class**
* **No return type** (not even `void`)
* Called **automatically** when an object is instantiated
* Used to **initialize data members**
* Can be **overloaded** (default, parameterized, copy, move)
* Can use an **initializer list**
* Can have **default arguments**
* Usually declared **public**
* Cannot be inherited, but **base-class constructors are called** during object creation

---

## Features of a Destructor

A **destructor** is a special member function that is **automatically called when an object is destroyed**.

### Main Features

* Name is the class name prefixed with `~`
* **No return type and no parameters**
* Called **automatically** when an object goes out of scope or is deleted
* Used to **release resources** (memory, files, locks)
* Only **one destructor per class** (cannot be overloaded)
* Can be **virtual** (important for polymorphism)
* Called in **reverse order of construction**
* Usually declared **public**

---

## Constructor vs Destructor (Quick Comparison)

| Feature     | Constructor       | Destructor         |
| ----------- | ----------------- | ------------------ |
| Purpose     | Initialize object | Clean up resources |
| When called | Object creation   | Object destruction |
| Parameters  | Allowed           | Not allowed        |
| Overloading | Allowed           | Not allowed        |
| Inheritance | Not inherited     | Not inherited      |
| Virtual     | No (usually)      | Yes (often needed) |

---

## One-Line Exam Summary

* A **constructor** initializes an object automatically when it is created.
* A **destructor** cleans up resources automatically when the object is destroyed.
