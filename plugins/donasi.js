let handler = async m => m.reply(`
╭─「 Donasi • Gopay 」
│ • Gopay [081949589655]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6281949589655
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
