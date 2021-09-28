import "@anymod/html";
import Core from "@userfront/core";

/**
 * Decorate the Singleton with the public methods from @userfront/core
 */
const coreMethods = [
  "accessToken",
  "addInitCallback",
  "idToken",
  "init",
  "login",
  "logout",
  "redirectIfLoggedIn",
  "refresh",
  "resetPassword",
  "sendLoginLink",
  "sendResetLink",
  "signup",
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
 * Decorate the Singleton with the stores from @userfront/core
 */
const coreObjects = ["user", "tokens"];

try {
  coreObjects.map((obj) => {
    if (typeof Core[obj] === "object") {
      window.AnyMod[obj] = Core[obj];
    }
  });
} catch (error) {
  console.info("[Userfront] Problem assigning JS objects.");
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
