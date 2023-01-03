import packageJSON from "../package.json";

/**
 * Class for creating a CSS background property changer.
 */
export class bRando {
	protected readonly _CSSSelector: string = "";
	public get CSSSelector(): string {
		return this._CSSSelector;
	}

	protected readonly _nodes: NodeList;
	public get nodes(): NodeList {
		return this._nodes;
	}

	protected _backgrounds: string[] = [];
	public get backgrounds(): string[] {
		return this._backgrounds;
	}
	public set backgrounds(value: string[] | undefined) {
		if (
			Array.isArray(value) &&
			value.every((b) => {
				return typeof b === "string";
			})
		) {
			this._backgrounds = value;
		} else {
			let scriptEl = Array.from(document.scripts).find((e) => e.src.includes(packageJSON.details.stylizedName));

			let scriptsPath = scriptEl === undefined ? "./img/" : `${scriptEl.src.substring(0, scriptEl.src.lastIndexOf(`${packageJSON.details.stylizedName}.js`))}img/`;

			// demo backgrounds
			// prettier-ignore
			this._backgrounds = [
				`url("${scriptsPath}alex-knight-vaA6EQiUSo4-unsplash_result.jpg") center/cover no-repeat`, 
				`url("${scriptsPath}joel-fulgencio-01fAtHwYqo0-unsplash_result.jpg") center/cover no-repeat`, 
				`url("${scriptsPath}pawel-nolbert-4u2U8EO9OzY-unsplash_result.jpg") center/cover no-repeat`,
				`url("${scriptsPath}stephan-valentin-oqYLdbuJDQU-unsplash_result.jpg") center/cover no-repeat`,
				`url("${scriptsPath}waranont-joe-T7qyLNPwgKA-unsplash_result.jpg") center/cover no-repeat`,
				`linear-gradient(80deg, #0864c8 25%, #588fca 75%)`,
			];
		}
	}

	protected _timeout: number = 0;
	public get timeout(): number {
		return this._timeout;
	}
	public set timeout(value: number | undefined) {
		if (value && value > 0) {
			this._timeout = value;
		} else {
			this._timeout = 7500;
		}
		if (this._changer !== -1) {
			this.pause();
			this.play();
		}
	}

	protected _random: boolean = true;
	public get random(): boolean {
		return this._random;
	}
	public set random(value: boolean | undefined) {
		this._random = typeof value !== "boolean" ? true : value;
	}

	protected _transition: string = "";
	public get transition(): string {
		return this._transition;
	}
	public set transition(value: string | undefined) {
		this._transition = typeof value !== "string" ? "5000ms" : value;
	}

	protected readonly _originalCSSBackgrounds: string[] = [];
	protected readonly _originalCSSPositions: string[] = [];
	protected readonly _originalCSSZIndexes: string[] = [];
	protected _changer: number = -1;
	protected readonly _styleElement: HTMLElement;
	protected _isAfterOpaque: boolean = false;
	protected readonly _CSSBackgroundVarName: string;
	protected readonly _CSSOpacityVarName: string;
	protected readonly _CSSTransitionVarName: string;
	protected readonly _CSSContentVarName: string;

	protected _currentBackgroundIndex: number = -1;
	/**
	 *
	 * Get the index of the background currently being displayed.
	 */
	public get currentBackgroundIndex(): number {
		return this._currentBackgroundIndex;
	}

	/**
	 * Creates a background changer instance with the specified options. To create a demo instance, omit the options parameter.
	 * @constructor
	 * @constructs bRando
	 * @param options An object of optional options
	 */
	constructor(options: { CSSSelector?: string; backgrounds?: string[]; timeout?: number; random?: boolean; transition?: string } = {}) {
		this._CSSSelector = typeof options.CSSSelector !== "string" ? "body" : options.CSSSelector;
		this._nodes = document.querySelectorAll(this.CSSSelector);
		this.backgrounds = options.backgrounds;
		this.timeout = options.timeout;
		this.random = options.random;
		this.transition = options.transition;
		this.nodes.forEach((e) => {
			this._originalCSSBackgrounds.push((e as HTMLElement).style.background); // backup the original CSS background property
			this._originalCSSPositions.push((e as HTMLElement).style.position); // backup the original CSS position property
			this._originalCSSZIndexes.push((e as HTMLElement).style.zIndex); // backup the original CSS z-index property
			(e as HTMLElement).style.position = "relative"; // set each element to be relative
		});
		this._styleElement = document.createElement("style");
		this._CSSBackgroundVarName = `--bRandoBg${this.CSSSelector.replace(/[^a-z0-9]/gi, "")}`;
		this._CSSOpacityVarName = `--bRandoOpacity${this.CSSSelector.replace(/[^a-z0-9]/gi, "")}`;
		this._CSSTransitionVarName = `--bRandoTransition${this.CSSSelector.replace(/[^a-z0-9]/gi, "")}`;
		this._CSSContentVarName = `--bRandoContent${this.CSSSelector.replace(/[^a-z0-9]/gi, "")}`;
		this._styleElement.innerText = `${this.CSSSelector}::after{background:var(${this._CSSBackgroundVarName});content:var(${this._CSSContentVarName});position:absolute;top:0;bottom:0;left:0;right:0;z-index:-1;opacity:var(${this._CSSOpacityVarName});transition: var(${this._CSSTransitionVarName});}`;
		document.head.append(this._styleElement);
		this.nodes.forEach((e) => {
			(e as HTMLElement).style.setProperty(this._CSSOpacityVarName, "0");
			(e as HTMLElement).style.setProperty(this._CSSTransitionVarName, `opacity ${this.transition}`);
			(e as HTMLElement).style.setProperty(this._CSSContentVarName, "''");
			(e as HTMLElement).style.zIndex = "0";
		});

		this.play();
	}
	/**
	 * Plays the background changer it is called on.
	 */
	play(): void {
		this.pause();
		this._changer = window.setInterval(() => {
			this.next();
		}, this.timeout);
	}
	/**
	 * Pauses the background changer it is called on.
	 */
	pause(): void {
		window.clearInterval(this._changer);
		this._changer = -1;
	}
	/**
	 * Switches to the next background of the changer it is called on.
	 */
	next(): void {
		const getNewRandomBackgroundIndex = (): number => {
			let newIndex: number;
			do {
				newIndex = Math.floor(Math.random() * this.backgrounds.length);
			} while (this.currentBackgroundIndex === newIndex);
			return newIndex;
		};
		// if a changer exists reset it
		if (this._changer !== -1) {
			this.play();
		}
		if (this.backgrounds.length > 1) {
			this._currentBackgroundIndex = this.random ? getNewRandomBackgroundIndex() : this.currentBackgroundIndex === this.backgrounds.length - 1 ? (this._currentBackgroundIndex = 0) : this.currentBackgroundIndex + 1;
		} else if (this._currentBackgroundIndex === -1) {
			this._currentBackgroundIndex = 0;
		}

		this.nodes.forEach((e) => {
			(e as HTMLElement).style.setProperty(this._CSSTransitionVarName, `opacity ${this.transition}`);
			if (!this._isAfterOpaque) {
				(e as HTMLElement).style.setProperty(this._CSSBackgroundVarName, this.backgrounds[this.currentBackgroundIndex]);
				(e as HTMLElement).style.setProperty(this._CSSOpacityVarName, "1");
			} else {
				(e as HTMLElement).style.background = this.backgrounds[this.currentBackgroundIndex];
				(e as HTMLElement).style.setProperty(this._CSSOpacityVarName, "0");
			}
		});
		this._isAfterOpaque = !this._isAfterOpaque;
	}
	/**
	 * Removes the instance it is called on from DOM and reverts all selected HTML elements to their original state.
	 */
	remove(): void {
		this.pause();
		this.nodes.forEach((e, i) => {
			// hide pseudo ::after elements
			(e as HTMLElement).style.setProperty(this._CSSOpacityVarName, "0");
			(e as HTMLElement).style.setProperty(this._CSSContentVarName, "none");
			(e as HTMLElement).style.background = this._originalCSSBackgrounds[i]; // restore original CSS background property
			(e as HTMLElement).style.position = this._originalCSSPositions[i]; // restore original CSS position property
			(e as HTMLElement).style.zIndex = this._originalCSSZIndexes[i]; // restore original CSS z-index property
		});
		this._styleElement.remove();
	}
	/**
	 * Check whether the background changer is running.
	 * @returns The state of the changer
	 */
	isRunning(): boolean {
		return this._changer !== -1 ? true : false;
	}
}
