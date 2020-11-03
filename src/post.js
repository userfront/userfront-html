import * as core from "@anymod/core";

const {
  prepareAll,
  processPage,
  addToCallbacks,
  ready,
  executeCallbacks,
  render,
  createOrReturnPage,
  checkPageAndUpdate,
  logErrorsAndTips,
  uncloakNonMods,
  utils,
} = core.default;

(() => {
  if (!window.AnyMod || window.AnyMod.Script.ran) return;

  /*
   * Public variables & methods that rely on AnyMod variables in pre
   */

  AnyMod.ready = ready;
  AnyMod.render = render;
  addToCallbacks(AnyMod.rq);
  delete AnyMod.rq;

  /*
   * Legacy
   */
  AnyMod.Event.$on = AnyMod.Event.on;
  AnyMod.Event.$off = AnyMod.Event.off;
  AnyMod.Event.$emit = AnyMod.Event.emit;

  /*
   * Create or update page, and place mods
   */
  AnyMod.addToWindowOnload(() => {
    utils.debugLog(["window.onload event"]);

    // Prepare all AnyMod placeholder els
    prepareAll();

    // Assign data from AnyModPageJs
    if (!window.AnyModPageJs)
      return console.warn("Missing initial AnyModPageJs data");
    Object.keys(AnyModPageJs).map(
      (attr) =>
        (AnyMod.Page[attr] = JSON.parse(JSON.stringify(AnyModPageJs[attr])))
    );

    if (AnyMod.Opts.inert) return;

    return createOrReturnPage()
      .then((page) => checkPageAndUpdate(page))
      .then((page) => processPage(page))
      .then(() => {
        executeCallbacks();
        logErrorsAndTips();
        setTimeout(uncloakNonMods, 1);
      })
      .catch((err) => {
        let message = err && err.message ? err.message : "Problem loading page";
        console.warn(message, err);
        uncloakNonMods();
      });
  });

  AnyMod.Script.ran = true;
})();
