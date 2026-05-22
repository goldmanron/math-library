window.MathJax = {
	tex: {
		inlineMath: [["\\(", "\\)"]],
		displayMath: [["\\[", "\\]"]],
		processEscapes: true,
		processEnvironments: true,
		macros: {
			true: "\\mathrm{True}",
			false: "\\mathrm{False}",
			emptyset: "\\varnothing",
			bmid: "\\;\\middle|\\;",

			bbn: "\\mathbb{N}",
			bbr: "\\mathbb{R}",
			bbc: "\\mathbb{C}",
			bbf: "\\mathbb{F}",
			bbz: "\\mathbb{Z}",
			bbq: "\\mathbb{Q}",

			ceil: ["\\left\\lceil #1 \\right\\rceil", 1],
			floor: ["\\left\\lfloor #1 \\right\\rfloor", 1],

			even: "\\mathrm{even}",
			odd: "\\mathrm{odd}",

			e: "\\varepsilon"

		}
	},
	options: {
		ignoreHtmlClass: ".*|",
		processHtmlClass: "arithmatex"
	},
};

document$.subscribe(() => {
	MathJax.startup.output.clearCache()
	MathJax.typesetClear()
	MathJax.texReset()
	MathJax.typesetPromise()
})
