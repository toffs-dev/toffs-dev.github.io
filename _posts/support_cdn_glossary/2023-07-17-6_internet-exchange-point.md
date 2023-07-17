---
layout: post
title: Internet exchange point (IXP)
categories: [Support,Cdn_glossary]
---

# What is an Internet exchange point?
An Internet exchange point (IXP) serves as a physical hub where Internet infrastructure companies, including Internet Service Providers (ISPs) and CDNs, interconnect. These strategic points are positioned at the periphery of various networks, enabling network providers to exchange transit with other networks. Being present at an IXP location allows companies to optimize their connection routes by accessing transit from participating networks, leading to reduced latency, improved round-trip time, and potential cost savings.
# How does an Internet exchange point work?
An Internet Exchange Point (IXP) essentially consists of one or more physical locations equipped with network switches that facilitate the routing of traffic among different member networks. By utilizing various methods, these networks collectively share the expenses associated with maintaining the physical infrastructure and related services. In a similar manner to how charges are incurred when transporting goods through intermediary locations like the Panama Canal, the transmission of traffic across diverse networks often incurs fees for delivery. To avoid these costs and other disadvantages linked to routing their traffic through third-party networks, member companies establish connections with each other through IXPs, thereby reducing expenses and minimizing latency.

IXPs are essentially large Local Area Networks (LANs) operating at Layer 2 of the OSI network model. They are constructed using one or multiple interconnected Ethernet switches deployed across one or more physical buildings. In essence, an IXP shares a basic conceptual framework with a home network, with the primary distinction being scale. IXPs can handle traffic ranging from hundreds of Megabits per second to several Terabits per second. Irrespective of size, their primary objective is to ensure efficient and seamless connectivity among multiple network routers. In contrast, a typical home network would usually have a single router serving several computers or mobile devices.

Over the past two decades, network interconnections have witnessed significant growth, paralleling the tremendous expansion of the global Internet. This expansion has led to the establishment of new data center facilities designed to house network equipment. Some of these data centers have attracted a substantial number of networks, largely due to the flourishing Internet exchange points operating within them.

# Why are Internet exchange points important?
IXPs are essential for efficient internet traffic routing. Without them, traffic between networks would often have to rely on transit providers as intermediaries to transmit data from the source to the destination. While this is acceptable for international internet traffic due to the impracticality of maintaining direct connections with every ISP worldwide, it can negatively impact performance when relying on a backbone ISP to handle local traffic. This is because the backbone carrier may route data to a distant network in another city, leading to a phenomenon called trombone. In the worst-case scenario, traffic originating from one city and destined for an ISP in the same city would unnecessarily traverse long distances before being exchanged and returning. However, by incorporating IXPs into a CDN's infrastructure, the network can optimize data flow paths and eliminate inefficient routes, resulting in improved performance.


# BGP, the Internet’s backbone protocol
Networks communicate with each other through the utilization of the Border Gateway Protocol (BGP). This advanced protocol facilitates the clear separation of internal necessities and network-edge configurations within each network. BGP is employed for all peering activities at Internet Exchange Points (IXPs).
# How do providers share traffic across different networks?
# Transit
Transit refers to the agreement between a customer and its upstream provider, where the provider offers complete connectivity to the entire Internet. This service is paid for by the customer. The BGP protocol is employed to allow the customer's IP addresses to be announced to the transit provider and subsequently propagated throughout the global Internet.

# Peering
Peering is the mechanism by which networks exchange IP addresses directly without the involvement of intermediaries. At Internet exchange points, there is typically no cost associated with transferring data between member networks. When data is transferred freely from one network to another, it is referred to as settlement-free peering.

# Peering vs Paid Transit
However, some networks incur costs when transferring data. For instance, larger networks with relatively equal market share may engage in peering with other large networks but charge smaller networks for the peering service. Within a single Internet Exchange Point (IXP), a member company may have different arrangements with multiple other members. In such cases, companies may configure their routing protocols, specifically the BGP protocol, to optimize for reduced costs or reduced latency.

# Depeering
Over time, relationships between networks may change, leading to the discontinuation of free interconnection. When a network decides to terminate its peering arrangement, it undergoes a process called depeering. Depeering can occur due to various reasons, such as imbalanced traffic ratios or when a network decides to charge the other party for interconnection. This process can be emotionally charged, and a network that feels spurned may deliberately disrupt the traffic of the other party after terminating the peering relationship.

# How do IXPs use BGP?
Within an Internet Exchange Point (IXP), different providers can establish one-to-one connections using the BGP protocol. This protocol enables disparate networks to announce their IP addresses to each other, including the IP addresses they have provided connectivity to downstream (i.e., their customers). Once two networks establish a BGP session, they exchange their respective routes, facilitating direct traffic flow between them.

# IXP or PNI Interconnection
In certain cases, two networks may consider their traffic to be crucial and decide to move from the shared infrastructure of an IXP to a dedicated interconnection between themselves. This dedicated connection, known as a Private Network Interconnect (PNI), is typically implemented using dark fiber and directly links a port on network A with a port on network B. The BGP configuration for PNI is nearly identical to that of a shared IXP peering setup.

