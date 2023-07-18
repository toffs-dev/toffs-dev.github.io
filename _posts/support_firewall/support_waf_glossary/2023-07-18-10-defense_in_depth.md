---
layout: post
title: Defense in Depth
categories: [Support,Firewall]
---
# What is 'defense in depth'?
The concept of "Defense in depth" (DiD) is a cybersecurity approach that employs a combination of security products and practices to safeguard an organization's network, web properties, and resources. This strategy relies on multiple layers of security, encompassing physical, technical, and administrative controls, to thwart attackers from breaching a protected network or on-premise resource.

In its original context, defense in depth referred to a military tactic where a single line of defense would be sacrificed to delay opposing forces. However, the cybersecurity strategy bearing a similar name differs significantly from this approach. Instead, it involves the collaborative operation of various security solutions to effectively repel attackers and mitigate other potential threats.

# Why is defense in depth necessary?
The fundamental principle underlying a defense in depth strategy rests on the understanding that relying solely on a single security product cannot provide comprehensive protection against all potential attacks targeting a network. Nonetheless, by implementing multiple security products and adopting various practices, organizations can effectively identify and prevent emerging attacks, thereby mitigating a broad spectrum of threats. As networks, systems, and user bases expand, this approach gains increasing significance.

Layered security also offers the advantage of redundancy. In the event that one line of defense is breached by an external attacker or compromised by an insider threat, other security measures come into play, limiting and mitigating potential damage across the entire network. Conversely, relying solely on a single security product creates a singular point of failure; if that product is compromised, it opens the door for breaching or damaging the entire network or system.

# What security products are used in defense in depth?
Defense in depth strategies are implemented differently based on an organization's specific requirements and available resources. However, they typically incorporate one or more products from the following categories:

* Physical security controls: These measures safeguard IT systems, corporate buildings, data centers, and other physical assets against various threats such as tampering, theft, and unauthorized access. Examples of physical security controls include access control systems, surveillance methods like security cameras, alarm systems, ID card scanners, and biometric security technologies like fingerprint readers and facial recognition systems.

* Technical security controls: This category involves the hardware and software components employed to prevent data breaches, DDoS attacks, and other network and application threats. Commonly utilized security products in this domain include firewalls, secure web gateways (SWG), intrusion detection or prevention systems (IDS/IPS), browser isolation technologies, endpoint detection and response (EDR) software, data loss prevention software (DLP), web application firewalls (WAF), and anti-malware software, among others.

* Administrative security controls: These controls revolve around the policies defined by system administrators and security teams to regulate access to internal systems, corporate resources, and sensitive data and applications. Additionally, administrative security controls may encompass security awareness training programs to ensure users practice good security habits, maintain data confidentiality, and avoid exposing systems, devices, and applications to unnecessary risks.

# What security practices are used in defense in depth?
Organizations must adopt robust security practices in addition to security products and policies to mitigate risks to their networks and resources. Here are several key practices that can be implemented:

* Principle of Least Privilege: Users should be granted access only to the systems and resources necessary for their roles. This minimizes the risk to the network in the event that a user's credentials are compromised, preventing unauthorized users from launching attacks or accessing sensitive data.

* Multi-Factor Authentication (MFA): MFA requires multiple authentication methods to verify the identity of a user or device before granting access to a network or application. This typically involves maintaining strong passwords (complex, regularly changed), enforcing strict device controls, and utilizing external devices or tools for identity verification (e.g., entering a verification code from a mobile device).

* Encryption: Encryption safeguards sensitive data by converting readable information (plaintext) into an unreadable format (ciphertext) using random combinations of letters, numbers, and symbols. This protects the data from unauthorized or malicious parties.

* Network Segmentation: Network segmentation restricts the exposure of internal systems and data to external users such as vendors or contractors. For example, setting up separate wireless networks for internal and external users enhances the protection of sensitive information. Network segmentation can also help in containing insider threats, limiting malware spread, and complying with data regulations.

* Behavioral Analysis: Behavioral analysis detects abnormal traffic patterns and ongoing attacks by comparing user behavior against a baseline of normal behavior. Any deviations from the baseline can trigger security systems to redirect malicious traffic and prevent attacks.

* Zero Trust Security: Zero Trust is a security philosophy that combines various concepts mentioned above, assuming that threats may already exist within a network. It emphasizes that no user, device, or connection should be inherently trusted and verifies each entity's trustworthiness before granting access.

These practices represent only a fraction of the measures that should be part of a comprehensive layered security approach. As attack techniques evolve to exploit vulnerabilities in existing security measures, it is crucial to continuously develop new products and strategies to counteract them.

# How does layered security differ from integrated security?
To establish a strong defense in depth strategy, it is essential to incorporate both layered security controls and integrated security practices. While these terms may seem similar, they have distinct meanings:

* Layered security involves employing various security products and practices to safeguard an organization against a wide range of physical and cyber threats. Its focus is on creating multiple defense layers.

* On the other hand, integrated security ensures that multiple security products collaborate seamlessly to enhance their ability to identify and mitigate threats. While a security strategy can be layered without being integrated, an integrated security strategy inherently incorporates layering.

Imagine layered security as a suit of armor assembled from different sources. Some armor pieces may be newer or of higher quality than others. While this armor offers protection against many types of physical harm, there might be gaps between the pieces or weak spots where the wearer is more vulnerable to attacks.

In contrast, integrated security is akin to a custom-made suit of armor. It consists of distinct pieces (security controls) intentionally designed to work harmoniously and offer comprehensive protection to the wearer, without leaving any gaps or weak spots.

However, it is important to note that purchasing multiple security products from a single vendor does not automatically guarantee an integrated approach when configuring cybersecurity solutions. For further insights on this topic, refer to "The future of web application security."