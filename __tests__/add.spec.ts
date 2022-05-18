import { plus_one } from "../src/tools/add";

describe("tools/add.ts", () => {
  it("1+1=2", () => {
    expect(plus_one(1)).toBe(2);
  });
});
