import Cookie from "js-cookie";
import { tenantId } from "./config/alias.setup.js";
import "../src/index.js";

describe("Userfront version", () => {
  beforeAll(() => {
    document.head.innerHTML = `<script id="Userfront-script">
  (function(m,o,d,u,l,a,r,i,z,e) {
    u[m]={rq:[],ready:function(j){u[m].rq.push(j);},m:m,o:o,d:d,r:r};function j(s){return encodeURIComponent(btoa(s));}z=l.getElementById(m+"-"+a);r=u.location;
    e=[d+"/page/"+o+"/"+j(r.pathname)+"/"+j(r.host)+"?t="+Date.now(),d];e.map(function(w){i=l.createElement(a);i.defer=1;i.src=w;z.parentNode.insertBefore(i,z);});u.amvartem=m;
  })("Userfront", "${tenantId}", "https://mod.userfront.com/v3",window,document,"script");
</script>`;
  });

  it("should contain core methods", () => {
    const coreMethods = [
      "init",
      "signup",
      "login",
      "logout",
      "redirectIfLoggedIn",
      "resetPassword",
      "sendLoginLink",
      "sendResetLink",
      "accessToken",
      "idToken",
    ];
    coreMethods.map((method) => {
      expect(typeof window.AnyMod[method]).toEqual("function");
    });
  });

  it("should be able to access the methods on the DOM", () => {
    const tenantId = "a1b2c3d4";
    const cookieValue = "foobarbaz";
    Cookie.set(`access.${tenantId}`, cookieValue);
    expect(window.AnyMod.accessToken()).toEqual(cookieValue);
  });
});
