---
layout: post_userguide
id_menu: ug_cdn
title: Redirection
categories: [UserGuide,UserGuide_Cdn]
---
## Redirection

Figure 40

This is the **“Redirection”** page under the **“Configuration”** page.

1. **“Domain Flattening”**: When you have two different addresses pointing to the same page, like www.example.com/index.html and example.com/index.html, many search engines will regard those two URLs as two different pages with duplicate content. To deal with this, you can redirect all pages using one form of the web address ('URL') to the other form. E.g. From example.com to www.example.com.

2. “**Redirect URL”**: URL redirection is a technique that takes one website URL and points it to another. When you type in or click on that original URL, you will be taken to the new page or website. E.g. When you open http://www.source.com, you will be redirected to https://www.destination.com.

3. **“Custom Redirection”**: Navigates the user from a source URL to a target URL with a specific HTTP status code.


### Setup Domain Flattening

Figure 41

**“Domain Flattening”**: When you have two different addresses pointing to the same page, like www.example.com/index.html and example.com/index.html, many search engines will regard those two URLs as two different pages with duplicate content. To deal with this, you can redirect all pages using one form of the web address ('URL') to the other form. E.g. From example.com to www.example.com.

To enable/disable **Domain Flattening**, click the toggle to turn on/off.


### Setup Redirect to Another URL

Figure 42

**“Redirect URL”**: URL redirection is a technique that takes one website URL and points it to another. When you type in or click on that original URL, you will be taken to the new page or website. E.g. When you open http://www.source.com, you will be redirected to https://www.destination.com.

**To setup Redirect to Another URL, complete the following steps:**

1. In the Redirect page, to enable **Redirect to Another URL**, click the toggle. The system will display Redirect URL field.

    Figure 43

2. Select **HTTP or HTTPS** method.

3. Enter **Redirect URL**.

4. Click **“Save”** to finish.


### Setup Custom Redirection

**“Custom Redirection”**: Navigates the user from a source URL to a target URL with a specific HTTP status code.

Figure 44

There are 2 Custom Redirection types: Static Redirection and Dynamic Redirection

- **Static Redirection**: When Request meets the condition, it return Status Code and redirect to destination URL.The destination URL is static URL

- **Dynamic Redirectio**n: When Request meets the condition, it return Status Code and redirect to destination URL. The destination URL is dynamic URL, value at the (.*) address of the request is the same with  value at the $xx address of destination URL.

**Create Custom Redirection:**

To create a new custom redirection:

1. Navigate to **CDN > Domains > Configuration > Redirection > Custom Redirection**

2. Click the **“+Add”** button

3. Enter a descriptive name for the custom cache in the **Name** field

4. Under **When incoming requests match**, define the rule expression. Use the **Field** drop-down list to choose an HTTP property (refer to Available fields for the list of available fields). For each request, the value of the property you choose for Field is compared to the value you specify for **Value** using the operator selected in **Operator**.

5. Under **Then**, in the **Type** section, select a type value; in **Status Code**, select a status code value and enter the **URL**.

    Figure 45

6. To save and deploy your rule, select **Deploy**. If you are not ready to deploy your rule, select **Save as Draft**.

**Note:**

1. You may like to use the **“And”/”Or”** button when setup the configuration.
2. The **Expression Preview** section provides the expression. You can also click on the “Edit expression” button if you would like to change it.
3. You may like to set the priority of each item in the Custom Redirection section.
4. **The priority** of the Cache will be according to this ordering: **Custom Redirection > Redirect to Another URL.**


Please contact **Toffs Security Operation Cent**er for assistance if you encounter any issues.