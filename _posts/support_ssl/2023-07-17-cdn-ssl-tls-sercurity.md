---
layout: post
title: CDN SSL TLS security
categories: [Support, Certificate]
---
### What are the security risks to a CDN?
CDNs, like any networks connected to the Internet, need to protect themselves against on-path attacks, data breaches, and attempts to overload the targeted origin server through DDoS attacks. To safeguard against these vulnerabilities, CDNs employ various strategies, such as implementing robust SSL/TLS encryption and utilizing specialized encryption hardware.
What is SSL/TLS encryption?
Transport Layer Security (TLS) is a crucial protocol used to encrypt data transmitted over the Internet. It emerged as an improvement over Secure Sockets Layer (SSL), the initial widely adopted web encryption protocol, addressing the security vulnerabilities of its predecessor. While the industry sometimes uses the terms interchangeably due to historical reasons, any website starting with https:// instead of http:// employs TLS/SSL to establish secure communication between a browser and a server.

In order to safeguard valuable information, proper encryption practices are essential. The Internet's architecture involves data being transmitted through numerous locations, making it susceptible to interception. By employing a cryptographic protocol, TLS ensures that only the intended recipient can decipher and access the information, preventing intermediaries from deciphering the content of the transmitted data.

The TLS protocol encompasses three key components:

Authentication: It provides the capability to verify the authenticity and validity of the provided identifications.

Encryption: TLS enables the obfuscation of information transmitted between hosts, ensuring that it remains confidential and inaccessible to unauthorized individuals.

Integrity: The protocol facilitates the detection of forgery and tampering attempts, ensuring the integrity of the transmitted data is maintained.

### What is an SSL certificate?
In order to enable TLS (Transport Layer Security), a website requires an SSL certificate and a corresponding key. SSL certificates are files containing information about the site owner and the public part of an asymmetric key pair. These certificates are digitally signed by a certificate authority (CA) to ensure their accuracy. By trusting the certificate, users trust that the certificate authority has performed the necessary verification.



Operating systems and browsers usually have a predefined list of trusted certificate authorities. If a website presents a certificate signed by an untrusted CA, the browser alerts the visitor about a potential issue.

Certificates can be independently evaluated based on their strength, protocol support, and other characteristics. Ratings may change over time as better implementations become available or as factors affect the overall security of a certificate. If an origin server has an outdated or lower-grade SSL security implementation, it will receive a lower grade and may be susceptible to compromise.

Using a content delivery network (CDN) offers the added advantage of providing security to visitors accessing websites hosted within the CDN's network. Since visitors connect only to the CDN, the use of an older or less secure certificate between the origin server and the CDN does not impact the client's experience.



Nevertheless, relying on weaker server-to-edge security still poses a vulnerability and should be avoided. Upgrading the security of an origin server by utilizing free origin encryption is relatively simple and advisable.



Proper security also plays a significant role in organic search rankings, as encrypted websites tend to achieve higher rankings on Google searches.

An SSL/TLS connection operates differently than a traditional TCP/IP connection. Once the initial TCP connection is established, a separate exchange occurs to set up the secure connection. In this article, we refer to the device initiating the secure connection as the client and the device providing the secure connection as the server, as is the case when a user loads a webpage encrypted with SSL/TLS.

The TCP/IP handshake consists of three steps:

The client sends a SYN packet to the server to initiate the connection.
The server responds with a SYN/ACK packet to acknowledge the communication.
The client sends an ACK packet to acknowledge the receipt of the server's packet. After this sequence, the TCP connection is open for data transmission.



Once the TCP/IP handshake is complete, the TLS encryption handshake begins. The detailed processes involved in a TLS handshake implementation go beyond the scope of this guide. However, we will focus on the primary purpose of the handshake and the time required to complete the process.

At a high level, the TLS handshake comprises three main components:

Negotiating TLS versions and the cryptographic cipher to be used for communication.
Ensuring mutual authentication between the client and server.
Exchanging a key to be used for future encrypted communications.
The diagram below illustrates the steps involved in both the TCP/IP handshake and the TLS handshake. Each arrow represents a separate communication between the client and server. As TLS encryption involves more message exchanges, web page load times increase.


For illustrative purposes, the TCP handshake typically takes around 50ms, while the TLS handshake may take approximately 110ms. These durations mainly result from the time it takes for data to travel between the client and server in both directions. Round-trip time (RTT) quantifies the time required for information to travel from one device to another and back, representing the "cost" of establishing a connection. If left unoptimized and without the use of a CDN, additional RTT leads to increased latency and longer load times for end-users. Fortunately, there are optimizations available to enhance overall load time and reduce the number of round trips.

# How can SSL latency be improved?
Optimizing SSL can enhance page load time and reduce Round Trip Time (RTT). Below are three ways to optimize a TLS connection:

CDN Session Resumption: A content delivery network (CDN) can prolong the connection between the origin server and the CDN network by resuming the same session for subsequent requests. By keeping the connection alive, the CDN eliminates the need for time-consuming renegotiations between the CDN and the origin server when the client requires an uncached origin fetch. As long as additional requests are directed to the origin server while the connection to the CDN is maintained, visitors to the website will benefit from reduced latency.



Compared to a full TLS handshake, the cost of session resumption is less than 50%. This is primarily due to session resumption requiring only one round-trip, whereas a full TLS handshake necessitates two. Moreover, session resumption does not involve significant computational tasks such as large finite field arithmetic, which is required in new sessions. Consequently, the CPU cost for the client during session resumption is almost negligible in comparison to a full TLS handshake. For mobile users, the performance enhancements brought about by session resumption translate to a more responsive and battery-efficient browsing experience.


Enable TLS False Start:  When a user visits a website for the first time, the session resumption feature mentioned earlier may not provide any benefits. However, with TLS False Start, the sender can transmit application data without completing a full TLS handshake.



It's important to note that TLS False Start doesn't alter the TLS protocol itself; it simply adjusts the timing of data transfer. Once the client initiates the key exchange, encryption is ensured, and the transfer of data commences. By implementing this modification, the overall number of round trips is reduced, resulting in a significant reduction of approximately 60ms in latency.


Zero Round Trip Time Resumption (0-RTT): 0-RTT enables session resumption without adding any additional RTT latency to the connection. This improvement is applicable to resumed connections using TLS 1.3. With 0-RTT, the connection speed is enhanced, leading to a faster and smoother web experience for users who frequently visit specific websites. This speed boost is particularly noticeable when using mobile networks.

While 0-RTT is an effective enhancement, it does involve certain security tradeoffs. To mitigate the risk of replay attacks, a CDN service may implement restrictions on the type of HTTP requests and allowed parameters. For more detailed information, you can explore an introduction to 0-RTT.

# CDN protection from DDoS attacks
One of the significant security risks faced by web properties in today's internet landscape is the widespread use of distributed denial-of-service (DDoS) attacks. These attacks have evolved over time, becoming larger and more sophisticated. Attackers now employ botnets to direct overwhelming amounts of malicious traffic toward targeted websites. However, an effective countermeasure against DDoS attacks is the implementation of a robust and well-configured Content Delivery Network (CDN). By leveraging a CDN with numerous data center locations and substantial bandwidth capabilities, it becomes possible to withstand and mitigate a significant volume of attack traffic that would otherwise overpower the original server.

To enhance the security of a TLS connection, there are additional measures that can be taken. Discover more about the Toffs CDN and how it helps to address TLS attacks. Ensure that your website is utilizing HTTPS correctly by utilizing the Toffs Diagnostic Center to conduct a thorough check.
