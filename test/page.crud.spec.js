const { Test } = require("./config/test.utils.js");
const nock = require("nock");
require("../src/index.js");
const { createOrReturnPage } = require("@anymod/core");
// const core = require("../../anymod-core/src/index.js");
// let { createOrReturnPage } = core.default;

const url = "https://anymod-test.com/v2/";
const nockScope = nock(url).defaultReplyHeaders({
  "access-control-allow-origin": "*",
  "access-control-allow-credentials": "true",
  "access-control-allow-headers": "AnyMod-URL, AnyMod-Project",
});

describe("createOrReturnPage", () => {
  beforeAll(() => {
    Test.fns.defineAnyModPage(global);
    document.head.innerHTML = Test.factories.document.headInnerHtml;
    AnyMod.Page.page = Test.factories.pages.basic;
    AnyMod.Opts.api = true;
    AnyMod.ApiUrl = url;
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

  it("should find or create a new page if a new mod is found but the page does not match URL", async () => {
    const nextPage = {
      id: 99,
      host: "example.com",
      pathname: "/next-page.html",
      mods: { basic: Test.factories.mods.basic },
    };
    // Set up mocks to return nextPage
    nockScope.intercept("/page", "OPTIONS").reply(200);
    nockScope.post("/page").reply(200, nextPage);

    // Navigate the DOM to next page
    window.history.pushState({}, "Next page", nextPage.pathname);

    // Add a placeholder div and call createOrReturnPage
    let newMod = document.createElement("div");
    newMod.id = "anymod-basic";
    document.body.appendChild(newMod);
    const page = await createOrReturnPage();

    // Assert that the page was returned correctly
    expect(nockScope.isDone()).toBe(true);
    expect(page).toEqual(nextPage);
  });
});
