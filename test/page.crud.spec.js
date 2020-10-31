const Test = require("./config/test.utils.js");
const { createOrReturnPage, apiFns } = require("@anymod/core");

xdescribe("createOrReturnPage", () => {
  beforeAll(() => {
    Test.fns.defineAnyModPage(global);
    document.head.innerHTML = Test.factories.document.headInnerHtml;
    AnyMod.Page.page = Test.factories.pages.basic;
    AnyMod.Opts.api = true;
  });

  it("should return a page if it is already set", (done) => {
    window.history.pushState({}, "Basic page", "/basic");
    createOrReturnPage()
      .then((page) => {
        expect(page.id).toBe(1);
        expect(page.mods).toEqual({
          basic: Test.factories.mods.basic,
          assetboth: Test.factories.mods.assetboth,
        });
        done();
      })
      .catch((err) => done(err));
  });

  it("should find or create a new page if a new mod is found but the page does not match URL", (done) => {
    const nextPage = {
      id: 99,
      host: "example.com",
      pathname: "/next-page.html",
      mods: { basic: Test.factories.mods.basic },
    };
    apiFns.post = jest.fn(() => Promise.resolve(nextPage));
    window.history.pushState({}, "Next page", nextPage.pathname);
    let newMod = document.createElement("div");
    newMod.id = "anymod-basic";
    document.body.appendChild(newMod);
    createOrReturnPage()
      .then((page) => {
        expect(apiFns.post).toHaveBeenCalledWith(["basic"]);
        expect(page.id).toBe(nextPage.id);
        expect(page.pathname).toBe(nextPage.pathname);
        done();
      })
      .catch((err) => done(err));
  });
});
