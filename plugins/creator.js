let handler = function (m) {
  // this.fakeReply(m.chat, 'This is my owner', '6281390658325@s.whatsapp.net', 'Owner')
  this.sendContact(m.chat, '6287820239077', 'Someone', m)
}

handler.customPrefix = ['💻 Owner 💻']
handler.command = new RegExp

module.exports = handler
