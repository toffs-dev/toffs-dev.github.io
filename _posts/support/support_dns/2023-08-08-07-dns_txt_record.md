---
layout: post
title: DNS TXT Record
categories: [Support,Dns]
---

## What is a DNS TXT record?

The DNS 'text' (TXT) record allows a domain administrator to input text into the Domain Name System (DNS). While initially designed as a space for human-readable notes, the TXT record now also supports embedding machine-readable data. A single domain can house multiple TXT records.

Illustration of a TXT record:

- Domain: example.com
- Record Type: TXT
- Value: This is an exceptional domain! Completely devoid of any spam.
- TTL: 32600

Presently, DNS TXT records serve two critical purposes: preventing email spam and verifying domain ownership. These functions have evolved as essential applications for TXT records, even though they were not their original design intention.

## What type of information is suitable for inclusion within a TXT record?

As per the initial RFC guidelines, the 'value' field of a TXT record is designated for 'text strings'. These text strings can encompass any textual content that an administrator wishes to link with their domain.

Nevertheless, most DNS servers impose constraints on the size and quantity of TXT records that can be accommodated, thereby preventing administrators from utilizing TXT records for extensive data storage.

## What constitutes the official structure for data storage within a TXT record?

Back in 1993, the Internet Engineering Task Force (IETF) established a framework for organizing attributes and their corresponding values in the 'value' field of TXT records. The structure was fairly straightforward: each attribute and its associated value were enclosed in quotation marks (") and separated by an equal sign (=), like so:

"attribute=value"

The layout introduced in RFC 1464, the document from 1993 that introduced this scheme, provides the following instances:

For the record type of host.widgets.com, the value is:
@ TXT "printer=lpr5"

For the record type of sam.widgets.com, the value is:
@ TXT "favorite drink=orange juice"

However, this specific specification was classified as experimental and is not widely embraced in practical applications. Some administrators of Domain Name System (DNS) opt to use their own layouts for TXT records, or they might not even utilize TXT records at all. Additionally, TXT records can be tailored in a particular manner for specific purposes, as exemplified by the need for standardized formatting of DMARC policies.

## How do TXT records contribute to the prevention of email spam?

In the ongoing battle against email spammers who attempt to manipulate the origins of their messages, TXT records play a crucial role within various email authentication mechanisms. These mechanisms aid email servers in establishing whether a received message originates from a trustworthy source.

Prominent email authentication methods encompass Domain Keys Identified Mail (DKIM), Sender Policy Framework (SPF), and Domain-based Message Authentication, Reporting & Conformance (DMARC). By configuring these records, domain administrators can heighten the complexity of spammers' endeavors to counterfeit domains and can monitor any such fraudulent endeavors.

SPF records: SPF TXT records compile an inventory of authorized servers sanctioned to dispatch email messages on behalf of a specific domain.

DKIM records: The DKIM approach involves digitally signing each email using a unique public-private key pair. This digital signature facilitates confirmation of the email's authenticity in relation to the purported domain. The public key is hosted within a corresponding TXT record linked to the domain.

DMARC records: A DMARC TXT record references the domain's established SPF and DKIM policies. This record should be stored under the header "_dmarc.example.com," where 'example.com' is replaced with the factual domain name. The content of the record constitutes the domain's DMARC policy (comprehensive guidance on its formulation is available here).

## What is the role of TXT records in confirming domain ownership?

Although TXT records weren't initially designed for domain ownership verification, this technique has been embraced by certain webmaster tools and cloud providers.

Through the addition of a new TXT record containing specific details, or by modifying the existing TXT record, an administrator can demonstrate their authority over a particular domain. Subsequently, the webmaster tool or cloud provider can examine the TXT record and verify any requested alterations. This process is somewhat analogous to a user confirming their email address by opening an email and clicking on a link, thereby validating their ownership of the address.
