import { bRando } from "./bRando";

/**
 * Creates a bRando instance with the specified options.
 *
 * @remarks To create a demo instance for testing, omit the options parameter.
 * ```
 * let demo = bRando.create(); // Attaches to <body> element by default
 * ```
 * @example
 * // Set options
 * const options = {
 * 	CSSSelector: "main",
 * 	backgrounds: [
 * 		"pink",
 * 		"brown",
 * 		"teal"
 * 	],
 * 	timeout: 5000,
 * 	random: false,
 * 	transition: "500ms ease-in-out",
 * };
 *
 * let backgroundChanger = bRando.create(options); // Create new background changer
 *
 * @param options An object of options
 * @returns A new { @link bRando } instance
 */
export function create(options?: { CSSSelector?: string; backgrounds?: string[]; timeout?: number; random?: boolean; transition?: string }): bRando {
	return new bRando(options);
}
