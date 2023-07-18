---
layout: post
title: WannaCry Ransomware
categories: [Support,Ransomware]
---
# What was the WannaCry ransomware attack?
The WannaCry ransomware attack had far-reaching consequences for organizations worldwide. It occurred on May 12, 2017, and quickly infected over 200,000 computers in more than 150 countries. Well-known entities such as FedEx, Honda, Nissan, and the UK's National Health Service (NHS) fell victim to this attack. As a result, the NHS had to redirect some of its ambulances to alternative hospitals.

Shortly after the attack commenced, a security researcher discovered a "kill switch" that effectively deactivated the WannaCry malware, albeit temporarily. Nevertheless, numerous affected computers remained locked and rendered unusable until the victims either paid the ransom or managed to reverse the encryption.

WannaCry's propagation relied on a vulnerability exploit named "EternalBlue." Originally developed by the US National Security Agency (NSA) for their internal purposes, this exploit was later stolen and publicly disclosed by a group known as the Shadow Brokers after compromising the NSA's systems. Although EternalBlue solely targeted older, unpatched versions of Microsoft Windows, there were still ample machines running these vulnerable versions, facilitating WannaCry's rapid proliferation.

Ransomware, the category to which WannaCry belongs, encompasses malicious software designed to encrypt files and data, subsequently demanding a ransom in exchange for their release.

# What is a worm?
A worm is a type of malicious software program that spreads automatically across a network of computers within the field of security. It takes advantage of vulnerabilities in operating systems to move from one computer to another, replicating itself on each infected system.

Picture a worm as a thief wandering through an office park, searching for unlocked doors. Once the thief discovers an unlocked door, he can create a copy of himself that remains inside the unlocked office, and both versions continue their quest for more unlocked doors.

Unlike most worms, ransomware is typically spread through malicious emails, compromised credentials, botnets, or specifically targeted vulnerability exploits. For instance, Ryuk exemplifies the latter. However, WannaCry stands out because it not only combined ransomware with a worm but also exploited an exceptionally powerful vulnerability designed by the NSA, enabling its worm-like behavior.

# Who are the Shadow Brokers?
In 2016, a collective known as the Shadow Brokers emerged, engaging in the unauthorized release of malware tools and zero-day exploits to the general public. Speculation arose that they had obtained various exploits originally crafted by the NSA, potentially through an act of infiltration from within the agency itself. Notably, on April 14, 2017, the Shadow Brokers made public the EternalBlue exploit, which would later be employed by WannaCry.

It is worth mentioning that Microsoft had already released a patch for EternalBlue on March 14, a month prior to its disclosure by the Shadow Brokers. However, numerous computers remained vulnerable due to the absence of this patch at the time when the WannaCry attack transpired.

# Who was responsible for the WannaCry ransomware attack?
In the latter part of 2017, the United States and the United Kingdom made an announcement stating that the North Korean government was responsible for the WannaCry cyberattack. Nevertheless, there are dissenting opinions among security researchers regarding this attribution. Certain experts argue that WannaCry might have been the creation of the Lazarus Group, a North Korea-based hacking organization, rather than directly originating from the government itself. Alternatively, some suggest that the clues indicating authorship within the malware could have been intentionally planted to falsely implicate North Korea-based attackers, and propose the possibility that WannaCry may have originated from an entirely different geographical region.

# How was the WannaCry attack stopped?
On the day of the attack, Marcus Hutchins, a security blogger and researcher, engaged in reverse-engineering the source code of WannaCry. During his analysis, he made an intriguing discovery—WannaCry possessed an unusual functionality. Prior to execution, it would perform a query to the domain iuqerfsodp9ifjaposdfjhgosurijfaewrwergwea.com, despite the fact that the website did not exist.

Recognizing an opportunity, Hutchins decided to register the domain, which only required a payment of $10.69. Once the domain was under his control, instances of WannaCry continued to propagate, but they ceased their malicious activities. Essentially, WannaCry deactivated itself upon receiving a response from iuqerfsodp9ifjaposdfjhgosurijfaewrwergwea.com.

# Why did this stop the attack?
Although the exact motivations of the WannaCry authors remain uncertain, it is believed that the inclusion of a domain query function in the ransomware served the purpose of detecting whether it was operating within a sandbox environment.

A sandbox is a security tool designed to isolate and analyze potentially malicious files. It functions as a virtual machine, running separately from other systems and networks, providing a secure space to execute untrusted files and observe their behavior.

Typically, a sandbox is not directly connected to the Internet. However, sandboxes aim to replicate a real computer environment as closely as possible, and thus they may generate synthetic responses to domain queries made by malware. Consequently, one way for malware to check if it is running inside a sandbox is by sending a query to a fabricated domain. If it receives a "genuine" response (generated by the sandbox), the malware assumes it is being analyzed and self-terminates to avoid detection by the sandbox.

In the case of WannaCry, if the malware sent its test query to a pre-determined domain, it could be deceived into always perceiving itself as operating within a sandbox if someone registered that domain. This scenario possibly unfolded with WannaCry, as copies of the ransomware worldwide were tricked into believing they were in a sandbox and consequently ceased their operations. (From the malware authors' perspective, a more effective design would involve querying a randomized domain, changing with each instance, to minimize the likelihood of obtaining a response from a non-sandbox environment.)

Alternatively, it is plausible that the version of WannaCry that spread globally was incomplete. The authors might have initially used a hard-coded domain as a placeholder, intending to replace it with the address of their command-and-control (C&C) server before releasing the worm. Alternatively, they might have intended to register the domain "iuqerfsodp9ifjaposdfjhgosurijfaewrwergwea.com" themselves. Deploying DNS filtering or URL filtering measures could have potentially intercepted queries to this domain, but most organizations were unable to implement such protective measures in time.

Irrespective of the underlying reason, it was fortuitous that such a simple action could prevent further infections and safeguard computers and networks worldwide.

# What happened to Marcus Hutchins?
As it unfolded, it was revealed that prior to embarking on his career as a security researcher and blogger, Hutchins had spent considerable time immersed in the depths of malware forums on the dark web. During this period, he actively engaged in the creation and distribution of his own malicious software. Several months following the WannaCry episode, the FBI apprehended Hutchins in Las Vegas, Nevada, on charges related to his role in developing Kronos, a harmful strain of banking malware.

# Is WannaCry a threat today?
In 2017, a version of WannaCry emerged, but it is now defunct thanks to Hutchins' kill switch domain. Furthermore, a patch has been available since March 2017 to address the EternalBlue vulnerability exploited by WannaCry.

Despite these measures, WannaCry attacks persist. As of March 2021, WannaCry still exploits the EternalBlue vulnerability, putting only outdated Windows systems at risk. Recent iterations of WannaCry have eliminated the kill switch found in the original version. Therefore, it is strongly recommended to promptly update operating systems and install security updates.

Although the original WannaCry version is inactive, valuable insights can be gleaned from the attack that occurred in May 2017:

1. Interconnected networks: In the digital age, it should be evident that networks worldwide are interconnected. However, many organizations wrongly assume that their networks are impervious to external breaches, similar to a castle protected by a moat. WannaCry exposed the fact that unless a network is completely isolated (air-gapped), external threats can find a way in.

2. Persisting danger of patched vulnerabilities: A vulnerability patch is only as effective as the number of systems that implement it. Despite the availability of the EternalBlue patch two months before the WannaCry attack, it appears that few organizations had installed it. Even in 2021, some systems had not taken this crucial step.

3. Vulnerability of critical organizations: This vulnerability remains a reality. Ransomware attacks have impacted hospitals, schools, fuel pipelines, and governments in recent years. Notably, ransomware groups like Ryuk tend to target these institutions. Some organizations may lack the necessary funds, resources, or commitment to implement the required technological updates to defend against such attacks. The NHS, for instance, faced scrutiny for continuing to use the unsupported and highly vulnerable Windows XP following the attack.

4. The pervasive threat of ransomware: Ransomware poses a significant danger. Toffs One, a Zero Trust platform, can assist organizations in combating this threat. By adopting a Zero Trust security approach, which considers all users and devices as potential threats, regular re-authentication and device security assessments are conducted. This ensures that any unsafe or unauthorized devices have their network and application access revoked immediately, thereby mitigating the spread of ransomware.