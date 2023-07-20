---
layout: post_userguide
id_menu: ug_cdn
title: Custom Pages
categories: [UserGuide,UserGuide_Cdn]
---
## Custom Pages 

Figure 102

This is the **“Custom Pages”** page under the **“Configuration”** page.

**Host Header:** The Host header is usually used to specify the domain name of the server and the TCP port that the server is listening to. If no port is specified, the default port of the requested server is automatically used (for example, port 80 is automatically used when requesting an HTTP URL).

**Maintenance:** A maintenance page is a temporary page for times when a site or app is needed to be taken offline for updates, backups or maintenance. Visitors will be redirected to the maintenance page URL when this feature is turned ON. You may set to allow visitors from specific IPs to your website.
Maintenance allows redirecting HTLM and static URL (with image) only.

**Error Page:** Error pages are server’s response, or the result of an HTTP status code returned by servers. Error pages are important to ensure visitors of your site know exactly what’s happening and what they can do when something unexpected happens on your site.


#### Host Header

**Host Header:** The Host header is usually used to specify the domain name of the server and the TCP port that the server is listening to. If no port is specified, the default port of the requested server is automatically used (for example, port 80 is automatically used when requesting an HTTP URL).

The Host request header specifies the host and port number of the server to which the request is being sent. 

To use Host Header, enter the domain name then click **“Save”**.

Figure 103


### Maintenance Page

**Maintenance:** A maintenance page is a temporary page for times when a site or app is needed to be taken offline for updates, backups or maintenance. Visitors will be redirected to the maintenance page URL when this feature is turned ON. You may set to allow visitors from specific IPs to your website.

Figure 104

**To set up the maintenance page, complete the following steps:**

1. In the Custom Pages, **enable Custome Maintenance Page** by clicking the toggle

    Figure 105

2. Click the **“Advance”** button

    Figure 106

3. Enter **Maintenance URL**

4. Select **HTTP** or **HTTPS**

5. Optionally enter IP or multiple IPs in IP Whitelist

    IP Whitelist: When an IP in Whitelist access the website, it will not redirect to Maintenance page.

6. Click **“Save”** to finish.

    To Force to Maintenance Page, click the toggle.

    Figure 107


### Error Page

**Error Page:** Error pages are server’s response, or the result of an HTTP status code returned by servers. Error pages are important to ensure visitors of your site know exactly what’s happening and what they can do when something unexpected happens on your site.

**To set up the Error Page, complete the following steps:**

1. In the Custom Pages, **enable Custome Error Page** by clicking the toggle.

    Figure 108

2. Click the **“Advance”** button

    Figure 109

3. Select **Status code**

4. Enter **URL**

5. Select the **HTTP** or **HTTPS**

6. Click **“Save”** to finish.

    Figure 110


Please contact **Toffs Security Operation Center** for assistance if you encounter any issues.