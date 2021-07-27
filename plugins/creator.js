let handler = function (m) {
  this.fakeReply(m.chat, 'This is my owner', '0@s.whatsapp.net', 'Owner')
  this.sendContact(m.chat, '6281949589655', 'ORG', m)
}

handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
