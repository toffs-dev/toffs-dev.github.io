---
layout: post
id_menu: vulnerability
title: Global DNS hijacking
categories: [Support,Vulnerability]
---
# What is the global DNS hijacking threat?
There has been a significant surge of DNS hijacking attacks occurring worldwide, as reported by cybersecurity experts from renowned firms such as Tripwire, FireEye, and Mandiant. These attacks have targeted various entities, including government, telecom, and Internet organizations across regions like the Middle East, Europe, North Africa, and North America.

While the specific websites under attack have not been publicly disclosed, researchers have acknowledged that dozens of domains have been compromised. These persistent attacks, which have been ongoing since at least 2017, involve the utilization of previously stolen credentials in conjunction with the hijacking of DNS to redirect users to fraudulent websites. The ultimate aim of these malicious websites is to illicitly obtain login credentials and other sensitive information from unsuspecting users.

Although no group or individual has claimed responsibility for these attacks, numerous experts believe that Iran is the likely source. This belief is based on the fact that some of the attackers' IP addresses have been traced back to Iran. However, it is also possible that the attackers are utilizing IP spoofing techniques to obfuscate their true origin. Moreover, the choice of targets further indicates a potential link to Iran, as the attacks primarily focus on government websites of multiple Middle Eastern nations, along with sites housing data that holds no financial value but possesses significant strategic importance for the Iranian government.

# How do these DNS hijacking attacks work?
Here's a rewritten version of the content:

Several attack strategies are currently being employed, and the sequence of these attacks unfolds as follows:

1. The attacker sets up a deceptive website designed to closely resemble the target site in appearance and functionality.
2. Employing targeted methods like spear phishing, the attacker acquires login credentials for the target site's DNS provider's administrative panel.
3. Using the obtained access, the attacker manipulates the DNS records within the admin panel, resulting in DNS Hijacking. Consequently, users attempting to access the target site are redirected to the deceptive website.
4. To further deceive users, the attacker forges a TLS encryption certificate that convinces a user's browser of the authenticity of the deceptive site.
5. Unsuspecting users visit the compromised site's URL and unknowingly get redirected to the deceptive website.
6. When users try to log in on the deceptive site, the attacker harvests their login credentials.

DNS Hijacking refers to the alteration of DNS records, which serve as the Internet's phonebook, translating domain names like 'google.com' into IP addresses. Manipulating these records can misdirect users to unintended destinations.

# How can DNS hijacking attacks be prevented?
It is challenging for individual users to effectively safeguard their credentials in these types of attacks. Even technically proficient users may find it extremely difficult to discern any discrepancies if the attacker has taken thorough measures while creating their deceptive website.

To address this issue, DNS providers can enhance their authentication methods by implementing measures like mandating 2-factor authentication. This added layer of security would significantly raise the bar for attackers attempting to gain access to DNS admin panels. Additionally, web browsers can update their security protocols by scrutinizing the origin of TLS certificates to ensure they align with the corresponding domain they are utilized on. Such improvements would enhance protection against these attacks.