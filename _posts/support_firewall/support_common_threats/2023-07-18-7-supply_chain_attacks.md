---
layout: post
title: Supply Chain attacks
id_menu: common_attack
categories: [Support,Common_Attack]
---
# What is a supply chain attack?
A supply chain attack leverages third-party tools or services, commonly referred to as the 'supply chain,' to infiltrate the system or network of a target. These attacks are alternatively known as "value-chain attacks" or "third-party attacks."

Supply chain attacks are characterized by their indirect approach, focusing on exploiting the third-party dependencies upon which the primary targets rely, often without their knowledge. These dependencies typically consist of programs or code, frequently written in JavaScript, provided by third-party vendors to enhance the functionality of applications. For example, an e-commerce retailer may use a dependency to facilitate customer assistance chatbots or gather information on site visitor activity. Numerous such dependencies can be found across a wide range of software, applications, and services used by targets to maintain their applications and networks.

In a supply chain attack, the attacker may target a cybersecurity vendor and implant malicious code, also known as 'malware,' into their software. This tainted software is then distributed to the vendor's clients as a system update. Unaware of the compromise, the clients download and install the update, believing it to be from a trustworthy source. Consequently, the malware grants the attackers unauthorized access to the clients' systems and information. This modus operandi closely resembles the approach employed in the SolarWinds attack of 2020, which affected 18,000 customers.

# How is a supply chain attack carried out?
Attackers must first acquire access to the third-party system, application, or tool they intend to exploit in order to initiate a supply chain attack. This initial phase, commonly known as an "upstream" attack, can be accomplished through multiple means such as utilizing stolen credentials, targeting vendors with temporary access to an organization's system, or exploiting unidentified software vulnerabilities.

Once the attacker has successfully obtained access to the aforementioned third-party dependency, they can proceed with the "downstream" attack. This secondary phase involves various methods to reach the ultimate target, often through their browser or device.

Using the previous example as a reference, the "upstream" attack occurs when the attacker inserts malicious code into the cybersecurity vendor's software. Subsequently, the "downstream" attack takes place as the malware executes on end-user devices via a routine software update.

# What are common types of supply chain attacks?
Supply chain attacks have the potential to target various aspects of an organization's infrastructure, including hardware, software, applications, or devices that are managed by third parties. Here are some prevalent types of these attacks:

* Browser-based Attacks: These attacks involve running malicious code on end-user browsers. Attackers may focus on JavaScript libraries or browser extensions that automatically execute code on users' devices. Additionally, they may aim to steal sensitive user information stored in the browser, such as through cookies or session storage.

* Software Attacks: This type of attack disguises malware within software updates. Similar to the SolarWinds attack, users' systems might unwittingly download these updates, providing an opportunity for attackers to infect their devices and carry out further malicious activities.

* Open-source Attacks: Attackers exploit vulnerabilities in open-source code. While open-source code packages aid organizations in accelerating application and software development, they also introduce the risk of attackers tampering with known vulnerabilities or concealing malware. This allows them to infiltrate the user's system or device.

* JavaScript Attacks: JavaScript attacks exploit existing vulnerabilities in JavaScript code or embed malicious scripts in webpages. These scripts automatically execute when loaded by a user, potentially leading to unauthorized actions or compromises.

* Magecart Attacks: Magecart attacks involve the use of malicious JavaScript code to steal credit card information from website checkout forms, which are often managed by third-party entities. This method is commonly referred to as "formjacking."

* Watering Hole Attacks: In watering hole attacks, attackers identify websites frequently visited by a large number of users, such as a popular website builder or government website. By exploiting security vulnerabilities within these sites, attackers deliver malware to unsuspecting users.

* Cryptojacking: Cryptojacking enables attackers to pilfer computational resources required for cryptocurrency mining. They achieve this through various means, such as injecting malicious code or ads into websites, embedding cryptomining scripts into open-source code repositories, or employing phishing tactics to deliver malware-infected links to unsuspecting users.

By being aware of these attack types, organizations can better protect their supply chain and mitigate potential risks to their systems and devices.

# How to defend against supply chain attacks
A supply chain attack refers to any malicious activity that exploits or manipulates third-party software, hardware, or applications. Organizations often engage with external vendors, who rely on numerous dependencies in their tools and services.

Due to this interconnectedness, it can be challenging, if not impossible, for organizations to completely shield themselves from supply chain attacks. Nevertheless, there are several proactive strategies that organizations can adopt to defend against common attack methods:

* Conduct a third-party risk assessment: This involves evaluating third-party software before deployment, establishing specific security policies for vendors, implementing Content Security Policies (CSP) to control browser resources, and employing Subresource Integrity (SRI) to scrutinize JavaScript for suspicious content.

* Implement Zero Trust principles: Zero Trust ensures continuous validation and monitoring of every user within an organization's network, including employees, contractors, and vendors. Verifying user and device identity, as well as privileges, helps prevent attackers from infiltrating an organization by stealing legitimate user credentials or moving laterally within the network after breaching existing security measures.

* Utilize malware prevention measures: Employ malware prevention tools such as antivirus software to automatically scan devices for malicious code, thereby preventing its execution.

* Adopt browser isolation: Browser isolation tools isolate or sandbox webpage code, enabling the detection and mitigation of malware before it reaches its intended target on end-user devices.

* Detect shadow IT: "Shadow IT" refers to the use of unauthorized applications and services by employees without the knowledge or approval of the organization's IT department. These unsanctioned tools may contain vulnerabilities that IT is unaware of and unable to patch. Deploying a cloud access security broker (CASB) with shadow IT detection capabilities can assist in cataloging the tools used by employees and analyzing them for security vulnerabilities.

* Enable patching and vulnerability detection: Organizations using third-party tools have a responsibility to ensure those tools are free from security vulnerabilities. Although identifying and patching every vulnerability may be challenging, organizations should diligently search for and disclose known vulnerabilities in software, applications, and other third-party resources.

* Prevent zero-day exploits: Supply chain attacks often leverage zero-day exploits, which are vulnerabilities not yet patched by software developers. While it is challenging to predict zero-day threats with certainty, browser isolation tools and firewalls can help isolate and block malicious code before it can execute.

Note: Combating zero-day exploits remains a formidable task for most organizations. In 2021, a zero-day vulnerability was discovered in Log4j, an open-source software library used for logging data within Java applications. Exploiting this vulnerability, attackers gained control over millions of devices, leading to further attacks such as ransomware and illegal cryptomining. Learn more about Toffs's defense against the Log4j vulnerability.

# How does Toffs stop supply chain attacks?
Toffs Zero Trust plays a crucial role in countering supply chain attacks by proactively obstructing access to potentially hazardous websites, effectively preventing malicious uploads and downloads, and conducting comprehensive audits of both approved and unapproved SaaS applications operating within your organization.

Introducing Toffs Zaraz, a trusted third-party tool manager designed to deploy applications in the cloud, thus preventing the execution of malicious code within end-user browsers. With Zaraz, users gain valuable insight into and full control over third-party scripts operating on their websites, empowering them to identify and block risky behavior, ensuring enhanced security measures.