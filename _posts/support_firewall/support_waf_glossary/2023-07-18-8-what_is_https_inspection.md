---
layout: post
id_menu: firewall_glossary
title: What is HTTPS Inspection?
categories: [Support,Firewall_Glossary]
---
# What is HTTPS inspection?
HTTPS inspection, also known as SSL inspection, TLS inspection, TLS break and inspect, or HTTPS interception, refers to the process of examining encrypted web traffic by utilizing techniques similar to on-path attacks on network connections. This capability is commonly found in corporate networking devices, firewalls, and threat management products.

The purpose of HTTPS inspection is to enable organizations to scrutinize HTTPS traffic for various reasons, such as detecting malware, identifying attempts at data exfiltration, and blocking access to specific websites. Malware presents a significant security risk as it can disrupt business operations, compromise data integrity, and render files inaccessible.

By engaging in HTTPS inspection, organizations can proactively combat these threats by decrypting and inspecting the encrypted traffic passing through their networks. This enables the detection of malicious content, unauthorized data transfers, and other potential security breaches, empowering organizations to take appropriate action to mitigate risks and protect their networks and data assets.

# How does HTTPS inspection work?
When an organization employs HTTPS inspection to safeguard themselves against malware, they utilize a product that establishes two distinct encrypted connections and assumes the roles of both the client and the server. This product actively scans for malicious threats to prevent, all the while keeping the client unaware of the absence of a complete end-to-end, validated connection.

To illustrate, let's consider a situation where a student passes a note to a friend during class, unaware that the person sitting between them can read the message's contents. In this scenario, the sender believes the note is securely transmitted, unaware that it can be accessed and resealed without leaving any noticeable traces. However, HTTPS inspection differs in a significant aspect—the sender remains oblivious to the mere presence of an intermediary.

Typically, when a website uses TLS, the client device (such as a computer or smartphone) directly connects to the host server of the website and establishes an encrypted connection. Once the encryption is set up, the traffic exchanged between the client and the server remains entirely encrypted, impervious to anyone in between attempting to view the traffic.

During HTTPS inspection, the product establishes two SSL connections—one with the server and another with the client. From the client's perspective, it appears to establish a direct connection with the server, devoid of any intermediary involvement. However, the traffic is instead redirected to the inspection product, which impersonates the website. Consequently, the inspection product gains the ability to view, modify, or even block the content.

# How can secure traffic deliver malware?
During the early days of the Internet, traffic used to be transmitted over HTTP without any encryption, leaving it vulnerable to interception. This meant that all the data transmitted could be accessed by anyone who intercepted it.

With the advent of HTTPS, the secure version of HTTP, traffic is now encrypted. This involves a series of exchanges between the client and server to establish a secure connection.

HTTPS plays a crucial role in safeguarding Internet traffic from unauthorized monitoring. However, it can also be exploited by malicious individuals to conceal their activities. By encrypting and disguising all types of data, HTTPS protects sensitive information like personal banking data and even malware used by attackers.

It's important to note that the presence of a padlock icon in a browser for an HTTPS connection indicates that the data exchanged between a user and a server is encrypted. However, it doesn't guarantee complete security against attacks or unauthorized access to the entire website. Even websites operated by trusted entities, such as financial institutions, can unknowingly possess security flaws that pose risks to users. On the other hand, attackers can create deceptive websites that appear safe by having an SSL certificate and encrypting traffic.

# What are the risks of HTTPS inspection?
Improper implementation of HTTPS inspection can give rise to security vulnerabilities. When regular, unmonitored traffic flows, a browser can establish end-to-end validation by ensuring the validity of the certificate, thus verifying that the client is securely communicating with the correct server associated with the domain.

However, when this process is disrupted through inspection, several issues may arise if sufficient precautions are not taken:

* Weaker Post-Inspection Encryption: The encryption applied after inspection may be less secure, particularly if the inspection tool fails to employ up-to-date cryptographic standards.

* Inadequate Certificate Chain Validation: Certain inspection products may not accurately validate certificate chains, thereby increasing the risk of a potential on-path attack orchestrated by malicious individuals.

* Lagging Behind Security Best Practices: While web browsers receive frequent and automatic updates to address emerging security concerns, inspection products might not keep pace with the latest security standards, such as supporting the most recent version of the Transport Layer Security (TLS) protocol.

It is crucial to exercise caution and ensure proper implementation when performing HTTPS inspection to mitigate these potential problems and maintain robust security measures.

# What are the benefits of HTTPS inspection?
HTTPS inspection offers several advantages:

* Enhanced visibility into network traffic and identification of potential risks
* Improved capability to block malicious attacks on an organization's network
* Greater effectiveness in enforcing company security policies

# What are the alternatives to HTTPS inspection?
There is currently no universally accepted approach to combatting malware concealed within HTTPS traffic. However, several measures can be employed to mitigate the risks, including:

* Utilizing firewalls that analyze security certificates without compromising encryption, enabling the detection of suspicious behavior.

* Addressing the root causes of vulnerabilities related to employees by implementing restrictions on downloading unauthorized software and enhancing endpoint monitoring.

* Fine-tuning deep packet inspection rules within a firewall to enhance its ability to identify and intercept malicious traffic.

* Implementing DNS filtering and a secure web gateway to block connections to insecure websites or servers, thus preventing potential malware infiltration.

* Employing browser isolation techniques to restrict browsing activities to a secure environment, preventing the execution of unsecure code within the network.

Discover how Toffs Gateway safeguards against malware and other threats while offering nearly real-time traffic monitoring.