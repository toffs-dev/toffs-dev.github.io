---
layout: post
title: Threat hunting
categories: [Support,Firewall]
---
# What is threat hunting?
Threat hunting encompasses a range of techniques and tools employed by organizations to uncover cyber threats. In the past, traditional threat hunting relied solely on the expertise of security analysts and manual investigation processes, without much reliance on automated tools. However, modern threat hunting strikes a balance between human expertise and automated capabilities.

Typically, "threat hunting" entails proactive threat detection, where organizations proactively assess their networks to identify indications of internal malicious activities or investigate external attacker infrastructure. Occasionally, the term is also used to describe reactive threat detection, wherein organizations analyze their own systems for vulnerabilities subsequent to a data breach or a similar attack.

# What is an indicator of attack (IoA)?
During the process of threat hunting, organizations actively search for signs of attack in order to assess the intentions and actions of potential attackers. These signs, known as indicators of attack (IoA), consist of specific actions or sequences of actions that attackers must carry out to successfully execute their attacks. Examples include tactics like deceiving targets into opening phishing emails, enticing them to click on malicious links, or initiating the download of malware. By gaining a deep understanding of an attacker's tactics and procedures, organizations can develop more proactive threat defenses.

On the other hand, indicators of compromise (IoC) serve as evidence of malicious activity. These may include anomalies in network traffic, suspicious login attempts, unexpected updates to high-level accounts or files, or other indications that an organization's security has been breached. IoCs are particularly valuable in reactive threat hunting processes as they typically reveal that an organization has already experienced a compromise.

It's worth noting that the term "attacker's tactics, techniques, and procedures (TTPs)" is often used interchangeably with indicators of attack (IoA).

# How does threat hunting work?
Threat hunting procedures can vary depending on an organization's requirements and the capabilities of their security team. Generally, these procedures can be categorized into three main types: structured hunting, unstructured hunting, and situational hunting.

1. Structured hunting involves identifying and analyzing specific attacker behaviors and tactics, known as Indicators of Attack (IoAs). It follows a hypothesis-based hunting model where a hypothesis is formulated based on a threat hunting playbook, such as the MITRE ATT&CK framework. The primary objective of structured hunting is to proactively identify and pinpoint attacker behavior before an attack is launched against an organization.

2. On the other hand, unstructured hunting is triggered by the discovery of an Indicator of Compromise (IoC), which indicates evidence of malicious activity. This type of hunting adopts a reactive, intelligence-based model and examines various data, such as IP addresses, domain names, and hash values, obtained from intelligence sharing platforms. The main goal of unstructured hunting is to investigate existing vulnerabilities in an organization's infrastructure and systems.

3. Situational hunting, also known as entity-driven hunting, focuses on specific systems, assets, accounts, or data that are at a higher risk of compromise. For instance, an administrative privileged account may be more susceptible to a cyber attack compared to an account with lower privileges, given its access to sensitive data and systems. Situational hunting employs a custom threat hunting model that can be tailored to the organization's specific needs. Its primary objective is to secure high-risk targets and gain an understanding of the likely threats they may face, rather than examining IoAs or IoCs across the entire organization.

To better illustrate the differences between these processes, let's consider the analogy of Bob trying to identify birds using three different birdwatching techniques. One approach involves extensive planning, analyzing the bird's migration patterns, mating rituals, feeding schedules, and other behavioral factors to narrow down where and when the bird is likely to be observed. This is similar to structured hunting, as it focuses on uncovering known tactics and behaviors of attackers.

In another method, Bob may visit a forest and search for nests, droppings, or other physical evidence indicating the bird's presence. This resembles unstructured hunting, which is often initiated when an Indicator of Compromise is detected.

Lastly, a third method requires Bob to prioritize tracking endangered birds over common species and adapt his approach to the specific bird he aims to identify. This relates to situational hunting, which utilizes a customized strategy to identify threats targeting high-risk entities.

# Types of threat hunting tools
The traditional process of threat hunting relied on manual examination by security analysts to inspect an organization's network, infrastructure, and systems. They would then develop and test hypotheses in order to identify both external and internal threats, such as data breaches or malicious lateral movement.

In contrast, modern threat hunting leverages cybersecurity tools to automate and streamline the investigative process. Several commonly used tools in this regard include:

- Security Information and Event Management (SIEM): This security solution offers capabilities such as log data aggregation, alert monitoring, security incident analysis, compliance reporting, and more.

- Managed Detection and Response (MDR): MDR is a type of managed Security Operations Center (SOC) that monitors network activity, generates alerts, investigates potential threats, filters out false positives, provides advanced analytics, and aids in the resolution of security incidents.

- User and Entity Behavior Analytics (UEBA): This security service collects and consolidates user and endpoint data, establishes a baseline of normal behavior, and detects and analyzes anomalies across an organization's systems.

By utilizing these cybersecurity tools, modern threat hunting enhances efficiency and effectiveness in detecting and mitigating threats to an organization's security.

# Threat hunting vs. threat intelligence
Threat hunting involves the process of identifying and examining malicious activities, evidence of cyber attacks, and other possible threats that an organization may face. Its objective is not only to uncover weaknesses in the organization's infrastructure but also to detect and prevent potential future threats and attacks.

On the other hand, threat intelligence refers to a collection of information about cyber attacks, encompassing both potential threats and past incidents. This data is often consolidated into a threat intelligence feed, which organizations can utilize to enhance their threat hunting procedures and strengthen their security protocols.

In essence, threat hunting can be likened to conducting a thorough investigation at a crime scene, whereas threat intelligence serves as the evidence gathered during the investigation.

To delve deeper into the various categories and purposes of threat intelligence, refer to the article "What is threat intelligence?"