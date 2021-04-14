require("@anymod/html");var e,n=(e=require("@userfront/core"))&&"object"==typeof e&&"default"in e?e.default:e;const o=["init","addInitCallback","signup","login","logout","redirectIfLoggedIn","resetPassword","sendLoginLink","sendResetLink","accessToken","idToken"];try{o.map(e=>{"function"==typeof n[e]&&(window.AnyMod[e]=n[e])})}catch(e){console.log(e)}
//# sourceMappingURL=userfront-html.js.map
