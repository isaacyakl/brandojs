import bRando from "./bRando";

const testInstance = new bRando();
const selector = "body";

describe("constructor correctly sets", () => {
	test("_CSSSelector", () => {
		expect(testInstance.CSSSelector).toBe(selector);
	});
	test("_nodes", () => {
		expect(testInstance.nodes.length).toBe(1);
		expect(testInstance.nodes[0]).toBeInstanceOf(Node);
		expect(testInstance.nodes[0].nodeName).toBe(selector.toUpperCase());
	});
	test("_backgrounds", () => {
		expect(testInstance.backgrounds).toBeInstanceOf(Array<String>);
	});
	test("_timeout", () => {
		expect(testInstance.timeout).toBe(10000);
	});
	test("_random", () => {
		expect(testInstance.random).toBe(true);
	});
	test("_CSSTransition", () => {
		expect(testInstance.CSSTransition).toBe("5000ms");
	});
	test("_originalCSSBackgrounds", () => {
		// @ts-ignore
		expect(testInstance._originalCSSBackgrounds).toBeInstanceOf(Array<String>);
	});
	test("_originalCSSPositions", () => {
		// @ts-ignore
		expect(testInstance._originalCSSPositions).toBeInstanceOf(Array<String>);
	});
	test("_changer", () => {
		// @ts-ignore
		expect(testInstance._changer).not.toBe(-1);
		// @ts-ignore
		expect(typeof testInstance._changer).toBe("number");
	});
	test("_isAfterOpaque", () => {
		// @ts-ignore
		expect(typeof testInstance._isAfterOpaque).toBe("boolean");
	});
	test("_CSSBackgroundVarName", () => {
		// @ts-ignore
		expect(testInstance._CSSBackgroundVarName).toBe(`--bRandoBg${selector}`);
	});
	test("_CSSOpacityVarName", () => {
		// @ts-ignore
		expect(testInstance._CSSOpacityVarName).toBe(`--bRandoOpacity${selector}`);
	});
	test("_CSSTransitionVarName", () => {
		// @ts-ignore
		expect(testInstance._CSSTransitionVarName).toBe(`--bRandoTransition${selector}`);
	});
	test("_CSSContentVarName", () => {
		// @ts-ignore
		expect(testInstance._CSSContentVarName).toBe(`--bRandoContent${selector}`);
	});
	test("_lastBackground", () => {
		expect(typeof testInstance.lastBackground).toBe("number");
	});
});

describe("play()", () => {
	test("is a function", () => {
		expect(typeof testInstance.play).toBe("function");
	});
	test("returns nothing", () => {
		expect(testInstance.play()).toBe(undefined);
	});
});

describe("pause()", () => {
	test("is a function", () => {
		expect(typeof testInstance.pause).toBe("function");
	});
	test("returns nothing", () => {
		expect(testInstance.pause()).toBe(undefined);
	});
});

describe("next()", () => {
	test("is a function", () => {
		expect(typeof testInstance.next).toBe("function");
	});
	test("returns nothing", () => {
		expect(testInstance.next()).toBe(undefined);
	});
});

describe("remove()", () => {
	test("is a function", () => {
		expect(typeof testInstance.remove).toBe("function");
	});
	test("returns nothing", () => {
		expect(testInstance.remove()).toBe(undefined);
	});
});

test.todo("check public setters exist");
test.todo("check public getters exist");
test.todo("play() does");
test.todo("pause() does");
test.todo("next() does");
test.todo("remove() does");
test.todo("test why demo._isAfterOpaque = 5000 causes first transition to skip animation");
