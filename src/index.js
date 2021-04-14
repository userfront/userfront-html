/**
 * Decorate the Singleton with the public methods from @userfront/core
 */

import "@anymod/html";
import Core from "@userfront/core";

const coreMethods = [
  "init",
  "addInitCallback",
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

try {
  coreMethods.map((method) => {
    if (typeof Core[method] === "function") {
      window.AnyMod[method] = Core[method];
    }
  });
} catch (error) {
  console.log(error);
}
