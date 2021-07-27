let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
const buttons = [
{buttonId: 'id1', buttonText: {displayText: '💻 Menu 💻'}, type: 1}, 
{buttonId: 'id2', buttonText: {displayText: '💻 Owner 💻'}, type: 1}, 
]
const buttonMessage = {
    contentText: "HALO KAK\nSaya Someone Bot\nPilih Menu Di Bawah Yaa\nDan Jangan Lupa Baca Dibawah ini\n\nSpam = Banned\nTelp = Blok\n\n\nJoin Group WhatsApp\nhttps://bit.ly/3i3PGWX\n\nSubscribe Me\nhttps://bit.ly/3i15726 ", 
    footerText: 'Powered By Baileys\nCreated Someone Bot By Someone', 
    buttons: buttons,
    headerType: 1
}
conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage)
}

handler.help = ['menu', 'help']
handler.tags = ['main'] 
handler.command = /^(menu|help)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false
handler.register = true

handler.fail = null
handler.exp = 20

module.exports = handler