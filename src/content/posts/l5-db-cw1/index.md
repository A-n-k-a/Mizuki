---
title: "Database Coursework 1"
published: 2025-11-07
pinned: false
description: "CHC5049 Database Coursework 1"
tags: [XML, XSLT, JSON]
category: "Databases"
licenseName: "MIT"
author: "🐦‍🔥不死鸟Anka"
sourceLink: ""
draft: false
date: 2025-11-07
# image:
#   url: ''
#   alt: ''
pubDate: 2025-11-07
---

# CHC5049 Database Coursework 1

## Learning Outcomes

The two coursework of this module address the following learning outcomes:  
本模块的两个课程作业旨在实现以下学习成果：
- Use SQL and XML to define data applications appropriate to a specified problem.
- 使用 SQL 和 XML 定义适用于特定问题的数据应用。
- Use a conceptual modeling language to specify and analyze data requirements and apply database design principles to map a set of system requirements to an efficient (e.g., normalized) database.
- 使用一种概念性的建模语言来指明和分析数据需求，并运用数据库设计原则，将一套系统需求映射到一个有效的（例如：标准化）数据库。
- Explain and design transaction-based processing in database systems.
- 解释并设计数据库系统中的基于事务的处理。
- Exploit techniques for storing and querying XML data.
- 利用存储和查询 XML 数据的技术。

## IMPORTANT INFORMATION

- Due date: <span style="color: red;">17th Nov. 2025, Monday at 13:00</span>.
- 截止日期：<span style="color: red">2025 年 11 月 17 日星期一 13:00</span>。
- This coursework is to be carried out individually.
- 本课程作业需独立完成。
- You have been given one DTD file (**orders_sample**) and three XML files (**orders_sample**, **library_orders**, and **library_clients**) to be used for the coursework.
- 您已获得一个 DTD 文件（**orders_sample**）和三个 XML 文件（**orders_sample**，**library_orders**, 和 **library_clients**) 用于课程作业。

## COURSEWORK OUTLINE

A nationwide bookstore chain with multiple branches is integrating client and order information across its stores. Clients can purchase books in-store or place orders through the company’s website. Payments are processed at the retail price, with free delivery offered within the city. Once a purchase is confirmed, the books are delivered to the client’s provided address.  
一家拥有多家分店的全国性连锁书店正在整合其门店的客户和订单信息。客户可以在店内购买图书，也可以通过公司网站下单。付款按零售价格处理，市内免费送货。一旦确认购买，书籍就会送到客户提供的地址。

The bookstore’s central administrative office has requested that client and order data be consolidated into a single XML document, suitable for upload via FTP. Additionally, the company aims to leverage the advantages of the JSON format for enhanced interoperability and analytics across its internal systems. Accordingly, the final information should also be consolidated into a single JSON document for deeper analysis and exploration.  
书店的中央管理办公室要求将客户和订单数据合并到一个XML文档中，以便通过FTP上传。此外，该公司的目标是利用JSON格式的优势来增强其内部系统之间的互操作性和分析能力。因此，还应该将最终信息合并到单个JSON文档中，以便进行更深入的分析和探索。

## DELIVERABLES
<div style="text-align: right;">[20 marks total]</div>  

You have been asked to:  
您被要求：  
1) Spot the errors in the given **`orders_sample.dtd`** file. You should provide:<br>找出给定 **`orders_sample.dtd`** 文件中的错误。您应提供：  
- **a.** An image of the DTD with the errors circled in red, along with a brief note of each error. The file should be called **`1_DTD_sample_Errors.jpeg`**.<br>**a.** 一张显示错误并用红色圈出的 DTD 图片，以及每个错误的简要说明。文件应命名为 **`1_DTD_sample_Errors.jpeg`** 。
- **b.** A corrected version of the external DTD file. The file should be called **`2_Corrected_sample.dtd`**.<br>**b.** 外部DTD文件的更正版本。该文件应该命名为 **`2_Corrected_sample.dtd`**。
- **c.** Provide a screenshot called **`3_Validation_sample.jpeg`** after validating the **`orders_sample.xml`** file against the corrected external DTD through a validator, proving that they validate with no errors.<br>**c.** 在通过验证器根据已纠正的外部DTD验证了 **`orders_sample.xml`** 文件后，提供一个名为 **`3_Validation_sample.jpeg`** 的屏幕截图，证明它们验证时没有错误。

2) Submit two XSLT transformations and output files, one to export the XML data and the other to export the JSON data. Your XSLT files must be correctly formatted and be able to run against the XML files (**`library_orders`**, and **`library_clients`**) supplied by the bookstore company. The following specifications must be followed:<br>提交两个XSLT转换和输出文件，一个用于导出XML数据，另一个用于导出JSON数据。XSLT文件必须正确格式化，并且能够运行书店公司提供的XML文件（ **`library_orders`** 和 **`library_clients`** ）。必须遵守以下规范：

**a. XML:**
- **I.** The XSL file must be called **`4_Transformation_to_XML.xsl`**.<br>**I.** XSL 文件必须命名为 **`4_Transformation_to_XML.xsl`**。
- **II.** It must use XSLT v1.0 as requested by the company.<br>**II.** 它必须使用公司要求的 XSLT v1.0。
- **III.** You have to provide comments to explain your reasoning and work.<br>**III.** 您必须提供注释来解释您的推理和工作。
- **IV.** The XML output file must contain a root element called `Orders`.<br>**IV.** XML 输出文件必须包含一个名为 `Orders` 的根元素。
- **V.** The XML file contents should contain the orders and the relevant client data, ordered by the branch, and then by date.<br>**V.** XML 文件内容应包含订单和相关的客户数据，按分支排序，然后按日期排序。
- **VI.** The provided XML file must be called **`5_Output.xml`**.<br>**VI.** 提供的 XML 文件必须命名为 **`5_Output.xml`**。
- **VII.** A related external DTD must be automatically referenced in the `output.xml` file and not be manually added.<br>**VII.** 相关的外部 DTD 必须在 `output.xml` 文件中自动引用。
- **VIII.** DTD Details:<br>**VIII.** DTD 详细信息：<br>Create a new external DTD file that describes the output XML file. So that the administrative office can validate the XML output file and ensure it is correct. The DTD must adhere to the following requirements:<br>创建一个描述输出XML文件的新的外部DTD文件。以便管理办公室能够验证XML输出文件并确保它是正确的。DTD必须遵循以下要求：
1. It must follow a logical structure of the data as follows:<br>必须遵循以下数据逻辑结构：
```
Orders
    Branch
        Date
            Order
                ...Order and client details
            Order
                ...Order and client details
        Date
            Order
                ...Order and client details
    Branch
        Date
            Order
                ...Order and client details
```
2. Well-written external DTD structure.<br>编写良好的外部 DTD 结构。
3. Logical naming convention of elements and attributes.<br>元素和属性的命名约定合理。
4. Nested elements are correctly declared.<br>嵌套元素声明正确。
5. At least one attribute should be used.<br>至少应使用一个属性。
6. The DTD file must be called **`6_Structure.dtd`**.<br>DTD 文件必须命名为 **`6_Structure.dtd`**。
7. It should be validated against the output XML file through a validator, and a screenshot called **`7_Validation_XML.jpeg`** should be attached, showing that it validates with no errors.<br>应该通过验证器根据输出XML文件对其进行验证，并且应该附加一个名为 **`7_Validation_XML.jpeg`** 的屏幕截图，显示它验证时没有出现错误。

> [!TIP]
> 使用IntelliJ IDEA自带的验证器（打开xml文件，单击鼠标右键，在菜单中选择“验证”(Validate)即可）

**b. JSON:**
- **I.** The XSL file must be called **`8_Transformation_to_JSON.xsl`**.<br>**I.** XSL 文件必须命名为 **`8_Transformation_to_JSON.xsl`**。
- **II.** You have to provide comments to explain your reasoning and work.<br>**II.** 您必须提供注释来解释您的推理和工作。
- **III.** Ensure that the content of the JSON file accurately represents the data from the XML files and save the converted file as **`9_Output.json`**.<br>**III.** 确保JSON文件的内容准确地表示来自XML文件的数据，并将转换后的文件保存为 **`9_Output.json`**。
- **IV.** Validate the JSON file, capture a screenshot of the validation, and save it as **`10_Validation_json.jpeg`** to demonstrate that the file has no errors.<br>**IV.** 验证JSON文件，捕获验证的屏幕截图，并将其保存为 **`10_Validation_json.jpeg`**，以证明该文件没有错误。

> [!TIP]
> 可使用第5周课上提到的 https://jsonlint.com/ 验证JSON文件

## Submission Bundle

The specification for the structure of the submission is as follows:  
提交结构的规范如下：  
- **a.** A ZIP file should be uploaded via the online portal.<br>**a.** 应通过在线门户上传一个 ZIP 文件。
- **b.** The ZIP bundle must be named **`Coursework1_StudentID.zip`**.<br>**b.** ZIP 包必须命名为 **`Coursework1_StudentID.zip`**。
- **c.** File names must be **EXACT**, including the specified file extension.<br>**c.** 文件名必须**完全准确**，包括指定的文件扩展名。

<table border="0" cellpadding="5" cellspacing="0"> <thead> <tr style="background-color: #ffff54;"> <th>File type</th> <th>Purpose</th> <th>Filename</th> <th>Marks</th> </tr> </thead> <tbody> <tr> <td>JPEG file</td> <td>Image with DTD errors + errors description</td> <td>1_DTD_sample_Errors.jpeg</td> <td>2</td> </tr> <tr> <td>DTD file</td> <td>Your corrected DTD file</td> <td>2_Corrected_sample.dtd</td> <td>2</td> </tr> <tr> <td>JPEG file</td> <td>Image of your XML validation</td> <td>3_Validation_sample.jpeg</td> <td>1</td> </tr> <tr style="border-top: 2px solid #000;"> <td>XSL file</td> <td>Your XSL to XML transform file</td> <td>4_Transformation_to_XML.xsl</td> <td>4</td> </tr> <tr> <td>XML file</td> <td>The result of your XML transform</td> <td>5_Output.xml</td> <td>1</td> </tr> <tr> <td>DTD file</td> <td>The DTD that validates the XML output file</td> <td>6_Structure.dtd</td> <td>3</td> </tr> <tr> <td>JPEG file</td> <td>Image of your XML validation</td> <td>7_Validation_XML.jpeg</td> <td>1</td> </tr> <tr style="border-top: 2px solid #000;"> <td>XSL file</td> <td>Your XSL to JSON transform file</td> <td>8_Transformation_to_JSON.xsl</td> <td>4</td> </tr> <tr> <td>JSON file</td> <td>The result of your JSON transform</td> <td>9_Output.json</td> <td>1</td> </tr> <tr> <td>JPEG file</td> <td>Image of your JSON validation</td> <td>10_Validation_json.jpeg</td> <td>1</td> </tr> </tbody> </table>
