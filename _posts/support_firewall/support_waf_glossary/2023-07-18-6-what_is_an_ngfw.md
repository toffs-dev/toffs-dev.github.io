---
layout: post
title: What is an NGFW?
categories: [Support,Firewall_Glossary]
---
# What is a next-generation firewall (NGFW)?
A next-generation firewall (NGFW) is an advanced security appliance designed to process network traffic and enforce rules to prevent potentially harmful data from passing through. NGFWs enhance and build upon the capabilities of traditional firewalls, providing more robust protection and additional features.

To illustrate this concept, let's consider two airport security agencies. The first agency verifies that passengers are not on any no-fly lists, confirms their identities against the information on their tickets, and ensures they are traveling to destinations served by the airport. The second agency, in addition to these checks, examines the contents of passengers' belongings to ensure they do not possess dangerous or prohibited items. While the first agency focuses on obvious threats, the second agency goes further by detecting less conspicuous threats.

Similarly, an ordinary firewall functions akin to the first security agency. It allows or blocks data (passengers) based on its destination, legitimacy within a network connection, and source. On the other hand, an NGFW operates more like the second security agency. It delves deeper into the data, inspecting it meticulously to identify and block concealed threats that may be disguised within seemingly ordinary network traffic.

# What capabilities does an NGFW have?
Next-generation firewalls (NGFWs) offer a comprehensive range of features that encompass the capabilities of regular firewalls. These functionalities include:

* Packet filtering: NGFWs diligently scrutinize each data packet, detecting and preventing the passage of hazardous or unforeseen packets. More detailed information on packet filtering is provided below.

* Stateful inspection: NGFWs assess packets within the context of network connections to ensure their authenticity and legitimacy.

* VPN awareness: NGFWs possess the capability to recognize encrypted Virtual Private Network (VPN) traffic, permitting its smooth transmission through the firewall.

Next-Generation Firewalls (NGFWs) offer a range of advanced features not found in traditional firewalls. In addition to packet filtering, NGFWs employ deep packet inspection (DPI), providing enhanced capabilities. According to Gartner, a renowned global research and advisory firm, NGFWs encompass the following elements:

* Application awareness and control
* Intrusion prevention
* Threat intelligence
* Upgradable paths to incorporate future information feeds
* Techniques to effectively combat emerging security threats

Below, you will find a detailed explanation of these capabilities.

The unique advantage of Next-Generation Firewalls (NGFWs) lies in their ability to process traffic across multiple layers of the OSI model. Unlike regular firewalls that operate primarily at layers 3 (the network layer) and 4 (the transport layer), NGFWs go beyond and extend their analysis to layer 7 (the application layer). By examining layer 7 HTTP traffic, NGFWs can accurately identify the specific applications being used. This feature is particularly crucial as attacks increasingly exploit layer 7 to bypass security policies enforced at layers 3 and 4, which are typically protected by traditional firewalls.

(To gain a deeper understanding of the OSI layers, you can refer to the article on "What is the OSI model?")

# What are packet filtering and deep packet inspection (DPI)?
* Packet filtering
Packets are utilized to transmit data across networks and the Internet. They are smaller fragments into which the data is divided. Firewalls play a crucial role in examining these packets to determine whether they should be allowed or blocked in order to prevent any malicious content, like malware attacks, from infiltrating the network. The ability to filter packets is a fundamental feature of all firewalls.

Packet filtering involves the examination of various attributes associated with each packet, such as the source and destination IP addresses, ports, and protocols. This analysis provides information about where the packet originated, where it is intended to go, and the route it will take. Based on this assessment, firewalls decide whether to permit or deny the packets, effectively filtering out any undesired ones.

For instance, attackers may attempt to exploit vulnerabilities related to the Remote Desktop Protocol (RDP) by sending specially crafted packets to the corresponding port, which is typically port 3389. However, a firewall can inspect the packets and identify the destination port. If it matches the restricted port, the firewall can block all packets directed to that port, unless they originate from a specifically authorized IP address. This inspection process involves analyzing network traffic at layers 3 (to examine source and destination IP addresses) and 4 (to inspect the port information).

* Deep packet inspection (DPI)
Next-Generation Firewalls (NGFWs) enhance the functionality of packet filtering through the utilization of deep packet inspection (DPI). DPI goes beyond simple packet filtering by meticulously examining each packet. It scrutinizes various aspects such as the source and destination IP address, source and destination port, and other information present in the layer 3 and layer 4 headers of the packet.

In addition to header inspection, DPI also delves into the body of each packet. This comprehensive examination involves analyzing the contents of the packet for potential threats and malware signatures. By comparing the packet's content with known malicious attack patterns, NGFWs can effectively identify and mitigate potential risks.

# What is application awareness and control?
Next-generation firewalls (NGFWs) have the ability to selectively permit or deny packets based on the specific applications they belong to. This advanced functionality is achieved by thoroughly examining the traffic at the application layer (layer 7). In contrast, traditional firewalls lack this capability as they solely analyze traffic at layers 3 and 4.

By being aware of the applications involved, NGFWs empower administrators to block potentially hazardous applications. If an application's data is unable to bypass the firewall, it cannot introduce any threats to the network.

As per Gartner's definitions, both this application awareness and intrusion prevention (as described below) are components of Deep Packet Inspection (DPI).

# What is intrusion prevention?
Intrusion prevention involves the analysis of incoming traffic to identify both known and potential threats, subsequently blocking those threats. This functionality is commonly referred to as an intrusion prevention system (IPS). Next-generation firewalls (NGFWs) encompass IPS capabilities as part of their deep packet inspection (DPI) functionalities.

IPS systems employ various methods to detect threats, which include:

* Signature detection: This method involves scanning the content of incoming packets and comparing it against a database of known threats.
* Statistical anomaly detection: By monitoring network traffic, this technique aims to identify abnormal behavioral patterns that deviate from a predetermined baseline.
* Stateful protocol analysis detection: Similar to statistical anomaly detection, this approach focuses on the analysis of network protocols in use and compares them against typical protocol usage patterns.

# What is threat intelligence?
Threat intelligence refers to valuable data regarding possible attacks. Given the constant evolution of attack methods and malware variants, it is essential to possess up-to-date threat intelligence to effectively thwart such attacks. Next-Generation Firewalls (NGFWs) have the capability to receive and utilize threat intelligence feeds from external sources.

By incorporating the latest malware signatures, threat intelligence ensures the effectiveness of Intrusion Prevention System (IPS) signature detection.

Furthermore, threat intelligence can furnish information on IP reputation. This aspect involves identifying IP addresses commonly associated with attacks, particularly bot attacks. Through a feed of IP reputation threat intelligence, NGFWs can promptly block the most recent known malicious IP addresses.

# Are next-gen firewalls hardware-based or software-based?
Next-Generation Firewalls (NGFWs) serve as robust defense systems for internal private networks. While NGFWs can be implemented as hardware appliances, they are not limited to a software-based approach to be deemed next-generation.

Additionally, NGFWs have the flexibility to be deployed as cloud services, known as cloud firewalls or Firewall-as-a-Service (FWaaS). FWaaS plays a vital role in the secure access service edge (SASE) networking models. For a more comprehensive understanding, let's delve into a detailed comparison of NGFW and FWaaS.