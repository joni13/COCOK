const
	{
		WAConnection: _WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const simple = require('./lib/simple')
let WAConnection = simple.WAConnection(_WAConnection)
let senku = new WAConnection()
const fs = require('fs')
const axios = require("axios")  
const encodeUrl = require('encodeurl')
const figlet = require('figlet')
const moment = require('moment-timezone')
const toMs = require('ms')
const ms = require("parse-ms");
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success } = require('./lib/functions')
const { color } = require('./lib/color')
fakenomor = '0@s.whatsapp.net'
const gcrevoke = ["6281362290677-1621430788@g.us"]
shp = '⬡'
owner = "6281362290677@s.whatsapp.net"
spc1 = '         '
spc2 = '\n                           '
spc3 = '                   '
spc4 = '               '

require('./index.js')
nocache('./index.js', module => console.log(color(`Index.js is now updated!`)))
require('./lib/menu.js')
nocache('./lib/menu.js', module => console.log(color(`Menu.js is Now updated!`)))

const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const date = new Date().toLocaleDateString()
const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')

const starts = async (senku = new WAConnection()) => {
senku.version = [2, 2119, 6]
//enku.browserDescription = [ '[•] Senku', 'Chrome', '3.0' ]
senku.logger.level = 'warn'
console.log(color(figlet.textSync(`${spc1}Senku Bot Wa`, {
font: 'Standard',
horizontalLayout: 'default',
vertivalLayout: 'default',
width: 80,
whitespaceBreak: false
}), 'cyan'))
console.log(color(`${spc2}[ • BOT Creator By Senkuu • ]` ,'cyan'))
console.log(color(`${spc4}< ================================================== >`, 'cyan'))
console.log(color(`${spc3}[•]`, 'aqua'), color(`Nama        : ${fake}`, 'white'))
console.log(color(`${spc3}[•]`, 'aqua'), color(`Bot Version : 2.1.2`, 'white'))
console.log(color(`${spc3}[•]`, 'aqua'), color(`Status      : Online!`, 'white'))
console.log(color(`${spc3}[•]`, 'aqua'), color(`Owner       : ${ownerN}`, 'white'))
console.log(color(`${spc4}< ================================================== >`, 'cyan'))

senku.on('qr', () => {
console.log(color('[','white'), color('!','cyan'), color(']','white'), color('Scan Now This Qr!'))
})

fs.existsSync('./senku.json') && senku.loadAuthInfo('./senku.json')
senku.on('connecting', () => {
start('2', '[ ! ] Connecting..')
})

senku.on('open', () => {
success('2',`\n[ ✓ ] Connected...`)
})
await senku.connect({timeoutMs: 30*1000})
fs.writeFileSync('./senku.json', JSON.stringify(senku.base64EncodedAuthInfo(), null, '\t'))
senku.on('chat-update', async (message) => {
require('./index.js')(senku, message)
})
    
senku.on('group-participants-update', async (anu) => {
  const setting = JSON.parse(fs.readFileSync('./database/settings.json'))
	const welkam = JSON.parse(fs.readFileSync('./database/welkam.json'))
	const left = JSON.parse(fs.readFileSync('./database/left.json'))	
	const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
	const tleft = JSON.parse(fs.readFileSync('./database/tleft.json'))
      try {
  const mdata = await senku.groupMetadata(anu.jid)
	 finvite = {
    "key": {
      "fromMe": false,
      "participant": "0@s.whatsapp.net",
      "remoteJid": "0@s.whatsapp.net"
           },
      "message": {
       "groupInviteMessage": {
       "groupJid": anu.jid,
       "inviteCode": "NgsCIU2lXKh3VHJT",
       "groupName": mdata.subject,
       "caption": fake,
       "height": 6080,
       "width": 6000
                               }
                   }
            }
 ini_user = await senku.contacts[anu.participants[0]]
  try{
    if(!ini_user.notify == ''){
	namaewa = ini_user.notify
	}
	else if(!ini_user.name == ''){
	namaewa = ini_user.name
	}
	else{
	namaewa = '+' + anu.participants[0].split('@')[0]
	}}catch{
	namaewa = '+' + anu.participants[0].split('@')[0]
}

if(picdetec){
try {
ppimg = await senku.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
try {
ppgc = await senku.getProfilePicture(anu.jid)
} catch {
ppgc = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
shortpc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppimg}`)
shortgc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppgc}`)
}
if (anu.action == 'add') {
if (!welkom.includes(anu.jid)) return
  num = anu.participants[0]
  user = '@' + num.split('@')[0]
  gcname = mdata.subject
	desc = mdata.desc
  for(let i of welkam){
  if(i.idgc.includes(anu.jid)){
  textwel1 = `${i.textwel.replace("@user",user)}`
  textwel2 = `${textwel1.replace("@subject",gcname)}`
	textwel3 = `${textwel2.replace("@desc", desc)}`
	
if(picdetec){
try {
ppimg = await senku.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
y = await getBuffer(ppimg)
	senku.sendMessage(mdata.id, y, MessageType.image, {caption: textwel3, contextInfo: {"mentionedJid": [num]},quoted : finvite})
 .then((res)=> 
 senku.sendMessage(mdata.id, fs.readFileSync(`./src/stick/wel.webp`), MessageType.sticker, {quoted:res }))
 	}	else {
  return senku.sendMessage(mdata.id, textwel3, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: finvite})
	.then((res)=> 
  senku.sendMessage(mdata.id, fs.readFileSync(`./src/stick/wel.webp`), MessageType.sticker, {quoted:res }))
}
}
}
teks = `Halo ${user} 👋\nSelamat datang brother, semoga betah di Grup kecil ini 

Jangan lupa cek deskripsi grup ya bro

Sering nimbrung dan jangan malu2😁`


if(picdetec){
  try {
ppimg = await senku.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
y1 = await getBuffer(ppimg)
senku.sendMessage(mdata.id, y1, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]},quoted : finvite})
.then((res)=> 
senku.sendMessage(mdata.id, fs.readFileSync(`./src/stick/wel.webp`), MessageType.sticker, {quoted:res }))
} else {
senku.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: finvite})
.then((res)=> 
senku.sendMessage(mdata.id, fs.readFileSync(`./src/stick/wel.webp`), MessageType.sticker, {quoted:res }))
}

} else if (anu.action == 'remove') {
if(!left.includes(anu.jid)) return
try {
ppimg = await senku.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
pp = await getBuffer(ppimg)
num = anu.participants[0]
user = '@' + num.split('@')[0]
gcname = mdata.subject
desc = mdata.desc
for(let i of tleft){
if(i.idgc.includes(anu.jid)){
textleft1 = `${i.textleft.replace("@user",user)}`
textleft2 = `${textleft1.replace("@gcname",gcname)}`
textleft3 = `${textleft2.replace("@desc", desc)}`
if(picdetec){
senku.sendMessage(mdata.id, pp, MessageType.image, {caption: textleft3, contextInfo: {"mentionedJid": [num]},quoted : finvite})
} else {
return senku.sendMessage(mdata.id, textleft3, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: finvite})
}
}
}

teks = `*Makasih sudah pernah menjadi member vip @${num.split('@')[0]}🥲*`
if(picdetec){
try {
ppimg = await senku.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
y2 = await getBuffer(ppimg)
senku.sendMessage(mdata.id, y2, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]},quoted : finvite})
  } else { 
senku.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: finvite})
}

} else if (anu.action == 'promote') {
//	const gchange = JSON.parse(fs.readFileSync('./database/gupdated.json'))
	//if(!gchange.includes(mdata.id)) return
var thu = await senku.getStatus(anu.participants[0], MessageType.text)
num = anu.participants[0]
teks = `*P R O M O T E - D E T E C T E D*\n\n${shp} Username: @${num.split('@')[0]}\n\n${shp} Bio : ${thu.status}\n\n${shp} Time : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\n\n${shp} Group: ${mdata.subject}\n\nDon't break the rules!`
senku.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: finvite})
} else if (anu.action == 'demote') {
//   const gchange = JSON.parse(fs.readFileSync('./database/gupdated.json'))
//	if(!gchange.includes(mdata.id)) return
thu = await senku.getStatus(anu.participants[0], MessageType.text)
num = anu.participants[0]
teks = `*D E M O T E - D E T E C T E D*\n\n${shp} Username: @${num.split('@')[0]}\n\n${shp} Bio : ${thu.status}\n\n${shp} Time : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\n\n${shp} Group: ${mdata.subject}`
senku.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: finvite})
}
} catch (e) {
console.log('Error : %s', color(e, 'red'))
}
})

senku.on('group-update', async (anu) => {
fkontakk = { key: {
  fromMe: false,
    participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6281362290677-1604595598@g.us' } : {})
},
 message: {
    "contactMessage":{"displayName":'<MJK BOT',"vcard":"BEGIN:VCARD\nVERSION:3.0\nN:2;MJK GAMING;;;\nFN:resku\nitem1.TEL;waid=6281362290677:+62 813-6229-0677\nitem1.X-ABLabel:Mobile\nEND:VCARD"
 }}}
metdata = await senku.groupMetadata(anu.jid)
if(anu.announce == 'false'){
teks = ` [ Group Opened ] \n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`
senku.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
console.log(`- [ Group Opened ] - In ${metdata.subject}`)
}
else if(anu.announce == 'true'){
teks = ` [ Group Closed ] \n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`
senku.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
console.log(` [ Group Closed ]  In ${metdata.subject}`)
}
else if(!anu.desc == ''){
tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
teks = ` [ Group Description Change ] \n\nDeskripsi Group telah diubah oleh Admin @${anu.descOwner.split('@')[0]}\n• Deskripsi Baru : ${anu.desc}`
senku.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: fkontakk})
console.log(`- [ Group Description Change ] - In ${metdata.subject}`)
  }
else if(anu.restrict == 'false'){
teks = ` [ Group Setting Change ] \n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`
senku.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
console.log(`- [ Group Setting Change ] - In ${metdata.subject}`)
  }
else if(anu.restrict == 'true'){
teks = `- [ Group Setting Change ] -\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`
senku.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
console.log(`- [ Group Setting Change ] - In ${metdata.subject}`)
}
})

antidel = true
senku.on('message-delete', async (m) => {
if (m.key.remoteJid == 'status@broadcast') return
if (!m.key.fromMe && m.key.fromMe) return
if (antidel === false) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let d = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
const type = Object.keys(m.message)[0]
senku.sendMessage(m.key.remoteJid, `━━━━⬣  𝘼𝙉𝙏𝙄 𝘿𝙀𝙇𝙀𝙏𝙀  ⬣━━━━

    *Nama  : @${m.participant.split("@")[0]}*
    *Jam  : ${jam} ${week} ${calender}*
    *Type  : ${type}*

━━━━⬣  𝘼𝙉𝙏𝙄 𝘿𝙀𝙇𝙀𝙏𝙀  ⬣━━━━`, MessageType.text, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})
senku.copyNForward(m.key.remoteJid, m.message)
})

antical = true
senku.on("CB:Call", json => {
if (antical === false) return
let call;
calling = JSON.parse(JSON.stringify(json))
call = calling[1].from
senku.sendMessage(call, `*Sorry ${senku.user.name} can't receive calls.*\n*Call = Block!*`, MessageType.text)
.then(() => senku.blockUser(call, "add"))
})
	 
senku.on('CB:Blocklist', json => {
if (blocked.length > 2) return
for (let i of json[1].blocklist) {
blocked.push(i.replace('c.us','s.whatsapp.net'))
}
})
}


/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
 
function nocache(module, cb = () => { }) {
//console.log(color('========================================'))
//console.log('Module', `'${module}'`, 'is now being watched for changes')
fs.watchFile(require.resolve(module), async () => {
await uncache(require.resolve(module))
cb(module)
})
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
 
function uncache(module = '.') {
return new Promise((resolve, reject) => {
try {
delete require.cache[require.resolve(module)]
resolve()
} catch (e) {
reject(e)
}
})
}

starts()
