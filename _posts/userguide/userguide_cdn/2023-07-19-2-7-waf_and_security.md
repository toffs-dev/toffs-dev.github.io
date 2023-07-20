---
layout: post_userguide
id_menu: ug_cdn
title: WAF and Security
categories: [UserGuide,UserGuide_Cdn]
---
## WAF and Security 

This is the “WAF & Security” page under the “Configuration” page.


### Basic WAF Rules

Figure 64

**Basic WAF Rules:** A **web application firewall (WAF)** is a firewall that monitors, filters and blocks data packets as they travel to and from a website or web application. **WAFs** protect servers. A **WAF** is deployed to protect a specific web application or sets of web applications. It applies a set of rules to an HTTP conversation.

**“Search”** function makes searching for the rules that you have implemented easier.

**“+Add”** function allows you to add rules to protect your domain.


#### To add a new Basic WAF Rule, complete the following steps:

**Step 1:** In Basic WAF Rules, click on **“+Add”** button.

Figure 65

The system will redirect to the Add Basic WAF Rule page.

Figure 66

**Step 2:** In **Rule Name** box, enter rule name.

Figure 67

**Step 3:** Select **Field**

Figure 68

**Step 4:** Select **Operator**

Figure 69

**Step 5:** Select or Enter **Value**

If Field is Country, the Value box will appear country list to select.

Figure 70

If Field is IP Address, the Value box will need to enter multiple values.

Figure 71

**Step 6:** Click **“And”/ “Or”** button. To remove a rule, click **“X”** button.

Figure 72

**Step 7:** Choose an **Action:**

Figure 73

**Step 8:** Click **“Deloy”** to done or click **“Save As Draft”**.

Figure 74


### Custom WAF Rules 

Figure 75

This is the **"Custom WAF Rules**" page under the **“WAF & Security”** page. (Only available to Professional, Premium and Enterprise users).

This page includes Custom WAF Rule in **Global Type** and **Local Type**.

**Global Type:** This rule type will appear when **the supporter** adds a new rule with Global Type to all domains in urgent situations to protect customers’ domains. This rule type will have its default status being OFF. The customer can enable/disable this rule on the Custom WAF Rules page of each domain.

**Local Type:** This rule type will appear when **the customer** adds their own **rules** that are evaluated for each request that passes through the **WAF**. **Custom WAF Rule** is much more detailed than **“Basic WAF Rules”**. These **rules** hold a higher priority than the rest of the rules in the managed rule sets. The **Custom WAF Rules** contain a rule name, rule priority, and an array of matching conditions.

The **“Search”** function makes searching for the custom rules that you have implemented easier.


#### To add a new Custom WAF Rule, complete the following steps:

**Step 1:** In Custom WAF Rules, click on **“+Add”** button.

Figure 76

The system will redirect to the Add Custom WAF Rule page.

Figure 77

**Step 2:** In **Rule Name** box, enter the rule name.

Figure 78


**Step 3:** Select **Field**

Figure 79


**Step 4:** Select **Operator**

Figure 80

**Step 5:** Select or Enter **Value**

Figure 81

**Step 6:** Click **“And”/ “Or”** button. To remove a rule, click **“X”** button.

Figure 82

**Step 7:** Choose an **Action**:

Figure 83

**Step 8:** Click **“Deloy”** to done or click **“Save As Draft”**.

Figure 84


### OWASP Top 10 


Figure 85

This is the **“OWASP Top 10”** page under the **“WAF & Security”** page. (Only available to Professional, Premium and Enterprise users)

By turning this WAF on, it automatically protects you against the Top 10 vulnerabilities identified by the **Open Web Application Security Project (OWASP)**.

**“Type”** function enables you to decide whether the system detects or blocks the dangers to the domain.

**“Submit”** function updates the WAF if there are any changes in **“Type”** or with the OWASP Top 10.

#### To setup OWASP Top 10 for this domain, complete the following steps:

**Step 1:** Click the toggle to Turn on

Figure 86

The system will show the default setting of OWASP Top 10 as below

Figure 87

**Step 2:** Select Type

Figure 88

**Step 3:** Enable the OWASP Top 10 items which you would like and click the **“Save”** button when finished.

Figure 89


### OWASP Rules

Figure 90

This is the **“OWASP Rules”** under the **“WAF & Security”** page. (Only available to Professional, Premium and Enterprise users).

This page allows the user to select **Rule IDs** to be disable.

The Disable Rule List will show after pressing the **“Disable Rule”** in the below table about **Rule ID, Disabled By, Disabled At**.

**“Delete”**  button allows you to remove a Rule ID.


**To setup OWASP Rule for this domain, complete the following steps:**

**Step 1:** In the Rule IDs list drop-down menu, select a Rule ID

Figure 91

**Step 2:** Click **“Disable Rule”**

Figure 92

The system will show the new OWASP Rule as below

Figure 93


### Captcha and Advanced Security Settings 

Figure 94

This is the **“Captcha & Advanced Security Settings”** under the **“WAF & Security”** page. (Only available to Professional, Premium and Enterprise users).

**Captcha:** Captcha is a technique used to distinguish between humans and robots. The visitor is shown a word which is recognized by the site. The input given by the visitor is compared with the correct answer. If the answer matches, the user is identified as human. Thus, given access to the site.

**Rate Limit:** This function is used to limit the number of HTTP requests that users request within a certain period, in particular, the processing rate of requests coming from a single IP address. It can slow down brute force password cracking, crawling of web pages, and prevent DDOS attacks. We can use it to limit and filter the standard values of real users and write information such as source URLs into the system log.

**Cross Origin Resource Sharing(CORS):** Enable and set up CORS to allow access from selected domain or source to your website only.
When setting up Access-Control-Allow-Origin header, please leave the input field blank if you would like to allow access from all origins. You may input one or multiple domains using comma, enter or tab as delimiter. Alternatively, you may copy and paste a list of string domains into the input field. It will automatically add multiple tags for the domains.


#### Captcha
**Captcha:** Captcha is a technique used to distinguish between humans and robots. The visitor is shown a word which is recognized by the site. The input given by the visitor is compared with the correct answer. If the answer matches, the user is identified as human. Thus, given access to the site.

**To set up Captcha, complete the following steps:**

1. In the Captcha & Advanced Security Settings Page, **enable Captcha** by clicking the toggle

    Figure 95
    The system will display full details of the Captcha feature.

2. Enter the **URL for the captcha logo**

3. Select **Exclude Countries**

4. Enter **Params**

5. Enter **Arguments**

6. Click **“Save”** to finish.

**Note:**
- When accessing the URL with **Param/Arguments** or both of them, the system will show the captcha. 
- When using **Exclude Countries**:
    - For countries that match the **Exclude Countries** field, accessing the URL with this parameter will still show the captcha. 
    - For countries that do not match the **Exclude Countries** field, the system will show the captcha with all URLs.

Figure 96


#### Rate Limit

**Rate Limit:** This function is used to limit the number of HTTP requests that users request within a certain period. It can slow down brute force password cracking, crawling of web pages, and prevent DDOS attacks. We can use it to limit and filter the standard values of real users and write information such as source URLs into the system log.

Figure 97

-   **Memory Size** (Megabyte, MB): Limit Size stored the client IP address. 1MB can store 8 000 IP Addresses. 
    *Suggestion*: A normal website should be set to **10M** (80 000 IP Addresses).

-   **Rate Limit**: The requests per second coming from a single IP address.
    *Suggestion*: A normal website should be set from **10 to 20** requests per second, not over 30.

-   **Burst**: The number of excessive requests is delayed. In particular, their number exceeds the maximum burst size in which case the request is terminated with an error.
    *Suggestion*: A normal website should be set from **20 to 50**.

**How to set Rate Limit parameters?**
Take an example with a domain which has the largest traffic on TOFFS Production. This domain received 600 000 requests at the peak hour from an IP Address.

Figure

For each second, the domain received 167 requests (600 000 : 3600 = 167 requests).

Make assumptions, all 167 requests come from different IP Addresses. We calculate as bellow:

Memory Size: 167 x 16 bytes = 2672 bytes. Then set the Memory Size to 1MB. 

Make assumptions, all 167 requests come from one IP Address. We calculate as bellow:

Rate Limit: Set the Rate Limit to 50. It means 50 requests can access.

Burst: Set the Burst to 100. It means 100 requests will be waiting to access.

The remaining 17 requests will be failed.                                          

In reality, the domain will get from many many different IP Addresses. Therefore, the domain will still be stable with these parameters.

**To set up Rate Limit, complete the following steps:**

1. In the Captcha & Advanced Security Settings Page, enable Rate Limit by clicking the toggle

    Figure 98
    The system will display full details of the Captcha feature.

2. Enter **Memory Size** (Megabyte, MB) : Limit Size stored the client IP address.

3. Enter **Rate Limit**: The requests per second coming from a single IP address.

4. Enter **Burst**: The number of excessive requests are delayed. In particular, their number exceeds the maximum burst size in which case the request is terminated with an error.

5. Click **“Save”** to finish.

    Figure 99


#### Cross Origin Resource Sharing (CORS)

**Cross - Origin Resource Sharing (CORS)**: Enable and set up CORS to allow access from selected domain or source to your website only.
When setting up Access-Control-Allow-Origin header, please leave the input field blank if you would like to allow access from all origins. You may input one or multiple domains using comma, enter or tab as delimiter. Alternatively, you may copy and paste a list of string domains into the input field. It will automatically add multiple tags for the domains.

**To set up Cross - Origin Resource Sharing, complete the following steps:**

1. In the Captcha & Advanced Security Settings Page, enable Cross - Origin Resource Sharing by clicking the toggle

    Figure 100
    The system will display a field to enter multiple domains. 

2. Enter **Domain**. (can enter multiple domains)

3. Click **“Save”** to finish.

    Figure 101


Please contact **Toffs Security Operation Center** for assistance if you encounter any issues.