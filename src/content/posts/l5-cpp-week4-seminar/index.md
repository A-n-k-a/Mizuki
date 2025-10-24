---
title: "Software Development with C and Cpp Week4 Seminar"
published: 2025-10-21
pinned: false
description: "Classes"
tags: []
category: "Software Development with C and Cpp"
licenseName: "MIT"
author: "🐦‍🔥不死鸟Anka"
sourceLink: ""
draft: false
date: 2025-10-21
# image:
#   url: ''
#   alt: ''
pubDate: 2025-10-21
---

# Classes
Complete each of the exercises below using CLion. Test each exercise after implementing it; the exercise is not complete until the program works.
1.	Create a C++ project. Cut and paste the following code that defines and uses a class.
```cpp
#include <iostream>
#include <cstdlib>

using std::string;
using std::cout;
using std::endl;

class FidgetSpinner {
public:
    string colour;
    FidgetSpinner(const char *_colour);
    ~FidgetSpinner();
    void spin();
protected:
    int size;
    int spins;
};

FidgetSpinner::FidgetSpinner(const char *_colour) :
        colour(_colour), size(5), spins(0)
{
    cout << "Created a " << colour << " FidgetSpinner." << endl;
}

FidgetSpinner::~FidgetSpinner() {
    cout << "Destroyed a " << colour << " FidgetSpinner." << endl;
}

void FidgetSpinner::spin() {
    spins++;
    cout << "A " << colour << " spinner has spun " << spins << " time(s)." << endl;
}


int main() {

    FidgetSpinner v("Value Veridian"); // veridian 绿色颜料
    FidgetSpinner x();
    v.spin();
    
    FidgetSpinner *r = new FidgetSpinner("Reference Red");
    r->spin();
    delete r;

}
```
Test and run this program. Why does the message "Destroyed a Value Veridian FidgetSpinner" appear at the end of the program? (It is supposed to.)

> [!NOTE]
> `FidgetSpinner x();`不能正确工作，因为C++ 的语法规则在解析时，**优先认为这是一个函数声明**（这是为了和 C 语言兼容）。  
> 所以任何“看起来像函数声明”的写法，都会被编译器优先当成函数声明来处理。  
> 但如果写：`FidgetSpinner x;    // 明确：对象定义，调用无参构造`  
> 编译器就能确定这是在定义对象。  
> 但是由于我们覆盖了默认的无参构造函数，这样写也不行。  

> [!TIP]
> `const`是constant的简写，是C++中极为常见且重要的关键字，主要功能是设置某些参数不可修改。  
> `static`是静态变量，存储在**静态存储区**（存储在静态存储区的变量，如果不显式地对其进行初始化，系统会将其初始化为0），在程序执行期间，**对应的存储空间不会释放**，一直到程序结束才会释放。在声明后的任意位置均可调用和更改值。  
> 另，和Java一样，C++也支持override和overload

2.	Modify the program to add a constructor to `FidgetSpinner` that allows both the color and the size to be specified. Modify both of the statements that construct `FidgetSpinners` to specify different sizes for them.
3.	Add some simple physics to the fidget spinners:
    - Add two new protected data members, `velocity` and `angle`, to the class. Both should be initialized to 0.
    - Modify the `spin` method to take a parameter `strength`. Instead of modifying `spins`, it should add `strength` to `velocity`.
    - Add a `tick` method (to represent time passing). It should do two things:
        - Add `velocity` to `angle`. Then, if `angle` is greater than 10, subtract 10 from it until it is less than 10, and add 1 to `spins` for each 10 subtracted. If `spins` was changed, print out the number of times the spinner has now spun.
        - Lower `velocity` by an amount equal to `size`. If this reduces it to zero or below, `velocity` should be set to zero, and it should print a message that the spinner has stopped, and what angle it stopped at. 
    Modify the program to make the "reference red" spinner size 3, and spin it at strength 10; then call `tick` on it 5 times. It should spin twice and then stop at angle 2. (10 + (10-3) + (10-3-3) + (10-3-3-3) = 22.)
4.	Modify the main program spin both spinners and then loop calling `tick` on them both, until they both stop. You will need to add new methods to the class to achieve this.
5.	Modify the program to create 5 spinners in an array, spin them all, and then call `tick` on them until all of them are stopped. (You will need to store them in the array by reference, unless you want to initialize them all in one statement!)
6.	C++ supports `static` methods and properties in the same way that Java does, except that their initialization must occur **outside** the class definition (they must still be declared inside it). A static item `a` in class `b` is addressed as `b::a`. Modify the `FidgetSpinner` class so that the array of 5 spinners is stored inside the class and spinners are automatically added to or removed from it when they are created. If more than 5 spinners are created at once, the extras should not be stored in the array.

> [!NOTE]
> 关于写不写explicit的问题：  
> [C++构造函数加不加explicit？90%程序员都踩过的坑！（附最佳实践）_explicit 关键字 可以无脑加么-CSDN博客](https://blog.csdn.net/qq_30883899/article/details/147279009)  
> [C++11 新特性 之 explicit关键字 - 显示构造与隐式构造_显示构造和隐式构造-CSDN博客](https://blog.csdn.net/cpp_learner/article/details/117883912)  
> [【重学 C++】06 | C++该不该使用 explicit](https://mp.weixin.qq.com/s/quH7oRSdnLG2YHon2B_pvA)  
> [彻底理解c++的隐式类型转换 - apocelipes - 博客园](https://www.cnblogs.com/apocelipes/p/14415033.html)  
> [c++ 写不写explicit有无区别 - Google 搜索](https://www.google.com/search?q=c%2B%2B+%E5%86%99%E4%B8%8D%E5%86%99explicit%E6%9C%89%E6%97%A0%E5%8C%BA%E5%88%AB&newwindow=1)

参考答案：
```cpp
#include <iostream>  
#include <cstdlib>  
  
using std::string;  
using std::cout;  
using std::endl;  
  
class FidgetSpinner {  
public:  
    string colour;  
    explicit FidgetSpinner(const char *_colour);  
    FidgetSpinner(const char *_colour, int _size);  
    ~FidgetSpinner();  
    void spin();  
    void spin(int strength);  
    void tick();  
    int getVelocity() const; // new: allow external code to check if spinner is still moving  
    
    // Registry of created spinners (up to MAX_STORED)    static const int MAX_STORED = 5;  
    static FidgetSpinner* stored[MAX_STORED];  
    static int storedCount;  
    
    // Accessors for the registry  
    static int getStoredCount();  
    static FidgetSpinner* getStoredAt(int idx);  
    
protected:  
    int size;  
    int spins;  
    int velocity;  
    int angle;  
};  
  
FidgetSpinner* FidgetSpinner::stored[FidgetSpinner::MAX_STORED] = { nullptr };  
int FidgetSpinner::storedCount = 0;  
  
FidgetSpinner::FidgetSpinner(const char *_colour) :  
        colour(_colour), size(5), spins(0), velocity(0), angle(0)  
{  
    cout << "Created a " << colour << " FidgetSpinner." << endl;  
}  
FidgetSpinner::FidgetSpinner(const char *_colour, const int _size) :  
        colour(_colour), size(_size), spins(0), velocity(0), angle(0)  
{  
    cout << "Created a " << colour << " FidgetSpinner." << endl;  
    // Add to registry if space remains  
    if (storedCount < MAX_STORED) {  
        stored[storedCount++] = this;  
    }  
}  
  
FidgetSpinner::~FidgetSpinner() {  
    cout << "Destroyed a " << colour << " FidgetSpinner." << endl;  
    // Remove from registry if present and compact the array  
    for (int i = 0; i < storedCount; ++i) {  
        if (stored[i] == this) {  
            // shift left  
            for (int j = i; j + 1 < storedCount; ++j) stored[j] = stored[j + 1];  
            stored[storedCount - 1] = nullptr;  
            --storedCount;  
            break;  
        }  
    }  
}  
  
void FidgetSpinner::spin() {  
    spins++;  
    cout << "A " << colour << " spinner has spun " << spins << " time(s)." << endl;  
}  
void FidgetSpinner::spin(int strength) {  
    // Previously this incremented the spins counter; change to add to velocity  
    velocity += strength;  
    cout << "A " << colour << " spinner with size " << size << " was given strength " << strength << "." << endl;  
}  
  
void FidgetSpinner::tick()  
{  
    // Add velocity to angle  
    int previousVelocity = velocity;  
    angle += velocity;  
    
    // For every full 10 units of angle, reduce angle by 10 and increment spins  
    int spinsBefore = spins;  
    while (angle >= 10) {  
        angle -= 10;  
        spins += 1;  
    }  
    angle = angle % 10;  
    spins = (int)(angle / 10);  
    
    // If spins changed, print the updated spins count  
    if (spins != spinsBefore) {  
        cout << "A " << colour << " spinner with size " << size << " has spun " << spins << " time(s)." << endl;  
    }  
    
    // Lower velocity by an amount equal to size  
    velocity -= size;  
    if (velocity <= 0) {  
        // If spinner was moving and now stopped, print once  
        if (previousVelocity > 0) {  
            cout << "A " << colour << " spinner has stopped at angle " << angle << "." << endl;  
        }  
        velocity = 0;  
    }  
}  
  
int FidgetSpinner::getVelocity() const {  
    return velocity;  
}  
  
int FidgetSpinner::getStoredCount() {  
    return storedCount;  
}  
  
FidgetSpinner* FidgetSpinner::getStoredAt(int idx) {  
    if (idx < 0 || idx >= storedCount) return nullptr;  
    return stored[idx];  
}  
  
int main() {  
    // FidgetSpinner *FidgetSpinners[5];  
    // Create 5 spinners (they will automatically register)    
    FidgetSpinner *s1 = new FidgetSpinner("Reference Red", 3);  
    FidgetSpinner *s2 = new FidgetSpinner("Blue Bolt", 4);  
    FidgetSpinner *s3 = new FidgetSpinner("Green Glide", 5);  
    FidgetSpinner *s4 = new FidgetSpinner("Yellow Yaw", 6);  
    FidgetSpinner *s5 = new FidgetSpinner("Purple Pulse", 7);  
    
    // Give each spinner an initial strength (these are the same strengths as before)  
    int strengths[5] = {10, 9, 8, 7, 6};  
    for (int i = 0; i < 5; ++i) {  
        FidgetSpinner* cur = FidgetSpinner::getStoredAt(i);  
        if (cur) cur->spin(strengths[i]);  
    }  
    
    // Tick all registered spinners until all have stopped  
    bool anyMoving = true;  
    while (anyMoving) {  
        anyMoving = false;  
        int count = FidgetSpinner::getStoredCount();  
        for (int i = 0; i < count; ++i) {  
            FidgetSpinner* cur = FidgetSpinner::getStoredAt(i);  
            if (cur && cur->getVelocity() > 0) {  
                cur->tick();  
                anyMoving = true;  
            }  
        }  
    }  
    
    // Clean up (destroy created spinners)  
    delete s1;  
    delete s2;  
    delete s3;  
    delete s4;  
    delete s5;  
    
    return 0;  
    
}
```
