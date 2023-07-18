---
layout: post
title: IoT security
categories: [Support,Firewall]
---
# What is IoT security?
The Internet of Things (IoT) refers to a collection of computerized objects connected to the internet, such as networked security cameras, smart refrigerators, and WiFi-enabled automobiles. The security of these IoT devices is crucial to prevent potential threats within a network.

Since anything connected to the internet is susceptible to attacks, perpetrators may employ various methods to remotely compromise IoT devices. These methods range from stealing credentials to exploiting vulnerabilities. Once attackers gain control over an IoT device, they can exploit it for data theft, execute distributed denial-of-service (DDoS) attacks, or attempt to compromise the entire connected network.

Securing IoT devices poses unique challenges due to the lack of robust built-in security measures. Manufacturers often prioritize features and usability over security, resulting in devices being rapidly introduced to the market without adequate protection.

With the increasing integration of IoT devices into everyday life, both consumers and businesses may encounter challenges related to IoT security.

# What attacks are IoT devices most susceptible to?
* Firmware vulnerability exploits
Firmware, the essential software that powers computerized devices, is present in all of them. It serves as the operating system for most IoT devices, while in computers and smartphones, it operates beneath the main operating system.

Compared to the advanced operating systems found in computers, IoT firmware generally lacks extensive security measures. Additionally, it frequently contains well-known vulnerabilities that cannot always be fixed or patched. Consequently, these vulnerabilities make IoT devices susceptible to targeted attacks.

* Credential-based attacks
Numerous IoT devices are equipped with default administrator usernames and passwords. Unfortunately, these default credentials often lack sufficient security measures. For instance, a common password choice is "password," which is highly vulnerable. Even more concerning is the fact that certain IoT device models utilize identical credentials across all their devices, with no option to change them.

Malicious actors are fully aware of these default login details, and countless successful attacks on IoT devices are the result of attackers successfully guessing these credentials.

* On-path attacks
On-path attackers strategically position themselves in the middle of two mutually trusting parties, such as an IoT security camera and its cloud server, with the intention of intercepting their communications. These attackers take advantage of the vulnerability of IoT devices, which often lack default encryption in their communications. Encryption plays a crucial role in scrambling data, making it unintelligible to unauthorized individuals.

* Physical hardware-based attacks
Numerous IoT devices, such as IoT security cameras, stoplights, and fire alarms, are strategically positioned in public spaces for long-term use. In the event that an unauthorized individual gains physical access to the hardware of an IoT device, they possess the ability to pilfer its data or seize control of the device. Although this method typically impacts only a single device, a physical attack could potentially yield more significant consequences if the attacker acquires information that empowers them to compromise additional devices within the network.

# How are IoT devices used in DDoS attacks?
In DDoS attacks, malicious actors frequently exploit vulnerable IoT devices to generate network traffic. The potency of these attacks increases when the attackers can unleash a barrage of traffic from a diverse array of devices. This poses a challenge for mitigation since blocking such attacks becomes more difficult due to the multitude of IP addresses involved, with each device possessing its unique IP address. The Mirai botnet, widely regarded as one of the largest DDoS botnets ever detected, primarily consists of compromised IoT devices.

# What are some of the main aspects of IoT device security?
* Software and firmware updates
Regular updates are essential for IoT devices to maintain optimal security. Manufacturers release vulnerability patches and software updates that address potential weaknesses that attackers might exploit. It is crucial to install these updates promptly, as even a minor time lag can leave a device susceptible to attacks. In most cases, manufacturers retain control over IoT firmware updates, making it their responsibility to ensure that vulnerabilities are effectively patched, rather than the device owner's duty.

* Credential security
If feasible, it is advisable to update the administrative credentials of IoT devices. It is highly recommended to refrain from using the same credentials for multiple devices and applications. Each device ought to possess a distinctive password, as this significantly reduces the risk of credential-based attacks.

* Device authentication
The interconnection of IoT devices involves establishing connections between each other, servers, and other networked devices. It is crucial to authenticate every connected device to prevent unauthorized entities from accessing or manipulating them.

Consider a scenario where a malicious actor attempts to impersonate an IoT device and gain access to sensitive information from a server. However, if the server mandates the presentation of a valid TLS certificate (further details on this concept below), such an attack would be unsuccessful.

In general, the responsibility for configuring this authentication mechanism lies with the device manufacturer.

* Encryption
Data exchanges between IoT devices are susceptible to external threats and on-path attackers during their transmission across networks, unless appropriate encryption measures are implemented. Encryption can be likened to an envelope that safeguards the contents of a letter during its journey through the postal service.

To effectively thwart on-path attacks, encryption should be complemented with authentication. Without this combination, attackers could establish separate encrypted connections between individual IoT devices, allowing them to intercept communications without the knowledge of either device involved.

* Turning off unneeded features
Many IoT devices offer a range of features, some of which owners may never utilize. However, even when these features remain untouched, they can leave additional ports open on the device for potential use. The more open ports a connected IoT device has, the larger the attack surface becomes. In many cases, attackers will attempt to ping various ports on a device, searching for vulnerabilities. By disabling unnecessary device features, these extra ports can be closed, reducing the risk of potential attacks.

* DNS filtering
DNS filtering involves utilizing the Domain Name System to restrict access to harmful websites. By implementing DNS filtering as a security measure within a network that encompasses IoT devices, it effectively prevents these devices from accessing unauthorized destinations on the Internet, such as domains controlled by attackers.

# What is mutual TLS (mTLS)?
Mutual Transport Layer Security (mTLS) represents a form of mutual authentication, wherein both ends of a network connection authenticate each other. Unlike traditional TLS, which solely authenticates the server in a client-server setup, mTLS validates both the connected devices involved.

In the context of IoT security, mTLS plays a vital role by ensuring that only legitimate devices and servers have the ability to send commands or request data. Additionally, it employs encryption for all network communications, preventing unauthorized interception by potential attackers.

The implementation of mTLS necessitates the issuance of TLS certificates to all authenticated devices and servers. These certificates contain the device's public key and relevant information about the issuing authority. To draw a parallel, presenting a TLS certificate when initiating a network connection is akin to an individual showcasing their ID card as proof of identity.