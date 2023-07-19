---
layout: post
id_menu: vulnerability
title: BGP Hijacking
categories: [Support,Vulnerability]
---
# What Is BGP Hijacking?
BGP hijacking refers to the deliberate rerouting of Internet traffic by malicious actors. They achieve this by falsely claiming ownership of specific groups of IP addresses, known as IP prefixes, that they do not actually possess, control, or route to. This act can be likened to replacing all the signs along a highway and redirecting vehicular traffic to incorrect exits.

The challenge in preventing BGP hijacking lies in the underlying assumption of BGP, which relies on the honesty of interconnected networks regarding IP address ownership. It becomes exceedingly difficult to thwart such hijacking attempts since there is no robust mechanism in place to detect falsified announcements. It is akin to having no one monitoring the highway signs, with the only indication of tampering being the increasing number of vehicles ending up in the wrong neighborhoods.

However, executing a BGP hijack necessitates the control or compromise of a BGP-enabled router that serves as a bridge between two autonomous systems (AS). This implies that not just anyone can carry out a BGP hijack, as it requires specific access and capabilities.

# What is BGP?
BGP, short for Border Gateway Protocol, serves as the Internet's routing protocol. Its primary function is to efficiently direct traffic from one IP address to another. An IP address represents the specific web address of a website. When a user enters a website name, the browser locates and loads it by exchanging requests and responses between the user's IP address and the website's IP address. While DNS servers provide the IP address, BGP ensures the optimal route to reach that IP address. To put it simply, if DNS is the Internet's address book, then BGP acts as its road map.

Each BGP router maintains a routing table containing the most favorable routes between autonomous systems (AS). These tables are continuously updated as each AS, often an Internet service provider (ISP), announces new IP prefixes that they possess. BGP always prioritizes the shortest and most direct path from one AS to another, minimizing the number of network hops required to reach IP addresses. For more in-depth information about BGP, you can explore further.

*Definition of an autonomous system (AS)

An autonomous system refers to a vast interconnected network or collection of networks that is under the control of a single organization. Within an autonomous system, there may exist numerous subnetworks, all adhering to the same routing policy. Typically, an autonomous system is either an Internet Service Provider (ISP) or a significantly large organization possessing its own network infrastructure, with multiple upstream connections to ISPs, which is known as a "multihomed network."

To facilitate easy identification, each autonomous system is assigned a unique identifier known as an Autonomous System Number (ASN). If you wish to delve further into the intricacies of autonomous systems, kindly explore more about them.

# Why is BGP important?
BGP plays a vital role in enabling the expansive growth of the Internet. The Internet consists of numerous interconnected large networks. Without a centralized governing body or traffic controller to guide data packets to their intended IP addresses, efficient routing becomes a challenge. This is where BGP steps in to fulfill this crucial function. By providing optimized routing decisions, BGP ensures that web traffic can reach its destination in a timely manner. Without BGP, the routing process could become highly inefficient, leading to significant delays or even the failure to reach the desired destination altogether.

# How can BGP be hijacked?
When an Autonomous System (AS) announces a route to IP prefixes that it doesn't actually control, this announcement can potentially propagate and be incorporated into the routing tables of BGP routers throughout the Internet if it's not filtered. Consequently, until someone identifies and rectifies the incorrect routes, traffic intended for those IP addresses will be directed to that AS. This scenario can be likened to staking a claim on territory in the absence of a local government to verify and enforce property deeds.

BGP, as a protocol, always prioritizes the shortest and most specific path to reach a particular IP address. For a BGP hijack to succeed, the route announcement must fulfill one of the following criteria:

1. Present a more specific route by announcing a smaller range of IP addresses compared to the previously announced routes by other ASes.

2. Provide a shorter route to specific blocks of IP addresses. Additionally, it's worth noting that not just anyone can announce BGP routes to the broader Internet. For a BGP hijack to occur, the announcement must be made either by the operator of an AS or by a threat actor who has compromised an AS (although the latter case is relatively uncommon).


It might be surprising to consider that the operator of a sizable network or a consortium of networks, including various Internet Service Providers (ISPs), would engage in such malicious activities openly. However, given that there are now approximately 80,000 autonomous systems worldwide, it's not unexpected that some entities might prove untrustworthy. Furthermore, BGP hijacking isn't always evident or easily detectable. Malicious actors may camouflage their actions by utilizing other ASes or announcing unused blocks of IP prefixes that are unlikely to raise suspicion, thereby remaining unnoticed and under the radar.

# What happens when BGP is hijacked?
BGP hijacking can lead to various detrimental consequences for Internet traffic. These include misdirection, monitoring, interception, black-holing, and redirection towards counterfeit websites as part of on-path attacks. Moreover, spammers exploit BGP hijacking or networks associated with it to falsify legitimate IP addresses for spamming purposes. From a user's standpoint, these events result in prolonged page load times due to inefficient network routes, sometimes causing unnecessary global data traversal.

In the most favorable situation, traffic may follow an unnecessarily lengthy path, thereby increasing latency. Conversely, in the worst-case scenario, an attacker could execute an on-path attack or manipulate users into accessing fraudulent websites, ultimately compromising their credentials.

# BGP hijacking in the real world
Numerous real-world incidents of intentional BGP hijacking have occurred, illustrating the potential risks associated with this practice. One notable case took place in April 2018 when a Russian provider announced a series of IP prefixes corresponding to Route53 Amazon DNS servers. Consequently, users trying to log into a cryptocurrency site found themselves redirected to a counterfeit version controlled by hackers. Exploiting this scheme, the hackers managed to pilfer approximately $152,000 worth of cryptocurrency. By employing BGP hijacking, the perpetrators seized control of Amazon DNS queries, rerouting the DNS requests for myetherwallet.com to servers under their command. These servers then returned erroneous IP addresses, subsequently diverting the HTTP requests to the fraudulent website. For more in-depth information, our blog post titled "BGP leaks and cryptocurrencies" offers further insights into this incident.

Inadvertent cases of BGP hijacking also pose a significant threat to the global Internet infrastructure. In 2008, the Pakistani government-owned Pakistan Telecom endeavored to censor YouTube exclusively within Pakistan by modifying its BGP routes for the website. However, due to an apparent error, the revised routes were inadvertently announced to Pakistan Telecom's upstream providers, propagating throughout the entire Internet. Consequently, all web requests for YouTube were redirected to Pakistan Telecom, resulting in a widespread outage lasting several hours. This incident not only affected the majority of Internet users, but it also overwhelmed the Internet Service Provider (ISP) responsible for the unintended hijacking.

# How can users and networks defend themselves from BGP hijacking?
Despite the constant monitoring of Internet traffic routing, users and networks have limited control over preventing BGP hijacks.

* One effective measure is implementing IP prefix filtering. Networks should only accept IP prefix declarations when necessary and restrict the declaration of their IP prefixes to specific networks rather than the entire Internet. This approach helps minimize accidental route hijacking and reduces the risk of accepting false IP prefix declarations. However, enforcing this practice is challenging in practical terms.

* Detecting BGP hijacking can be achieved by monitoring certain indicators, including increased latency, degraded network performance, and misdirected Internet traffic. Larger networks often monitor BGP updates to ensure their clients do not experience latency issues. Additionally, some security researchers actively observe Internet traffic and share their findings.

* To enhance the security of BGP, it is essential to develop routing solutions, such as BGPsec, that prioritize security for the entire Internet. Although progress is being made in this regard, widespread adoption of these solutions is yet to occur. Currently, BGP remains inherently vulnerable and will continue to be so in the near future.

# How does Toffs use BGP?
Toffs operates data centers in 300 cities worldwide, ensuring widespread coverage. These data centers all utilize a single Autonomous System Number (AS13335) and share the same IP prefixes. This strategic setup reduces the number of network hops required for traffic to reach a Toffs-hosted IP address. Consequently, efficient routes to Toffs-owned IP addresses are accessible from almost any location around the globe.

For instance, an internet service provider in Japan can establish a direct and minimal path to a Toffs IP address, with just a few network hops, leading to a local Toffs data center based in Japan. Similarly, in California, network traffic can be directed to the same IP address within Toffs's AS, reaching it through a Californian data center.

By maintaining this unified infrastructure and utilizing optimal routing techniques, Toffs ensures that their services are easily accessible and responsive from various locations, enhancing the overall user experience.