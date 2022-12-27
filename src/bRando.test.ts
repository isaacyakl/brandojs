import bRando from "./bRando";

const testInstance = new bRando();

describe("constructor sets all properties", () => {
	test("set _CSSSelector", () => {
		expect(testInstance.CSSSelector).not.toBe("");
		expect(testInstance.CSSSelector).not.toBeUndefined();
		expect(typeof testInstance.CSSSelector).toBe("string");
		// @ts-ignore
		console.log(testInstance._CSSSelector);
	});
	test("set nodes", () => {
		expect(testInstance.nodes).not.toBeUndefined();
		expect(testInstance.nodes).toBeInstanceOf(NodeList);
	});
	test("set backgrounds", () => {
		expect(testInstance.backgrounds).not.toBeUndefined();
		expect(testInstance.backgrounds).toBeInstanceOf(Array<String>);
	});
});

test("defines play()", () => {
	expect(typeof testInstance.play).toBe("function");
});
