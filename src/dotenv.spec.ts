import { describe, expect, it } from "@jest/globals";
import "dotenv/config"

describe("dotenv", () => {
    it("should return me", () => {
        expect(process.env.ENVAR1).toEqual("me");
    });
});
