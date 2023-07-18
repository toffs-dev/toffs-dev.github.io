---
layout: post
id_menu: common_attack
title: SQL Injection
categories: [Support,Common_Attack]
---
# What is SQL injection (SQi)?
SQL Injection is a method of injecting code into an application's entry field in order to manipulate or extract data from SQL databases. By inserting specially crafted SQL statements, attackers can execute commands that enable them to retrieve data, delete sensitive information, or perform other unauthorized actions.

Through successful execution of SQL commands, an unauthorized individual can impersonate a privileged user, grant themselves or others administrative privileges, tamper with existing data, modify transactions and balances, and retrieve or destroy all data stored on the server.

In contemporary computing, SQL injection typically occurs over the Internet by sending malicious SQL queries to an API endpoint provided by a website or service. In its most severe form, SQL injection can grant attackers root access to a machine, granting them full control.

(SQL is a programming language widely used for managing most databases.)

# How does a SQL injection attack work?
Imagine a courtroom scenario where a man named Bob is on trial and is about to face a judge. While completing the paperwork before the trial, Bob fills in his name as "Bob is free to go." When the judge calls out his case and utters "Now calling Bob is free to go," the bailiff releases Bob, following the judge's words.

When it comes to SQL injections, although there may be slight variations, the fundamental vulnerability remains the same. It involves a SQL query field designated for a specific data type, such as a number, but instead receives unexpected information, like a command. When executed, this command breaches the intended limitations, potentially enabling malicious actions. Typically, a query field is populated with data entered into a form on a webpage.

Let's examine a straightforward comparison between normal and malicious SQL statements:

* Normal SQL query:

In a normal SQL query, the studentId string is passed as part of the SQL statement. The objective is to search the list of students for a match based on the entered studentId. Once a match is found, the corresponding student's record is retrieved. In essence, the command instructs the system to "locate this user and provide me with their data."

The code might resemble the following:
```sql
studentId = getRequestString("studentId");
lookupStudent = "SELECT * FROM students WHERE studentId = " + studentId;
```
If a student enters a student ID of 117 within a webpage form labeled 'Please enter your student ID number,' the resulting SQL query will appear as:
```sql
SELECT * FROM students WHERE studentId = 117;
```
This command retrieves the record associated with the specified studentId, which aligns with the developer's expectation when creating the API.

* SQL Injection query:

In this example, an attacker inputs a SQL command or conditional logic instead of a student ID number into the input field. The attacker enters:

SQL injection example from field

Instead of searching the database table for the matching ID, the query now searches for an ID or tests if 1 is equal to 1. As expected, this statement is always true for every student in the column, leading the database to return all the data from the student's table to the attacker executing the query.
```sql
SELECT * FROM students WHERE studentId = 117 OR 1=1;
```
SQL injection exploits vulnerabilities in an Application Programming Interface (API). In this context, an API serves as the software interface through which a server receives and responds to requests.

Malicious actors often use readily available tools to automatically scan websites for forms and attempt various SQL queries to elicit unintended responses from the website's software developers. These actions aim to exploit weaknesses in the underlying database.

While SQL injections can be easily implemented, interestingly, they can also be relatively easy to prevent by following proper development practices. However, real-world circumstances can complicate matters due to tight deadlines, inexperienced developers, and legacy code, leading to variable code quality and security practices. A single vulnerable field on a form or API endpoint across a website, with access to a database, may be sufficient to expose a vulnerability.

# How is a SQL Injection attack prevented?
Reducing the risk of a data breach caused by SQL injection can be achieved through various methods. It is advisable to implement several strategies to ensure best practices. Let's explore some commonly used approaches:

* Utilize Prepared Statements (with Parameterized Queries): This technique involves developers defining all the SQL code first and then passing specific parameters to the SQL query. By giving data a limited scope, the database can distinguish between input data and executable code, regardless of the data type provided in the input field. Some Object-Relational Mapping (ORM) libraries automatically sanitize database inputs, making them commonly used for this purpose.

* Escape All User Supplied Input: When writing SQL queries, certain characters or words have special meanings. To prevent users from unintentionally or maliciously using these characters in API requests to the database, user-supplied input should be escaped. Escaping characters ensures that the database treats them as literal input rather than parsing them as commands or conditionals.

* Implement Stored Procedures: While not a standalone security measure, stored procedures can help mitigate the risk of SQL injection. By limiting the permissions of the database account executing SQL queries, even vulnerable application code will lack the necessary permissions to manipulate unrelated database tables. Stored procedures can also validate input parameters to ensure they adhere to the field's intended data type. However, in cases where static queries are insufficient, it is generally recommended to avoid stored procedures.

* Enforce Least Privilege: Whenever a website requires the use of dynamic SQL, it is crucial to minimize the exposure to SQL injection by restricting permissions to the narrowest scope necessary for executing the relevant query. For example, administrative accounts should never execute SQL commands resulting from unauthorized API requests. While stored procedures are preferable for static queries, enforcing the principle of least privilege helps mitigate the risks associated with dynamic SQL queries.

By implementing these methods, organizations can enhance their defense against SQL injection and reduce the likelihood of data breaches.

# What is a compound SQL injection attack?
Clever attackers often employ multi-vector attacks to bypass security measures and target specific websites. Even if a single attack is successfully mitigated, it can draw the attention of database administrators and information security teams. To distract from their main objective, attackers may employ tactics such as DDoS attacks, DNS hijacking, and other disruptive methods, ultimately aiming to carry out widespread SQL injection attacks. Therefore, the most effective approach to counter such threats is to adopt a comprehensive threat mitigation strategy. Core components of a holistic security strategy include Toffs's web application firewall, DDoS mitigation, and DNS security, which collectively provide a wide range of protection.