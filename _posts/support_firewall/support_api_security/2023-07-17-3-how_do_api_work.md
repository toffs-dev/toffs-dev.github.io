---
layout: post
title: How do APIs work?
categories: [Support,Api_Firewall]
---
# How do APIs work?
APIs enable software programs to communicate with each other through the exchange of API calls, facilitating the sending and receiving of information. These calls are initiated by an API client and received by an API endpoint.

To facilitate the exchange of information between APIs, developers need to provide API documentation. This document outlines the types of requests that an API can handle, the intended use cases it supports, and any additional requirements (such as protocols, schemas, and security measures) that third parties must adhere to.

By making API calls, developers can leverage existing functionalities without the need to create them from scratch for each individual application. APIs eliminate the need for rewriting functions repeatedly and enable the seamless sharing of data between applications, services, and providers. Without APIs, developers would face challenges in replicating functions across multiple applications and accessing data from other apps, services, and providers.
What is an API?
An API serves as an interface facilitating the exchange of data and functions between software programs. This communication method greatly enhances the capabilities of modern web applications.

To illustrate, let's consider the scenario where Alice develops an application that personalizes classical music playlists based on listeners' moods. Instead of manually inputting a vast number of tracks to populate these playlists, she can leverage an API to connect with an external music repository. This approach saves time, and money, and simplifies the development process.

The potential applications of APIs are virtually limitless. They enable the connection of cloud services, facilitate database queries, automatically update mobile applications, seamlessly stream content to multiple devices, aggregate flight prices and food delivery options, and offer countless other possibilities.

# What is an API client?
An API client, also known as a "user," refers to the software responsible for initiating an API call.

In order to engage with an API endpoint, an API client must undergo an identity verification process. This verification step is essential to mitigate the risk of attackers exploiting APIs for malicious purposes such as distributed denial-of-service (DDoS) attacks.

Typically, authentication is accomplished through one of the following four methods: an API key, a combination of a username and password, an OAuth token, or mutual TLS. Implementing a robust authentication method is crucial for developers to fortify APIs against potential attacks. (For further information on API security, please refer to additional resources.)

# What is an API endpoint?
An API endpoint receives an API request and provides the desired data in response.

API clients and endpoints are software programs that reside on servers rather than separate hardware devices. API servers can host multiple endpoints, with each endpoint having a unique Uniform Resource Identifier (URI) for easy identification by an API client. Typically, this URI takes the form of a Uniform Resource Locator (URL), which directs to online locations such as websites.

# What is an API schema?
An API schema serves as a set of guidelines that define the necessary specifications for a valid API request. These specifications encompass various details, such as the target endpoint, HTTP method, and additional requirements established by developers.

When a client sends an API call, it must adhere to the conditions outlined in the schema. Only then can the API endpoint provide the requested information. To illustrate this concept, let's consider an example. Imagine that Bob is organizing a party, and on the invitation, he explicitly states that only guests who bring yellow daisies will receive thank-you cards after the event. Now, if Carol decides to bring red roses instead of yellow daisies, she will not be given a thank-you card.

Likewise, an API call that fails to meet the requirements set by the API schema will not receive a response.

# What is an API?
API calls, much like APIs themselves, exhibit variations based on the specifications outlined in the API documentation. However, there are generally three fundamental steps involved in an API call:

* Initiation: The API client begins the API call by requesting information. To comply with the protocol and schema provided by the API endpoint, the API client must format the request accordingly.

* Processing: The API endpoint receives the request and proceeds to authenticate the API client while validating the API schema. This authentication ensures that the call originates from a verified source and verifies that the conditions specified in the request are met.

* Response: The API endpoint furnishes the requested information back to the API client. The nature of the response is determined by the API schema, which outlines the permissible types of responses that can be provided to the client.

To delve deeper into API calls, you can refer to the article titled "What is an API call?" for a more comprehensive explanation.

# What protocols and architectures do APIs use?
APIs are supported by multiple protocols that govern how they communicate over a network, specifying the format of requests and responses. The choice of API protocol depends on the API's purpose, use cases, and limitations.

The two most prevalent API protocols are the Simple Object Access Protocol (SOAP) and Remote Procedure Call (RPC). Representational State Transfer (REST) is a software architecture often compared to these protocols.

SOAP provides a standardized approach for exchanging calls between APIs with different operating systems and architectures. It is compatible with various application layer protocols such as the Hypertext Transfer Protocol (HTTP), File Transfer Protocol (FTP), Simple Mail Transfer Protocol (SMTP), and others. SOAP exclusively returns data to API clients in Extensible Markup Language (XML) format.

RPC is a straightforward and long-standing method of communication between APIs. It involves initiating a remote procedural call, where a client requests a function from a remote server. The main distinction between RPC and SOAP/REST is that RPC is geared towards performing specific actions or functions, while SOAP/REST focus on retrieving resources or data.

REST refers to a software architecture that partially defines the format of API calls. In simple terms, REST enables a client to request resources from a server, which then returns the requested information in its current state. REST APIs commonly use the HTTP protocol to structure requests and responses, but they are also compatible with other protocols like FTP, SMTP, and others. They can return data to API clients in various formats, including XML, JavaScript Object Notation (JSON), and Hypertext Markup Language (HTML).


# Are APIs vulnerable to security risks?
APIs, like any other network-connected system, are susceptible to exploitation and misuse. Various types of attacks can target APIs, including:

* Authentication-based attacks: Authentication plays a crucial role in verifying the legitimacy of API calls. However, attackers can find ways to circumvent these measures by intercepting authentication tokens, stealing API keys, or utilizing other methods to gain access to confidential credentials.

* Vulnerability exploits: API vulnerabilities encompass a range of flaws that can be exploited by attackers. These include issues like broken object level authorization, broken user authentication, excessive data exposure, and others outlined in the OWASP API Security Top 10. By taking advantage of these weaknesses, attackers can gain unauthorized access to APIs, leading to data breaches or enabling more intricate attacks.

* DDoS attacks: In an attempt to disrupt or entirely halt API services, attackers may inundate them with voluminous traffic, known as Distributed Denial-of-Service (DDoS) attacks.

To combat these threats, Toffs API Gateway offers effective security measures. It ensures robust authentication, scans payloads for sensitive information, validates API schemas, and detects and prevents API abuse. To learn more about the capabilities of Toffs API Gateway, please visit their website.