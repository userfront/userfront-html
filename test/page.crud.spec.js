const { Test } = require("./config/test.utils.js");
require("../src/index.js");
const { createOrReturnPage, crud } = require("@anymod/core");

describe("createOrReturnPage", () => {
  beforeAll(() => {
    Test.fns.defineAnyModPage(global);
    document.head.innerHTML = Test.factories.document.headInnerHtml;
    AnyMod.Page.page = Test.factories.pages.basic;
    AnyMod.Opts.api = true;
    AnyMod.ApiUrl = "https://example.com/";
  });

  it("should return a page if it is already set", async () => {
    window.history.pushState({}, "Basic page", "/basic");
    const page = await createOrReturnPage();
    expect(page.id).toBe(1);
    expect(page.mods).toEqual({
      basic: Test.factories.mods.basic,
      assetboth: Test.factories.mods.assetboth,
    });
  });

  it("should find or create a new page if a new mod is found but the page does not match URL", async () => {
    const nextPage = {
      id: 99,
      host: "example.com",
      pathname: "/next-page.html",
      mods: { basic: Test.factories.mods.basic },
    };
    crud.post = jest.fn(() => Promise.resolve(nextPage));
    window.history.pushState({}, "Next page", nextPage.pathname);
    let newMod = document.createElement("div");
    newMod.id = "anymod-basic";
    document.body.appendChild(newMod);
    const page = await createOrReturnPage();
    expect(crud.post).toHaveBeenCalledWith(["basic"]);
    expect(page.id).toBe(nextPage.id);
    expect(page.pathname).toBe(nextPage.pathname);
  });
});
