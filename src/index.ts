import { bRando } from "./bRando";

/**
 * Create a bRando instance with the specified options.
 *
 * ### Demo
 * Create a demo instance for testing or verifying correct installation by omitting the options parameter.
 * ```
 * const demo = bRando.create(); // Attaches to <body> element by default
 * ```
 * @example
 * // Set options
 * const options = {
 * 	CSSSelector: "main", // a valid CSS selector (multiple elements are allowed)
 *	backgrounds: [
 *		// valid CSS background properties
 *		"aqua", // solid color
 *		"linear-gradient(80deg, #0864c8 25%, #588fca 75%)", // gradient
 *		"url('somewhere/some-image.jpg') center/cover no-repeat", // image
 *		"center / contain no-repeat url('../../media/examples/firefox-logo.svg'), #eee 35% url('../../media/examples/lizard.png')", // everything
 *	],
 * 	timeout: 5000, // time between changes in milliseconds
 * 	random: true, // whether to go through the backgrounds randomly or not (no two backgrounds are allowed to be back-to-back)
 * 	transition: "500ms ease-in", // a CSS transition property for changing between backgrounds
 * };
 *
 * const bgChanger = bRando.create(options); // create background changer with the options set above
 *
 * // call next() if you want the page to load with one of the backgrounds immediately
 * bgChanger.next(); // remove this line if you want a smooth first transition
 *
 * @param options An object of options
 * @returns A new { @link bRando } instance
 */
export function create(options?: { CSSSelector?: string; backgrounds?: string[]; timeout?: number; random?: boolean; transition?: string }): bRando {
	return new bRando(options);
}
