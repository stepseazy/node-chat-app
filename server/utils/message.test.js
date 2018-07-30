var expect = require("expect");

var { generateMessage, generateLocationMessage } = require("./message");



describe("generateMessage", () => {
  it("should generate correct message object", () => {
    const from = "testFrom";
    const text = "testText";
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

describe("generateLocationMessage", () => {
  const testFrom = "testFrom";
  const testLat = 123;
  const testLong = 235;

  it("should genereate correct location object", () => {
    const result = generateLocationMessage(testFrom, testLat, testLong);
    expect(result.from).toBe(testFrom);
    expect(result.url).toBe(`https://www.google.com/maps?q=123,235`)
  });
});
