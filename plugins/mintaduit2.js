let handler = async(m, { conn, args, usedPrefix }) => {
    if (args.length == 0) return conn.reply(m.chat, `Harap masukan Kode Giftmu!`, m)
    if (args[0] == 'anjay' || args[0] == 'KodeGift2' || args[0] == 'KodeGift3' || args[0] == 'KodeGift4') {

        conn.reply(m.chat, '*SELAMAT!*\n\nKamu telah mendapatkan\n99999999 Semua yang di .inv!\n\nPajak -1 limit', m)
    global.DATABASE._data.users[m.sender].money += 99999999
    global.DATABASE._data.users[m.sender].limit += 99999999
    global.DATABASE._data.users[m.sender].exp += 99999999
    global.DATABASE._data.users[m.sender].health += 99999999
    global.DATABASE._data.users[m.sender].mythic += 99999999
    global.DATABASE._data.users[m.sender].iron += 99999999
    global.DATABASE._data.users[m.sender].common += 99999999
    global.DATABASE._data.users[m.sender].potion += 99999999
    global.DATABASE._data.users[m.sender].sampah += 99999999
    global.DATABASE._data.users[m.sender].uncommon += 99999999
    global.DATABASE._data.users[m.sender].legendary += 99999999
    global.DATABASE._data.users[m.sender].makananpet += 99999999
    global.DATABASE._data.users[m.sender].diamond += 99999999
    } else {
        conn.reply(m.chat, `*KODE GIFT TIDAK VALID!*\n\nSilahkan Hubungi Owner Untuk Beli Kode Gift Yang Valid Dengan Cara Ketik ${prefix}buygift Atau Dapatkan Kode Gift Secara Gratis Dengan Cara Berdaftar!`, m)
    }
}
handler.help = ['gift3 <kode>']
handler.tags = ['hadiah']
handler.command = /^(gift3)$/i
handler.owner = true

handler.limit = 1

module.exports = handler
