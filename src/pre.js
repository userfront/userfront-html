/*!
 * AnyMod library v2
 * (c) 2017-2020 AnyMod
 */
/*
 * Script 2 has three primary responsibilities:
 * 1. Render mods based on the data received from Script 1
 * 2. Check the DOM for new tags and create/update the page if needed
 *    (e.g, if a page doesn't exist yet or if mods were added to a page)
 */

import es6Promise from "es6-promise/auto";
import Eev from "eev";

import {
  alias,
  aliasLowerCase,
  apiUrl,
  buildImage,
  modDataFromEid,
  loadScript,
  loadStyle,
  addStyleString,
  cloakString,
  debugLog,
} from "@anymod/core";

(() => {
  debugLog(["Start"]);

  /**
   * Define the alias name (e.g. Userfront) based on amvartem
   * such that window.AnyMod holds same reference as window.{alias}
   */
  if (window.AnyMod && AnyMod.Script && AnyMod.Script.ran) return;

  /**
   * Add cloak styling
   */
  addStyleString(
    `[${cloakString}],[data-${aliasLowerCase}][not-found]{opacity:0 !important;}`,
    "styles",
    "cloak"
  );

  /*
   * Redefine window.AnyMod
   */
  window.tempAnyMod = window.AnyMod || window.Anymod;
  window.AnyMod = (eid) => new AnyMod.init(eid);
  window.Anymod = window.AnyMod; // Uppercase M as of 14 Jul 2019
  if (alias !== "AnyMod") window[alias] = window.AnyMod;
  Object.keys(tempAnyMod).map((attr) => (AnyMod[attr] = tempAnyMod[attr]));
  delete window.tempAnyMod;

  /**
   * Define for AnyMod(eid) selector
   */
  AnyMod.init = function (eid) {
    // Do not convert to ES6 arrow
    if (!eid) throw new Error("Missing mod id in AnyMod() call");
    return modDataFromEid(eid);
  };

  /*
   * AnyMod public variables
   */
  AnyMod.Promise = es6Promise;
  AnyMod.Event = new Eev();
  AnyMod.Script = { ran: false };
  AnyMod.ApiUrl = AnyMod.ApiUrl || apiUrl;

  function mountedIds() {
    return Object.keys(this.mountedModObjs);
  }

  function mapMmos(cb) {
    if (!cb || typeof cb !== "function") return;
    this.mountedIds().map((id) => cb(this.mountedModObjs[id]));
  }

  AnyMod.Page = {
    page: {}, // Page data returned from script1 or API call
    mountedModObjs: {}, // mmos = mounted modObjs
    unmountedEls: [], // Elements on the page that have not been mounted
    mountedIds,
    mapMmos,
  };

  /**
   * AnyMod.Opts
   */
  const defaultOpts = {
    env: "production",
    api: true, // Whether to make page requests (POST, PUT)
    inert: false, // Whether page avoids all interactions with API and console
    preview: false, // Whether page is a preview (e.g. preview.anymod.com)
    tips: true, // Whether to show performance tips in console
    priority: 3, // Number of mods considered as "priority" for first mount
    version: "default", // Content version to use
  };
  AnyMod.Opts = AnyMod.Opts || {};
  Object.keys(defaultOpts).map((key) => {
    if (!AnyMod.Opts.hasOwnProperty(key)) AnyMod.Opts[key] = defaultOpts[key];
  });

  if (AnyMod.Opts.preview) {
    AnyMod.Opts.tips = false;
  } else if (AnyMod.Opts.inert) {
    AnyMod.Opts.api = false;
    AnyMod.Opts.tips = false;
  }

  /**
   * AnyMod.Version
   * currentVersion determined in following order:
   * 1. URL query: version or lang (?version=v2, ?lang=DE)
   * 2. Option in AnyMod script { version: 'v2' }
   * 3. 'default'
   */
  let currentVersion = AnyMod.Opts.version;
  const queryAttrs =
    window.location.search &&
    window.location.search.replace("?", "").split("&");
  if (queryAttrs) {
    queryAttrs.map((attr) => {
      if (attr.indexOf("version") === 0 || attr.indexOf("lang") === 0) {
        currentVersion = decodeURIComponent(attr.split("=")[1]);
      }
    });
  }
  AnyMod.Version = {
    currentVersion,
  };

  /**
   * AnyMod helper functions
   */
  AnyMod.buildImage = buildImage;
  AnyMod.loadScript = loadScript;
  AnyMod.loadStylesheet = loadStyle;

  AnyMod.addToWindowOnload = (fn) => {
    if (typeof fn !== "function") return;
    if (document.readyState === "complete") return fn();
    window.addEventListener("load", fn, false);
  };
})();
