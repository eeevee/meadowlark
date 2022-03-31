const fortuneCookies = [
	"Desista dos seus sonhos",
	"Você não vai conseguir",
	"Repita: eu sou um fracasso"
]

exports.getFortune = () => {
	const idx = Math.floor(Math.random() * fortuneCookies.length)
	return fortuneCookies[idx]
}