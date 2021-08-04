# Userfront HTML

The Userfront HTML binding allows you to quickly add pre-built signup, login, and password reset forms to your website.

This binding includes all methods from the Userfront [core JS library](https://userfront.com/docs/js.html).

## Setup

[Working example](https://codepen.io/userfront/pen/MWyjXXq)

You can find installation instructions for your account in the **Toolkit** section of the Userfront dashboard.

This example uses the following:

- Account ID: `demo1234`
- Tool ID: `nkmbbm` (signup form)

Paste the script snippet inside your HTML `<head>` and above any other scripts, and paste the div inside your HTML `<body>` wherever you want the tool to show:

<!-- prettier-ignore -->
```html
<html>
<head>

  <script id="Userfront-script">
    (function(m,o,d,u,l,a,r,i,z,e) {
      u[m]={rq:[],ready:function(j){u[m].rq.push(j);},m:m,o:o,d:d,r:r};function j(s){return encodeURIComponent(btoa(s));}z=l.getElementById(m+"-"+a);r=u.location;
      e=[d+"/page/"+o+"/"+j(r.pathname)+"/"+j(r.host)+"?t="+Date.now(),d];e.map(function(w){i=l.createElement(a);i.defer=1;i.src=w;z.parentNode.insertBefore(i,z);});u.amvartem=m;
    })("Userfront", "demo1234", "https://cdn.userfront.com/toolkit",window,document,"script");
  </script>

</head>
<body>

  <!-- Signup form -->
  <div id="userfront-nkmbbm"></div>

</body>
```

<!-- /prettier-ignore -->

This will add a working signup form to your page:

![Signup form](https://res.cloudinary.com/component/image/upload/v1597168270/permanent/signup-mod.png)

## Core JS methods

When you add the script to your page, you can use any of the methods from the Userfront core JS library by referencing `window.Userfront` (or simply `Userfront`).

Docs for the core JS methods are here: https://userfront.com/docs/js.html

Note that you do **not** need to call `Userfront.init()` when using the HTML binding.

Examples:

```js
// Send a login link
Userfront.sendLoginLink("jane@example.com");

// Read the access token
Userfront.tokens.accessToken;

// => "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2RlIjoidGVzdCIsImlzQ29uZmlybWVkIjp0cnVlLCJ1c2VySWQiOjEsInVzZXJVdWlkIjoiZDAwNTlmN2UtYzU0OS00NmYzLWEzYTMtOGEwNDY0MDkzZmMyIiwidGVuYW50SWQiOiJwOW55OGJkaiIsInNlc3Npb25JZCI6IjRlZjBlMjdjLTI1NDAtNDIzOS05YTJiLWRkZjgyZjE3YmExYiIsImF1dGhvcml6YXRpb24iOnsicDlueThiZGoiOnsidGVuYW50SWQiOiJwOW55OGJkaiIsIm5hbWUiOiJVc2VyZnJvbnQiLCJyb2xlcyI6WyJhZG1pbiJdLCJwZXJtaXNzaW9ucyI6W119fSwiaWF0IjoxNjE3MTQ4MDY3LCJleHAiOjE2MTk3NDAwNjd9.gYz4wxPHLY6PNp8KPEyIjLZ8QzG3-NFJGPitginuLaU"

// Log the user out
Userfront.logout();

// Access the user's information
Userfront.user;

/** =>
 * {
 *    email: "jane@example.com",
 *    name: "Jane Example",
 *    image: "https://res.cloudinary.com/component/image/upload/avatars/avatar-plain-9.png",
 *    data: {},
 *    username: "jane-example",
 *    confirmedAt: "2020-01-01T00:00:00.000Z",
 *    isConfirmed: true,
 *    createdAt: "2020-01-01T00:00:00.000Z",
 *    updatedAt: "2020-01-01T00:00:00.000Z",
 *    mode: "test",
 *    tenantId: "demo1234",
 *    userId: 1,
 *    userUuid: "d6f0f045-f6ea-4262-8724-dfc0b77e7dc9",
 * }
 */
```
