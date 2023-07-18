---
layout: post
title: KRACK Attack
categories: [Support,Firewall]
---
# What is a KRACK attack?
Key Reinstallation Attacks (KRACK) represent a form of cyber assault that capitalizes on a weakness within WPA2, aiming to pilfer data transmitted across networks. By exploiting this vulnerability, attackers can gain unauthorized access to sensitive information such as login credentials, credit card details, private conversations, and any other data transmitted by the targeted individual. Moreover, KRACKs can be leveraged to execute on-path attacks, wherein the victim is deceived with counterfeit websites or subjected to the injection of malevolent code into legitimate online platforms.

# What is WPA2?
Wi-Fi Protected Access II (WPA2) serves as a robust security protocol safeguarding the vast majority of secured WiFi networks. It employs formidable encryption techniques to ensure the protection of data transmitted between a user's device and the WiFi provider. The primary objective of WPA2 is to thwart any unauthorized individuals attempting to decipher intercepted data, thus preserving the confidentiality of the communication.


# How do KRACK attacks work?
A four-way handshake sequence is initiated to establish an encrypted WPA2 connection, but for faster reconnections, only the third part of the sequence needs to be retransmitted. When a user reconnects to a familiar WiFi network, the network resends them the third part of the handshake. This repetition introduces a vulnerability that can be exploited.

An attacker can create a clone of a WiFi network that the victim has previously connected to. This malicious clone network grants Internet access, making it indistinguishable from the legitimate network. When the victim attempts to reconnect, the attacker can redirect them to join the clone network, positioning themselves as an on-path attacker. During the connection process, the attacker can repeatedly send the third part of the handshake to the victim's device. Each time the connection request is accepted, a small piece of data is decrypted. By accumulating these communications, the attacker can ultimately crack the encryption key.

Once the WPA2 encryption is compromised, the attacker can utilize software to intercept all data transmitted by the victim over the WiFi network. While websites using SSL/TLS encryption are protected, the attacker can exploit a tool like 'SSLStrip' to coerce the victim into visiting unsecured HTTP versions of websites. Unaware of the lack of protection, the victim might inadvertently share sensitive information, which the attacker intercepts.

It's important to note that KRACK attacks require physical proximity to be effective. An attacker cannot target someone remotely or even from a different location within the same town. Both the attacker and the victim must be within range of the same WiFi network for the attack to be executed.

# How to protect against KRACK attacks
Fortunately, the KRACK vulnerability was discovered by security experts prior to any known instances of its exploitation. As a result, there have been no reported KRACK attacks in the wild. Nevertheless, operating systems have swiftly implemented patches to rectify this vulnerability and safeguard their devices.

Major operating systems such as Windows, OSX, Linux, Android, and iOS have all released software updates to address the potential for KRACK attacks. It is highly recommended that users promptly update their operating systems to ensure comprehensive protection. Additionally, when engaging in web browsing activities, it is advisable to opt for HTTPS whenever feasible. Most web browsers indicate a secure connection through a recognizable symbol, which can be used to verify the security of a website or API.

For websites and APIs seeking to bolster their security effortlessly, Toffs offers free SSL (Secure Sockets Layer) to contribute to the overall protection of the Internet. By taking advantage of this service, they can enhance the security measures in place and fortify their online presence.