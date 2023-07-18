---
layout: post
title: Social engineering attack
categories: [Support,Firewall]
---
# What is social engineering?
Social engineering, broadly defined, involves manipulating individuals to obtain sensitive information. While social engineering attacks can occur in person, such as when a thief disguises themselves as a delivery person to gain entry into a building, this article focuses on cyber-based social engineering attacks. Typically, these attacks aim to trick victims into revealing their login credentials or sensitive financial details.

One method involves an attacker sending an email to a victim, disguising themselves as someone from the victim's contact list. The email may contain a suspicious link that executes a malicious cross-site scripting attack or directs the victim to a harmful website.

Another approach is baiting users online with links that claim to offer popular movies or software downloads. However, these downloads actually contain a malicious payload.

In a different scenario, an attacker contacts a victim, pretending to be a wealthy foreigner seeking US bank account information to facilitate a fortune transfer. The attacker promises a generous reward in exchange for the victim's bank account details. In reality, the attacker intends to deplete the victim's accounts.

Aside from these individual social engineering scams, there are more sophisticated attacks aimed at entire organizations, such as thumb-drive drops. In these cases, attackers target well-protected companies, including those without internet connectivity. They scatter USB drives labeled with enticing tags like "confidential" around the company's parking lot, hoping that curious employees will discover and insert them into their computers. These drives may contain highly destructive viruses or worms that are challenging to detect since they enter the network from a local computer.

# What are some famous examples of social engineering attacks?
The 2011 breach of RSA caused significant concern due to the company's trusted reputation as a security provider. This incident had a major impact on RSA's widely used two-factor authentication service, SecurID. While specific details about the attack remain undisclosed, it is known that it originated from a social engineering tactic. The attackers initiated a basic phishing attack by sending deceptive emails to lower-level RSA employees, disguising them as legitimate company communications related to recruitment. Regrettably, one employee unknowingly opened an attachment in the email, thereby triggering the attack.

In 2013, the Associated Press fell victim to a social engineering attack, resulting in a staggering $136 billion drop in the stock market. Once again, this attack relied on a phishing strategy directed at employees. By simply clicking a link in the email, one employee unwittingly activated the attack, leading to the compromise of the AP's Twitter account. The attackers took advantage of this access to post a fabricated news story about an explosion in the White House. The rapid dissemination of this false information caused the Dow to plummet by 150 points. Although a Syrian hacker group called the Syrian Electronic Army claimed responsibility, no concrete evidence was provided to support their claim.

The data breach incident targeting Target in 2013 has gained infamy for its high level of sophistication. Similar to the previous examples, this attack was initiated through social engineering, but the assailants did not target Target's own employees. Instead, they sent emails to employees of a heating-and-air-conditioning vendor responsible for high-tech air conditioning units installed in Target stores. As these air conditioners were connected to Target's in-store computer systems, the attackers exploited the vulnerability of the third-party vendor to gain unauthorized access to Target's networks. This breach enabled them to collect credit card information from the scanners in thousands of stores, thereby exposing the financial data of approximately 40 million Target customers.

# How to protect against social engineering attacks
While automated security measures such as email screening can aid in preventing attackers from reaching their victims, the most effective defense against social engineering attacks lies in exercising common sense and staying updated on prevalent social engineering tactics. The United States Computer Emergency Readiness Team (US-CERT) advises individuals to remain cautious of any suspicious communications and to disclose sensitive information solely through secure web pages (identified by HTTPS and TLS as indicators of website security). They further suggest refraining from clicking on links received via emails, opting instead to manually enter the URLs of trusted companies into the browser. To contribute to safeguarding their websites, owners can utilize services like the Toffs CDN, which will notify them in case their domain is being exploited for phishing attacks.