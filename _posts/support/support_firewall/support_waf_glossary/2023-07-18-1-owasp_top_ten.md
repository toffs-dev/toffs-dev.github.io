---
layout: post
title: OWASP Top Ten
categories: [Support,Firewall]
---
# What is OWASP?
OWASP, or the Open Web Application Security Project, is a global non-profit organization that focuses on web application security. One of their main principles is that all of their resources be free and easy to access on their website, so anyone can improve their web application security. The resources they provide include documentation, tools, videos, and forums. Their most famous project is probably the OWASP Top 10.

# What is the OWASP Top 10?
The OWASP Top 10 is a report that lists the most important security issues for web application security, updated regularly. The report is created by a group of security experts from around the world. OWASP calls the Top 10 a ‘awareness document’ and they suggest that all companies use the report in their processes to reduce and/or avoid security risks.

Here are the security risks in the OWASP Top 10 2017 report:

1. Injection
Injection attacks occur when untrusted data is sent to a code interpreter through a form input or some other data submission to a web application. For example, an attacker could enter SQL database code into a form that expects a plaintext username. If that form input is not well secured, this would cause that SQL code to run. This is called an SQL injection attack.

Injection attacks can be stopped by validating and/or sanitizing user-submitted data. (Validation means refusing suspicious-looking data, while sanitization means removing the suspicious-looking parts of the data.) Also, a database admin can set limits to reduce the amount of information an injection attack can reveal.

2. Broken Authentication
Weaknesses in authentication (login) systems can let attackers access user accounts and even take over an entire system using an admin account. For example, an attacker can use a list with thousands of known username/password combinations from a data breach and use a script to try all those combinations on a login system to see if any of them work.

Some ways to prevent authentication weaknesses are requiring two-factor authentication (2FA) and limiting or delaying repeated login attempts using rate limiting.


3. Sensitive Data Exposure
If web applications don't secure sensitive data such as money information and passwords, attackers can get that data and sell or use it for evil purposes. One common way to steal sensitive information is using an on-path attack.

Data exposure risk can be reduced by encrypting all sensitive data and also disabling the caching* of any sensitive information. Also, web application developers should make sure that they are not storing any sensitive data that they don't need.

*Caching is the practice of temporarily storing data for re-use. For example, web browsers will often cache webpages so that if a user goes back to those pages within a fixed time span, the browser does not have to get the pages from the web.


4. XML External Entities (XEE)
This is an attack against a web application that reads XML* input. This input can refer to an external entity, trying to exploit a weakness in the parser. An 'external entity' in this context means a storage unit, such as a hard drive. An XML parser can be tricked into sending data to an unauthorized external entity, which can give sensitive data directly to an attacker.

The best ways to stop XEE attacks are to have web applications accept a simpler type of data, such as JSON**, or at least to update XML parsers and disable the use of external entities in an XML application.

*XML or Extensible Markup Language is a markup language meant to be readable by both humans and machines. Because of its complexity and security flaws, it is now being replaced by other formats in many web applications.

**JavaScript Object Notation (JSON) is a type of easy, human-readable notation often used to send data over the internet. Although it was originally made for JavaScript, JSON is language-independent and can be understood by many different programming languages.
5. Broken Access Control
Access control means a system that controls access to information or functionality. Broken access controls let attackers bypass authorization and do tasks as if they were privileged users like administrators. For example a web application could let a user change which account they are logged in as by changing part of a url, without any other verification.

Access controls can be protected by making sure that a web application uses authorization tokens* and sets strict controls on them.

*Many services give authorization tokens when users log in. Every privileged request that a user makes will need the authorization token to be present. This is a secure way to make sure that the user is who they claim to be, without having to enter their login credentials all the time.


6. Security Misconfiguration
Security misconfiguration is the most frequent vulnerability on the list, and is often caused by using default configurations or showing too much information in errors. For example, an application could show a user very detailed errors that may expose weaknesses in the application. This can be prevented by deleting any unused features in the code and making sure that error messages are more vague.

7. Cross-Site Scripting
Cross-site scripting vulnerabilities happen when web applications let users add custom code into a url path or onto a website that will be seen by other users. This vulnerability can be used to run harmful JavaScript code on a victim’s browser. For example, an attacker could send an email to a victim that looks like it is from a trusted bank, with a link to that bank’s website. This link could have some harmful JavaScript code added to the end of the url. If the bank’s site is not well protected against cross-site scripting, then that harmful code will run in the victim’s web browser when they click on the link.

Ways to prevent cross-site scripting include escaping untrusted HTTP requests and validating and/or sanitizing user-generated content. Using modern web development frameworks like ReactJS and Ruby on Rails also gives some built-in cross-site scripting protection.

8. Insecure Deserialization
This threat affects the many web applications that often serialize and deserialize data. Serialization means taking objects from the application code and changing them into a format that can be used for another purpose, such as saving the data to disk or streaming it. Deserialization is just the reverse: changing serialized data back into objects the application can use. Serialization is like putting furniture into boxes before a move, and deserialization is like taking the boxes out and putting the furniture together after the move. An insecure deserialization attack is like having the movers mess with the contents of the boxes before they are taken out.

An insecure deserialization exploit happens when deserializing data from untrusted sources, and can lead to serious problems like DDoS attacks and remote code execution attacks. While steps can be taken to try and stop attackers, such as watching deserialization and doing type checks, the only sure way to protect against insecure deserialization attacks is to avoid the deserialization of data from untrusted sources.


9. Using Components With Known Vulnerabilities
Many modern web developers use components such as libraries and frameworks in their web applications. These components are pieces of software that help developers save time and provide needed functionality; common examples include front-end frameworks like React and smaller libraries that used to add share icons or a/b testing. Some attackers look for weaknesses in these components which they can then use to launch attacks. Some of the more popular components are used on hundreds of thousands of websites; an attacker finding a security flaw in one of these components could make hundreds of thousands of sites exposed to exploit.

Component developers often offer security fixes and updates to close known vulnerabilities, but web application developers don't always have the fixed or most-recent versions of components running on their applications. To reduce the risk of running components with known vulnerabilities, developers should delete unused components from their projects, as well as making sure that they are getting components from a trusted source and keeping them up to date.


10. Insufficient Logging And Monitoring
Many web applications are not doing enough to detect data breaches. The average time to find a breach is around 200 days after it has occurred. This gives attackers a lot of time to cause harm before there is any reaction. OWASP suggests that web developers should use logging and monitoring as well as incident response plans to make sure that they are notified of attacks on their applications.

For a more technical and detailed look at the OWASP Top 10, see the official report.
