import Cookie from "js-cookie";
import "../src/index.js";

describe("Userfront version", () => {
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
    window.AnyMod.init(tenantId);
    expect(window.AnyMod.accessToken()).toEqual(cookieValue);
  });
});
