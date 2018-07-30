var expect = require("expect");

var { generateMessage } = require("./message");

const from = "testFrom";
const text = "testText";

describe("generateMessage", () => {
  it("should generate correct message object", () => {
    //store res in variable
    const result = generateMessage(from, text);
    //assert from match
    expect(result.from).toBe(from);
    //assert text match
    expect(result.text).toBe(text);
    //assert createdat is number
    expect(typeof result.createdAt).toBe("number");
  });
});
