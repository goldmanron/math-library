window.MathJax = {
	tex: {
		inlineMath: [["\\(", "\\)"]],
		displayMath: [["\\[", "\\]"]],
		processEscapes: true,
		processEnvironments: true,
		macros: {
			true: "\\mathrm{True}",
			false: "\\mathrm{False}",
			emptyset: "\\varnothing"
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
