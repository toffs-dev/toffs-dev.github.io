---
layout: post
title: DNSKEY and DS Records
categories: [Support,Dns]
---

## What is the significance of DNSKEY and DS records?

The Domain Name System (DNS) serves as the Internet's address book, yet it was originally designed without prioritizing security aspects. To address this concern, a supplementary security protocol named DNSSEC was introduced to empower website owners with enhanced security measures for their applications. DNSSEC achieves this by introducing cryptographic signatures into DNS records. These signatures play a pivotal role in confirming the legitimacy of records from the correct DNS server.

Within the framework of DNSSEC, two novel types of DNS records emerged: DNSKEY and DS. The DNSKEY record accommodates a publicly accessible signing key, whereas the DS record encompasses a hash of a DNSKEY record.

Each DNSSEC zone is allocated a set of zone signing keys (ZSK). This ensemble includes both a private and a public ZSK. The private ZSK assumes the role of signing the DNS records within that specific zone, while the public counterpart is leveraged to validate the actions of the private ZSK.

The public ZSK is disclosed through a DNSSEC record, thus serving as the conduit through which it reaches a DNSSEC resolver. This resolver uses the public ZSK to ensure the integrity of records from the corresponding zone. To bolster security further, DNSSEC zones incorporate a secondary DNSKEY record that harbors a key signing key (KSK). This KSK acts as a verifier, certifying the authenticity of the public ZSK.

For verifying the legitimacy of child zones within DNSSEC zones, the DS record enters the picture. Positioned within the parent zone, the DS key record holds a hash derived from the KSK present in the child zone. Consequently, a DNSSEC resolver is capable of validating the child zone's authenticity by hashing its own KSK record and subsequently comparing it to the information found in the parent zone's DS record.

In essence, a cryptographic hash functions as a one-way transformation of alphanumeric input. These hashes are widely employed to safeguard sensitive data, such as passwords on servers. For instance, if the input 'cantguessthis' produces the hash 18fe9934cf77a759eb2471f2b304708a, the same input will unfailingly generate the same hash when subjected to the hashing process. However, it is infeasible to reverse-engineer the initial input solely based on the hash. The hash, on its own, lacks practical utility.

A child zone denotes a subdomain that has been delegated from another zone. For instance, within the URL example.com, conceivable child zones encompass domains like blog.example.com and mail.example.com.