import { bRando } from "./bRando";
import packageJSON from "../package.json";

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
	test("_currentBackgroundIndex", () => {
		expect(typeof testInstance.currentBackgroundIndex).toBe("number");
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

		// jsdom does not allow access to document.scripts so we must just
		// verify that upon not finding a script element (scriptEl) it
		// used the fallback of "./img/" for scriptPath.
		expect(testInstance.backgrounds[0].includes("./img/")).toBe(true);
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
	test("transition", () => {
		const spy = jest.spyOn(testInstance, "transition", "set");

		testInstance.transition = "300ms";
		expect(spy).toHaveBeenCalled();
		expect(testInstance.transition).toBe("300ms");

		testInstance.transition = undefined;
		expect(spy).toHaveBeenCalledTimes(2);
		expect(testInstance.transition.length).toBeGreaterThan(0);
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
	test("transition", () => {
		const spy = jest.spyOn(testInstance, "transition", "get");
		expect(testInstance.transition.length).toBeGreaterThan(0);
		expect(spy).toHaveReturned();
		expect(spy).toHaveBeenCalled();
	});
	test("currentBackgroundIndex", () => {
		const spy = jest.spyOn(testInstance, "currentBackgroundIndex", "get");
		expect(testInstance.currentBackgroundIndex).toBeGreaterThanOrEqual(-1);
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
	test("sets _transition", () => {
		expect(testInstance.transition).not.toBe("");
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
			result = result && (n as HTMLElement).style.zIndex == "0" && compdStyleCSSTxt.includes(`${testInstance._CSSOpacityVarName}: 0`) && compdStyleCSSTxt.includes(`${testInstance._CSSTransitionVarName}: opacity ${testInstance.transition}`) && compdStyleCSSTxt.includes(`${testInstance._CSSContentVarName}: ''`);
		});
		expect(result).toBe(true);
	});
	test("calls play()", () => {
		// @ts-ignore
		expect(testInstance._changer).not.toBe(-1);
	});
	test("single background supported", () => {
		testInstance = new bRando({ backgrounds: ["linear-gradient(80deg, #0864c8 25%, #588fca 75%)"] });
		expect(testInstance.currentBackgroundIndex).toBe(-1);
		testInstance.next();
		expect(testInstance.currentBackgroundIndex).toBe(0);
		testInstance.next();
		expect(testInstance.currentBackgroundIndex).toBe(0);
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
		jest.useFakeTimers();
		jest.spyOn(global, "setInterval");
		testInstance = new bRando();
		const spyPause = jest.spyOn(testInstance, "pause");
		const spyNext = jest.spyOn(testInstance, "next");
		testInstance.play();

		expect(spyPause).toHaveBeenCalledTimes(1);

		expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), testInstance.timeout);
		expect(setInterval).toHaveBeenCalledTimes(2);
		// @ts-ignore
		expect(setInterval).toHaveLastReturnedWith(testInstance._changer);
		jest.advanceTimersByTime(testInstance.timeout);
		expect(spyNext).toHaveBeenCalledTimes(1);
		jest.useRealTimers();
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
		jest.spyOn(global, "clearInterval");
		// @ts-ignore
		let lastChanger = testInstance._changer;
		testInstance.remove();
		expect(clearInterval).toHaveBeenLastCalledWith(lastChanger);
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
	describe("works as expected", () => {
		test("::after is displayed", () => {
			const spyNext = jest.spyOn(testInstance, "next");
			const spyPlay = jest.spyOn(testInstance, "play");
			testInstance.pause();
			expect(spyNext).not.toHaveBeenCalled();

			expect(testInstance.currentBackgroundIndex).toBe(-1);
			// @ts-ignore
			expect(testInstance._isAfterOpaque).toBe(false);
			let lastBgIndex = testInstance.currentBackgroundIndex;

			testInstance.next();
			expect(spyPlay).not.toHaveBeenCalled();
			expect(spyNext).toHaveBeenCalledTimes(1);
			expect(testInstance.currentBackgroundIndex).not.toBe(lastBgIndex);

			expect(testInstance.currentBackgroundIndex).not.toBe(-1);
			// @ts-ignore
			expect(testInstance._isAfterOpaque).toBe(true);

			let result = true;
			testInstance.nodes.forEach((n) => {
				const compdStyleCSSTxt = getComputedStyle(n as HTMLElement, "::after").cssText;
				// @ts-ignore
				result = result && compdStyleCSSTxt.includes(`${testInstance._CSSOpacityVarName}: 1`) && compdStyleCSSTxt.includes(`${testInstance._CSSTransitionVarName}: opacity ${testInstance.transition}`) && compdStyleCSSTxt.includes(`${testInstance._CSSBackgroundVarName}: ${testInstance.backgrounds[testInstance.currentBackgroundIndex]}`);
			});
			expect(result).toBe(true);
		});
		test("::after is hidden", () => {
			const spyNext = jest.spyOn(testInstance, "next");
			const spyPlay = jest.spyOn(testInstance, "play");
			testInstance.pause();
			testInstance.next();

			let lastBgIndex = testInstance.currentBackgroundIndex;
			testInstance.next();
			expect(testInstance.currentBackgroundIndex).not.toBe(lastBgIndex);

			let result = true;
			testInstance.nodes.forEach((n) => {
				const compdStyleCSSTxt = getComputedStyle(n as HTMLElement, "::after").cssText;
				// @ts-ignore
				result = result && compdStyleCSSTxt.includes(`${testInstance._CSSOpacityVarName}: 0`) && compdStyleCSSTxt.includes(`${testInstance._CSSTransitionVarName}: opacity ${testInstance.transition}`);
			});
			expect(result).toBe(true);
			// =====================================
			//  NOTE:
			// =====================================
			//  We are unable to verify that the nodes'
			//  background properties has been updated
			//  because the DOM does not return a node's
			//  background property if a pseudo element
			//  (::after in this case) has a background
			//  property set.

			// =====================================
			//  CASE IN POINT:
			// =====================================
			// expect((testInstance.nodes[0] as HTMLElement).style.background !== "" && (testInstance.nodes[0] as HTMLElement).style.cssText.includes("background:")).not.toBe(false);

			//  Those only way to verify is manually in
			//  bRando.ts that it includes:

			//  (e as HTMLElement).style.background = this.backgrounds[this.currentBackgroundIndex];

			//  OR automatically by comparing the index
			//  of the background that was last assigned
			//  as I have done:

			//  lastBgIndex = testInstance.currentBackgroundIndex;
			//  testInstance.next();
			//  expect(testInstance.currentBackgroundIndex).not.toBe(lastBgIndex);

			// =====================================
			//  OBSERVATION:
			// =====================================
			//  Calling .style.cssText on the nodes
			//  reveals they have no background property
			//  and instead the CSS variable
			//  (--bRandoBg<selector>) used to manipulate
			//  the background property of each nodes'
			//  pseudo element (::after) holds the value
			//  of the last background displayed for
			//  the respective ::after.
		});
		test("::after toggles consistently", () => {
			for (let i = 0; i < 30; i++) {
				// @ts-ignore
				if (testInstance._isAfterOpaque) {
					// @ts-ignore
					expect((testInstance.nodes[0] as HTMLElement).style.cssText.includes(`${testInstance._CSSOpacityVarName}: 1`)).toBe(true);
				} else {
					// @ts-ignore
					expect((testInstance.nodes[0] as HTMLElement).style.cssText.includes(`${testInstance._CSSOpacityVarName}: 0`)).toBe(true);
				}
				testInstance.next();
			}
		});
		test("changer exists", () => {
			const spyPlay = jest.spyOn(testInstance, "play");
			testInstance.next();
			expect(spyPlay).toHaveBeenCalledTimes(1);
		});
		test("random order backgrounds (barring back-to-backs) is supported", () => {
			let lastIndex = -1;
			for (let i = 0; i < 30; i++) {
				lastIndex = testInstance.currentBackgroundIndex;
				testInstance.next();
				expect(lastIndex).not.toBe(testInstance.currentBackgroundIndex);
			}
		});
		test("sequential order is supported", () => {
			testInstance.pause();
			testInstance.random = false;
			expect(testInstance.currentBackgroundIndex).toBe(-1);
			for (let i = 0; i < testInstance.backgrounds.length; i++) {
				testInstance.next();
				expect(testInstance.currentBackgroundIndex).toBe(i);
			}
			testInstance.next();
			expect(testInstance.currentBackgroundIndex).toBe(0);
		});
		test("one background case is supported", () => {
			testInstance = new bRando({ backgrounds: ["linear-gradient(80deg, #0864c8 25%, #588fca 75%)"] });
			testInstance.pause();
			expect(testInstance.currentBackgroundIndex).toBe(-1);
			testInstance.next();
			expect(testInstance.currentBackgroundIndex).toBe(0);
			testInstance.next();
			expect(testInstance.currentBackgroundIndex).toBe(0);
		});
		test("two background case is supported", () => {
			testInstance = new bRando({ backgrounds: ["linear-gradient(80deg, #0864c8 25%, #588fca 75%)", "white"] });
			let lastIndex = -1;
			for (let i = 0; i < 30; i++) {
				lastIndex = testInstance.currentBackgroundIndex;
				testInstance.next();
				expect(lastIndex).not.toBe(testInstance.currentBackgroundIndex);
			}
		});
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

describe("isRunning()", () => {
	test("is a function", () => {
		expect(typeof testInstance.isRunning).toBe("function");
	});
	test("returns boolean", () => {
		expect(typeof testInstance.isRunning()).toBe("boolean");
	});
	test("works as expected", () => {
		testInstance.pause();
		expect(testInstance.isRunning()).toBe(false);
		testInstance.play();
		expect(testInstance.isRunning()).toBe(true);
	});
});
