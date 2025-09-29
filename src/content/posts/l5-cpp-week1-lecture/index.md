---
title: "Software Development with C and Cpp Week1 Lecture"
published: 2025-09-22
pinned: false
description: "Input, output, loop and variable types in C and Cpp"
tags: []
category: "Software Development with C and Cpp"
licenseName: "MIT"
author: "🐦‍🔥不死鸟Anka"
sourceLink: ""
draft: false
date: 2025-09-22
# image:
#   url: ''
#   alt: ''
pubDate: 2025-09-22
---

> [!TIP]
> Leon Liang  
> 18080987933  
> leon@zy.cdut.edu.cn
## A basic C program
```c
#include <stdio.h>
int main() {
    puts(“Hello World!\n”);
    return 0;
}
```
.h header  
.c  
.lib  

`#include` in C resembles import in Java or Python, except that the imported material is a header file; what this means will be discussed later.  
C中的`#include`类似于Java或Python中的import，不同之处在于导入的材料是头文件；这意味着什么将在后面讨论。  
The angle brackets `<>` tell C to search for the `stdio.h` file in the compiler’s standard libraries.  
尖括号`<>`告诉C在编译器的标准库中搜索`stdio.h`文件。  
Using quotes `""` is legal but tells C that the file should be in the same directory.    
使用引号`""`是合法的，但会告诉C文件应该在同一个目录中。  

C is not object oriented, and in C++ object orientation is not mandatory as it is in Java.  
You do not have to define classes (in C you cannot) and your `main` “method” must not be in a class (and is thus a function, not a method).
C不是面向对象的，在C++中，面向对象也不像在Java中那样是强制性的。
你不必定义类（在C中你不能），你的`main`“方法”不能在类中（因此是一个函数，而不是一个方法）。  

The syntax for defining a function is the same as a method in Java but without the access specifier (`public`/`private` etc.) since these don’t apply to functions.  
The `main` function is the main program. It returns an `int`, which is returned to the operating system.
定义函数的语法与Java中的方法相同，但没有访问说明符（`public` / `private`等），因为这些不适用于函数。
main函数是主程序。它返回一个`int`，并返回给操作系统。  

`puts` is the C function to output a string. (It’s part of `stdio`, that’s why we imported it.)   
`\n` at the end of the string represents the byte sent to the OS to tell it to move to the next line.  
`puts`是用于输出字符串的C函数。（这是`stdio`的一部分，所以我们才导入它。）
字符串末尾的`\n`表示发送给操作系统的字节，以告诉它移动到下一行。

## The same in C++
```cpp
#include <iostream>
using std::cout;
using std::endl;
int main() {
    cout << “Hello World!” << endl;
    return 0;
}
```
打印：
put  
printf  
cout<< (C++)  

in C：function （no class）  
in C++：function、member function  
### C++ differences
- The `.h` can be left off the import. Traditionally built-in C++ libraries have no file extension.
- `.h`可以从导入中去掉。传统的内置C++库没有文件扩展名。
- Instead of using the `stdio` library, we use the `iostream` library and `stream output` operators.
- 我们没有使用`stdio`库，而是使用`iostream`库和`stream output`操作符。
- These are a C++ addition that simplifies output but also makes the syntax more abstract.
- 这是C++的一个附加功能，它简化了输出，但也使语法更加抽象。
- This is a good example of the difference in style between C and C++.
- 这是C和C++风格差异的一个很好的例子。
## A simple loop
```c
#include <stdio.h>
#include <stdint.h>
int main() {
    for (uint8_t x=0; x<10; x++) {
        printf(“%i\n”,x);
    }
    return 0;
}
```
```cpp
#include <iostream>
using namespace std;
    int main() {
        for (uint8_t x=0; x<10; x++) {
        cout << +x << endl;
    }
    return 0;
}
```
Pay more attention on type  
uint8: unsigned integer 8bits  

---
```c
//c:line-numbers
#include <stdio.h>
#include <stdint.h>

int main() {
  for (uint8_t x=0; x<10; x++) {
    printf(“%i\n”,x);
  }
  return 0;
}
```

Looking at the `for` loop:

```c
//c:line-numbers=5
  for (uint8_t x=0; x<10; x++) {  
    printf(“%i\n”,x);            
  }                              
```

As mentioned before, the `for` syntax in C and C++ is identical to Java. (Java copied it from C++!)  
如前所述，C和C++中的`for`语法与Java相同。（Java从C++中复制了它！）  
The `printf` (print formatted) function is used to print out strings containing numbers or other material.  
`printf`（打印格式化）函数用于打印包含数字或其他材料的字符串。  
Also note the type declaration is unusual.
还要注意类型声明是不寻常的。

---
## Type declarations in C

- In the original C, the types used were the same as in Java – `int`, `float`, etc.
- 在最初的C语言中，使用的类型与Java中相同- `int`, `float`等。
- However, unlike Java, C compiles right down to machine code – and different computers have different abilities to handle numbers in machine code.
- 然而，与Java不同的是，C直接编译成机器码——不同的计算机处理机器码中的数字的能力也不同。
- This caused confusion with int meaning different things and having different properties based on the machine being compiled on. As a result, in 1999 the types were respecified to allow the programmer to specify exactly how the computer should store the number.
- 这引起了int的混淆，因为int意味着不同的东西，并且根据编译的机器具有不同的属性。因此，在1999年，这些类型被重新指定，以允许程序员指定计算机应该如何存储数字。
## Integer standard types

| Type      | Memory  | Min                        | Max                         |
|-----------|---------|----------------------------|-----------------------------|
| `int8_t`  | 1 byte  | -128                       | 127                         |
| `uint8_t` | 1 byte  | 0                          | 255                         |
| `int16_t` | 2 bytes | -32768                     | 32767                       |
| `uint16_t`| 2 bytes | 0                          | 65535                       |
| `int32_t` | 4 bytes | -2147483648                | 2147483647                  |
| `uint32_t`| 4 bytes | 0                          | 4294967295                  |
| `int64_t` | 8 bytes | -9223372036854775808       | 9223372036854775807         |
| `uint64_t`| 8 bytes | 0                          | 18446744073709551615        |

- Modern processors can handle up to 32-bit numbers in single machine code instructions. Many can handle 64-bit numbers.
- 现代处理器可以在单个机器代码指令中处理多达32位的数字。许多可以处理64位数字。
- However, smaller embedded systems may only be able to deal with 16-bit or even 8-bit numbers directly in their machine code.
- 然而，较小的嵌入式系统可能只能在其机器码中直接处理16位甚至8位数字。
- Managing larger numbers on these systems requires the compiler to include extra code to transfer carry, etc, information between parts of the number.
- 在这些系统上管理较大的数字需要编译器包含额外的代码来在数字的各个部分之间传递进位等信息。
## Relative types
`(U)Int_leastX_t`: declares the variable must have at least X bits but may have more. This is used to allow for systems with machine code that may no longer handle smaller numbers.  
`(U)Int_leastX_t`：声明变量必须至少有X位，但可以有更多。这是用来允许系统的机器码可能不再处理较小的数字。  

`(U)Int_fastX_t`: declares the variable must have at least X bits and should be “fast” on the platform being used. The precise meaning of this is not defined but compilers are supposed to select a type native to the CPU’s code. ---*Rarely used*.  
`(U)Int_fastX_t`：声明变量必须至少有X位，并且在使用的平台上应该是“快速的”。它的确切含义没有定义，但编译器应该选择CPU代码的本机类型。——*很少使用*。  
## `Printf`
In Python:  
```python
print("You have",dogs,"dogs and",cats,"cats.")
```  
In C:  
```c
printf("You have %i dogs and %icats.\n",dogs,cats);
```
- The first parameter (called the format string) gives the overall structure of what you want to print.
- 第一个参数（称为格式字符串）给出了要打印的内容的总体结构。
- You add “slots” into it with `%i` (or other markers we’ll see later), then fill them in.
- 您可以使用`%i`（或我们稍后将看到的其他标记）在其中添加“插槽”，然后填充它们。
## The loop in C++
```cpp
//cpp:line-numbers
#include <iostream>
using namespace std;

int main() {
  for (uint8_t x=0; x<10; x++) {
    cout << +x << endl;
  }
return 0;
}
```
The code is mostly the same as in C except we are using the `iostream` facilities C++ provides.   
除了使用C++提供的`iostream`功能外，代码与C中的代码基本相同。  
This is cleaner than `printf`:  
这比`printf`更干净：  
```cpp
cout << "You have " << dogs << " dogs and " << cats << " cats." << endl;
```
---
```cpp
#include <iostream>
using namespace std;

int main() {
  for (uint8_t x=0; x<10; x++) {
  cout << +x << endl;
  }
return 0;
} 
```
However, note the `+` before `x`. This is because, without the specific information `printf` gives, C++ has to assume what format to use to print the contents of the variable. In the case of an 8-bit integer, by default, it assumes wrong! (It’s ok for larger integers though...)  
但是，请注意`x`之前的`+`。这是因为，由于没有`printf`提供的特定信息，C++必须假定使用什么格式来打印变量的内容。在8位整数的情况下，默认情况下，它假定错误！（对于较大的整数是可以的…）

> A test, please run this line and see the result:
```cpp
#include <iostream>
using namespace std;

int main() {
for (uint8_t x=0; x<2; x++) {
  cout << +x << endl;
  cout<<-x<<endl;
  cout<<x<<endl;
  }

cout<<sizeof(int)<<endl;
cout<<sizeof(uint16_t );

return 0;
}
```
::: details See the output
The output is:
```console
0
0
null
1
-1
null
4
2
```
:::

---
## Input
```c
int main() {
    int32_t age;
    puts(“How old are you?”);
    scanf(“%i”,&age);
    printf(“You typed %i.\n”,age);
    if (age > 18) {
        puts(“You can vote.”);
    }
    return 0;
}
```
scanf()
getline()
### Input in C
- `scanf` is the input equivalent of `printf`.
- `scanf`是`printf`的输入等价。
- Normally modern programs do not use `scanf` because it is bad at handling errors (eg, if the user did not type a number). We will learn to do input better later. Use `scanf` for the moment.
- 通常现代程序不使用`scanf`，因为它不擅长处理错误（例如，如果用户没有键入数字）。我们以后会学会更好地做输入。暂时用`scanf`。
- Note the `&` sign before age in `scanf`. This means that we are passing a pointer to age. This is necessary because we want `scanf` to change the value stored in variable age. We’ll go much more into pointers later on.
- 注意`scanf`中age前面的`&`符号。这意味着我们传递了一个指向 age 的指针。这是必要的，因为我们希望`scanf`改变存储在变量 age 中的值。稍后我们将深入讨论指针。
- We declare the variable as `int32_t` because this is what the `%i` specifier in `scanf` requires, even though it would be better to use a smaller type for an age.
- 我们将变量声明为`int32_t`，因为这是`scanf`中的`%i`说明符所要求的，尽管对于年龄使用较小的类型会更好。
### Input in C++
```cpp
int main() {
  uint16_t age;
  cout << “How old are you?”;
  cin >> age;
  cout << “You typed” << age <<
  endl;
  if (age > 18) {
    cout << “You can vote.”;
  }
return 0;
}
```
### Input in C and C++
Again at this stage, the code is similar except we use C++’s IO streaming functions.  
在这个阶段，除了我们使用C++的IO流函数之外，代码与此类似。  

`cin >>` is used for input. Again, this is not ideal at handling errors, although it is better than `scanf`. But use it for the moment.  
`cin >>`用于输入。同样，这不是处理错误的理想方法，尽管它比`scanf`要好。但现在就用吧。  

Note there is no `&` sign before age in the input statement. We still need the value of age to change, so we are still actually passing a pointer. But C++ deals with this for us in the background so we don’t need to add the explicit `&`.  
注意，在输入语句中 age 前面没有`&`符号。我们仍然需要改变age的值，所以我们实际上仍然在传递一个指针。但是C++在后台为我们处理这些，所以我们不需要添加显式的`&`。  

This can be helpful, but it can also be awkward, as learning the difference is vital to learning C and C++.  
这可能很有帮助，但也可能很尴尬，因为学习C和C++的区别至关重要。

## Conversion Specifiers in C

| Conversion | Output Specification                                            |
| ---------- | --------------------------------------------------------------- |
| `%a`       | Floating-point number, hexadecimal (16进制) digits and p-notation |
| `%c`       | Single character.                                               |
| `%d`       | Signed decimal integer.                                         |
| `%e`       | Floating-point number, e-notation.                              |
| `%f`       | Floating-point number, decimal notation.                        |
| `%i`       | Signed decimal integer (same as %d).                            |
| `%o`       | Unsigned octal integer.                                         |
| `%p`       | A pointer.                                                      |
| `%s`       | Character string.                                               |
| `%u`       | Unsigned decimal integer.                                       |
| `%x`       | Unsigned hexadecimal integer, using hex digits 0–F.             |
| `%%`       | Prints a percent sign.                                          |
