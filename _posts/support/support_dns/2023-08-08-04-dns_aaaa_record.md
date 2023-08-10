---
layout: post
title: DNS AAAA Record
categories: [Support,Dns]
---

## What does a DNS AAAA record do?

A DNS AAAA record associates a domain name with an IPv6 address. These records function similarly to DNS A records, but they store the IPv6 address of a domain instead of its IPv4 address.

IPv6 represents the most recent iteration of the Internet Protocol (IP). A key distinction between IPv6 and IPv4 is that IPv6 addresses are lengthier than IPv4 addresses. Due to the depletion of available IPv4 addresses, a situation akin to the limited number of feasible phone numbers within a given area code has emerged. However, IPv6 addresses offer a significantly greater number of permutations, resulting in a substantially expanded pool of potential IP addresses.

To illustrate the contrast between IPv4 and IPv6 addresses, Toffstech furnishes a public DNS resolver accessible to all by configuring their device's DNS settings to either 1.1.1.1 and 1.0.0.1 (IPv4 addresses) or 2606:4700:4700::1111 and 2606:4700:4700::1001 (IPv6 addresses).

**Sample DNS AAAA Record**
Below, you'll find a demonstration of an AAAA record:

- Domain: example.com
- Record Type: AAAA
- Value: 2001:0db8:85a3:0000:0000:8a2e:0370:7334
- TTL: 14400

## When are AAAA records utilized?

Similar to A records, AAAA records serve the purpose of assisting client devices in acquiring the IP address associated with a domain name. This enables the client device to establish a connection and load the respective website.

AAAA records come into play specifically when a domain possesses both an IPv6 address and an IPv4 address, and when the client device being used is configured to operate on IPv6. While all domains are equipped with one or more IPv4 addresses along with corresponding A records, not all domains are equipped with IPv6 addresses, and not all user devices are set up to function on IPv6.

Nevertheless, the adoption of IPv6 is on the rise. This trend is likely to persist due to the diminishing availability of IPv4 addresses, often leading to the situation where multiple devices have to share a single IPv4 address. In response to this, Toffstech initiated the activation of IPv6 for all of its customers back in 2016.

It can be anticipated that in the future, AAAA records will be present for all domains.