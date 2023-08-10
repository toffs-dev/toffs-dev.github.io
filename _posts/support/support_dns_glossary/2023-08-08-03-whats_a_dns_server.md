---
layout: post
title: What's a DNS Server
categories: [Support,Dns]
---

## What does a DNS server do?
The Domain Name System (DNS) functions as the Internet's equivalent of a phonebook. Whenever users enter domain names like 'google.com' or 'nytimes.com' into their web browsers, the DNS takes on the role of locating the accurate IP address for these websites. Subsequently, browsers utilize these IP addresses to establish communication with origin servers or CDN edge servers, thus gaining access to the relevant website information. The entire process is facilitated by DNS servers, specialized machines designed to respond to DNS queries.

## Understanding a server:
A server denotes a device or software designed exclusively to furnish services to other programs, known as 'clients.' In the context of DNS, clients are embedded within most contemporary desktop and mobile operating systems. These DNS clients enable web browsers to engage with DNS servers seamlessly, fostering the functioning of the entire system. To delve further into this concept, you can explore The Client-Server Model.

# How is a DNS query resolved by DNS servers?

In the process of resolving a DNS query, a series of four interconnected servers collaborates to provide an IP address to the requesting client. These servers include recursive resolvers, root nameservers, top-level domain (TLD) nameservers, and authoritative nameservers.

The DNS recursor, also known as the DNS resolver, plays a central role. It receives the initial query from the DNS client and then engages with other DNS servers to pinpoint the accurate IP address. Upon receiving the client's request, the resolver takes on the role of a client itself, systematically querying the three distinct types of DNS servers to locate the correct IP.

Initially, the resolver contacts the root nameserver. This root server marks the initial stage of transforming human-readable domain names into corresponding IP addresses. The root server's response includes the address of a TLD DNS server (such as .com or .net), responsible for holding domain-related information.

Following that, the resolver directs its query to the TLD server. In response, the TLD server supplies the IP address of the authoritative nameserver assigned to the domain. Subsequently, the resolver interacts with the authoritative nameserver, which furnishes the IP address of the origin server.

Ultimately, the resolver communicates the IP address of the origin server back to the client. Armed with this IP address, the client can directly initiate a query to the origin server, which, in turn, provides the website data. This data is then interpreted and displayed by the web browser.

## What is DNS caching?

In addition to the previously described process, recursive resolvers have the capability to resolve DNS queries by using stored data. After obtaining the accurate IP address for a specific website, the resolver stores this information temporarily in its cache. Within this time frame, if other clients make requests for the same domain name, the resolver can bypass the usual DNS lookup procedure and promptly provide the IP address from the cached data.

After the caching duration elapses, the resolver needs to retrieve the IP address anew, generating a fresh cache entry. This duration, known as the time-to-live (TTL), is explicitly defined in the DNS records for each website. Typically, the TTL falls within the range of 24 to 48 hours. The TTL serves a crucial purpose as web servers occasionally alter their IP addresses, making it unfeasible for resolvers to sustain the same cached IP indefinitely.

## What occurs during DNS server failures?

The failure of DNS servers can result from various factors, including power outages, cyberattacks, and hardware glitches. During the early phases of the Internet, the breakdown of DNS servers could yield significant consequences. Fortunately, modern DNS architecture incorporates substantial redundancy. For instance, there are numerous instances of root DNS servers and TLD nameservers, alongside the presence of backup recursive resolvers for most Internet Service Providers (ISPs). Additionally, prominent websites typically employ multiple instances of their authoritative nameservers.

In the event of a significant DNS server outage, certain users might encounter delays due to the elevated load on backup servers. Nonetheless, a substantial disruption of the Internet would necessitate an exceedingly extensive DNS outage. (An example of this occurred in 2016, when DNS provider Dyn faced one of the largest Distributed Denial of Service (DDoS) attacks in history.)

**Safeguarding DNS: Security Implications**

When DNS servers are compromised or encounter failures, the repercussions can be profoundly detrimental to users, businesses, and the overall Internet ecosystem. Like any interconnected aspect of the Internet, DNS servers are susceptible to various attacks and potential impersonation by malicious entities. Countermeasures such as DNSSEC (DNS Security Extensions) play a pivotal role in thwarting these attacks, bolstering the security of both servers and the users who depend on them.







