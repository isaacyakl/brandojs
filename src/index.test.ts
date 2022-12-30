import { bRando } from "./bRando";
import { create } from "./index";

describe("create() returns demo instance for", () => {
	test("empty call", () => {
		expect(create()).toBeInstanceOf(bRando);
	});
	test("empty options object", () => {
		expect(create({})).toBeInstanceOf(bRando);
	});
	test("partial options object", () => {
		expect(create({ random: true })).toBeInstanceOf(bRando);
	});
	test("invalid options object and arguments", () => {
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
