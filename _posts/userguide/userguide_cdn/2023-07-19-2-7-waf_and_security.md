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
