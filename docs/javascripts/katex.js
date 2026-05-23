document$.subscribe(({ body }) => {
    renderMathInElement(body, {
        delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false },
            { left: "\\(", right: "\\)", display: false },
            { left: "\\[", right: "\\]", display: true }
        ],
        macros: {
            // Simple string replacements
            "\\true": "\\mathrm{True}",
            "\\false": "\\mathrm{False}",
            "\\emptyset": "\\varnothing",
            "\\bmid": "\\;\\middle|\\;",

            "\\bbn": "\\mathbb{N}",
            "\\bbr": "\\mathbb{R}",
            "\\bbc": "\\mathbb{C}",
            "\\bbf": "\\mathbb{F}",
            "\\bbz": "\\mathbb{Z}",
            "\\bbq": "\\mathbb{Q}",

            "\\even": "\\mathrm{even}",
            "\\odd": "\\mathrm{odd}",

            "\\e": "\\varepsilon",

            // Macros with arguments 
            // KaTeX automatically infers 1 argument because of '#1'
            "\\ceil": "\\left\\lceil #1 \\right\\rceil",
            "\\floor": "\\left\\lfloor #1 \\right\\rfloor"
        }
    })
})
