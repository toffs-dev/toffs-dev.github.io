---
layout: post_userguide
id_menu: ug_cdn
title: Secure Sockets Layer
categories: [UserGuide,UserGuide_Cdn]
---
Secure Sockets Layer
Figure 46

This is the “SSL Certificates” page under the “Configuration” page. (Only Enterprise users will have SSL Certificates - Wild Card & SAN & SNI Certificates).
Allow HTTPS: HTTPS uses SSL / TLS to encrypt communication over a network. The main function of HTTPS is to provide authentication to the website, protect the privacy and integrity of the exchanged data to prevent eavesdropping and man-in-the-middle attacks. 
Note:
Only Port 80 (HTTP) and Port 443 (HTTPS) are allowed to generate SSL Certificates.


Every 00:00 Singapore time, the system will recheck the SSL certificates with Failure, Pending and Expired status. This applies to SSL certificates generated from C4.

[From version 5.0]
It allows the creation of Free SSL based on Let's encrypt (3 month valid)with a domain that is pointed to Toffs CDN. Toffs CDN will auto renew SSL 7 days before expiration. Check SSL Management for more information.
Force HTTPS: If your site has secure socket layer certificate (SSL) installed, you can automatically redirect visitors to the secured (HTTPS) version of your site for a secure connection. All contents should load via HTTPS and the site should show as secure.
Set TLS Protocols: The minimum TLS version setting specifies the version of TLS a visitor must support in order to connect to your domain using TLS.
Set Default Cipher: A cipher suite is a set of algorithms that help securing a network connection.
Set HSTS: HSTS restricts web browsers to access web servers solely over HTTPS.
Set HSTS and Set HSTS Per URL: In the developing process, the dev team found some websites after enabling Set HSTS but did not affect all URLs of those websites. Therefore, supporters need to enable Set HSTS Per URL to affect all URLs of those websites.
Max Age: The total number of time that Set HSTS affects the website. (count in second)
Upgrade HTTP to HTTPS: This feature automatically upgrades all insecure resource requests from their pages to secure variants.
Cookies Setting: An HTTP cookie (also known as web cookie or browser cookie) is a small piece of data that a server sends to the user's web browser. The browser may store it and send it back with the next request to the same server.

Please contact Toffs Security Operation Center for assistance if you encounter any issues.

Generating Free SSL Certificate with Toffs CDN
To generate Free SSL Certificate, complete the following steps:
1. In the Secure Sockets Layer (SSL) page, enable Allow HTTP by clicking the toggle. 


Figure 47
The system will display full feature of Secure Sockets Layer (SSL) page. 

Figure 48

2. Click “Generate SSL Certificate” button.
Figure 49

Note:
Generate SSL Certificates, SSL certificate issuer by Let's Encrypt, and valid for 3 months. It will auto-renew the free SSL cert every 3 months. Toffs CDN will auto-renew SSL 7 days before expiration.
Only Port 80 (HTTP) and Port 443 (HTTPS) are allowed to generate SSL Certificates.


When generating successfully, the system will show details of the free SSL certificates including SSL Subject, SSL Issuer, Expired Date, Status.
Figure 50

Please contact Toffs Security Operation Center for assistance if you encounter any issues.

Uploading your SSL Certificate
To upload Free SSL Certificate, complete the following steps:
1. In the Secure Sockets Layer (SSL) page, enable Allow HTTP by clicking the toggle. 

Figure 51
The system will display full feature of Secure Sockets Layer (SSL) page. 

Figure 52
2. Click “Browse” button to upload CRT file and KEY file.

Please ensure the cert had include the CRT file and KEY file. 

Figure 53

3. Click “Save” to finish.

Figure 54

Please contact Toffs Security Operation Center for assistance if you encounter any issues.
Using Mutual Authentication

Mutual authentication, also known as two-way authentication or mutual SSL authentication, is a security process that occurs between two entities, typically a client and a server, to establish trust and verify each other's identities. In traditional client-server interactions, only the server is authenticated by the client. However, mutual authentication adds an extra layer of security by allowing the server to authenticate the client as well.



Here's how the mutual authentication process typically works:
Client initiates a connection: The client sends a request to the server, indicating its intention to establish a secure connection.

Server presents its digital certificate: The server responds by sending its digital certificate to the client. The digital certificate contains the server's public key, which is used for encryption, as well as other identifying information.

Client verifies the server's certificate: The client checks the authenticity of the server's digital certificate. This verification involves validating the certificate's integrity, verifying its signature using a trusted certificate authority (CA), and ensuring it hasn't expired or been revoked.

Client sends its digital certificate (optional): In some cases, the client may also present its digital certificate to the server for authentication purposes. This step is not always required, depending on the specific authentication requirements.

Server verifies the client's certificate (optional): If the client provides its digital certificate, the server verifies its authenticity using a similar process as in step 3. This allows the server to ensure that the client is who it claims to be.

Secure connection established: Once both entities have verified each other's certificates, they have mutual trust, and a secure connection is established. This connection enables encrypted communication between the client and the server, protecting the confidentiality and integrity of the data exchanged.

Mutual authentication adds an extra layer of security to the communication process by preventing unauthorized entities from impersonating either the client or the server. It is commonly used in scenarios where strong security measures are required, such as online banking, e-commerce, and secure enterprise systems.


Please contact Toffs Security Operation Center for assistance if you encounter any issues.


Mutual Authenticate Client


To use, upload the CA CRT file then click the Submit button.

Mutual Authenticate Origin


To use, upload the Client CRT file and the Client Private file then click the Submit button.


How to generate files?
You can run this commandline to create the above files: 
	openssl genrsa -des3 -out ca.key 4096 

	openssl req -new -x509 -days 730 -key ca.key -out ca.crt 

	openssl genrsa -out client.key 4096 

	openssl req -new -key client.key -out client.csr 

	openssl x509 -req -days 730 -in client.csr -CA ca.crt -CAkey ca.key -set_serial 01 -out 	client.crt 

Verify again to ensure CA and Client CRT files match together: 
	openssl verify -CAfile ca.crt client.crt


Enable Force HTTPS
Force HTTPS: If your site has secure socket layer certificate (SSL) installed, you can automatically redirect visitors to the secured (HTTPS) version of your site for a secure connection. All contents should load via HTTPS and the site should show as secure.

Figure 55

To enable/disable Force HTTPS, click the toggle to turn on/off.



Please contact Toffs Security Operation Center for assistance if you encounter any issues.
Set TLS Protocols

TLS makes websites secure to protect data from being stolen, modified, or spoofed. 
Set TLS Protocols: The minimum TLS version setting specifies the version of TLS a visitor must support in order to connect to your domain using TLS.
Figure 56


Note: Starting March 31,2022 , TLS 1.0 and 1.1 will no longer be supported by Google, Microsoft , Apple , and Mozilla . Starting from 2021, Google Chrome no longer allows websites using TLS 1.0 and 1.1, the page will not be able to load.

TLS 1.2 - TLS 1.2 allows the use of more secure hash algorithms such as SHA-256. The ciphers with cryptographic weaknesses had posed potential security vulnerabilities.

TLS 1.3- TLS1.3 shrunk the size of the cipher suites used for encryption,Improving the latency compare with TLS 1.2 



Please contact Toffs Security Operation Center for assistance if you encounter any issues.
Set Default Cipher

Ciphers are algorithms, more specifically they are a set of steps for performing a cryptographic function – it can be encryption, decryption, hashing or digital signatures.
Set Default Cipher: A cipher suite is a set of algorithms that help secure a network connection.
To set Default Cipher, complete the following steps:
1. Click on the toggle to enable Set Default Cipher.

Figure 57
2. Click on the the “Advance” button to see the detail Cipher List.

Figure 58

If you would like to update the Cipher List, you can enter the new data in the box.
3. Click “Save” to finish.
Please contact Toffs Security Operation Center for assistance if you encounter any issues.
TLS 1.2 recommended cipher list:
TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256
TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384
TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256
TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384
TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256
TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384
TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256
TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384
TLS_DHE_RSA_WITH_AES_128_GCM_SHA256
TLS_DHE_RSA_WITH_AES_256_GCM_SHA384
TLS_DHE_RSA_WITH_AES_128_CBC_SHA
TLS_DHE_RSA_WITH_AES_256_CBC_SHA
TLS_DHE_RSA_WITH_AES_128_CBC_SHA256
TLS_DHE_RSA_WITH_AES_256_CBC_SHA256
TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256
TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305
TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256
TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305

Browser support TLS1.2
Internet Explorer  Version 11 and above
Google Chrome Version 29 and above
Mozilla Firefox  Version 27 and above
Apple Safari Version 7 and above
TLS 1.3 recommended cipher list:
TLS_AES_256_GCM_SHA384
TLS_CHACHA20_POLY1305_SHA256
TLS_AES_128_GCM_SHA256
TLS_AES_128_CCM_8_SHA256
TLS_AES_128_CCM_SHA256
Browser support TLS1.3
Google Chrome – Version 67+
Mozilla Firefox – Version 61+
Apple – Mac OS 10.3 & iOS 11

Set HSTS
Set HSTS: HSTS restricts web browsers to access web servers solely over HTTPS.
HSTS protection against HTTP downgrade attacks (SSL stripping attacks) by requiring all traffic to utilize HTTPS. It rewrites requests that do not point to encrypted sources. Mixed content defense. HSTS automatically upgrades fetches to HTTPS in situations where a domain has mixed content.

The HTTP Strict-Transport-Security response header informs browsers that the site should only be accessed using HTTPS, and that any future attempts to access it using HTTP should automatically be converted to HTTPS.


To set HSTS, complete the following steps:
1. Click on the toggle to enable Set HSTS.

Figure 59
2. Click “Advance” button to configure the advanced level of Set HSTS. 
Figure 60

The system will display Advanced HSTS Setting part.

Figure 61

HSTS Value: 
Max Age: 31,536,000 Seconds (365 Days) the website should always be accessed via HTTPS.
HSTS Include Subdomain: Make sure the subdomain is under SSL cert, all the subdomains will direct HTTPS.
HSTS Preload: Normally the first time accessing the browser is not successfully protected, with HSTS preload enabled. You may enable HSTS.
3. Click “Save” to finish.







Please contact Toffs Security Operation Center for assistance if you encounter any issues.

Upgrade HTTP to HTTPS

Upgrade HTTP to HTTPS: This feature automatically upgrades all insecure resource requests from their pages to secure variants.

To enable/disable this feature, click the toggle to turn on/off.


Figure 62




Please contact Toffs Security Operation Center for assistance if you encounter any issues.
Cookies Setting:

Cookies Setting: An HTTP cookie (also known as web cookie or browser cookie) is a small piece of data that a server sends to the user's web browser. The browser may store it and send it back with the next request to the same server.

Figure 63

HttpOnly Cookies is a tag added to a browser cookie that prevents client side scripts from accessing data, this is a gate to prevent the specialized cookies from being accessed by others than the server. The http only cookies could help mitigate the risk of client side scripts accessing the protected cookies making the cookies more secure. 

HttpOnly can prevent the Cross-site scripting(XSS) attacks which always aim at stealing session cookies.
Sample:
Session cookies using the set cookies header:

Protected by httpOnly

Secure Cookies are used for declare that the cookie may only be transmitted using a secure connection(SSL/HTTPS).Therefore, the secure cookies only can set during an HTTPS connection.If the cookie is set but the connection is http, the browser will ignore the connection.Secure Cookies can prevent man-in-the-middle attack.


Sample:



Please contact Toffs Security Operation Center for assistance if you encounter any issues.