import { bRando, Options } from "../bRando";

/**
 * A function for creating a background changer ({@link bRando} instance) in the web browser environment. It accepts an {@link Options} object. A usage example can be found in [the readme](https://github.com/isaacyakl/brandojs#-usage).
 *
 * ### Demo
 * Create a demo instance for testing or verifying correct installation by omitting the {@link Options} parameter.
 * ```javascript
 * const demo = bRando.create(); // Selects the <body> element by default
 * ```
 * @remarks
 * [[include:first-background.md]]
 *
 */
export function create(options?: Options): bRando {
	return new bRando(options);
}
