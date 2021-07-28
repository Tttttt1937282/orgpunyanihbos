const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn, text }) => {
let [number, pesan] = text.split `.`

    if (!number) return conn.reply(m.chat, 'Silahkan masukan nomor yang akan dispam', m)
    if (!pesan) return conn.reply(m.chat, 'Silahkan masukan pesannya', m)
    if (text > 1000) return conn.reply(m.chat, 'Teks Kepanjangan!', m)

    let korban = `${number}`
    var nomor = m.sender
    let spam1 = `*「 Chat Dari Owner 」*\n\nPesan : ${pesan}\n\n_*SOMEONE BOTZ*_`


    conn.sendMessage(korban + '@s.whatsapp.net', spam1, MessageType.text)
    
      m.reply(`
dah di chat ner Orang nyah
`)
}
handler.help = ['chat <nomor|pesan>']
handler.tags = ['owner']
handler.command = /^(chat)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler
