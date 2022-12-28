import bRando from "./bRando";

let testInstance: bRando;
const selector = "body";

beforeEach(() => {
	testInstance = new bRando();
});

afterEach(() => {
	testInstance.remove();
	jest.restoreAllMocks();
});

describe("default values are set for", () => {
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
	test("_lastBackground", () => {
		expect(typeof testInstance.lastBackground).toBe("number");
	});
});

describe("public setter works as expected for", () => {
	test("backgrounds", () => {
		const spy = jest.spyOn(testInstance, "backgrounds", "set");

		testInstance.backgrounds = [];
		expect(spy).toHaveBeenCalled();
		expect(testInstance.backgrounds.length).toBe(0);

		testInstance.backgrounds = undefined;
		expect(spy).toHaveBeenCalledTimes(2);
		expect(testInstance.backgrounds.length).toBeGreaterThan(0);

		const malformedBgs = ["", 123];
		// @ts-ignore
		testInstance.backgrounds = malformedBgs;
		expect(spy).toHaveBeenCalledTimes(3);
		expect(testInstance.backgrounds).not.toEqual(malformedBgs);
		expect(testInstance.backgrounds.length).toBeGreaterThan(0);
	});
	test("timeout", () => {
		const spy = jest.spyOn(testInstance, "timeout", "set");
		const spyPause = jest.spyOn(testInstance, "pause");
		const spyPlay = jest.spyOn(testInstance, "play");

		testInstance.timeout = 2345;
		expect(spy).toHaveBeenCalled();
		expect(testInstance.timeout).toBe(2345);
		// check that changer was updated with new timeout
		expect(spyPause).toHaveBeenCalled();
		expect(spyPlay).toHaveBeenCalled();

		testInstance.timeout = undefined;
		expect(spy).toHaveBeenCalledTimes(2);
		expect(testInstance.timeout).not.toBe(0);
	});
	test("random", () => {
		const spy = jest.spyOn(testInstance, "random", "set");

		testInstance.random = false;
		expect(spy).toHaveBeenCalled();
		expect(testInstance.random).toBe(false);

		testInstance.random = undefined;
		expect(spy).toHaveBeenCalledTimes(2);
		expect(testInstance.random).toBe(true);
	});
	test("CSSTransition", () => {
		const spy = jest.spyOn(testInstance, "CSSTransition", "set");

		testInstance.CSSTransition = "300ms";
		expect(spy).toHaveBeenCalled();
		expect(testInstance.CSSTransition).toBe("300ms");

		testInstance.CSSTransition = undefined;
		expect(spy).toHaveBeenCalledTimes(2);
		expect(testInstance.CSSTransition.length).toBeGreaterThan(0);
	});
});

describe("public getter works as expected for", () => {
	test("CSSSelector", () => {
		const spy = jest.spyOn(testInstance, "CSSSelector", "get");
		expect(testInstance.CSSSelector.length).toBeGreaterThan(0);
		expect(spy).toHaveReturned();
		expect(spy).toHaveBeenCalled();
	});
	test("nodes", () => {
		const spy = jest.spyOn(testInstance, "nodes", "get");
		expect(testInstance.nodes.length).toBeGreaterThan(0);
		expect(spy).toHaveReturned();
		expect(spy).toHaveBeenCalled();
	});
	test("backgrounds", () => {
		const spy = jest.spyOn(testInstance, "backgrounds", "get");
		expect(testInstance.backgrounds.length).toBeGreaterThan(0);
		expect(spy).toHaveReturned();
		expect(spy).toHaveBeenCalled();
	});
	test("timeout", () => {
		const spy = jest.spyOn(testInstance, "timeout", "get");
		expect(testInstance.timeout).toBeGreaterThan(0);
		expect(spy).toHaveReturned();
		expect(spy).toHaveBeenCalled();
	});
	test("random", () => {
		const spy = jest.spyOn(testInstance, "random", "get");
		expect(testInstance.random).toBe(true);
		expect(spy).toHaveReturned();
		expect(spy).toHaveBeenCalled();
	});
	test("CSSTransition", () => {
		const spy = jest.spyOn(testInstance, "CSSTransition", "get");
		expect(testInstance.CSSTransition.length).toBeGreaterThan(0);
		expect(spy).toHaveReturned();
		expect(spy).toHaveBeenCalled();
	});
	test("lastBackground", () => {
		const spy = jest.spyOn(testInstance, "lastBackground", "get");
		expect(testInstance.lastBackground).not.toBe(-1);
		expect(spy).toHaveReturned();
		expect(spy).toHaveBeenCalled();
	});
});

describe("constructor", () => {
	test("sets _CSSSelector", () => {
		expect(testInstance.CSSSelector).toBe(selector);
	});
	test("sets _nodes", () => {
		expect(testInstance.nodes.length).toBe(1);
		expect(testInstance.nodes[0]).toBeInstanceOf(Node);
		expect(testInstance.nodes[0].nodeName).toBe(selector.toUpperCase());
	});
	test("sets _backgrounds", () => {
		expect(testInstance.backgrounds).toBeInstanceOf(Array<String>);
	});
	test("sets _timeout", () => {
		expect(testInstance.timeout).not.toBe(0);
	});
	test("sets _random", () => {
		expect(testInstance.random).toBe(true);
	});
	test("sets _CSSTransition", () => {
		expect(testInstance.CSSTransition).not.toBe("");
	});
	test("sets _originalCSSBackgrounds", () => {
		// @ts-ignore
		expect(testInstance._originalCSSBackgrounds).toBeInstanceOf(Array<String>);
	});
	test("sets _originalCSSPositions", () => {
		// @ts-ignore
		expect(testInstance._originalCSSPositions).toBeInstanceOf(Array<String>);
	});
	test("sets _originalCSSZIndexes", () => {
		// @ts-ignore
		expect(testInstance._originalCSSZIndexes).toBeInstanceOf(Array<String>);
	});
	test("sets _CSSBackgroundVarName", () => {
		// @ts-ignore
		expect(testInstance._CSSBackgroundVarName).toBe(`--bRandoBg${selector}`);
	});
	test("sets _CSSOpacityVarName", () => {
		// @ts-ignore
		expect(testInstance._CSSOpacityVarName).toBe(`--bRandoOpacity${selector}`);
	});
	test("sets _CSSTransitionVarName", () => {
		// @ts-ignore
		expect(testInstance._CSSTransitionVarName).toBe(`--bRandoTransition${selector}`);
	});
	test("sets _CSSContentVarName", () => {
		// @ts-ignore
		expect(testInstance._CSSContentVarName).toBe(`--bRandoContent${selector}`);
	});
	test("sets _styleElement", () => {
		// @ts-ignore
		expect(testInstance._styleElement).toBeInstanceOf(HTMLStyleElement);
		// @ts-ignore
		expect(testInstance._styleElement).not.toBe("");
		// @ts-ignore
		expect(testInstance._styleElement.isConnected).toBe(true);
	});
	test("configures ::after of each node", () => {
		testInstance.remove();
		let result = true;

		// add paragraph elements to test multi-element configuration
		for (let i = 0; i < 5; i++) {
			document.body.append(document.createElement("p"));
		}
		testInstance = new bRando({ CSSSelector: "p" });

		testInstance.nodes.forEach((n) => {
			const compdStyleCSSTxt = getComputedStyle(n as HTMLElement, "::after").cssText;
			// @ts-ignore
			result = result && (n as HTMLElement).style.zIndex == "0" && compdStyleCSSTxt.includes(`${testInstance._CSSOpacityVarName}: 1`) && compdStyleCSSTxt.includes(`${testInstance._CSSTransitionVarName}: opacity ${testInstance.CSSTransition}`) && compdStyleCSSTxt.includes(`${testInstance._CSSContentVarName}: ''`);
		});
		expect(result).toBe(true);
	});
	test("calls play()", () => {
		// @ts-ignore
		expect(testInstance._changer).not.toBe(-1);
	});
});

describe("play()", () => {
	test("is a function", () => {
		expect(typeof testInstance.play).toBe("function");
	});
	test("returns nothing", () => {
		expect(testInstance.play()).toBe(undefined);
	});
	test("works as expected", () => {
		const spyNext = jest.spyOn(testInstance, "next");
		const spySetInterval = jest.spyOn(global, "setInterval");
		testInstance.play();

		expect(spyNext).toHaveBeenCalledTimes(1);

		expect(spySetInterval).toHaveBeenLastCalledWith(expect.any(Function), testInstance.timeout);
		// @ts-ignore
		expect(spySetInterval).toHaveLastReturnedWith(testInstance._changer);
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
		const spyClearInterval = jest.spyOn(global, "clearInterval");
		// @ts-ignore
		let lastChanger = testInstance._changer;
		testInstance.remove();
		expect(spyClearInterval).toHaveBeenLastCalledWith(lastChanger);
		// @ts-ignore
		expect(testInstance._changer).toBe(-1);
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
		expect(testInstance._changer).toBe(-1); // interval was cleared
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
		).toBe(true); // original CSS properties were restored
		// @ts-ignore
		expect(testInstance._styleElement.isConnected).toBe(false); // the style element was removed from DOM
	});
});

test.todo("next() works as expected");
test.todo("test why demo._isAfterOpaque = 5000 causes first transition to skip animation");
