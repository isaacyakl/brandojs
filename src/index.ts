import bRando from "./bRando";

export function create(CSSSelector: string, CSSBackgrounds: string[], timeout?: number, random?: boolean): bRando {
	return new bRando(CSSSelector, CSSBackgrounds, timeout, random);
}

const bob = new bRando();
bob.play();
