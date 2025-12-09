---
title: "Databases Week11 Lecture"
published: 2025-12-08
pinned: false
description: "Analytical Schemas"
tags: []
category: "Databases"
licenseName: "MIT"
author: "🐦‍🔥不死鸟Anka"
sourceLink: ""
draft: false
date: 2025-12-08
# image:
#   url: ''
#   alt: ''
pubDate: 2025-12-08
---

# Analytical Schemas
## Table of content
- Review Week10 Tutorial.
- OLTP Transactional Schemas.
- OLAP Analytical Schemas.

## Online Transaction Processing (OLTP) <br>Vs Online Analytical Processing (OLAP)
![](Pasted_image_20251208143616.png)

## OLTP vs OLAP

<table>
    <tr>
        <td>- OLTP (Online Transactional Processing Schemas).<br>- High volume of transactions.<br>- Normalized data.<br>- Many tables.</td>
        <td>- OLAP (Online Analytical Processing Schemas).<br>- High volume of data.<br>- Denormalized data.<br>- Fewer tables.</td>
    </tr>
</table>

## Online Analytical Processing Schemas
- ROLAP
- MOLAP
- HOLAP

### ROLAP
- Relational online analytical processing.
- used for handling large amount of data.
- Can be stored efficiently.
- Performance of ROLAP can be slow.

```mermaid
---
config:
  theme: 'forest'
---
erDiagram
    FACT ||--o{ GEO : "cinema"
    FACT ||--o{ FILM : "film"
    FACT ||--o{ CUSTOMERS : "creditcard"
    FILM ||--o{ COUNTRY : "country"
    
    FACT {
        string Full_Name
        string Cinema
        string Film
        int Tickets
        date Showing_Date
        time Showing_Time
        string CreditCard_Number
    }
    
    GEO {
        string Cinema
        string Region
        string Country
    }
    
    FILM {
        string Film
        string Certificate
        string Country
    }
    
    COUNTRY {
        string Country
        int Population
        string ISOCountry
    }
    
    CUSTOMERS {
        string First_Name
        string Last_Name
        string Full_Name
        string CreditCard_Number
        date Date_Of_Birth
    }
```

![](ROLAP.png)

### MOLAP
- Multidimensional online analytical processing.
- Data is arranged in the form of data cubes.
- Designed to be faster than ROLAP.
- Used for complex calculations.
- Limited size and less flexibility.
- Excel pivot tables as an example.

![](MOLAP.png)

### HOLAP
- Hybrid Online Analytical Processing.
- Uses ROLAP for large, complex, uncommon analytics.
- Uses MOLAP for small, fast common analytics and complex mathematical calculations
