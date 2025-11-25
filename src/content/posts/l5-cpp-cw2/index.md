---
title: "Software Development with C and Cpp Coursework2"
published: 2025-11-21
pinned: false
description: "CHC5028 Software Development with C/C++ Coursework2"
tags: []
category: "Software Development with C and Cpp"
licenseName: "MIT"
author: "🐦‍🔥不死鸟Anka"
sourceLink: ""
draft: false
date: 2025-11-21
# image:
#   url: ''
#   alt: ''
pubDate: 2025-11-21
---

# CHC5028 Software Development with C/C++ <br>Coursework 2
## Important Dates
Week 11 (an available day in that week): Class test 2  
第 11 周（该周内任意一天）：第二次课堂测试  
Week 11 (12/12/2025): Coursework 2 project file submission  
第 11 周（2025 年 12 月 12 日）：课程作业 2 项目文件提交  

## Background
“Text adventures”, now called “interactive fiction”, were among the first type of computer game ever produced. These games have no graphics; the player reads the story of the game in text, and decides what their character will do by typing commands at a prompt. Although less popular now, text adventures are still played and created, and developed into the original online RPGs (MUDs). You can play some sample modern text adventures here:  
“文字冒险游戏”，现在被称为“互动小说”，是第一种被制作的电脑游戏之一。这些游戏没有图形；玩家通过阅读游戏的文本来了解故事，并通过在提示符下输入命令来决定他们的角色将做什么。尽管现在不太受欢迎，但文字冒险游戏仍然有人在玩和创作，并发展成为最初的在线 RPG（MUD）。您可以在以下链接中玩一些现代文字冒险游戏的样本：  
[Discworld MUD](http://discworld.starturtle.net/lpc/), [BatMUD](https://www.bat.org/), [北大侠客行](http://www.pkuxkx.net:4001/)  
These are playable online via a web browser. It is advisable to try out the games to get an understanding of how the games behave.  
这些游戏可以通过网页浏览器在线玩。建议尝试这些游戏，以了解游戏的表现方式。  

For this coursework, you will be creating a simple **game engine** for a text adventure. You are **not** required to write an actual adventure, only the back-end program code that would support one. You will need to add some material to the program in order to test it, but this may just be simple test material. You may add interesting descriptions or stories to your program if you want to, but there are no marks for doing so.  
为此课程作业，你需要创建一个简单的**游戏引擎**，用于文本冒险游戏。你不需要编写实际的冒险内容，只需编写支持冒险的后端程序代码即可。你需要向程序中添加一些内容以进行测试，但这可能只是简单的测试材料。如果你想的话，可以向程序中添加有趣的描述或故事，但这不会获得分数。  

You are provided with a CLion project containing a very simple game harness which supports only two commands: going north (`north` or `n`), and quitting (`quit`). Extend it by doing the exercises below. Note that the later exercises are less explicitly described than the earlier ones, meaning that you must solve more problems yourself. This is intentional.  
你将获得一个包含一个非常简单的游戏框架的 CLion 项目，该框架仅支持两个命令：向北移动（ `north` 或 `n` ），和退出（ `quit` ）。通过以下练习扩展它。请注意，后面的练习比前面的练习描述得不够明确，这意味着你必须自己解决更多问题。这是故意的。  

The coursework is written to be built using `gcc` through CMake and CLion. It is not recommended that you attempt to build it using Visual Studio or XCode.  
课程作业是用 `gcc` 通过 CMake 和 CLion 构建的。不建议你尝试使用 Visual Studio 或 XCode 构建它。  

**Important:** If you are building the sample coursework on a platform other than Windows, or on a machine which does not have the Windows API installed, you may get an error in the file `wordwrap.c`. This file calls a Windows specific function to find the width of the console. If you get this error, remove the `#include <windows.h>` from  the top of the file, and edit the `initWordWrap()` function by deleting its contents and replacing them with `consoleWidth = 80; currentConsoleOffset = 0;`. You can change 80 here to any number that makes the output comfortably readable.  
**重要**：如果您在除 Windows 以外的平台或未安装 Windows API 的机器上构建示例课程作业，您可能会在文件 `wordwrap.c` 中遇到错误。此文件调用一个 Windows 特定的函数来查找控制台宽度。如果您遇到此错误，请从文件顶部删除 `#include <windows.h>` ，并编辑 `initWordWrap()` 函数，通过删除其内容并替换为 `consoleWidth = 80; currentConsoleOffset = 0;` 。您可以将这里的 80 更改为任何使输出易于阅读的数字。

## Coursework Tasks
### Task 1
In the current system, you can only move North. Extend the engine to allow movement in all four compass directions.  
在当前系统中，您只能向北移动。扩展引擎以允许在四个方向上移动。  
- Add properties to the `Room` class for storing east, south, and west exits. These properties will need accessor methods.
- 为 `Room` 类添加属性以存储东、南和西出口。这些属性需要访问器方法。
- Add code to the `gameLoop` method to understand the commands `east`, `south`, and `west` (and the abbreviations `e`, `s` and `w`) and to handle them in a similar way to `north`.
- 向 `gameLoop` 方法添加代码以理解 `east` 、 `south` 和 `west` （以及缩写 `e` 、 `s` 和 `w` ）的命令，并以类似 `north` 的方式处理它们。
- Modify `initRooms` to create more rooms using the new exits to test your code.
- 修改 `initRooms` 以使用新出口创建更多房间来测试您的代码。
- The rooms created should be constructed in a reasonable and logical relationship that makes the game playable and sensible.
- 创建的房间应该以合理和逻辑的关系构建，使得游戏可玩且合理。

### Task 2
A key part of most text adventure games is the ability to move objects around. Objects can be found in rooms and can be picked up and put down by the player. Add this capability to the game engine.  
大多数文字冒险游戏的关键部分是能够移动物体。物体可以放在房间里，并由玩家捡起和放下。将此功能添加到游戏引擎中。  
- Create a `GameObject` superclass. It should contain at least a weight, and a keyword (for the player to use when typing commands).
- 创建一个 `GameObject` 超类。它应该包含至少一个重量和一个关键字（玩家在输入命令时使用）。
- Modify the `Room` class so that each Room includes a list of `GameObjects` in the room.
- 修改 `Room` 类，使每个 Room 包含一个 `GameObjects` 列表。
- Create a derived class `Weapon` of `GameOjbect` class, the weight of each object of `Weapon` should be limited in a range of 5-10. It should contain a property named `harm` which should be limited in a range of 10-30.
- 创建一个 `GameOjbect` 类的派生类 `Weapon` ， `Weapon` 每个对象的重量应限制在 5-10 的范围内。它应该包含一个名为 `harm` 的属性，其值应限制在 10-30 的范围内。
- Create a derived class `Food` of `GameObject` class, the weight of each object of `Food` should be limited in a range of 1-5. It should contain a property named `energy` which should be limited in a range of 1-10.
- 创建一个由 `GameObject` 类派生的 `Food` 类， `Food` 每个对象的重量应限制在 1-5 的范围内。它应包含一个名为 `energy` 的属性，该属性应限制在 1-10 的范围内。
- Modify `initRooms` to create some `GameObjects` ((including food and weapon objects) and put them in the rooms. Use this to test your program. (No marks are assigned specifically for this task, but without it, the ones following cannot be demonstrated.)
- 修改 `initRooms` 以创建一些 `GameObjects` （包括食物和武器对象），并将它们放入房间中。使用这个来测试你的程序。（此任务没有分配特定的分数，但没有它，后续的任务无法演示。）

### Task 3
A key part of most text adventure games is the ability to fight with the NPC enemy. The NPC can be found in rooms and the player can fight with them. Add this capability to the game engine.  
大多数文字冒险游戏的关键部分是能够与 NPC 敌人战斗。NPC 可以在房间中找到，玩家可以与他们战斗。向游戏引擎添加这个功能。
- Create a pure virtual `EnemyObject` class. It should contain at least a health, and a keyword (for the player to use when typing commands). It should contain a virtual method `damage()`.
- 创建一个纯虚类 `EnemyObject` 。它应包含至少一个生命值和一个关键字（玩家在输入命令时使用）。它应包含一个虚方法 `damage()` 。
- Modify the `Room` class so that each Room includes a list of `EnemyObject` in the room.
- 修改 `Room` 类，使每个房间包含一个房间内的 `EnemyObject` 列表。
- Create a derived class `Boss` of `EnemyObject` class, the health of each object of `Boss` should be 100.
- 创建 `EnemyObject` 类的派生类 `Boss` ， `Boss` 每个对象的生命值应为 100。
- Create a derived class `Clowns` of `EnemyObject` class, the health of each object of `Clowns` should be 30.
- 创建 `EnemyObject` 类的派生类 `Clowns` ， `Clowns` 每个对象的生命值应为 30。
- Modify `initRooms` to create some `EnemyObjects` ((including boss and clowns objects) and put them in the rooms. Use this to test your program. (No marks are assigned specifically for this task, but without it, the ones following cannot be demonstrated.)
- 修改 `initRooms` 以创建一些 `EnemyObjects` （包括 Boss 和小丑对象），并将它们放入房间中。使用此方法测试你的程序。（此任务没有具体分配分数，但没有它，后续的任务无法演示。）
- You need to consider different reasonable damage value for each different enemy objects’ `damage()` method.
- 您需要考虑为每个不同的敌人对象的 `damage()` 方法考虑不同的合理伤害值。

### Task 4
- Modify the `State` class to include a representation of the player’s physical `strength`, called strength, which is initiated as 100, and when strength goes to 0, the program shall be terminated.
- 修改 `State` 类，以包含玩家物理 `strength` 的表示，称为力量，初始值为 100，当力量降至 0 时，程序应终止。
- Modify the `Room::describe()` method to print out the keywords of all the objects in the room, formatted as nicely as possible.
- 修改 `Room::describe()` 方法，使其能够以尽可能好的格式打印出房间中所有对象的关键词。

### Task 5
- Modify the `gameLoop` method to pay attention to the second word of the command the player enters, if there is one. The following commands can be used with the second word to search through a) objects in the current room, and b) objects in the inventory, for an object with a keyword matching the second word of the command the player typed.
- 修改 `gameLoop` 方法，注意玩家输入命令的第二个单词，如果有的话。以下命令可以使用第二个单词来搜索：a) 当前房间中的对象，和 b) 背包中的对象，以找到与玩家输入命令的第二个单词匹配的关键词的对象。
- Implement the player command `get` which, when typed with an object keyword, will move that object from the current room list into the inventory. It should display appropriate errors if the object is not in the room, or the object is already in the inventory, or the object does not exist.
- 实现玩家命令 `get` ，当输入对象关键词时，将对象从当前房间列表移动到背包中。如果对象不在房间中，或者对象已经在背包中，或者对象不存在，应显示适当的错误信息。
- Implement the player command `drop` which, when typed with an object keyword, will move that object from the inventory into the current room list. It should display appropriate errors if the object is not in the inventory or does not exist, etc. (5%)
- 实现玩家命令 `drop` ，当与对象关键词一起输入时，将把该对象从背包移动到当前房间列表中。如果对象不在背包中或不存在等，应显示适当的错误信息。（5%）
- Implement the player command `inventory` which will print out the keywords of all the objects in the inventory.
- 实现玩家命令 `inventory` ，将打印出背包中所有对象的关键词。
- Implement the player command `eat` which, when typed with a food object keyword, will print out the player’s strength after adding the energy of the food object to the player’s strength, which should not exceed 100.
- 实现玩家命令 `eat` ，当与食物对象关键词一起输入时，将打印出玩家在添加食物对象能量到玩家力量后，玩家的力量值，该值不应超过 100。
- Implement the player’s command `fight` which, when typed with an enemy object keyword if the enemy object exists in the room, will print out the enemy’s health that subtracts from the sum of harm of weapons carried by the player.
- 实现玩家命令 `fight` ，当与房间中存在的敌人对象关键词一起输入时，将打印出敌人的健康值，该值从玩家携带的武器造成的伤害总和中进行扣除。
- The harm is mutual, the player’s strength should reduce the damage of the enemy existing in the room and be printed out. You need to make the `damage()` in the `Boss` and `Clowns` class can be applied when the `fight` command is working.
- 伤害是相互的，玩家的实力应该减少房间内敌人的伤害并打印出来。您需要使 `damage()` 在 `Boss` 和 `Clowns` 类中可以在 `fight` 命令工作时应用。
- You need to make the printout of each command execution demonstrate the explicit status of all objects in the room.
- 您需要使每个命令执行的打印输出显示房间内所有对象的明确状态。

### Task 6
Since most players will not want to play an entire game at one sitting, most games include `save` and `load` (or `restore`) commands. Implement these commands. They should ask the user for a filename and then write or read the current game state, to or from that file.  
由于大多数玩家不会想一次性玩完整场游戏，大多数游戏包括 `save` 和 `load` （或 `restore` ）命令。实现这些命令。它们应该询问用户文件名，然后写入或读取当前游戏状态，到或从该文件。

## Note
The layout and descriptions of rooms, and the list and descriptions of objects, are **not** part of the game **state** because they do not change during the game. These should **not** be included in the save file.  
房间布局和描述、以及物品列表和描述，不是游戏状态的一部分，因为它们在游戏过程中不会改变。这些内容不应包含在存档文件中。  

To this end, some important points to consider:  
为此，需要考虑以下重要点：  
- The “game state” may also include the locations of objects the player has dropped in rooms. Would it be a good idea to restructure how object locations are stored?
- “游戏状态”可能还包括玩家在房间中丢弃的物品的位置。重新结构化存储物品位置的方式是否是一个好主意？
- The “game state” may also include the status of the player and enemy objects. Would it be a good idea to restructure these objects to the original situation?
- “游戏状态”可能还包括玩家和敌人对象的状态。将这些对象重新结构化到原始情况是否是一个好主意？
- The `State` object stores the current room, and objects, using pointers. Pointers cannot safely be written to disk since addresses may be different when the program is reloaded. How can you enable this data to be safely saved and reloaded?
- `State` 对象通过指针存储当前房间和对象。由于程序重新加载时地址可能不同，指针不能安全地写入磁盘。如何使这些数据能够安全地保存和重新加载？
- It is worth ensuring to some degree that the user cannot readily cheat, or spoil the game, by reading or changing a save file. While it is not necessary to implement actual authentication or encryption, at the same time, the file does not have to be just a text dump. This makes it harder to parse when loaded. So, for example, saving the required indexes into a static array of strings may be a better way than saving the strings themselves.
- 在一定程度上确保用户不能轻易通过读取或更改存档文件来作弊或破坏游戏是有意义的。虽然不需要实现实际的认证或加密，但同时，文件也不应该只是一个文本输出。这使得在加载时更难解析。因此，例如，将所需的索引保存到字符串的静态数组中，可能比保存字符串本身更好。

## Assessment Rules (Very important)
### Assessment Format and Scoring
This coursework will primarily focus on your encoding capabilities as well as your comprehension of object-oriented programming, rather than on your software engineering process (which isn't required to conform to standard procedures during the learning phase).  
这门课程作业将主要关注你的编码能力以及你对面向对象编程的理解，而不是你的软件工程过程（在学习阶段，软件工程过程不需要遵循标准程序）。  

The questions of the class test 2 are closely aligned with the coursework 2 tasks. Completing these tasks will significantly enhance your performance and positively impact your class test score.  
第二次课堂测试的问题与第二次课程作业的任务紧密相关。完成这些任务将显著提高你的表现，并对你课堂测试的分数产生积极影响。  

For class test 2, the assessment format will be a paper examination, and the score obtained on this exam will directly serve as your mark for Coursework 2.  
对于第二次课堂测试，评估形式将是笔试，这次考试的成绩将直接作为第二次课程作业的分数。  

### Notice on submission
Please note that failure to submit a complete set of project files by the specified deadline will result in a grade of zero.  
请注意，如果在规定截止日期前未能提交完整的项目文件，将导致成绩为零。  

### Standard rules on plagiarism apply to this coursework.
The Code should be your own work and must not be copied from the internet or any other source. If you have difficulty with the coursework, you should approach your practical tutor in the first instance. Posting questions about the coursework on Stack Overflow, Quora, or similar sites may be treated as an incitement to plagiarism. Posting parts of your answer to the coursework on the publicly available internet where other students may access it will be treated as an incitement to plagiarism. Soliciting or obtaining answers to the coursework in exchange for money and any other consideration will be treated as serious academic misconduct. Asking for coursework answers from any party outside of the University is itself attempted plagiarism, and you should not do it; if that third party commits any of the offences in this section on your behalf, you may be held responsible, even if you were not directly aware they would do so (because you should not have asked them in the first place).  
代码应为你的个人作品，不得从互联网或其他来源复制。如果你在课程作业中遇到困难，应首先联系你的实践导师。在 Stack Overflow、Quora 或类似网站上发布有关课程作业的问题可能被视为剽窃的诱导。将你的答案部分发布在公开可访问的互联网上，供其他学生访问，将被视为剽窃的诱导。以金钱或其他任何考虑为交换条件寻求或获取课程作业答案将被视为严重的学术不端行为。从大学外部任何一方寻求课程作业答案本身就是尝试剽窃，你不应该这样做；如果第三方代表你犯下本节中提到的任何罪行，即使你没有直接意识到他们会这样做（因为你从一开始就不应该向他们求助），你也可能被追究责任。  

## Assignment Data

<table><tr><td>Coursework 1 submission deadline<br>课程作业 1 提交截止日期</td><td>Week 6 (07/11/2025)<br>第 6 周（2025 年 11 月 7 日）</td></tr><tr><td>Coursework 1 class test<br>课程作业 1 课堂测试</td><td>On an appropriate day in Week 6<br>在第 6 周的某一天</td></tr><tr><td>Coursework 2 submission deadline<br>课程作业 2 提交截止日期</td><td>Week 11 (12/12/2025)<br>第 11 周（2025 年 12 月 12 日）</td></tr><tr><td>Coursework 2 class test<br>课程作业 2 课堂测试</td><td>On an appropriate day in Week 11<br>在第11周的适当一天</td></tr><tr><td>Assignment Weighting<br>作业权重</td><td>Class test 1 of the coursework 1 weighs 25% of the module<br>课程作业 1 的课堂测试 1 占模块总成绩的 25%<br>Class test 2 of the coursework 2 weighs 25% of the module<br>课程作业 2 的课堂测试 2 占模块总成绩的 25%</td></tr></table>

## Learning Outcomes
- Understand the fundamental concepts of C and C++ programming for object manipulation, data structuring and input/output control.
- 理解 C 和 C++编程的基本概念，包括对象操作、数据结构和输入/输出控制。
- Refine a problem specification into a collection of C++ classes.
- 将问题规范细化为一系列 C++类。
- Create a software artefact specified in terms of C++ objects and their interrelations.
- 创建一个以 C++对象及其相互关系为依据的软件工件。
- Research the techniques for safe and efficient programming in C and C++.
- 研究 C 和 C++中安全高效编程的技术。
