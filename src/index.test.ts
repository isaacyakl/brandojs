import bRando from "./bRando";
import { create } from "./index";

describe("create function", () => {
	test("empty call returns demo instance", () => {
		expect(create()).toBeInstanceOf(bRando);
	});
	test("empty option object returns demo instance", () => {
		expect(create({})).toBeInstanceOf(bRando);
	});
	test("partial options object returns demo instance", () => {
		expect(create({ randomOrder: true })).toBeInstanceOf(bRando);
	});
	test("invalid options or values returns demo instance", () => {
		const options = {
			CSSSelector: 3,
			CSSBackgrounds: ["green", true, 3],
			timeoutMs: 0,
			randomOrder: "true",
			CSSTransition: 2,
			fake: "option",
		};
		// @ts-ignore
		expect(create(options)).toBeInstanceOf(bRando);
	});
});
