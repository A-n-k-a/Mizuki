---
title: "Software Development with C and Cpp Week10 Seminar"
published: 2025-12-02
pinned: false
description: "Comprehensive Exercises"
tags: []
category: "Software Development with C and Cpp"
licenseName: "MIT"
author: "🐦‍🔥不死鸟Anka"
sourceLink: ""
draft: false
date: 2025-12-02
# image:
#   url: ''
#   alt: ''
pubDate: 2025-12-02
---

# Comprehensive Exercises
## Exercise 1: Graphics Drawing System (Inheritance + Polymorphism + Smart Pointer + STL)
**Requirement Description**
Simulate the core module of a graphics editing software, implement functions for drawing, area calculation, and management of various basic graphics, and require flexible expansion of graphic types.

**Core Function Definitions**
1. Define an abstract base class Shape (pure virtual class), including:
    - Protected member: `string colour`.
    - Pure virtual functions: 
        - draw() --output drawing information
        - calcArea() --calculate area and return a double
    - Virtual destructor (to ensure proper release of derived class resources).
```cpp
//Shape.h
//
// Created by 不死鸟Anka on 2025/12/2.
//

#ifndef CPP_SHAPE_H
#define CPP_SHAPE_H

#include <string>

class Shape
{
protected:
    std::string colour;
public:
    Shape() = default;
    explicit Shape(const std::string &colour_) : colour(colour_) {}

    // Virtual destructor to ensure proper cleanup in derived classes
    virtual ~Shape() = default;

    // Pure virtual: output drawing information
    virtual void draw() const = 0;

    // Pure virtual: calculate area and return as double
    virtual double calcArea() const = 0;

    // Small utilities
    const std::string &getColour() const { return colour; }
    void setColour(const std::string &c) { colour = c; }
};

#endif //CPP_SHAPE_H
```
2. Derive 3 specific graphic classes:
    - `Circle`: Contains a radius member; area formula: π×r² (π = 3.14159).
    - `Rectangle`: Contains length and width members; area formula: length × width.
    - `Triangle`: Contains base and height members; area formula: (base × height) ÷ 2.
All derived classes must call the base class constructor through an initialization list and override the pure virtual functions.
```cpp
//Circle.h
#ifndef CPP_CIRCLE_H
#define CPP_CIRCLE_H

#include "Shape.h"
#include <string>

class Circle : public Shape {
private:
    double radius{0.0};
public:
    Circle() = default;
    Circle(const std::string &colour_, double r) : Shape(colour_), radius(r) {}

    // Override draw to output drawing information
    void draw() const override;

    // Override calcArea to compute area of circle (pi * r^2)
    double calcArea() const override;
};

#endif //CPP_CIRCLE_H
```
```cpp
//Circle.cpp
#include "Circle.h"
#include <iostream>

static constexpr double PI = 3.14159;

void Circle::draw() const {
    std::cout << "Drawing Circle: colour=" << colour << ", radius=" << radius << '\n';
}

double Circle::calcArea() const {
    return PI * radius * radius;
}
```
```cpp
//Rectangle.h
#ifndef CPP_RECTANGLE_H
#define CPP_RECTANGLE_H

#include "Shape.h"

class Rectangle : public Shape {
private:
    double length;
    double width;
public:
    Rectangle() = default;
    Rectangle(const std::string &colour_, double length_, double width_) : Shape(colour_), length(length_), width(width_) {}

    void draw() const override;
    double calcArea() const override;
};

#endif //CPP_RECTANGLE_H
```
```cpp
//Rectangle.cpp
#include "Rectangle.h"
#include <iostream>

void Rectangle::draw() const {
    std::cout << "Drawing Rectangle: colour=" << colour << ", length=" << length << ", width=" << width << '\n';
}

double Rectangle::calcArea() const {
    return length * width;
}
```
```cpp
//Triangle.h
#ifndef CPP_TRIANGLE_H
#define CPP_TRIANGLE_H

#include "Shape.h"

class Triangle : public Shape {
private:
    double base;
    double height;
public:
    Triangle() = default;
    Triangle(const std::string &colour_, double base_, double height_) : Shape(colour_), base(base_), height(height_) {}

    void draw() const override;
    double calcArea() const override;
};

#endif //CPP_TRIANGLE_H
```
```cpp
//Triangle.cpp
#include "Triangle.h"
#include <iostream>

void Triangle::draw() const {
    std::cout << "Drawing Triangle: colour=" << colour << ", base=" << base << ", height=" << height << '\n';
}

double Triangle::calcArea() const {
    return (base * height) / 2.0;
}
```
2. Design the `GraphicsManager` class, use `list` to store graphic pointers of type `unique_ptr<Shape>`, and implement the following:
    - Add graphics : `addShape(unique_ptr<Shape> shape)`
    - Sort the graphic list in descending order of area.
    - Calculate the total area of all graphics.
    - Batch draw all graphics (call the `draw()` method of each graphic).
```cpp
//GraphicsManager.h
#ifndef CPP_GRAPHICS_MANAGER_H
#define CPP_GRAPHICS_MANAGER_H

#include "Shape.h"
#include <list>
#include <memory>

class GraphicsManager {
private:
    std::list<std::unique_ptr<Shape>> shapes;

public:
    GraphicsManager() = default;
    ~GraphicsManager() = default;

    // Add a shape (takes ownership)
    void addShape(std::unique_ptr<Shape> shape);

    // Sort shapes in descending order of area
    void sortByAreaDesc();

    // Calculate total area of all shapes
    double totalArea() const;

    // Batch draw all shapes (calls draw() on each)
    void drawAll() const;

    // Utility: number of shapes
    std::size_t count() const { return shapes.size(); }
};

#endif //CPP_GRAPHICS_MANAGER_H
```
```cpp
//GraphicsManager.cpp
#include "GraphicsManager.h"
#include <algorithm>

void GraphicsManager::addShape(std::unique_ptr<Shape> shape) {
    // shapes.push_back(std::move(shape));
    if (shapes.empty()) {
        shapes.push_back(std::move(shape));
    } else {
        auto it = shapes.begin();
        while (it != shapes.end() && (*it)->calcArea() > shape->calcArea()) {
            ++it;
        }
        shapes.insert(it, std::move(shape));
    }
}

void GraphicsManager::sortByAreaDesc() {
    shapes.sort([](const std::unique_ptr<Shape> &a, const std::unique_ptr<Shape> &b) {
        return a->calcArea() > b->calcArea();
    });
}

double GraphicsManager::totalArea() const {
    double sum = 0.0;
    for (const auto &s : shapes) {
        sum += s->calcArea();
    }
    return sum;
}

void GraphicsManager::drawAll() const {
    for (const auto &s : shapes) {
        s->draw();
    }
}
```
3. Simulate usage in the main function: Create at least 5 graphics of different types, and complete sorting, statistics, and drawing through the manager.
```cpp
//test_shapes.cpp
#include <iostream>
#include <memory>
#include <vector>

#include "Circle.h"
#include "Rectangle.h"
#include "Triangle.h"
#include "GraphicsManager.h"

int main() {
    GraphicsManager gm;

    // std::list<std::unique_ptr<Shape>> shapes;
    // Circle c0("test", 1.0);
    // std::unique_ptr<Shape> c1(&c0);
    // gm.addShape(std::move(c1));
    // shapes.push_back(std::move(c1));
    // c0.draw();
    // c1->draw();

    // Create at least 5 graphics of mixed types
    gm.addShape(std::make_unique<Circle>("red", 2.5));        // area ~19.6349
    gm.addShape(std::make_unique<Rectangle>("blue", 4.0, 3.0)); // area 12
    gm.addShape(std::make_unique<Triangle>("green", 6.0, 2.0)); // area 6
    gm.addShape(std::make_unique<Circle>("yellow", 1.2));    // area ~4.523424
    gm.addShape(std::make_unique<Rectangle>("magenta", 2.5, 5.0)); // area 12.5
    gm.addShape(std::make_unique<Triangle>("cyan", 3.0, 4.0)); // area 6

    std::cout << "Shapes created: " << gm.count() << "\n";
    double total = gm.totalArea();
    std::cout << "Total area (unsorted): " << total << "\n";
    if (gm.count() > 0) {
        std::cout << "Average area: " << (total / static_cast<double>(gm.count())) << "\n";
    }

    std::cout << "\nDrawing (unsorted):\n";
    gm.drawAll();

    // Sort shapes by area descending
    gm.sortByAreaDesc();

    std::cout << "\nDrawing (sorted by area desc):\n";
    gm.drawAll();

    std::cout << "\nTotal area (after sort): " << gm.totalArea() << "\n";
    if (gm.count() > 0) {
        std::cout << "Average area (after sort): " << (gm.totalArea() / static_cast<double>(gm.count())) << "\n";
    }

    return 0;
}
```

**Technical Requirements**
- Must implement polymorphic calls through base class pointers; direct calls to derived class methods are prohibited.
- The ownership of graphic objects is unique; only unique_ptr is allowed for management.
- Retain 2 decimal places when outputting the area calculation results.


## Exercise 2: General Data Filter (Template + STL Algorithm)
Implement a generic template class that uses STL list as the underlying storage container. The class only supports basic data types (int, double) and focuses on a single core capability: sorting the data stored in the list in ascending order (from smallest to largest).

**Core Requirements**
1. Template Class Definition: `ListSorter<T>` <br>Define a class template `ListSorter<T>` (where T is restricted to int or double) with the following structure:

Private Member:  
`list<T> dataList`: A list container to store the input basic-type data (no other storage containers are allowed).

**Public Member Functions**

| Function                                         | Description                                                                                                                             |
| ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| `void loadData(const std::list<T>& input)`       | Copy the input `list<T>` data into the private dataList container (overwrite existing data if any).                                     |
| `void sortAscending()`                           | Sort the elements in dataList in ascending order (smallest to largest).<br><br>Note: You may use the list member function `sort()`.     |
| `void printData(const std::string& title) const` | Traverse the private `dataList` and print all elements in a readable format (with the given title to distinguish original/sorted data). |

```cpp
//ListSorter.h
//
// Created by 不死鸟Anka on 2025/12/2.
//

#ifndef CPP_LISTSORTER_H
#define CPP_LISTSORTER_H

#include <list>
#include <string>
#include <iostream>
#include <type_traits>

template<typename T>
class ListSorter
{
    static_assert(std::is_same<T, int>::value || std::is_same<T, double>::value,
                  "ListSorter only supports int and double.");

private:
    std::list<T> dataList;

public:
    // Copy input data into internal list (overwrite existing data)
    void loadData(const std::list<T>& input) {
        dataList = input;
    }

    // Sort internal list in ascending order
    void sortAscending() {
        dataList.sort();
    }

    // Print the contents with a title. Elements separated by single spaces.
    void printData(const std::string& title) const {
        std::cout << title << ":\n";
        if (dataList.empty()) {
            std::cout << "(empty)\n\n";
            return;
        }

        for (auto it = dataList.cbegin(); it != dataList.cend(); ++it) {
            std::cout << *it;
            auto nextIt = it;
            ++nextIt;
            if (nextIt != dataList.cend()) std::cout << " ";
        }
        std::cout << "\n\n";
    }
};

#endif //CPP_LISTSORTER_H
```

3. Test Requirements
Implement a `main()` function to test the `ListSorter<T>` class with two sets of data, and output results in the specified format:
    1. Test Case 1: `Process std::list<int>`
        - Input data: {9, 3, 7, 1, 8, 2, 10, 5, 4, 6}
        - Load the data into `ListSorter<int>`.
        - Print the original unsorted data (title: "Original int list").
        - Call `sortAscending()` to sort the data.
        - Print the sorted data (title: "Sorted int list (ascending)").
	2. Test Case 2: `Process std::list<double>`
        - Input data: {5.8, 2.3, 9.1, 1.7, 7.4, 3.9, 8.2, 4.5}
        - Load the data into `ListSorter<double>`.
        - Print the original unsorted data (title: "Original double list").
        - Call `sortAscending()` to sort the data.
        - Print the sorted data (title: "Sorted double list (ascending)").

```cpp
//main.cpp
#include "ListSorter.h"
#include <list>

int main() {
    // Test Case 1: int list
    ListSorter<int> intSorter;
    std::list<int> intData = {9, 3, 7, 1, 8, 2, 10, 5, 4, 6};
    intSorter.loadData(intData);
    intSorter.printData("Original int list");
    intSorter.sortAscending();
    intSorter.printData("Sorted int list (ascending)");

    // Test Case 2: double list
    ListSorter<double> doubleSorter;
    std::list<double> doubleData = {5.8, 2.3, 9.1, 1.7, 7.4, 3.9, 8.2, 4.5};
    doubleSorter.loadData(doubleData);
    doubleSorter.printData("Original double list");
    doubleSorter.sortAscending();
    doubleSorter.printData("Sorted double list (ascending)");

    return 0;
}
```
