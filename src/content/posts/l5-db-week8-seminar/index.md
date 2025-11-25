---
title: "Databases Week8 Seminar"
published: 2025-11-20
pinned: false
description: "Query and validate"
tags: [SQL]
category: "Databases"
licenseName: "MIT"
author: "🐦‍🔥不死鸟Anka"
sourceLink: ""
draft: false
date: 2025-11-20
# image:
#   url: ''
#   alt: ''
pubDate: 2025-11-20
---

# Query and validate
Exercise 1 – Considering the `CustomerDB.csv` file from the last lecture.
a. Optimize the storage of the database by refining the structure of customers in terms of fields’ data types. Use the ALTER statement instead of recreating the table.
> [!TIP]
> Copy records to a new table for backup  
> `create table brookes.customers_copy like brookes.customers;`  
> `insert into brookes.customers_copy select * from brookes.customers;`

```sql
-- 添加自增主键 id
ALTER TABLE brookes.customers_copy 
ADD COLUMN id INT PRIMARY KEY AUTO_INCREMENT FIRST;

-- 修改 first_name 字段（长度、非空约束）
ALTER TABLE brookes.customers_copy 
MODIFY COLUMN First_Name VARCHAR(50) NOT NULL;

-- 修改 last_name 字段（长度、非空约束）
ALTER TABLE brookes.customers_copy 
MODIFY COLUMN Last_Name VARCHAR(50) NOT NULL;

-- 修改 full_name 字段长度（保持可为空）
ALTER TABLE brookes.customers_copy 
MODIFY COLUMN Full_Name VARCHAR(100);

-- 修改 cinema 字段（添加非空约束）
ALTER TABLE brookes.customers_copy 
MODIFY COLUMN Cinema VARCHAR(100) NOT NULL;

-- 修改 film 字段（添加非空约束）
ALTER TABLE brookes.customers_copy 
MODIFY COLUMN Film VARCHAR(100) NOT NULL;

-- 修改 tickets 字段（类型改为 INT、非空约束、检查约束）
ALTER TABLE brookes.customers_copy 
MODIFY COLUMN Tickets INT NOT NULL CHECK (tickets >= 1);

-- 禁用安全更新模式
SET sql_safe_updates = 0;

-- 将字符串日期（DD/MM/YYYY）转换为 DATE 类型格式（YYYY-MM-DD） 
UPDATE brookes.customers_copy 
SET Showing_Date = STR_TO_DATE(Showing_Date, '%d/%m/%Y');

-- 修改 Showing_Date 字段（类型改为 DATE、非空约束、重命名）
ALTER TABLE brookes.customers_copy 
CHANGE COLUMN Showing_Date show_date DATE NOT NULL;

-- 修改 Showing_Time 字段（类型改为 TIME、非空约束、重命名）
ALTER TABLE brookes.customers_copy 
CHANGE COLUMN Showing_Time show_time TIME NOT NULL;
```

> [!TIP]
> **安全更新模式**：`UPDATE` 语句没有明确指定 `WHERE` 子语句时会触发 `Error Code: 1175. You are using safe update mode and you tried to update atablewithout a WHERE that uses a KEY column.`  可使用 `SET sql_safe_updates = 0;` 禁用安全更新模式  
> **数据校验**：执行更新前，建议先检查是否有无法转换的异常值（如格式错误的日期），避免转换失败

```sql
-- 检查无效的日期格式（转换后为 NULL 的记录） 
SELECT Showing_Date 
FROM customers 
WHERE STR_TO_DATE(Showing_Date, '%d/%m/%Y') IS NULL;
```

> [!TIP]
> 时间字符串（`Showing_Time`）无需额外转换  
> 原时间格式为 `HH:MM:SS`（如 `20:00:00`），这与 MySQL 中 `TIME` 类型要求的格式完全一致，直接修改字段类型即可，无需提前转换。

老师的答案：
```sql
ALTER table customers
MODIFY First_Name varchar(40),
MODIFY Last_Name varchar(40),
MODIFY Full_Name varchar(50),
MODIFY Cinema varchar(15),
MODIFY Film varchar(45),
MODIFY Tickets int,
MODIFY Showing_Date date,
MODIFY Showing_Time time
```

b. Express the answer to the following questions using the proper SQL queries.

> [!TIP]
> 使用 `max()` 函数时可能会遇到 `Error Code: 1140`  
> 原因是：在外层查询中使用了 **max(count)**，但又选择了非聚合字段，然而外层没有 `GROUP BY`，导致 MySQL 不知道该返回哪一条。  
> 解决方法：`SET sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY',''));`

1. Most popular cinema? (Show one cinema only)
```sql
SELECT 
    cinema,
    SUM(tickets) AS total_tickets
FROM 
    brookes.customers2 
GROUP BY 
    cinema
ORDER BY 
    total_tickets DESC
LIMIT 1;
```

老师的答案：
1)
```sql
select cinema_name , max(cinema_count) from
(select cinema as cinema_name, count(cinema) as cinema_count from customers
group by cinema order by cinema_count desc) as tab1;
```
2)
```sql
select cin from
(select cinema_name as cin, max(cinema_count) from
(select cinema as cinema_name, count(cinema) as cinema_count from customers
group by cinema order by cinema_count desc)
as tab1)
as tab2;
```
3)
```sql
select cinema_name from
(select cinema as cinema_name, count(cinema) as cinema_count from customers
group by cinema order by cinema_count desc limit 1)
as tab1;
```

2. Most popular film? (Show one film only)
```sql
SELECT 
    Film,
    SUM(tickets) AS total_tickets
FROM 
    brookes.customers2 
GROUP BY 
    Film
ORDER BY 
    total_tickets DESC
LIMIT 1;
```

老师的答案：
1)
```sql
select F from
(select film_name as F, max(film_count) from
(select film as film_name, count(film) as film_count from customers group by film order
by film_count desc)
as tab1)
as tab2;
```
2)
```sql
select film_name from
(select film as film_name, count(film) as film_count from customers group by film order
by film_count desc limit 1)
as tab1;
```

3. Most popular date? (Show one date only)
```sql
SELECT 
	show_date, COUNT(*) as Count 
FROM 
	brookes.customers2 
GROUP BY 
	show_date 
order by 
	count(show_date) desc 
limit 1;
```

老师的答案：
- In terms of reputation:
```sql
select d from
(select sh_date as d, max(sh_date_count) from
(select showing_date as sh_date, count(showing_date) as sh_date_count from
customers group by showing_date order by sh_date_count desc)
as tab1) as tab2;
```
- In terms of tickets sold:
```sql
select d from
(select sh_date as d, max(tickets_count) from
(select showing_date as sh_date, sum(tickets) as tickets_count from customers group by
showing_date order by tickets_count desc)
as tab1) as tab2;
```

4. Most popular day of the week? (Show one day only)
```sql
SELECT 
    DAYNAME(show_date) AS weekday,
    SUM(tickets) AS total_tickets
FROM 
    brookes.customers2
GROUP BY 
    weekday
ORDER BY 
    total_tickets DESC;
```

老师的答案：
```sql
select dayname(d) from
(select sh_date as d, max(tickets_count) from
(select showing_date as sh_date, sum(tickets) as tickets_count from customers group
by showing_date order by tickets_count desc)
as tab1) as tab2
```

5. How many Cinemas exist in the customer's database?
```sql
SELECT count(DISTINCT Cinema) from brookes.customers_copy;
```

老师的答案：
```sql
select count(distinct cinema) from customers;
```

6. How many tickets did Jonathan Ali buy?
```sql
SELECT sum(Tickets) FROM brookes.customers_copy WHERE Full_name="Ali, Jonathan";
```

老师的答案：
1)
```sql
select sum(tickets) from customers where full_name='Ali, Jonathan';
```
2)
```sql
select sum(tickets) from customers where first_name='Jonathan' and last_name='Ali';
```
3)
```sql
select sum(tickets) from customers where first_name='Jonathan' and last_name='Ali'
or first_name='ALi' and last_name='Jonathan' ;
```
