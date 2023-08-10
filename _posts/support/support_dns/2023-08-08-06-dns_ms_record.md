---
layout: post
title: DNS MX Record
categories: [Support,Dns]
---

## What does a DNS MX record do?

A DNS 'mail exchange' (MX) record is responsible for guiding email to a mail server. It specifies the routing of email messages following the rules of the Simple Mail Transfer Protocol (SMTP), which serves as the standard protocol for all email communications. Similar to CNAME records, an MX record must always point to another domain.

Illustration of an MX record:

- Domain: example.com
- Record Type: MX
- Priority: 10
- Value: mailhost1.example.com
- Time to Live (TTL): 45000

- Domain: example.com
- Record Type: MX
- Priority: 20
- Value: mailhost2.example.com
- Time to Live (TTL): 45000

In the MX records above, the 'priority' numbers assigned before the domain names indicate a hierarchy of preference. A lower 'priority' value indicates higher preference. In this case, the server will first attempt to deliver mail to mailhost1 since its priority value of 10 is lower than 20. If a sending failure occurs, the server will resort to mailhost2.

Additionally, the email service can configure the MX record to distribute the mail equally between the two servers by assigning them equal priorities:

- Domain: example.com
- Record Type: MX
- Priority: 10
- Value: mailhost1.example.com
- Time to Live (TTL): 45000

- Domain: example.com
- Record Type: MX
- Priority: 10
- Value: mailhost2.example.com
- Time to Live (TTL): 45000

This setup allows the email provider to evenly distribute the incoming mail load between both servers, ensuring balanced performance.

## What is the process of querying an MX record?

Querying MX records involves the utilization of Message Transfer Agent (MTA) software. When an email is initiated by a user, the MTA performs a DNS query to ascertain the mail servers designated for the recipients of the email. Subsequently, the MTA establishes an SMTP connection with these mail servers, commencing with the ones that possess higher priority, as exemplified in the first scenario with "mailhost1."

## What constitutes a backup MX record?

A backup MX record corresponds to an MX record assigned to a mail server with a higher numeric value representing "priority" (indicating lower priority). This configuration ensures that during normal circumstances, email traffic is directed to the more prioritized mail servers. In the given example, "mailhost2" functions as the 'backup' server, stepping in only if "mailhost1" is unavailable.

## Can MX records be directed to a CNAME?

CNAME records are employed to reference a domain's alias instead of its original label. Typically, CNAME records point to an A record (for IPv4) or AAAA record (for IPv6) of that domain. However, MX records must directly target a server's A record or AAAA record. The RFC documents that outline the functionality of MX records explicitly prohibit the practice of pointing MX records to CNAMEs.