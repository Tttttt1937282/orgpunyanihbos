let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text }) => {
  let txt = text.replace(' ' ,'').trim()
  if (isNaN(txt)) throw 'Hanya angka'
  let duit = parseInt(txt)
  let duid = duit
  let users = global.db.data.users
  users[m.sender].money += duid
 
 m.reply(`+${xp} XP`)
}
handler.help = ['mintaduit @user <amount>']
handler.tags = ['owner']
handler.command = /^mintaduit$/
handler.owner = true

module.exports = handler
