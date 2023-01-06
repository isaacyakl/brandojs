import { bRando, Options } from "../bRando";

/**
 * A function to create a bRando instance (background changer) with the specified options.
 *
 * @example
 * Create a demo instance for testing or verifying correct installation by omitting the options parameter.
 * ```javascript
 * const demo = bRando.create(); // Selects the <body> element by default
 * ```
 * A usage example can be found in [the readme](https://github.com/isaacyakl/brandojs#-usage).
 *
 * @returns A new bRando instance
 */
export function create(options?: Options): bRando {
	return new bRando(options);
}
