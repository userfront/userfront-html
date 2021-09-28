import Cookies from "js-cookie";
import jwt from "jsonwebtoken";

import { tenantId } from "./config/ready.setup.js";
import "../src/index.js";

// Define an ID token as a cookie
const userValues = {
  name: "Jane Roe",
  email: "jane@example.com",
  username: "jroe",
};
const value = jwt.sign(userValues, "foobar");
Cookies.set(`id.${tenantId}`, value, { sameSite: "Lax" });

describe("Userfront Core JS", () => {
  it("objects should be present", () => {
    const coreMethods = ["user", "tokens"];
    coreMethods.map((method) => {
      expect(typeof window.AnyMod[method]).toEqual("object");
    });
  });

  it("should be able to access the user object", () => {
    window.Userfront.init(tenantId);
    expect(Userfront.user.name).toEqual(userValues.name);
    expect(Userfront.user.email).toEqual(userValues.email);
    expect(Userfront.user.username).toEqual(userValues.username);
    expect(typeof Userfront.user.update).toEqual("function");
  });
});
