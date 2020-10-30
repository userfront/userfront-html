/*
 * Insert a page's CSS & JS assets into the DOM
 * Calls mountModAtEl on mods as their assets are finished loading.
 */
import Test from "../../anymod-core/test/config/test.utils.js";
import { processPage } from "../../anymod-core/src/page.process.js";
import * as jointUtils from "../../anymod-core/joint.utils.js";

let scriptTag, styleTag;
const scope = {};

describe("processPage", () => {
  describe("with CSS & JS assets for 2 mods", () => {
    beforeAll(() => {
      Test.fns.defineAnyModPage(global);
      document.head.innerHTML = Test.factories.document.headInnerHtml;
      document.body.innerHTML = `
        <div id="anymod-${Test.factories.mods.basic.key}"></div>
        <div id="anymod-${Test.factories.mods.assetboth.key}"></div>`;
      scriptTag = document.getElementById("AnyMod-script");
      styleTag = document.querySelector("[anymod-styles]");
      scope.modCb = jest.fn();
      const tempFn = jointUtils.loadPageAssets;
      jointUtils.loadPageAssets = (a) =>
        tempFn(a, { scriptTag, styleTag, modCb: scope.modCb });
      processPage(Test.factories.pages.basic);
    });

    it("should load all CSS assets", () => {
      expect(document.head.innerHTML).toContain(
        `<link rel="stylesheet" href="${Test.factories.pages.basic.cssAssets[0]}">`
      );
      expect(document.head.innerHTML).toContain(
        `<link rel="stylesheet" href="${Test.factories.pages.basic.cssAssets[1]}">`
      );
    });

    it("should load all JS assets", () => {
      expect(document.head.innerHTML).toContain(
        `<script defer="" src="${Test.factories.pages.basic.jsAssets[0]}"></script>`
      );
      expect(document.head.innerHTML).toContain(
        `<script defer="" src="${Test.factories.pages.basic.jsAssets[1]}"></script>`
      );
    });

    it("should call mount on both mods once onload fires", () => {
      expect(scope.modCb).not.toHaveBeenCalled();
      Test.fns.fireAllOnloads(document);
      expect(scope.modCb.mock.calls).toContainEqual([
        Test.factories.mods.basic,
      ]);
      expect(scope.modCb.mock.calls).toContainEqual([
        Test.factories.mods.assetboth,
      ]);
    });
  });

  describe("without CSS or JS assets but with 2 mods", () => {
    beforeAll(() => {
      Test.fns.defineAnyModPage(global);
      document.head.innerHTML = Test.factories.document.headInnerHtml;
      document.body.innerHTML = `
        <div id="anymod-${Test.factories.mods.plainhtml.key}"></div>
        <div id="anymod-${Test.factories.mods.plaincss.key}"></div>`;
      scriptTag = document.getElementById("AnyMod-script");
      styleTag = document.querySelector("[anymod-styles]");
      scope.modCb = jest.fn();
      const tempFn = jointUtils.loadPageAssets;
      jointUtils.loadPageAssets = (a) =>
        tempFn(a, { scriptTag, styleTag, modCb: scope.modCb });
      processPage(Test.factories.pages.noassets);
    });

    it("should call mount on both mods without onload", () => {
      expect(scope.modCb).toHaveBeenCalledTimes(2);
      expect(scope.modCb.mock.calls).toContainEqual([
        Test.factories.mods.plainhtml,
      ]);
      expect(scope.modCb.mock.calls).toContainEqual([
        Test.factories.mods.plaincss,
      ]);
    });
  });

  describe("without any assets or mods", () => {
    beforeAll(() => {
      Test.fns.defineAnyModPage(global);
      document.head.innerHTML = Test.factories.document.headInnerHtml;
      scriptTag = document.getElementById("AnyMod-script");
      styleTag = document.querySelector("[anymod-styles]");
      scope.modCb = jest.fn();
      const tempFn = jointUtils.loadPageAssets;
      jointUtils.loadPageAssets = (a) =>
        tempFn(a, { scriptTag, styleTag, modCb: scope.modCb });
      processPage(Test.factories.pages.empty);
    });

    it("should not do anything (runs with no errors)", () => {
      expect(scope.modCb).not.toHaveBeenCalled();
    });
  });

  describe("with a CSS asset already in the head", () => {
    beforeAll(() => {
      Test.fns.defineAnyModPage(global);
      document.head.innerHTML =
        Test.factories.document.headInnerHtml +
        `<link href="${Test.factories.pages.basic.cssAssets[0]}">`;
      document.body.innerHTML = `
        <div id="anymod-${Test.factories.mods.basic.key}"></div>
        <div id="anymod-${Test.factories.mods.assetboth.key}"></div>`;
      scriptTag = document.getElementById("AnyMod-script");
      styleTag = document.querySelector("style[anymod-styles]");
      scope.modCb = jest.fn();
      const tempFn = jointUtils.loadPageAssets;
      jointUtils.loadPageAssets = (a) =>
        tempFn(a, { scriptTag, styleTag, modCb: scope.modCb });
      processPage(Test.factories.pages.basic);
    });

    it("should load all CSS assets", () => {
      expect(document.head.innerHTML).not.toContain(
        `<link rel="stylesheet" href="${Test.factories.pages.basic.cssAssets[0]}">`
      ); // Already contains without rel="stylesheet"
      expect(document.head.innerHTML).toContain(
        `<link rel="stylesheet" href="${Test.factories.pages.basic.cssAssets[1]}">`
      );
    });

    it("should load all JS assets", () => {
      expect(document.head.innerHTML).toContain(
        `<script defer="" src="${Test.factories.pages.basic.jsAssets[0]}"></script>`
      );
      expect(document.head.innerHTML).toContain(
        `<script defer="" src="${Test.factories.pages.basic.jsAssets[1]}"></script>`
      );
    });

    it("should call mount on both mods once onload fires", () => {
      expect(scope.modCb).not.toHaveBeenCalled();
      Test.fns.fireAllOnloads(document);
      expect(scope.modCb.mock.calls).toContainEqual([
        Test.factories.mods.basic,
      ]);
      expect(scope.modCb.mock.calls).toContainEqual([
        Test.factories.mods.assetboth,
      ]);
    });
  });

  describe("with a mod added after all assets have loaded", () => {
    beforeAll(() => {
      Test.fns.defineAnyModPage(global);
      scope.page = JSON.parse(JSON.stringify(Test.factories.pages.basic));
      document.head.innerHTML =
        Test.factories.document.headInnerHtml +
        `<link href="${scope.page.cssAssets[0]}">`;
      document.body.innerHTML = `
        <div id="anymod-${Test.factories.mods.basic.key}"></div>
        <div id="anymod-${Test.factories.mods.assetboth.key}"></div>`;
      scriptTag = document.getElementById("AnyMod-script");
      styleTag = document.querySelector("style[anymod-styles]");
      scope.modCb = jest.fn();
      const tempFn = jointUtils.loadPageAssets;
      jointUtils.loadPageAssets = (a) =>
        tempFn(a, { scriptTag, styleTag, modCb: scope.modCb });
      processPage(scope.page);
    });

    it("should load all assets and mount mods on page", () => {
      expect(document.head.innerHTML).not.toContain(
        `<link rel="stylesheet" href="${scope.page.cssAssets[0]}">`
      ); // Already contains without rel="stylesheet"
      expect(document.head.innerHTML).toContain(
        `<link rel="stylesheet" href="${scope.page.cssAssets[1]}">`
      );
      expect(document.head.innerHTML).toContain(
        `<script defer="" src="${scope.page.jsAssets[0]}"></script>`
      );
      expect(document.head.innerHTML).toContain(
        `<script defer="" src="${scope.page.jsAssets[1]}"></script>`
      );
      expect(scope.modCb).not.toHaveBeenCalled();
      Test.fns.fireAllOnloads(document);
      expect(scope.modCb).toHaveBeenCalledTimes(2);
      expect(scope.modCb.mock.calls).toContainEqual([scope.page.mods.basic]);
      expect(scope.modCb.mock.calls).toContainEqual([
        scope.page.mods.assetboth,
      ]);
    });

    it("should mount a plain mod added asynchronously", () => {
      const newMod = Test.factories.mods.buildPlainWithEid("plain1"),
        newModEl = document.createElement("div");
      scope.page.mods.plain1 = newMod;
      newModEl.id = "plain1";
      newModEl.setAttribute("data-key", "plain1");
      document.body.appendChild(newModEl);
      processPage(scope.page);
      Test.fns.fireAllOnloads(document);
      expect(scope.modCb).toHaveBeenCalledTimes(3);
      expect(scope.modCb.mock.calls).toContainEqual([scope.page.mods.plain1]);
    });

    it("should mount a mod with already added assets added asynchronously", () => {
      const newMod = JSON.parse(JSON.stringify(scope.page.mods.basic)),
        newModEl = document.createElement("div");
      newMod.key = "basic2";
      scope.page.mods.basic2 = newMod;
      newModEl.id = "basic2";
      newModEl.setAttribute("data-key", "basic2");
      document.body.appendChild(newModEl);
      processPage(scope.page);
      Test.fns.fireAllOnloads(document);
      expect(scope.modCb).toHaveBeenCalledTimes(4);
      expect(scope.modCb.mock.calls).toContainEqual([scope.page.mods.basic2]);
    });
  });

  // xdescribe('with a mod added after all assets have loaded', () => {

  //   beforeAll(() => {
  //     jest.useFakeTimers()
  //     Test.fns.defineAnyModPage(global)
  //     document.head.innerHTML = Test.factories.document.headInnerHtml
  //     scriptTag = document.getElementById('AnyMod-script')
  //     styleTag = document.querySelector('[anymod-styles]')
  //     scope.mods = {
  //       plain1: Test.factories.mods.buildPlainWithEid('plain1'),
  //       plain2: Test.factories.mods.buildPlainWithEid('plain2')
  //     }
  //     AnyMod.Page.page.id = 99
  //     AnyMod.Page.page.mods = scope.mods
  //     AnyMod.Opts.api = true
  //     scope.modCb = jest.fn()
  //     document.body.innerHTML = '<div id="anymod-plain1" data-key="plain1"></div>'
  //   })

  //   // NOTE unable to get render testable because of setTimeout inside of render promise
  //   it('should render an async mod correctly', done => {
  //     jointUtils.loadPageAssets({ mods: scope.mods }, { modCb: scope.modCb, scriptTag, styleTag, parent: AnyMod.Page })
  //     Test.fns.fireAllOnloads(document)
  //     const newModEl = document.createElement('div')
  //     newModEl.id = 'plain2'
  //     newModEl.setAttribute('data-key', 'plain2')
  //     document.body.appendChild(newModEl)
  //     processPage(AnyMod.Page.page)
  //     Test.fns.fireAllOnloads(document)
  //     Test.fns.fireAllOnloads(document)
  //     jest.runAllTimers()
  //     expect(newModEl.getAttribute('data-key')).toBe('plain2')
  //     expect(newModEl.getAttribute('data-anymod-mounted')).toBe('')
  //     expect(newModEl.innerHTML).toBe('Hello plain2')
  //     done()
  //   })

  // })

  // describe('with a mod added after all assets have loaded', () => {

  //   beforeAll(() => {
  //     Test.fns.defineAnyModPage(global)
  //     document.head.innerHTML = Test.factories.document.headInnerHtml + `<link href="${Test.factories.pages.basic.cssAssets[0]}">`
  //     document.body.innerHTML = `
  //       <div id="anymod-${Test.factories.mods.basic.key}"></div>
  //       <div id="anymod-${Test.factories.mods.assetboth.key}"></div>`
  //     scriptTag = document.getElementById('AnyMod-script')
  //     styleTag = document.querySelector('[anymod-styles]')
  //     const tempFn = jointUtils.loadPageAssets
  //     scope.modCb = jest.fn()
  //     jointUtils.loadPageAssets = a => tempFn(a, { scriptTag, styleTag, modCb: scope.modCb })
  //     processPage(Test.factories.pages.basic)
  //   })

  //   it('should call mount', done => {
  //     Test.fns.fireAllOnloads(document)
  //     expect(scope.modCb).toHaveBeenCalledTimes(3)
  //     expect(scope.modCb.mock.calls).toContainEqual([Test.factories.mods.basic])
  //     expect(scope.modCb.mock.calls).toContainEqual([Test.factories.mods.assetboth])
  //   })

  //   it('should mount the new mod', done => {
  //     let newEl = document.createElement('div')
  //     newEl.id = 'anymod-basic'
  //     document.body.appendChild(newEl)
  //     processPage(Test.factories.pages.basic)
  //     expect(AnyMod.Page.modsWithRemainingAssets).toEqual([])
  //     expect(scope.modCb).toHaveBeenCalledTimes(8)
  //     done()
  //   })

  // })
});
