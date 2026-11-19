import { describe, it, expect } from "vitest";
import { validateRegistration } from "./event";
describe("registration validation", () => {
  it("requires first name, valid email and consent", () => {
    const e = validateRegistration({ firstName: "", email: "nope", consent: false });
    expect(Object.keys(e).sort()).toEqual(["consent", "email", "firstName"]);
  });
  it("accepts a complete registration", () => {
    expect(validateRegistration({ firstName: "Ana", email: "ana@mail.com", consent: true })).toEqual({});
  });
});
