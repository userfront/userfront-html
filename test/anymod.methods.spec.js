import "./config/ready.setup.js";

// Call ready method before script is loaded
const preFn = jest.fn();
window.Userfront.ready(preFn);

import "./config/alias.setup.js";
import "../src/index.js";

describe("AnyMod", () => {
  it("methods should be present", () => {
    const coreMethods = ["ready", "initialize", "render"];
    coreMethods.map((method) => {
      expect(typeof window.AnyMod[method]).toEqual("function");
    });
  });

  it("ready method should work properly on Userfront object", () => {
    // Method defined beforehand should have been called
    expect(preFn).toHaveBeenCalledTimes(1);
    expect(preFn).toHaveBeenCalledWith();

    // New methods with `ready` should be called as soon as defined
    const postFn = jest.fn();
    window.Userfront.ready(postFn);
    expect(postFn).toHaveBeenCalledTimes(1);
    expect(postFn).toHaveBeenCalledWith();
  });
});
