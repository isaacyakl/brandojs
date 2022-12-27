// @ts-nocheck
import bRando from "./bRando";

const testInstance = new bRando();

describe("constructor sets all properties", () => {
	const selector = "body";
	test("set CSSSelector", () => {
		expect(testInstance.CSSSelector).toBe(selector);
	});
	test("set nodes", () => {
		expect(testInstance.nodes.length).toBe(1);
		expect(testInstance.nodes[0]).toBeInstanceOf(Node);
		expect(testInstance.nodes[0].nodeName).toBe(selector.toUpperCase());
	});
	test("set backgrounds", () => {
		expect(testInstance.backgrounds).toBeInstanceOf(Array<String>);
	});
	test("set timeout", () => {
		expect(testInstance.timeout).toBe(10000);
	});
	test("set random", () => {
		expect(testInstance.random).toBe(true);
	});
	test("set CSSTransition", () => {
		expect(testInstance.CSSTransition).toBe("5000ms");
	});
	test("set originalCSSBackgrounds", () => {
		expect(testInstance.originalCSSBackgrounds).toBeInstanceOf(Array<String>);
	});
	test("set originalCSSPositions", () => {
		expect(testInstance.originalCSSPositions).toBeInstanceOf(Array<String>);
	});
	test("set changer", () => {
		expect(testInstance.changer).not.toBe(-1);
		expect(typeof testInstance.changer).toBe("number");
	});
	test("set isAfterOpaque", () => {
		expect(typeof testInstance.isAfterOpaque).toBe("boolean");
	});
	test("set CSSBackgroundVarName", () => {
		expect(testInstance.CSSBackgroundVarName).toBe(`--bRandoBg${selector}`);
	});
	test("set CSSOpacityVarName", () => {
		expect(testInstance.CSSOpacityVarName).toBe(`--bRandoOpacity${selector}`);
	});
	test("set CSSTransitionVarName", () => {
		expect(testInstance.CSSTransitionVarName).toBe(`--bRandoTransition${selector}`);
	});
	test("set CSSContentVarName", () => {
		expect(testInstance.CSSContentVarName).toBe(`--bRandoContent${selector}`);
	});
	test("set lastBackground", () => {
		expect(typeof testInstance.lastBackground).toBe("number");
	});
});

describe("play()", () => {
	test("is function", () => {
		expect(typeof testInstance.play).toBe("function");
	});
	test("returns nothing", () => {
		expect(testInstance.play()).toBe(undefined);
	});
});

describe("pause() function", () => {
	test("is function", () => {
		expect(typeof testInstance.pause).toBe("function");
	});
	test("returns nothing", () => {
		expect(testInstance.pause()).toBe(undefined);
	});
});

describe("next() function", () => {
	test("is function", () => {
		expect(typeof testInstance.next).toBe("function");
	});
	test("returns nothing", () => {
		expect(testInstance.next()).toBe(undefined);
	});
});

describe("remove() function", () => {
	test("is function", () => {
		expect(typeof testInstance.remove).toBe("function");
	});
	test("returns nothing", () => {
		expect(testInstance.remove()).toBe(undefined);
	});
});

describe("check private properties cannot be set", () => {
	testInstance.CSSSelector = "ree";
	console.log(testInstance);
	test("", () => {
		expect(testInstance.CSSSelector).not.toBe("ree");
	});
});
