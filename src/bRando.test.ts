import bRando from "./bRando";

let testInstance: bRando;
const selector = "body";

beforeEach(() => {
	testInstance = new bRando();
});

afterEach(() => {
	testInstance.remove();
});

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
	test("works as expected", () => {
		// jest.useFakeTimers();
		// jest.spyOn(global, "clearInterval");
		// // @ts-ignore
		// let lastChanger = testInstance._changer;
		// testInstance.remove();
		// expect(clearInterval).toHaveBeenLastCalledWith(lastChanger);
		// // @ts-ignore
		// expect(testInstance._changer).toBe(-1);
		// jest.useRealTimers();
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
	test("works as expected", () => {
		testInstance.remove();
		// @ts-ignore
		expect(testInstance._changer).toBe(-1); // clearInterval was called
		expect(
			Array.from(testInstance.nodes).every(
				(e, index) =>
					// @ts-ignore
					(e as HTMLElement).style.background == testInstance._originalCSSBackgrounds[index] &&
					// @ts-ignore
					(e as HTMLElement).style.position == testInstance._originalCSSPositions[index] &&
					// @ts-ignore
					(e as HTMLElement).style.zIndex == testInstance._originalCSSZIndexes[index]
			)
		).toBe(true); // original background and position properties were restored
		// @ts-ignore
		expect(testInstance._styleElement.isConnected).toBe(false); // the style element was removed from DOM
	});
});

describe("check public setters exist", () => {
	test("backgrounds", () => {
		// expect(Object.getOwnPropertyDescriptor(testInstance, "_backgrounds")?.set).not.toBeUndefined();
	});
});

test.todo("check public getters exist");
test.todo("play() does");
test.todo("pause() does");
test.todo("next() does");
test.todo("test why demo._isAfterOpaque = 5000 causes first transition to skip animation");
