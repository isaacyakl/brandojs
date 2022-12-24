import bRando from "./bRando";

export function create(CSSSelector: string, CSSBackgrounds: string[], timeout?: number, random?: boolean, CSSTransition?: string): bRando {
	return new bRando(CSSSelector, CSSBackgrounds, timeout, random, CSSTransition);
}

// const demo = new bRando();
// demo.play();
