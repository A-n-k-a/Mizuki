---
title: "Software Development with C and Cpp Week8 Lecture"
published: 2025-11-17
pinned: false
description: "C++ Code Reuse & Building"
tags: []
category: "Software Development with C and Cpp"
licenseName: "MIT"
author: "🐦‍🔥不死鸟Anka"
sourceLink: ""
draft: false
date: 2025-11-17
# image:
#   url: ''
#   alt: ''
pubDate: 2025-11-17
---

# C++ Code Reuse & Building
## Table of content
- Main goal:
- 主要目标：
    - Learn how to share (re-use) functions and classes
    - 学习如何共享（复用）函数和类
    - Good vs. bad ways of re-using
    - 好的复用方式与不好的复用方式
- Closer look: compile and build process
- Closer look: 编译和构建过程
    - How to make the best of existing tools
    - 如何充分利用现有工具

## ReUsingCode
```cpp
#include <iostream>
#include <cmath>

using namespace std;

class Roll {
public:
    Roll (double initialPosition = 0);
    void push (double velocity) ;
    double getPosition ();
    void output();
private:
    double position;
};

Roll::Roll(double initialPosition)
    : position(initialPosition)
{}
void Roll:: push (double velocity) {
    position += copysign(
        velocity*velocity, velocity) ;
}
double Roll:: getPosition (){
    return position;
}
void Roll:: output() t
    cout << "Ball at position "
        << position << endl;
}
int main () {
    Roll r1;
    r1.output ();
    r1.push (3) ;
    r1.output () ;
    return 0;
}
```
Output:
```console
Ball at position 0
Ball at position 9
```

---

Build one new object by <span style="color: red">copy and past</span> the codes  
通过<span style="color: red">复制粘贴</span>代码构建一个新对象  
Another `main()` program
```cpp
int main () {
    Roll r2;
    r2.output ();
    r2.push (-3) ;
    r2.output () ;
    return 0;
}
```
Output:
```console
Ball at position 4
Ball at position -5
```
> Have to compile the same code again.
> Bugs replicate

## Separating a File per Class
```cpp
//Roll.cpp
#include <iostream>
#include <cmath>

using namespace std;

class Roll {
public:
    Roll (double initialPosition = 0);
    void push (double velocity) ;
    double getPosition ();
    void output();
private:
    double position;
};

Roll::Roll(double initialPosition)
    : position(initialPosition)
{}
void Roll:: push (double velocity) {
    position += copysign(
        velocity*velocity, velocity) ;
}
double Roll:: getPosition (){
    return position;
}
void Roll:: output() t
    cout << "Ball at position "
        << position << endl;
}
```
separate the class from the main program file  
将类从主程序文件中分离出来

A new way?

```cpp
//main1.cpp
int main () {
    Roll r1;
    r1.output ();
    r1.push (3) ;
    r1.output () ;
    return 0;
}
```
```cpp
//main2.cpp
int main () {
    Roll r2;
    r2.output ();
    r2.push (-3) ;
    r2.output () ;
    return 0;
}
```
~~Bugs replicate instead of being fixed~~  
~~错误复制而不是被修复~~  
~~No chance of updates~~  
~~没有更新机会~~  
Have to compile same code several times (still)  
必须多次编译相同的代码（仍然）  
New problem: can lead to declaration conflicts (later)  
新问题：可能导致声明冲突（稍后）  

---

- Solution requires comprehension of compiling (compiler’s) work
- 解决方案需要理解编译（编译器）的工作
➢ Implementations are <u>compiled</u>  
➢ 实现是<u>编译</u>的  
➢ Declarations & usage are <u>linked</u>  
➢ 声明和用法是<u>链接</u>的  

---

Declarations link implementations of executable code  
声明链接可执行代码的实现
```cpp {10,20,21,22,23,24,25}
//Roll.cpp
#include <iostream>
#include <cmath>

using namespace std;

class Roll {
public:
    Roll (double initialPosition = 0);
    void push (double velocity) ;
    double getPosition ();
    void output();
private:
    double position;
};

Roll::Roll(double initialPosition)
    : position(initialPosition)
{}
// Only implementations of methods (code inside methods) is directly executable
// ➢Compiled directly into machine code (which takes time)
void Roll:: push (double velocity) {
    position += copysign(
        velocity*velocity, velocity) ;
}
double Roll:: getPosition (){
    return position;
}
void Roll:: output() t
    cout << "Ball at position "
        << position << endl;
}
```
```cpp {5}
//main1.cpp
int main () {
    Roll r1;
    r1.output ();
    r1.push (3) ;
    r1.output () ;
    return 0;
}
```
```cpp
//main2.cpp
int main () {
    Roll r2;
    r2.output ();
    r2.push (-3) ;
    r2.output () ;
    return 0;
}
```

## Preliminary Solution
declarations in .h file  
→make it separately
```cpp
//Roll.h
#include <iostream>
#include <cmath>
using namespace std;
class Roll{
public:
    Roll(double initialPosition=0);
    void push(double velocity);
    double getPosition();
    void output();
private:
    double position;
};
```
executable code in .cpp file  
→make it separately  
→include the corresponding .h file
```cpp
//Roll.cpp
#include "Roll.h"
Roll::Roll(double initialPosition)
: position(initialPosition)
{}
void Roll::push(double velocity) {
    position += copysign(
    velocity*velocity, velocity);
}
double Roll::getPosition(){
    return position;
}
void Roll::output() {
    cout << "Ball at position " << position << endl;
}
```
.cpp be compiled <u>once</u> be linked to usages later.  

```cpp {3}
//main1.cpp
// include corresponding .h files in main.cpp files
#include "Roll.h"
int main() {
    Roll r1;
    r1.output();
    r1.push(3);
    r1.output();
    return 0;
}
```
```cpp {3}
//main2.cpp
// include corresponding .h files in main.cpp files
#include "Roll.h"
int main() {
    Roll r2(4);
    r2.output();
    r2.push(-3);
    r2.output();
    return 0;
}
```
## Declaration conflicts-diamond problem
![](Pasted_image_20251117164036.png)
> [!IMPORTANT]
> The problem with this program is:  
> 这个程序的问题在于：  
> - Compile `university` class <span style="color: red">twice</span>
> - 编译 `university` 类<span style="color: red">两次</span>

## Declaration conflicts-solution
![](Declaration_conflicts-solution.png)
<span style="color: red">Compile guard:</span>  
<span style="color: red">编译约束：</span>
➢Check “have I been here” condition:  
➢检查“我曾在这里”条件：  
→ Custom variable defined or not?  
→ 自定义变量是否已定义？  
➢No? (`#ifndef`)  
➢没有？( `#ifndef` )  
→ Have not been here yet  
→ 尚未到达此处  
→ define variable  
→ 定义变量  
➢Yes  
➢是  
→ Skip class (was declared before)  
→ 跳过类（之前已声明）  
> [!TIP]
> Double declaration successfully avoided  
> 成功避免双重声明

### Final solution-first step
> Add compile guard

```cpp
//Roll.h
#ifndef _ROLL_H_
#define _ROLL_H_
class Roll {
public:
    Roll(double initialPosition=0);
    void push(double velocity);
    double getPosition();
    void output();
private:
    double position;
};
#endif //_ROLL_H_
```
```cpp
//Roll.cpp
#include "Roll.h"
using namespace std;
Roll::Roll(double initialPosition)
: position(initialPosition)
{}
void Roll::push(double velocity) {
    position += copysign(velocity*velocity, velocity);
}
double Roll::getPosition(){
    return position;
}
void Roll::output() {
    cout << "Ball at position " << position << endl;
}
```

### Final solution-second step
```cpp
//Roll.h
#ifndef _ROLL_H_
#define _ROLL_H_
class Roll {
public:
    Roll(double initialPosition=0);
    void push(double velocity);
    double getPosition();
    void output();
private:
    double position;
};
#endif //_ROLL_H_
```
> Move `#include` to .cpp to save unnecessary compile time  
> 将 `#include` 移动到.cpp 中以节省不必要的编译时间
```cpp {3,4}
//Roll.cpp
#include "Roll.h"
#include <iostream>
#include <cmath>
using namespace std;
Roll::Roll(double initialPosition)
: position(initialPosition)
{}
void Roll::push(double velocity) {
    position += copysign(velocity*velocity, velocity);
}
double Roll::getPosition(){
    return position;
}
void Roll::output() {
    cout << "Ball at position " << position << endl;
}
```

### Final solution-third step
```cpp
//Roll.h
#ifndef _ROLL_H_
#define _ROLL_H_
class Roll {
public:
    Roll(double initialPosition=0);
    void push(double velocity);
    double getPosition();
    void output();
private:
    double position;
};
#endif //_ROLL_H_
```
> different main programs include same `.h` file  
> 不同的主程序包含相同的 `.h` 文件  
> ➢ make different programs independently  
> ➢ 独立制作不同的程序  
> ➢ make the class codes reusable  
> ➢ 使类代码可重用

```cpp
//main1.cpp
#include "Roll.h"
int main() {
    Roll r1;
    r1.output();
    r1.push(3);
    r1.output();
    return 0;
}
```
```cpp
//main2.cpp
#include "Roll.h"
int main() {
    Roll r2(4);
    r2.output();
    r2.push(-3);
    r2.output();
    return 0;
}
```

## What is the process
![](Pasted_image_20251117165152.png)
.o “object” files  
.o “对象”文件  
➢ represent codes have been compiled but not linked machine code yet  
➢ 代表已编译但尚未链接成机器码的代码
> Unlike Java, “programs” these are real CPU instructions that can be run directly on the machine  
> 与 Java 不同，这些“程序”是真正的 CPU 指令，可以直接在机器上运行  
> An interpreter or virtual machine is not necessary  
> 不需要解释器或虚拟机

## Build systems
- Building such a piece of software requires many different calls to the compiler and linker
- 构建这样的软件需要调用编译器和链接器进行许多不同的操作
- This is not typically done manually
- 这不是通常手动完成的
- Build system software manages the source file and “knows” how and when to compile and link it
- 构建系统软件管理源文件，并且“知道”何时编译和链接它
    - Delegates to compiler and linker
    - 委托给编译器和链接器
- This is not the IDE (e.g. CLion), necessarily
- 这不一定是指 IDE（例如 CLion）
- CLion uses a build system called CMake
- CLion 使用名为 CMake 的构建系统
https://cmake.org/

## CMake in CLion
- CMake configuration files are called CmakeLists.txt
- CMake 配置文件称为 CmakeLists.txt
- Every Clion project has one
- 每个 Clion 项目都有一个
- This file (through Cmake) controls what is compiled and what is linked to
- 此文件（通过 Cmake）控制编译什么以及链接什么
- It also controls parameters passed on to the compiler
- 它还控制传递给编译器的参数
![](Pasted_image_20251117165408.png)

---

- CMake has its own script language
- CMake 有自己的脚本语言
➢ `project(…)` sets a title for the project  
➢ `project(…)` 为项目设置标题  
➢ `set( var value )` sets a variable to a value  
➢ `set( var value )` 将变量设置为值  
➢ `CMAKE_CXX_STANDARD` is a native cmake variable  
➢ `CMAKE_CXX_STANDARD` 是本机 Cmake 变量  
➢ `SOURCE_FILES` is a custom variable, used here to store a list of to-be-compiled files  
➢ `SOURCE_FILES` 是自定义变量，在此处用于存储待编译的文件列表  
➢ `add_executable(exe list)` compiles and links all files in the “list” into an executable file named as “exe”  
➢ `add_executable(exe list)` 将“列表”中的所有文件编译并链接成一个名为“exe”的可执行文件

## Shared libraries
- To keep, share, and re-use compiled files we need to create libraries
- 为了保留、分享和重新使用编译文件，我们需要创建库
- Libraries are collections of classes and methods without any main() function as a start point
- 库是包含类和方法集合，但没有以 main()函数作为起始点的集合
- These libraries are then <u>linked</u> into executables, or hierarchically into other libraries
- 然后这些库被<u>链接</u>到可执行文件中，或者以分层方式链接到其他库中

---

- Typically, libraries are linked <u>dynamically</u>, which means that only a “pointer” is left in the executable
- 通常，库是<u>动态</u>链接的，这意味着在可执行文件中只留下一个“指针”
- Alternatively, they may be linked <u>statically</u>, which means their binary code is copied into the executable
- 或者，它们可能通过<u>静态</u>链接，这意味着它们的二进制代码被复制到可执行文件中
- Libraries only contain binary implementations
- 库只包含二进制实现
- When compiling against a library, additional headers are necessary
- 当针对库进行编译时，需要额外的头文件

## Reuse with shared libraries
![](Reuse_with_shared_libraries.png)
> Shared library:  
> ➢.dll on Windows  
> ➢.so on Linux  
> Build once, then shared and linked

## Shared Libs
- Same example in CMake
    - <span style="color: red">add_library (lib SHARED list)</span> creates a shared library called lib out of sources in “list”
    - <span style="color: red">add_library (lib SHARED list)</span> 创建一个名为 lib 的共享库，该库由“list”中的源文件组成
    - <span style="color: red">target_link_libraries</span> makes the library to be linked to an executable file
    - <span style="color: red">target_link_libraries</span> 使库链接到可执行文件
- The headers are found automatically in this case, because they are in the same folder
- 在这种情况下，头文件会自动找到，因为它们在同一文件夹中
- Search paths for both external headers and external libraries can be specified in CMake (see documentation if needed)
- 搜索外部头文件和外部库的路径可以在 CMake 中指定（如有需要，请参阅文档）

---

![](Pasted_image_20251118111936.png)

---

![](Shared_Libs.png)
Another way by using Libraries

---

- Standard library: libstdc++.dll (automatically linked into all binaries)
- 标准库：libstdc++.dll（自动链接到所有可执行文件）
- Headers belonging to the std-lib: iostream, string, vector, etc
- 属于 std 库的头文件：iostream、string、vector 等
    - Std-lib headers omit the .h ending by convention, but are just ordinary headers
    - Std-lib 头文件按照惯例省略了.h 后缀，但它们只是普通的头文件
- Software installation on modern Windows/Linux system largely depends on re-usable shared libraries simply being copied (and updated)
- 在现代 Windows/Linux 系统上安装软件很大程度上依赖于可重用的共享库的简单复制（和更新）

## Summary
- Reusing code by copy&pasting code is bad
- 通过复制粘贴代码来重用代码是糟糕的
- Isolating classes in reusable files is the first step
- 将类隔离在可重用的文件中是第一步
- Implementations go into source (.cpp) files that are compiled into binaries and eventually linked into executables
- 实现部分放入源代码文件（.cpp），这些文件被编译成二进制文件，最终链接成可执行文件
- Declarations go into header (.h) files which are included in other files to know what to expect in binaries elsewhere (after linking)
- 声明部分放入头文件（.h），这些文件被包含在其他文件中以了解在其他二进制文件中（链接后）可以期待什么
    - Use compile guards
    - 使用编译约束
- Shared libraries collect compiled code for reuse
- 共享库收集可重用的编译代码
- Build systems like CMake (use by Clion) automate these complex build processes
- 构建系统如 CMake（由 Clion 使用）自动化这些复杂的构建过程
