---
layout: post_userguide
id_menu: ug_cdn
title: Optimization
categories: [UserGuide,UserGuide_Cdn]
---
## Optimization

Figure 30
This is the **“Optimization”** page under the **“Configuration”** page. This page helps set up the configuration to improve the speed of a website.

The function on this page includes:

1. **“Auto-Minify”** removes unnecessary characters (such as blanks, newlines, comments, and blocks) from JavaScript, CSS, and HTML files.

2. **“HTTP/2”** is Enterprise Internet assets placed on dedicated IP ranges, providing prioritized routing and protection to ensure maximum speed and availability. This function can be toggled on or off.

3. **“HTTP Compression”** helps to speed up page load times for your visitor’s HTTPS traffic by applying Gzip compression.

4. **“Cache Configuration”** is the process of caching an object's content, the object content will be stored in ToffsCDN edge. When a user makes a request, ToffsCDN can deliver the object content more quickly.

5. **“Custom Cache”** allows customizing the cache properties of your HTTP requests. For example, create a rule to specify how long to cache a resource in the TOFFS edge network.


### Setup Auto Minify

Figure 32

**“Auto-Minify”** helps to remove unnecessary characters (such as blanks, newlines, comments, and blocks) from JavaScript, CSS, and HTML files.

To enable/disable, click the toggle to turn on/off.


### Setup HTTP/2

**“HTTP/2” **is Enterprise Internet assets placed on dedicated IP ranges, providing prioritized routing and protection to ensure maximum speed and availability. 

Figure 33

To enable/disable, click the toggle to turn on/off.

***“HTTP/2”** is only available to **Professional**, **Premium** and **Enterprise** Users.*


### Setup HTTP Compression

CDN applies Gzip compression to help speed up page load times for your visitors.

Figure 34 - The default settings for HTTP Compression

**To use this feature:**

1. **Enable HTTP Compression**, the system will show all types of files. Continue to stick to the type that needs to be cached as below:

2. Click the **“Save”** button to apply the configuration and wait for a few minutes to effect.

To check if the setting has affected the website: In the browser, impect the website (press the F12 key), select Network tab then access the website. 


Click in URL which has .css, in Response Headers part will show the information as below:
	
    **Content-Type: text/css
	Content-Encoding: gzip**

That means the files which have .text or .css are applied gzip compression.


### Setup Cache Configuration

**“Cache Configuration”** is the process of caching an object's content, the object content will be stored in ToffsCDN edge. When a user makes a request, ToffsCDN can deliver the object content more quickly.

**To configure the Cache, complete the following steps:**

1. In the Optimization page, click the **Enable Cache** toggle to turn on.


2. Query String - is a part of the web page param that follows the question mark
    - Ignore Query String(default setting is ignored query string) to increase cache hit rates, by reducing the number of unnecessary variations of an object that could be stored.
    - Enable Query String - will store the dynamic content after the question mark.

3. Click **“Advance”** button to configure the advanced level of Cache. The system will display full advanced details of the Cache Configuration.

4. **Caching Times** (mins): default is cache 120 mins (2hours), allowing users to change the cache time.

5. **Cache Extensions**: Users are allowed to use **Default cache extension** or **Customize the cache extension**. 

    **Tip:** To reset the default cache, click **“Set Default”** button.

6. **Follow Origin Cache**: Enable it will ignore the CDN cache setting and follow back the origin cache.

7. **Force Cache Params**: Enable it will allow caching the param without any extension. (Allow to add multiple params)
(Example: DXR.axd?r=1_37-R7m2c )

8. Click **“Save”** to finish.

Figure 37


### Setup Custom Cache

**“Custom Cache”** allows customizing the cache properties of your HTTP requests. For example, create a rule to specify how long to cache a resource in the TOFFS edge network.

Figure 38

**To create a new custom cache:**

1. Navigate to **CDN > Domains > Configuration > Optimization > Custom Cache**

2. Click the **“+Add”** button

3. Enter a descriptive name for the custom cache in the **Name** field

4. Under **When incoming requests matc**h, define the rule expression. Use the **Field** drop-down list to choose an HTTP property (refer to Available fields for the list of available fields). For each request, the value of the property you choose for Field is compared to the value you specify for **Value** using the operator selected in **Operato**r.

5. Under **Then**, in the **actio**n section, select Bypass or Default; in **TTL** - time-to-live, enter a value that is the duration for one or more response status codes received from the origin server.

    Figure 39

6. To save and deploy your rule, select **Deploy**. If you are not ready to deploy your rule, select **Save as Draft**.

**Note:**

1. You may like to use the **“And”/”Or”** button when setup the configuration.

2. The **Expression Preview** section provides the expression. You can also click on the **“Edit expression”** button if you would like to change it.

3. You may like to set the priority of each item in the Custom Cache section.

4. **The priority** of the Cache will be according to this ordering: **Custom Cache > Cache Configuration**.


Please contact **Toffs Security Operation Center** for assistance if you encounter any issues.