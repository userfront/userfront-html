import Cookie from "js-cookie";
import setup from "./config/alias.setup.js";
import "../src/index.js";

const { tenantId } = setup;

describe("Userfront Core JS", () => {
  it("methods should be present", () => {
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
    const cookieValue = "foobarbaz";
    Cookie.set(`access.${tenantId}`, cookieValue);
    expect(window.AnyMod.accessToken()).toEqual(cookieValue);
  });
});
