---
layout: post
title: Origin server
categories: [Support,Cdn_glossary]
---
### What is an origin server?
# What is the difference between an origin server and a CDN edge server?
# Can an origin server still be attacked while using a CDN?
### Aching?
What is an origin server?
An origin server serves the purpose of processing and responding to incoming Internet requests from clients. It is commonly used in conjunction with edge servers or caching servers. Essentially, an origin server is a computer that runs one or more programs, specifically designed to receive and handle incoming Internet requests. It can handle the responsibility of delivering content for an Internet property, like a website, as long as the server can handle the incoming traffic without exceeding its processing capabilities, and latency is not a primary concern.

When a client makes a request to an origin server, the physical distance between them introduces latency, causing a delay in loading internet resources such as webpages. Additionally, establishing a secure Internet connection using SSL/TLS adds further latency due to the extra round-trip time (RTT) required between the client and the origin server. This directly affects the client's experience when requesting data from the origin. However, by utilizing a content delivery network (CDN), both the round-trip time and the number of requests to the origin server can be reduced, leading to decreased latency.
What is the difference between an origin server and a CDN edge server?
To put it in simpler terms, CDN edge servers are strategically placed computers located at key points between major Internet providers worldwide. Their purpose is to deliver content as quickly as possible. An edge server resides within a CDN at the "edge" of a network and is optimized for rapid request processing. By strategically positioning edge servers within Internet exchange points (IxPs) that connect networks, CDNs can minimize the time it takes to access specific locations on the Internet.

The primary function of these edge servers is to cache content, reducing the workload on one or more origin servers. By storing static assets like images, HTML, JavaScript files, and potentially other content closer to the requesting client machine, an edge server's cache significantly decreases the loading time of web resources. Origin servers still play a crucial role in CDNs, particularly for server-side code such as the database containing hashed client credentials used for authentication. Origin servers maintain this critical data.

Let's consider a simple example to illustrate how an edge server and an origin server collaborate to serve a login page and enable user authentication. A basic login page requires several static assets to be downloaded for proper webpage rendering:

HTML file for the webpage
CSS file for webpage styling
Multiple image files
Several JavaScript libraries
These files are static and identical for all website visitors. Consequently, they can be cached and served to clients directly from the edge server. This approach enables loading these files closer to the client machine, without consuming origin server bandwidth.



Afterward, when a user enters their login credentials and clicks "login," the request for dynamic content is sent back to the edge server. The edge server acts as a proxy and forwards the request to the origin server. The origin server verifies the user's identity using the associated database table and returns the specific account information.



This interaction between edge servers handling static content and origin servers providing dynamic content is a typical division of responsibilities in CDN usage. Some CDNs may offer capabilities that go beyond this basic model.

# Can an origin server still be attacked while using a CDN?
In short, yes, a CDN can provide significant benefits. While it doesn't make an origin server invincible, when utilized effectively, it can make an origin server essentially invisible by acting as a protective shield against incoming requests. An essential aspect of CDN setup is concealing the real IP address of the origin server. To ensure maximum security, it is advisable for the CDN provider to recommend changing the IP address of the origin server during the implementation of a CDN strategy. This measure helps prevent DDoS attacks from bypassing the shield and directly targeting the origin server. Toffs's CDN offers comprehensive DDoS protection as part of its service.