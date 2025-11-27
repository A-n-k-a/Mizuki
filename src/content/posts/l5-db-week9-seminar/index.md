---
title: "Databases Week9 Seminar"
published: 2025-11-27
pinned: false
description: "Refine and Refresh"
tags: [SQL]
category: "Databases"
licenseName: "MIT"
author: "🐦‍🔥不死鸟Anka"
sourceLink: ""
draft: false
date: 2025-11-27
# image:
#   url: ''
#   alt: ''
pubDate: 2025-11-27
---

# Refine and Refresh
Exercise 1 – Considering the following tables from two different modules in the computing school, DB and FOC.

<html>
<style>
/* 强制左右并排，不自动换行 */
.md-table-container {
  display: flex;
  gap: 30px; /* 两栏间距，可按需调整 */
  margin: 10px 0;
  width: 100%;
  overflow-x: auto; /* 极端窄屏时横向滚动，不破坏并排结构 */
}
.md-table-box {
  width: 45%; /* 每栏宽度，总和小于100% + 间距，确保并排 */
  min-width: 240px; /* 最小宽度，防止表格过窄 */
}
.md-table-box h4 {
  margin: 0 0 8px 0;
  font-size: 16px;
  font-weight: 600;
}
.md-grade-table {
  border-collapse: collapse;
  width: 100%;
  font-size: 14px;
}
.md-grade-table th, .md-grade-table td {
  border: 1px solid #333;
  padding: 6px 8px;
  text-align: left;
}
.md-grade-table th {
  background-color: #f5f5f5;
}
</style>

<div class="md-table-container">
  <!-- DB_module 表格 -->
  <div class="md-table-box">
    <h4>DB_module</h4>
    <table class="md-grade-table">
      <tr>
        <th>Student_name</th>
        <th>DB_Grade</th>
      </tr>
      <tr>
        <td>Garry</td>
        <td>C</td>
      </tr>
      <tr>
        <td>Robin</td>
        <td>D</td>
      </tr>
      <tr>
        <td>Hans</td>
        <td>A</td>
      </tr>
      <tr>
        <td>Lily</td>
        <td>B</td>
      </tr>
      <tr>
        <td>Sophie</td>
        <td>B</td>
      </tr>
    </table>
  </div>

  <!-- FOC_module 表格 -->
  <div class="md-table-box">
    <h4>FOC_module</h4>
    <table class="md-grade-table">
      <tr>
        <th>Student_name</th>
        <th>FOC_Grade</th>
      </tr>
      <tr>
        <td>Garry</td>
        <td>A</td>
      </tr>
      <tr>
        <td>Robin</td>
        <td>C</td>
      </tr>
      <tr>
        <td>Hans</td>
        <td>B</td>
      </tr>
      <tr>
        <td>Denis</td>
        <td>A</td>
      </tr>
      <tr>
        <td>Lewis</td>
        <td>D</td>
      </tr>
    </table>
  </div>
</div>
</html>

a. Create the tables above in the schema, taking into account the practical size of the data.  
```sql
CREATE TABLE brookes.DB_module (
    id INT PRIMARY KEY AUTO_INCREMENT,
    Student_name TEXT NOT NULL,
    DB_Grade TEXT NOT NULL
);
CREATE TABLE brookes.FOC_module (
    id INT PRIMARY KEY AUTO_INCREMENT,
    Student_name TEXT NOT NULL,
    FOC_Grade TEXT NOT NULL
);

INSERT INTO brookes.DB_module (Student_name, DB_Grade) VALUES
('Garry', 'C'),
('Robin', 'D'),
('Hans',  'A'),
('Lily',  'B'),
('Sophie','B');

INSERT INTO brookes.FOC_module (Student_name, FOC_Grade) VALUES
('Garry', 'A'),
('Robin', 'C'),
('Hans',  'B'),
('Denis', 'A'),
('Lewis', 'D');
```

b.  
1. Write a basic SQL statement to retrieve the students who are intersecting between both modules.
```sql
SELECT Student_name
FROM brookes.db_module
WHERE Student_name IN (
    SELECT Student_name
    FROM brookes.foc_module
);
```

2. The university is planning an external workshop. Only the students enrolled in both modules, DB and FOC, are allowed to attend that workshop. Write a Join statement to help the coordinator make the right decision.
```sql
select * from brookes.db_module JOIN brookes.foc_module ON
brookes.DB_module.Student_name=brookes.foc_module.Student_name;
```
```sql
select db_Student_name as Student_name from (
select d.id as db_id,
d.Student_name as db_Student_name,
d.DB_Grade as db_Grade,
f.id as foc_id,
f.Student_name as foc_Student_name,
f.FOC_Grade as foc_Grade
from brookes.db_module as d JOIN brookes.foc_module as f ON
d.Student_name=brookes.f.Student_name) as temp;
```

3. Validate your answers by comparing the output from sections b(1) and b(2).

c. The workshop coordinator only selects students enrolled in DB and FOC modules. However, there are not enough students with the necessary conditions to fill all the available seats. So the coordinator wants a list of students who are already enrolled in one module.  
```sql
SELECT d.Student_name FROM db_module AS d LEFT JOIN foc_module AS f ON d.Student_name = f.Student_name
UNION
SELECT f.student_name FROM brookes.db_module AS d RIGHT JOIN brookes.foc_module AS f ON d.Student_name = f.Student_name;
```
```sql
SELECT Student_name
FROM DB_module
UNION
SELECT Student_name
FROM FOC_module;
```

> [!TIP]
> `UNION` 会自动去重，而 `UNION ALL` 不会

d. A programming contest has been planned to take place on Friday morning in the library. Students who take the DB module can join the contest. However, students enrolled in the FOC class can not join because their module has a class at the contest time. Write a join SQL statement to retrieve the prospective contest candidates.  
```sql
SELECT d.Student_name
FROM brookes.db_module AS d
LEFT JOIN brookes.foc_module AS f
    ON d.Student_name = f.Student_name
WHERE f.Student_name IS NULL;
```

e. Dr Maged is presenting a basic introduction to databases. Only students enrolled in the FOC module but not enrolled in the DB module can join the presentation. Help the teacher invite deserving students to the presentation.  
```sql
SELECT f.Student_name
FROM brookes.db_module AS d
RIGHT JOIN brookes.foc_module AS f
    ON d.Student_name = f.Student_name
WHERE d.Student_name IS NULL;
```
