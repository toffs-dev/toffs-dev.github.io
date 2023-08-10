---
layout: post
title: DNS CNAME Record
categories: [Support,Dns]
---

## What is the purpose of a DNS CNAME record?

A DNS Canonical Name (CNAME) record establishes a connection between an alternative domain and a primary domain. It's utilized when one domain or subdomain acts as an alias for another domain. CNAME records are employed instead of A records in situations where domain aliasing is required. These records should direct to a domain, never an IP address. Think of it as a trail of clues in a scavenger hunt, where each clue leads to the next, culminating in the discovery of the treasure. A domain with a CNAME record functions like a clue, guiding you to another clue (another domain with its own CNAME record) or the treasure (a domain with an A record).

For instance, consider the scenario where blog.example.com has a CNAME record pointing to "example.com" (excluding "blog"). In this case, when a DNS server accesses the DNS records for blog.example.com, it initiates an additional DNS lookup for example.com. The result is the retrieval of example.com's IP address through its corresponding A record. This situation designates example.com as the canonical name, or authentic identifier, for blog.example.com.

Frequently, websites incorporate subdomains such as blog.example.com or shop.example.com. These subdomains might possess CNAME records directing to the root domain (example.com). This approach simplifies updates in cases where the host's IP address changes, as modifications only need to be made to the DNS A record of the root domain, with the associated CNAME records adapting accordingly.

It's worth clarifying a common misconception: a CNAME record doesn't invariably lead to the same website as the domain it points to. Rather, it steers the client toward the same IP address as the root domain. Once the client arrives at that IP address, the web server handles the URL accordingly. For example, blog.example.com could have a CNAME directing to example.com, guiding the client to example.com’s IP address. Yet, upon connecting to that IP address, the web server recognizes the URL as blog.example.com and serves the appropriate blog page, rather than the homepage.

**Here's an illustration of a CNAME record:**

- Subdomain: blog.example.com
- Record Type: CNAME
- Value: is an alias of example.com
- TTL (Time to Live): 32600

In this instance, blog.example.com is connected to example.com. Assuming it aligns with our earlier example's A record, the eventual resolution leads to the IP address 192.0.2.1.

## Is it possible for a CNAME record to indicate another CNAME record? 

While this setup is feasible, it's not the most efficient approach. This is due to the need for multiple DNS lookups before the intended domain loads, resulting in a slower user experience. To illustrate, let's consider the scenario where blog.example.com employs a CNAME record that directs to the CNAME record of www.example.com, and subsequently, this points to the A record of example.com.

**Specifically, for the CNAME of blog.example.com:**

- Record type: CNAME
- Value: Alias of www.example.com
- TTL: 32600

**The CNAME for www.example.com leads to:**

- Record type: CNAME
- Value: Alias of example.com
- TTL: 32600

Nonetheless, this setup introduces an extra layer in the DNS lookup process, leading to inefficiencies. Ideally, it's advisable to refrain from this configuration. Instead, the CNAME records for both blog.example.com and www.example.com should directly point to the CNAME of example.com.

## What limitations apply to the utilization of CNAME records? 

MX and NS records are not permitted to reference a CNAME record; they must reference an A record (for IPv4) or an AAAA record (for IPv6). An MX record functions as a mail exchange record responsible for routing emails to a mail server. Meanwhile, an NS record serves as a "name server" record, indicating the DNS server vested with authority for that particular domain.





