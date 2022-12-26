import bRando from "./bRando";

export function create(options: { CSSSelector?: string; CSSBackgrounds?: string[]; timeoutMs?: number; randomOrder?: boolean; CSSTransition?: string } = {}): bRando {
	return new bRando(options);
}
