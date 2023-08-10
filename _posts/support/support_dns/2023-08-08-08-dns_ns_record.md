---
layout: post
title: DNS NS Record
categories: [Support,Dns]
---

## What does a DNS NS record do?

The term 'NS' stands for 'nameserver,' and an NS record serves to designate the authoritative DNS server for a particular domain. This means it indicates the server that holds the official DNS records for the domain. Essentially, NS records guide the internet in locating a domain's corresponding IP address. Most domains possess multiple NS records, which can identify both primary and secondary nameservers for that domain. The absence of correctly configured NS records can result in users being unable to access a website or application.

Consider the following example of an NS record:

- Domain: example.com
- Record Type: NS
- Value: ns1.exampleserver.com
- TTL: 21600

It's crucial to note that NS records can never point to a canonical name (CNAME) record.

## What is the function of a nameserver?

A nameserver, also known as a DNS server, plays a crucial role in the Domain Name System. Its main purpose is to house the complete set of DNS records associated with a particular domain. These records encompass various types such as A records, MX records, and CNAME records.

For enhanced reliability, most domains rely on a network of multiple nameservers. This setup safeguards against potential disruptions: if one nameserver becomes inaccessible or malfunctions, alternative nameservers can still handle DNS queries seamlessly. In this arrangement, a primary nameserver is accompanied by several secondary nameservers, each maintaining identical copies of the DNS records found on the primary server. Whenever updates are made to the primary nameserver, the secondary nameservers are also automatically updated to reflect the changes.

In situations where multiple nameservers are employed (which is the norm), NS records should enumerate more than a single server. This practice further reinforces the stability and resilience of the domain's DNS infrastructure.

## When is it appropriate to update or modify NS records?

NS records should be updated by domain administrators when there is a need to alter their domain's nameservers. This situation often arises when certain cloud service providers offer their own nameservers and require their clientele to direct their domains towards these servers.

Additionally, administrators might consider revising their NS records if they intend to assign different nameservers to a subdomain. Taking the previous example, where the nameserver for example.com is ns1.exampleserver.com, the administrator of example.com could decide to have blog.example.com resolve through ns2.exampleserver.com instead. This adjustment can be achieved by making changes to the NS record.

It's important to note that when NS records undergo updates, it might take several hours for the alterations to be fully propagated throughout the Domain Name System (DNS).