let handler = function (m) {
  this.sendContact(m.chat, '6281949589655', 'ORG', m)
    this.fakeReply(m.chat, 'itu owner ku jangan di spam atau ku blok kamu👍', '0@s.whatsapp.net', 'Owner')
}

handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
