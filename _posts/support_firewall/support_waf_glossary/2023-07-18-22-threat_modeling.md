---
layout: post
title: Threat modeling
categories: [Support,Firewall]
---
# What is threat modeling?
Threat modeling serves as a proactive approach to identifying vulnerabilities in an application and its surrounding environment. It encompasses the creation of a comprehensive representation of the application, including all its components, followed by the identification of potential weak points. The ideal practice is to integrate threat modeling into the software development process, utilizing it prior to the application's deployment rather than as an afterthought. While threat modeling can significantly enhance the security of an application, it is important to note that it does not guarantee absolute invulnerability.

In the world of heist movies, protagonists often study blueprints of the targeted facility to identify its weak spots—potential entry points, blind spots for security cameras, and the like. Similarly, threat modeling involves examining the "blueprints" of a given application. However, the distinction lies in the fact that threat modeling is performed by individuals who aim to safeguard the application, not potential criminals.

To conduct effective threat modeling, teams must develop a holistic understanding of the application. This process then requires adopting the perspective of an attacker who might seek to compromise the application. What strategies would such an attacker employ? Would they exploit weaknesses in API security? Might they launch a supply chain attack to infect an integrated system library? While it may not be possible to anticipate all types of attacks, threat modeling aids in thwarting a number of them before they materialize.

# What are the steps of threat modeling?
Threat modeling encompasses numerous potential approaches, with no single method universally applicable to all scenarios. However, it generally involves the following four primary steps:

1. Assessing and diagramming the application
Threat modelers strive to identify and illustrate the following aspects:

The elements comprising an application, which encompass database servers, web servers, gateways, libraries, and the user interface.
The interconnections between these components, including the protocols employed for data exchange and any encryption measures implemented to safeguard the data during transit.
For instance, if Terry develops a basic application that showcases images of balloons, a visual representation of the application might take the following form:

Please keep in mind that the provided example is significantly simplified, and a realistic threat modeling application diagram could potentially be considerably more intricate.

2. Identifying security flaws in the application's construction
When presented with an application structured in this manner, it becomes more convenient to detect any shortcomings. For example, Terry could observe that the communication between his balloon photo database and web server lacks Transport Layer Security (TLS). Consequently, neither server verifies the authenticity of the other through digital signatures, creating a potential vulnerability where an attacker could impersonate the database server and transmit harmful content to the web server.

3. Making changes that fix those flaws
Given that threat modeling occurs during various stages of development, addressing vulnerabilities may involve altering the architectural blueprint of an application or implementing remedial measures during the ongoing construction of the application.

In order to counter the identified threat, Terry has the option to reconfigure both his database server and web server to establish a secure connection using Transport Layer Security (TLS). Alternatively, a more robust approach would be to utilize mutual TLS (mTLS), which entails verifying the identities of both servers involved in the communication.

4. Verifying that those changes have been applied and correctly mitigate the threat

At this stage, Terry could proceed by running the application in a testing environment to verify two crucial aspects. Firstly, Terry would examine whether the servers are employing the configured TLS (Transport Layer Security). Secondly, Terry would evaluate if the web server is accepting HTTP traffic from an unverified server rather than the designated database server. Additionally, Terry would conduct similar assessments for any other safeguards or countermeasures implemented.

# What are the different threat modeling methodologies?
A threat modeling methodology serves as an approach to identify threats. These methodologies provide structure to the threat modeling process, which can otherwise be overwhelming, especially in complex systems. Organizations have the flexibility to choose from a diverse range of threat modeling methodologies or even create their own. Here are a few commonly used methodologies:

- STRIDE: Developed by Microsoft, STRIDE is a mnemonic device that aids in identifying security threats. Each letter in "STRIDE" represents a specific threat category: Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, and Elevation of privilege. The goal is to examine an application's architecture and search for these six types of threats.

- PASTA: An acronym for "Process for Attack Simulation and Threat Analysis," PASTA follows a seven-step process to identify, enumerate, and assess threats systematically.

- VAST: The Visual, Agile and Simple Threat (VAST) methodology is associated with ThreatModeler, an automated threat modeling software product. VAST emphasizes visual representation and agility in threat modeling.

- SQUARE: The Security Quality Requirements Engineering (SQUARE) methodology focuses on identifying security concerns upfront, early in the development process.

Apart from these, there are several other threat modeling methodologies available. Some examples include "Trike" and various hybrid methodologies, which may not be acronym-based.

# When does threat modeling take place?
Threat modeling plays a crucial role in software development, spanning the entire lifecycle of an application. By conducting threat modeling and implementing mitigation measures, developers can prevent the discovery of security vulnerabilities by users or malicious attackers before they are identified by security teams. Neglecting threat modeling increases the risk of data breaches and exposes the application to zero-day threats.

Nevertheless, it is important for developers and organizations to recognize that threat modeling alone cannot uncover all potential risks within a system. Therefore, it is advisable to continue the threat modeling process even after the application's release. Additionally, developers can enhance their security efforts by employing the following practices:

- Threat hunting: This proactive approach involves actively searching for threats targeting a system. It can be carried out through manual investigations by security analysts, automated processes using security tools, or a combination of both.

- Penetration testing: Also known as pen testing, this security exercise involves ethical hackers attempting to identify and exploit vulnerabilities in a computer system. To ensure effectiveness, penetration tests should be conducted by individuals who lack prior knowledge of the system. This separation from the threat modeling process helps uncover flaws that may be overlooked by those closely involved in building the application, akin to how an architect may miss vulnerabilities exploited by robbers in a heist movie.

- Implementation of other application security measures: Given the complexity of application security, it is essential to employ multiple layers of defense. For instance, a web application firewall (WAF) can significantly enhance the security of web applications.