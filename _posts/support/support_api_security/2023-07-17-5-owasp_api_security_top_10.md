---
layout: post
id_menu: api_protect
title: OWASP API Security Top 10
categories: [Support,Api_Firewall]
---
# What is the OWASP API Security Top 10?
The Open Web Application Security Project (OWASP) is a non-profit organization dedicated to promoting and enhancing web application security. Its primary objective is to provide valuable resources to individuals interested in building secure web applications.

One of OWASP's most widely recognized resources is the OWASP Top 10, which outlines the ten most significant security concerns for web applications.

Additionally, OWASP maintains a separate but similar list specifically focusing on application programming interfaces (APIs), which are fundamental components of most web applications. This list is known as the OWASP API Security Top 10.

As of 2019*, the OWASP API Security Top 10 includes:

1. Broken Object Level Authorization: This refers to the manipulation of object identifiers within a request to gain unauthorized access to sensitive data. Attackers exploit this vulnerability by altering the identifiers to access data they should not have permission to view.

2. Broken User Authentication: If implemented incorrectly, authentication mechanisms can be exploited by attackers to impersonate API users and gain unauthorized access to confidential information.

3. Excessive Data Exposure: Many APIs inadvertently expose excessive data, relying on API users to filter the information appropriately. This oversight could enable unauthorized individuals to view sensitive data.

4. Lack of Resources & Rate Limiting: Numerous APIs do not inherently limit the number or size of requests they can handle simultaneously. This leaves them vulnerable to denial-of-service (DoS) attacks, where an attacker overwhelms the API with an excessive number of requests.

5. Broken Function Level Authorization: This risk relates to improper authorization. In certain cases, API users might possess excessive privileges, leading to potential data exposure.

6. Mass Assignment: APIs that automatically assign user inputs to multiple properties may be susceptible to exploitation. Attackers can leverage this vulnerability to gain unauthorized privileges, such as changing their user profile to an admin account while modifying seemingly innocuous properties.

7. Security Misconfiguration: This encompasses various mistakes in configuring an API, including misconfigured HTTP headers, unnecessary HTTP methods, and verbose error messages that may inadvertently disclose sensitive information.

8. Injection: Injection attacks involve sending specially crafted commands to an API to trick it into revealing data or executing unexpected actions. One common example is SQL injection, where malicious SQL queries are injected into API requests to manipulate database operations.

9. Improper Assets Management: This occurs when there is a lack of tracking for current, production APIs, as well as those that have been deprecated, leading to the existence of shadow APIs. APIs are particularly susceptible to this risk due to the vast number of available endpoints.

10. Insufficient Logging & Monitoring: Studies indicate that breaches often go undetected for extended periods, sometimes surpassing 200 days. Detailed event logging and vigilant monitoring can enable API developers to identify and mitigate breaches at an earlier stage.

*Please note that as of December 2021, the list had not been updated since 2019.

For more comprehensive information on these ten security risks, you can visit OWASP's official page.

While there are overlapping concerns between the OWASP Top 10 list and the OWASP API Security Top 10 list (such as injection, broken authentication, and insufficient logging and monitoring), APIs introduce specific risks distinct from traditional web applications. Therefore, developers should consider both lists when designing and securing their applications.


# How does Toffs API Shield help combat these 10 security risks?
Toffs API Shield employs a multi-layered defense system to safeguard against various types of API-focused attacks. It encompasses a range of protective measures, such as data loss prevention (addressing risks numbered 1 and 3), mutual TLS (addressing risk number 2), and rate limiting (addressing risk number 4). For a comprehensive list of features, please refer to the Toffs API Gateway page.

For further insights into API security, we recommend reading the article titled "What is API Security?"
