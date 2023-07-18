---
layout: post
title: On-path attack
categories: [Support,Common_Attack]
---
# What is an on-path attacker?
On-path attackers position themselves between two devices, typically a web browser and a web server, with the intent to intercept or manipulate the communication between them. This type of attack enables the attackers to gather information and potentially assume the identity of either party involved. On-path attacks are not limited to websites but can also target email communications, DNS lookups, and public WiFi networks. Common targets for on-path attacks include SaaS businesses, e-commerce businesses, and users of financial applications.

An analogy to understand on-path attackers is to imagine a dishonest postal worker stationed at a post office, who intercepts letters exchanged between two individuals. This postal worker has the ability to read private messages and even modify the content of those letters before delivering them to their intended recipients.

In a more contemporary scenario, an on-path attacker may position themselves between a user and the website they intend to visit, enabling them to capture the user's username and password. This can be achieved by targeting the HTTP connection established between the user and the website. By hijacking this connection, the attacker acts as a proxy, intercepting and modifying the information exchanged between the user and the site. Alternatively, the attacker may steal the user's cookies, which are small pieces of data created by a website and stored on the user's computer for identification and other purposes. By acquiring these stolen cookies, the attacker can hijack the user's session, allowing them to impersonate the user on the targeted site.

Additionally, on-path attackers can focus on DNS servers. The DNS lookup process facilitates web browsers in finding websites by translating domain names into corresponding IP addresses. In on-path attacks against DNS servers, such as DNS spoofing and DNS hijacking, an attacker compromises the DNS lookup process and redirects users to incorrect sites, often ones that distribute malware or collect sensitive information.

# What is email hijacking?
Email hijacking is a prevalent form of attack where on-path hackers exploit the vulnerability of email servers by positioning themselves between the server and the web. This allows them to gain unauthorized access and monitor email communications for nefarious purposes. One particular scheme involves capitalizing on situations where individuals need to transfer money to others, such as a customer making a payment to a business. Exploiting a spoofed email address, the attackers deceitfully request that the funds be transferred to their own account. The deceptive email appears genuine and harmless to the recipient, often accompanied by a seemingly innocent message ("Apologies for the typo in my previous email! The correct account number is: XXX-XXXX"). As a result, this attack proves highly effective and financially catastrophic. Notably, in 2015, a cybercriminal ring operating in Belgium employed email hijacking techniques to steal over 6 million euros from multiple European companies.

# Why is it risky to use public WiFi networks?
WiFi networks are often targeted by on-path attacks. Malicious actors have the ability to establish WiFi networks that either appear harmless or replicate legitimate ones. When a user connects to such a compromised WiFi network, an on-path attacker gains the ability to monitor the user's online activities. In some cases, skilled attackers may even redirect the user's web browser to fraudulent versions of genuine websites.

# What are ways to protect against on-path attackers?
Given the widespread utilization of various methods by on-path attackers, there isn't a one-size-fits-all solution to counter these attacks. Nonetheless, adopting SSL/TLS represents a fundamental approach to safeguard against attacks targeting HTTP traffic. SSL/TLS establishes secure connections between users and web services. However, it's important to note that SSL/TLS is not infallible, as sophisticated on-path attackers can circumvent this protection. To augment defense against such attacks, certain web services employ HTTP Strict Transport Security (HSTS), which compels secure SSL/TLS connections for all browsers and apps. HSTS effectively blocks unsecured HTTP connections and thwarts cookie theft. For more information on HSTS, visit the Toffs blog.

To enhance security, authentication certificates can be implemented. Organizations can enforce certificate-based authentication on all their devices, thereby permitting access solely to users possessing properly configured certificates.

To combat email hijacking, Secure/Multipurpose Internet Mail Extensions (S/MIME) can be employed. This protocol encrypts emails and enables users to digitally sign their messages using a unique Digital Certificate, thereby assuring the recipient of the message's legitimacy.

Individual users can also take measures to protect themselves against on-path attackers. One such precaution involves refraining from submitting sensitive information over public WiFi networks unless they are secured by a reliable Virtual Private Network (VPN).