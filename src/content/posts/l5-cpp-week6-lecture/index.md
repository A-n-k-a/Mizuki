---
title: "Software Development with C and Cpp Week6 Lecture"
published: 2025-11-03
pinned: false
description: "Consolidation of Coursework1"
tags: []
category: "Software Development with C and Cpp"
licenseName: "MIT"
author: "🐦‍🔥不死鸟Anka"
sourceLink: ""
draft: false
date: 2025-11-03
# image:
#   url: ''
#   alt: ''
pubDate: 2025-11-03
---

# Consolidation of Coursework1
## Class test 1
- All questions are related to the coursework 1, in terms of
    - the features of the OO programming
    - the implementation of creating a class with proper structure
    - the implementation of methods with proper parameters
    - the proper syntax
    - the proper logic

---

- Two hours, book-closed test this Wednesday, 2-4 PM
- It weighs 50% of all coursework parts, as well as 25% of the whole module.

<table>
    <thead>
        <tr>
        <th></th> <!-- 第一列无表头 -->
        <th><center>Components</center></th> <!-- 第二列表头 -->
        <th>Weight</th> <!-- 第三列表头 --> </tr>
    </thead>
    <tbody>
        <tr>
            <td>Section A</td>
            <td><center>MCQ (Multiple Choice Question)</center></td>
            <td>5×5</td>
        </tr>
        <tr>
            <td rowspan="2">Section B</td> <!-- 纵向合并两行 --> 
            <td><center>Find and fix bugs</center></td>
            <td>6×2</td> </tr>
        <tr><!-- 第一列因合并省略 -->
            <td><center>Programming</center></td>
            <td>5+8+15+20</td>
        </tr>
        <tr>
            <td>Section C</td>
            <td><center>Short answer question</center></td>
            <td>5×10</td>
        </tr>
    </tbody>
</table>

## Question example
### MCQ (Multiple Choice Question)
Which of the following statements is a valid reason to use a virtual destructor in a base class?  
    A. To allow the base class to be instantiated as an object.  
    B. To force derived classes to explicitly override the destructor.  
    C. To eliminate compilation warnings related to inheritance.  
    D. To improve the runtime efficiency of destructor calls in the derived class.  
    ✅E. To ensure that the derived class destructor is called when deleting a derived class object through a base class pointer.  

### Find and fix bugs
- There are 2 bugs in the following segment of code.
- Please write down the line numbers and give the corresponding correct code.
```cpp {6,7,12}
class Book {
    protected:
        string bookld;
        string title;
        bool isBorrowed;
    private:
        void Book(string bid, string t, int y) : bookld (bid), title(t), isBorrowed(false) {}
        virtual ~Book() {}
        string getBookid() const { return bookld; }
        string getTitle() const { return title; } 
        bool getlsBorrowed) const { return isBorrowed; }
        bool setBorrowed (bool borrowed) { isBorrowed = borrowed; }
        virtual void displayInfo() {...};
};
```

### Programming
- There is a virtual method `displayInfo()` defined in the class provided in the above example, but without a detailed implementation.
    - Please complete the implementation of the method to make it print all book details (bookId, title, and borrowing status).
```cpp
void Book::displayInfo() {  
    std::cout << "[Book]" << std::endl;  
    std::cout << "UUID: " << getUUID() << std::endl;  
    std::cout << "Book ID: " << getBookId() << std::endl;  
    std::cout << "Title: " << getTitle() << std::endl;  
    std::cout << "Author: " << author << std::endl;  
    std::cout << "Publish Year: " << publishYear << std::endl;  
    std::cout << "Borrowed: " << (getIsBorrowed() ? "Yes" : "No") << std::endl;  
    if (getIsBorrowed() && borrower) {  
        std::cout << "Borrower: ";  
        borrower->displayInfo();  
        std::cout << "Borrow Date: " << borrowDate.toString() << std::endl;  
    }  
}
```
- Please create a derived class `Novel`, which inherits from the base class `Book`.
    - class `Novel` has one new data member: genre, which represents the style of the novel, such as Mystery, Romance,.etc.
    - override the `displayInfo()` method to print all novel details.
```cpp
class Novel : public Book {
private:
    std::string genre;
public:
    Novel(std::string uid, std::string bid, std::string t, std::string a, std::string p, int y, Date d, std::string g)
        : Book(uid, bid, t, a, p, y, d), genre(g) {}
    std::string getGenre() const { return genre; }
    void setGenre(const std::string& g) { genre = g; }
    std::string getCategory() override;
    void displayInfo() override;
};
void Novel::displayInfo() {
    std::cout << "[Novel]" << std::endl;
    std::cout << "UUID: " << getUUID() << std::endl;
    std::cout << "Book ID: " << getBookId() << std::endl;
    std::cout << "Title: " << getTitle() << std::endl;
    std::cout << "Author: " << author << std::endl;
    std::cout << "Publish Year: " << publishYear << std::endl;
    std::cout << "Genre: " << genre << std::endl;
    std::cout << "Borrowed: " << (getIsBorrowed() ? "Yes" : "No") << std::endl;
    if (getIsBorrowed() && borrower) {
        std::cout << "Borrower: ";
        borrower->displayInfo();
        std::cout << "Borrow Date: " << borrowDate.toString() << std::endl;
    }
}
```

### Short answer question
Please elaborate on the core features of the Object-Oriented programming language.

---

Object-Oriented Programming (OOP) is a paradigm that organizes software design around **objects**—entities that bundle both **data** (attributes or fields) and **behavior** (methods or functions). The goal is to model real-world systems in a more modular, reusable, and maintainable way. The **core features (or principles)** of OOP are typically summarized as **Encapsulation, Abstraction, Inheritance, and Polymorphism.**

#### 🔹 1. Encapsulation
**Encapsulation** means **wrapping data (variables)** and **functions (methods)** into a single unit, typically a class.  
It also allows **data hiding**, meaning internal details of the class are protected from external access.  
Example:
```cpp
#include <iostream>
using namespace std;

class BankAccount {
private:
    double balance;  // Private data member – cannot be accessed directly outside the class

public:
    // Constructor
    BankAccount(double initialBalance) {
        balance = (initialBalance > 0) ? initialBalance : 0;
    }

    // Public method to modify data safely
    void deposit(double amount) {
        if (amount > 0) balance += amount;
    }

    // Public method to access data safely
    double getBalance() const {
        return balance;
    }
};

int main() {
    BankAccount account(100.0);
    account.deposit(50.0);
    cout << "Current balance: $" << account.getBalance() << endl;
    return 0;
}

```
✅ **Key idea:** The `balance` is _encapsulated_ — only accessible and modifiable through controlled public methods.

#### 🔹 2. Abstraction
**Abstraction** focuses on **showing only the essential features** of an object while hiding the implementation details.  
In C++, this is often achieved using **abstract classes** (classes with pure virtual functions).  
Example:
```cpp
#include <iostream>
using namespace std;

// Abstract base class
class Shape {
public:
    virtual void draw() = 0;  // Pure virtual function (no implementation)
};

// Derived class
class Circle : public Shape {
public:
    void draw() override {
        cout << "Drawing a circle" << endl;
    }
};

int main() {
    Shape* shape = new Circle();  // Base class pointer to derived class object
    shape->draw();
    delete shape;
    return 0;
}

```
✅ **Key idea:** The user interacts with `Shape` through the abstract interface, without worrying about how `draw()` is implemented.

#### 🔹 3. Inheritance
**Inheritance** allows a class (child or derived class) to **inherit properties and behaviors** from another class (parent or base class).  
This promotes **code reuse** and logical hierarchy.  
Example:
```cpp
#include <iostream>
using namespace std;

class Animal {
public:
    void eat() {
        cout << "This animal eats food." << endl;
    }
};

class Dog : public Animal {  // Dog inherits from Animal
public:
    void bark() {
        cout << "Dog barks." << endl;
    }
};

int main() {
    Dog d;
    d.eat();   // Inherited from Animal
    d.bark();  // Defined in Dog
    return 0;
}

```
✅ **Key idea:** The `Dog` class reuses the behavior from `Animal` while adding its own (`bark()`).

#### 🔹 4. Polymorphism
**Polymorphism** means “many forms” — allowing the same function call to behave differently depending on the object type.  
There are two types in C++:
##### a) Compile-Time Polymorphism (Function Overloading)
Multiple functions with the same name but different parameter types or counts.
```cpp
#include <iostream>
using namespace std;

class Printer {
public:
    void print(int i) { cout << "Printing int: " << i << endl; }
    void print(double d) { cout << "Printing double: " << d << endl; }
    void print(string s) { cout << "Printing string: " << s << endl; }
};

int main() {
    Printer p;
    p.print(5);
    p.print(3.14);
    p.print("Hello");
    return 0;
}

```
##### b) Runtime Polymorphism (Function Overriding with Virtual Functions)
When a derived class **overrides** a virtual function from the base class, and the correct function is called dynamically at runtime.
```cpp
#include <iostream>
using namespace std;

class Animal {
public:
    virtual void makeSound() {  // Virtual function
        cout << "Some generic sound" << endl;
    }
};

class Cat : public Animal {
public:
    void makeSound() override {  // Override base method
        cout << "Meow" << endl;
    }
};

int main() {
    Animal* a = new Cat();  // Base pointer to derived object
    a->makeSound();         // Calls Cat’s version at runtime
    delete a;
    return 0;
}

```
✅ **Key idea:** Even though `a` is of type `Animal*`, the **Cat** version of `makeSound()` runs — this is **dynamic dispatch**.

#### 🧩 Summary Table

| **OOP Feature**   | **Description**                                   | **C++ Mechanism**                        | **Example Keyword/Concept**     |
| ----------------- | ------------------------------------------------- | ---------------------------------------- | ------------------------------- |
| **Encapsulation** | Hiding data and providing controlled access       | Access specifiers                        | `private`, `public`             |
| **Abstraction**   | Hiding implementation details, exposing interface | Abstract classes, pure virtual functions | `virtual void draw() = 0;`      |
| **Inheritance**   | Reusing code from base classes                    | Class inheritance                        | `class Dog : public Animal`     |
| **Polymorphism**  | Same interface, different behavior                | Overloading & Overriding                 | `virtual`, function overloading |

## Note
- If you complete the implementation of coursework 1 by yourself, it is not necessary to worry about it.
- Read the questions carefully.
- Try to write the code with good handwriting.
- You must submit the project source code file to the student's website by this Friday, 16:00. Otherwise, you will get zero, even if you got a good performance on the class test 1.
