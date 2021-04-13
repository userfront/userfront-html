import "../src/index.js";

describe("Userfront version", () => {
  it("should contain core methods", () => {
    const coreMethods = [
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
});
