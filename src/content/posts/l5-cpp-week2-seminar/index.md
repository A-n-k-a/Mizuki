---
title: "Software Development with C and Cpp Week2 Seminar"
published: 2025-09-30
pinned: false
description: "C and C++: References and arrays"
tags: [Pointer, Reference, Arrays]
category: "Software Development with C and Cpp"
licenseName: "MIT"
author: "🐦‍🔥不死鸟Anka"
sourceLink: ""
draft: false
date: 2025-09-30
# image:
#   url: ''
#   alt: ''
pubDate: 2025-09-30
---

# C and C++: References and arrays
Complete each of the exercises below using CLion. Test each exercise after implementing it; the exercise is not complete until the program works.
1. Create a C project. Copy and paste the program below which uses a pointer to allow a function to update the value of a parameter variable (this is called a _transput parameter_):
```c
#include <stdio.h>
#include <stdint.h>
void addOneTo(uint16_t *x) {
    (*x)++;
}
int main() {
    uint16_t b = 2;
    printf("%i,",b);
    addOneTo(&b);
    printf("%i.\n",b);
}
```
Run the program.  

2. Modify _addOneTo_ so that instead of adding one, it inputs a second number and adds that to the given variable. _(Should the second number be passed as a value or an <span style="color: red">address</span>?)_  
参考答案：
```c
//  
// Created by 不死鸟Anka on 2025/9/29.  
//  
#include <stdio.h>  
#include <stdint.h>  
  
void addOneTo(uint16_t *x, int16_t *y) { // 或者用 y    
    *x = (*x) + *y; // 这里也写y  
}  
  
int main() {  
    uint16_t b = 2;  
    int16_t c = 0;  
    printf("%i,",b);  
    // scanf("%i", &c); 会由于数据类型不匹配导致吞噬  
    scanf("%hd", &c); // 修复：使用%hd匹配int16_t  
    addOneTo(&b, &c);  
    printf("%i.\n",b);  
}
```
3. Write a function _swapInts_ which exchanges the contents of two 16-bit unsigned integer variables.  
参考答案：
```c
//  
// Created by 不死鸟Anka on 2025/9/29.  
//  
#include <stdio.h>  
#include <stdint.h>  
void swapInts(int16_t *x, int16_t *y) {  
    int16_t temp = *x;  
    *x = *y;  
    *y = temp;  
}  
int main() {  
    int16_t a = 5;  
    int16_t b = 10;  
    int16_t *pa = &a;  
    scanf("%hd", &a); // %hu是用于无符号整数uint16_t的，%hd用于有符号整数int16_t  
    scanf("%hd", &b);  
    printf("Before swap: a = %i, b = %i\n", a, b);  
    swapInts(&a, &b);  
    printf("After swap: a = %i, b = %i\n", a, b);  
    return 0;  
}
```
4. Write a C program that asks the user to enter their name, then says "Hello" to them by name.
5. Modify the program so that if the first character of the user's name is an H (or a lowercase h), it is replaced by a ' (apostrophe) in the printout. So entering the name `Harry` should produce `Hello 'arry`.
6. Modify the program so that after greeting the user, it will tell them how many vowels (the letters a, e, i, o, and u) are in their name. _(You'll need to loop through the string. If you remember how C marks the end of a string, you won't need to use the strlen function.)_  
参考答案：
```c
//  
// Created by 不死鸟Anka on 2025/9/29.  
//  
#include <stdio.h>  
int main() {  
    // 传统的C字符串应该一个一个地存储字符，并以空字符'\0'结尾。  
    char teststr[5] = {'A', 'n', 'k', 'a', '\0'};  
    printf("What's your name?\n");  
    char str[] = ""; // char str[100];  
    scanf("%s", str); // scanf("%99s", str);  
    // %99s 限制最多读取 99 个字符，留一个位置给字符串结束符 \0，更安全，能防止溢出。数字可以根据缓冲区大小调整。  
    if (str[0] == 'H' || str[0] == 'h') { // 注：单引号表示char  
        printf("Hello, '%s!\n", str + 1);  
        // str + 1 的意思是指向字符串 str 的第二个字符（即下标为 1 的位置）。  
        // 在 C 语言中，字符串其实是字符数组的首地址，str + 1 就是跳过第一个字符，从第二个字符开始。  
    } else {  
        printf("Hello, %s!\n", str);  
    }  
    int16_t i = 0;  
    int16_t vowels = 0;  
    while (str[i] != '\0') {  
        char c = str[i]; // 也可用 tolower(str[i])        
        if (c == 'a' || c == 'A' ||  
            c == 'e' || c == 'E' ||  
            c == 'i' || c == 'I' ||  
            c == 'o' || c == 'O' ||  
            c == 'u' || c == 'U') {  
            vowels++;  
        }  
        i++;  
    }  
    printf("Your name has %i vowels.\n", vowels);  
    return 0;  
}
```
7. Copy and paste the following program:
```c
#include <stdio.h>
#include <stdint.h>
#include <mem.h>
int main() {
    uint16_t b = 2;
    uint16_t *addressOfB = &b;
    char aString[30];
    strcpy(aString,"Moose!");
    printf("B is %i and the first character of aString is %c.\n",*addressOfB, aString[0]);
    printf("But also, B is %i and the first character of aString is %c.\n",addressOfB[0], *（aString+3));
}
```
It might seem that this program should not work, but it does. Why does the second _printf_ line work? _(Look up in the slides what the \[] operator does, and what the \* operator does.)_  

_The “int \*” is a integrated statement ,it means a pointer type variable._  

_\*aString means the first character in the string because cant handle the string as a whole part_  

---
8. Create a C++ project. Copy and paste the code from exercise 1 above. Run it to confirm that it is still valid in C++. Then modify it to use the C++ "reference" syntax instead of the C "pointer" syntax.  
参考答案：
```cpp
//  
// Created by 不死鸟Anka on 2025/9/29.  
//  
#include <iostream>  
void addOneTo(int16_t &x, int16_t y) {  
    x+=y; // addOneTo(b, 2);中的2是int类型，传递给int16_t参数时会发生缩窄转换，可能导致未定义行为。  
}  
  
int main() {  
    int16_t b = 2;  
    printf("%i,",b);  
    addOneTo(b, 2); // addOneTo(b, static_cast<int16_t>(2));  
    printf("%i.\n",b);  
}
```
9. Do exercises 2 and 3 using the C++ reference syntax.  
参考答案：
```cpp
//  
// Created by 不死鸟Anka on 2025/9/29.  
//  
#include <iostream>  
using namespace std;  
void swapInts(int16_t &x, int16_t &y) {  
    int16_t temp = x;  
    x = y;  
    y = temp;  
}  
int main() {  
    int16_t a = 5;  
    int16_t b = 10;  
    std::cout << "Before swap: a = " << a << ", b = " << b << std::endl;  
    swapInts(a, b);  
    std::cout << "After swap: a = " << a << ", b = " << b << std::endl;  
    return 0;  
}
```
10. Do exercises 5 and 6 using the C++ _string_ object instead of character arrays.  
参考答案：
```cpp
//  
// Created by 不死鸟Anka on 2025/9/29.  
//  
#include <iostream>  
using namespace std;  
int main() {  
    cout << "What's your name?" << endl;  
    string name;  
    cin >> name;  
    if (name[0] == 'H' || name[0] == 'h') {  
        cout << "Hello, '" << name.substr(1) << "!" << endl;  
    } else {  
        cout << "Hello, " << name << "!" << endl;  
    }  
    int16_t i = 0;  
    int16_t vowels = 0;  
    while (name[i] != '\0') {  
        char c = name[i];  
        if (c == 'a' || c == 'A' ||  
            c == 'e' || c == 'E' ||  
            c == 'i' || c == 'I' ||  
            c == 'o' || c == 'O' ||  
            c == 'u' || c == 'U') {  
            vowels++;  
            }  
        i++;  
    }  
    printf("Your name has %i vowels.\n", vowels);  
    return 0;  
}
```
