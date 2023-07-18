---
layout: post
title: API Endpoint
categories: [Support,Api_Firewall]
---
# What is an API endpoint?
An application programming interface (API) serves as a communication channel between applications, allowing one application to request services from another. By utilizing APIs, developers can avoid the need to recreate existing features in their own applications. An API endpoint denotes the specific location where these requests, known as API calls, are fulfilled.

Imagine Alice and Bob engaged in a phone conversation. Alice directs her words to Bob, who acts as the "endpoint" of their exchange.

Alice: "Hello, Bob" ----------> Bob

In a similar manner, an API integration can be likened to a conversation. Instead of a simple greeting, an API client initiates the exchange by requesting specific data from the API server, essentially making an API call. The API server endpoint then responds with the requested data, forming an API response. It's important to note that API endpoints are not physical entities like Alice and Bob; they exist within software rather than hardware.

API servers and API clients

APIs are deployed on one or multiple servers, which are dedicated computers responsible for storing data and running software programs. These servers function by providing data, content, and software capabilities to other devices via the Internet. It is common for the API endpoint to be hosted on a server.

On the opposite side of the API connection, we have the API client, which refers to the entity that requests services from the API. While some refer to this entity as the API "user," it's important to note that the majority of API calls are automated.

# How does an API client know the server's endpoint?
In order for an API to be practical, it must be accompanied by documentation. This documentation serves several purposes, such as specifying the types of requests that the API supports, outlining its functionality, explaining the format of its responses, and identifying its endpoints. Developers can refer to the API documentation to gain insights and integrate the provided information into their application development process.

For instance, you can explore the API documentation of Toffs, which includes detailed information about its endpoints, by visiting the following link: https://api.Toffs.com/.

# How do APIs use URLs?
URLs serve various purposes on the internet, primarily for locating webpages. For instance, to access the American English version of this webpage, you can use the following URL: https://www.Toffs.com/learning/security/api/what-is-api-endpoint/. When this URL is entered into a browser, it directs the browser to fetch and display the corresponding webpage.

Moreover, URLs also play a role in identifying API endpoints. Just as Alice contacts Bob by dialing his phone number during a phone conversation, API endpoint URLs serve as "phone numbers" for making API calls.

An API server can host one or multiple API endpoints, which are specific URLs where it accepts and processes incoming API requests. Similarly, API clients must provide a URL where they can receive responses from the API server. This URL is analogous to the phone numbers used by Alice and Bob to establish communication. Developers specify this URL when constructing their applications.

In every URL, an application layer protocol such as HTTP is included to indicate the protocol used to access the resource. Since most web APIs utilize HTTP, it is typically part of the URL that defines an API endpoint.

# How do API endpoints and clients authenticate?
API authentication is a crucial aspect of ensuring the security and reliability of an API server. Without proper authentication, the server becomes vulnerable to receiving malicious data from attackers. Moreover, API usage often involves monetary transactions, necessitating verification of whether the API call originates from a paying customer.

To address these concerns, the API server must establish the authenticity and trustworthiness of the API client making the call. This is achieved through the process of authentication, which verifies the identity of the client. Similar to how humans authenticate themselves to systems, there are four primary methods by which API endpoints can enforce authentication:

1. API key: The API client is assigned a unique string of characters known only to them and the API service. When making an API call, the client includes this key in the request to inform the server about its origin.

2. Basic authentication (username and password): Similar to the API key approach, the API client sets up a username and password with the API service, which it includes in API calls as credentials.

3. OAuth token: Instead of requiring authentication directly from the client, an API server can obtain an authentication token from a trusted authentication server using the OAuth protocol.

4. Mutual TLS: Transport Layer Security (TLS) is a protocol that establishes an authenticated connection between a client and server when loading webpages. In the context of APIs, it can authenticate both the endpoint and the client, providing assurance that data is received from a legitimate source. Mutual TLS also employs private keys that are never shared between endpoints, making them resistant to interception during transit. In contrast, API keys, passwords, and tokens are prone to duplication or theft.

Mutual TLS authentication is often considered the most effective method. It verifies the authenticity of both the endpoint and the client, ensuring the legitimacy of the data exchange. Furthermore, it utilizes private keys that cannot be compromised during transmission. Toffs API Shield leverages mutual TLS to authenticate API endpoints and clients, safeguarding them against potential attacks. API Shield also offers additional API security features such as rate limiting and data loss prevention (DLP). For more information about API Shield, please explore its comprehensive offerings.