let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • XL [087820239077]
│ • Gopay [087820239077]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6287820239077
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
