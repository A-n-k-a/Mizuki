---
title: "Software Development with C and Cpp Week12 Lecture"
published: 2025-12-15
pinned: false
description: "Revision"
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

# Revision
## Key points
- Basic
    - Reference and Pointer
    - Constructor and Destructor
    - Inheritance & Polymorphism
    - Static
    - STL
- Programming
    - Inherit and virtual
    - Defining method/function
    - Template
    - IO Stream
    - Smart pointer
    - Overriding andOverloading
    - Compile guard

## Consolidation1
- What are the main features of the Object-Oriented?
    - Encapsulation
    - Inheritance
    - Polymorphism
- How to describe these features?  
[Check this](features-of-object-oriented/)

What is not correct about the derived class?  
\[This question has multiple correct answers. You must select all correct answers.\]  
(A) A derived class can inherit any member function of the base class.  
> 可以继承，但继承下来的东西不一定所有的都能用

<mark>(B) Derived class can override all existing member functions of the base class.</mark>  
> Need `virtual` and `override`

(C) Derived classes can have their own new members.  
<mark>(D) Derived classes cannot initialize data members of the base class.</mark>  
(E) A derived class can be a base class of another class.  

---

Wrapping data and its related functionality into a single entity is known as:  
(A) Abstraction.  
<mark>(B) Encapsulation.</mark>  
(C) Inheritance.  
(D) Polymorphism.  
(E) Modularity.  

## Consolidation2
- How to reuse the code effectively?
    - Use `.h`
- How to implement a template class?  
[See Week7 Lecture](/posts/l5-cpp-week7-lecture/#defining-a-template-class)
```cpp
template <typename T> class Name {
    Name<T>;
}
```
- How to avoid compile conflict?
    - Use compile guard: avoid compile the same code multiple times  
[See Week8 Lecture](/posts/l5-cpp-week8-lecture/#declaration-conflicts-solution)

Which of the following user-defined header file extensions is used in C++?  
(A) .dll  
(B) .cpp  
<mark>(C) .h</mark>  
(D) .header  
(E) .obj  

> dll: dynamic linked library

## Consolidation3
- What is the difference between the reference and the pointer?
- When would we use a reference or pointer as the parameter of a function/method?  
[Check this](reference-and-pointer/)

Which of the following statements is not correct in relation to reference?  
(A) Reference is the alternate name of the object.  
(B) Reference is the alternate name of the variable.  
(C) Cannot create an array of references.  
<mark>(D) A reference value once defined can be reassigned.</mark>  
(E) A reference value once defined cannot be reassigned.  

## Consolidation4
- What is the features of the stream?
- When would we use `ostream` or `istream`?
- How to use the operator `<<` and `>>` flexibly?  
[See Week9 Lecture](/posts/l5-cpp-week9-lecture/)  

Which of the following statements are correct in terms of the `cin` and the `cout`?  
\[This question has multiple correct answers. You must select all correct answers.\]  
(A) `cin` and `cout` are commands that are used to input and output.  
:spoiler[They are **not commands**; they are **objects** used for input/output.]  
<mark>(B) `cin` is the object of `istream` class, and `cout` is the object of `ostream` class.</mark>  
(C) `cin` and `cout` are standard library functions defined in the `iostream` library file.  
:spoiler[They are **not functions**.]  
<mark>(D) `cin` and `cout` are standard objects defined in the `iostream` library file.</mark>  
<mark>(E) The `cin` object corresponds to the standard input stream, the `cout` object corresponds to the standard output stream.</mark>  

## Consolidation5
- What is the features of the smart pointer?
- When would we use smart pointer?
- What is the different between the `unique_ptr` and `shared_ptr`?  
[Check this](pointers/)

Which of the following statements is correct in relation to smart pointer?  
<mark>(A) Smart pointer is a class object that acts like a pointer but has additional features.</mark>  
(B) We can construct different `unique_ptr` to the same object.  
:spoiler[`unique_ptr` enforces **exclusive ownership**. Two `unique_ptr`s **cannot own the same object**.]  
(C) We can copy a `unique_ptr` but cannot construct any other `unique_ptr` to the same object.  
:spoiler[`unique_ptr` is **not copyable**, only movable.]  
(D) The object to which one `shared_ptr` points should be released after the `shared_ptr` is used out.  
:spoiler[The object is released only when the **last** `shared_ptr` pointing to it goes out of scope or is reset. Multiple `shared_ptr`s can point to the same object through reference counting. The object is deleted when the reference count reaches zero.]  
(E) The `auto_ptr` is not one of smart pointers.  
:spoiler[`auto_ptr` **is** a smart pointer (legacy), but it is **deprecated in C++11 and removed in C++17**.]  

## Consolidation6
- What are the features of the constructor and the destructor?  
[Check this](constructors-and-destructors/)

What will be the output of the following C++ program?  
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
[Click here](consolidation6-program/) for more details.  
> Copy Constructor: `ClassName(const ClassName& other);`

## Consolidation7
```cpp
template <typename T> class Area {
public:
    void setLength(T newValue);
protected:
    T length;
};
```
- How to implement the statement of the template method `setLength()`?
- How to implement two different template methods of the class `Area`, that can calculate the area of a square which uses `length` to be the side length.  
[Check this](implement-template/)  

## Consolidation8
- Your program performs the operation:
```cpp
int x;
std:: ifstream fileStream(“test.txt”);
fileStream >> x;
```
- What will happen if the content of the file is not a number, and how to fix your program?  
[Check this](not-a-number/)  

## Consolidation9
- What is the difference between overloading and overriding?
- How to implement the overloading and overriding?
- What is the purpose of using a static data?  
[Check this](overload-override-static/)  

---

Please find out the bugs that existed in the following programs.
```cpp {3, 6, 9-12, 16, 18, 20, 24, 30, 38, 42-44, 48-51, 53-55, 57}
class Animal {
public:
    static num;
    Animal(int _a);
    int age;
    virtual void noise()=0;
};

Animal::Animal(int _a) :age(_a){num++;}
void Animal::noise(){
    cout<<"animal voice"<<endl;
}

class Dog : public Animal {
public:
    Dog();
    void noise() override;
    voideat(int bone);
};
Dog::Dog(): Animal(1){num++;}
void Dog::noise() {
    cout<<"wang"<<endl;
}
voidDog::eat(int bone){
    cout<<bone<<endl;
}

class Cat: public Animal{
public:
    Cat();
    void noise() override;
    voiddrink();
};

void Cat::noise() {
    cout<<"miao"<<endl;
}
voidCat::drink(){
    cout<<"drink water"<<endl;
}

void bark(Animal *a){
    a->noise();
}

int main()
{
    Animal a(0);
    Animal * pa= new Animal(1);
    Animal * pd= new Dog(10);
    pd->noise(); pd->eat(10);
    Animal * pc= new Cat();
    pc->noise(); pc->drink();
    Dog d(10); Cat c();
    d.noise(); d.eat();
    c.noise(); c.drink();
    bark(d); bark(c);
    cout<<d.num<<endl;
    cout<<Animal::num<<endl;
    return 0;
}
```
[Reference Answer](fix-bugs/)  

## Consolidation10
- What is the difference between the value way and the reference way when defining the variable/object?
- What are the advantages and disadvantages of using a pointer to access the variable or object?
- What is the difference in the ways of allocating and releasing the memory manually in C and C++?  
[Check this](value-reference-pointer-memory/)  

What are the advantages of using pointers to access variables/objects?  
\[This question has multiple correct answers. You must select all correct answers.\]  
<mark>A. Support dynamic memory allocation</mark>  
<mark>B. Enable flexible manipulation of memory addresses</mark>  
<mark>C. Enable flexible access to different objects by using the same pointer.</mark>  
<mark>D. Avoid copying large objects (directly access the original data)</mark>  
E. Eliminate the risk of null pointer dereferencing  
:spoiler[Pointers **do not eliminate** this risk; they **introduce** it. Null pointer dereferencing is a common pointer-related error.]  

## Note
- Please review all the weekly exercises’ solutions.
