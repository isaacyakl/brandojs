import bRando from "./bRando";

export function create(CSSSelector: string, CSSBackgrounds: string[], timeout?: number, random?: boolean, CSSTransition?: string): bRando {
	return new bRando(CSSSelector, CSSBackgrounds, timeout, random, CSSTransition);
}

const bob = new bRando("body", ["white", "blue", "red"], 2000, true, "1000ms");
bob.play();
