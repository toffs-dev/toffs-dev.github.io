---
layout: post_userguide
id_menu: ug_cdn
title: Custom Header
categories: [UserGuide,UserGuide_Cdn]
---
## Custom Header

Figure 111

This is the **“Custom Header**” page under the **“Configuration”** page.

**Custom Header:** This function allows to setup custom header for a domain.

**To setup a custom header for a domain**, click the **“+Add”** button, and enter the data which are enquired.

There are 2 types: add_header and proxy_set_header
- **add_header:** Add Header for Response Headers of the request
- **proxy_set_header:** Add Header for Request Headers to Origin

    Figure 112

Click **“Save”** button when finished.

**Note:**

- When enabling Upgrade HTTP to HTTPS, it will automatically add an add_header rule with Key as Content-Security-Policy and Value as "upgrade-insecure-requests";
- Becarefully when adding the new Custom Header rule.
- When using the wrong format, it can cause the Nginx fall down.
- **Need to check on UAT first, before implementing on Production.**


Please contact **Toffs Security Operation Center** for assistance if you encounter any issues.