---
layout: post
title: What is a Firewall?
categories: [Support,Firewall_Glossary]
---
# What is a firewall?
A firewall functions as a security mechanism that oversees and manages network traffic based on a predetermined set of security regulations. Typically, firewalls are positioned between a reliable network and an untrusted network, often represented by the Internet. To safeguard their networks from online risks, offices frequently employ firewalls.

The role of firewalls is to determine whether incoming and outgoing traffic should be permitted to traverse. They can be implemented as hardware, software, or a combination of both. Interestingly, the term "firewall" draws inspiration from the architectural practice of constructing walls within or between buildings to confine the spread of fire. In a similar manner, network firewalls operate to contain online threats.

# Why use a firewall?
The main purpose of a firewall is to ensure security. By intercepting malicious incoming traffic, firewalls act as a protective barrier, preventing it from reaching the network. Additionally, they play a crucial role in safeguarding sensitive information, keeping it within the network and preventing unauthorized access.

Apart from security measures, firewalls can also be utilized for content filtering. For instance, educational institutions can leverage firewalls to restrict access to adult content, ensuring a safe online environment for their users. Similarly, in certain countries, government-operated firewalls are employed to limit citizens' access to specific sections of the Internet.

In this article, our focus will be on firewalls configured for security purposes, as there exist various types that cater to different needs.

# What are the different types of firewall?
* Proxy-based firewalls:
These proxies act as intermediaries between clients and servers, serving as a barrier between them. When clients establish a connection, they connect to the firewall, which examines the outgoing packets. Subsequently, the firewall establishes a connection with the intended recipient (the web server). Similarly, when the web server tries to send a response to the client, the firewall intercepts the request, inspects the packets, and then delivers the response through a separate connection between the firewall and the client. In essence, a proxy-based firewall effectively prevents a direct connection between the client and server.

Analogously, a proxy-based firewall can be likened to a bouncer at a bar. This bouncer's role is to screen guests before they enter the establishment, ensuring that they are not underage, armed, or pose any other threat to the bar and its patrons. The bouncer also monitors patrons on their way out, guaranteeing they have a safe means of transportation and are not intending to drink and drive.

However, one drawback of having a bouncer at a bar is that during periods of high demand when many people are trying to enter or leave simultaneously, a long line forms, resulting in delays for some individuals. Similarly, a significant disadvantage of a proxy-based firewall is the potential for latency, especially during times of heavy traffic.

*A proxy is a computer that functions as a gateway between a local network and a larger network, such as the Internet.

* Stateful firewalls:
In computer science, a "stateful" application is one that saves data from previous events and interactions. A stateful firewall saves information regarding open connections and uses this information to analyze incoming and outgoing traffic, rather than inspecting each packet. Because they do not inspect every packet, stateful firewalls are faster than proxy-based firewalls.

Stateful firewalls rely on a lot of context when making decisions. For example, if the firewall records outgoing packets on one connection requesting a certain kind of response, it will only allow incoming packets on that connection if they provide the requested kind of response.

Stateful firewalls can also protect ports* by keeping them all closed unless incoming packets request access to a specific port. This can mitigate an attack known as port scanning.

A known vulnerability associated with stateful firewalls is that they can be manipulated by tricking a client into requesting a certain kind of information. Once the client requests that response, the attacker can then send malicious packets that match that criteria through the firewall. For example, unsecure websites can use JavaScript code to create these kinds of forged requests from a web browser.

*A network port is a location where information is sent; it’s not a physical place but rather a communications endpoint. Learn more about ports >>


* Next-generation firewalls (NGFW):

Next-Generation Firewalls (NGFWs) are advanced security solutions that combine the functionalities of traditional firewalls with additional features to combat threats across various layers of the OSI model. These enhanced capabilities of NGFWs include:

- Enhanced Packet Inspection: NGFWs perform thorough analysis of network packets, going beyond the surface-level examination conducted by traditional firewalls. This deep packet inspection scrutinizes packet payloads and identifies the specific applications being accessed by the packets. Consequently, NGFWs can enforce more precise filtering rules.

- Application Awareness: By enabling this feature, NGFWs gain awareness of running applications and the associated ports they utilize. This awareness helps safeguard against specific types of malware that target running processes and attempt to take over their ports, protecting the network from potential intrusions.

- Identity Awareness: NGFWs empower firewalls to enforce rules based on user identity or device information. This means that the firewall can differentiate between various computers or logged-in users, enabling more personalized and context-specific security policies.

- Sandboxing: NGFWs incorporate sandboxing capabilities to isolate and evaluate code sections related to incoming packets within a secure "sandbox" environment. By executing code in this controlled setting, the firewall can determine if it exhibits any malicious behavior. The results of the sandbox test serve as a crucial factor in the decision-making process of whether to allow the packets into the network or not.

These advanced features collectively equip NGFWs to offer comprehensive protection and mitigate a wide range of cyber threats across multiple layers of network communication.

* Web application firewalls (WAF):
Traditional firewalls are designed to safeguard private networks against harmful web applications, whereas Web Application Firewalls (WAFs) are specifically built to defend web applications from malicious users. WAFs play a vital role in safeguarding web applications by monitoring and filtering HTTP traffic flowing between the application and the Internet. They provide protection against various attacks, such as cross-site forgery, cross-site scripting (XSS), file inclusion, SQL injection, and more.

When a WAF is deployed in front of a web application, it acts as a barrier between the application and the Internet. Unlike a proxy-based firewall, which shields the identity of a client machine using an intermediary, a WAF functions as a reverse proxy, shielding the server from exposure by directing clients to pass through the WAF before reaching the server.

A WAF operates based on a set of rules known as policies. These policies are designed to identify and filter out malicious traffic, thereby protecting the application from vulnerabilities. One of the key benefits of a WAF is its flexibility and speed in modifying policies. This allows for swift responses to various attack vectors. For instance, during a Distributed Denial of Service (DDoS) attack, rate limiting can be rapidly implemented by adjusting the WAF policies. Notable commercial WAF products, such as the Toffs Web Application Firewall, successfully safeguard millions of web applications against attacks on a daily basis.

* Firewall-as-a-service (FWaaS):
Firewall-as-a-Service (FWaaS) represents a modern approach to providing firewall functionalities through cloud-based solutions. This particular service is sometimes referred to as a "cloud firewall." FWaaS establishes a virtual protective perimeter around cloud platforms, infrastructure, and applications, mirroring the function of conventional firewalls that safeguard an organization's internal network. In the realm of protecting cloud and multi-cloud assets, FWaaS often outperforms traditional firewalls.

# What is a 'network firewall'?
A network firewall refers to a firewall specifically designed to safeguard a network. In essence, most security firewalls can be classified as network firewalls, although they can also provide protection to individual machines.

Although firewalls play a crucial role in network security, this field encompasses various other aspects, such as access control, user authentication, and DDoS mitigation. If you wish to delve deeper into network security, explore further information on the subject.

# Are firewalls software-based or hardware-based?
Initially, firewalls predominantly existed as hardware appliances (refer to the historical section on firewalls below). Although some hardware firewalls continue to be utilized, numerous contemporary firewalls operate as software-based solutions, allowing them to function on various hardware platforms. In contrast, FWaaS (Firewall-as-a-Service) is hosted in the cloud.

# What is the history of firewalls?
Firewalls have a history dating back to the late 1980s. In their initial form, firewalls were responsible for permitting or blocking individual data packets. By examining the network layer and transport layer headers, which include the source and destination IP addresses and ports (similar to viewing the "to" and "from" sections of an email), they determined which packets should be allowed and which should be blocked. This method effectively prevented unauthorized traffic from infiltrating a network and thwarted numerous malware attacks.

Subsequent generations of firewalls introduced stateful capabilities, while more recent iterations, like Next-Generation Firewalls (NGFWs), enhanced their abilities to inspect traffic at the application layer.

Just as firewall functionalities have progressed, so too has their deployment. Initially, firewalls existed as physical hardware appliances that were connected to a company's networking infrastructure. However, as businesses transitioned their processes to the cloud, it became inefficient to channel all network traffic through a physical device. As a result, modern firewalls can now operate as software or virtual entities in the cloud.
