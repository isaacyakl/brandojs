export default class bRando {
	readonly nodes: NodeList;

	private _backgrounds: string[];
	public get backgrounds(): string[] {
		return this._backgrounds;
	}
	public set backgrounds(value: string[]) {
		// prettier-ignore
		this._backgrounds = value == null ? [
            'red url("/img/alex-knight-vaA6EQiUSo4-unsplash.jpg") center/cover no-repeat', 
            'green url("/img/joel-fulgencio-01fAtHwYqo0-unsplash.jpg") center/cover no-repeat', 
            'blue url("/img/pawel-nolbert-4u2U8EO9OzY-unsplash.jpg") center/cover no-repeat'
        ] : value;
	}

	private _timeout: number;
	public get timeout(): number {
		return this._timeout;
	}
	public set timeout(value: number) {
		this._timeout = value || 10000;
	}

	private _random: boolean;
	public get random(): boolean {
		return this._random;
	}
	public set random(value: boolean) {
		this._random = value != null ? value : true;
	}

	private timer: number;
	readonly originalCSSBackgrounds: string[];
	readonly originalCSSAfters: string[];

	constructor(CSSSelector?: string, CSSBackgrounds?: string[], timeout?: number, random?: boolean) {
		this.nodes = CSSSelector == null || CSSSelector == "" ? document.querySelectorAll("body") : document.querySelectorAll(CSSSelector);
		this.backgrounds = CSSBackgrounds;
		this.timeout = timeout;
		this.random = random;
		this.originalCSSBackgrounds = this.originalCSSAfters = [];
		this.nodes.forEach((e) => this.originalCSSBackgrounds.push((e as HTMLElement).style.background.toString()));
		// this.nodes.forEach((e) => this.originalCSSAfters.push((e as HTMLElement).style.transition.toString()));

		/*
        - backup any existing CSS styles
        - backup any existing ::after styles		
        - create embedded style element: https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
            - add ::after rule set to CSSSelector
                https://medium.com/web-dev-survey-from-kyoto/change-the-background-color-with-transition-animation-web-dev-survey-from-kyoto-ef2f65756e9a
                https://bryanlrobinson.com/blog/how-to-css-after-elements-for-background-overlays/
                - background-image supplied by a css variable:
                    https://medium.com/codex/two-different-ways-to-style-pseudo-elements-with-javascript-3d9260d9c61b
                    https://www.youtube.com/watch?v=LszEboGO_zw
                    https://blog.shhdharmen.me/how-to-change-look-and-feel-of-pseudo-elements-using-javascript-and-css-custom-properties
                - content
                - z-index
                - opacity: 0 | 1
                - transition
        - add the style element to the DOM: https://tomanistor.com/blog/selecting-and-modifying-css-pseudo-elements-with-javascript/

        - update background images of both and opacity of ::after in an alternating manner
        */
	}
	play(): void {
		this.next();
		this.timer = window.setInterval(() => {
			this.next();
		}, this.timeout);
	}
	pause(): void {
		clearInterval(this.timer);
	}
	next(): void {
		const randBackground = Math.floor(Math.random() * this.backgrounds.length);
		this.nodes.forEach((e) => {
			(e as HTMLElement).style.background = this.backgrounds[randBackground];
		});
	}
	remove(): void {
		this.pause();
		this.nodes.forEach((e, i) => {
			(e as HTMLElement).style.background = this.originalCSSBackgrounds[i];
		});
		// this.nodes.forEach((e, i) => {
		// 	(e as HTMLElement).style.background = this.originalCSSAfters[i];
		// });
	}
}
