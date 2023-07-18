---
layout: post
title: What is an API?
categories: [Support,Firewall]
---
# What is an application programming interface (API)?
An application programming interface (API) serves as a set of regulations that empowers a software program to transfer data to another software program.

APIs allow developers to eliminate repetitive tasks; rather than creating and recreating application functions that already exist, developers can integrate existing ones into their new applications by structuring requests according to the API specifications.

An API acts as an "interface," serving as a means for two entities to interact with each other. To illustrate, consider an ATM that has an interface consisting of a screen and several buttons, enabling customers to engage with their bank and request services such as cash withdrawal. Similarly, an API facilitates the interaction between two software programs, enabling one to access required services from the other.

Let's imagine Jennifer is developing a website that assists commuters in checking highway traffic conditions before they embark on their journey to work. Jennifer could spend a significant amount of time and resources establishing a complex highway tracking system to provide this information to her website users. However, she can leverage existing capabilities developed by external parties instead of reinventing the wheel. Jennifer's website incorporates an API provided by an external highway tracking service. This allows Jennifer to concentrate on constructing other aspects of the website.

# What is an API call?
An API call, also referred to as an API request, is a message sent to an API that triggers its functionality.

In the given scenario, Jennifer designs her website in a manner that when it loads, it automatically generates an API call to a highway tracking service. The service responds to the website with the most recent highway traffic information, allowing it to display the data.

To function properly, API calls must adhere to the specific formatting requirements set by the API. These requirements are defined as the "schema" of the API. The schema also outlines the types of responses that can be expected for each request.

For instance, let's consider a commuter who uses Jennifer's website to check the traffic on Highway 192. The website sends an API call with the message "Highway 192" to request this information. The API server of the highway tracking service receives the message and responds with the travel times for Highway 192. Here's an illustrative representation of the API schema:

API request | API response

"Highway 192" | Travel times on Highway 192
"Highway 217" | Travel times on Highway 217
"Highway 225" | Travel times on Highway 225

(Please note that this example is highly simplified, and real-world API requests, responses, and schemas are typically more intricate.)

Now, suppose Jennifer's website sends an API request for "Highway ASDFGHJ." This request is invalid because it does not comply with the API's schema, which only allows actual highway names. Consequently, the server will be unable to provide a usable response to such a request.

# What is an API endpoint?
An endpoint refers to the termination point of a communication channel. When it comes to APIs, an API endpoint denotes the specific location where an API response originates.

For instance, in the given scenario, Jennifer's website serves as the client for the API connection, while the endpoint represents the server responsible for hosting the API. To receive a response, Jennifer's API requests must be directed to a particular URL (Uniform Resource Locator), which acts as a web address, such as www.Toffs.com/learning. The API server is responsible for processing these requests and generating the corresponding response.

# What is API integration?
API integration refers to the process of merging multiple applications by leveraging APIs. This integration allows one application to leverage the functionalities and features of another application. It's akin to merging a sales team and a marketing team in a single office, facilitating collaboration and mutual gains from their respective efforts. API integrations are frequently employed to synchronize data between different applications or databases.

# What is a web API?
APIs are present in various aspects of computer code, spanning from operating systems to software libraries. For web-based applications accessed over the Internet, a specific type of API, called a web API, is utilized.

Web APIs hold tremendous significance in today's Internet landscape. Nearly all user-oriented applications heavily depend on APIs to operate effectively (and this extends beyond just Jennifer's website!). Entire software development methodologies revolve around the utilization of APIs. For instance, JAMstack, which stands for JavaScript, APIs, and markup, embraces APIs as a fundamental element. Another example is the microservices architecture, where APIs are employed to invoke different functions within an application. Even applications developed without these particular approaches often rely on APIs.

# What are SOAP APIs and REST APIs?
APIs can be classified into two main categories: SOAP APIs and REST APIs.

SOAP (Simple Object Access Protocol) is a specific protocol used for APIs. SOAP APIs exclusively rely on the SOAP protocol for communication.

On the other hand, REST (REpresentational State Transfer) is an architectural style employed in web services. Any API developed using the REST architecture is referred to as a REST API. Unlike SOAP APIs, REST APIs are compatible with various protocols. In today's landscape, the majority of APIs are built using the REST architecture.

# Do APIs introduce security risks?
Just as granting access to an application carries the risk of misuse by the user, utilizing an API exposes the risk of potential abuse by the API client. Furthermore, since web API calls traverse the Internet, they are susceptible to interception, spoofing, or tampering, similar to any other data transfer over a network.

API security encompasses the practices employed to safeguard APIs against attacks and misuse. Given the vital role APIs play in the modern Internet landscape, ensuring API security is a fundamental aspect of web application security. Key measures for API security include:

* Rate limiting: Imposing restrictions on the number of API requests made by clients prevents excessive usage that can slow down or crash the API for other clients. Rate limiting sets a maximum threshold for API requests originating from a specific API endpoint within a specified time frame.

* DDoS protection: Similar to rate limiting, distributed denial-of-service (DDoS) protection defends against DDoS attacks, which attempt to overwhelm an API by flooding it with a massive volume of requests simultaneously.

* Authentication: Authenticating API endpoints and clients is crucial to ensuring that API requests originate from legitimate sources rather than malicious attackers. Mutual TLS (mTLS) is considered one of the most effective methods of API authentication.

* Schema validation: API requests that do not adhere to the defined schema may trigger unexpected behaviors in the API, potentially exposing sensitive information. Schema validation allows the API to reject non-compliant requests, mitigating potential security risks.

Toffs API Gateway incorporates these and other security features to shield against API threats. For a more comprehensive exploration of API security, refer to the article "What is API security?"