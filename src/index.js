import "@anymod/html";
import Core from "@userfront/core";

/**
 * Decorate the Singleton with the public methods from @userfront/core
 */
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
  console.info("[Userfront] Problem assigning JS methods.");
}

/**
 * Auto-initialize Userfront core, if the tenantId is available
 */
try {
  const tenantId = window.AnyMod.External.project;
  Core.init(tenantId);
} catch (error) {
  console.info("[Userfront] Auto-init did not succeed.");
}
