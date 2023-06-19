import { describe, expect, it } from "@jest/globals";
import { getGreeting } from "./getGreeting";

describe("getGreeting", () => {
    it("should return Hello Dear User!", () => {
        expect(getGreeting("Dear User")).toEqual("Hello Dear User!");
    });
});
