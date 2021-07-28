const sewabot = () => { 
	return `
*OPEN JASA SEWA BOT*

Sewa Seminggu : 10k
Sewa Sebulan : 25k
Sewa Permanent : 50k

*Payment :*
_Pulsa_

Minat?PC
Wa.me/6281949589655
`
}
handler.help = ['sewa']
handler.tags = ['info']
handler.command = /^(sewa)$/i

module.exports = handler
