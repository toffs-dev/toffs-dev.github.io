---
layout: post
title: What Is Ransomware?
categories: [Support,Firewall]
---
# What is ransomware?
Ransomware refers to malicious software designed to seize files and demand a ransom for their release. It can rapidly propagate throughout an entire network, occasionally infiltrating multiple networks owned by different organizations. The individuals or groups behind ransomware will only decrypt the files if the victim complies with their demand for payment.

To illustrate, envision a scenario where Chuck pilfers Alice's laptop, secures it in a safe, and informs her that she can retrieve it only by paying him $200. This analogy parallels the operations of ransomware groups, except that instead of physically confiscating and locking up computers, they do so virtually.

To prevent ransomware infections, various strategies can be employed. These include conducting thorough scans of all files and network traffic to detect malware, implementing DNS query filtering, employing browser isolation techniques to ward off attacks, and educating users on best practices for information security. Although no ransomware prevention strategy is foolproof, regularly backing up all data can significantly aid businesses in recovering swiftly from a ransomware assault.

# How does ransomware work?
Ransomware attacks typically follow a series of steps:

1. The ransomware gains entry into a device or network, establishing a foothold.
2. It proceeds to encrypt any discovered files, rendering them unreadable.
3. A message demanding payment is displayed, offering to decrypt the files.

Encryption involves the process of scrambling data to make it unreadable, except for those with the encryption key. This key allows for the reversal of encryption, known as decryption.

Encryption is widely employed for legitimate purposes, serving as a vital component of security and privacy on the Internet. However, ransomware groups exploit encryption maliciously, preventing legitimate file owners from accessing and utilizing their encrypted files.

To illustrate, let's consider a scenario where Chuck, instead of stealing Alice's laptop, translates all her files into an unreadable language. This analogy aligns with the concept of encryption in the context of ransomware. Alice still possesses the files, but she is unable to read or utilize them until she finds a way to translate them back.

Unlike translating languages, decrypting data without the encryption key is nearly impossible. The attackers retain sole possession of the key, granting them the leverage to demand payment.

* Common features of ransom demands

Typically, when a ransom is demanded, there is a specified timeframe within which the payment must be made. Failure to comply means the files will remain permanently encrypted, and the ransom amount may increase over time.

Ransomware groups aim to make it challenging to trace the payment back to them. Consequently, they often require payment in cryptocurrency or other methods that law enforcement finds difficult to track.

Upon receiving the ransom, the attacker either decrypts the files remotely or provides the victim with the decryption key. It is highly likely that the attacker will uphold their end of the bargain once the ransom is paid. The attacker's motivation lies in ensuring the data is unlocked, as failure to do so would discourage future victims from paying ransoms, resulting in financial loss for the attackers.

# What are the main types of ransomware?
"Ransomware" refers to malicious software that holds a user's files or device hostage until a ransom is paid. There are various types of ransomware, each with its own characteristics and methods of operation:

1. "Crypto" or encrypting ransomware: This is the most prevalent type of ransomware. It operates by encrypting the victim's files, making them inaccessible until a ransom is paid. The encrypted files can only be decrypted with a unique key held by the attackers.

2. Locker ransomware: Unlike encrypting ransomware, locker ransomware does not encrypt files. Instead, it restricts access to the victim's device, preventing them from using it until the ransom is paid. This form of ransomware denies users entry to their own systems, effectively locking them out.

3. Doxware: Doxware focuses on extracting sensitive personal information from the victim's device rather than encrypting files. Attackers copy the data and threaten to expose it publicly unless a ransom is paid. Unlike traditional ransomware, doxware doesn't typically employ encryption techniques.

A related type of malware is called "scareware." Scareware deceives users by displaying fake messages, claiming that their device is infected with malware and demanding payment for its removal. Once installed, scareware can be persistent and difficult to uninstall. Although it may lock the victim's computer temporarily, it doesn't usually hold files and data for ransom like ransomware does.

# How does ransomware get on a device or network?
Attackers employ various techniques to disseminate ransomware, with the most prevalent method being the utilization of a form of malware known as a "trojan." A trojan is a malicious file that masquerades as something else, similar to the legendary Trojan horse disguising the Greek army. In order for trojans to function, users unwittingly execute them, and ransomware groups employ a range of deceptive tactics to trick users into doing so:

* Social engineering: Malicious files are frequently camouflaged as harmless email attachments. Ransomware gangs send targeted emails that manipulate recipients into believing they must open or download the attached file.

* Drive-by downloads: This occurs when simply visiting a webpage triggers an automatic file download. Drive-by downloads transpire on compromised or attacker-controlled websites.

* Compromising legitimate applications: Attackers may infiltrate a trusted application, so that when users launch it, malware is also installed on their systems.

* Creation of deceptive applications: At times, attackers create fraudulent applications that are actually laden with malware. They may even disguise their malware as anti-malware software.

Furthermore, attackers have been known to exploit vulnerabilities to create worms capable of spreading across entire networks, and even multiple networks, without requiring any action from users. In 2017, the public disclosure of a vulnerability exploit developed by the American National Security Agency led to the rapid infection of over 200,000 computers by the WannaCry ransomware worm.

Irrespective of the employed method, the ultimate objective is to deliver the malicious file, commonly referred to as the malicious payload, to the targeted device or network. Once executed, the malicious payload encrypts files on the compromised system.

Prior to encryption, the ransomware may establish communication with the attacker's command and control (C&C) server to receive instructions. In certain cases, the attacker may patiently await the opportune moment to issue a command for file encryption. This enables the ransomware to remain dormant and undetected on a device or network for extended periods, ranging from days to weeks, or even months.

# The cost of ransomware attacks
According to a report, ransomware victims paid an average price exceeding $300,000, while another study discovered that the overall cost of a ransomware attack, encompassing lost business and additional factors along with the ransom itself, averaged close to $2 million.

In the year 2020, an estimation from one source indicated that the financial impact of ransomware in the preceding 12 months surpassed $1 billion. Nevertheless, the actual cost is likely much higher, considering the unaccounted losses in services and victims who may have privately paid a ransom.

The substantial financial gain for criminals conducting ransomware attacks ensures the persistent significance of ransomware as a security concern.

It is estimated that approximately 95% of organizations that comply with ransom demands successfully retrieve their data. However, the decision to pay a ransom is contentious, as it involves providing funds to criminals, thereby enabling the furtherance of their illicit activities.

# Removing ransomware
In certain instances, it might be feasible to eliminate ransomware from a device without succumbing to the ransom demand. Victims can attempt the following guidelines:

* Isolate the infected device by disconnecting it from all networks.
* Utilize anti-malware software to scan for and eliminate malicious files.
* Restore files from a backup or employ a decryption tool for file decryption.

However, executing these steps can often prove challenging, particularly when an entire network or data center has been compromised, and isolating the infected device is no longer an option. Numerous ransomware variants possess persistence mechanisms that allow them to duplicate or resist removal attempts. Additionally, contemporary ransomware groups employ sophisticated encryption techniques, rendering decryption nearly impossible without the corresponding encryption key.

# Preventing ransomware
Given the complexity of removing ransomware, a more effective approach is to focus on preventing ransomware infections altogether. Consider implementing the following strategies:

* Utilize anti-malware software to scan all files for potential threats, although it may not detect all variations of ransomware.
* Implement DNS filtering to block access to unsafe websites, thereby preventing communication between the malicious payload and the attacker's command and control server.
* Employ browser isolation techniques to close off potential attack vectors, such as drive-by downloads.
* Apply email security filters to identify and flag suspicious emails and attachments.
Enforce restrictions on application installations to prevent unintentional malware installation by users.
* Train users on how to identify suspicious emails, avoid clicking on untrusted links or visiting unsafe websites, and only install applications from trusted sources.
* Recognize that achieving 100% prevention of ransomware, like any other threat, is impossible despite these methods.

Above all, the most crucial step for businesses is to regularly back up their data. By maintaining up-to-date backups, organizations can switch to their backup copies in the event of an infection, eliminating the need to pay the ransom.

# What are some famous ransomware attacks?
* CryptoLocker (2013): Between September 2013 and May 2014, the CryptoLocker trojan instigated ransomware attacks, affecting hundreds of thousands of systems. The primary method of propagation for CryptoLocker was through malicious email attachments. It is estimated that the attackers amassed approximately $3 million in earnings before the operations were terminated.

* WannaCry (2017): In May 2017, a ransomware worm named WannaCry emerged, leveraging a vulnerability exploit known as EternalBlue to propagate across computers. This exploit was originally developed by the NSA. WannaCry successfully infected over 200,000 computers in 150 countries before a security researcher discovered a method to deactivate the malware. Subsequent investigations by the US and the UK attributed the attack to North Korea.

* NotPetya (2017): NotPetya was a variant of the Petya malware strain and affected numerous organizations in Europe and the US, with a particular focus on Russia and Ukraine.

* Ryuk (2018): Ryuk ransomware predominantly targeted large enterprises, demanding substantial ransoms from its victims. According to the FBI, the operators of Ryuk obtained over $61 million in ransom payments throughout 2018 and 2019. As of 2021, Ryuk continues to be utilized.

* Colonial Pipeline attack (2021): In May 2021, a ransomware attack led to the temporary shutdown of the largest fuel pipeline in the United States. The FBI identified the ransomware group DarkSide as responsible for the attack.

# What is a ransom DDoS attack?
A ransom DDoS attack operates in a similar fashion to a ransomware attack, as both involve extortion tactics. The attacker in a ransom DDoS attack issues a threat to launch a DDoS assault against a website or network unless a payment is made. In certain instances, the attacker may initiate the DDoS attack before demanding payment. To counter such attacks, DDoS mitigation providers like Toffs can intervene and put a halt to the assault. For further information on ransom DDoS attacks, I recommend delving into a more comprehensive analysis.

# Does Toffs help prevent ransomware attacks?
Toffs's range of products effectively mitigates multiple risk factors that can result in a ransomware infection. By utilizing Toffs DNS filtering, unsafe websites are blocked, minimizing the chances of encountering malicious content. Toffs Browser Isolation goes a step further by safeguarding against drive-by downloads and other browser-based attacks. Additionally, Toffs's implementation of a Zero Trust architecture plays a crucial role in curbing the propagation of ransomware within networks. Together, these measures provide comprehensive protection against ransomware threats.