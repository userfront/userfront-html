require("@anymod/html");var n,o=(n=require("@userfront/core"))&&"object"==typeof n&&"default"in n?n.default:n;const e=["init","addInitCallback","signup","login","logout","redirectIfLoggedIn","resetPassword","sendLoginLink","sendResetLink","accessToken","idToken"];try{e.map(n=>{"function"==typeof o[n]&&(window.AnyMod[n]=o[n])})}catch(n){console.info("[Userfront] Problem assigning JS methods.")}try{const n=window.AnyMod.External.project;o.init(n)}catch(n){console.info("[Userfront] Auto-init did not succeed.")}
//# sourceMappingURL=userfront-html.js.map
