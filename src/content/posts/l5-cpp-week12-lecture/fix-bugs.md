---
title: "Find and Fix Bugs"
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

# Please find out the bugs that existed in the following programs.
```cpp {3, 6, 9-12, 16, 18, 20, 24, 30, 38, 42-44, 48-51, 53-55, 57}
class Animal {
public:
    static num; //static int num;
    Animal(int _a);
    int age;
    virtual void noise()=0;
};
//Can not give defination to a virtual function
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
//Need to define constructor if defined in public:Cat();
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
    Animal a(0); //pure virtual class
    Animal * pa= new Animal(1); //same
    Animal * pd= new Dog(10);
    pd->noise(); pd->eat(10);//base class pointer cannot point to function only belongs to subclass
    Animal * pc= new Cat();
    pc->noise(); pc->drink();
    Dog d(10); Cat c();
    d.noise(); d.eat();
    c.noise(); c.drink();
    bark(d); bark(c);//bark(&d); bark(&c); or use "->"
    cout<<d.num<<endl;
    cout<<Animal::num<<endl;
    return 0;
}
```

## 1. Class `Animal`

### ❌ Line 3

```cpp
static num;
```

**Bug:** Missing type.
**Fix:**

```cpp
static int num;
```

---

### ❌ Line 6

```cpp
virtual void noise()=0;
```

This is **correct**, but it makes `Animal` an **abstract class**.

---

### ❌ Lines 9–12

```cpp
//Can not give defination to a virtual function
Animal::Animal(int _a) :age(_a){num++;}
void Animal::noise(){
    cout<<"animal voice"<<endl;
}
```

**Bug:**

* A **pure virtual function (`=0`) must not have a definition** if you intend the class to stay abstract (in this context/exam assumption).

**Fix (choose ONE):**

**Option A (keep Animal abstract – recommended):**

```cpp
// REMOVE this function entirely
// void Animal::noise() { ... }
```

**Option B (make it non-pure):**

```cpp
virtual void noise();   // remove =0
```

---

### ❌ Missing definition of static member

**Bug:** Static data member must be defined outside the class.

**Fix (add globally):**

```cpp
int Animal::num = 0;
```

---

## 2. Class `Dog`

### ❌ Line 16

```cpp
Dog();
```

But later used as:

```cpp
Dog d(10);
```

**Bug:** Constructor signature mismatch.
**Fix:**

```cpp
Dog(int age);
```

---

### ❌ Line 18

```cpp
voideat(int bone);
```

**Bug:** Missing space and return type.
**Fix:**

```cpp
void eat(int bone);
```

---

### ❌ Line 20

```cpp
Dog::Dog(): Animal(1){num++;}
```

**Bug:** Constructor mismatch with declaration.
**Fix:**

```cpp
Dog::Dog(int age) : Animal(age) {}
```

---

### ❌ Line 24

```cpp
voidDog::eat(int bone){
```

**Bug:** Missing space.
**Fix:**

```cpp
void Dog::eat(int bone){
```

---

## 3. Class `Cat`

### ❌ Line 30

```cpp
Cat();
```

But constructor is **never defined**.

**Fix:**

```cpp
Cat::Cat() : Animal(1) {}
```

---

### ❌ Line 38

```cpp
voidCat::drink(){
```

**Bug:** Missing space.
**Fix:**

```cpp
void Cat::drink(){
```

---

## 4. Function `bark`

### ❌ Line 42-44

```cpp
void bark(Animal *a){
    a->noise();
}
```

✔️ Correct (no bug here)

---

## 5. `main()` Function

### ❌ Line 48

```cpp
Animal a(0);
```

**Bug:** Cannot instantiate an **abstract class**.
**Fix:** ❌ Remove this line.

---

### ❌ Line 49

```cpp
Animal * pa= new Animal(1);
```

**Bug:** Same reason — abstract class.
**Fix:** ❌ Remove this line.

---

### ❌ Line 50

```cpp
Animal * pd= new Dog(10);
```

✔️ Correct after fixing `Dog(int)`.

---

### ❌ Line 51

```cpp
pd->eat(10);
```

**Bug:** Base-class pointer cannot access derived-only members.
**Fix (cast or use Dog pointer):**

```cpp
static_cast<Dog*>(pd)->eat(10);
```

---

### ❌ Line 53

```cpp
pc->drink();
```

Same bug as above.
**Fix:**

```cpp
static_cast<Cat*>(pc)->drink();
```

---

### ❌ Line 54

```cpp
Dog d(10); Cat c();
```

**Bug:** `Cat c();` is a **function declaration**, not an object.

**Fix:**

```cpp
Dog d(10);
Cat c;
```

---

### ❌ Line 55

```cpp
d.eat();
```

**Bug:** Missing argument.
**Fix:**

```cpp
d.eat(1);
```

---

### ❌ Line 57

```cpp
bark(d); bark(c);
```

**Bug:** `bark()` expects a pointer.
**Fix:**

```cpp
bark(&d);
bark(&c);
```

---

## ✅ Summary of Key Bug Types (Exam Tip)

* Missing types (`static int`)
* Abstract class instantiation
* Pure virtual function misuse
* Constructor mismatch
* Syntax errors (`voidDog`, `voideat`)
* Base pointer accessing derived-only methods
* Most-vexing parse (`Cat c();`)
