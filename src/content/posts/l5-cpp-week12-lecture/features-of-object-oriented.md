---
title: "Main Features of the Object-Oriented"
published: 2025-12-15
pinned: false
description: "Consolidation1"
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

## 1. Encapsulation

**What it is:**
Encapsulation means **bundling data and the methods that operate on that data into a single unit (class)** and **restricting direct access** to some of the object’s internal state.

**Why it matters:**

* Protects data from unintended modification
* Improves maintainability and security

**How it works:**

* Use access modifiers (e.g., `private`, `protected`, `public`)
* Expose data through methods (getters/setters)

**Example (conceptual):**
A `BankAccount` class hides the balance and only allows changes through `deposit()` or `withdraw()`.

---

## 2. Inheritance

**What it is:**
Inheritance allows a **new class (child/subclass)** to reuse and extend the behavior of an **existing class (parent/superclass)**.

**Why it matters:**

* Promotes code reuse
* Establishes a clear “is-a” relationship

**How it works:**

* A child class inherits fields and methods from the parent
* The child can add new features or override existing ones

**Example (conceptual):**
A `Car` class inherits from a `Vehicle` class and adds car-specific behavior.

---

## 3. Polymorphism

**What it is:**
Polymorphism means **“many forms”**—the same method name can behave **differently depending on the object** that calls it.

**Why it matters:**

* Makes code flexible and extensible
* Allows one interface to work with different implementations

**How it works:**

* Method overriding (runtime polymorphism)
* Method overloading (compile-time polymorphism, in some languages)

**Example (conceptual):**
A `draw()` method works differently for `Circle`, `Rectangle`, and `Triangle` objects.

---

## 4. Abstraction (often included as a main feature)

**What it is:**
Abstraction focuses on **what an object does rather than how it does it** by exposing only essential features and hiding complex implementation details.

**Why it matters:**

* Reduces complexity
* Makes systems easier to understand and use

**How it works:**

* Abstract classes
* Interfaces

**Example (conceptual):**
A `Payment` interface defines `pay()`, while `CreditCardPayment` and `PayPalPayment` implement it differently.

---

## One-Sentence Summary (Great for Exams)

* **Encapsulation:** Hides data and controls access through methods
* **Inheritance:** Allows a class to reuse and extend another class
* **Polymorphism:** Allows the same method to behave differently for different objects
* **Abstraction:** Shows only essential features and hides implementation details

> [!TIP]
> Refer to [Week6 Lecture](/posts/l5-cpp-week6-lecture/#short-answer-question) for more information.
