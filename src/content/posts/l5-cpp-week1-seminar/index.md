---
title: "Software Development with C and Cpp Week1 Seminar"
published: 2025-09-23
pinned: false
description: "Exercises: output, input, loop, function and switch"
tags: []
category: "Software Development with C and Cpp"
licenseName: "MIT"
author: "🐦‍🔥不死鸟Anka"
sourceLink: ""
draft: false
date: 2025-09-23
# image:
#   url: ''
#   alt: ''
pubDate: 2025-09-23
---

活动域/生存域/生存周期
使用cin时可不用&（reference）

```cpp
#include <iostream>  
using namespace std;  
int main() {  
    char ch[5] = {[0] = 'A', [1] = 'B', [2] = 'C'};  
    cout << ch;  
    return 0;  
}
```
字符型数组是<mark>一种数据结构，用于存储一系列相同数据类型的字符元素，每个元素都是一个字符</mark>。在许多编程语言中，字符型数组是存储字符串的基本方式，通过添加一个特殊的空字符('\0') 作为字符串的结尾标记。

当周习题参考答案：
```c
#include <stdio.h>
int main() {
    for (int x=1; x<21; x++) {
        printf("%d and then...\n", x);
    }
    printf("that's all.\n");
    return 0;
}
```
```cpp
#include <iostream>
using namespace std;
int main() {
    for (uint8_t x=1; x<21; x++) {
        cout << +x << " and then..."<< endl;
    }
    cout << "that's all." << endl;
    return 0;
}
```
```c
#include <stdio.h>
int main() {
    int number;
    printf("What number you want to count up to?\n");
    scanf("%d", &number);
    while (number < 1 || number > 100) {
        printf("Please enter a number between 1 and 100: ");
        scanf("%d", &number);
    }
    for (int x=1; x<number+1; x++) {
        printf("%d and then...\n", x);
    }
    printf("that's all.\n");
    return 0;
}
```
```cpp
#include <iostream>
using namespace std;
int main() {
    uint16_t number;
    cout << "What number you want to count up to?" << endl;
    cin >> number;
    // while (number < 1 || number > 100) {
    //     cout << "Please enter a number between 1 and 100: ";
    //     cin >> number;
    // }
    do
    {
        cout << "Please enter a number between 1 and 100: ";
        cin >> number;
    } while (number < 1 || number > 100);
    for (uint16_t x=1; x<number+1; x++) {
        cout << +x << " and then..."<< endl;
    }
    cout << "that's all." << endl;
    return 0;
}
```
```cpp
#include <iostream>
using namespace std;
bool EvenOrOdd(int number) {
    if (number % 2 == 0) {
        return true; // Even
    } else {
        return false; // Odd
    }
}
int main() {
    int16_t number;
    cout << "Enter an integer: ";
    cin >> number;
    if (EvenOrOdd(number)) {
        cout << number << " is even." << endl;
    } else {
        cout << number << " is odd." << endl;
    }
    return 0;
}
```
```cpp
#include <iostream>
using namespace std;
int main() {
    string name;
    cout << "Hello! What's your name?" << endl;
    cin >> name;
    cout << "Hello, " << name << "!" << endl;
    return 0;
}
```
```cpp
#include <iostream>
using namespace std;
int main() {
    string gender;
    cout << "Please enter your gender: (man / woman)";
    cin >> gender;
    while (gender != "man" && gender != "woman")
    {
        cout << "Please enter your gender: (man / woman)";
        cin >> gender;
    }
    int age;
    cout << "Please enter your age: ";
    cin >> age;
    if (gender == "man")
    {
        switch (age)
        {
        case 25:
        case 42:
        case 61:
            cout << "You are in your yakudoshi year!" << endl;
            break;
        default:
            cout << "You are not in your yakudoshi year." << endl;
            break;
        }
    } else if (gender == "woman")
    {
        switch (age)
        {
            case 19:
                cout << "You are in your yakudoshi year!" << endl;
                break;
            case 33:
                cout << "You are in your yakudoshi year!" << endl;
                break;
            case 37:
                cout << "You are in your yakudoshi year!" << endl;
                break;
            default:
                cout << "You are not in your yakudoshi year." << endl;
                break;
        }
    }
    return 0;
}
```