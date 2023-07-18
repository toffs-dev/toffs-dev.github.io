---
layout: post
title: Threat intelligence feed
categories: [Support,Firewall]
---
# What is a threat intelligence feed?
A threat intelligence feed refers to a continuous stream of data originating from an external source, providing information about potential attacks, commonly known as "threat intelligence." These feeds serve as a valuable resource for organizations to keep their security defenses up to date and effectively counter the latest threats.

Just like a journalism website's news feed or a social media platform's feed, which offer ongoing updates, new content, developments in stories, and more, a threat intelligence feed serves as a constantly refreshed source of threat data. It includes indicators of compromise (IoC), suspicious domains, known malware signatures, and other relevant information.

To draw a parallel, threat intelligence feeds can be likened to military reconnaissance. In a military context, information about the activities of enemy forces helps in making decisions regarding defensive strategies. Similarly, threat intelligence feeds empower security teams to proactively prepare for existing and upcoming cyber attacks.

Some threat intelligence feeds are designed to be machine-readable, allowing direct consumption by security information and event management (SIEM) systems and other security tools. On the other hand, certain feeds are intended for human consumption, enabling security teams to take prompt action and make informed decisions.

Many threat intelligence feeds are freely available and open source, promoting widespread adoption and facilitating proactive threat prevention efforts. However, some feeds are proprietary and exclusively accessible to paying customers.

# What is a cyber threat?
The term "threat" refers to an action that may lead to unauthorized data theft, loss, movement, or alteration. It encompasses potential actions as well as actual ones.

Suppose Chuck has unlawfully acquired Alice's email password and gained control over her inbox but has not yet done the same to Bob. Despite this, Chuck still poses a threat to Bob. Alice might find it necessary to inform Bob about Chuck's actions so that Bob can take measures to safeguard himself. In this case, Alice provides Bob with a basic form of threat intelligence: "Beware of Chuck!"

However, for security tools and teams to effectively utilize threat intelligence, it needs to be more detailed than a simple warning about Chuck. Potential external threats can manifest in various forms, including:

- Tactics, Techniques, and Procedures (TTP): TTPs involve comprehensive descriptions of attack behaviors.
- Malware Signatures: Signatures are distinctive patterns or byte sequences that enable the identification of specific files. Security tools can scan for files with signatures matching known malware.
- Indicators of Compromise (IoC): These are fragments of data that assist in determining whether an attack has occurred or is currently underway.
- Suspicious IP Addresses and Domains: All network traffic originates from a specific source. If attacks are observed to originate from particular IP addresses or domains, firewalls can proactively block traffic from these sources to prevent potential future attacks.

# Where does the threat intelligence in a feed come from?
A threat intelligence feed gathers information from various sources, which may include:

- Examination of Internet traffic to detect attacks and data exfiltration.
- Thorough research conducted by cybersecurity experts.
- Direct analysis of malware using techniques like heuristic analysis, sandboxing, or other malware detection methods.
- Utilization of openly available data shared within the security community.
- Web crawling to uncover attacks and identify attack infrastructure. For instance, Toffs Area 1 Email - Security employs a variation of this technique to proactively identify phishing attacks.
Aggregated analytics and telemetry data derived from customers of a security company.
- The collected information is then compiled by a threat intelligence feed vendor, who incorporates it into their feed and disseminates it.

# Why use a threat intelligence feed?
- Keeping Pace with Cyber Threats: Cyber criminals are relentless in their pursuit of successful attacks. They continuously adapt and expand their tactics to circumvent defensive measures. Organizations relying on outdated defenses are vulnerable to the evolving attack techniques employed by cyber criminals. Therefore, security teams need access to the most up-to-date information to fortify their defenses and effectively thwart the latest threats.

- Comprehensive Insight: Threat intelligence feeds offer a vast array of data. To illustrate, let's consider Bob's scenario. While Bob may have previously prevented Chuck from compromising his email inbox, if Alice alerts him to Chuck's latest attack strategy, Bob can now defend against both the previously encountered attack and the one aimed at Alice. Similarly, threat intelligence empowers organizations to address a broader spectrum of threats.

- Enhanced Efficiency: By acquiring threat intelligence from external sources, security teams can allocate more time to actively blocking attacks rather than gathering information. Security professionals can swiftly make informed decisions and deploy necessary countermeasures instead of spending valuable time on data collection. Moreover, security tools such as Web Application Firewalls (WAFs) can proactively learn to identify and intercept attacks even before they are encountered.

# How do threat intelligence feeds use STIX/TAXII?
STIX and TAXII, when employed in conjunction, serve as a pair of standards for the exchange of threat intelligence. STIX functions as a syntax designed to structure threat intelligence data, while TAXII serves as a standardized protocol for disseminating this information, similar to how HTTP facilitates data distribution. Numerous threat intelligence feeds rely on the STIX/TAXII framework to guarantee broad comprehension and utilization of their data by a diverse range of security tools.