import bRando from "./bRando";

export function create(options: { CSSSelector?: string; backgrounds?: string[]; timeout?: number; random?: boolean; transition?: string } = {}): bRando {
	return new bRando(options);
}
