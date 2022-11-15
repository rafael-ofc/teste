const { default: makeWASocket, downloadContentFromMessage, useSingleFileAuthState, makeInMemoryStore, DisconnectReason, WAGroupMetadata, relayWAMessage,	MediaPathMap, mentionedJid, processTime, MediaType, Browser, MessageType, Presence, Mimetype, Browsers, delay, fetchLatestBaileysVersion
} = require('@adiwajshing/baileys');

//_-_-__-_-_-MODU

const { hx, fs, Boom, axios, chalk, yts, crypto, util, P, encodeUrl, linkfy, request,ms, ffmpeg, imgbb, googleImage, googleIt, fetch, imageToBase64, webp2gifFile, webp_mp4, EmojiAPI, qrterminal, emoji, exec, spawn, execSync, moment, color, time, hora, date, getBuffer, convertSticker, recognize, fetchJson, fetchText, getBase64, createExif, insert, response, addLimit, getLimit, mediafireDl, upload, nit, addBanned, unBanned, BannedExpired, cekBannedUser, isFiltered, addFilter, validmove, setGame, addComandosId, deleteComandos, getComandoBlock, getComandos, addComandos, palavrasANA, palavraA, quizanime, quizanimais, getLevelingXp, getLevelingLevel, getLevelingId, addLevelingXp, addLevelingLevel, addLevelingId, bayarLimit, limitAdd, addATM, addKoinUser, checkATMuser, getRegisteredRandomId, addRegisteredUser, createSerial, checkRegisteredUser, confirmATM, runtime, getpc, supre, WinnerX, WinnerO, Tie, IA, IAmove1, IAalter, priorityC, addTTTId, addTTTwin, addTTTdefeat, addTTTtie, addTTTpoints, getTTTId, getTTTwins, getTTTdefeats, getTTTties, getTTTpoints, wait, getExtension, h2k, generateMessageID, getGroupAdmins, getRandom, banner2, start2, banner3, infopd, success, start, close, temporizador, cmdadd, addMetadata, chyt, ttthelp, tttme, tttset, esp, kyun, simih } = require('./consts-func.js')

//-_-_-_-_-_-_-_-_-_-_--_-JSON-FUNÇÕES-_-_-_-_-_-_-_-_-_-_-_-_\\

const { adeuscara, welcome_group, welcome_group2, bye_group, bye_group2, voting, sotoy, addVote, delVote, countMessage, comandos, welkom2, modobn, nsfw, daily, nescessario, welkom, premium, limitefll, antiflood, samih, samih2, _leveling, _level, bancht, anticall, ban, afk, joguinhodavelhajs, joguinhodavelhajs2, setting, logoslink, antilink, antifake, antilinkhard, autofigu, antilinkgp, antiimg, antisticker, antinotas, antictt, anticatalogo, antidoc, antiloc, antipv, antivid, antiaudio, palavra, palavrao, store, state, saveState } = require('./consts-func.js')

//-_-_-_-JS-MENUS/INFORMAÇÕES-_-_-_\\

const { menu, menudono, adms, figurinhas, loja, nuvem, pack18, menubasico, menuinfo, animes, menuplay, jogos , infodono, efeitos, destrava, alteradores, destrava2, tabela, cheerio, conselhob, palavras } = require('./consts-func.js')

//_-_-_-_-_-(INFOS)_-_-_-_-_-_-_\\

const { forwarding, imgnazista, imggay, imgcorno, imggostosa, imggostoso, imgfeio, imgvesgo, imgbebado, imggado, matarcmd, beijocmd, chutecmd } = require("./dono/nescessario.json")

//==================≠≠===============\\
 
 const maker = require('mumaker')
 
const { textpro } = require('./lib/textpro')

const { mediafire } = require("./lib/mediafire.js")

const { sendVideoAsSticker, sendImageAsSticker } = require('./armor/funcoes/rename.js');
 
cdd = nescessario.cdd
 
crtt = nescessario.crtt
 
fundo1 = nescessario.fundo1

fundo2 = nescessario.fundo2
 
dono2 = nescessario.dono2

dono3 = nescessario.dono3
 
dono4 = nescessario.dono4

dono5 = nescessario.dono5
 
log1 = fs.readFileSync("./logos/logo2.jpg")

NomeDoBot = setting.NomeDoBot

NickDono = setting.NickDono

numerodono = setting.numerodono 

prefix = setting.prefix1

prefix2 = setting.prefix2

prefix3 = setting.prefix3

prefix4 = setting.prefix4

banChats = nescessario.banChats 

logo = logoslink.logo

log0 = logoslink.log0

limitefl = limitefll.limitefl

numbernye = '0'

var lista = { ativada: true }

var spam = []

var Flode = []

var LISTA = []

blocked = [] 

hitt = []

keyale = "key-samuel/paulo-2.0"

const vcard = 'BEGIN:VCARD\n' 
+ 'VERSION:3.0\n' 
+ 'FN:Nero\n' 
+ 'ORG:Komi-bot;\n' 
+ 'TEL;type=CELL;type=VOICE;waid=${numerodono}:${numerodono}\n' 
+ 'END:VCARD' 

const { Aki } = require('aki-api')

const region = 'pt'

jogo = {
jogador: '',
now: true
}

//====== ( Emojis do Tiago ) =======\\

var emojos = [`🕉️`,`✝️`,`☪️`,`☸️`,`✡️`,`🔯`,`🕎`,`☯️`,`☦️`,`🛐`,`⛎`,`♒`,`♑`,`♐`,`♏`,`♎`,`♌`,`♋`,`♊`,`♉`,`♈`,`♓`,`🆔`,`⚛️`,`🈶`,`🈚`,`🈸`,`🈺`,`🈷️`,`✴️`,`🆚️`,`🈴`,`🈵`,`🈹`,`🈲`,`🅰️`,`🅱️`,`🆑`,`🅾️`,`🏧`,`🚾`,`♿`,`🅿️`,`🛗`,`🈳`,`🈂️`,`🛂`,`🛃`,`🛄`,`🛅`,`🚹`,`🚺`,`🚼`,`⚧`,`🚻`,`🚮`,`🎦`,`📶`,`🈁`,`🔣`,`🔤`,`🔡`,`🔠`,`🆖`,`🆗`,`🆙`,`#️⃣`,`🔄`,`🔂`,`🔁`,`🔀`,`⏺️`,`⏹️`,`⏸️`,`🔢`]

function EmojeG(setgg){
return setgg[Math.floor(Math.random() * (setgg.length))]
}

// ======== ( Final ) ======== \\

const startAle = async() => {

// ABAIXO: INÍCIO DE CONEXÃO

const dens = makeWASocket({
logger: P({ level: 'fatal' }),
printQRInTerminal: true,
auth: state,
browser: ["Destiny Bot-MD", "Safari", "1,0"]
})

store.bind(dens.ev)

//=======(BEM VINDO/PROMOVER)========\\

dens.ev.on('group-participants.update', async (ale) => {
  
if (ale.action == 'promote'){
try {
foto = await dens.profilePictureUrl(`${ale.participants[0].split('@')[0]}@c.us`, 'image')
} catch {
foto = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
dens.sendMessage(ale.id, {image: {url: foto}, caption: `@${ale.participants[0].split('@')[0]} esse membro acaba de ser promovido a administrador desse grupo por algum adm, parabéns pela conquista👑`})
}


if (ale.action == 'demote'){
try {
foto = await dens.profilePictureUrl(`${ale.participants[0].split('@')[0]}@c.us`, 'image')
} catch {
foto = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
dens.sendMessage(ale.id, {image: {url: foto}, caption: `@${ale.participants[0].split('@')[0]} acaba de ser rebaixo a membro comum por algum administrador desse grupo, F família 👑`})
}

const groupMetadata = await dens.groupMetadata(ale.id) 
  
const mdata = await dens.groupMetadata(ale.id)  

// CONST DO CMD DE BANIR //

const dbackid = []
for(i=0;i<adeuscara.length;++i) dbackid.push(adeuscara[i].groupId)
console.log(ale)
if(dbackid.indexOf(ale.id) >= 0) {
if (ale.action == 'add'){ 
num = ale.participants[0]
var ind = dbackid.indexOf(ale.id)
if(adeuscara[ind].actived && adeuscara[ind].number.indexOf(num.split('@')[0]) >= 0) {
await dens.sendMessage(mdata.id,{text: '*Olha quem deu as cara por aqui, sente o poder do ban cabaço*'})
dens.groupParticipantsUpdate(mdata.id, [ale.participants[0]], 'remove')
return
}
}
}

// ANTIFAKE QUE ESTÁ JUNTO COM BEM VINDO 
if(antifake.includes(ale.id)) {
if (ale.action === 'add' && !ale.participants[0].startsWith(55)){
num = ale.participants[0]
dens.sendMessage(mdata.id, {text: ' ⛹️⛹️Bye Bye Estrangeiro...👋🏌️'})
await delay(1000)
dens.groupParticipantsUpdate(mdata.id, [ale.participants[0]], 'remove')
}
}

// BEM VINDO COMPLETO 

if(welkom.includes(ale.id)) {
if(antifake.includes(ale.id) && !ale.participants[0].startsWith(55)) return
try {
  
// PEGAR DESCRIÇÃO DO GRUPO. 

const groupDesc = await groupMetadata.desc  
  
try {
nera = await dens.profilePictureUrl(`${ale.participants[0].split('@')[0]}@c.us`, 'image')
} catch {
nera = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}

const groupIdWelcomed = []
const groupIdBye = []
for(let obj of welcome_group) groupIdWelcomed.push(obj.id)
for(let obj of bye_group) groupIdBye.push(obj.id)


const isByed = groupIdBye.indexOf(ale.id) >= 0 ? true : false

const isWelcomed = (groupIdWelcomed.indexOf(ale.id) >= 0) ? true : false

if(ale.action === 'add') {
if(isWelcomed) {
var ind = groupIdWelcomed.indexOf(ale.id)
teks = welcome_group[ind].msg
.replace('#hora#', time)
.replace('#nomedogp#', mdata.subject)
.replace('#numerodele#', '@'+ale.participants[0].split('@')[0])
.replace('#numerobot#', dens.user.id)
.replace('#prefixo#', prefix)
.replace('#descrição#', groupDesc)
} else {
}

const buttonBv = [
{buttonId:prefix+'cu', buttonText: {displayText: '❓HELP❓'}, type: 1}]

const buttonMsg = {
image: { url: nera },
caption: teks,
footer: NomeDoBot,
buttons: buttonBv,
mentions: ale.participants,
footer: ``,
buttons: buttonBv,
headerType: 4,
contextInfo:{externalAdReply: {
title: ``,
mediaType: 1,
renderLargerThumbnail: true,
showAdAttribution: true,
body: ``,
thumbnail: await getBuffer("https://telegra.ph/file/00d773efb9cf0b04d349f.jpg"),
sourceUrl: `https://youtube.com/channel/UCx8b3HdonWrA71fDUCXLxqw`,
}}
}
dens.sendMessage(mdata.id, buttonMsg)

} else if(ale.action === 'remove') {
mem = ale.participants[0]

try {
ppimg = await dens.profilePictureUrl(`${mem.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg'
}


if(isByed) {
var ind = groupIdBye.indexOf(ale.id)
teks = bye_group[ind].msg
.replace('#hora#', time)
.replace('#nomedogp#', mdata.subject)
.replace('#numerodele#', ale.participants[0].split('@')[0])
.replace('#numerobot#', dens.user.id)
.replace('#prefixo#', prefix)
.replace('#descrição#', groupDesc)
} else {
teks = bye(ale.participants[0].split('@')[0])
}

let buff = await getBuffer(ppimg)
ran = getRandom('.jpg')
fs.writeFileSync(ran, buff)

try {
nera = await dens.profilePictureUrl(`${ale.participants[0].split('@')[0]}@c.us`, 'image')
} catch {
nera = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}

const buttonBv = [
{buttonId: 'kk&kk&kk', buttonText: {displayText: '🍻CORNO SAIU🍻'}, type: 1}]

const buttonMsg = {
image: { url: nera },
caption: teks,
footer: NomeDoBot,
buttons: buttonBv,
mentions: ale.participants,
footer: ``,
buttons: buttonBv,
headerType: 4,
contextInfo:{externalAdReply: {
title: ``,
mediaType: 1,
renderLargerThumbnail: true,
showAdAttribution: true,
body: ``,
thumbnail: await getBuffer("https://telegra.ph/file/00d773efb9cf0b04d349f.jpg"),
sourceUrl: `https://youtube.com/channel/UCx8b3HdonWrA71fDUCXLxqw`,
}}
}
dens.sendMessage(mdata.id, buttonMsg)

}
} catch (e) {
if(String(e).includes("bye is not defined")) {
console.log(color.green(
`Mensagem de saiu do bem vindo não definida, mas não precisa definir,
qualquer dúvida dúvida digita :
${prefix}infobemvindo no WhatsApp..`))
} else if(String(e).includes("welcome is not defined")) {
console.log(color.green(
`Mensagem do bem vindo não definida, qualquer dúvida digite : 
${prefix}infobemvindo no WhatsApp..`))
} else {
console.log(e);
}
}
}
})

// FIM ^

const sendlistA = async (id, txt1, txt2, title1, btext, but) => {

const sections = but

const listMessage = {
text: txt1,
footer: txt2,
title: title1,
buttonText: btext,
sections
}
dens.sendMessage(id, listMessage)  
}

// BEM VINDO 2 ( SEM FOTO )

dens.ev.on('creds.update', saveState);
dens.ev.on('group-participants.update', async (ale) => {
 

if(welkom2.includes(ale.id)) {
if(antifake.includes(ale.id) && !ale.participants[0].startsWith(55)) return
try {

const groupMetadata = await dens.groupMetadata(ale.id) 
  
const mdata = await dens.groupMetadata(ale.id)  

// PEGAR DESCRIÇÃO DO GRUPO

const groupDesc = await groupMetadata.desc

const groupIdWelcomed2 = []
const groupIdBye2 = []
for(let obj of welcome_group2) groupIdWelcomed2.push(obj.id)
for(let obj of bye_group2) groupIdBye2.push(obj.id)


const isByed2 = groupIdBye2.indexOf(ale.id) >= 0 ? true : false

const isWelcomed2 = (groupIdWelcomed2.indexOf(ale.id) >= 0) ? true : false

if(ale.action === 'add') {
if(isWelcomed2) {
var ind = groupIdWelcomed2.indexOf(ale.id)
teks = welcome_group2[ind].msg
.replace('#hora#', time)
.replace('#nomedogp#', mdata.subject)
.replace('#numerodele#', '@'+ale.participants[0].split('@')[0])
.replace('#numerobot#', dens.user.id)
.replace('#prefixo#', prefix)
.replace('#descrição#', groupDesc)
} else {
teks = welcome(ale.participants[0].split('@')[0], mdata.subject)
}

const buttonBv2 = [
{buttonId:prefix+'cu', buttonText: {displayText: 'HELP'}, type: 1}]

const buttonMsg = {
text: teks,
footer: ``,
buttons: buttonBv2,
mentions: ale.participants,
}
dens.sendMessage(mdata.id, buttonMsg)

} else if(ale.action === 'remove') {
mem = ale.participants[0]

if(isByed2) {
var ind = groupIdBye2.indexOf(ale.id)
teks = bye_group2[ind].msg
.replace('#hora#', time)
.replace('#nomedogp#', mdata.subject)
.replace('#numerodele#', ale.participants[0].split('@')[0])
.replace('#numerobot#', dens.user.id)
.replace('#prefixo#', prefix)
.replace('#descrição#', groupDesc)
} else {
teks = bye(ale.participants[0].split('@')[0])
}

const buttonBv2 = [
{buttonId: 'kkk', buttonText: {displayText: 'SAIU É GADO'}, type: 1}]

const buttonMsg = {
text: teks,
footer: ``,
buttons: buttonBv2,
mentions: ale.participants,
}
dens.sendMessage(mdata.id, buttonMsg)

}
} catch (e) {
console.log(e);
}
}
})
// FIM BEM VINDO (2)

dens.ev.on('messages.upsert', async ({ messages, type }) => {
if (type === 'append') return
try {
const info = messages ? messages[0]: messages[1]
if (!info.message) return 
saveState()
if (info.message.protocolMessage) return 
if(info.message > 1000) return
await dens.readMessages([info.key])
if (info.key && info.key.remoteJid == 'status@broadcast') return

const altpdf = Object.keys(info.message)
const type = altpdf[0] == 'senderKeyDistributionMessage' ? altpdf[1] == 'messageContextInfo' ? altpdf[2] : altpdf[1] : altpdf[0]

global.prefix

global.blocked

const content = JSON.stringify(info.message)
const speed = require('performance-now');
const from = info.key.remoteJid
const isGroup = from.endsWith('@g.us')

//==============(BODY)================\\
var body = (type === 'conversation') ? info.message.conversation : (type === 'imageMessage') ? info.message.imageMessage.caption : (type === 'videoMessage') ? info.message.videoMessage.caption : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : (type === 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedButtonId : (type === 'listResponseMessage') ? info.message.listResponseMessage.singleSelectReply.selectedRowId : (type === 'templateButtonReplyMessage') ? info.message.templateButtonReplyMessage.selectedId : ''

const isMentioned = info?.message?.extendedTextMessage?.contextInfo?.mentionedJid.length >= 1 ? true : false
const args = body.trim().split(/ +/).slice(1)
const isCmd = body.startsWith(prefix) || body.startsWith(prefix2) || body.startsWith(prefix3) || body.startsWith(prefix4)
const command = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null

//============(BADY)=============\\

bady = (type === 'conversation') ? info.message.conversation : (type == 'imageMessage') ? info.message.imageMessage.caption : (type == 'videoMessage') ? info.message.videoMessage.caption : (type == 'extendedTextMessage') ? info.message.extendedTextMessage.text : (info.message.listResponseMessage && info.message.listResponseMessage.singleSelectReply.selectedRowId) ? info.message.listResponseMessage.singleSelectReply.selectedRowId: ''

//============(BUDY)==============\\

budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''

//===================================\\

var pes = (type === 'conversation' && info.message.conversation) ? info.message.conversation : (type == 'imageMessage') && info.message.imageMessage.caption ? info.message.imageMessage.caption : (type == 'videoMessage') && info.message.videoMessage.caption ? info.message.videoMessage.caption : (type == 'extendedTextMessage') && info.message.extendedTextMessage.text ? info.message.extendedTextMessage.text : ''

//===========(ID DAS FIGUS)===========\\

const figura = Object.keys(info.message)[0] == "stickerMessage" ? info.message.stickerMessage.fileSha256.toString('base64') : ""

//====================================\\

const groupMetadata = isGroup ? await dens.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const sender = isGroup ? info.key.participant : info.key.remoteJid
const pushname = info.pushName ? info.pushName : ''

const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()

const arg = body.substring(body.indexOf(' ') + 1)

const botNumber = dens.user.id.split(':')[0]+'@s.whatsapp.net'
const argss = body.split(/ +/g)
const testat = body
const ants = body
const tescuk = ["0@s.whatsapp.net"]
const q = args.join(' ')

const groupDesc = isGroup ? groupMetadata.desc : ''

const groupMembers = isGroup ? groupMetadata.participants : ''

const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''

//====================================\\

const nmrdn = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`

const numerodono = [`${nmrdn}`, `${nescessario.dono1}@s.whatsapp.net`, `${nescessario.dono2}@s.whatsapp.net`, `${nescessario.dono3}@s.whatsapp.net`, `${nescessario.dono4}@s.whatsapp.net`, `${nescessario.dono5}@s.whatsapp.net`, `${nescessario.dono6}@s.whatsapp.net`]

//=========(enviar.espere)===========\\

const Banspam = JSON.parse(fs.readFileSync('./datab/grupos/antispam.json'));

const { mensagens } = require('./armor/js/aleatoria.js');

const { eun } = require('./datab/jsons/nunca.js');

const { sortear } = require('./armor/js/aleatoria.js');

const color = require('colors');

var eunonk = eun[Math.floor(Math.random() * eun.length)] 

var enviarmen = mensagens[Math.floor(Math.random() * mensagens.length)]

//==============Clans 🥋

const guildasdir = './datab/usuarios/guildas.json'
const guildas  = JSON.parse(fs.readFileSync(guildasdir))

let dataclan = []
for (let i = 0; i < guildas.length; i++){
dataclan.push(guildas[i].clan)
}

const clanId = (userId) => {
let position = false
Object.keys(guildas).forEach((i) => {
if (guildas[i].id.includes(userId)) {
position = i
}
})
if (position !== false) {
return guildas[position].clan
}
}

const clanPs = (userId) => {
let position = false
Object.keys(guildas).forEach((i) => {
if (guildas[i].id.includes(userId)) {
position = i
}
})
if (position !== false) {
return position
}
}

const levelclanId = (userId) => {
let position = false
Object.keys(guildas).forEach((i) => {
if (guildas[i].clan === userId) {
position = i
}
})
if (position !== false) {
return guildas[position].level
}
}

const attacksclanId = (userId) => {
let position = false
Object.keys(guildas).forEach((i) => {
if (guildas[i].clan === userId) {
position = i
}
})
if (position !== false) {
return guildas[position].attacks
}
}

const clanLevel = (userId, amount) => {
let position = false
Object.keys(guildas).forEach((i) => {
if (guildas[i].clan === userId) {
position = i
}
})
if (position !== false) {
guildas[position].level += amount
fs.writeFileSync(guildasdir, JSON.stringify(guildas, null, 2) + '\n')
}
}

const clanAttacks = (userId, amount) => {
let position = false
Object.keys(guildas).forEach((i) => {
if (guildas[i].clan === userId) {
position = i
}
})
if (position !== false) {
guildas[position].attacks += amount
fs.writeFileSync(guildasdir, JSON.stringify(guildas, null, 2) + '\n')
}
}

//=====================

const getSpam = (index) => {
let position = undefined
spam.forEach((o, i) => {
if (o.id == index){
position = i
}
})
return position
}
const isSpam = isGroup ? getSpam(sender) : false

//////////

const getFlode = (index) => {
let position = undefined
Flode.forEach((o, i) => {
if (o.id == index){
position = i
}
})
return position
}
const isFlode = isGroup ? getFlode(sender) : false

//=====================Dinheiro 💰💰💰

const bunda = JSON.parse(fs.readFileSync('./datab/jsons/Pets/petsch.json'))

const pptdir = JSON.parse(fs.readFileSync('./datab/jsons/Pptz/pptk.json'))

const dinheiro = JSON.parse(fs.readFileSync('./datab/jsons/dinheiro/dinheiro.json'))

const minerar = JSON.parse(fs.readFileSync('./datab/jsons/dinheiro/minerar.json'))

const isMinerar = minerar.includes(sender)

const roubar = JSON.parse(fs.readFileSync('./datab/jsons/dinheiro/roubar.json'))

const isRoubar = roubar.includes(sender)

const money = (sender, amount) => {
let position = false
Object.keys(dinheiro).forEach((i) => {
if (dinheiro[i].id === sender) {
position = i
}
})
if (position !== false) {
dinheiro[position].dinheiro += amount
fs.writeFileSync('./datab/jsons/dinheiro/dinheiro.json', JSON.stringify(dinheiro, null, 2))
}
}

const getMoneyId = (sender) => {
let position = false
Object.keys(dinheiro).forEach((i) => {
if (dinheiro[i].id === sender) {
position = i
}
})
if (position !== false) {
return dinheiro[position].id
}
}
const MoneyId = getMoneyId(sender)

const getMoney = (sender) => {
let position = false
Object.keys(dinheiro).forEach((i) => {
if (dinheiro[i].id === sender) {
position = i
}
})
if (position !== false) {
return dinheiro[position].dinheiro
}
}
const userId = getMoney(sender)

const PetUser = (sender) => {
let position = false
Object.keys(bunda).forEach((i) => {
if (bunda[i].id === sender) {
position = i
}
})
if (position !== false) {
return bunda[position].pet
}
}
const NomePet = PetUser(sender)

const getNumbe = (sender) => {
let position = false
Object.keys(bunda).forEach((i) => {
if (bunda[i].id === sender) {
position = i
}
})
if (position !== false) {
return bunda[position].id
}
}
const DonoPet = getNumbe(sender)

const getEstilo = (sender) => {
let position = false
Object.keys(bunda).forEach((i) => {
if (bunda[i].id === sender) {
position = i
}
})
if (position !== false) {
return bunda[position].tipo
}
}
const EstiloPet = getEstilo(sender)

const getLevelpet = (sender) => {
let position = false
Object.keys(bunda).forEach((i) => {
if (bunda[i].id === sender) {
position = i
}
})
if (position !== false) {
return bunda[position].level
}
}
const LevelPet = getLevelpet(sender)

const getSexopet = (sender) => {
let position = false
Object.keys(bunda).forEach((i) => {
if (bunda[i].id === sender) {
position = i
}
})
if (position !== false) {
return bunda[position].sexo
}
}
const SexoPett = getSexopet(sender)

const getHabilit = (sender) => {
let position = false
Object.keys(bunda).forEach((i) => {
if (bunda[i].id === sender) {
position = i
}
})
if (position !== false) {
return bunda[position].habilidade
}
}
const PetHabili = getHabilit(sender)

const getVidaPet = (sender) => {
let position = false
Object.keys(bunda).forEach((i) => {
if (bunda[i].id === sender) {
position = i
}
})
if (position !== false) {
return bunda[position].vida
}
}
const VidaDoPet = getVidaPet(sender)

const getStatusVida = (sender) => {
let position = false
Object.keys(bunda).forEach((i) => {
if (bunda[i].id === sender) {
position = i
}
})
if (position !== false) {
return bunda[position].statu
}
}
const StatusVivo = getStatusVida(sender)

const getPosition = (sender) => {
let position = false
Object.keys(bunda).forEach((i) => {
if (bunda[i].id === sender) {
position = i
}
})
if (position !== false) {
return position
}
}

const getPosiPet = (index) => {
let position = undefined
bunda.forEach((o, i) => {
if (o.id == index){
position = i
}
})
return position
}

function petAtack(tipo){
if (tipo == 'Água'){
var atack = ["Rajada de Água Suprema#70","Bomba de Água#80","Mini Gotinhas de Águas#90"]
} else if (tipo == 'Fogo'){
var atack = ["Canhão de Fogo#70","Rabada De Fogo#65", "Fogo Emo#90"]
} else if (tipo == 'Gelo'){
var atack = ["Frio Artico#70", "Golpe gelado#80", "Espinhos de Gelo#90"]
}
return atack[Math.floor(Math.random() * atack.length)]
}

function equipaPet(equipamento){
if (equipamento == 'Nenhum'){
var Petequipa = ["Não pode fazer nada a respeito#0", "Fica pensativo na batalha#0", "Comerça a contar as feridas#0"]
} else {
var Petequipa = "Pega seu equipamento e acerta um dano crítico#100"
}
return Petequipa[Math.floor(Math.random() * Petequipa.length)]
}

//=====(ADMS/DONO/ETC..CONST)========\\

const quoted = info.quoted ? info.quoted : info

const isBot = info.key.fromMe ? true : false

const SoDono = numerodono.includes(sender) || isBot

const DonoOficial = setting.numerodono.includes(sender) 

const isPremium = premium.includes(sender)

const isBotGroupAdmins = groupAdmins.includes(botNumber) || false

const isGroupAdmins = groupAdmins.includes(sender) || false 

//============(FUNÇÕES)============\\

const isWelkom2 = isGroup ? welkom2.includes(from) : true

const isVote = isGroup ? voting.includes(from) : false

const isNsfw =  isGroup ? nsfw.includes(from) : true

const isSimi = isGroup ? samih.includes(from) : false

const isSimi2 = isGroup ? samih2.includes(from) : false

const isBanned = ban.includes(sender)


//========(ANTIS-PROTEÇÕES)===========\\

const isAntifake = isGroup ? antifake.includes(from) : false

const isAntiCtt = isGroup ? antictt.includes(from) : false

const isAnticatalogo = isGroup ? anticatalogo.includes(from) : false

const isAntiFlood = isGroup ? antiflood.includes(from) : false	

const isnit = nit.includes(sender) 

const isAntiLinkHard = isGroup ? antilinkhard.includes(from) : false

const isJoguin = isGroup ? joguinhodavelhajs.includes(sender) : false

const isAntilinkgp = isGroup ? antilinkgp.includes(from) : false

const isAutofigu = isGroup ? autofigu.includes(from) : false

const isAntiAudio = isGroup ? antiaudio.includes(from) : false	
	
const isAntiImg = isGroup ? antiimg.includes(from) : false

const isAntiSticker = isGroup ? antisticker.includes(from) : false

const isAntiNotas = isGroup ? antinotas.includes(from) : false

const Antidoc = isGroup ? antidoc.includes(from) : false

const Antiloc = isGroup ? antiloc.includes(from) : false

const isAntiVid = isGroup ? antivid.includes(from) : false	

const ischyt = chyt.includes(sender)

const isAntiPv = (antipv.indexOf('Ativado') >= 0) ? true : false	

const isAnticall = (anticall.indexOf('Ativado') >= 0) ? true : false

const isPalavrao = isGroup ? palavrao.includes(from) : false	

const isViewOnce = (type == 'viewOnceMessage')

//====================================\\

function neroespera(index){
dens.sendMessage(from, { product: { productImage: fs.readFileSync('./logos/clan.jpg'), description: "youth dev's", title: index , productImageCount: 1, productId: "4939046979532720", currencyCode: "USD", priceAmount1000: "100" }, "businessOwnerJid": "559185841876@s.whatsapp.net" });
}

function egirls(index){
dens.sendMessage(from, { product: { productImage: fs.readFileSync('./logos/egirls.jpg'), description: "youth dev's", title: index , productImageCount: 1, productId: "4939046979532720", currencyCode: "USD", priceAmount1000: "100" }, "businessOwnerJid": "559185841876@s.whatsapp.net" });
}

enviar = {
espere: `${enviarmen}`,
successo: '️❬ ✔ ❭ Sucesso 🖤',
levelon: '❬ ✔ ❭ *leveling* *ativado*',
leveloff: '❬ X ❭  *leveling* *desativado*',
levelnoton: '❬ X ❭ *leveling não ativado*',
levelnol: '*error* 0 °-°',
error: {
stick: '*falhou, tente novamente ^_^*',
Iv: 'Link invalido ☹️'
},
msg: {
grupo: '[❗] Este comando só pode ser usado em grupos! ❌',
premium: '[❗] ESTE PEDIDO É SO PARA *USUÁRIOS PREMIUMS*',
mod: `[❗] ESTE PEDIDO É ESPECÍFICO PARA USUARIO MOD ${setting.NickDono}*`,
banido: '❌ Você foi banido de utilizar os comandos, entre em contato com o proprietário pra saber o porque ❌' ,
donosmt: '[❗] Este é um recurso especial para o proprietário ❌',
donosmt2: '[❗] Este é um recurso especial para o proprietário ❌',
adm: '[❗] Este comando só pode ser usado por administradores de grupo! ❌',
Badmin: ' [❗] Este comando só pode ser usado quando o bot se torna administrador! ❌',
}
}

//=======(CONSTS-FUNÇÕES)============\\

const isWelkom = isGroup ? welkom.includes(from) : false

const issupre = supre.includes(sender)

const isLevelingOn = isGroup ? _leveling.includes(from) : false

const isBanchat = isGroup ? bancht.includes(from) : false	

//========(VERIFICADO)=============\\

var blalogoofc = getBuffer(`${logo}`)
var selo = { key: {"fromMe": false,"participant":"0@s.whatsapp.net", "remoteJid": "555195227849@g.us" }, "message": {orderMessage: {itemCount: 999999,status: 4, thumbnail: fs.readFileSync(`./logos/logo2.jpg`) ,message: `Nome: ${pushname}\nComando: ${prefix + command}`,surface: 100, sellerJid: "0@s.whatsapp.net"}}}

//==================================\\

const reply = (texto) => {
dens.sendMessage(from, { text: texto }, {quoted: info})
}

const getGroup = async function(totalchat){
let grup = []
let a = []
let b = []
for (c of totalchat){
a.push(c.id)
}
for (d of a){
if (d && d.includes('g.us')){
b.push(d)
}
}
for (e of b){
let ingfo = await dens.groupMetadata(e)
grup.push(ingfo)
}
return grup
}  

const isUrl = (url) => {
if(linkfy.find(url)[0]) return true
return false
}	

const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(time2 > "00:00:00"){
var tempo = 'Boa madrugada'
                                        } 
if(time2 > "05:30:00"){
var tempo = 'Bom dia'
                                        }
if(time2 > "12:00:00"){
var tempo = 'Boa tarde'
                                        }
if(time2 > "19:00:00"){
var tempo = 'Boa noite'
                                        }


const getFileBuffer = async (mediakey, MediaType) => {
  
const stream = await downloadContentFromMessage(mediakey, MediaType)

let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

const sendSticker = (from, filename, info) => {
dens.sendMessage(from, {sticker: filename}, {quoted: info})
}

const sendImage = (ytb) => {
dens.sendMessage(from, {image: ytb}, {quoted:info})
}

const sendMess = (hehe, ytb) => {
dens.sendMessage(hehe, {text: ytb})
}

const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? dens.sendMessage(from, {text: teks.trim(), mentions: memberr}) : dens.sendMessage(from, {text: teks.trim(), mentions: memberr})
}
	
const costum = (pesan, tipe, target, target2) => {
dens.sendMessage(from, pesan, tipe, {quoted: {key: {fromMe: false, participant: `${target}`, ...(from ? {remoteJid: from}: {})}, message: {conversation: `${target2}` }}})
}

const groupIdWelcomed = []	
for(let obj of welcome_group) groupIdWelcomed.push(obj.id)

const groupIdBye = []
for(let obj of bye_group) groupIdBye.push(obj.id)

const isWelcomed = (groupIdWelcomed.indexOf(from) >= 0) ? true : false

const isByed = (groupIdBye.indexOf(from) >= 0) ? true : false

const groupIdWelcomed2 = []	

for(let obj of welcome_group2) groupIdWelcomed2.push(obj.id)

const groupIdBye2 = []

for(let obj of bye_group2) groupIdBye2.push(obj.id)

const isWelcomed2 = (groupIdWelcomed2.indexOf(from) >= 0) ? true : false

const isByed2 = (groupIdBye2.indexOf(from) >= 0) ? true : false	
	
//=====(FUNÇÃO-CHECAR-LIMIT)====\\

const checkLimit = (sender) => {
let found = false
for (let lmt of _limit) {
if (lmt.id === sender) {
let limitCounts = limitawal - lmt.limit
if (limitCounts <= 0) return dens.sendMessage(from,{text: `[👾] *LIMIT ESGOTADO*\n\n_Nota : para obter mais limit compre usando *${prefix}buylimit* ou suba de nível...`},{sendEphemeral: true, contextInfo: { forwardingScore: 50, isForwarded: true}, quoted: info})
dens.sendMessage(from, {text: jrpl.limitcount(limitCounts)}, { quoted : info})
found = true
}
}
if (found === false) {
let obj = { id: sender, limit: 0 }
_limit.push(obj)
fs.writeFileSync('./datab/grupos/limit.json', JSON.stringify(_limit))
dens.sendMessage(from, {text: jrpl.limitcount(limitCounts)}, { quoted : info})
}
} 
							
	//funtion limitado
	
const isLimit = (sender) =>{ 
if (issupre) {return false;}
let position = false
for (let i of _limit) {
if (i.id === sender) {
let limits = i.limit
if (limits >= limitawal ) {
position = true
dens.sendMessage(from, {text: jrpl.limitend(pushname)}, {sendEphemeral: true, contextInfo: { forwardingScore: 50, isForwarded: true}, quoted: info})
return true
} else {
_limit
position = true
return false
}
}
}
if (position === false) {
const obj = { id: sender, limit: 0 }
_limit.push(obj)
fs.writeFileSync('./datab/grupos/limit.json',JSON.stringify(_limit))
return false
}
}
	
const sendFileFromUrl = async (from, url, caption, info, men) => {
let mime = ''; 
let res = await axios.head(url)
mime = res.headers['content-type'] 
if (mime.split("/")[1] === "gif") { 
return dens.sendMessage(from, {video: await getBuffer(url),
caption: caption, gifPlayback: true, 
mentions: men ? men : []}, {quoted: info}) 
}
 
let type = mime.split("/")[0]+"Message" 
if(mime === "application/pdf"){ 
return dens.sendMessage(from, {document: await getBuffer(url), mimetype: 'application/pdf', 
caption: caption, mentions: men ? men : []}, {quoted: info}) 
} 

if(mime.split("/")[0] === "image"){ 
return dens.sendMessage(from, {image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: info}) 
}
if(mime.split("/")[0] === "video"){ 
return dens.sendMessage(from, {video: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: info}) 
} 
if(mime.split("/")[0] === "audio"){ 
return dens.sendMessage(from, {audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio'}, {quoted: info}) 
}
}
	
const sendMediaURL = async(to, url, text ="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
dens.sendMessage(to, {type: media, mimetype: mime, caption: text, contextInfo: {"mentionedJid": mids}}, { quoted: info})
fs.unlinkSync(filename)
});
}   

//////// ANTIFLODE BAN /////////=

if (Banspam.includes(from)){
if (isGroup && !isCmd && !info.key.fromMe && !SoDono && !isGroupAdmins && isSpam == undefined){
var nero = { id: sender, contador: 1 }
spam.push(nero)
setTimeout( () => {
spam.splice(isSpam, 1)
}, 9000)
} else if (isGroup && !isCmd && !info.key.fromMe && !SoDono && !isGroupAdmins && spam[isSpam].contador < 9){
spam[isSpam].contador += 1
} else if (isGroup && !isCmd && !info.key.fromMe && !SoDono && !isGroupAdmins && spam[isSpam].contador >= 9){
reply('olá você acaba de floda muitas msg consecutivamente, por esse motivo você será banido')
dens.groupParticipantsUpdate(from, [sender], 'remove')
}
} 

/******** ANTI NOME MODIFICADO ********/

function isDoubleByte(str) {
for (let i = 0, n = str.length; i < n; i++) {
if (str.charCodeAt(i) > 255) {
return true;
}
}
return false;
}

const convertBytes = function(bytes) {
const sizes = ["Bytes", "KB", "MB", "GB", "TB"]
if (bytes == 0) {
return "n/a"
}

const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
if (i == 0) {
return bytes + " " + sizes[i]
}

return (bytes / Math.pow(1024, i)).toFixed(1) + " " + sizes[i]
}

// ENVIAR BOTÃO COM TEXTO

const sendBtext = async (id, text1, desc1, but = [], vr) => {
buttonMessage = {
text: text1,
footer: desc1,
buttons: but,
headerType: 1
}
dens.sendMessage(id, buttonMessage, {quoted: vr})
}

// ENVIAR BOTÃO COM IMAGEM

const sendBimg = async (id, img1, text1, desc1, but = [], vr) => {
buttonMessage = {
image: {url: img1},
caption: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
dens.sendMessage(id, buttonMessage, {quoted: vr})
}

// PRA ENVIAR BOTÃO DE TEMPLATE

const sendBimgT = async (id, img1, text1, desc1, but = [], vr) => {
templateMessage = {
image: {url: img1},
caption: text1,
footer: desc1,
templateButtons: but,
}
dens.sendMessage(id, templateMessage, {quoted: vr})
}

// PRA ENVIAR BOTÃO DE TEMPLATE

const sendBvid = async (id, vid1, text1, desc1, but = [], vr) => {
templateMessage = {
video: {url: vid1},
caption: text1,
footer: desc1,
templateButtons: but,
}
dens.sendMessage(id, templateMessage, {quoted: vr})
}

const enviarfigu = async (figu, tag) => {
bla = fs.readFileSync(figu)
dens.sendMessage(from, {sticker: bla}, {quoted: info})
}

const enviarfiguUrl = async (link) => {
ranp = getRandom('.gif')
rano = getRandom('.webp')
ini_buffer = `${link}`
exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 320:320 ${rano}`, (err) => {
fs.unlinkSync(ranp)
buff = fs.readFileSync(rano)
dens.sendMessage(from, {sticker: buff}, { quoted: info})
fs.unlinkSync(rano)
})
}

/////

if(isAutofigu && isGroup) {
async function autofiguf() {
await setTimeout(async() => {    

if(budy.includes(`${prefix}sticker`) || budy.includes(`${prefix}s`) || budy.includes(`${prefix}stk`) || budy.includes(`${prefix}st`) || budy.includes(`${prefix}fsticker`) || budy.includes(`${prefix}f`) || budy.includes(`${prefix}fstiker`)) return

if(type === "videoMessage") {
if ((isMedia && info.message.videoMessage.seconds < 10)){  
rane = getRandom('.'+await getExtension(info.message.videoMessage.mimetype))
buffimg = await getFileBuffer(info.message.videoMessage, 'video')
fs.writeFileSync(rane, buffimg)
const media = rane
rano = getRandom('.webp')
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('bot', 'ale')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Falha na conversão de ${tipe} para sticker`)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
dens.sendMessage(from, {sticker: buffer}, {quoted: selo})
fs.unlinkSync(rano)
})
} 
}

if(type === "imageMessage") {
rane = getRandom('.'+await getExtension(info.message.imageMessage.mimetype))
buffimg = await getFileBuffer(info.message.imageMessage, 'image')
fs.writeFileSync(rane, buffimg)
const media = rane
rano = getRandom('.webp')
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
dens.sendMessage(from, {sticker: buffer}, {quoted: selo})
fs.unlinkSync(rano)
})  
}
}, 1000)
}
autofiguf().catch(e => {
console.log(e)
})
}

//////

var nmrdnofc1 = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "")

if(isGroup && fs.existsSync(`./func/afk/afk-@${nmrdnofc1}.json`)) {
if(budy.includes(`@${nmrdnofc1}`)) {
const tabelin = JSON.parse(fs.readFileSync(`./func/afk/afk-@${nmrdnofc1}.json`));  
txt = `- Olá, o ${NickDono} Está ausente.\n\n - Desde: ${tabelin.Ausente_Desde}\n\n- 😇 Mensagem de ausência : ${tabelin.Motivo_Da_Ausência}`

dens.sendMessage(from, {text: txt}, {quoted: info})
}
}

if(isGroup && fs.existsSync(`./func/sairgp/sairgp-${from}.json`)) {

const sairalg = JSON.parse(fs.readFileSync(`./func/sairgp/sairgp-${from}.json`)); 
datinhaofc = moment.tz('America/Sao_Paulo').format('DD/MM/YY');
if(datinhaofc >= sairalg.Data_de_sair) {
group = await dens.groupMetadata(from)
member = group['participants']
mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
options = {
text: `Atenção membros, aqui quem está falando é o bot com a mensagem automática, sairei do grupo por o tempo que foi realizado no dia que alugou, completou 30 dias....`,
mentions: mem,
quoted: info
}
dens.sendMessage(from, options)
exec(`cd func && cd sairgp && rm sairgp-${from}.json`)
setTimeout(async() => {
reply(`${prefix}sairgp`)
}, 5000)
}
}

if(fs.existsSync("baileys_store_multi.json")) {
statsObj = fs.statSync('./baileys_store_multi.json')  

if(convertBytes(statsObj.size) >= "20 MB") {
exec("rm baileys_store_multi.json")
}
}
 
//==================//BAN CHATS/GRUPOS

if (isBanchat && !isGroupAdmins && !SoDono){
if (!isGroupAdmins && !SoDono) return
if (budy.toLowerCase().startsWith('unbangp')){
if (isCmd && !isBanchat && !isGroupAdmins) return reply(`Este grupo esta banido, ou seja não estou ouvindo ninguém`)
let lfd = bancht.indexOf(from)
bancht.splice(lfd, 1)
fs.writeFileSync('./datab/grupos/banchat.json', JSON.stringify(bancht))
reply(`Grupo desbanido...`)
}
}

//====FUNCIONALIDADE PATENTE====\\

const nivelAtual = getLevelingLevel(sender)
var patt = 'Bronze I🥉'
if (nivelAtual === 1) {patt = 'Bronze  I🥉' } else if (nivelAtual === 2) {patt = 'Bronze II🥉'} else if (nivelAtual === 3) {patt = 'Bronze  III🥉'} else if (nivelAtual === 4) {patt = 'Bronze  IV🥉'} else if (nivelAtual === 5) {patt = 'Bronze  V🥉'} else if (nivelAtual === 6) {patt = 'Prata I🥈'} else if (nivelAtual === 7) {patt = 'Prata II🥈'} else if (nivelAtual === 8) {patt = 'Prata III🥈'} else if (nivelAtual === 9) {patt = 'Prata IV🥈'} else if (nivelAtual === 10) {patt = 'Prata V🥈'} else if (nivelAtual === 11) {patt = 'Ouro I🥇'} else if (nivelAtual === 12) {patt = 'Ouro II🥇'} else if (nivelAtual === 13) {patt = 'Ouro III🥇'} else if (nivelAtual === 14) {patt = 'Ouro IV🥇'} else if (nivelAtual === 15) {patt = 'Ouro V🥇'} else if (nivelAtual === 16) {patt = 'Campeão I🏆'} else if (nivelAtual === 17) {patt = 'Campeão II🏆'} else if (nivelAtual === 18) {patt = 'Campeão III🏆'} else if (nivelAtual === 19) {patt = 'Campeão IV🏆'} else if (nivelAtual === 20) {patt = 'Campeão V🏆'} else if (nivelAtual === 21) {patt = 'Diamante I 💎'} else if (nivelAtual === 22) {patt = 'Diamante II 💎'} else if (nivelAtual === 23) {patt = 'Diamante III 💎'} else if (nivelAtual === 24) {patt = 'Diamante IV 💎'} else if (nivelAtual === 25) {patt = 'Diamante V 💎'} else if (nivelAtual === 26) {patt = 'Mestre I 🐂'} else if (nivelAtual === 27) {patt = 'Mestre II 🐂'} else if (nivelAtual === 28) {patt = 'Mestre III 🐂'} else if (nivelAtual === 29) {patt = 'Mestre IV 🐂'} else if (nivelAtual === 30) {patt = 'Mestre V 🐂'} else if (nivelAtual === 31) {patt = 'Mítico I 🔮'} else if (nivelAtual === 32) {patt = 'Mítico II 🔮'} else if (nivelAtual === 33) {patt = 'Mítico III 🔮'} else if (nivelAtual === 34) {patt = 'Mítico IV 🔮'} else if (nivelAtual === 35) {patt = 'Mítico V 🔮'} else if (nivelAtual === 36) {patt = 'God I🕴'} else if (nivelAtual === 37) {patt = 'God II🕴'} else if (nivelAtual === 38) {patt = 'God III🕴'} else if (nivelAtual === 39) {patt = 'God IV🕴'} else if (nivelAtual === 40) {patt = 'God V🕴'} else if (nivelAtual > 41) {patt = '🛐Grande Mestre🛐'}

//=======(FUNÇÃO DE LEVEL)==========\\

if (isGroup && isLevelingOn) {
const currentLevel = getLevelingLevel(sender)
const checkId = getLevelingId(sender)
try {
if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
const amountXp = Math.floor(Math.random() * 10) + 500
const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
const getLevel = getLevelingLevel(sender)
addLevelingXp(sender, amountXp)
if (requiredXp <= getLevelingXp(sender)) {
addLevelingLevel(sender, 1)
bla = fs.readFileSync('./audios/level.mp3')
dens.sendMessage(from, {audio: bla, mimetype: 'audio/mp4', ptt:true}, {quoted:info})
gzx = fs.readFileSync('./logos/logo2.jpg')
rafa = `  
╭──────────
│    ◪ LEVEL UP ◪
┝──────────
│❒ 
│〽️NUMERO: ${sender.split("@")[0]}.               
│🌐PATENTE*: ${patt}
│♻️XP: ${getLevelingXp(sender)}
│📉LEVEL: ${getLevel} -> ${getLevelingLevel(sender)}
│❒
╰───╼╼╼╼╼╼➢   `   
await dens.sendMessage(from, {image: gzx, caption: rafa})
}
} catch (err) {
console.error(err)
}
}

//===================================\\

const sendStickerFromUrl = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './sticker' + names + '.png', async function () {
console.log('enviando sticker');
let filess = './sticker' + names + '.png'
let asw = './sticker' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
dens.sendMessage(to, {sticker: media}, {sendEphemeral: true, contextInfo: { forwardingScore: 50, isForwarded: true}, quoted: info})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
}

//JOGO DO ANAGRAM
		
if(isGroup && fs.existsSync(`./armor/anagrama-${from}.json`)){
let dataAnagrama = JSON.parse(fs.readFileSync(`./armor/anagrama-${from}.json`))
if(budy.slice(0,4).toUpperCase() == dataAnagrama.original.slice(0,4).toUpperCase() && budy.toUpperCase() != dataAnagrama.original) return reply('está perto')
xp = Math.floor(Math.random() * 14) + 3000
if(budy.toUpperCase() == dataAnagrama.original) { dens.sendMessage(from, {text: `parabéns ${pushname} 🥳 você ganhou o jogo\nPalavra : ${dataAnagrama.original}\nIniciando o proximo jogo em 5 segundos...`}, {"mentionedJid": [sender]}), fs.unlinkSync(`./armor/anagrama-${from}.json`)		
addLevelingXp(sender, xp)
recompensa = `🎉🎉RECOMPENSA🎉🎉\nVocê ganhou ${xp} em *xp*`
reply(recompensa)
		setTimeout(async() => {
fs.writeFileSync(`./armor/anagrama-${from}.json`, `${JSON.stringify(palavrasANA[Math.floor(Math.random() * palavrasANA.length)])}`)
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./armor/anagrama-${from}.json`))
dens.sendMessage(from, {text:`
╭─────≽「 👾 ANAGRAMA 👾 」
│➽ DESCUBRA A PALAVRA
│➽ ANAGRAMA: ${dataAnagrama2.embaralhada}
│➽ DICA: ${dataAnagrama2.dica}
╰────────────────────────
`}) 
}, 5000)
}}

if(isGroup && fs.existsSync(`./armor/adivinha-${from}.json`)){
let dataAdivinha = JSON.parse(fs.readFileSync(`./armor/adivinha-${from}.json`))
if(budy.slice(0,4).toUpperCase() == dataAdivinha.resposta.slice(0,4).toUpperCase() && budy.toUpperCase() != dataAdivinha.resposta) return reply('está perto')
xp = Math.floor(Math.random() * 14) + 3000
if(budy.toUpperCase() == dataAdivinha.resposta) { dens.sendMessage(from, {text: `parabéns ${pushname} 🥳 você ganhou o jogo\nresposta: ${dataAdivinha.resposta}\nIniciando o proximo jogo em 5 segundos...`}, {"mentionedJid": [sender]}), fs.unlinkSync(`./armor/adivinha-${from}.json`)		
addLevelingXp(sender, xp)
recompensa = `🎉🎉RECOMPENSA🎉🎉\nVocê ganhou ${xp} em *xp*`
reply(recompensa)
		setTimeout(async() => {
fs.writeFileSync(`./armor/adivinha-${from}.json`, `${JSON.stringify(palavraA[Math.floor(Math.random() * palavraA.length)])}`)
let dataAdivinha2 = JSON.parse(fs.readFileSync(`./armor/adivinha-${from}.json`))
dens.sendMessage(from, {text:`
╭─────≽「 👾 ADIVINHAR 👾 」
│➽ VOCÊ CONSEGUE ADIVINHAR?
│➽ ${dataAdivinha2.pergunta}
│➽ DICA: ${dataAdivinha2.dica1}
╰────────────────────────
`}) 
}, 5000)
}}

//JOGO QUIZ
		
if(isGroup && fs.existsSync(`./armor/quizanim-${from}.json`)){
let dataAnagramaa = JSON.parse(fs.readFileSync(`./armor/quizanim-${from}.json`))
if(budy.slice(0,4).toUpperCase() == dataAnagramaa.original.slice(0,4).toUpperCase() && budy.toUpperCase() != dataAnagramaa.original) return reply('está perto')
if(budy.toUpperCase() == dataAnagramaa.original) { 
dens.sendMessage(from,{text: `Parabéns ${pushname} você acertou\n${dataAnagramaa.original}\nProximo em 5 segundos...`}, {"mentionedJid": [sender]}), fs.unlinkSync(`./armor/quizanim-${from}.json`)		
setTimeout(async() => {
fs.writeFileSync(`./armor/quizanim-${from}.json`, `${JSON.stringify(quizanimais[Math.floor(Math.random() * quizanimais.length)])}`)
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./armor/quizanim-${from}.json`))
imagemtexto =`                             「❓Quiz❓」`
wew = await getBuffer(`${dataAnagrama2.foto}`)   
await dens.sendMessage(from, {image: wew, caption: imagemtexto, thumbnail: wew}, {quoted: selo})
}, 5000)
}
}

const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms))}

//======(isQuoted/consts)==========\\

const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isProduct = type == 'productMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage')
typeMessage = body.substr(0, 50).replace(/\n/g, '')
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isProduct) typeMessage = "Product"

const isQuotedMsg = type === 'extendedTextMessage' && content.includes('textMessage')

const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')

const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')

const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')

const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')

const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')

const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')

const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')
             
/////////// Termux ///////////

if(isGroup){
const checar = getComandos(from)
if(checar === undefined) addComandosId(from)
}
if(isGroup && isCmd && !SoDono && !isnit && getComandoBlock(from).includes(command))return reply('comando blockeado')

//Cmds Pv 🍒

if (!isGroup && isCmd) console.log(color.green(` ┏─━━━━《PV》━━━━━━\n`), color.green(`┃Usuario:`), color.yellow(`${pushname}\n`), color.green(`┃Número:`), color.blue(`${sender.split('@')[0]}\n`), color.green(`┃Comando:`), color.magenta(`${prefix + command}\n`), color.green(`┃Destinario:`), color.cyan(`Pv\n`), color.green(`┃Data:`), color.white(`${time}\n`), color.green(`┗─━━━━《PV》━━━━━━\n\n`))

if (!isGroup && !isCmd && !info.key.fromMe) console.log(color.green(` ┏─━━━━《PV》━━━━━━\n`), color.green(`┃Usuario:`), color.yellow (`${pushname}\n`), color.green(`┃Número:`), color.blue(`${sender.split('@')[0]}\n`), color.green(`┃Comando:`), color.magenta(`Mensagem\n`), color.green(`┃Destinario:`), color.cyan(`Pv\n`), color.green(`┃Data:`), color.white(`${time}\n`), color.green(`┗─━━━━《PV》━━━━━━\n\n`))

//Cmds Grupo 🍒

if (isCmd && isGroup) console.log(color.green(` ┏─━━━━《GP》━━━━━━\n`), color.green(`┃Usuario:`), color.yellow(`${pushname}\n`), color.green
(`┃Número:`), color.blue(`${sender.split('@')[0]}\n`,), color.green(`┃Comando:`), color.magenta(`${prefix + command}\n`), color.green(`┃Destinario:`), color.cyan(`${groupName}\n`), color.green(`┃Data:`), color.white(`${time}\n`), color.green(`┗─━━━━《GP》━━━━━━\n\n`))

if (!isCmd && isGroup && !info.key.fromMe) console.log(color.green(` ┏─━━━━《GP》━━━━━━\n`), color.green(`┃Usuario:`), color.yellow (`${pushname}\n`), color.green(`┃Número:`), color.blue(`${sender.split('@')[0]}\n`), color.green(`┃Comando:`), color.magenta(`Mensagem\n`), color.green(`┃Destinario:`), color.cyan(`${groupName}\n`), color.green(`┃Data:`), color.white(`${time}\n`), color.green(`┗─━━━━《GP》━━━━━━\n\n`))

///////_FUNÇÕES DO JOGO DA VELHA_//////

async function joguinhodavelha() {
if(joguinhodavelhajs2.includes(from) || joguinhodavelhajs.includes(sender)) {
const cmde = budy.toLowerCase().split(" ")[0] || "";
let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
if (fs.existsSync(`./armor/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
if (budy == "Cex") return reply("why");
if (
budy.toLowerCase() == "s" ||
budy.toLowerCase() == "sim" ||
budy.toLowerCase() == "ok"
) {
if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if (boardnow.status)
return reply(`O jogo já começou antes!`);
const matrix = boardnow._matrix;
boardnow.status = true;
fs.writeFileSync(`./armor/tictactoe/db/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const chatAccept = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
Sua vez... : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}
${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
dens.sendMessage(from, {text: chatAccept}, {quoted: info,
contextInfo: {
mentionedJid: [
boardnow.X + "@s.whatsapp.net",
boardnow.O + "@s.whatsapp.net", 
],
},
});
}
} else if (
budy.toLowerCase() == "n" ||
budy.toLowerCase() == "não" ||
budy.toLowerCase() == "no"
) {
if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if (boardnow.status)
return reply(`O jogo já começou!`);
fs.unlinkSync(`./armor/tictactoe/db/${from}.json`);
 dens.sendMessage(from, {text:
 `@${boardnow.X} *_Infelizmente seu oponente não aceitou o desafio ❌😕_*`}, {quoted: info,
 contextInfo: {
 mentionedJid: [boardnow.X + "@s.whatsapp.net"],
},
}
);
joguinhodavelhajs.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
}
}
}

if (arrNum.includes(cmde)) {
const boardnow = setGame(`${from}`);
if (!boardnow.status) return reply(`Parece que seu oponente não aceitou o desafio ainda...`)
if (
(boardnow.turn == "X" ? boardnow.X : boardnow.O) !=
     
sender.replace("@s.whatsapp.net", "")
)
return;
const moving = validmove(Number(budy), `${from}`);
const matrix = moving._matrix;
if (moving.isWin) {
if (moving.winner == "SERI") {
const chatEqual = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
Jogo termina empatado 😐
`;
reply(chatEqual);
fs.unlinkSync(`./armor/tictactoe/db/${from}.json`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs)) 
joguinhodavelhajs2.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
return;
}
const abt = Math.ceil(Math.random() + 4000)
const winnerJID = moving.winner == "O" ? moving.O : moving.X;
const looseJID = moving.winner == "O" ? moving.X : moving.O;
const limWin = Math.floor(Math.random() * 1) + 10;
const limLoose = Math.floor(Math.random() * 1) + 5;
const chatWon = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
Vencido por @${winnerJID} 😎👑
`;
addLevelingXp(winnerJID + "@s.whatsapp.net", abt)
dens.sendMessage(from, {text: chatWon}, {quoted: info,
contextInfo: {
mentionedJid: [
moving.winner == "O" ?
moving.O + "@s.whatsapp.net" :
moving.X + "@s.whatsapp.net",
],
},
});
setTimeout( () => {
if (fs.existsSync("./armor/tictactoe/db/" + from + ".json")) {
 fs.unlinkSync("./armor/tictactoe/db/" + from + ".json");
 reply(`*🕹️JOGO DA VELHA RESETADO...🕹️*`);
 } else {
console.log(color(time, "red"), color("[ ESPIRADO ]", "magenta"), color('Jogo da velha espirado', "red"));
 }
joguinhodavelhajs.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
}, 300000) //5 minutos
reply(`_*🥳Parabéns @${winnerJID} Você ganhou "${abt}" em xp por ter ganhado o jogo da velha🎉...*_`)      
fs.unlinkSync(`./armor/tictactoe/db/${from}.json`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs)) 
joguinhodavelhajs2.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
} else {
const chatMove = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
❌ : @${moving.X}
⭕ : @${moving.O}
Sua vez : @${moving.turn == "X" ? moving.X : moving.O}
${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
dens.sendMessage(from, {text: chatMove}, {quoted: info,
contextInfo: {
mentionedJid: [
moving.X + "@s.whatsapp.net",
moving.O + "@s.whatsapp.net",
],
},
});
}
} 
} 
}

//=================================\\

async function AntilinkHardF() {
if(isUrl(body) && isAntiLinkHard && isGroupAdmins && isBotGroupAdmins) {
linkgpp = await dens.groupInviteCode(from)
if(!isUrl(body)) return 
if(budy.match(`${linkgpp}`)) return 
if(isBot) return 
reply('*Link detectado, porém usuário é admin*')
}

if(isUrl(body) && isAntiLinkHard && !isGroupAdmins && isBotGroupAdmins) {
linkgpp = await dens.groupInviteCode(from)
if(budy.match(`${linkgpp}`)) return reply('Link do nosso grupo, não irei remover.. ')  
if(!isUrl(body)) return 
reply('*Link detectado, punindo usuário...*')
dens.groupParticipantsUpdate(from, [sender], 'remove')
}
} 
AntilinkHardF()
joguinhodavelha()

if(isUrl(body) && isAntilinkgp && isGroup && isBotGroupAdmins) {
if(!isAntilinkgp) return
if(!isUrl(body)) return 
if(isGroupAdmins) return reply("Você é adm, não removerei você..") 
if(budy.includes("chat.whatsapp.com/")){
if(!budy.includes("chat.whatsapp.com/")) return
if(isBot) return 
linkgpp = await dens.groupInviteCode(from)
if(budy.match(`${linkgpp}`)) return reply('Link do nosso grupo, não irei remover.. ')  
reply('*Link de grupo detectado, punindo usuário...*')
dens.groupParticipantsUpdate(from, [sender], 'remove')
}
}

//======(CONTADOR-DE-MENSAGENS)======\\

const groupIdscount = []
const numbersIds = []
for(let obj of countMessage) {
groupIdscount.push(obj.groupId)
}
if(isGroup && groupIdscount.indexOf(from) >= 0) {
var ind = groupIdscount.indexOf(from)
for(let obj of countMessage[ind].numbers) {numbersIds.push(obj.id)}
if(numbersIds.indexOf(sender) >=0) {
var indnum = numbersIds.indexOf(sender)
countMessage[ind].numbers[indnum].messages += 1
countMessage[ind].numbers[indnum].cmd_messages += isCmd ? 1 : 0
fs.writeFileSync('./datab/grupos/countmsg.json', JSON.stringify(countMessage, null, 2)+ '\n')
} else {
const messages = 1
const cmd_messages = isCmd ? 1 : 0
countMessage[ind].numbers.push({
id: sender,
messages: messages,
cmd_messages: cmd_messages
})
fs.writeFileSync('./datab/grupos/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}
} else if(isGroup) {
countMessage.push({
groupId: from,
numbers: [{
id: sender,
messages: 2,
cmd_messages: isCmd ? 1 : 0
}]
})
fs.writeFileSync('./datab/grupos/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}

//============(AUTO-BAN)=============\\

const dbids = []
for(i=0;i<adeuscara.length;++i) {
dbids.push(adeuscara[i].groupId)
}
const isAdeusCara = (isGroup && dbids.indexOf(from) >= 0) ? true : false

//======(ANTI-IMAGEM)========\\

if(isAntiImg && isBotGroupAdmins && type == 'imageMessage') {
if (info.key.fromMe) return
if(isGroupAdmins) return dens.sendMessage(from, {text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: info})
await dens.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: info})
setTimeout(async function () {
dens.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

//======(ANTI-STICKER)========\\

if(isAntiSticker && isBotGroupAdmins && type == 'stickerMessage') {
if (info.key.fromMe) return
if(isGroupAdmins) return dens.sendMessage(from, {text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: info})
await dens.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: info})
setTimeout(async function () {
dens.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

if(Antidoc && isBotGroupAdmins && type == 'documentMessage') {
if (info.key.fromMe) return
if(isGroupAdmins) return dens.sendMessage(from, {text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: info})
await dens.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: info})
setTimeout(async function () {
dens.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

// ANTI NOTAS FAKES 

if(isAntiNotas && bady.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi) && isBotGroupAdmins) {
if(type == 'stickerMessage') return
let verificar = bady.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi)
if (verificar && bady.length < 100) return  
await dens.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: info})
setTimeout(async function () {
dens.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

//======(ANTI-VIDEO)========\\

if(isAntiVid && isBotGroupAdmins && type == 'videoMessage') {
if(isGroupAdmins) return dens.sendMessage(from,{text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: info})
await dens.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: info})
setTimeout(async function () {
dens.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

//======(ANTI-AUDIO)=======\\

if(isAntiAudio && isBotGroupAdmins && type == 'audioMessage') {
if(isGroupAdmins) return dens.sendMessage(from, {text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: info})
await dens.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: info})
setTimeout(async function () {
dens.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

//========(ANTI-PV-QUE-BLOQUEIA)======\\

if(isAntiPv && !isGroup && !SoDono && !isnit && !isPremium){ 
	reply('*Antipv ativado, você será bloqueado!*\n*Contate o criador*')
delay(4000)
dens.updateBlockStatus(sender, 'block')
return
}

//========== ANTI SPAM CMD ==========\\

if (isGroup && isCmd && !info.key.fromMe && !SoDono && !isGroupAdmins && isFlode == undefined){
var nero = { id: sender, contador: 1 }
Flode.push(nero)
setTimeout( () => {
Flode.splice(isFlode, 1)
}, 9000)
} else if (isGroup && isCmd && !info.key.fromMe && !SoDono && !isGroupAdmins && Flode[isFlode].contador < 4){
Flode[isFlode].contador += 1
console.log(Flode)
} else if (isGroup && isCmd && !info.key.fromMe && !SoDono && !isGroupAdmins && Flode[isFlode].contador >= 4){
await dens.groupSettingUpdate(from, 'announcement')
reply(`olá você acaba de floda muitos comandos consecutivamente, por esse motivo você será banido`)
dens.groupParticipantsUpdate(from, [sender], 'remove')
await dens.groupSettingUpdate(from, 'not_announcement')
reply(`GRUPO ABERTO, USE COM SABEDORIA, NAO SENDO DEMENTE.`)
}


//======(ANTIPV-QUE-SÓ-FALA)=======\\

if(!isGroup && !isPremium && !SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe && banChats === true) return reply(`Olá, sou uma inteligência artificial, programado(a) para realizar ações, por adms e o dono, se você está enviando mensagem, provavelmente você não sabe disso, eu removo diariamente pessoas por enviar links e muito mais..`)
const atibot = info.isBaileys
if (atibot === true) return 

// ANTI_LIGAR \\

if(isAnticall) {
dens.ws.on('CB:call', async (B) => {
if (B.content[0].tag == 'offer') {
dens.sendMessage(B.content[0].attrs['call-creator'], { text: "Não pode ligar para o bot, você será bloqueado.." }).then(() => { 
delay(4000)
dens.updateBlockStatus(B.content[0].attrs['call-creator'], "block") })
}
})
}

//==SISTEMA DE VOTAÇÃO==\\

if(isGroup) {
if (budy.toLowerCase() === 'voto'){
let vote = JSON.parse(fs.readFileSync(`./armor/${from}.json`))
let _votes = JSON.parse(fs.readFileSync(`./armor/vote/${from}.json`))  
let fil = vote.map(v => v.participant)
let id_vote = sender ? sender : '0@s.whatsapp.net'
if(fil.includes(id_vote)) {
return mentions('@'+sender.split('@')[0]+' não é possivel votar duas vezes', fil, true)
} else {
vote.push({
participant: id_vote,
voting: '✅'
})
fs.writeFileSync(`./armor/${from}.json`,JSON.stringify(vote))
let _p = []
let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*para*: ${_votes[0].reason}\n*total Votos* : ${vote.length} Votos\n*Duração* : ${_votes[0].durasi} minutos\n\n` 
for(let i = 0; i < vote.length; i++) {
_vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
_p.push(vote[i].participant)
        }  
_p.push(_votes[0].votes)
mentions(_vote,_p,true)   
}
} else if (budy.toLowerCase() === 'devoto'){
const vote = JSON.parse(fs.readFileSync(`./armor/${from}.json`))
let _votes = JSON.parse(fs.readFileSync(`./armor/vote/${from}.json`))  
let fil = vote.map(v => v.participant)
let id_vote = sender ? sender : '0@s.whatsapp.net'
if(fil.includes(id_vote)) {
return mentions('@'+sender.split('@')[0]+' não é possivel anular um voto', fil, true)
} else {
vote.push({
participant: id_vote,
voting: '❌'
})
fs.writeFileSync(`./armor/${from}.json`,JSON.stringify(vote))
let _p = []
let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*para*: ${_votes[0].reason}\n*total Votos* : ${vote.length} Vote\n*duração* : ${_votes[0].durasi} minutos\n\n` 
for(let i = 0; i < vote.length; i++) {
_vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
_p.push(vote[i].participant)
}  
_p.push(_votes[0].votes)
mentions(_vote,_p,true)   
}
}
}

//_CONTAGEM DE COMANDOS

if (isCmd) cmdadd()
            
if (isBanned) return
BannedExpired(ban)

switch (figura) {
  
}

const horra = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
const IsLevel = getLevelingLevel(sender)
const IsXp = getLevelingXp(sender)
const numbdn = setting.numerodono 
const menutop = menu(prefix, NomeDoBot, pushname, numbdn, date, horra, IsLevel, IsXp, isAntiLinkHard, isWelkom, isAntifake)

//INICIO DE COMANDO DE PREFIXO

switch(command) {
  
  
//=========(-MENUS-DE-CMDS-)========\\


case 'cu': {
const bundao = ["https://youtu.be/yigBhNBMoeQ",
"https://youtu.be/D5KvU8Hw-n8",
"https://youtu.be/hAh3Ts5YdB0",
"https://youtu.be/ErOahjOYDx8"]
bundak = bundao[Math.floor(Math.random() * bundao.length)]
hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
bla = await getBuffer('https://telegra.ph/file/4a10f6f0ae553daac1302.jpg')
let buttons = [
{buttonId: `${prefix}dono`, buttonText: {displayText: '⭔ DONO ⭔'}, type: 1},
{buttonId: `${prefix}ping`, buttonText: {displayText: '⭔ PING ⭔'}, type: 1},
{buttonId: `${prefix}lista`, buttonText: {displayText: '⭔ MENU DE LISTA ⭔'}, type: 2}
]
destiny = `
*Olá, irei le explicar rapidamente o básico dos meus comandos*

❑ *Como utilizar meus comandos?*

Antes de utilizar qualquer comando, sempre coloque o ${prefix}

❑ *Exemplo a ser usado:*

Ponto Sticker > ${prefix}menu

❑ *Nunca coloque depois do comando.*

O prefixo sempre deve estar antes do comando e não depois, o mesmo é válido para todos os comandos, sem exclusão de nenhum.

❑ *Exemplo a seguir:*

✅ ${prefix}sticker > Correto

❎ Sticker${prefix} > Incorreto

❑ *Prefixo usado.*

Irei responder unicamente ao meu prefix, meu prefix é '${prefix}'.

❑ *Meu menu:*

Veja mais comando que tenho disponível utilizando *${prefix}menu*

❑ *Meu criador:*

Receba o seu contato digitando este comando *( ${prefix}creditos )* no chat.

❑ *Duvidas?:*

Peça ajuda a alguem no chat caso tenha ficado com duvidas, até logo.`
let buttonMessage = {
document: fs.readFileSync('./logos/cheems.xlsx'),
jpegThumbnail: bla,
fileLength: 99999999999999,
caption: destiny,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: ``,
body: `${NomeDoBot}`,
showAdAttribution: true,
mediaType:2,
thumbnail: bla,
mediaUrl: bundao,
}}
}
dens.sendMessage(from,
buttonMessage,
{quoted:selo}
)
}
break

case 'menu': {
bunda = [
"https://youtu.be/yigBhNBMoeQ",
"https://youtu.be/D5KvU8Hw-n8",
"https://youtu.be/hAh3Ts5YdB0",
"https://youtu.be/ErOahjOYDx8"]
logome = [
"https://telegra.ph/file/17a32a0ae60e2a9bc7222.jpg",
"https://telegra.ph/file/ced5e676b3b74fc5e74d2.jpg",
"https://telegra.ph/file/45a1bb15f62ade29e4d0a.jpg",
"https://telegra.ph/file/d798dba75544d9737ff38.jpg",
"https://telegra.ph/file/c7c7d1fbae0a597074c11.jpg",
"https://telegra.ph/file/4a10f6f0ae553daac1302.jpg"]
bundak = bunda[Math.floor(Math.random() * bunda.length)]
menulogo = logome[Math.floor(Math.random() * logome.length)]
hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
logomenub = await getBuffer(menulogo)
let buttons = [
{buttonId: `${prefix}dono`, buttonText: {displayText: '⭔ DONO ⭔'}, type: 1},
{buttonId: `${prefix}ping`, buttonText: {displayText: '⭔ PING ⭔'}, type: 1},
{buttonId: `${prefix}lista`, buttonText: {displayText: '⭔ MENU DE LISTA ⭔'}, type: 2}
]
let buttonMessage = {
document: fs.readFileSync('./logos/cheems.xlsx'),
jpegThumbnail: logomenub,
fileLength: 99999999999999,
caption: menu(prefix),
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: ``,
body: `${NomeDoBot}`,
showAdAttribution: true,
mediaType:2,
thumbnail: logomenub,
sourceUrl: `${bundak}`,
mediaUrl: `${bundak}`,
}}
}
dens.sendMessage(from,
buttonMessage,
{quoted:selo}
)
}
break

case 'menuadms':
case 'menuadm': {
bunda = [
"https://youtu.be/yigBhNBMoeQ",
"https://youtu.be/D5KvU8Hw-n8",
"https://youtu.be/hAh3Ts5YdB0",
"https://youtu.be/ErOahjOYDx8"]
logome = [
"https://telegra.ph/file/17a32a0ae60e2a9bc7222.jpg",
"https://telegra.ph/file/ced5e676b3b74fc5e74d2.jpg",
"https://telegra.ph/file/45a1bb15f62ade29e4d0a.jpg",
"https://telegra.ph/file/d798dba75544d9737ff38.jpg",
"https://telegra.ph/file/c7c7d1fbae0a597074c11.jpg",
"https://telegra.ph/file/4a10f6f0ae553daac1302.jpg"]
bundak = bunda[Math.floor(Math.random() * bunda.length)]
menulogo = logome[Math.floor(Math.random() * logome.length)]
hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
logomenub = await getBuffer(menulogo)
let buttons = [
{buttonId: `${prefix}menujogos`, buttonText: {displayText: `[${EmojeG(emojos)}] 𝐉𝐎𝐆𝐎𝐒 [${EmojeG(emojos)}]` }, type: 1},
{buttonId: `${prefix}menuanimes`, buttonText: {displayText: `[${EmojeG(emojos)}] 𝐀𝐍𝐈𝐌𝐄𝐒 [${EmojeG(emojos)}]` }, type: 2}
]
let buttonMessage = {
document: fs.readFileSync('./logos/cheems.xlsx'),
jpegThumbnail: logomenub,
fileLength: 99999999999999,
caption: adms(prefix),
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: ``,
body: `${NomeDoBot}`,
showAdAttribution: true,
mediaType:2,
thumbnail: logomenub,
sourceUrl: `${bundak}`,
mediaUrl: `${bundak}`,
}}
}
dens.sendMessage(from,
buttonMessage,
{quoted:selo}
)
}
break

case 'menuanimes':
case 'animes': {
bunda = [
"https://youtu.be/yigBhNBMoeQ",
"https://youtu.be/D5KvU8Hw-n8",
"https://youtu.be/hAh3Ts5YdB0",
"https://youtu.be/ErOahjOYDx8"]
logome = [
"https://telegra.ph/file/17a32a0ae60e2a9bc7222.jpg",
"https://telegra.ph/file/ced5e676b3b74fc5e74d2.jpg",
"https://telegra.ph/file/45a1bb15f62ade29e4d0a.jpg",
"https://telegra.ph/file/d798dba75544d9737ff38.jpg",
"https://telegra.ph/file/c7c7d1fbae0a597074c11.jpg",
"https://telegra.ph/file/4a10f6f0ae553daac1302.jpg"]
bundak = bunda[Math.floor(Math.random() * bunda.length)]
menulogo = logome[Math.floor(Math.random() * logome.length)]
hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
logomenub = await getBuffer(menulogo)
let buttons = [
{buttonId: `${prefix}alteradores`, buttonText: {displayText: `[${EmojeG(emojos)}] 𝐀𝐋𝐓𝐄𝐑𝐀𝐃𝐎𝐑𝐄𝐒 [${EmojeG(emojos)}]` }, type: 1},
{buttonId: `${prefix}nsfww2`, buttonText: {displayText: `[${EmojeG(emojos)}] 𝐍𝐒𝐅𝐖 [${EmojeG(emojos)}]` }, type: 2}
]
let buttonMessage = {
document: fs.readFileSync('./logos/cheems.xlsx'),
jpegThumbnail: logomenub,
fileLength: 99999999999999,
caption: animes(prefix),
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: ``,
body: `${NomeDoBot}`,
showAdAttribution: true,
mediaType:2,
thumbnail: logomenub,
sourceUrl: `${bundak}`,
mediaUrl: `${bundak}`,
}}
}
dens.sendMessage(from,
buttonMessage,
{quoted:selo}
)
}
break

case 'menudono': 
if(!SoDono && !isGroup) return reply('So dono')
{
bunda = [
"https://youtu.be/yigBhNBMoeQ",
"https://youtu.be/D5KvU8Hw-n8",
"https://youtu.be/hAh3Ts5YdB0",
"https://youtu.be/ErOahjOYDx8"]
logome = [
"https://telegra.ph/file/17a32a0ae60e2a9bc7222.jpg",
"https://telegra.ph/file/ced5e676b3b74fc5e74d2.jpg",
"https://telegra.ph/file/45a1bb15f62ade29e4d0a.jpg",
"https://telegra.ph/file/d798dba75544d9737ff38.jpg",
"https://telegra.ph/file/c7c7d1fbae0a597074c11.jpg",
"https://telegra.ph/file/4a10f6f0ae553daac1302.jpg"]
bundak = bunda[Math.floor(Math.random() * bunda.length)]
menulogo = logome[Math.floor(Math.random() * logome.length)]
hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
logomenub = await getBuffer(menulogo)
let buttons = [
{buttonId: `${prefix}menujogos`, buttonText: {displayText: `[${EmojeG(emojos)}] 𝐉𝐎𝐆𝐎𝐒 [${EmojeG(emojos)}]` }, type: 1},
{buttonId: `${prefix}loja`, buttonText: {displayText: `[${EmojeG(emojos)}] 𝐋𝐎𝐉𝐀 [${EmojeG(emojos)}]` }, type: 2}
]
let buttonMessage = {
document: fs.readFileSync('./logos/cheems.xlsx'),
jpegThumbnail: logomenub,
fileLength: 99999999999999,
caption: menudono(prefix),
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: ``,
body: `${NomeDoBot}`,
showAdAttribution: true,
mediaType:2,
thumbnail: logomenub,
sourceUrl: `${bundak}`,
mediaUrl: `${bundak}`,
}}
}
dens.sendMessage(from,
buttonMessage,
{quoted:selo}
)
}
break

case 'alteradores': {
bunda = [
"https://youtu.be/yigBhNBMoeQ",
"https://youtu.be/D5KvU8Hw-n8",
"https://youtu.be/hAh3Ts5YdB0",
"https://youtu.be/ErOahjOYDx8"]
logome = [
"https://telegra.ph/file/17a32a0ae60e2a9bc7222.jpg",
"https://telegra.ph/file/ced5e676b3b74fc5e74d2.jpg",
"https://telegra.ph/file/45a1bb15f62ade29e4d0a.jpg",
"https://telegra.ph/file/d798dba75544d9737ff38.jpg",
"https://telegra.ph/file/c7c7d1fbae0a597074c11.jpg",
"https://telegra.ph/file/4a10f6f0ae553daac1302.jpg"]
bundak = bunda[Math.floor(Math.random() * bunda.length)]
menulogo = logome[Math.floor(Math.random() * logome.length)]
hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
logomenub = await getBuffer(menulogo)
let buttons = [
{buttonId: `${prefix}efeitos`, buttonText: {displayText: `[${EmojeG(emojos)}] 𝐄𝐅𝐄𝐈𝐓𝐎𝐒 [${EmojeG(emojos)}]` }, type: 1},
{buttonId: `${prefix}nuvem`, buttonText: {displayText: `[${EmojeG(emojos)}] 𝐍𝐔𝐕𝐄𝐌 [${EmojeG(emojos)}]` }, type: 2}
]
let buttonMessage = {
document: fs.readFileSync('./logos/cheems.xlsx'),
jpegThumbnail: logomenub,
fileLength: 99999999999999,
caption: menuanimes(prefix),
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: ``,
body: `${NomeDoBot}`,
showAdAttribution: true,
mediaType:2,
thumbnail: logomenub,
sourceUrl: `${bundak}`,
mediaUrl: `${bundak}`,
}}
}
dens.sendMessage(from,
buttonMessage,
{quoted:selo}
)
}
break

case 'jogos':
case 'menujogos': {
bunda = [
"https://youtu.be/yigBhNBMoeQ",
"https://youtu.be/D5KvU8Hw-n8",
"https://youtu.be/hAh3Ts5YdB0",
"https://youtu.be/ErOahjOYDx8"]
logome = [
"https://telegra.ph/file/17a32a0ae60e2a9bc7222.jpg",
"https://telegra.ph/file/ced5e676b3b74fc5e74d2.jpg",
"https://telegra.ph/file/45a1bb15f62ade29e4d0a.jpg",
"https://telegra.ph/file/d798dba75544d9737ff38.jpg",
"https://telegra.ph/file/c7c7d1fbae0a597074c11.jpg",
"https://telegra.ph/file/4a10f6f0ae553daac1302.jpg"]
bundak = bunda[Math.floor(Math.random() * bunda.length)]
menulogo = logome[Math.floor(Math.random() * logome.length)]
hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
logomenub = await getBuffer(menulogo)
let buttons = [
{buttonId: `${prefix}menuinfo`, buttonText: {displayText: `[${EmojeG(emojos)}] 𝐈𝐍𝐅𝐎 [${EmojeG(emojos)}]` }, type: 1},
{buttonId: `${prefix}menubasico`, buttonText: {displayText: `[${EmojeG(emojos)}] 𝐁𝐀𝐒𝐈𝐂𝐎 [${EmojeG(emojos)}]` }, type: 2}
]
let buttonMessage = {
document: fs.readFileSync('./logos/cheems.xlsx'),
jpegThumbnail: logomenub,
fileLength: 99999999999999,
caption: jogos(prefix),
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: ``,
body: `${NomeDoBot}`,
showAdAttribution: true,
mediaType:2,
thumbnail: logomenub,
sourceUrl: `${bundak}`,
mediaUrl: `${bundak}`,
}}
}
dens.sendMessage(from,
buttonMessage,
{quoted:selo}
)
}
break

case 'menuloja':
case 'loja': {
neroespera('seja bem vindo a nossa loja.')
bunda = [
"https://youtu.be/yigBhNBMoeQ",
"https://youtu.be/D5KvU8Hw-n8",
"https://youtu.be/hAh3Ts5YdB0",
"https://youtu.be/ErOahjOYDx8"]
logome = [
"https://telegra.ph/file/17a32a0ae60e2a9bc7222.jpg",
"https://telegra.ph/file/ced5e676b3b74fc5e74d2.jpg",
"https://telegra.ph/file/45a1bb15f62ade29e4d0a.jpg",
"https://telegra.ph/file/d798dba75544d9737ff38.jpg",
"https://telegra.ph/file/c7c7d1fbae0a597074c11.jpg",
"https://telegra.ph/file/4a10f6f0ae553daac1302.jpg"]
bundak = bunda[Math.floor(Math.random() * bunda.length)]
menulogo = logome[Math.floor(Math.random() * logome.length)]
hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
logomenub = await getBuffer(menulogo)
let buttons = [
{buttonId: `${prefix}menuadms`, buttonText: {displayText: `[${EmojeG(emojos)}] 𝐀𝐃𝐌𝐒 [${EmojeG(emojos)}]` }, type: 1},
{buttonId: `${prefix}nuvem`, buttonText: {displayText: `[${EmojeG(emojos)}] 𝐍𝐔𝐕𝐄𝐌 [${EmojeG(emojos)}]` }, type: 2}
]
let buttonMessage = {
document: fs.readFileSync('./logos/cheems.xlsx'),
jpegThumbnail: logomenub,
fileLength: 99999999999999,
caption: loja(prefix),
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: ``,
body: `${NomeDoBot}`,
showAdAttribution: true,
mediaType:2,
thumbnail: logomenub,
sourceUrl: `${bundak}`,
mediaUrl: `${bundak}`,
}}
}
dens.sendMessage(from,
buttonMessage,
{quoted:selo}
)
}
break

case 'menubasico':
case 'basico': {
bunda = [
"https://youtu.be/yigBhNBMoeQ",
"https://youtu.be/D5KvU8Hw-n8",
"https://youtu.be/hAh3Ts5YdB0",
"https://youtu.be/ErOahjOYDx8"]
logome = [
"https://telegra.ph/file/17a32a0ae60e2a9bc7222.jpg",
"https://telegra.ph/file/ced5e676b3b74fc5e74d2.jpg",
"https://telegra.ph/file/45a1bb15f62ade29e4d0a.jpg",
"https://telegra.ph/file/d798dba75544d9737ff38.jpg",
"https://telegra.ph/file/c7c7d1fbae0a597074c11.jpg",
"https://telegra.ph/file/4a10f6f0ae553daac1302.jpg"]
bundak = bunda[Math.floor(Math.random() * bunda.length)]
menulogo = logome[Math.floor(Math.random() * logome.length)]
hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
logomenub = await getBuffer(menulogo)
let buttons = [
{buttonId: `${prefix}menuinfo`, buttonText: {displayText: `[${EmojeG(emojos)}] 𝐈𝐍𝐅𝐎 [${EmojeG(emojos)}]` }, type: 1},
{buttonId: `${prefix}menuanimes`, buttonText: {displayText: `[${EmojeG(emojos)}] 𝐀𝐍𝐈𝐌𝐄𝐒 [${EmojeG(emojos)}]` }, type: 2}
]
let buttonMessage = {
document: fs.readFileSync('./logos/cheems.xlsx'),
jpegThumbnail: logomenub,
fileLength: 99999999999999,
caption: menubasico(prefix),
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: ``,
body: `${NomeDoBot}`,
showAdAttribution: true,
mediaType:2,
thumbnail: logomenub,
sourceUrl: `${bundak}`,
mediaUrl: `${bundak}`,
}}
}
dens.sendMessage(from,
buttonMessage,
{quoted:selo}
)
}
break

case 'menuinfo':
case 'info': {
bunda = [
"https://youtu.be/yigBhNBMoeQ",
"https://youtu.be/D5KvU8Hw-n8",
"https://youtu.be/hAh3Ts5YdB0",
"https://youtu.be/ErOahjOYDx8"]
logome = [
"https://telegra.ph/file/17a32a0ae60e2a9bc7222.jpg",
"https://telegra.ph/file/ced5e676b3b74fc5e74d2.jpg",
"https://telegra.ph/file/45a1bb15f62ade29e4d0a.jpg",
"https://telegra.ph/file/d798dba75544d9737ff38.jpg",
"https://telegra.ph/file/c7c7d1fbae0a597074c11.jpg",
"https://telegra.ph/file/4a10f6f0ae553daac1302.jpg"]
bundak = bunda[Math.floor(Math.random() * bunda.length)]
menulogo = logome[Math.floor(Math.random() * logome.length)]
hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
logomenub = await getBuffer(menulogo)
let buttons = [
{buttonId: `${prefix}menubasico`, buttonText: {displayText: `[${EmojeG(emojos)}] 𝐁𝐀𝐒𝐈𝐂𝐎 [${EmojeG(emojos)}]` }, type: 1},
{buttonId: `${prefix}menupack`, buttonText: {displayText: `[${EmojeG(emojos)}] 𝐏𝐀𝐂𝐊 [${EmojeG(emojos)}]` }, type: 2}
]
let buttonMessage = {
document: fs.readFileSync('./logos/cheems.xlsx'),
jpegThumbnail: logomenub,
fileLength: 99999999999999,
caption: menuinfo(prefix),
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: ``,
body: `${NomeDoBot}`,
showAdAttribution: true,
mediaType:2,
thumbnail: logomenub,
sourceUrl: `${bundak}`,
mediaUrl: `${bundak}`,
}}
}
dens.sendMessage(from,
buttonMessage,
{quoted:selo}
)
}
break

case 'menuplay': {
bunda = [
"https://youtu.be/yigBhNBMoeQ",
"https://youtu.be/D5KvU8Hw-n8",
"https://youtu.be/hAh3Ts5YdB0",
"https://youtu.be/ErOahjOYDx8"]
logome = [
"https://telegra.ph/file/17a32a0ae60e2a9bc7222.jpg",
"https://telegra.ph/file/ced5e676b3b74fc5e74d2.jpg",
"https://telegra.ph/file/45a1bb15f62ade29e4d0a.jpg",
"https://telegra.ph/file/d798dba75544d9737ff38.jpg",
"https://telegra.ph/file/c7c7d1fbae0a597074c11.jpg",
"https://telegra.ph/file/4a10f6f0ae553daac1302.jpg"]
bundak = bunda[Math.floor(Math.random() * bunda.length)]
menulogo = logome[Math.floor(Math.random() * logome.length)]
hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
logomenub = await getBuffer(menulogo)
let buttons = [
{buttonId: `${prefix}figurinhas`, buttonText: {displayText: `[${EmojeG(emojos)}] 𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀𝐒 [${EmojeG(emojos)}]` }, type: 1},
{buttonId: `${prefix}menuadms`, buttonText: {displayText: `[${EmojeG(emojos)}] 𝐀𝐃𝐌𝐒 [${EmojeG(emojos)}]` }, type: 2}
]
let buttonMessage = {
document: fs.readFileSync('./logos/cheems.xlsx'),
jpegThumbnail: logomenub,
fileLength: 99999999999999,
caption: menuplay(prefix),
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: ``,
body: `${NomeDoBot}`,
showAdAttribution: true,
mediaType:2,
thumbnail: logomenub,
sourceUrl: `${bundak}`,
mediaUrl: `${bundak}`,
}}
}
dens.sendMessage(from,
buttonMessage,
{quoted:selo}
)
}
break

case 'menunuvem':
case 'nuvem': {
bunda = [
"https://youtu.be/yigBhNBMoeQ",
"https://youtu.be/D5KvU8Hw-n8",
"https://youtu.be/hAh3Ts5YdB0",
"https://youtu.be/ErOahjOYDx8"]
logome = [
"https://telegra.ph/file/17a32a0ae60e2a9bc7222.jpg",
"https://telegra.ph/file/ced5e676b3b74fc5e74d2.jpg",
"https://telegra.ph/file/45a1bb15f62ade29e4d0a.jpg",
"https://telegra.ph/file/d798dba75544d9737ff38.jpg",
"https://telegra.ph/file/c7c7d1fbae0a597074c11.jpg",
"https://telegra.ph/file/4a10f6f0ae553daac1302.jpg"]
bundak = bunda[Math.floor(Math.random() * bunda.length)]
menulogo = logome[Math.floor(Math.random() * logome.length)]
hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
logomenub = await getBuffer(menulogo)
let buttons = [
{buttonId: `${prefix}menuplay`, buttonText: {displayText: `[${EmojeG(emojos)}] 𝐏𝐋𝐀𝐘 [${EmojeG(emojos)}]` }, type: 1},
{buttonId: `${prefix}figurinhas`, buttonText: {displayText: `[${EmojeG(emojos)}] 𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀𝐒 [${EmojeG(emojos)}]` }, type: 2}
]
let buttonMessage = {
document: fs.readFileSync('./logos/cheems.xlsx'),
jpegThumbnail: logomenub,
fileLength: 99999999999999,
caption: nuvem(prefix),
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: ``,
body: `${NomeDoBot}`,
showAdAttribution: true,
mediaType:2,
thumbnail: logomenub,
sourceUrl: `${bundak}`,
mediaUrl: `${bundak}`,
}}
}
dens.sendMessage(from,
buttonMessage,
{quoted:selo}
)
}
break

case 'menu+18':
case 'menupack': {
bunda = [
"https://youtu.be/yigBhNBMoeQ",
"https://youtu.be/D5KvU8Hw-n8",
"https://youtu.be/hAh3Ts5YdB0",
"https://youtu.be/ErOahjOYDx8"]
logome = [
"https://telegra.ph/file/17a32a0ae60e2a9bc7222.jpg",
"https://telegra.ph/file/ced5e676b3b74fc5e74d2.jpg",
"https://telegra.ph/file/45a1bb15f62ade29e4d0a.jpg",
"https://telegra.ph/file/d798dba75544d9737ff38.jpg",
"https://telegra.ph/file/c7c7d1fbae0a597074c11.jpg",
"https://telegra.ph/file/4a10f6f0ae553daac1302.jpg"]
bundak = bunda[Math.floor(Math.random() * bunda.length)]
menulogo = logome[Math.floor(Math.random() * logome.length)]
hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
logomenub = await getBuffer(menulogo)
let buttons = [
{buttonId: `${prefix}menuadms`, buttonText: {displayText: `[${EmojeG(emojos)}] 𝐀𝐃𝐌𝐒 [${EmojeG(emojos)}]` }, type: 1},
{buttonId: `${prefix}nsfww2`, buttonText: {displayText: `[${EmojeG(emojos)}] 𝐍𝐒𝐅𝐖 [${EmojeG(emojos)}]` }, type: 2}
]
let buttonMessage = {
document: fs.readFileSync('./logos/cheems.xlsx'),
jpegThumbnail: logomenub,
fileLength: 99999999999999,
caption: nuvem(prefix),
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: ``,
body: `${NomeDoBot}`,
showAdAttribution: true,
mediaType:2,
thumbnail: logomenub,
sourceUrl: `${bundak}`,
mediaUrl: `${bundak}`,
}}
}
dens.sendMessage(from,
buttonMessage,
{quoted:selo}
)
}
break

case 'figu':
case 'figurinhas':
case 'figurinha': {
bunda = [
"https://youtu.be/yigBhNBMoeQ",
"https://youtu.be/D5KvU8Hw-n8",
"https://youtu.be/hAh3Ts5YdB0",
"https://youtu.be/ErOahjOYDx8"]
logome = [
"https://telegra.ph/file/17a32a0ae60e2a9bc7222.jpg",
"https://telegra.ph/file/ced5e676b3b74fc5e74d2.jpg",
"https://telegra.ph/file/45a1bb15f62ade29e4d0a.jpg",
"https://telegra.ph/file/d798dba75544d9737ff38.jpg",
"https://telegra.ph/file/c7c7d1fbae0a597074c11.jpg",
"https://telegra.ph/file/4a10f6f0ae553daac1302.jpg"]
bundak = bunda[Math.floor(Math.random() * bunda.length)]
menulogo = logome[Math.floor(Math.random() * logome.length)]
hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
logomenub = await getBuffer(menulogo)
let buttons = [
{buttonId: `${prefix}menuplay`, buttonText: {displayText: `[${EmojeG(emojos)}] 𝐏𝐋𝐀𝐘 [${EmojeG(emojos)}]` }, type: 1},
{buttonId: `${prefix}efeitos`, buttonText: {displayText: `[${EmojeG(emojos)}] 𝐄𝐅𝐄𝐈𝐓𝐎𝐒 [${EmojeG(emojos)}]` }, type: 2}
]
let buttonMessage = {
document: fs.readFileSync('./logos/cheems.xlsx'),
jpegThumbnail: logomenub,
fileLength: 99999999999999,
caption: figurinhas(prefix),
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: ``,
body: `${NomeDoBot}`,
showAdAttribution: true,
mediaType:2,
thumbnail: logomenub,
sourceUrl: `${bundak}`,
mediaUrl: `${bundak}`,
}}
}
dens.sendMessage(from,
buttonMessage,
{quoted:selo}
)
}
break

case 'lista':
sections = [
{title: "TODOS OS MENUS",
rows: [
{title: `[${EmojeG(emojos)}] MENU [${EmojeG(emojos)}]`, rowId: `${prefix}menuss`, description: "menu principal"},
	    {title: `[${EmojeG(emojos)}] ADMS [${EmojeG(emojos)}]`, rowId: `${prefix}menuadms`, description: "menu dos adms"},
	    {title: `[${EmojeG(emojos)}] JOGOS [${EmojeG(emojos)}]`, rowId: `${prefix}jogos`, description: "Menu de jogos"},
	    {title: `[${EmojeG(emojos)}] EFEITOS [${EmojeG(emojos)}]`, rowId: `${prefix}efeitosimg`, description: "menu pra modificar img"},
	    {title: `[${EmojeG(emojos)}] FIGURINHA [${EmojeG(emojos)}]`, rowId: `${prefix}figurinhas`, description: "menu de sticker entre outros"},
	    {title: `[${EmojeG(emojos)}] ALTERA [${EmojeG(emojos)}]`, rowId: `${prefix}alteradores`, description: "menu de altera img etc..."},
	    {title: `[${EmojeG(emojos)}] BASICO [${EmojeG(emojos)}]`, rowId: `${prefix}menubasico`, description: "menu com comandos aleatorios"},
	    {title: `[${EmojeG(emojos)}] ANIMES [${EmojeG(emojos)}]`, rowId: `${prefix}menuanime`, description: "menu geek dos mas diversos assuntos"},
	    {title: `[${EmojeG(emojos)}] PLAY [${EmojeG(emojos)}]`, rowId: `${prefix}menuply`, description: "menu de baixa música, vídeo etc.."},
	    	    	    {title: `[${EmojeG(emojos)}] DONO [${EmojeG(emojos)}]`, rowId: `${prefix}donomenu`, description: "menu pro dono da komi-bot"},
	    	    {title: `[${EmojeG(emojos)}] INFO [${EmojeG(emojos)}]`, rowId: `${prefix}info`, description: "menu de informações"},
	    	    {title: `[${EmojeG(emojos)}] LISTA-MIDIA [${EmojeG(emojos)}]`, rowId: `${prefix}lista-midia`, description: "lista de vídeos"},
	    	    {title: `[${EmojeG(emojos)}] LISTA-APPS [${EmojeG(emojos)}]`, rowId: `${prefix}lista-apps`, description: "lista de apps"},
	 	]}, {
	 title: "LISTRA EXTRA",
	 rows: [
	    {title: "🅁🄸🄲🄰🅁🄳🄾", rowId: `${prefix}nero`, description: "informaçoes em audio sobre os criadores da komi"},
	    {title: "🅂🄰🄼🅄🄴🄻", rowId: `${prefix}samuel`, description: "canal dos criadores e informaçoes"},
	    {title: "🅃🄸🄰🄶🄾", rowId: `${prefix}tiago`, description: "canal dos criadores e informaçoes"},]
}]
listMessage2 = {
text: `│ Aperte Em Exibir Lista\n│ Para Você Acessar Todos\n│ Os Menu do Bot\n│ Com Facilidade`,
  footer: `\n╰─╼━══━━≺ ♤ ≻━━══━╾─╯`,
  title: "╭─╼━══━━≺ ♤ ≻━━══━╾─╮\n",
  buttonText: "𝗘𝗫𝗜𝗕𝗜𝗥 || 𝗟𝗜𝗦𝗧𝗔 ≈",
  sections
}
sendMsg = await dens.sendMessage(from, listMessage2)
break

case 'infobv':
sections = [
{title: "informações",
rows: [
     {title: `legenda welcome`, rowId: `${prefix}legewelcome`, description: "como add mensagem no bem vindo"},
	    {title: `tag membro`, rowId: `${prefix}tagwelcome`, description: "como coloca marcando o número da pessoa no bem vindo"},
	    {title: `tag grupo`, rowId: `${prefix}efeitosimg`, description: "como coloca o nome do grupo no bem vindo."},
	    {title: `descrição`, rowId: `${prefix}descriçãowelcome`, description: "como coloca a descrição do grupo no bem vindo."},
	    {title: `despedida`, rowId: `${prefix}legendabye`, description: "como coloca uma msg no bem vindo de despedida."},
	    {title: `prefix`, rowId: `${prefix}prefixobv`, description: "como mostra qual eo prefixo do bot no bem vindo"},]
}]
listMessage2 = {
text: `⭔ informações welcome\n⭔ aprenda a usar corretamente\n⭔ boa sorte`,
  footer: ` `,
  title: " ",
  buttonText: "𝗘𝗫𝗜𝗕𝗜𝗥 || 𝗟𝗜𝗦𝗧𝗔",
  sections
}
sendMsg = await dens.sendMessage(from, listMessage2)
break

///// INFO BV 

case 'legewelcome': {
hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
try {
ppimg = await dens.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
destiny = ` `
daftarimg = await getBuffer(ppimg)
let buttons = [
{
buttonId: `${prefix}lista`, 
buttonText: {
displayText: 'INFO/WELCOME'
}, type: 1},
]
let buttonMessage = {
image: { url: ppimg},
caption: destiny,
footer: `❑ Olá pra você criar uma legenda no bem vindo e muito simples, você basicamente vai usar o comando:

❑ ${prefix}legendabv {{ seu texto }}.

❑ Exemplo:

❑ ${prefix}legendabv olá seja bem vindo ao nosso grupo.
 
❑ O usuário pode coloca letra personalizada, emojis, entre outras coisas pra ajuda na sua legenda, tem as opções de mostra o grupo, número, prefixo, entre outras coisas, pra mais informações clique no botão abaixo, ou digite:

❑ ${prefix}infobv `,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply: {
title: ``,
mediaType: 1,
renderLargerThumbnail: true,
showAdAttribution: true,
body: ``,
thumbnail: await getBuffer("https://telegra.ph/file/9502bef19ca15f45e7cd5.jpg"),
sourceUrl: `https://youtube.com/channel/UCx8b3HdonWrA71fDUCXLxqw`,
}}
}
await dens.sendMessage(from,
buttonMessage,
{quoted:selo}
)
}
break

case 'tagwelcome': {
hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
try {
ppimg = await dens.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
destiny = ` `
daftarimg = await getBuffer(ppimg)
let buttons = [
{
buttonId: `${prefix}lista`, 
buttonText: {
displayText: 'INFO/WELCOME'
}, type: 1},
]
let buttonMessage = {
image: { url: ppimg},
caption: destiny,
footer: `❑ Como marca um membro com @ no bem vindo?

❑ Muito simples, você basicamente vai usar:

❑ #numerodele# em alguma parte da sua legenda.

❑ Exemplo:

❑ ${prefix}legendabv seja bem vindo #numerodele# 

❑ com isso o usuário irá identificar que estamos dando bem vindo ao novo usuário, que no caso é ele, caso queira saber mais de como usar o welcome corretamente aperte no botão abaixo, ou digite 

❑ ${prefix}infobv`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply: {
title: ``,
mediaType: 1,
renderLargerThumbnail: true,
showAdAttribution: true,
body: ``,
thumbnail: await getBuffer("https://telegra.ph/file/9a2c478d5e056189d7a50.jpg"),
sourceUrl: `https://youtube.com/channel/UCx8b3HdonWrA71fDUCXLxqw`,
}}
}
await dens.sendMessage(from,
buttonMessage,
{quoted:selo}
)
}
break

case 'taggrupowelcome': {
hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
try {
ppimg = await dens.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
destiny = ` `
daftarimg = await getBuffer(ppimg)
let buttons = [
{
buttonId: `${prefix}lista`, 
buttonText: {
displayText: 'INFO/WELCOME'
}, type: 1},
]
let buttonMessage = {
image: { url: ppimg},
caption: destiny,
footer: `❑ Como coloca o nome do grupo no bem vindo?

❑ Muito simples, você basicamente vai usar:

❑ #nomedogp# em alguma parte da sua legenda.

❑ Exemplo:

❑ ${prefix}legendabv seja bem vindo ao #nomedogp# 

❑ com isso o usuário irá identificar o nome do grupo logo de cara, caso queira saber mais de como usar o welcome corretamente aperte no botão abaixo, ou digite 

❑ ${prefix}infobv `,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply: {
title: ``,
mediaType: 1,
renderLargerThumbnail: true,
showAdAttribution: true,
body: ``,
thumbnail: await getBuffer("https://telegra.ph/file/9502bef19ca15f45e7cd5.jpg"),
sourceUrl: `https://youtube.com/channel/UCx8b3HdonWrA71fDUCXLxqw`,
}}
}
await dens.sendMessage(from,
buttonMessage,
{quoted:selo}
)
}
break

case 'descriçãowelcome': {
hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
try {
ppimg = await dens.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
destiny = ` `
daftarimg = await getBuffer(ppimg)
let buttons = [
{
buttonId: `${prefix}lista`, 
buttonText: {
displayText: 'INFO/WELCOME'
}, type: 1},
]
let buttonMessage = {
image: { url: ppimg},
caption: destiny,
footer: `❑ Como puxa a descrição do grupo no bem vindo?

❑ bom, você basicamente vai usar:

❑ #descriçao# em alguma parte da sua legenda.

❑ Exemplo:

❑ ${prefix}legendabv seja bem vindo ao nosso grupo #descrição#

❑ recomendamos vcs usuários colocarem #descrição# no final pq a descrição dos gp geralmente sai grandes, pra mais informações aperte no botão logo a baixo ou digite:

❑ ${prefix}infobv`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply: {
title: ``,
mediaType: 1,
renderLargerThumbnail: true,
showAdAttribution: true,
body: ``,
thumbnail: await getBuffer("https://telegra.ph/file/9a2c478d5e056189d7a50.jpg"),
sourceUrl: `https://youtube.com/channel/UCx8b3HdonWrA71fDUCXLxqw`,
}}
}
await dens.sendMessage(from,
buttonMessage,
{quoted:selo}
)
}
break

case 'legendabye': {
hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
try {
ppimg = await dens.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
destiny = ` `
daftarimg = await getBuffer(ppimg)
let buttons = [
{
buttonId: `${prefix}lista`, 
buttonText: {
displayText: 'INFO/WELCOME'
}, type: 1},
]
let buttonMessage = {
image: { url: ppimg},
caption: destiny,
footer: `❑ Como coloca legenda na msg de despedida do bem vindo?

❑ ${prefix}legendasaiu {{ seu texto }}.

❑ Exemplo:

❑ ${prefix}legendasaiu mais um corno saiu
 
❑ pra mais informações clique no botão abaixo, ou digite:

❑ ${prefix}infobv `,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply: {
title: ``,
mediaType: 1,
renderLargerThumbnail: true,
showAdAttribution: true,
body: ``,
thumbnail: await getBuffer("https://telegra.ph/file/9502bef19ca15f45e7cd5.jpg"),
sourceUrl: `https://youtube.com/channel/UCx8b3HdonWrA71fDUCXLxqw`,
}}
}
await dens.sendMessage(from,
buttonMessage,
{quoted:selo}
)
}
break

case 'prefixobv': {
hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
try {
ppimg = await dens.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
destiny = ` `
daftarimg = await getBuffer(ppimg)
let buttons = [
{
buttonId: `${prefix}lista`, 
buttonText: {
displayText: 'INFO/WELCOME'
}, type: 1},
]
let buttonMessage = {
image: { url: ppimg},
caption: destiny,
footer: `❑ Como coloca o prefixo do bot no bem vindo?

❑ ${prefix}legendabv {{ seu texto }}.

❑ Exemplo:

❑ ${prefix}legendabv olá seja bem vindo, o prefixo pra chama o bot e #prefixo# 
 
❑ pra mais informações clique no botão abaixo, ou digite:

❑ ${prefix}infobv `,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply: {
title: ``,
mediaType: 1,
renderLargerThumbnail: true,
showAdAttribution: true,
body: ``,
thumbnail: await getBuffer("https://telegra.ph/file/9a2c478d5e056189d7a50.jpg"),
sourceUrl: `https://youtube.com/channel/UCx8b3HdonWrA71fDUCXLxqw`,
}}
}
await dens.sendMessage(from,
buttonMessage,
{quoted:selo}
)
}
break

////

case 'infopalavrão': {
hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
try {
ppimg = await dens.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
destiny = ` `
daftarimg = await getBuffer(ppimg)
let buttons = [
{
buttonId: `${prefix}lista`, 
buttonText: {
displayText: 'INFO/WELCOME'
}, type: 1},
]
let buttonMessage = {
image: { url: ppimg},
caption: destiny,
footer: `❑ o antipalavrão é criado por você mesmo(a), basicamente você usuário escolhe qual palavra vc quer coloca, pra caso seja dita,o bot vai fazer a remoção dessa pessoa.

❑ ${prefix}addpalavra 

❑ ${prefix}delpalavra 

❑ ${prefix}antipalavrão 

❑ exemplo: 

❑ ${prefix}addpalavra gay

❑ isso será incluído como um palavrão, "mas como faço isso funcionar agora?" 

❑ você deve ativar a função por grupo, exemplo:

❑ ${prefix}antipalavrão 

❑ aí escolhe se deseja desativar ou ativar aparti da lista que o bot irá disponibilizar pra vc escolher.

❑ e se você quer tirar a palavra de inclusão dos palavrões, é só digitar :

❑ ${prefix}delpalavra gay

❑ "gay" é apenas a palavra que utilize como exemplo, mas você que tem que criar, e escolher quais frases não deseja que seja falada no seu grupo.
`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply: {
title: ``,
mediaType: 1,
renderLargerThumbnail: true,
showAdAttribution: true,
body: ``,
thumbnail: await getBuffer("https://telegra.ph/file/9a2c478d5e056189d7a50.jpg"),
sourceUrl: `https://youtube.com/channel/UCx8b3HdonWrA71fDUCXLxqw`,
}}
}
await dens.sendMessage(from,
buttonMessage,
{quoted:selo}
)
}
break

case 'infovotacao': {
hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
try {
ppimg = await dens.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
destiny = ` `
daftarimg = await getBuffer(ppimg)
let buttons = [
{
buttonId: `${prefix}lista`, 
buttonText: {
displayText: 'INFO/WELCOME'
}, type: 1},
]
let buttonMessage = {
image: { url: ppimg},
caption: destiny,
footer: `❑ Olá 

❑ Comando: /votação


❑ Deseja saber sobre como funciona os comandos de votação?, é simples, você deve marcar uma pessoa junto a uma / e digitar uma frase como pergunta, e depois / e os minutos, 

❑ Exemplo: /votação @marca-pessoa/Vamos lanchar bolo hoje??/1  

❑ para votar ou negar, tem que digitar sem prefixo:

❑ voto ou devoto


❑ é 1 Minuto de votação, então faça exatamente, dessa fórma aí.

❑ e caso queira anular ele use o comando:

❑ /delvote

❑ ele anula sua votação.
 `,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply: {
title: ``,
mediaType: 1,
renderLargerThumbnail: true,
showAdAttribution: true,
body: ``,
thumbnail: await getBuffer("https://telegra.ph/file/9a2c478d5e056189d7a50.jpg"),
sourceUrl: `https://youtube.com/channel/UCx8b3HdonWrA71fDUCXLxqw`,
}}
}
await dens.sendMessage(from,
buttonMessage,
{quoted:selo}
)
}
break

case 'infolistanegra': {
hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
try {
ppimg = await dens.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
destiny = ` `
daftarimg = await getBuffer(ppimg)
let buttons = [
{
buttonId: `${prefix}lista`, 
buttonText: {
displayText: 'INFO/WELCOME'
}, type: 1},
]
let buttonMessage = {
image: { url: ppimg},
caption: destiny,
footer: `❑ Olá 

❑ existe esses 3 comandos 

❑ /autoban 

❑ /listanegra

❑ /tirardalista

❑ Como isso funciona? 

❑ esse comando, por exemplo, se alguém envia algo no seu grupo, vamos supor, um link, e sai rápido, você vai digitar o seguinte 

❑ /listanegra numero-junto-da-pessoa

❑ vai colocar o número junto da pessoa que saiu, sem o + lembrando, e sem o -. 

❑ pra remover ele da lista é simples:

❑ /tirardalista numero-junto-da-pessoa

❑ mesmos detalhes de add.. 

❑ Depois de ter adicionado, você tem que ativar a função por grupo, que é o seguinte. 

❑ /autoban 

❑ e selecionar uma das opções, ativar ou desativar

❑ boa sorte amigo..

 `,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply: {
title: ``,
mediaType: 1,
renderLargerThumbnail: true,
showAdAttribution: true,
body: ``,
thumbnail: await getBuffer("https://telegra.ph/file/9a2c478d5e056189d7a50.jpg"),
sourceUrl: `https://youtube.com/channel/UCx8b3HdonWrA71fDUCXLxqw`,
}}
}
await dens.sendMessage(from,
buttonMessage,
{quoted:selo}
)
}
break

// ====== [ FIM DOS MENU ] ========\\

case 'criapet': {
const pets = args.join(' ')
if(!pets) return reply("Cade o nome do pet, seu beta!")
if(DonoPet === sender) return reply(`Você ja tem um pet, digite ${prefix}perfilpet`)
sex = ["Macho", "Fêmea"]
hot = ["Fogo", "Gelo", "Água"]
habi = ["Nenhuma", "Mega Soco", "Razepet", "Nenhuma"]
var estilo = hot[Math.floor(Math.random() * hot.length)]
var SexoPets = sex[Math.floor(Math.random() * sex.length)]
var Hability = habi[Math.floor(Math.random() * habi.length)]
algup = `━━━━━━── • ──━━━━━━\n[🚩] Pronto, agora você tem um pet cuja o nome é: ${pets}\n━━━━━━── • ──━━━━━━`
var infojs = {id: sender, pet: pets, vida: '200', foto: "https://telegra.ph/file/88c2f20bc89953237ef95.jpg", equipamento: 'Nenhum', proteção: 'Nenhuma', sexo: SexoPets, habilidade: Hability, tipo: estilo, statu: 'Vivo'}
bunda.push(infojs)
fs.writeFileSync('./datab/jsons/Pets/petsch.json', JSON.stringify(bunda, null, 2) + '\n')
reply("Aguarde... Estou Criando Seu Pet")
await sleep(3000)
let buttons = [
{buttonId: `${prefix}perfilpet`, buttonText: {displayText: '⭔ MEU PET ⭔'}, type: 1},
{buttonId: `${prefix}infopet`, buttonText: {displayText: '⭔ INFO CMD PET ⭔'}, type: 1}
]
let buttonMessage = {
image: { url: `https://telegra.ph/file/b16e1519240ab681fc9c1.jpg` },
caption: `[❗] Agora você tem um pet\nCuja o nome é ${pets}`,
footer: ``,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: ``,
body: `${NomeDoBot}`,
showAdAttribution: true,
thumbnail: null,
mediaType:2,
mediaUrl: '',
sourceUrl: ''
}}
}
dens.sendMessage(from, buttonMessage, { quoted: selo })
}
break

case 'battlepet': {
if (i === undefined) return reply("Pet Não Encontrado")
if(!isGroup) return reply(enviar.msg.grupo)
if(PetUser(mentioned[0]) == undefined) return reply("Esse Beta Não Tem Pet")
if(DonoPet === undefined) return reply(`Como vc quer batalhar sendo q nem pet vc tem ;-;, use: '${prefix}criapet (nome-dele)', para criar seu animalzinho primeiro!`)
if (!isMentioned) return reply("Marque-a")
}
break

case 'testek': {
var s = getPosiPet(sender)
var m = getPosiPet(mentioned[0])
/// SENDER ↓
if(bunda[s].habilidade == 'Nenhuma'){
var goHability = 'O choro da perda#0'
} else if (bunda[s].habilidade == 'Razepet'){
var goHability = 'Razepet#90'
} else if (bunda[s].habilidade == 'Mega Soco'){
var goHability  = 'Mega Soco#80'}
/// MENCIONADO ↓
if(bunda[m].habilidade == 'Nenhuma'){
var goHabilityM = 'O choro da perda#0'
} else if (bunda[m].habilidade == 'Razepet'){
var goHabilityM = 'Razepet#90'
} else if (bunda[m].habilidade == 'Mega Soco'){
var goHabilityM  = 'Mega Soco#80'}
////
aa = petAtack(bunda[s].tipo)
bb = petAtack(bunda[m].tipo)
cc = equipaPet(bunda[s].equipamento)
dd = equipaPet(bunda[m].equipamento)
ee = goHability.split("#")[1] + aa.split("#")[1] + cc.split("#")[1]
ff = goHabilityM.split("#")[1] || bb.split("#")[1] || dd.split("#")[1] 
gg = bunda[s].vida - ff
hh = bunda[m].vida - ee
if(bunda[s].vida > bunda[m].vida){
VencedorPet = `${bunda[s].pet} Ganhou`
} else {
VencedorPet = `${bunda[m].pet} Ganhou`}
ii = `「 💥 ${bunda[s].pet} ataca com ${aa.split("#")[0]} dando ${aa.split("#")[1]} de dano no oponente. Depois ${cc.split("#")[0]} usa sua habilidade ${goHability.split("#")[0]} Como um Golpe Final 」\n\n「 🩸 ${bunda[m].pet} também ataca com ${bb.split("#")[0]} dando ${bb.split("#")[1]} de dano. Depois ${dd.split("#")[0]}, Depois ele também usa sua habilidade ${goHabilityM.split("#")[0]} 」`
kk = `*${VencedorPet}*\n~ Vida do ${bunda[s].pet} = ${gg}\n~ Vida do ${bunda[m].pet} = ${hh}`
let buttons = [
{buttonId: `${prefix}infopet`, buttonText: {displayText: '⭔ INFO PET ⭔'}, type: 1},
{buttonId: `${prefix}perfilpet`, buttonText: {displayText: '⭔ PERFIL PET ⭔'}, type: 1},
{buttonId: `${prefix}lojapet`, buttonText: {displayText: '⭔ LOJA PET ⭔'}, type: 1}
]
let buttonMessage = {
image: { url: `https://telegra.ph/file/1c4848321384f197b0b11.jpg` },
caption: ii,
footer: kk,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: `BATALHA PET`,
body: `${NomeDoBot} ©`,
showAdAttribution: true,
thumbnail: null,
mediaType:2,
mediaUrl: ``, 
sourceUrl:`https://www.instagram.com/maysurf__/`
}}
}
dens.sendMessage(from, buttonMessage, { quoted: selo })
}
break

case 'perfilpet':
if (isMentioned){
var i = getPosiPet(mentioned[0])
} else {
var i = getPosiPet(sender)
}
if (i === undefined) return reply("Pet Não Encontrado")
imgPet = {url: bunda[i].foto}
kapa = `•───•──────•───•
┣❲🏮❳ Nome: ${bunda[i].pet}
┣❲🏮❳ Vida: ${bunda[i].vida}
┣❲🏮❳ Equipamento: ${bunda[i].equipamento}
┣❲🏮❳ Proteção: ${bunda[i].proteção}
┣❲🏮❳ Sexo: ${bunda[i].sexo}
┣❲🏮❳ Habilidade: ${bunda[i].habilidade}
┣❲🏮❳ Estilo: ${bunda[i].tipo}
┣❲🏮❳ Status: ${bunda[i].statu}
┣❲🏮❳ Dono: @${bunda[i].id.split('@')[0]}
•───•──────•───•`
dens.sendMessage(from, {image: imgPet, caption:kapa, mentions: [bunda[i].id]}, {quoted: selo})
break

case 'lojapet':
if(PetUser == undefined) return reply("Crie um pet Primeiro")
if (MoneyId === undefined){
rafa = {id: sender, dinheiro: 0}
dinheiro.push(rafa)
fs.writeFileSync('./datab/jsons/import/dinheiro.json', JSON.stringify(dinheiro, null, 2))
}
sections = [{
title: `Louja Pet ~`,
rows: [
{title: "[💠] Proteção", rowId: `${prefix}protezipet`, description: "Custo R$ 2.000"},
{title: "[🎯] Equipamento", rowId: `${prefix}armadpet`, description: "Custo R$ 1.500"},
{title: "[⛑️] Kit Hp", rowId: `${prefix}kitpet`, description: "Custo R$ 500"},
{title: "[🍟] Ração", rowId: `${prefix}alimpet`, description: "Custo R$ 50"},
]}]
listMessage2 = {
  text: `[🎏~ Tudo que for comprado será adicionado no seu pet automaticamente`,
  footer: `${NomeDoBot} ©`,
  title: "就 Loja Pet 就",
  buttonText: `Aperte Aqui`,
  sections}
dens.sendMessage(from, listMessage2, {quoted: selo})
break

case 'kitpet':
if (userId < 1500){
var i = getPosiPet(sender)
bunda[i].vida = '200'
fs.writeFileSync('./datab/jsons/Pets/petsch.json', JSON.stringify(bunda, null, 2))
reply("[❗] Vida do pet recupereda")
} else {
reply("Dinheiro insuficiente")
}
break

case 'armadpet':
if(PetUser == undefined) return reply("Crie um pet Primeiro")
if (userId > 1500){
var i = getPosiPet(sender)
bunda[i].equipamento = "Equipado"
bunda[i].foto = "https://telegra.ph/file/9c11d303c104d502230df.jpg"
fs.writeFileSync('./datab/jsons/Pets/petsch.json', JSON.stringify(bunda, null, 2))
await sleep(2000)
reply("Pronto, Armadura equipada em seu pet")
} else {
reply('Saldo insuficiente')
}
break

case 'protezipet':
if(PetUser == undefined) return reply("Crie um pet Primeiro")
if (userId > 2000){
var i = getPosiPet(sender)
bunda[i].proteção = "Ativa"
fs.writeFileSync('./datab/jsons/Pets/petsch.json', JSON.stringify(bunda, null, 2))
await sleep(2000)
reply("Proteção Equipada no seu Pet")
} else {
reply('Saldo insuficiente')
}
break

case 'alimpet':
if(PetUser == undefined) return reply("Crie um pet Primeiro")
if (userId > 50){
reply("▼・ᴥ・▼ \ntanks 💫")
} else {
reply('Saldo insuficiente')
}
break

case 'petname':
if (userId > 100){
var i = getPosiPet(sender)
bunda[i].pet = q
fs.writeFileSync('./datab/jsons/Pets/petsch.json', JSON.stringify(bunda, null, 2))
reply("Pronto beta!")
} else {
reply("Dinheiro insuficiente, Precisa de R$ 100 reais")
}
break

case 'delpet': 
if(userId > 200){
var miojo = getPosition(sender)
bunda.splice(miojo, 1)
fs.writeFileSync('./datab/jsons/Pets/petsch.json', JSON.stringify(bunda, null, 2) + '\n')
reply("Pronto, pet deletado...")
} else {
reply("Dinheiro insuficiente, Precisa de R$ 200 reais")
}
break

case 'infopet':
op = `Opa, vamo aprofundar sobre esse comando, bom.. acho que você percebeu que ao criar um pet você recebeu dois botões, um pra ver o pet e o outro para se aprofundar sobre esse tal comando. Vamo direto ao ponto, o pet que você criou, estar guardado em um arquivo json que não pode ser apagado ou substituido, lógico que quando ele morrer e serar apagado, porque não faz sentido deixar seu pet la morto kk. Você pode ta acessando esse comando que tem acesso ao cemitério de pet em breve. \nGuia Do Cmd ~ \n\n${prefix}criapet (nome do seu pet)\n_Esse comando serve para cria seu animalzinho_\n\n${prefix}perfilpet\n_Esse comando serve para você ver seu pet, para ver o do seu amigo coloque o @tag dele dps do comando_\n\n${prefix}lojapet\n_Loja do pet_\n${prefix}battlepet (@tag)\n_Abrir uma batalha com o pet do mencionado_\n${prefix}delpet\n_Esse apaga seu pet para criar outro_\n\n${prefix}petname (nome novo)\n_Esse comando muda o nome do seu pet_\n[❗] Agora Vou deixar os Preço das vantagens quando for batalhar

╭─❏
│┏━━━━─────
│┃就 Tabela De Preços 就
│┃
│┃∾Proteção
│┃2.000
│┃
│┃∾Armadura 
│┃1.500
│┃
│┃∾Ração
│┃50
│┗━━━━─────
╰─❏ 

*obs: A armadura e a Proteção são vantagens ao batalhar, aconselho usar um desses antes de batalhar*`
sendBtext(from, op, 'Creditos do Cmd: Tiago( Sr luffy )\nAjuda de: Rafael Mods kk', [{buttonId: `nd`, buttonText: {displayText: `Ok ${NomeDoBot}`}, type: 1}])
break

case 'gimage': case 'gig': {
if (!q) return reply("*digite a consulta depois de colocar o comando.*")
reply("Processando dados...") 
let gis = require('g-i-s')
gis(q, async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
let buttons = [
{buttonId: `${prefix}gimage ${q}`, buttonText: {displayText: 'ᬊ͜͡𝑷𝑹𝑶́𝑿𝑰𝑴𝑶'}, type: 1}
]
let buttonMessage = {
image: { url: images },
caption:  '*Título* : ' + q + '\n*Link* : '+images,
footer: ``,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"𝙂𝙞𝙢𝙖𝙜𝙚",
body: `${NomeDoBot}`,
  thumbnail: log1,
mediaType:2,
mediaUrl: `https://youtube.com/channel/UCx8b3HdonWrA71fDUCXLxqw`, 
sourceUrl: `https://youtube.com/channel/UCx8b3HdonWrA71fDUCXLxqw`
}}
}
dens.sendMessage(from, buttonMessage, { quoted: selo })
})
}
break

case 'clima':
if (!isGroup) return reply("SOMENTE EM GRUPOS")
if (!q) return reply('Insira o nome da sua cidade.')
try {
clima = await axios(`https://pt.wttr.in/${q}?format=Cidade%20=%20%l+\n\nEstado%20=%20%C+%c+\n\nTemperatura%20=%20%t+\n\nUmidade%20=%20%h\n\nVento%20=%20%w\n\nLua agora%20=%20%m\n\nNascer%20do%20Sol%20=%20%S\n\nPor%20do%20Sol%20=%20%s`)
buffer = await getBuffer(`https://wttr.in/${q}.png`)
teks = `*「C L I M A」*
╴
${clima.data}
╴
${NomeDoBot}`
dens.sendMessage(from, {image: buffer, caption: teks}, info)
} catch {
reply('Estranho...\nCertifique-se de não estar usando acentos ok?')
}
break

case 'criagp': {
if (!SoDono) return reply(`So quem pode fazer grupo por comando é o ${NickDono}`)
blown = args.join(' ')
blown1 = blown.split("/")[0];
blown2 = blown.split("/")[1];
if(!blown.includes("/")) return reply(`Use assim exemplo: ${prefix + command} Os legais/Oi`)
group = await dens.groupCreate(`${blown1}`, [`${sender.split("@")[0]}@s.whatsapp.net`])
    console.log("Grupo Criado Com Id: " + group.id)
dens.sendMessage(group.id, { text:`${blown2}` })
linkty = await dens.groupInviteCode(group.id)
await sleep(3000)
reply(`Grupo: ${blown1}, criado com sucesso\nAqui esta o link ${NickDono}\n• https://Chat.whatsapp.com/${linkty}\nEspero que goste 🍒,`)
}
break

case 'clone': 
if (!isGroup) return reply("apenas para grupos") 
if (!SoDono) return reply("apenas pro dono") 
if (!q) return reply("cade o id do grupo?\nUse: o Comando /getgroupid Para Pegar o Id Desse Grupo.") 
getInfoOfGroupID = isGroup ? await dens.groupMetadata(q) : ''
getNameOfGroupID = isGroup ? getInfoOfGroupID.subject : ''
getMembersOfGroupID = isGroup ? getInfoOfGroupID.participants : ''
getDescOfGroupID = isGroup ? getInfoOfGroupID.desc : ''
const createGroup = await dens.groupCreate(getNameOfGroupID, [sender], "add")
await dens.groupUpdateDescription(createGroup.id, getDescOfGroupID) 
for (let max of getMembersOfGroupID){
await dens.groupParticipantsUpdate(createGroup.id, [max.id], "add")
}
dens.sendMessage(from, { text: 'Grupo Criado Com Sucesso!' }) 
dens.groupParticipantsUpdate(createGroup.id, [numerodono[0]], "promote") 
dens.sendMessage(createGroup.id, { text: 'Ola Vadias!' })  
break

case 'getgroupid': 
reply(from)
break

case 'perfil':
try {
ppimg = await dens.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
var conselho = palavras[Math.floor(Math.random() * palavras.length)]
const nivelgado = ['1','2','3','4','5','6','7','8','9']
const nivelgado2 = ['1','2','3','4','5','6','7','8','9'] 
const nivelgador = nivelgado[Math.floor(Math.random() * (nivelgado.length))]
const nivelgado2r = nivelgado2[Math.floor(Math.random() * (nivelgado2.length))] 
const puta = ['1','2','3','4','5','6','7','8','9']
const puta2 = ['1','2','3','4','5','6','7','8','9'] 
const putar = puta[Math.floor(Math.random() * (puta.length))]
const putar2 = puta2[Math.floor(Math.random() * (puta2.length))] 
const gostosura = ['1','2','3','4','5','6','7','8','9']
const gostosura2 = ['1','2','3','4','5','6','7','8','9'] 
const gostosurar = gostosura[Math.floor(Math.random() * (gostosura.length))]
const gostosurar2 = gostosura2[Math.floor(Math.random() * (gostosura2.length))] 
gadop = `${Math.floor(Math.random() * 100)}`
const programa = Math.ceil(Math.random() * 10000)
const asLvl = getLevelingLevel(sender)
const ssXp = getLevelingXp(sender)
const dptr = `     「 🔥 ~_*PERFIL*_~ 🌈 」
🗒 *Nome* : *${pushname}*
🪀 *Número* : @${sender.split("@")[0]}
🐂 *Nível gado* : *${nivelgador}${nivelgado2r}%*
📱 *Seu Célular* : ${info.key.id.length > 21 ? 'Android 🤣' : info.key.id.substring(0, 2) == '3A' ? 'IOS😂😂😅' : 'Zap zap web 😂😂☝🏼😅'}
😈 *Nível puta* : *${putar}${putar2}%*
😋 *Nível de gostosura* : *${gostosurar}${gostosurar2}%*
🍼 *Valor do programa* : *R$${programa}*
➻ *~_CONSELHO_~* :
${conselho}`
daftarimg = await getBuffer(ppimg)
buttons = buttons = [{buttonId: `${prefix}conselhobiblico`, buttonText: {displayText: `💠CONSELHOS💠`}, type: 1}]
dens.sendMessage(from, {image: daftarimg, caption: dptr, footer: " ", buttons}, {quoted: selo})
break

case 'fixapessoal':
try {
ppig = await dens.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppig = `sem foto`
}
if (!isGroup) return reply(enviar.msg.grupo)
if(groupIdscount.indexOf(from) < 0) return reply('O bot não tem ainda dados sobre o grupo')
var ind = groupIdscount.indexOf(from)
ppi = `╭━━ ⪩\n╿║consulta atividades de:
╿║${pushname}
╿║suas info nesse grupo:
╿║mensagens:  ${countMessage[ind].numbers[indnum].messages}
╿║numero: @${sender.split("@")[0]}\n└❏ 「 ©${NomeDoBot} 」`
if (!isGroup) return reply('aguarde')
daftarig = await getBuffer(ppig)
await dens.sendMessage(from, {image: daftarig, caption: ppi}, {quoted:selo})
break

case 'frases':
case 'frase':
try {
ppimg = await dens.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
hehe = await fetchJson(`https://www.luc4rio-rest-api.tk/api/aleatorios/frases`)
if (hehe.error) return reply(hehe.error)
ccg =
`
  ‣ Author: ${hehe.Author}
  ‣ Criador: ${hehe.Criador}
  ‣ Frase: 
  ${hehe.Frase}\n`
daftarimg = await getBuffer(ppimg)
await dens.sendMessage(from, {image: daftarimg, caption: ccg}, {quoted:info})
break

case 'conselhobiblico':
case 'conselhosbiblico':  
case 'conselhosb':   
case 'conselhob':  
var conselhosb = conselhob[Math.floor(Math.random() * conselhob.length)] 
bli = `https://telegra.ph/file/3102df137f2f8c0851915.jpg`
jr = `${tempo} ${pushname} 
Conselhos Bíblico Para Você: 
> Grupo: *${groupName}*
> Bot: *${NomeDoBot}*
「 *${conselhosb}* 」`
sendBimg(from, bli, jr, NomeDoBot, [{buttonId:`kk`, buttonText: {displayText: '「 Amém 」'}, type: 1}], selo)
break

case 'tabela':
await dens.sendMessage(from, {text: tabela(prefix, NomeDoBot)}, {quoted: selo})
break 

////////////// CONFIRMAÇAO

case 'uzumak': {
bunda = ["https://youtu.be/IKchrtaXmEo",
"https://youtu.be/YpQ606sHhfo",
"https://youtu.be/8JnPIuMdQyo",
"https://youtu.be/I6wX-d__2xY"]
bundak = bunda[Math.floor(Math.random() * bunda.length)]
hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
bla = await getBuffer('https://telegra.ph/file/a99782b9aabeffbf4937d.jpg')
let buttons = [
{buttonId: `${prefix}rgclans`, buttonText: {displayText: 'OUTROS'}, type: 1},
{buttonId: `${prefix}uzumaki`, buttonText: {displayText: 'CONFIRMAR'}, type: 2}
]
destiny = ` `
let buttonMessage = {
document: fs.readFileSync('./logos/cheems.xlsx'),
jpegThumbnail: bla,
fileLength: 99999999999999,
caption: destiny,
footer: `🍥 CLAN_UZUMAKI 🍥

⭔❓Membros❓⭔

⭔ ${prefix}clan { nome do clan }

⭔🛡️Jutsu🛡️⭔

⭔Correntes de Selamento Adamantinas
⭔Formação Uzumaki
⭔Selo Consumidor do Demônio Morto
⭔Selo Consumidor do Demônio Morto: Liberar
⭔Estilo de Selamento de Oito Trigramas
⭔Selo de Quatro Símbolos
⭔Regeneração de Vigor
⭔Super Rasengan Uzumaki

⭔🧰Equipamentos🧰⭔

⭔Máscara Shinigami

⭔❗info❗⭔

Aqueles que herdam o "sangue do clã Uzumaki" (うずまき一族の血, Uzumaki ichizoku no chi) possuem uma "força vital" (生命力は, inochiryoku) a par com a de uma barata.[6] Como tal, eles têm uma expectativa de vida muito longa e também envelhecem mais devagar;[7] Mito Uzumaki nasceu antes da fundação de Konoha, mas viveu até o mandato do Terceiro Hokage, embora ainda mantendo a cor ruiva de seu cabelo. Essa vitalidade lhes permite suportar e sobreviver a ferimentos muito mais graves, ao mesmo tempo que se recompõem de ferimentos e exaustão em curtos períodos de tempo. Um jinchūriki com essas características é capaz de sobreviver a extração de uma Besta com Cauda, mesmo após um parto, ​​embora ele ainda fique gravemente enfraquecido.`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: ``,
body: `${NomeDoBot}`,
showAdAttribution: true,
mediaType:2,
thumbnail: bla,
sourceUrl: `${bundak}`,
mediaUrl: `${bundak}`,
}}
}
dens.sendMessage(from,
buttonMessage,
{quoted:selo}
)
}
break

case 'uchih': {
bunda = ["https://youtu.be/y5MZIkQNikc",
"https://youtu.be/ZpHcpTJoxOg",
"https://youtu.be/RdX4vzObuPA",
"https://youtu.be/7eGdZe3wQdU"]
bundak = bunda[Math.floor(Math.random() * bunda.length)]
hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
bla = await getBuffer('https://telegra.ph/file/7fd850240b990a57f321d.jpg')
let buttons = [
{buttonId: `${prefix}rgclans`, buttonText: {displayText: 'OUTROS'}, type: 1},
{buttonId: `${prefix}uchiha`, buttonText: {displayText: 'CONFIRMAR'}, type: 2}
]
destiny = ` `
let buttonMessage = {
document: fs.readFileSync('./logos/cheems.xlsx'),
jpegThumbnail: bla,
fileLength: 99999999999999,
caption: destiny,
footer: `⭕ CLAN_UCHIHA ⭕

⭔❓Membros❓⭔

⭔Sakura Haruno
⭔Baru Uchiha 
⭔Fugaku Uchiha
⭔Hazuki Uchiha 
⭔Hikaku Uchiha
⭔Inabi Uchiha
⭔Itachi Uchiha
⭔Izumi Uchiha
⭔Izuna Uchiha
⭔Kagami Uchiha
⭔Madara Uchiha
⭔Mikoto Uchiha
⭔Naka Uchiha 
⭔Naori Uchiha 
⭔Obito Uchiha
⭔Avó de Obito
⭔Rai Uchiha 
⭔Sarada Uchiha
⭔Sasuke Uchiha
⭔Setsuna Uchiha
⭔Taiko Uchiha 
⭔Tajima Uchiha
⭔Tekka Uchiha
⭔Teyaki Uchiha
⭔Uruchi Uchiha
⭔Yakumi Uchiha
⭔Yashiro Uchiha

⭔🛡️Jutsu🛡️⭔

⭔Liberação de Fogo: Grande Aniquilação de Fogo
⭔Liberação de Fogo: Grande Destruição de Fogo
⭔Liberação de Fogo: Técnica da Grande Bola de Fogo
⭔Liberação de Fogo: Grande Flor Flamejante
⭔Genjutsu: Sharingan
⭔Manipulando as lâminas triplas do moinho de vento
⭔Técnica do Passe do Santuário Naka
⭔Susanoo: Técnica da Grande Bola de Fogo 
⭔Formação da Chama Uchiha

⭔❗info❗⭔

Os Uchiha eram conhecidos por terem uma aptidão inata para todas as habilidades orientadas ao combate e uma taxa de crescimento avançada. Eles também têm uma qualidade de chakra especialmente potente, bem como uma afinidade natural pela transformação da natureza do fogo ; Uchiha não são verdadeiramente considerados adultos até que possam realizar com sucesso a Liberação de Fogo: Técnica da Grande Bola de Fogo . Uchihas excepcionais têm tanta habilidade com a Liberação de Fogo que são necessários vários usuários de Liberação de Água trabalhando em conjunto ou um usuário de Liberação de Água similarmente habilidoso para extinguir suas chamas. Uchiha também usa frequentemente ferramentas ninja em combate, sendo mais conhecido por seu uso deshuriken .

O Sharingan.
O clã Uchiha é mais temido por seu dōjutsu kekkei genkai , o Sharingan . Eles podem usar seu Sharingan para ver chakra, lançar vários genjutsu e, mais infame, copiar o jutsu dos oponentes . O Sharingan é uma habilidade tão versátil que muitos ninjas consideram mais sábio fugir do que enfrentar um Uchiha em um combate mano a mano. Sharingan pode evoluir para Mangekyō Sharinganexperimentando a perda de um ente querido, concedendo ao usuário um jutsu novo e mais poderoso. O uso excessivo do Mangekyō eventualmente rouba a visão do Mangekyō, algo que só pode ser restaurado ao receber os olhos de outra pessoa, de preferência de um irmão, para criar o Mangekyō "eterno". A mecânica do Mangekyō foi mal compreendida pelos Uchiha, fazendo com que muitos matassem pessoalmente seus entes queridos para ganhar poder.`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: ``,
body: `${NomeDoBot}`,
showAdAttribution: true,
mediaType:2,
thumbnail: bla,
sourceUrl: `${bundak}`,
mediaUrl: `${bundak}`,
}}
}
dens.sendMessage(from,
buttonMessage,
{quoted:selo}
)
}
break

case 'hyuug': {
bunda = ["https://youtu.be/z0keZbUaOMU",
"https://youtu.be/YhZGzdaPz0Y",
"https://youtu.be/HXJBa-K-W8w",
"https://youtu.be/u8Xakc6syvQ"]
bundak = bunda[Math.floor(Math.random() * bunda.length)]
hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
bla = await getBuffer('https://telegra.ph/file/7f6c77307089d077b3fa2.jpg')
let buttons = [
{buttonId: `${prefix}rgclans`, buttonText: {displayText: 'OUTROS'}, type: 1},
{buttonId: `${prefix}hyuuga`, buttonText: {displayText: 'CONFIRMAR'}, type: 2}
]
destiny = ` `
let buttonMessage = {
document: fs.readFileSync('./logos/cheems.xlsx'),
jpegThumbnail: bla,
fileLength: 99999999999999,
caption: destiny,
footer: `🔘 CLAN_HYUUGA 🔘

⭔❓Membros❓⭔

⭔Hyūga Elder
⭔Hanabi Hyūga
⭔Hiashi Hyūga
⭔Hinata Hyūga
⭔Mãe de Hinata e Hanabi 
⭔Hizashi Hyūga
⭔Hoheto Hyūga
⭔Iroha Hyūga
⭔Ko Hyūga
⭔Natsu Hyūga 
⭔Neji Hyūga
⭔Tokuma Hyūga
⭔Boruto Uzumaki
⭔Himawari Uzumaki

⭔🛡️Jutsu🛡️⭔

⭔Oito Trigramas Grid Palm 
⭔Oito Trigramas Mountain Crusher 
⭔Oito Trigramas Cento e Vinte e Oito Palms 
⭔Oito Trigramas Palmas Girando o Céu
⭔Oito Trigramas Dezesseis Palmas 
⭔Oito Trigramas Sessenta e Quatro Palmas
⭔Oito Trigramas Trinta e Duas Palmas 
⭔Oito Trigramas Twin Lions Crumbling Attack
⭔Palma de Vácuo de Oito Trigramas
⭔Palma de parede de vácuo de oito trigramas
⭔Front Lotus: Eight Trigrams Palms Revolving Heaven 
⭔Punho Gentil
⭔Corpo de um golpe de arte de punho suave
⭔Punho Gentil: Agulha Tenketsu 
⭔Punhos de Leão Gêmeo Espirais de Passo Gentil
⭔Punhos de Leão Gêmeo Passo Suave
⭔Juinjutsu da Família Principal Hyūga
⭔Palm Bottom
⭔Protegendo Oito Trigramas Sessenta e Quatro Palmas 

⭔❗info❗⭔

Foi notado que este clã possui mais de uma kekkei genkai. [6] Exclusivo da família principal dos Hyūga, eles herdaram o poderoso chakra de seu ancestral Hamura Ōtsutsuki diretamente. Somente aqueles que possuem este chakra especial podem tocar o Tenseigan sem sofrer seus efeitos colaterais.

O Byakugan.
Os Hyūga são conhecidos por possuir o altamente cobiçado Byakugan (白眼, literalmente significa: Olho Branco, ou seja: Olho Branco que Tudo Vê), uma kekkei genkai temida pela grande destreza visual que concede ao seu portador. A primeira habilidade do Byakugan dá ao usuário um campo de visão próximo de 360º, exceto por um ponto cego na parte de trás do pescoço acima da terceira vértebra torácica . A segunda habilidade é ser capaz de ver através de objetos sólidos e pode usar um grau de visão telescópica. A distância e o grau de visão telescópica variam de pessoa para pessoa e podem ser melhorados. Na Parte I, Nejifoi capaz de ver uma área de 50 metros, mas depois ele aumenta seu alcance visual para pelo menos 800 metros, enquanto o alcance de Hinata na Parte II se estende pelo menos até 10 km. No entanto, o Byakugan não pode ver através de certas barreiras, como a Formação das Quatro Neblinas Negras usada pelo Quarteto do Som . O terceiro e um dos maiores usos do Byakugan é a capacidade de ver o chakra, seu fluxo , bem como o sistema de circulação do chakra dentro do corpo com grande detalhe. 

Uma postura comum do Punho Gentil.
Os membros do clã são instruídos no uso do estilo Punho Gentil , que usa o Byakugan para visualizar o Sistema de Caminho de Chakra do oponente e desferir golpes precisos para desativar e impedir o fluxo de chakra . Devido ao treinamento neste estilo, os membros do clã Hyūga tendem a ter um excelente controle de chakra. Isso é enfatizado em técnicas que utilizam este controle de chakra, bem como as nuances da Arte do Punho Gentil. Por causa disso, o Punho Gentil é considerado o estilo de taijutsu mais forte de Konoha .

A Arte do Punho Gentil.
Outra habilidade possuída por membros deste clã concede-lhes a capacidade inata de expelir chakra de todos os tenketsu em seu corpo, permitindo-lhes utilizar totalmente o chakra com ataques como as técnicas Oito Trigramas Palmas Giratórias do Céu e as técnicas Gentle Fist Art One Blow Body . Isso permite que descendentes do clã, como Boruto , usem o Punho Gentil, apesar de não terem o Byakugan. Além disso, as técnicas do clã fora do estilo básico de luta Gentle Fist, como os Oito Trigramas Sessenta e Quatro Palmasetc., são ensinados apenas aos membros da casa principal. Neji, no entanto, contornou essa restrição aprendendo por conta própria através da observação básica, aumentando sua reputação como um "gênio" dentro do clã. `,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: ``,
body: `${NomeDoBot}`,
showAdAttribution: true,
mediaType:2,
thumbnail: bla,
sourceUrl: `${bundak}`,
mediaUrl: `${bundak}`,
}}
}
dens.sendMessage(from,
buttonMessage,
{quoted:selo}
)
}
break

case 'otsutsuk': {
bunda = ["https://youtu.be/W8Ll_aP0WSc",
"https://youtu.be/7bAE-DZsx6Q",
"https://youtu.be/Sjz-9W_w0IE",
"https://youtu.be/rdjQJ6NOduo"]
bundak = bunda[Math.floor(Math.random() * bunda.length)]
hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
bla = await getBuffer('https://telegra.ph/file/cc952bd5b842c6985f60d.jpg')
let buttons = [
{buttonId: `${prefix}rgclans`, buttonText: {displayText: 'OUTROS'}, type: 1},
{buttonId: `${prefix}otsutsuki`, buttonText: {displayText: 'CONFIRMAR'}, type: 2}
]
destiny = ` `
let buttonMessage = {
document: fs.readFileSync('./logos/cheems.xlsx'),
jpegThumbnail: bla,
fileLength: 99999999999999,
caption: destiny,
footer: `⚪ CLAN_OTSUTSUKI ⚪

⭔❓Membros❓⭔

⭔Kanna 
⭔Patriarca do Clã Ōtsutsuki 
⭔Asura Ōtsutsuki
⭔Hagoromo Ōtsutsuki
⭔Hamura Ōtsutsuki
⭔Indra Otsutsuki
⭔Isshiki Ōtsutsuki
⭔Kaguya Ōtsutsuki
⭔Kinshiki Ōtsutsuki
⭔Momoshiki Ōtsutsuki
⭔Toneri Ōtsutsuki
⭔Urashiki Ōtsutsuki 

⭔🛡️Jutsu🛡️⭔

⭔Amanohabaya
⭔Amenosubaruboshinomikoto
⭔Amenosubaruboshinomikoto: Gyokkō
⭔Amenosubaruboshinomikoto: Ryūgū 
⭔Criação Comestível de Chakra
⭔Técnica de Supressão de Chakra
⭔Daikokuten
⭔Kama
⭔Ōdachi Cortar
⭔Reencarnação de marionetes 
⭔Técnica de Marionetes
⭔Sukunahikona
⭔Técnica de Criação de Ferramenta
⭔Yomotsu Hirasaka

⭔❗info❗⭔

Descritos como uma raça de parasitas alienígenas por Amado, os Ōtsutsuki evoluem a partir da energia e da informação genética que servia como nutrientes das Frutas do Chakra quando absorvidas por suas respectivas Árvores Divinas, dando-lhes seu poder divino e longevidade ao ingeri-las. Alguns Ōtsutsuki podem até se transformar ao consumir chakra suficiente ou formas particulares de poder, como dōjutsu. Momoshiki afirma que a maior habilidade do Ōtsutsuki era sua habilidade de usar chakra; um feito previamente reservado para eles antes que Hagoromo o apresentasse à humanidade através do conceito de ninshū . Com ele, eles podem realizar proezas como voar ou esconder sua presença.

Todos os Ōtsutsuki possuem pelo menos uma habilidade inata , sendo o Byakugan o mais prevalente com o potencial de despertar o Tenseigan; Kaguya tem uma habilidade predecessora do Shikotsumyaku ; Urashiki e Momoshiki ambos têm o Rinnegan . Outra habilidade no anime foi a Liberação de Madeira vista por Asura.

A resiliência de Ōtsutsuki é estendida ainda mais através do selo Kāma . É concedido por um membro do clã antes de sua morte para o encaixe ou os únicos indivíduos disponíveis. Como resultado, a pessoa se torna o receptáculo do Ōtsutsuki (器, utsuwa), preservando seu perfil genético dentro do selo. O Kāma concede ao seu receptor habilidades de absorção de chakra e outras habilidades únicas do Ōtsutsuki, embora sua função principal seja a ressurreição real do Ōtsutsuki em questão. Com o tempo, o Kāma reescreverá seu corpo com os dados genéticos de Ōtsutsuki, transformando o portador no falecido Ōtsutsuki que às vezes pode manifestar sua vontade através do corpo. Em última análise, todos os dados serão extraídos para o hospedeiro, apagando sua personalidade e levando ao renascimento do Ōtsutsuki em um novo corpo, mantendo as memórias, conhecimentos e habilidades do hospedeiro. No entanto, nem toda pessoa é um recipiente "perfeito" para o Ōtsutsuki, enquanto o incompatível não é capaz de lidar com o poder do Ōtsutsuki adequadamente, que levará à sua morte em vários dias se tal vaso for usado para o avivamento. No caso de um candidato a um receptáculo falhar, ele pode receber um Kāma Branco, que concede a ele o poder puro do Ōtsutsuki, mas não tem capacidade de renascimento. Esses portadores podem se tornar um Ōtsutsuki se consumirem uma fruta de chakra.`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: ``,
body: `${NomeDoBot}`,
showAdAttribution: true,
mediaType:2,
thumbnail: bla,
sourceUrl: `${bundak}`,
mediaUrl: `${bundak}`,
}}
}
dens.sendMessage(from,
buttonMessage,
{quoted:selo}
)
}
break

case 'akatsuk': {
bunda = ["https://youtu.be/c1ZgCnPBvUI",
"https://youtu.be/2cUoHJvqMfw",
"https://youtu.be/QE-dsJ5zB_0",
"https://youtu.be/-TbM-7dgjTo"]
bundak = bunda[Math.floor(Math.random() * bunda.length)]
hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
bla = await getBuffer('https://telegra.ph/file/fca1430cb82e66fa32f7e.jpg')
let buttons = [
{buttonId: `${prefix}rgclans`, buttonText: {displayText: 'OUTROS'}, type: 1},
{buttonId: `${prefix}akatsuki`, buttonText: {displayText: 'CONFIRMAR'}, type: 2}
]
destiny = ` `
let buttonMessage = {
document: fs.readFileSync('./logos/cheems.xlsx'),
jpegThumbnail: bla,
fileLength: 99999999999999,
caption: destiny,
footer: `♦️CLAN_AKATSUKI♦️

⭔❓Membros❓⭔

⭔Nagato e Konan
⭔Zetsu preto e Zetsu branco
⭔Orochimaru e Sasori
⭔Juzo e Itachi
⭔Itachi e Kisame
⭔Sasori e Deidara
⭔Kakuzu e Hidan
⭔Deidara e Tobi

 
 ⭔❗info❗⭔
 
A missão da Akatsuki de capturar as Bestas com Cauda gradualmente as eleva das sombras do mundo e, por sua vez, provoca uma resistência crescente das aldeias ocultas. Depois que Deidara captura o One-Tail , Sasori é morto em batalha com as forças de Suna e Konoha enviadas para resgatar o jinchūriki do One-Tail . Obito aproveita esta posição aberta como uma oportunidade para se juntar oficialmente à Akatsuki como "Tobi", ajudando a capturar o Três-Caudas . Na mesma época, Hidan e Kakuzu capturam o Duas-Caudas , mas ambos são posteriormente derrotados em confrontos não relacionados com Nijū Shōtai de Konoha . Kisame Hoshigaki mais tarde adquire o Quatro-Caudas, após o qual ambos Deidara e Itachi morrem separadamente na batalha contra Sasuke Uchiha .`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: ``,
body: `${NomeDoBot}`,
showAdAttribution: true,
mediaType:2,
thumbnail: bla,
sourceUrl: `${bundak}`,
mediaUrl: `${bundak}`,
}}
}
dens.sendMessage(from,
buttonMessage,
{quoted:selo}
)
}
break

//==============Clans 🥋

case 'rgclans':
 sections = [
    {
	title: `CLANS RPG`,
	rows: [
  	   {title: "akatsuki", rowId: `${prefix}akatsuk`},
	   {title: "otsutsuki", rowId: `${prefix}otsutsuk`},
	   {title: "uzumaki", rowId: `${prefix}uzumak`},
	   {title: "hyuuga", rowId: `${prefix}hyuug`},
	   {title: "uchiha", rowId: `${prefix}uchih`},
	]
    },
]
  listMessage2 = {
  text: 'Você quer se cadastra?',
  footer: 'Selecione uma das guildas abaixo.',
  title: `Olá ${pushname}`,
  buttonText: "Clique",
  sections
}
sendMsg = await dens.sendMessage(from, listMessage2, {quoted: selo})
break

case 'akatsuki':
case 'hyuuga':
case 'otsutsuki':
case 'uchiha':
case 'uzumaki':
if (clanId(sender) == undefined){
var i = dataclan.indexOf(command)
guildas[i].id.push(sender)
fs.writeFileSync(guildasdir, JSON.stringify(guildas, null, 2) + '\n')
neroespera('seu cadastro foi concluído')
} else {
reply('Vc esta cadastrado em: ' + clanId(sender))
}
break

case 'left':
if (clanId(sender) == undefined) return reply('Vc não pertence a nenhum clan')
var i = clanPs(sender)
guildas[i].id.splice(sender)
fs.writeFileSync(guildasdir, JSON.stringify(guildas, null, 2) + '\n')
reply('Saindo do clan')
break

case 'clan':
if (!args.join(' ')) return reply('Cade o clan?')
texting = args.join(' ')
var i = dataclan.indexOf(texting)
if (guildas[i].id.length < 1) return reply ('Não a ninguém neste clan')
wew = guildas[i].id.toString()
wew1 = wew.replace(/@s.whatsapp.net/g, "")
jet = `@${wew1.replace(/,/g, "\n@")}`
tenks = `
Clan *${texting}*

Level = ${levelclanId(texting)}

Ataques = ${attacksclanId(texting)}

Quantidade de Membros = ${guildas[i].id.length}

${jet}`
dens.sendMessage(from, {text: tenks, mentions: guildas[i].id})
break

case 'battle':
if (clanId(sender) == undefined) return reply('Vc não pertence a nenhum clan')
if (!args.join(' ')) return reply('Batalhar com quem?')
bat = Math.floor(Math.random() * 100) + 1
clan1 = args.join(' ')
clan2 = clanId(sender)
if (clan1 == clan2) return reply ('Não pode batalhar com si mesmo')
var i = dataclan.indexOf(clan1)
if (guildas[i].id.length < 1) return reply ('Não a ninguém neste clan')
battle = [
  `https://telegra.ph/file/2e79a8c86cc1e201a6e8f.mp4`,
  `https://telegra.ph/file/d0aff5622eeee9fb2937c.mp4`,
  `https://telegra.ph/file/c275cc1c5d6e3cf6285f0.mp4`,
  `https://telegra.ph/file/6728fdf0ebabda60004aa.mp4`,
  `https://telegra.ph/file/5e28566a5ec5c8c768290.mp4`,
  `https://telegra.ph/file/654ed89b663f29539252b.mp4`,
  `https://telegra.ph/file/73610a8921f8a880f5e85.mp4`,
  `https://telegra.ph/file/c166578590f3dbd0c1585.mp4`]
reply(`${pushname} esta desafiando ${clan1}`)
await sleep(5000)
if (bat > 50){
txt = `vc ganhou`
clanLevel(clan2, 1000)
clanAttacks(clan2, 1)
}
if (bat <= 50){
txt = `vc perdeu`
clanLevel(clan1, 1000)
clanAttacks(clan1, 1)
}
ravideo = battle[Math.floor(Math.random() * battle.length)]
sendBvid(from, ravideo, txt, '', [{index: 2, quickReplyButton: {displayText: `Ok ${NomeDoBot}`, id: ``}}], selo)
break

case 'resetclan':
a = [
{
clan: "akatsuki",
level: 0,
attacks: 0,
id: []
},
{
clan: "hyuuga",
level: 0,
attacks: 0,
id: []
},
{
clan: "otsutsuki",
level: 0,
attacks: 0,
id: []
},
{
clan: "uchiha",
level: 0,
attacks: 0,
id: []
},
{
clan: "uzumaki",
level: 0,
attacks: 0,
id: []
}
]
fs.writeFileSync(guildasdir, JSON.stringify(a, null, 2) + '\n')
break

//===================Dinheiro 💰💰💰

case 'carteira':
if (MoneyId === undefined){
rafa = {id: sender, nome: pushname, dinheiro: 0}
dinheiro.push(rafa)
fs.writeFileSync('./datab/jsons/dinheiro/dinheiro.json', JSON.stringify(dinheiro, null, 2))
}
userg = getMoney(sender)
blk = await getBuffer('https://telegra.ph/file/8233607db2c482dc14a53.jpg')
wew = `•────•───────•───•
┣❲📂❳ Transferência: Nubank💳
┣❲💰❳ Dinheiro: ${userg}
┣❲🏦❳ Banco: ${NomeDoBot}
┣❲👥❳ Grupo: ${groupName}
┣❲☎️❳ Numero: ${sender.split('@')[0]}
•────•───────•───•`
dens.sendMessage(from, {image:blk, caption: wew, footer: " ", templateButtons: [{index: 2, quickReplyButton: {displayText: '🛒Voltar a Loja🛒', id: `${prefix}loja`}},
{index: 2, quickReplyButton: {displayText: '💰Ganhar mais Money💰', id: `${prefix}minerar`}}, 
{index: 3, quickReplyButton: {displayText: '💤Finalizar💤', id: `nada`}}]}, {quoted: info})
break

case 'pix':
texto = args.join(' ')
if (isNaN(texto) || !texto) return reply(`Cade o valor, exemplo: ${prefix + command} 700`)
dinheiro.sort((a, b) => (a.dinheiro < b.dinheiro) ? 1 : -1)
var objs = []
for (let x of dinheiro){
var data = {
rowId: `${prefix}transferir ${x.id}#${texto}`,
title: x.nome,
description: `Saldo: ${x.dinheiro}`
}
objs.push(data)
}
  listMessage2 = {
  text: 'Ola você deseja transferir algum valor pra alguém? escolha pra quem você quer doar essa quantia, caso outra pessoa utilize essa lista, será descontada do valor do indivíduo',
  footer: 'Selecione uma das opções e aperte em Enviar',
  title: `Olá ${pushname}`,
  buttonText: "Escolha aqui",
  sections: [{
	title: `TRANSFERÊNCIA`,
	rows: objs
}]
}
sendMsg = await dens.sendMessage(from, listMessage2, {quoted: selo})
break

case 'transferir':
if (MoneyId === undefined) return reply(`Use primeiro o comando ${prefix}carteira`)
texto = args.join(' ')
texto1 = texto.split("#")[0]
texto2 = parseInt(texto.split("#")[1])
if(!texto.includes("#")) return
if (getMoneyId(texto1) == undefined) return reply('Chave Pix não encontrada')
wew = {url: 'https://telegra.ph/file/ae390c9663c6ac74c4eb3.jpg'}
rafa = `•────•────•───•
          _⚠︎𝙳𝙴𝚂𝚃𝙸𝙽𝙾⚠︎_
•────•────•───•
┣❲ 𝙽𝚘𝚖𝚎: @${texto1.split('@')[0]} ❳
┣❲ I𝚗𝚜𝚝𝚒𝚝𝚞𝚒𝚌̧𝚊̃𝚘: ${NomeDoBot} ❳
┣❲ 𝙰𝚐𝚎̂𝚗𝚌𝚒𝚊: NuBank 🆔 ❳
┣❲ 𝙲𝚘𝚗𝚝𝚊: Particular 🏦 ❳
┣❲ 𝚃𝚛𝚊𝚗𝚜𝚏𝚎𝚛𝚎̂𝚗𝚌𝚒𝚊: Pix ❳
•────•───•───•
          _⚠︎𝙾𝚁𝙸𝙶𝙴𝙼⚠︎_
•────•───•───•̃
┣❲ 𝙽𝚘𝚖𝚎: ${pushname} ❳
┣❲ 𝚅𝚊𝚕𝚘𝚛: ${texto2} ❳
┣❲ 𝙽𝚞𝚖𝚎𝚛𝚘: ${sender.split('@')[0]} ❳
•────•───•───•`
if (texto2 <= userId){
money(sender, -texto2)
money(texto1, texto2)
dens.sendMessage(from, {image:wew, caption: rafa, templateButtons: [{index: 2, quickReplyButton: {displayText: `Ok ${NomeDoBot}`, id: 'nada'}}]}, {quoted: info})
} else {
reply('Falha na Transação')
}
break

case 'roubar':
if (MoneyId === undefined) return reply(`Use primeiro o comando ${prefix}carteira`)
if(!args.join(' ').includes("@")) return reply(`Use assim exemplo: ${prefix}roubar @nero`)
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
teks = `${mentioned[0].split('@')[0]}@s.whatsapp.net`
consu = getMoneyId(teks)
if (consu === undefined) return reply('Usuario não registrado 😔')
if (isRoubar) return reply("Roubo em andamento, aguarde ⏳")
roubar.push(sender)
fs.writeFileSync('./datab/jsons/dinheiro/roubar.json', JSON.stringify(roubar, null, 2))
wew = await getBuffer('https://telegra.ph/file/0525a56df1a5442b94eef.jpg')
top = await getBuffer('https://telegra.ph/file/43ddb6676fdc09a45e216.jpg')
menc = [`${mentioned[0].split('@')[0]}@s.whatsapp.net`]
dens.sendMessage(from, {image:wew, caption: `O ${pushname}, acaba de roubar o @${mentioned[0].split('@')[0]}, o prazo para ele voltar, é de 3 minutos ⏳`, mentions: menc, templateButtons: [{index: 2, quickReplyButton: {displayText: `Ok ${NomeDoBot}`, id: 'nada'}}]}, {quoted: info})
await sleep(180000)
userg = getMoney(teks)
ncash = Math.floor(Math.random() * userg)
money(teks, -ncash)
money(sender, ncash)
userg = getMoney(sender)
rafa = `•────•───────•───•
┣❲🎯❳ ${pushname} terminou o roubo
┣❲💰❳ Recompensa: ${ncash}
┣❲💵❳ Saldo: ${userg}
┣❲🏦❳ Banco: ${NomeDoBot}
┣❲☎️❳ Numero:  ${sender.split('@')[0]}
•────•───────•───•`
dens.sendMessage(from, {image:top, caption: rafa, templateButtons: [{index: 2, quickReplyButton: {displayText: `Ok ${NomeDoBot}`, id: 'nada'}}]}, {quoted: info})
processo = roubar.indexOf(sender)
roubar.splice(processo, 1)
fs.writeFileSync('./datab/jsons/dinheiro/roubar.json',JSON.stringify(roubar, null, 2))
break

case 'minerar':
if (MoneyId === undefined) return reply(`Use primeiro o comando ${prefix}carteira`)
sections = [{
title: '🛒',
rows: [
{title: "Picareta de Madeira ⛏️", rowId: `${prefix}pic madeira`, description: "Custo R$ 0,00"},
{title: "Picareta de Pedra ⛏️", rowId: `${prefix}pic pedra`, description: "Custo R$ 1000,00"},
{title: "Picareta de Ouro ⛏️", rowId: `${prefix}pic ouro`, description: "Custo R$ 2000,00"},
{title: "Picareta de Ferro ⛏️", rowId: `${prefix}pic ferro`, description: "Custo R$ 4000,00"},
{title: "Picareta de Diamante ⛏️", rowId: `${prefix}pic diamante`, description: "Custo R$ 8000,00"},
{title: "Picareta de Netherite ⛏️", rowId: `${prefix}pic netherite`, description: "Custo R$ 16000,00"}
]}]
listMessage2 = {
  text: `Agora Você Vai Escolher Uma Picareta Para Poder Minerar`,
  footer: `${NomeDoBot}`,
  title: "⛏️ ESCOLHA SUA PICARETA ⛏️",
  buttonText: `Aperte Aqui`,
  sections}
dens.sendMessage(from, listMessage2, {quoted: selo})
break

case 'pic':
if(MoneyId === undefined) return reply(`Use primeiro o comando ${prefix}carteira`)
imgtop = await getBuffer('https://telegra.ph/file/93a03ed7e6f5e58d2b73c.jpg')
audioxp = await getBuffer('https://telegra.ph/file/b6f84e61025e6feb017f5.mp4')
if (q === 'madeira'){
if (isMinerar) return reply("Mineração em andamento, aguarde ⏳")
minerar.push(sender)
fs.writeFileSync('./datab/jsons/dinheiro/minerar.json', JSON.stringify(minerar, null, 2))
wew = await getBuffer('https://telegra.ph/file/18211fadb4b503e7b6a18.jpg')
dens.sendMessage(from, {image: wew, caption: `O ${pushname}, acabou de entrar em uma jornada, aguarde um instante ⏳`, footer: "", templateButtons: [{index: 2, quickReplyButton: {displayText: `Ok ${NomeDoBot}`, id: 'nada'}}]}, {quoted: info})
await sleep(180000)
dens.sendMessage(from, {audio: audioxp, mimetype: 'audio/mp4', ptt:true}, {quoted:info})
await sleep(2000)
ncash = Math.floor(Math.random() * 501)
money(sender, ncash)
userg = getMoney(sender)
top = `•────•───────•───•
┣❲⛏️❳ ${pushname} voltou da mina
┣❲💰❳ Recompensa: ${ncash}
┣❲💵❳ Saldo: ${userg}
┣❲🏦❳ Banco: ${NomeDoBot}
┣❲☎️❳ Numero: ${sender.split('@')[0]}
•────•───────•───•`
dens.sendMessage(from, {image: imgtop, caption: top, footer: "", templateButtons: [{index: 2, quickReplyButton: {displayText: '⛏️ Minerar Novamente ⛏️', id: `${prefix}pic madeira`}}]}, {quoted: info})
processo = minerar.indexOf(sender)
minerar.splice(processo, 1)
fs.writeFileSync('./datab/jsons/dinheiro/minerar.json',JSON.stringify(minerar, null, 2))
}
if (q === 'pedra'){
if (userId === 1000 || userId > 1000){
money(sender, -1000)
if (isMinerar) return reply("Mineração em andamento, aguarde ⏳")
minerar.push(sender)
fs.writeFileSync('./datab/jsons/dinheiro/minerar.json', JSON.stringify(minerar, null, 2))
wew = await getBuffer('https://telegra.ph/file/5dce1650c1b1ee45eb670.jpg')
dens.sendMessage(from, {image: wew, caption: `O ${pushname}, acabou de entrar em uma jornada, aguarde um instante ⏳`, footer: "", templateButtons: [{index: 2, quickReplyButton: {displayText: `Ok ${NomeDoBot}`, id: 'nada'}}]}, {quoted: info})
await sleep(150000)
dens.sendMessage(from, {audio: audioxp, mimetype: 'audio/mp4', ptt:true}, {quoted:info})
await sleep(2000)
ncash = Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000
money(sender, ncash)
userg = getMoney(sender)
top = `•────•───────•───•
┣❲⛏️❳ ${pushname} voltou da mina
┣❲💰❳ Recompensa: ${ncash}
┣❲💵❳ Saldo: ${userg}
┣❲🏦❳ Banco: ${NomeDoBot}
┣❲☎️❳ Numero: ${sender.split('@')[0]}
•────•───────•───•`
dens.sendMessage(from, {image: imgtop, caption: top, footer: "", templateButtons: [{index: 2, quickReplyButton: {displayText: '⛏️ Minerar Novamente ⛏️', id: `${prefix}pic pedra`}}]}, {quoted: info})
processo = minerar.indexOf(sender)
minerar.splice(processo, 1)
fs.writeFileSync('./datab/jsons/dinheiro/minerar.json',JSON.stringify(minerar, null, 2))
} else {
reply("Saldo insuficiente 😔")
}}
if (q === 'ouro'){
if (userId === 2000 || userId > 2000){
money(sender, -2000)
if (isMinerar) return reply("Mineração em andamento, aguarde ⏳")
minerar.push(sender)
fs.writeFileSync('./datab/jsons/dinheiro/minerar.json', JSON.stringify(minerar, null, 2))
wew = await getBuffer('https://telegra.ph/file/6381539c440b599722f4d.jpg')
dens.sendMessage(from, {image: wew, caption: `O ${pushname}, acabou de entrar em uma jornada, aguarde um instante ⏳`, footer: "", templateButtons: [{index: 2, quickReplyButton: {displayText: `Ok ${NomeDoBot}`, id: 'nada'}}]}, {quoted: info})
await sleep(120000)
dens.sendMessage(from, {audio: audioxp, mimetype: 'audio/mp4', ptt:true}, {quoted:info})
await sleep(2000)
ncash = Math.floor(Math.random() * (4000 - 2000 + 1)) + 2000
money(sender, ncash)
userg = getMoney(sender)
top = `•────•───────•───•
┣❲⛏️❳ ${pushname} voltou da mina
┣❲💰❳ Recompensa: ${ncash}
┣❲💵❳ Saldo: ${userg}
┣❲🏦❳ Banco: ${NomeDoBot}
┣❲☎️❳ Numero: ${sender.split('@')[0]}
•────•───────•───•`
dens.sendMessage(from, {image: imgtop, caption: top, footer: "", templateButtons: [{index: 2, quickReplyButton: {displayText: '⛏️ Minerar Novamente ⛏️', id: `${prefix}pic ouro`}}]}, {quoted: info})
processo = minerar.indexOf(sender)
minerar.splice(processo, 1)
fs.writeFileSync('./datab/jsons/dinheiro/minerar.json',JSON.stringify(minerar, null, 2))
} else {
reply("Saldo insuficiente 😔")
}}
if (q === 'ferro'){
if (userId === 4000 || userId > 4000){
money(sender, -4000)
if (isMinerar) return reply("Mineração em andamento, aguarde ⏳")
minerar.push(sender)
fs.writeFileSync('./datab/jsons/dinheiro/minerar.json', JSON.stringify(minerar, null, 2))
wew = await getBuffer('https://telegra.ph/file/c7c476eaadc68c41138f8.jpg')
dens.sendMessage(from, {image: wew, caption: `O ${pushname}, acabou de entrar em uma jornada, aguarde um instante ⏳`, footer: "", templateButtons: [{index: 2, quickReplyButton: {displayText: `Ok ${NomeDoBot}`, id: 'nada'}}]}, {quoted: info})
await sleep(90000)
dens.sendMessage(from, {audio: audioxp, mimetype: 'audio/mp4', ptt:true}, {quoted:info})
await sleep(2000)
ncash = Math.floor(Math.random() * (8000 - 4000 + 1)) + 4000
money(sender, ncash)
userg = getMoney(sender)
top = `•────•───────•───•
┣❲⛏️❳ ${pushname} voltou da mina
┣❲💰❳ Recompensa: ${ncash}
┣❲💵❳ Saldo: ${userg}
┣❲🏦❳ Banco: ${NomeDoBot}
┣❲☎️❳ Numero: ${sender.split('@')[0]}
•────•───────•───•`
dens.sendMessage(from, {image: imgtop, caption: top, footer: "", templateButtons: [{index: 2, quickReplyButton: {displayText: '⛏️ Minerar Novamente ⛏️', id: `${prefix}pic ferro`}}]}, {quoted: info})
processo = minerar.indexOf(sender)
minerar.splice(processo, 1)
fs.writeFileSync('./datab/dinheiro/minerar.json',JSON.stringify(minerar, null, 2))
} else {
reply("Saldo insuficiente 😔")
}}
if (q === 'diamante'){
if (userId === 8000 || userId > 8000){
money(sender, -8000)
if (isMinerar) return reply("Mineração em andamento, aguarde ⏳")
minerar.push(sender)
fs.writeFileSync('./datab/jsons/dinheiro/minerar.json', JSON.stringify(minerar, null, 2))
wew = await getBuffer('https://telegra.ph/file/feefd5fc4f401968b4154.jpg')
dens.sendMessage(from, {image: wew, caption: `O ${pushname}, acabou de entrar em uma jornada, aguarde um instante ⏳`, footer: "", templateButtons: [{index: 2, quickReplyButton: {displayText: `Ok ${NomeDoBot}`, id: 'nada'}}]}, {quoted: info})
await sleep(60000)
dens.sendMessage(from, {audio: audioxp, mimetype: 'audio/mp4', ptt:true}, {quoted:info})
await sleep(2000)
ncash = Math.floor(Math.random() * (16000 - 8000 + 1)) + 8000
money(sender, ncash)
userg = getMoney(sender)
top = `•────•───────•───•
┣❲⛏️❳ ${pushname} voltou da mina
┣❲💰❳ Recompensa: ${ncash}
┣❲💵❳ Saldo: ${userg}
┣❲🏦❳ Banco: ${NomeDoBot}
┣❲☎️❳ Numero: ${sender.split('@')[0]}
•────•───────•───•`
dens.sendMessage(from, {image: imgtop, caption: top, footer: "", templateButtons: [{index: 2, quickReplyButton: {displayText: '⛏️ Minerar Novamente ⛏️', id: `${prefix}pic diamante`}}]}, {quoted: info})
processo = minerar.indexOf(sender)
minerar.splice(processo, 1)
fs.writeFileSync('./datab/jsons/dinheiro/minerar.json',JSON.stringify(minerar, null, 2))
} else {
reply("Saldo insuficiente 😔")
}}
if (q === 'netherite'){
if (userId === 16000 || userId > 16000){
money(sender, -16000)
if (isMinerar) return reply("Mineração em andamento, aguarde ⏳")
minerar.push(sender)
fs.writeFileSync('./datab/jsons/dinheiro/minerar.json', JSON.stringify(minerar, null, 2))
wew = await getBuffer('https://telegra.ph/file/82a8d8b9f079efb24ba0f.jpg')
dens.sendMessage(from, {image: wew, caption: `O ${pushname}, acabou de entrar em uma jornada, aguarde um instante ⏳`, footer: "", templateButtons: [{index: 2, quickReplyButton: {displayText: `Ok ${NomeDoBot}`, id: 'nada'}}]}, {quoted: info})
await sleep(2000)
dens.sendMessage(from, {audio: audioxp, mimetype: 'audio/mp4', ptt:true}, {quoted:info})
await sleep(2000)
ncash = Math.floor(Math.random() * (32000 - 16000 + 1)) + 16000
money(sender, ncash)
userg = getMoney(sender)
top = `•────•───────•───•
┣❲⛏️❳ ${pushname} voltou da mina
┣❲💰❳ Recompensa: ${ncash}
┣❲💵❳ Saldo: ${userg}
┣❲🏦❳ Banco: ${NomeDoBot}
┣❲☎️❳ Numero: ${sender.split('@')[0]}
•────•───────•───•`
dens.sendMessage(from, {image: imgtop, caption: top, footer: "", templateButtons: [{index: 2, quickReplyButton: {displayText: '⛏️ Minerar Novamente ⛏️', id: `${prefix}pic netherite`}}]}, {quoted: info})
processo = minerar.indexOf(sender)
minerar.splice(processo, 1)
fs.writeFileSync('./datab/jsons/dinheiro/minerar.json',JSON.stringify(minerar, null, 2))
} else {
reply("Saldo insuficiente 😔")
}}
break

case 'resetgame':
if (isGroupAdmins || SoDono){
fs.writeFileSync('./datab/jsons/dinheiro/minerar.json',JSON.stringify([ ], null, 2))
fs.writeFileSync('./datab/jsons/dinheiro/roubar.json',JSON.stringify([ ], null, 2))
reply("Os Jogos foram resetados 🎮")
} else {
reply("Somente admin e o dono, podem usar este comando")
}
break

//////////////LOJA///////////////

case 'timer':
texto = args.join(' ')
jet = `Erro, use:\n\n${prefix + command} 10s\n${prefix + command} 5m\n${prefix + command} 1h`
if (!texto) return reply(jet)
if (texto.includes('s')){
var timer = texto.split('s')[0]*1000
} else if (texto.includes('m')){
var timer = texto.split('m')[0]*60000
} else if (texto.includes('h')){
var timer = texto.split('h')[0]*3600000
}
if (!texto.includes('s') && !texto.includes('m') && !texto.includes('h')) return reply(jet)
await sleep(timer)
dens.sendMessage(from, {text: `Seu tempo acabou\nJá se passou ${texto}`, mentions: [sender]}, {quoted: selo})
break

case 'ddd':
if (args.length < 1) return reply(`Use ${prefix + command} 81`)
if(MoneyId === undefined) return reply("Use primeiro o comando carteira")
if (userId === 50 || userId > 50){
money(sender, -50)
ddd = body.slice(5)
ddds = await axios.get(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
dddlist = `Lista de Cidades de ${ddds.data.state} com este DDD ${q}>\n\n`
for (let i = 0; i < ddds.data.cities.length; i++) { dddlist += `${i + 1} ⪧ *${ddds.data.cities[i]}*\n` }
dens.sendMessage(from, {text: dddlist}, {quoted: info})	
} else {
reply("Saldo insuficiente")
}
break

case 'cep':
if(MoneyId === undefined) return reply("Use primeiro o comando carteira")
if (userId === 100 || userId > 100){
money(sender, -100)
if (args.length == 0) return reply(`Exemplo: ${prefix + command} 54330235`)
query = args.join(" ")
get_result = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/tools/cep?apikey=apiteam&cep=${query}`)
x = get_result.resultado
k = `CEP : ${x.cep}
LOGRADOURO: ${x.logradouro}
BAIRRO : ${x.bairro}
LOCALIDADE : ${x.localidade}
UF : ${x.uf}
IBGE : ${x.ibge}
GIA : ${x.gia}
DDD : ${x.ddd}
SIAFI : ${x.siafi}`
reply(k)
} else {
reply("Saldo insuficiente")
}
break

case 'gerarcpf':
if(MoneyId === undefined) return reply("Use primeiro o comando carteira")
if (userId === 100 || userId > 100){
money(sender, -100)
cp1 = `${Math.floor(Math.random() * 300) + 600}`
cp2 = `${Math.floor(Math.random() * 300) + 600}`
cp3 = `${Math.floor(Math.random() * 300) + 600}`
cp4 = `${Math.floor(Math.random() * 30) + 60}`
cpf = `${cp1}.${cp2}.${cp3}-${cp4}`
await dens.sendMessage(from, {text: `CPF gerado com sucesso : ${cpf}`}, {quoted: info})
} else {
reply("Saldo insuficiente")
}
break

////////////////FIM////////////////

case 'cancelar':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono && !isGroupAdmins) return reply(enviar.msg.adm)
buttons = [
  {buttonId: `${prefix}pix`, buttonText: {displayText: '✅VOLTAR'}, type: 1},
  {buttonId: `${prefix}minerar`, buttonText: {displayText: '🛒MINERAR'}, type: 1}]
buttonMessage = {
    text: "Olá foi cancelado com sucesso o comando usado pra vê as configurações do seu saldo atual⚙️",
    footer: `@${NomeDoBot}`,
    buttons: buttons,
    headerType: 1
}
sendMsg =  dens.sendMessage(from, buttonMessage, {quoted: selo}) 
break

//============================

case 'dado':
rafa = Math.floor(Math.random() * 6) + 1
bla = fs.readFileSync(`./logos/dado/${rafa}.webp`)
dens.sendMessage(from, {sticker: bla}, {quoted: info})
buttons = [
  {buttonId: `${prefix}Dado`, buttonText: {displayText: '🎲「Jogar Novamente」🎲'}, type: 1},
  {buttonId: `${prefix}sundado`, buttonText: {displayText: '🎲「Não Jogar」🎲'}, type: 1}]
buttonMessage = {
    text: "Estou jogando o dado para você, se quiser que eu jogue novamente, selecione uma opção abaixo:",
    footer: '「🇸 🇺 🇳//🇧 🇴 🇹 //🇲 🇩 」',
    buttons: buttons,
    headerType: 1
}
sendMsg =  dens.sendMessage(from, buttonMessage, {quoted: selo}) 
break

case 'eunu':
try {
ppimg = await dens.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
sendBimg(from, ppimg, '*Hmm, Entendo*\nAinda Quer Brincar?', "Aperte No Botão Abaixo", [{buttonId: `${prefix}eununca`, buttonText: {displayText: `Sim`}, type: 1}])
break

case 'euj':
try {
ppimg = await dens.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
sendBimg(from, ppimg, '*Eita Que Polêmico*\nAinda Quer Brincar?', "Aperte No Botão Abaixo", [{buttonId: `${prefix}eununca`, buttonText: {displayText: `Sim`}, type: 1}])
break

case 'eununca': 
sections = [{
title: 'Eu Nunca 🌹',
rows: [
{title: "Eu Já", rowId: `${prefix}euj`}, 
{title: "Eu Nunca", rowId: `${prefix}eunu`},
]}]
listMessage2 = {
  text: `━━━━━── • ──━━━━━`,
  footer: ``,
  title: `━━━━━── • ──━━━━━\n\n• ${eunonk}\n\n`,
  buttonText: `Minha Resposta`,
  sections}
dens.sendMessage(from, listMessage2, {quoted: selo})
break

case 'moeda':
cara = Math.floor(Math.random() * 2) + 1
bla = fs.readFileSync(`./logos/cara/${cara}.webp`)
dens.sendMessage(from, {sticker: bla}, {quoted: info})
buttons = [
  {buttonId: `${prefix}moeda`, buttonText: {displayText: '🪙「Jogar Novamente」🪙'}, type: 1},
  {buttonId: `${prefix}sundado`, buttonText: {displayText: '🎲「Não Jogar」🎲'}, type: 1}]
buttonMessage = {
    text: "Estou jogando a moeda para você, se quiser que eu jogue novamente, selecione uma opção abaixo:",
    footer: '「 DESTINY-BOT 」',
    buttons: buttons,
    headerType: 1
}
sendMsg =  dens.sendMessage(from, buttonMessage, {quoted: selo}) 
break

case 'addnuvem':
textin = args.join(" ")
if(!textin) return reply(`Marque um Video/Imagem/Áudio/Figurinha/Documento\n\nExemplo: ${prefix + command} vídeo praia`)
rafa = `☁️ Arquivo adicionada na nuvem com Sucesso

📁 Use ${prefix}Getnuvem ${q}, para obter o arquivo novamente

⚠️ Atenção caso o bot esteja no heroku, lembre-se que o arquivo será armazenado temporariamente`
if (isQuotedVideo){
boij = isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.videoMessage : info
owgi = await getFileBuffer(boij, 'video')
fs.writeFileSync(`./nuvem/${q}.mp4`, owgi)
reply (rafa)
}
if (isQuotedImage){
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
owgi = await getFileBuffer(boij, 'image')
fs.writeFileSync(`./nuvem/${q}.jpg`, owgi)
reply (rafa)
}
if (isQuotedAudio){
boij = isQuotedAudio ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.audioMessage : info
owgi = await getFileBuffer(boij, 'audio')
fs.writeFileSync(`./nuvem/${q}.m4a`, owgi)
reply (rafa)
}
if (isQuotedSticker){
boij = isQuotedSticker ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.stickerMessage : info
owgi = await getFileBuffer(boij, 'sticker')
fs.writeFileSync(`./nuvem/${q}.webp`, owgi)
reply (rafa)
}
if (isQuotedDocument){
boij = isQuotedDocument ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.documentMessage : info
owgi = await getFileBuffer(boij, 'document')
fs.writeFileSync(`./nuvem/${q}.pdf`, owgi)
reply (rafa)
}
break

case 'getnuvem':
textin = args.join(" ")
if(!textin) return reply(`Utilize o nome do seu save\n\nExemplo: ${prefix + command} vídeo praia`)
if(fs.existsSync(`./nuvem/${q}.mp4`)){
dens.sendMessage(from, {video: fs.readFileSync(`./nuvem/${q}.mp4`), mimetype: 'video/mp4'}, {quoted: info})
}
if(fs.existsSync(`./nuvem/${q}.jpg`)){
dens.sendMessage(from, {image: fs.readFileSync(`./nuvem/${q}.jpg`)}, {quoted: info})
}
if(fs.existsSync(`./nuvem/${q}.m4a`)){
dens.sendMessage(from, {audio: fs.readFileSync(`./nuvem/${q}.m4a`), mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}
if(fs.existsSync(`./nuvem/${q}.webp`)){
dens.sendMessage(from, {sticker: fs.readFileSync(`./nuvem/${q}.webp`)}, {quoted: info})
}
if(fs.existsSync(`./nuvem/${q}.pdf`)){
dens.sendMessage(from, {document: fs.readFileSync(`./nuvem/${q}.pdf`), fileName: `${q}`}, {quoted: info})
}
break

case 'listnuvem':
exec('cd nuvem && ls', async (err, stdout) => {
if (err) return reply('Error')
wew = stdout.replace(/.mp4/g, " (Vídeo)")
wew2 = wew.replace(/.jpg/g, " (Imagem)")
wew3 = wew2.replace(/.m4a/g, " (Áudio)")
wew4 = wew3.replace(/.webp/g, " (Sticker)")
wew5 = wew4.replace(/.pdf/g, " (Documento)")
nuveimg = await getBuffer('https://telegra.ph/file/1068f8b44e286ef785cfe.jpg')
dens.sendMessage(from, {image:nuveimg, caption: `[📁]  Aqui está a lista de\nArquivos armazenados\n•───•─────•───•\n\n-${wew5}\n•───•─────•───•\nUse ${prefix}getnuvem (nome de um desses acima)\nPara obter o arquivo Novamente`, mentions: [sender]}, {quoted: selo})
})
break

//=====(FUNÇÕES-PREMIUM-AQUI)=======\\

case 'gitclone':
reply("Processando dados...") 
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!args[0]) reply(`Use ${prefix}gitclone repo link\nExemplo: https://github.com/NuevaGeneracionALB/aleatory-md`)
if (!regex1.test(args[0])) return reply(' ')
let [, user, repo] = args[0].match(regex1) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
dens.sendMessage(from, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: selo }).catch((err) => reply('ERROR!!'))
break

case 'lermais':
if(!q) return reply(`Cade o nome depois do Comando\nExemplo: ${prefix + command} Curioso né`)
dens.sendMessage(from, {text: `​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ ${q}`, footer: `Copie e Cole no Painel de Mensagem`, templateButtons: [{index: 1, urlButton: {displayText: `Copiar`, url: `https://www.whatsapp.com/otp/copy/${q}`}}]}, {quoted: info})
break

case 'getquoted':
case 'getinfo':
case 'get':
if (!SoDono && !info.key.fromMe) return 
reply(JSON.stringify(info.message.extendedTextMessage.contextInfo, null, 3))
break

case 'id':
case 'figuid':
if (!SoDono && !info.key.fromMe) return 
if (isQuotedSticker) {
var figu = info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString("base64");
reply(figu)
}
break

case 'placa':
sendBtext(from, enviar.espere, `@~ usuário: ${pushname}\n@~ Grupo: ${groupName}\n@~ cmd: ${prefix + command}`, [{buttonId: `nd`, buttonText: {displayText: `Obg ${NomeDoBot}`}, type: 1}], info)
if (args.length == 0) return reply(`Exemplo: ${prefix + command} 54330235`)
query = args.join(" ")
get_result = await fetchJson(`http://api.ifindconsultas.tk/?token=2d6de38e-6c92-485e-bacb-db64139f8a02&placa=${query}`)
x = get_result
k = `CPF : ${x.cpf}
NOME: ${x.nome}
PLACA : ${x.placa}
CHASSI : ${x.chassi}
RENAVAM : ${x.renavam}
CIDADE : ${x.cidade}
UF : ${x.uf}
CATEGORIA : ${x.categoria}
COMBUSTÍVEL : ${x.combustivel}`
reply(k)
break 

case 'covidglobal': 
				reply('*Aguarde, fazendo a pesquisa*')
				anu = await fetchJson('https://api-yogipw.herokuapp.com/api/info/covidworld')
				teks = `➸ *Total de Casos* : ${anu.result.totalCases}\n*➸ recuperados :* ${anu.result.recovered}\n*➸ Mortes :* ${anu.result.deaths}\n*➸ Casos ativos :* ${anu.result.activeCases}\n*➸ Casos Fechados :* ${anu.result.closedCases}\n*➸ Última atualização :* ${anu.result.lastUpdate}`
				dens.sendMessage(from, {text: teks},{quoted: selo})
				
break

case 'encurtalink':
sendBtext(from, enviar.espere, `@~ usuário: ${pushname}\n@~ Grupo: ${groupName}\n@~ cmd: ${prefix + command}`, [{buttonId: `nd`, buttonText: {displayText: `Obg ${NomeDoBot}`}, type: 1}], info)
if(args.length < 1) return reply(`Exemplo:\n${prefix}encurtalink https://youtube.com/c/aleatoryconteudos`)
try {
link = args[0]
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
reply(`${anu.data}`)
} catch (e) {
emror = String(e)
reply(`${e}`)
}
await limitAdd(sender)
break

case 'walink':
if (!isGroup) return reply(enviar.msg.grupo)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque A Pessoa Que Você Queira Fazer O Link')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
for (let _ of mentioned) {
dens.sendMessage(from, {text: `━━━━── • ──━━━━\n      ❏     Link Do @     ❏\n────────────\nLink: Wa.me//+${_.split('@')[0]}\n────────────\nCopyright © ${NomeDoBot}\n━━━━── • ──━━━━`, templateButtons: [{index: 1, urlButton: {displayText: `Copiar`, url: `https://www.whatsapp.com/otp/copy/Wa.me//+${_.split('@')[0]}`}}]}, {quoted: selo})}
break

case 'wame':
var captionnye = q.split('|')[0] || `wame gerado com sucesso,aperte no botão pra copiar.\n`
var displaynye = q.split('|')[1] || `COPIAR`
var copynye = q.split('|')[2] || (`wa.me/${sender.split('@')[0]} - *${pushname}*`)
 menuButa = [{index: 1, urlButton: {displayText: `${displaynye}`, url: 'https://www.whatsapp.com/otp/copy/'+copynye}}]
await dens.sendMessage(from, { text: `${captionnye}`, templateButtons: menuButa, footer: NomeDoBot })
break

case "copybutton":
var captionnye = q.split('|')[0] || `Textim legal`
var displaynye = q.split('|')[1] || `Copiar`
var copynye = q.split('|')[2] || `nero gostoso`
 menuButa = [
{index: 1, urlButton: {displayText: `${displaynye}`, url: 'https://www.whatsapp.com/otp/copy/'+copynye}},
]
await dens.sendMessage(from, { text: `${captionnye}`, templateButtons: menuButa, footer: NomeDoBot })
break

case 'cheradordeovo2k':
case 'aa':
var resultado = bunda.filter(function(objeto, indice){ if (objeto.id == sender) return indice });
console.log(resultado)
break

case 'nick': case 'gerarnick': 
case 'fazernick': {
let { styletext } = require('./lib/scraper')
if (!q) throw 'Digite seu nick!'
let anu = await styletext(q)
let teks = `Nicks Gerado A Parti Do Nome\n[--- *${q}* ---]\n\n`
for (let i of anu) {
teks += `*Fontes*: ${i.result}\n\n`
}
reply(teks)
}
break

case 'novolink':
  if (!SoDono && !info.key.fromMe) return reply(`Você não e o wa.me/${setting.numerodono} so ele pode usar esse comando kkkk`)
const code =  dens.groupRevokeInvite(from, "abcd-xyz@g.us")
    console.log("New group code: " + code)
    break

//========(ADMS-FUNÇÕES-AKI)=========\\

case 'calculadora':
case 'calcular':  
case 'calc':
teks = args.join(" ").replace("x", "*").replace("÷", "/")
.replace(new RegExp("abcdefghijklmnopqrstwyuvxz", "gi"), "1")
if(!body.includes('1') && !body.includes('2') && !body.includes('3') && !body.includes('4') && !body.includes('5') && !body.includes('6') && !body.includes('7') && !body.includes('8') && !body.includes('9') && !body.includes('10')) return reply('KD O NÚMERO?')
if(body.includes("document") || body.includes("audio") || body.includes("pdf") || body.includes("apk") || body.includes("image") || body.includes("video") || body.includes("text") || body.includes("conn") || body.includes("reply") || body.includes("console") || body.includes("'") || body.includes('"')) return reply("KD O CÁLCULO?")
console.log('[', color.green('EVAL', 'silver'),']', color.green(moment(info.messageTimestamp * 1000).format('DD/MM HH:mm:ss'), 'yellow'), color(budy))
return reply(JSON.stringify(eval(`${teks}`),null,'\t'))
break 

case 'status':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins && !SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.adm)
imgstts = `https://telegra.ph/file/b8115b073b3520abaab0a.jpg`
statuszada =
`╭╼╼╾❲ S T A T U S ❳╼╼╾╮
│
│➱ Antiaudio: ${isAntiAudio? '✓' : '✕'}
│➱ Antidocumento: ${Antidoc ? '✓' : '✕'}
│➱ Antifake: ${isAntifake ? '✓' : '✕'}
│➱ Antiimg: ${isAntiImg? '✓' : '✕'}
│➱ AntiSticker: ${isAntiSticker ? '✓' : '✕'}
│➱ Antiligação: ${isAnticall ? '✓' : '✕'}
│➱ AntiPv-Block: ${isAntiPv ? '✓' : '✕'}
│➱ AntilinkHard: ${isAntiLinkHard ? '✓' : '✕'}
│➱ LimiteCaracteres: ${isAntiFlood ? '✓' : '✕'}
│➱ AntiCatalogo: ${isAnticatalogo ? '✓' : '✕'}
│➱ AntiPalavrão: ${isPalavrao ? '✓' : '✕'}
│➱ Antivideo: ${isAntiVid ? '✓' : '✕'}
│➱ AntiLocalização: ${Antiloc ? '✓' : '✕'}
│➱ Bemvindo: ${isWelkom ? '✓' : '✕'}
│➱ Simih: ${isSimi ? '✓' : '✕'}
│
╰╼╾❲ ${NomeDoBot} ❳╼╾╯`
sendBimg(from, imgstts, statuszada, '', [{buttonId: `nd`, buttonText: {displayText: `Obrigado ${NomeDoBot} 🚩`}, type: 1}])
break

case 'nomegp':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
blat = args.join(" ")
dens.groupUpdateSubject(from, `${blat}`)
dens.sendMessage(from, {text: 'Sucesso, alterou o nome do grupo'}, {quoted: info})
break

case 'descgp':
case 'descriçãogp':  
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.adm)
blabla = args.join(" ")
dens.groupUpdateDescription(from, `${blabla}`)
dens.sendMessage(from, {text: 'Sucesso, alterou a descrição do grupo'}, {quoted: info})
break

case 'setfotogp':
case 'fotogp':  
addFilter(from)
if (!isGroup) return reply('Só pode ser utilizado em Grupo')
if (!isGroupAdmins) return reply('Você precisa ser ADM')
if (!isBotGroupAdmins) return reply('O bot Precisa ser ADM')
if (!isQuotedImage) return reply(`Use: ${prefix + command} <Marque uma foto>`)
ftgp = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(ftgp.mimetype))
buffimg = await getFileBuffer(ftgp, 'image')
fs.writeFileSync(rane, buffimg)
medipp = rane 
await dens.updateProfilePicture(from, {url: medipp})
reply(`Foto do grupo alterada com sucesso`) 
break

case 'atividade':
case 'atividades':  
try{
if(!isGroupAdmins && !issupre && !ischyt) return reply(enviar.msg.adm)
if(isGroup && groupIdscount.indexOf(from) >= 0) {
var ind = groupIdscount.indexOf(from)
teks = `*Atividade dos membros do grupo:*\n\n`
mem = []
ativid = await getBuffer('https://telegra.ph/file/1ac59b7dd958beb9c29ad.mp4')
for(let obj of groupMembers) {
if(numbersIds.indexOf(obj.id) >=0) {
var indnum = numbersIds.indexOf(obj.id)
teks += `*• Membro:* @${countMessage[ind].numbers[indnum].id.split('@')[0]}\n*• Comandos:* ${countMessage[ind].numbers[indnum].cmd_messages}\n*• Mensagens:* ${countMessage[ind].numbers[indnum].messages}\n\n----------------------------------\n\n`
} else {
teks += `*• Membro:* @${obj.id.split('@')[0]}\n*• Comandos:* 0\n*• Mensagens:* 0\n\n----------------------------------\n\n`
}
mem.push(obj.id)
}
dens.sendMessage(from, {video: ativid, caption: teks, gifPlayback: true, contextInfo:{mentionedJid: mem}}, {quoted: info})
} else return reply('*Nada foi encontrado*')
} catch (e){
console.log(e)
}
break

case 'delbot':  
if (!isGroup)return reply(enviar.msg.grupo)
if (!SoDono && !isGroupAdmins && !isPremium) return reply(enviar.msg.adm)
dens.sendMessage(from, { delete: { remoteJid: from, fromMe: true, id: info.message.extendedTextMessage.contextInfo.stanzaId, participant: sender }})
.catch((err) => { 
console.log(err)
reply('A mensagem não foi enviado pelo bot...')
})
break

case 'delmsg':
var a = info.message.extendedTextMessage.contextInfo
var rafa = {
remoteJid: from,
fromMe: info.key.fromMe,
id: a.stanzaId,
participant: a.participant
}
dens.sendMessage(from, { delete: rafa }).then(() => dens.sendMessage(from, { delete: info.key }))
break

case 'bc': case 'bcgroup': case 'transmitir': case 'transmissão': {
if (!SoDono)
if (!q) return reply( `Texto onde?\n\nExemplo : ${prefix + command} BOA VISTA `)
let getGroups = await dens.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
for (let i of anu) {
await sleep(1500)
let txt = `「 TRANSMISSÃO DO BOT 」\n\n ${q}`
dens.sendMessage(i, {text: txt})
}
reply(`Enviando com sucesso `)
}
break

case 'linkgp': case 'linkgroup': {
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isGroup) return reply(enviar.msg.grupo)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
linkgc = await dens.groupInviteCode(from)
txtl = `┏━──𖧹❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ🔮❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ𖧹──━
┝〢Usuário: ${pushname}
┝〢Grupo: ${groupName}
┝〢Link: https://chat.whatsapp.com/${linkgc}
┗━──𖧹❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ🔮❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ𖧹──━`
let goku = {
image: {url: 'https://telegra.ph/file/8b102c459aada73e99347.jpg'},
caption: txtl,
footer: ``,
headerType: 4,
contextInfo:{externalAdReply:{
title: `Link Do Grupo`,
body: `${NomeDoBot} ©`,
showAdAttribution: true,
renderLargerThumbnail: true,
thumbnail: fs.readFileSync('./logos/logo2.jpg'),
mediaType:2,
sourceUrl:`https://www.instagram.com/maysurf__/`
}}
}
dens.sendMessage(from, goku,
{quoted: selo})
}
break

case 'linkpv':
case 'bah':
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
teks = `${mentioned[0].split('@')[0]}@s.whatsapp.net`
linkgc = await dens.groupInviteCode(from)  
dens.sendMessage(teks, {text: `link do grupo : https://chat.whatsapp.com/${linkgc}`})
break

case 'grupo':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono && !isGroupAdmins) return reply(enviar.msg.adm)
buttons = [
  {buttonId: `${prefix}abrir2`, buttonText: {displayText: 'ABRIR✅'}, type: 1},
  {buttonId: `${prefix}fechar2`, buttonText: {displayText: 'FECHAR💤'}, type: 1}]
buttonMessage = {
    text: "Configurações Do Grupo⚙️",
    footer: 'komi_ofc',
    buttons: buttons,
    headerType: 1
}
sendMsg =  dens.sendMessage(from, buttonMessage, {quoted: selo}) 
break

case 'abrir2':
if(!isGroup) return reply(`SÓ EM GRUPO`)
if(!SoDono && !isGroupAdmins) return reply(`você nem é adm`)
if(!isBotGroupAdmins) return reply(`BOT PREPRECISA SER ADMININASTROR`)
reply(`*GRUPO ABERTO COM SUCESSO*`)
await dens.groupSettingUpdate(from, 'not_announcement')
break 

case 'fechar2':
  if (!isGroup) return reply(`SÓ EM GRUPO`)
if (!SoDono && !isGroupAdmins) return reply(`Você nao é adm kkkk`)
if (!isBotGroupAdmins) return reply(`BOT PREPRECISA SER ADMININASTROR`)
reply(`*GRUPO FECHADO COM SUCESSO*`)
await dens.groupSettingUpdate(from, 'announcement')
break

case 'closegp':
if (!SoDono && !isGroupAdmins) return reply (`${say.only.admin}`)
var nomor = info.participant;
let qtt = args.join(' ').split(' ');
let qaa = parseInt(qtt[0]);
let qbb = qtt[1];
if (isNaN(qaa)) return reply (`Precisa ser um número!!!\n\nexemplo:\n${prefix}closegp 30 s`)
if (qbb === 's') {
let calc = parseInt(qaa + '000')
await reply (`O grupo será fechado em ${qaa} segundos`)
await sleep(calc);
await dens.groupSettingUpdate(from, 'announcement')
return reply (`O grupo foi fechado pelo administrador *${pushname}* após ${qaa} segundos!`)
}
if (qbb === 'm') {
calc = parseInt(qaa * 60 + '000')
await reply (`O grupo será fechado em ${qaa} minutos`)
await sleep(calc);
await dens.groupSettingUpdate(from, 'announcement')
return reply (`O grupo foi fechado pelo administrador *${pushname}* após ${qaa} minutos!`)
}
if (qbb === 'h') {
calc = parseInt(qaa * 3600 + '000')
await reply (`O grupo será fechado em ${qaa} horas`)
await sleep(calc);
await dens.groupSettingUpdate(from, 'announcement')
return reply (`O grupo foi fechado pelo administrador *${pushname}* após ${qaa} horas!`)
}
else {
return reply (`s = segundos\nm = minutos\nh = horas\n\nexemplo:\n${prefix}closetime 5 m`)
}
break

case 'opengp':
if (!SoDono && !isGroupAdmins) return reply (`${say.only.admin}`)
var nomor = info.participant;
let qxx = args.join(' ').split(' ');
let qxt = parseInt(q[0]);
let tqb = qxx[1];
if (isNaN(qxt)) return reply (`Precisa ser um número!!!\n\nexemplo:\n${prefix}opengp 30 s`)
if (tqb === 's') {
let calc = parseInt(qxt + '000')
await reply (`O grupo será aberto em ${qxt} segundos`)
await sleep(calc);
await dens.groupSettingUpdate(from, 'not_announcement')
return reply (`O grupo foi aberto pelo administrador *${pushname}* após ${qxt} segundos!`)
}
if (tqb === 'm') {
calc = parseInt(qxt * 60 + '000')
await reply (`O grupo será aberto em ${qxt} minutos`)
await sleep(calc);
await dens.groupSettingUpdate(from, 'not_announcement')
return reply (`O grupo foi aberto pelo administrador *${pushname}* após ${qxt} minutos!`)
}
if (tqb === 'h') {
calc = parseInt(qxt * 3600 + '000')
await reply (`O grupo será aberto em ${qxt} horas`)
await sleep(calc);
await dens.groupSettingUpdate(from, 'not_announcement')
return reply (`O grupo foi aberto pelo administrador *${pushname}* após ${qxt} horas!`)
}
else {
return reply (`s = segundos\nm = minutos\nh = horas\n\nexemplo:\n${prefix}opentime 5 m`)
}
break

case 'grupoinfo':
case 'infogrupo':
case 'infogp':  
case 'gpinfo':  
case 'regras':  
if (!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins)return reply(enviar.msg.adm)
ppUrl = await dens.profilePictureUrl(from, 'image')
buffer = await getBuffer(ppUrl)
const metadata = await dens.groupMetadata(from) 
dens.sendMessage(from, {image: buffer, caption: `*NOME* : ${groupName}\n*MEMBRO* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*DESCRIÇÃO* : ${metadata.desc}`, thumbnail: null}, {quoted: info})
break 
 
case 'totag':
case 'hidetag':
if(!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if(!isGroupAdmins) return reply('Você precisa ser ADM pra utilizar este comando')
membros = (groupId, membros1) => {
array = []
for (let i = 0; i < membros1.length; i++) {
array.push(membros1[i].id)
}
return array
}
var yd = membros(from, groupMembers)
if((isMedia && !info.message.videoMessage || isQuotedSticker) && args.length == 0) {
media = isQuotedSticker ? info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage : info.message.stickerMessage
rane = getRandom('.'+await getExtension(media.mimetype))
img = await getFileBuffer(media, 'sticker')
fs.writeFileSync(rane,img)
fig = fs.readFileSync(rane)
var options = {
sticker: fig,  
mentions: yd
}
dens.sendMessage(from, options).then(() => fs.unlinkSync(rane) )
} else if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
media = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(media.mimetype))
img = await getFileBuffer(media, 'image')
fs.writeFileSync(rane,img)
buff = fs.readFileSync(rane)
dens.sendMessage(from, {image: buff, caption: media.caption, mentions: yd}, {quoted: info}).then(() => fs.unlinkSync(rane) )
} else if ((isMedia && !info.message.videoMessage || isQuotedVideo) && args.length == 0) {
media = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(media.mimetype))
vid = await getFileBuffer(media, 'video')
fs.writeFileSync(rane,vid)
buff = fs.readFileSync(rane)
dens.sendMessage(from, {video: buff, gifPlayback: media.gifPlayback, caption: media.caption, mentions: yd}, {quoted: info}).then(() => fs.unlinkSync(rane) )
} else if ((isMedia && !info.message.videoMessage || isQuotedAudio) && args.length == 0) {
media = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(media.mimetype))
aud = await getFileBuffer(media, 'audio')
fs.writeFileSync(rane,aud)
buff = fs.readFileSync(rane)
dens.sendMessage(from, {audio: buff, mimetype: 'audio/mp4', ptt:true, mentions: yd}, {quoted: info}).then(() => fs.unlinkSync(rane) )
} else if ((isMedia && !info.message.videoMessage || isQuotedDocument) && args.length == 0) {
media = isQuotedDocument ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : info.message.documentMessage
rane = getRandom('.'+await getExtension(media.mimetype))
doc = await getFileBuffer(media, 'document')
fs.writeFileSync(rane,doc)
buff = fs.readFileSync(rane)
dens.sendMessage(from, {document: buff, mimetype : `${media.mimetype}`, fileName: media.fileName, mentions: yd}, {quoted: info}).then(() => fs.unlinkSync(rane) )
} else if ((info.message.extendedTextMessage != undefined || info.message.extendedTextMessage != null) && !isMedia){
buff = info.message.extendedTextMessage.contextInfo.quotedMessage.conversation
dens.sendMessage(from, {text: buff, mentions: yd}, {quoted: info}) 
} else if(args.join(' ')){
dens.sendMessage(from, {text: args.join(' '), mentions: yd}, {quoted: info})
} else {
reply(`Marque uma, imagem/vídeo/áudio/documento/figurinha/texto, com o comando ${prefix + command}`)
}
break

case 'react':
if (!args.join(' ')) return reply(`Cade o emoji?`)
if (info.message.extendedTextMessage == undefined || info.message.extendedTextMessage == null || !isGroup){
var reactionMessage = {
react: {
text: args.join(' '),
key: info.key
}}
} else {
var a = info.message.extendedTextMessage.contextInfo
var rafa = {
remoteJid: `${from}`,
fromMe: false,
id: `${a.stanzaId}`,
participant: `${a.participant}`
}
var reactionMessage = {
react: {
text: args.join(' '),
key: rafa
}}
}
dens.sendMessage(from, reactionMessage)
break

case 'marcar':
if (!isGroupAdmins) return reply('Você precisa ser ADM pra utilizar este comando')
reply('olá maestro, irei convoca todos do grupo pro nosso coral')
raimgs = [
  `https://telegra.ph/file/b6e992ea6adac911bb5f9.jpg`,
  `https://telegra.ph/file/742a9df20adaacaac6918.jpg`,
  `https://telegra.ph/file/e6c6e08d886a65acbfea2.jpg`,
  `https://telegra.ph/file/f293eac6a7964ab6a92e7.jpg`,
  `https://telegra.ph/file/74c2354f7da0d842d55bb.jpg`,
  `https://telegra.ph/file/240f53c8a0f9ffe40c160.jpg`,
  `https://telegra.ph/file/be0c5405e43e0c228a5f7.jpg`,
  `https://telegra.ph/file/dd057766309ed8c25e4ac.jpg`]
imgs = raimgs[Math.floor(Math.random() * raimgs.length)]
try {
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n╭━━ ⪩\n╿║ 「き⃟♻️𝙳𝙴𝚂𝚃𝙸𝙽𝚈♻️ 」\n'
for (let mem of groupMembers) {
teks += `│❏ @${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
dens.sendMessage(from, {image: {url: imgs}, caption: teks, mentions: members_id}, {quoted: selo})
} catch {
reply('ERROR!!')
}
break

case 'marcarwame':
if (!isGroupAdmins) return reply('Você precisa ser ADM pra utilizar este comando')
reply('olá maestro, irei convoca todos do grupo pro nosso coral')
raimgs = [
  `https://telegra.ph/file/b6e992ea6adac911bb5f9.jpg`,
  `https://telegra.ph/file/742a9df20adaacaac6918.jpg`,
  `https://telegra.ph/file/e6c6e08d886a65acbfea2.jpg`,
  `https://telegra.ph/file/f293eac6a7964ab6a92e7.jpg`,
  `https://telegra.ph/file/74c2354f7da0d842d55bb.jpg`,
  `https://telegra.ph/file/240f53c8a0f9ffe40c160.jpg`,
  `https://telegra.ph/file/be0c5405e43e0c228a5f7.jpg`,
  `https://telegra.ph/file/dd057766309ed8c25e4ac.jpg`]
imgs = raimgs[Math.floor(Math.random() * raimgs.length)]
try {
members_id = []
teks = (args.length > 1) ? body.slice(10).trim() : ''
teks += ''
for (let mem of groupMembers) {
teks += `❏ https://wa.me/${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
dens.sendMessage(from, {image: {url: imgs}, caption: teks, mentions: members_id}, {quoted: selo})
} catch {
reply('ERROR!!')
}
break

case 'convite':
if (!isGroup) return reply(`SÓ EM GRUPO KRLH`)
qp = args.join(" ")
var nomor = info.participant
invite = `[ Convite de grupo ]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\n ${qp}`
sendBimgT(`${setting.numerodono}@s.whatsapp.net`,wew = `https://telegra.ph/file/5f8d8e6dd0c5d4044686a.jpg`, invite, "Leia com Atenção", [
{index: 2, quickReplyButton: {displayText: '✅ Aceitar', id: `${prefix}entrarlink ${qp}`}},
{index: 2, quickReplyButton: {displayText: '🚫 Recusar', id: `${prefix}negarconvite ${sender.split("@s.whatsapp.net")[0]}`}}], selo)
reply("Convite de grupo enviado ao meu dono, pfv espere a sua resposta")
break

case 'entrarlink':
case 'entrar':
if (!SoDono) return reply(`Só meu dono`)
try{
await dens.groupAcceptInvite (`${q.slice([26])}`)
reply('✅ Entrei no Grupo')
} catch {
reply('Não foi possível entrar no grupo')
}
break

case 'negarconvite':
if (!SoDono) return reply(`Só meu dono`)
merda = args.join(" ")
bla = "🚫 Seu convite foi negado"
await dens.sendMessage(`${merda}@s.whatsapp.net")`, {text: bla})
reply('✅ Mensagem enviada com sucesso')
break

case 'kick': {
if (!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if (!isGroupAdmins) return reply('Você precisa ser ADM pra utilizar este comando')
if (!isBotGroupAdmins) return reply('Bot precisa ser ADM, para executar esta função.')
mentioned = args.join(" ").replace("@", "") + "@s.whatsapp.net"
if(numerodono.includes(mentioned)) return reply("Não pode remover meu dono 😡")
if(botNumber.includes(mentioned)) return reply("Você acha que vou banir eu mesmo??, troxa você em..")
if(!isMentioned) return reply('Marque a')
baimg = await getBuffer(`https://telegra.ph/file/9f20029f7ff8758573a14.jpg`)
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
for (let _ of mentioned) {
bantxt = `O usuário: @${mentioned[0].split('@')[0]}\n*Foi Banido Permanente por motivos justo*`
dens.groupParticipantsUpdate(from, mentioned, 'remove')}
sleep(1000)
let cop = [
{buttonId: `nd`, buttonText: {displayText: `Bem Feito 🚩`}, type: 1}]
let buttonMessage = {
image: baimg,
caption: bantxt,
footer: `${NomeDoBot}`,
headerType: 4,
contextInfo:{externalAdReply:{
buttons: cop,
title: `instagram`,
body: `© Copyright ${NomeDoBot}`,
showAdAttribution: true,
mediaType:2,
thumbnail: fs.readFileSync('./logos/logo2.jpg'),
sourceUrl: `https://www.instagram.com/maysurf__/`
}}
}
dens.sendMessage(from, buttonMessage, 
{quoted:selo})}
break

case 'reviver':
if (!isGroup) return reply('Esse comando so funciona em grupo, sinto muito')
if(!isGroupAdmins) return reply('❌ VOCÊ NÃO É ADM PRA UTILIZAR ESTE COMANDO, DESCULPE, QUEM SABE UM DIA 😂')
if(!isBotGroupAdmins) return reply("Não sou adm pra executar esta ação..")
if (!isMentioned) return reply('Marque uma mensagem do alvo!')
add = info.message.extendedTextMessage.contextInfo.participant
sleep(5000)
const response2 = await dens.groupParticipantsUpdate(from, [add], "add" )
reply('Usuario Adicionado de volta ao grupo.')
break

case 'add':
if(!isGroupAdmins) return reply('❌ VOCÊ NÃO É ADM PRA UTILIZAR ESTE COMANDO, DESCULPE, QUEM SABE UM DIA 😂')  
if(!isBotGroupAdmins) return reply("Não sou adm pra executar esta ação..")
if(q.length < 1) return reply('Quer adicionar uma alma?')  
try {
tdt = args[0]
if(tdt.length < 1) return reply(`Digita o número que deseja add, exemplo: ${prefix}add 5591985841876`)
if (info.message.extendedTextMessage === null || info.message.extendedTextMessage === undefined) {
adduser = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
if(groupMetadata.participants.includes(adduser)) return reply('Esse membro já está no grupo, como você vai adicionar??? ')
reply('Irei adicionar ele(a) em 5 segundos...')  
setTimeout(async() => {
responser = await dens.groupParticipantsUpdate(from, [adduser], "add")
}, 5000)
o = responser.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return reply('O alvo já está no grupo!')
if(inv[0].code == 403) return reply('Erro, conta privada do usuário')
if(inv[0].code == 408) return reply('Erro, usuário acabou de sair')
if(inv[0].code == 401) return reply('Erro, porque o bot está bloqueado pelo alvo ')
} else {
if(groupMetadata.participants.includes(adduser)) return reply('Esse membro já está no grupo, como você vai adicionar??? ')  
reply('Irei adicionar ele(a) em 5 segundos...')  
setTimeout(async() => {
responser =  await dens.groupParticipantsUpdate(from, [adduser], "add")
}, 5000)
o = responser.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return reply('O alvo já está no grupo! ')
if(inv[0].code == 403) return reply('Falhou, porque em privado ')
if(inv[0].code == 408) return reply('Falha, porque o alvo acabou de sair ')
if(inv[0].code == 401) return reply('Falha, porque o bot está bloqueado pelo alvo ')
}
} catch (e){
if(!q.includes("@")) {
var addusr = adduser
} else {
var addusr = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` 
}
if(String(e).includes("responser is not defined")) {
linkgc = await dens.groupInviteCode(from)  
dens.sendMessage(addusr, {text: `Você está com o número privado para adicionar em grupos, então está ae o link do grupo : https://chat.whatsapp.com/${linkgc}`})
} else {
reply('Izi, se não for adicionado provavelmente ele privou só para contatos adicionar ele em grupo.')
}
}
break

case 'sair':
case 'sairgp':
if(isGroup && !SoDono && !info.key.fromMe) return reply("Este comando só o bot ou o dono pode executar..")
try {
dens.groupLeave(from)
} catch(erro) {
reply(String(erro))
}
break

case 'ban': case 'banir': {
if (!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if (!isGroupAdmins) return reply('Você precisa ser ADM pra utilizar este comando')
if (!isBotGroupAdmins) return reply('Bot precisa ser ADM, para executar esta função.')
if (info.message.extendedTextMessage != undefined || info.message.extendedTextMessage != null) {
num = info.message.extendedTextMessage.contextInfo.participant
if(botNumber.includes(num)) return reply('Não sou besta de remover eu mesmo né 🙁, mas estou decepcionado com você')
if(numerodono.includes(num)) return reply('Não posso remover meu dono 🤧')
wew = await getBuffer("https://telegra.ph/file/59c198f533657546ddce7.jpg")
mban = `Usuário ${num.split("@")[0]} banido permanente por motivos justo [✅]`
dens.groupParticipantsUpdate(from, [num], 'remove')
let buttonMessage = {
image: wew,
caption: mban,
footer: `${NomeDoBot}`,
headerType: 4,
contextInfo:{externalAdReply:{
title: `instagram`,
body: `© Copyright ${NomeDoBot}`,
showAdAttribution: true,
mediaType:2,
thumbnail: fs.readFileSync('./logos/logo2.jpg'),
sourceUrl: `https://www.instagram.com/maysurf__/`
}}
}
dens.sendMessage(from, buttonMessage, 
{quoted:selo})
} else { 
reply('Responda a mensagem da pessoa')
}}
break

case 'promover': 
if(!isGroupAdmins) return reply('Só ADM pode utilizar este comando.')
if(!isBotGroupAdmins) return reply('O Bot Precisa ser ADM pra executar essa ação.')
teks = body.slice(11)
if(teks.length > 15) return reply('Só pode promover uma pessoa por vez..')
await sleep(2000)
reply(`@${teks} Foi promovido(a) para adm com sucesso.`)
dens.groupParticipantsUpdate(from, [`${teks}@s.whatsapp.net`], "promote")
break

case 'rebaixar': 
if(!isGroupAdmins) return reply('Só ADM pode utilizar este comando.')
if(!isBotGroupAdmins) return reply('O Bot Precisa ser ADM pra executar essa ação.')
teks = body.slice(11)
if(teks.length > 15) return reply('Só pode rebaixar uma pessoa por vez..')
await sleep(2000)
reply(`@${teks} Foi Rebaixado(a) para membro comum com sucesso...`)
dens.groupParticipantsUpdate(from, [`${teks}@s.whatsapp.net`], "demote")
break

case "copybutton":
var captionnye = q.split('|')[0] || `Textim legal`
var displaynye = q.split('|')[1] || `Copiar`
var copynye = q.split('|')[2] || `nero gostoso`
 menuButa = [
{index: 1, urlButton: {displayText: `${displaynye}`, url: 'https://www.whatsapp.com/otp/copy/'+copynye}},
]
await dens.sendMessage(from, { text: `${captionnye}`, templateButtons: menuButa, footer: NomeDoBot })
break

/////// DESBANIR //////////

case 'spam':
luffy = args.join(' ')
luffy1 = luffy.split('/')[0] || 'Indefinido'
luffy2 = luffy.split('/')[1] || 'Indefinido'
if(!luffy.includes("/")) return reply(`Cade o /\nExemplo: ${prefix + command} 91985841872/motivo`)
membros = (groupId, membros1) => {
array = []
for (let i = 0; i < membros1.length; i++) {
array.push(membros1[i].id)
}
return array
}
var negoes = membros(from, groupMembers)
wew = await getBuffer('https://telegra.ph/file/1cc8e4042b739e0d0edd1.jpg')
spaw = `┌◈ ━━━≪ ⸙ ≫━━━ ◈┐\n  ¤📵𝙰𝚃𝙰𝚀𝚄𝙴 𝙳𝙴 𝚂𝙿𝙰𝙼📵️¤\n\n ⚠️𝙳𝙴𝙽𝚄𝙽𝙲𝙸𝙴𝙼 𝙴𝚂𝚂𝙴 𝙽𝚄𝙼𝙴𝚁𝙾⚠️\n\nWa.me//+55${luffy1}\n\n➡️𝚀𝚄𝙰𝙽𝚃𝙰𝚂 𝚅𝙴𝚉𝙴𝚂 𝚅𝙲 𝚀𝚄𝙸𝚂𝙴𝚁⬅️\n\n𝚖𝚘𝚝𝚒𝚟𝚘: ${luffy2}\n└◈ ━━━≪ ⸙ ≫━━━ ◈┘`
dens.sendMessage(from, {image: wew, caption: spaw, mentions: negoes}, {quoted: selo})
break

case 'suportes': {
if (!isGroup) return reply(enviar.msg.grupo)
let buttons = [
  {buttonId:`${prefix}menos1`, buttonText: {displayText: '📝 𝗥𝗘𝗧𝗜𝗥𝗔𝗥 𝗦𝗨𝗣𝗢𝗥𝗧𝗘 𝗠𝗘𝗧𝗢𝗗𝗢 1' }, type: 1},
  {buttonId:`${prefix}menos2`, buttonText: {displayText: '📝 𝗥𝗘𝗧𝗜𝗥𝗔𝗥 𝗦𝗨𝗣𝗢𝗥𝗧𝗘 𝗠𝗘𝗧𝗢𝗗𝗢 2' }, type: 1},
  {buttonId: `${prefix}bandesban`, buttonText: {displayText: '🔥 𝗕𝗔𝗡𝗜𝗥/𝗗𝗘𝗦𝗕𝗔𝗡𝗜𝗥 𝗪𝗣𝗣 🔥' }, type: 1}]
let buttonMessage = {
image: {url: `https://telegra.ph/file/9918c1fff47a578460d25.jpg`},
caption: "\n  𝗖𝗢𝗣𝗜𝗘 𝗢 𝗧𝗫𝗧 𝗘𝗦𝗖𝗥𝗜𝗧𝗢 📍",
buttons: buttons,
headerType: 1
}
sendMsg = await dens.sendMessage(from, buttonMessage, {quoted: selo})}
break

case 'bandesban': {
if (!isGroup) return reply(enviar.msg.grupo)
let buttons = [
  {buttonId:`${prefix}mtdban`, buttonText: {displayText: '📝 𝗧𝗫𝗧 𝗕𝗔𝗡𝗜𝗥 𝗪𝗣𝗣 ' }, type: 1},
  {buttonId:`${prefix}mtddesban`, buttonText: {displayText: '📝 𝗧𝗫𝗧 𝗗𝗘𝗦𝗕𝗔𝗡𝗜𝗥 𝗪𝗣𝗣 1'}, type: 1},
  {buttonId: `${prefix}mtddesban2`, buttonText: {displayText: '📝 𝗧𝗫𝗧 𝗗𝗘𝗦𝗕𝗔𝗡𝗜𝗥 𝗪𝗣𝗣 2' }, type: 1}]
let buttonMessage = {
image: {url: `https://telegra.ph/file/9918c1fff47a578460d25.jpg`},
caption: "\n  𝗖𝗢𝗣𝗜𝗘  𝗢 𝗧𝗫𝗧 𝗘𝗦𝗖𝗥𝗜𝗧𝗢 📍",
buttons: buttons,
headerType: 1
}
sendMsg = await dens.sendMessage(from, buttonMessage, {quoted: selo})}
break

case 'menos1':
dens.sendMessage(from, {text: 'assunto\nNão recebo código de verificação:', footer: ` `, templateButtons: [{index: 1, urlButton: {displayText: `Clique aqui para copiar algo`, url: 'https://www.whatsapp.com/otp/copy/Meu número está no suporte alguém solicitou meu código por engano meu número é usado para conversas com familiares que estão com convite por favor reinicie o meu código de verificação via SMS!\nNúmero: +55 99 9999-9999'}}]}, {quoted: info})
break

case 'menos2':
dens.sendMessage(from, {text: 'Assunto: Não consigo entrar no whatsapp!\nresposta:', footer: ` `, templateButtons: [{index: 1, urlButton: {displayText: `Clique aqui para copiar algo`, url: 'https://www.whatsapp.com/otp/copy/resposta: Eu nao consigo entrar no whatsapp , meu número esta -1 , solicito que resetem minha verificação de número!\nNúmero: +55 99 9999-9999'}}]}, {quoted: info})
break

case 'mtdban':
dens.sendMessage(from, {text: 'Assunto: Usuário violando os termos de uso do whatsapp usando versões modificadas de whatsapps.', footer: ` `, templateButtons: [{index: 1, urlButton: {displayText: `Clique aqui para copiar algo`, url: 'https://www.whatsapp.com/otp/copy/resposta: Olá, hojé eu percebi que um homem estava usando whatsapp modificado, falei para ele que talvez a conta dele poderia ser banida mais ele nem ligou, pesquisei no Google e vi que whatsapp modificados dão ban, então peço que o suporte dê ban nesta conta por estar usando whatsapp modificado.\nnumero: +55 99899'}}]}, {quoted: info})
break

case 'mtddesban':
dens.sendMessage(from, {text: 'Assunto: Número Banido\nresposta:', footer: ` `, templateButtons: [{index: 1, urlButton: {displayText: `Clique aqui para copiar algo`, url: 'https://www.whatsapp.com/otp/copy/resposta: Banido injustamente novamente +55 999999 se eu não obter respostas estarei migrando para o telegram.'}}]}, {quoted: info})
break

case 'mtddesban2':
dens.sendMessage(from, {text: 'Assunto: Número Banido\nresposta:', footer: ` `, templateButtons: [{index: 1, urlButton: {displayText: `Clique aqui para copiar algo`, url: 'https://www.whatsapp.com/otp/copy/resposta: Ola suporte do whatsapp , meu numero ,(+55 9999999) foi banido injustamente do whatsapp , estou solicitando o desbanimento imediato de meu número'}}]}, {quoted: info})
break

//====≠(INFOS/EXECUÇÃO/DONO)≠=== ====\\

case 'autoban':
if (!isGroup) return reply(enviar.msg.adm)
if (!isGroupAdmins && !SoDono) return reply('Precisa ser Dono')
if (args.length < 1) return reply('Hmmmm')
if (args[0] === 'on') {
var ind = dbids.indexOf(from)
if(isAdeusCara) {
adeuscara[ind].actived = true
} else {
adeuscara.push({
groupId: from,
actived: true,
number: []
})
}
fs.writeFileSync('./datab/grupos/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n')
reply(`Ativou com sucesso o recurso de autoban neste grupo✔️`)
} else if (args[0] === 'off') {
var ind = dbids.indexOf(from)						
if(isAdeusCara) {
adeuscara[ind].actived = false
} else {
adeuscara.push({
groupId: from,
actived: false,
number: []
})
}
fs.writeFileSync('./datab/grupos/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n')
reply(`Desativou com sucesso o recurso de autoban neste grupo✔️`)
} else {
reply('ON para ativar, OFF para desativar')
}
break

case 'listban':
if (!isGroup) return reply(enviar.msg.adm)
if (!isGroupAdmins) return reply(enviar.msg.adm)
var ind = dbids.indexOf(from)
if(!isAdeusCara) return reply('*Nenhum Número não foi adicionado*')
teks = '*Números que vou moer na porrada se voltar 😡:*\n'
for(i=0;i<adeuscara[ind].number.length;++i) {
teks += `➤ *${adeuscara[ind].number[i]}*\n`
}
teks += '*Esses ai vou descer meu martelo do ban 🥵*'
reply(teks)
break  

case 'listagp': 
if (!SoDono && !isnit && !info.key.fromMe) return reply('```SOMENTE MEU DONO LINDÃO```')
listvi = await getBuffer('https://telegra.ph/file/40a4ec9d4105a2336453b.mp4')
tdufg = await store.chats.all()
ingfoo = await getGroup(tdufg)
teks1 = `*L I S T A  D E  G R U P O S*\n*Total de Grupos* : ${ingfoo.length}\n\n`
for (let i = 0; i < ingfoo.length; i++){
teks1 += `• *Nome do Grupo* : ${ingfoo[i].subject}\n• *Id do Grupo* : ${ingfoo[i].id}\n• *Criado* : ${moment(`${ingfoo[i].creation}` * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss')}\n• *Total de Membros* : ${ingfoo[i].participants.length}\n\n`
}
dens.sendMessage(from, {video: listvi, caption: teks1, gifPlayback: true, templateButtons: [{index: 1, quickReplyButton: {displayText: `Ok ${NomeDoBot}`, id: `kk`}}]}, {quoted: selo})
break

case 'listafake':
if(!isGroup) return reply(mess.only.group)
if(!isGroupAdmins) return reply(`[❌] VC NÃO É ADMINISTRADOR DO GRUPO [❌] `)
if(!isBotGroupAdmins) return reply(`[❄️] O BOT PRECISA SER ADMINISTRADOR DO GRUPO [❄️]`)
if(!isGroupAdmins) return reply(mess.only.admin)
teks = '🏳️ Números fakes no grupo: 🏳️\n'
men = []
for(let mem of groupMembers) {
if(!mem.id.startsWith(55)) {
teks += `➤ @${mem.id.split('@')[0]}\n`
men.push(mem.id)}}
if(teks.indexOf('➤') < 0) return reply('*Nenhum numero Gringo foi encontrado*')
dens.sendMessage(from, {text: teks, mentions: men})
break

case 'addautorm':
case 'addautoban':
case 'listanegra':  
if (!isGroupAdmins && !SoDono) return reply('Precisa ser Dono')
if (args.length < 1) return reply('Cade o número?')
var ind = dbids.indexOf(from)
if(isAdeusCara) {
listng = q.replace(new RegExp("[()+-/ +/]", "gi"), "")  
var numind = adeuscara[ind].number.indexOf(listng)
if(numind >= 0) return reply('*Esse Número ja esta incluso*')
adeuscara[ind].number.push(listng)
} else {
listng = q.replace(new RegExp("[()+-/ +/]", "gi"), "")    
adeuscara.push({
groupId: from,
actived: false,
number: [listng]
})
}
fs.writeFileSync('./datab/grupos/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n')
reply(`*Número adicionado a lista de autoban*`)
break

case 'delremover':
case 'delautorm':  
case 'delautoban': 
case 'tirardalista':  
if (!isGroup) return reply(enviar.msg.adm)
if (!isGroupAdmins && !SoDono) return reply('Precisa ser Dono')
if (args.length < 1) return reply('Diga o numero sem espaço, + ou traço')
if (isNaN(args[0])) return reply('Diga o numero sem espaço, + ou traço')
var ind = dbids.indexOf(from)
if(!isAdeusCara) return reply('*Nenhum Número não foi adicionado*')
var numind = adeuscara[ind].number.indexOf(args[0])
if(numind < 0) return reply('*Esse número não está incluso*')
adeuscara[ind].number.splice(numind, 1)
fs.writeFileSync('./datab/grupos/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n')
reply(`*Número removido a lista de autoban*`)
break

case 'banghost':
case 'banghosts':  
if(!SoDono && !isnit) return reply("COMANDO DESATIVADO POR QUESTÕES DE SEGURANÇA, PODE CAUSAR BANIMENTO NO NÚMERO DO BOT.")
if(!isGroup) return reply(enviar.msg.grupo)
if(groupIdscount.indexOf(from) >= 0) {
for(let obj of groupMembers) {
if(numbersIds.indexOf(obj.id) >=0) { 
var indnum = numbersIds.indexOf(obj.id)
if(countMessage[ind].numbers[indnum].messages <= args[0]) {
if(groupAdmins.includes(obj.id)) {
mentions(`@${obj.id} ta liberado da inspeção por ser admin`, [obj.id], true)
} else {
dens.groupParticipantsUpdate(from, [obj.id], 'remove')
}
}
} else {
if(groupAdmins.includes(obj.id)) {
mentions(`@${obj.id} ta liberado da inspeção por ser admin`, [obj.id], true)
} else {
dens.groupParticipantsUpdate(from, [obj.id], 'remove')
}
}
}
}
break

case 'correio':
txt = body.slice(10)
txtt = args.join(' ')
txt1 = txtt.split("/")[0];
txt2 = txtt.split("/")[1];
if(!txt) return reply('Cade o número da pessoa?')
if(!txtt) return reply('Cade a mensagem do correio??')
if(txt.includes("-")) return reply('Tem que ser o número junto sem +, e não pode tá separado da /')
if(txtt.includes("+")) return reply('Tem que ser o número junto sem +, e não pode tá separado da /')
if(!txtt.includes("/")) return reply(`Exemplo: ${prefix}correio 559185841876/Oi Amor, sdds`)
corr = await getBuffer('https://telegra.ph/file/363d89595c923663ac2fb.jpg')
bla = 
`┏━━── • ──━━
┃│ _•°•°•°•°•°•°•፝⃟✉️𖥨_
┃│ *De:* ${pushname}
┃│ *Para:* ${txt1}
┣──────━━━
┣•❲ Msg:\n_*${txt2}*_
┗━━── • ──━━`
dens.sendMessage(`${txt1}@s.whatsapp.net`, {image: corr, caption: bla}, {quoted: selo})
await sleep(3000)
reply("Correio Enviado")
break

case 'leveling':
if (!isGroup) return reply('Só em Grupo')
if (!isGroupAdmins) return reply('Você precisa ser adm')
if (args.length < 1) return reply('Ative pressione 1, Desativar pressione 0')
if (Number(args[0]) === 1) {
if (isLevelingOn) return reply('*O recurso de nível já estava ativo antes*')
_leveling.push(from)
fs.writeFileSync('./datab/usuarios/leveling.json', JSON.stringify(_leveling))
reply(enviar.levelon) 
} else if (Number(args[0]) === 0) {
if (!isLevelingOn) return reply(`O recurso de level já está Desativado neste grupo.`)
_leveling.splice(from, 1)
fs.writeFileSync('./datab/usuarios/leveling.json', JSON.stringify(_leveling))
reply(enviar.leveloff)
} else {
reply('「* Adicionar parâmetro 1 ou 0 ')
}
break

case 'level':
if (!isLevelingOn) return reply(`*O recurso de level está Desativado, para ativar consulte algum adm e mande ele digitar : ${prefix}leveling 1`)
if (!isGroup) return reply(enviar.msg.grupo)
const userLevel = getLevelingLevel(sender)
const userXp = getLevelingXp(sender)
if (userLevel === undefined && userXp === undefined) return reply(enviar.levelnol)
sem = sender.replace('@s.whatsapp.net','')
                resul = `     
            ◪ *REGISTRO* ◪                
  ├─ ❏ *NICK* : ${pushname}
  ├─ ❏ *NÚMERO* : ${sender.split("@")[0]}
  ├─ ❏ *PATENTE* : ${patt}               
  ├─ ❏ *XP* : ${userXp}
  └─ ❏ *LEVEL* : ${userLevel}`
await dens.sendMessage(from, {text: resul}, {quoted: info})
.catch(async (err) => {
console.error(err)
await reply(`Error!\n${err}`)
})
break

case 'qr':
if (!SoDono && !info.key.fromMe) return reply(enviar.msg.donosmt)
bla = fs.readFileSync("auth_info_multi.json")
dens.sendMessage(from, {document: bla, mimetype: 'document/json', fileName: 'auth_info_multi.json'})
break

case 'online':   
case 'onlines':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono && !isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(store.presences[ido]), dens.user.id]
dens.sendMessage(from, {text: 'Pessoas online do gp:\n\n' + online.map(v => '• @' + v.replace(/@.+/, '')).join`\n`}, {quoted: info})
break

case 'admins':
case 'listadmins':  
case 'listaadmins':   
if (!isGroup) return reply(enviar.msg.grupo)
ytb = `Lista de admins do grupo *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
ytb += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(ytb, groupAdmins, true)
break

case 'ausente': case 'off': case 'afk':
if(!SoDono) return reply("Comando especial para o dono.")
msgtmp = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
nmrdnofc = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "")
msgz = args.join(" ")
var catmsgaus = {
Ausente_Desde: msgtmp, 
Motivo_Da_Ausência: msgz
}
if(!fs.existsSync(`./func/afk/afk-@${nmrdnofc}.json`)) {
fs.writeFileSync(`./func/afk/afk-@${nmrdnofc}.json`,
JSON.stringify(catmsgaus, null, 2));
} else {
if (fs.existsSync("./func/afk/afk-@" + nmrdnofc + ".json")) {
fs.unlinkSync("./func/afk/afk-@" + nmrdnofc + ".json");
fs.writeFileSync(`./func/afk/afk-@${nmrdnofc}.json`,
JSON.stringify(catmsgaus, null, 2));
}
}
reply(`Mensagem de ausência criada com sucesso...`)
break

case 'ativo': case 'on': case 'voltei':
if(!SoDono) return reply("Comando especial para o dono.")
nmrdnofc = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "")
if (fs.existsSync("./func/afk/afk-@" + nmrdnofc + ".json")) {  
fs.unlinkSync("./func/afk/afk-@" + nmrdnofc + ".json");
reply("Bem vindo de volta, agora você está online 🙂")
} else {
reply("Você não registrou nenhuma mensagem de ausência...")
}
break

case 'limpar':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
cleaned = await getBuffer('https://telegra.ph/file/c193f609caee19ff6ca4b.mp4')
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
dens.sendMessage(from, {video: cleaned, caption: clear, gifPlayback: true, templateButtons: [{index: 2, quickReplyButton: {displayText: `Limpar Mais 🗑️`, id: `${prefix + command}`}}]}, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
break

case 'addpalavra':
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (args.length < 1) return reply( `Use assim : ${prefix + command} [palavrão]. exemplo ${prefix + command} puta`)
const bw = body.slice(12)
palavra.push(bw)
fs.writeFileSync('./datab/grupos/palavras.json', JSON.stringify(palavra))
reply('Palavrão adicionado com sucesso!')
await limitAdd(sender)
break

case 'delpalavra':
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (args.length < 1) return reply( `Use assim : ${prefix + command} [palavrão]. exemplo ${prefix + command} puta`)
let dbw = body.slice(12)
palavra.splice(dbw)
fs.writeFileSync('./datab/grupos/palavras.json', JSON.stringify(palavra))
reply('Palavrão removido da lista com sucesso!')
await limitAdd(sender)
break

case 'listapalavrão': case 'listapalavra':
case 'listpalavra':
let lbw = `Esta é a lista de palavrão\nTotal : ${palavra.length}\n`
for (let i of palavra) {
lbw += `➸ ${i.replace(palavra)}\n`
}
await reply(lbw)
await limitAdd(sender)
break 

case 'legendabv':  
if(!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if(!isGroupAdmins) return reply(`Só ADM pode utilizar este comando.`)
if(args.length < 1) return reply('*Escreva a mensagem de boas-vindas*')
teks = body.slice(11)
if(isWelcomed) {
var ind = groupIdWelcomed.indexOf(from)
welcome_group[ind].msg = teks
fs.writeFileSync('./datab/grupos/welcomegp.json', JSON.stringify(welcome_group, null, 2) + '\n')
reply('*Mensagem de boas vindas alteradas com sucesso!*')
} else {
var json = {
id: from,
msg: teks
}
welcome_group.push(json)
fs.writeFileSync('./datab/grupos/welcomegp.json', JSON.stringify(welcome_group, null, 2) + '\n')
reply('*Mensagem de boas vindas criada com sucesso!*')
}
break

case 'legendasaiu':
if(!isGroup) return reply(`Só em grupo pode utilizar este comando.`)
if(!isGroupAdmins) return reply(`Só ADM pode utilizar este tipo de Comando.`)
if(args.length < 1) return reply('*Escreva a mensagem de saída*')
teks = body.slice(13)
if(isByed) {
var ind = groupIdBye.indexOf(from)
bye_group[ind].msg = teks
fs.writeFileSync('./datab/grupos/byegp.json', JSON.stringify(bye_group, null, 2) + '\n')
reply('*Mensagem de saída alteradas com sucesso!*')
} else {
var json = {
id: from,
msg: teks
}
bye_group.push(json)
fs.writeFileSync('./datab/grupos/byegp.json', JSON.stringify(bye_group, null, 2) + '\n')
reply('*Mensagem de saída criada com sucesso!*')
}
break

case 'legendabv2':  
if(!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if(!isGroupAdmins) return reply(`Só ADM pode utilizar este comando.`)
if(args.length < 1) return reply('*Escreva a mensagem de boas-vindas*')
teks = body.slice(12)
if(isWelcomed2) {
var ind = groupIdWelcomed2.indexOf(from)
welcome_group2[ind].msg = teks
fs.writeFileSync('./datab/grupos/welcomegp2.json', JSON.stringify(welcome_group2, null, 2) + '\n')
reply('*Mensagem de boas vindas2 alteradas com sucesso!*')
} else {
var json = {
id: from,
msg: teks
}
welcome_group2.push(json)
fs.writeFileSync('./datab/grupos/welcomegp2.json', JSON.stringify(welcome_group2, null, 2) + '\n')
reply('*Mensagem de boas vindas2 criada com sucesso!*')
}
break

case 'legendasaiu2':
if(!isGroup) return reply(`Só em grupo pode utilizar este comando.`)
if(!isGroupAdmins) return reply(`Só ADM pode utilizar este tipo de Comando.`)
if(args.length < 1) return reply('*Escreva a mensagem de saída*')
teks = body.slice(14)
if(isByed) {
var ind = groupIdBye.indexOf(from)
bye_group2[ind].msg = teks
fs.writeFileSync('./datab/grupos/byegp2.json', JSON.stringify(bye_group2, null, 2) + '\n')
reply('*Mensagem de saída2 alteradas com sucesso!*')
} else {
var json = {
id: from,
msg: teks
}
bye_group2.push(json)
fs.writeFileSync('./datab/grupos/byegp2.json', JSON.stringify(bye_group2, null, 2) + '\n')
reply('*Mensagem de saída2 criada com sucesso!*')
}
break

case 'deletar':  case 'apagar':  case 'delete':   case 'del':  case 'd':
if (!isGroup)return reply(enviar.msg.grupo)
if (!SoDono && !isGroupAdmins && !isPremium) return reply(enviar.msg.adm)
dens.sendMessage(from, { delete: { remoteJid: from, fromMe: true, id: info.message.extendedTextMessage.contextInfo.stanzaId, participant: sender }})
.catch((err) => { 
console.log(err)
reply('A mensagem não foi enviado pelo bot...')
})
break

case 'antipvon':
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe ) return reply('Apenas Meu Dono')
if (banChats) return await reply('já está ativo o modo antipv')
banChats = true
nescessario.banChats = banChats
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
await dens.sendMessage(from, {text: "*Sucesso alterado para modo antipv, pv não poderá ser utilizado"})
break

case 'antipvoff':
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return await reply('Apenas meu dono o owner')
if (!banChats) return await reply('Nao estava ativado ainda')
banChats = false
nescessario.banChats = banChats
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
await dens.sendMessage(from, {text: "*Sucesso modo antipv desligado, pv liberado."})
break

case 'modos':
  if(!isGroup) return reply(`[❗] SOMENTE EM GRUPOS`)
if(!isGroupAdmins) return reply(`[❗] VC NÃO E ADM!`)
if(!isBotGroupAdmins) return reply(`[❗] O BOT PRECISA SER ADMIN`)
vidtst = `https://telegra.ph/file/e959bb3fb76f451cc5ef8.mp4`
sendBvid(from, vidtst, `ᬊ͜͡ Olá ${pushname} Você Deseja Ativa O Anti-link? No Grupo: ${groupName}`, NomeDoBot, [{index: 2, quickReplyButton: {displayText: '📂SER ADM📂', id: `${prefix}seradm`}}, {index: 2, quickReplyButton: {displayText: '❌SER MEMBRO❌', id: `${prefix}sermembro`}}], info)
break

case 'seradm':
if (!SoDono) return reply (`somente o meu mestre...`)
horaluffy = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
dataluffy = moment.tz('America/Sao_Paulo').format('DD/MM/YY');
imgep = `https://telegra.ph/file/4f0406b722b9b5de6628f.jpg`
zk = `
┌◈ ━━━━≪ ⸙ ≫━━━━ ◈┐
│ Agora Meu Mestre é 
│ Adm Neste Grupo
│ • Grupo: ${groupName}
│ • Data: ${dataluffy}
│ • Hora: ${horaluffy}
└◈ ━━━━≪ ⸙ ≫━━━━ ◈┘`
dens.groupParticipantsUpdate(from, [`${setting.numerodono}@s.whatsapp.net`], "promote")
await sleep (2000)
sendBimg(from, imgep, zk, NomeDoBot + ' ©',
[{buttonId:`kk`, buttonText: {displayText: `Ok ${NomeDoBot}`}, type: 1}], selo)
break

case 'sermembro': {
if (!isGroupAdmins) return reply (`Somente adm, vc ja é membro comum kkk`)
horaluffy = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
dataluffy = moment.tz('America/Sao_Paulo').format('DD/MM/YY');
epd = `https://telegra.ph/file/396f06f642763a19396e9.jpg`
txt = `┌◈ ━━━━≪ ⸙ ≫━━━━ ◈┐
│ ╭O @${sender.split("@")[0]} 
│ ╰Agora É Membro Comum
│ • Grupo: ${groupName}
│ • Data: ${dataluffy}
│ • Hora: ${horaluffy}
└◈ ━━━━≪ ⸙ ≫━━━━ ◈┘`
dens.groupParticipantsUpdate(from, [`@${sender.split("@")[0]}@s.whatsapp.net`], "demote")
await sleep (2000)
sendBimg(from, epd, txt, NomeDoBot + ' ©',
[{buttonId:`kk`, buttonText: {displayText: `Ok ${NomeDoBot}`}, type: 1}], selo)
}
break

case 'block':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return  reply(enviar.msg.donosmt)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return 
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.push(`${mentioned}`)
fs.writeFileSync('./datab/usuarios/banned.json', JSON.stringify(ban))
susp = `🚫@${mentioned[0].split('@')[0]} foi banido e não poderá mais usar os comandos do bot🚫`
mentions(`${susp}`, mentioned, true)   
break

case 'unblock':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return  reply(enviar.msg.donosmt)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return 
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.splice(`${mentioned}`)
fs.writeFileSync('./datab/usuarios/banned.json', JSON.stringify(ban))
susp = `❎@${mentioned[0].split('@')[0]} foi desbanido e poderá novamente usar os comandos do bot❎`
mentions(`${susp}`, mentioned, true)   
break

case 'blocklist':
jrc = 'ESTA É A LISTA DE NÚMEROS BLOQUEADOS :\n'
for (let benn of ban) {
jrc += `~> @${benn.split('@')[0]}\n`
}
jrc += `Total : ${ban.length}`
dens.sendMessage(from, jrc.trim(), extendedText, {quoted: info, contextInfo: {"mentionedJid": benn}})
break

case 'bangp':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (isBanchat) return reply(`Este grupo ja está banido`)
bancht.push(from)
fs.writeFileSync('./datab/grupos/banchat.json', JSON.stringify(bancht))
reply(`Grupo banido com sucesso`)
break

case 'desbanigp':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
let cur = bancht.indexOf(from)
bancht.splice(cur, 1)
fs.writeFileSync('./datab/grupos/banchat.json', JSON.stringify(bancht))
reply(`Grupo desbanido...`)
break

case 'limitec':
if(!SoDono  && !isnit && !ischyt) return reply(enviar.msg.donosmt)
if (args.length < 1) return
if (!setTimeout && !info.key.fromMe) return reply(enviar.msg.donosmt)
limitefl = args.join(" ")
limitefll.limitefl = limitefl
fs.writeFileSync('./datab/usuarios/flood.json', JSON.stringify(limitefll, null, '\t'))
reply(`${limitefl} foi adicionado como limite de antiflood `)
break

case 'ping': {
 r = (Date.now() / 1000) - info.messageTimestamp
			uptime = process.uptime()
hora1 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
imgping = await getBuffer('https://telegra.ph/file/803cc8b535cd75156c848.jpg')
let buttons = [
{buttonId: `${prefix}menu`, buttonText: {displayText: '⭔ MENU COMPLETO ⭔'}, type: 1}
]
text = `
⚡ *PING DO BOT* ⚡

⭔ Tempo Em Atividade:
${kyun(uptime)}
⭔ Velocidade: ${String(r.toFixed(3))}
⭔ Data: ${date}
⭔ Hora: ${hora1}
⭔ Usuário: ${pushname}
⭔ Online: Servidor Heroku`
let buttonMessage = {
image: imgping,
caption: text,
footer: ``,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: ``,
body: `${NomeDoBot}`,
showAdAttribution: true,
thumbnail: imgping,
mediaType:2,
mediaUrl: ``, 
sourceUrl: `https://www.instagram.com/maysurf__/`
}}
}
dens.sendMessage(from, buttonMessage, { quoted: selo })
}
break

///////// VOZES

case 'txtvoz':
if(!q) return reply("𝗖𝗔𝗗𝗘̂ 𝗢 𝗧𝗘𝗫𝗧𝗢")
sections = [
    {
title: "LISTA GTTS",
rows: [
{title: `brasil`, rowId: `${prefix}gtts pt ${q}`, description: ""},
{title: `Africano`, rowId: `${prefix}gtts af ${q}`, description: ""},
	    {title: `Albânia`, rowId: `${prefix}gtts sq ${q}`, description: ""},
	    {title: `Arabia`, rowId: `${prefix}gtts ar ${q}`, description: ""},
	    {title: `Catalan`, rowId: `${prefix}gtts ca ${q}`, description: ""},
	    {title: `Croatian`, rowId: `${prefix}gtts hr ${q}`, description: ""},
	    {title: `Czech`, rowId: `${prefix}gtts cs ${q}`, description: ""},
	    {title: `Danish`, rowId: `${prefix}gtts da ${q}`, description: ""},
	    {title: `Dutch`, rowId: `${prefix}gtts nl ${q}`, description: ""},
	    {title: `English`, rowId: `${prefix}gtts en ${q}`, description: ""},
	    {title: `Finnish`, rowId: `${prefix}gtts fi ${q}`, description: ""},
	    {title: `French`, rowId: `${prefix}gtts fr ${q}`, description: ""},
	    {title: `German`, rowId: `${prefix}gtts de ${q}`, description: ""},
	    {title: `greek`, rowId: `${prefix}gtts el ${q}`, description: ""},
	    {title: `Hindi`, rowId: `${prefix}gtts hi ${q}`, description: ""},
	    {title: `Hungarian`, rowId: `${prefix}gtts hu ${q}`, description: ""},
	    {title: `Icelandic`, rowId: `${prefix}gtts is ${q}`, description: ""},
	    {title: `Indonesian`, rowId: `${prefix}gtts id ${q}`, description: ""},
	    {title: `Italia`, rowId: `${prefix}gtts it ${q}`, description: ""},
	    {title: `Japanese`, rowId: `${prefix}gtts ja ${q}`, description: ""},
	    {title: `Korean`, rowId: `${prefix}gtts ko ${q}`, description: ""},
	    {title: `Latin`, rowId: `${prefix}gtts la ${q}`, description: ""},
	    {title: `Latvian`, rowId: `${prefix}gtts lv ${q}`, description: ""},
	    {title: `Norwegian`, rowId: `${prefix}gtts no ${q}`, description: ""},
	    {title: `Polish`, rowId: `${prefix}gtts pl ${q}`, description: ""},
	    {title: `Romanian`, rowId: `${prefix}gtts ro ${q}`, description: ""},
	    {title: `Ressian`, rowId: `${prefix}gtts ru ${q}`, description: ""},
	    {title: `Serbian`, rowId: `${prefix}gtts sr ${q}`, description: ""},
	    {title: `Slovak`, rowId: `${prefix}gtts sk ${q}`, description: ""},
	    {title: `Spanish`, rowId: `${prefix}gtts es ${q}`, description: ""},
	    {title: `Swahili`, rowId: `${prefix}gtts sw ${q}`, description: ""},
	    {title: `Swedish`, rowId: `${prefix}gtts sv ${q}`, description: ""},
	    {title: `Tamil`, rowId: `${prefix}gtts ta ${q}`, description: ""},
	    {title: `Thai`, rowId: `${prefix}gtts th ${q}`, description: ""},
	    {title: `turkish`, rowId: `${prefix}gtts tr ${q}`, description: ""},
	    {title: `Vietnamese`, rowId: `${prefix}gtts vi ${q}`, description: ""},]
}]
listMessage2 = {
text: `│ Aperte Em Exibir Lista\n│ Para Você Acessar Todos\n│ Os Idiomas\n│ Com Facilidade`,
  footer: `\n╰─╼━══━━≺ ♤ ≻━━══━╾─╯`,
  title: "╭─╼━══━━≺ ♤ ≻━━══━╾─╮\n",
  buttonText: 'Aperte Aqui',
  sections
}
sendMsg = await dens.sendMessage(from, listMessage2)
break

case 'gtts':
if (args.length < 1) return dens.sendMessage(from,{text: `Cade o texto?, digite algo Exemplo:\n${prefix}gtts PT Oi`}, {quoted: selo})
const gtts = require('./armor/funcoes/gtts')(args[0])
if (args.length < 2) return dens.sendMessage(from, {text: 'Falta colocar o código do idioma!'}, {quoted: selo})
dtt = body.slice(8)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
if(dtt.length > 200) return reply('Para reduzir spam o máximo de letras permitidas são 200!')
gtts.save(ranm, dtt, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
buffer = fs.readFileSync(rano)
dens.sendMessage(from, {audio: buffer, ptt:true, caption:"*Sucesso*", contextInfo:{externalAdReply:{
title:``,
body:`${NomeDoBot}`,
thumbnail: fs.readFileSync("./logos/audio.jpg"),
mediaType:2,
mediaUrl: `https://youtu.be/4fIiOvdcu10`,
sourceUrl: `https://youtu.be/4fIiOvdcu10`
}}}, {quoted:selo})
fs.unlinkSync(rano)
})
})
break

case 'negobam': 
hyp = args.join(" ");
if (!hyp) return reply("cadê o texto?");
hyakk = await getBuffer(`http://brizas-api.herokuapp.com/imitar/negobam?apikey=brizaloka&text=${hyp}`);
dens.sendMessage(from, {audio: hyakk, mimetype: 'audio/mp4', ptt:true}, {quoted:selo});
break

case 'leoncio': 
hyp = args.join(" ");
if (!hyp) return reply("cadê o texto?");
hyakk = await getBuffer(`https://brizas-api.herokuapp.com/imitar/leoncio?apikey=brizaloka&text=${hyp}`);
dens.sendMessage(from, {audio: hyakk, mimetype: 'audio/mp4', ptt:true}, {quoted:selo});
break

case 'eminem': 
hyp = args.join(" ");
if (!hyp) return reply("cadê o texto?");
hyakk = await getBuffer(`https://brizas-api.herokuapp.com/imitar/eminem?apikey=brizaloka&text=${hyp}`);
dens.sendMessage(from, {audio: hyakk, mimetype: 'audio/mp4', ptt:true}, {quoted:selo});
break

case 'chapolin': 
hyp = args.join(" ");
if (!hyp) return reply("cadê o texto?");
hyakk = await getBuffer(`https://brizas-api.herokuapp.com/imitar/chapolin?apikey=brizaloka&text=${hyp}`);
dens.sendMessage(from, {audio: hyakk, mimetype: 'audio/mp4', ptt:true}, {quoted:selo});
break

///////

case 'tagme':
members_id = []  
const tagme = `@${sender.split("@")[0]} ✔️`
members_id.push(sender.split("@s.whatsapp.net"))
await mentions(tagme, members_id, true)
break

case 'blockcmd':
if(!SoDono  && !isnit) return reply(enviar.msg.donosmt)
tp = args.join(" ")
if(tp.includes("blockcmd blockcmd") || (tp.includes("blockcmd  blockcmd"))) return reply(`Tá louco maluco?, Quer banir o comando de bloquear comando?`)
if(getComandoBlock(from).includes(args[0]))return reply('Este comando já está blockeado')
addComandos(from, args[0])
reply(`O comando ${args[0]} Foi blockeado`)
break

case 'unblockcmd':
if(!SoDono  && !isnit) return reply(enviar.msg.donosmt)
tp = args.join(" ")
if(tp.includes("blockcmd unblockcmd") || (tp.includes("blockcmd  unblockcmd"))) return reply(`Tá louco maluco?, Quer banir o comando de desbloquear comando?`)  
if(!getComandoBlock(from).includes(args[0]))return reply('Este comando já está  desbloqueado')
deleteComandos(from, args[0])
reply(`O comando ${args[0]} Foi desblockeado`)
break

case 'listacomandos':
tkks = '╭─*「 *COMANDOS BLOCK* 」\n'
for (let V of getComandoBlock(from)) {
tkks += `│+  ${V}\n`
}
tkks += `│+ Total : ${getComandoBlock(from).length}\n╰──────*「 *${NomeDoBot}* 」*────`
dens.sendMessage(from, tkks.trim(), extendedText, {quoted: info})
break

case 'avaliar':
botaoavaliar = [
{title: "Section 1",
rows: [
{title: "★☆☆☆☆", rowId: `${prefix}avpessimo uma merda`},
{title: "★★☆☆☆", rowId: `${prefix}avruimm legal man`},
{title: "★★★☆☆", rowId: `${prefix}avbom  até que da pra usar`},
{title: "★★★★☆", rowId: `${prefix}avmuitobom  amei muito`},
{title: "★★★★★", rowId: `${prefix}avperfeito  perfeito maravilhoso`}]
}]
sendlistA(from, " ", "Seu Feedback É Muito Importante Para Nois obgd\nPara Avaliar Clique Na Opção Abaixo:", "*AVALIAÇÃO ZEBRS - BOT*", "AVALIAR", botaoavaliar)
break


case 'avpessimo':
reply (`obrigado(a) pela avaliação😔`)
if (args.length <= 1) return reply(`Exemplo: ${prefix}avalie "Bot muito bom, parabéns. "`)
if (args.length >= 400) return dens.sendMessage(from, {text: 'Máximo 400 caracteres'}, {quoted: info})
var nomor = info.participant
tdptls = `De: wa.me/${sender.split("@s.whatsapp.net")[0]}

*nota:* ★☆☆☆☆😔
`
await dens.sendMessage(`${setting.numerodono}@s.whatsapp.net`, {text: tdptls }, {quoted: info})
break

case 'avruimm':
reply (`obrigado(a) pela avaliação`)
if (args.length <= 1) return reply(`Exemplo: ${prefix}avalie "Bot muito bom, parabéns. "`)
if (args.length >= 400) return dens.sendMessage(from, {text: 'Máximo 400 caracteres'}, {quoted: info})
var nomor = info.participant
tdptls = `De: wa.me/${sender.split("@s.whatsapp.net")[0]}

*nota:* ★★☆☆☆🙂
`
await dens.sendMessage(`${setting.numerodono}@s.whatsapp.net`, {text: tdptls }, {quoted: info})
break

case 'avbom':
reply (`obrigado(a) pela avaliação🥰`)
if (args.length <= 1) return reply(`Exemplo: ${prefix}avalie "Bot muito bom, parabéns. "`)
if (args.length >= 400) return dens.sendMessage(from, {text: 'Máximo 400 caracteres'}, {quoted: info})
var nomor = info.participant
tdptls = `De: wa.me/${sender.split("@s.whatsapp.net")[0]}

*nota:* ★★★☆☆🥰
`
await dens.sendMessage(`${setting.numerodono}@s.whatsapp.net`, {text: tdptls }, {quoted: info})
break

case 'avmuitobom':
reply (`obrigado(a) pela avaliação`)
if (args.length <= 1) return reply(`Exemplo: ${prefix}avalie "Bot muito bom, parabéns. "`)
if (args.length >= 400) return dens.sendMessage(from, {text: 'Máximo 400 caracteres'}, {quoted: info})
var nomor = info.participant
tdptls = `De: wa.me/${sender.split("@s.whatsapp.net")[0]}

*nota:* ★★★★☆😍
`
await dens.sendMessage(`${setting.numerodono}@s.whatsapp.net`, {text: tdptls }, {quoted: info})
break

case 'avperfeito':
reply (`obrigado(a( pela ótima avaliação😊`)
if (args.length <= 1) return reply(`Exemplo: ${prefix}avalie "Bot muito bom, parabéns. "`)
if (args.length >= 400) return dens.sendMessage(from, {text: 'Máximo 400 caracteres'}, {quoted: info})
var nomor = info.participant
tdptls = `De: wa.me/${sender.split("@s.whatsapp.net")[0]}

*nota:* ★★★★★☺
`
await dens.sendMessage(`${setting.numerodono}@s.whatsapp.net`, {text: tdptls }, {quoted: info})
break

case 'bug':
const bug = body.slice(5)
if (args.length <= 1) return reply(`Exemplo: ${prefix}bug "ocorreu um erro no comando sticker"`)
if (args.length >= 800) return dens.sendMessage(from, {text: 'Máximo 800 caracteres'}, {quoted: info})
var nomor = info.participant
teks1 = `[ Problema ]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\nErro ou bug: ${bug}`
var options = {
text: teks1,
contextInfo: {
mentionedJid: [sender]
},
}
await dens.sendMessage(`${setting.numerodono}@s.whatsapp.net`, {text: options}, {quoted: info})
reply("mensagem enviada ao meu dono, se enviar muitas mensagens repetida por zoeira, você sera banido de utilizar os comandos do bot.")
break

case 'sugestão':
case 'sugestao':
const sugestao = body.slice(10)
if (args.length <= 1) return reply(`Exemplo: ${prefix}sugestao "Opa, crie um comando tal, que ele funcione de tal maneira, isso será muito bom, não só pra mim, mas pra vários fazer isso.."`)
if (args.length >= 800) return dens.sendMessage(from, {text: 'Máximo 800 caracteres'}, {quoted: info})
var nomor = info.participant
sug = `[ Sugestões ]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\n: ${sugestao}`
await dens.sendMessage(`${setting.numerodono}@s.whatsapp.net`, {text: sug}, {quoted: info})
reply("mensagem enviada ao meu dono, obrigado pela sugestão, tentar ouvir o máximo possível de sugestões.")
break

//=======(BAIXAR/PESQUISAS)==========\\

case 'pinterest': case 'pin':{
if (!q) throw `Exemplo : ${prefix + command}`
let { pinterest } = require('./lib/scraper')
anu = await pinterest(q)
result = anu[Math.floor(Math.random() * anu.length)]               
let buttons = [                   
{buttonId: `${prefix}pinterest ${q}`, buttonText: {displayText: 'ᬊ͜͡𝑷𝑹𝑶́𝑿𝑰𝑴𝑶'}, type: 1}
]
let buttonMessage = {
image: { url: result },
caption: `Resultados sobre : ${q}\n\nLink: 
${result}\n\n*Clique em próximo para continuar*`,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4
}
dens.sendMessage(from, buttonMessage, { quoted: selo })
}
break

case 'anime': {
if(!q) return reply(`Qual anime você quer pesquisar?\nExemplo ${prefix}manga naruto`)
reply("aguarde um minuto...")						
const { Anime } = require("@shineiichijo/marika")
const client = new Anime();
let anime = await client.searchAnime(q)
let result = anime.data[0];
console.log(result)
let Saikyo = `⭔ Titulo: ${result.title}\n`;
Saikyo += `⭔ Formato: ${result.type}\n`;
Saikyo += `⭔ Estado: ${result.status.toUpperCase().replace(/\_/g, " ")}*\n`;
Saikyo += `⭔ Total episodio: ${result.episodes}\n`;
Saikyo += `⭔ Duração: ${result.duration}\n`;
Saikyo += `⭔ Gêneros:\n`;
for (let i = 0; i < result.genres.length; i++) {
Saikyo += `${result.genres[i].name}\n`;
}
Saikyo += `⭔ Residia em : ${result.source.toUpperCase()}*\n`;
Saikyo += `⭔ *estudar:\n`;
for (let i = 0; i < result.studios.length; i++) {
Saikyo += `${result.studios[i].name}\n`;
}
Saikyo += `⭔ Você produz:\n`;
for (let i = 0; i < result.producers.length; i++) {
Saikyo += `${result.producers[i].name}\n`;
}
Saikyo += `⭔ Treinou o : ${result.aired.from}\n`;
Saikyo += `⭔ Ele terminou em: ${result.aired.to}\n`;
Saikyo += `⭔ Popularidade: ${result.popularity}\n`;
Saikyo += `⭔ Favoritos: ${result.favorites}\n`;
Saikyo += `⭔ Avaliação: ${result.rating}\n`;
Saikyo += `⭔ Variar: ${result.rank}\n`;
if (result.trailer.url !== null)
Saikyo += `⭔ Trailer: 
${result.trailer.url}
\n`;
Saikyo += `⭔ Descrição:
${result.url}\n\n`;
if (result.background !== null)

Saikyo += `⭔📍FIM📍
`
let buttonMessage = {
image:{url:result.images.jpg.large_image_url},
caption: Saikyo,
footer: `${NomeDoBot}`,
headerType: 4,
contextInfo:{externalAdReply:{
title: ``,
body: `${NomeDoBot}`,
showAdAttribution: true,
mediaType:2,
thumbnail: log1,
sourceUrl: `https://www.instagram.com/maysurf__/`,
mediaUrl: ``
}}
}
dens.sendMessage(from,
buttonMessage,
{quoted:selo}
)
}
break

case 'ringtone': {
		if (!q) return reply(`Exemplo : ${prefix + command} black rover`)
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(!q)
		let result = anu[Math.floor(Math.random() * anu.length)]
		dens.sendMessage(from, { audio: { url: result.audio }, filename: result.Título+'.mp3', mimetype: 'audio/mp4' }, { quoted: selo })
	    }
	    break
	    
case 'coffee': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Proxima Image➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Café  meus nobres`,
                    footer: dens.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                dens.sendMessage(from, buttonMessage, { quoted: selo })
            }
            break

case 'wallpaper': {
if (!q) return reply(`Insira o título da consulta`)
let { wallpaper } = require('./lib/scraper.js')
anu = await wallpaper(q)
result = anu[Math.floor(Math.random() * anu.length)]
reply("Processando dados...") 
let buttons = [
{
buttonId: `${prefix}wallpaper ${q}`, 
buttonText: {
displayText: 'ᬊ͜͡𝑷𝑹𝑶́𝑿𝑰𝑴𝑶'
}, type: 1},
]
Saikyo = `
⭔ Título : ${q}
⭔ Categoria: ${result.type}
⭔ Detalhe: ${result.source}
⭔ Media Url: ${result.image[2] || result.image[1] || result.image[0]}`
let buttonMessage = {
image: { url: result.image[0] },
caption: Saikyo,
footer: ``,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: ``,
body: `${NomeDoBot}`,
showAdAttribution: true,
thumbnail: log1,
mediaType:2,
mediaUrl: ``, 
sourceUrl: `https://www.instagram.com/maysurf__/`
}}
}
dens.sendMessage(from, buttonMessage, { quoted: selo })
}
break
            
case 'wikimedia': {
if (!q) return reply(`Insira o título da consulta`)
let { wikimedia } = require('./lib/scraper.js')
anu = await wikimedia(q)
result = anu[Math.floor(Math.random() * anu.length)]
reply("Processando dados...") 
let buttons = [
{
buttonId: `${prefix}wikimedia ${q}`, 
buttonText: {
displayText: 'ᬊ͜͡𝑷𝑹𝑶́𝑿𝑰𝑴𝑶'
}, type: 1},
]
Saikyo = `
⭔ Título: ${q}
⭔ Fonte: 1${result.source}
⭔ Media Url: ${result.image}`
let buttonMessage = {
image: { url: result.image },
caption: Saikyo,
footer: ``,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: ``,
body: `${NomeDoBot}`,
showAdAttribution: true,
thumbnail: log1,
mediaType:2,
mediaUrl: ``, 
sourceUrl: `https://www.instagram.com/maysurf__/`
}}
}
dens.sendMessage(from, buttonMessage, { quoted: selo })
}
break

case'goyabu':
if(!q) return reply("cade o nome do anime? ver se escreve certo blz")
var request = await axios('https://goyabu.com/?s=' + args.join(" ").replace(/ /g, "+"));
var $ = cheerio.load(request.data);
var g = $('div.episodes-container').find('div.anime-episode').length;
var n = g 
if (n == '0') reply("Anime Não Encontrado Verifique Se Você Pesquiou Exatamente O Nome")
var sections = [{ title: `${NomeDoBot}`, rows: [] }];
for (let i = 0; i < n; i++) {
sections[0].rows.push({
title: $('div.episodes-container').find('div.anime-episode').eq(i).find('h3').text(),
rowId: prefix + 'yabu_1 ' + $('div.episodes-container').find('div.anime-episode').eq(i).find('a').attr('href')
});
};
await dens.sendMessage(from, {text: n + " Resultados", title: `${NomeDoBot}\nPesquisado por: ` + args.join(" "), buttonText: "SELECIONAR", sections });
break

case'yabu_1':
var request = await axios(args.join(" "));
var $ = cheerio.load(request.data);
var n = $('div.anime-info-right').find('div').eq(5).text().split(':')[1].trim().concat('\n', $('div.anime-info-right').find('div').eq(1).text().split(':')[1].trim(), '\n', $('div.anime-info-right').find('div').eq(4).text().split(':')[1].trim(), '\n\n', $('div.anime-description').text().trim());
var g = $('div.row').find('a').length;
var sections = [{ title: `${NomeDoBot}`, rows: [] }];
for (let i = 0; i < g; i++) {
sections[0].rows.push({
title: $('div.row').find('a').eq(i).find('div').eq(1).text(),
rowId: prefix + 'yabu_2 ' + $('div.row').find('a').eq(i).attr('href')
});
};
await dens.sendMessage(from, { text: n, title: $('h1').text(), buttonText: $('h1').text(), sections });
break

case'yabu_2':
var request = await axios(args.join(" "));
var $ = cheerio.load(request.data);
var g = 'https://kanra.dev' + $('html').html().split('https://kanra.dev')[1].split("'")[0];
var p = await axios('https://tinyurl.com/api-create.php?url=' + g);
var n = $('h1').text() + ':\nLink: ' + p.data;
reply(n);
break

case 'mediafire': {  
reply("Processando dados...") 
if (!q) throw '*Cadê do link o mediafire?*'
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) throw '*ERROR*'
const baby1 = await mediafireDl(q)
if (baby1[0].size.split('MB')[0] >= 100) return reply('*Não tem mais limite* '+util.format(baby1))
const result4 = `
*MEDIAFIRE BAIXAR*
          
Nome: ${baby1[0].nama}
GB: ${baby1[0].size}
Link: 
${baby1[0].link}\n

atenção tem que ser link direto, caso não seja enviado, copie o link que mandei e use novamente.`
reply(`${result4}`)
dens.sendMessage(from, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime ,  quoted : selo, contextInfo: { externalAdReply:{
title: ``,
body: `${NomeDoBot}`,
showAdAttribution: true,
mediaType:2,
thumbnail: fs.readFileSync("./logos/logo2.jpg"),
sourceUrl: `https://chat.whatsapp.com/E6tKxi8XP3F5wL7EfEhY8T`,
mediaUrl: `https://chat.whatsapp.com/E6tKxi8XP3F5wL7EfEhY8T` }}}, {quoted: selo})
}
break

case 'uptodown':
var { data } = await axios("https://br.uptodown.com/android/search/" + args.join(" ").replace(/ /g, "+"), { method: "get", headers: { "user-agent": 'Googlebot' } })
var $ = cheerio.load(data)
var n = $('div.name').find('a').length; if (!n) return reply(`erro`)
var sections = [{ title: 'teste', rows: [] }]
for (let i = 0; i < n; i++) {
sections[0].rows.push({
title: $('div.name').eq(i).find('a').text(),
rowId: prefix + "upuptload " + $('div.name').eq(i).find('a').attr('href')
})
}
dens.sendMessage(from, { text:  n + (n >= 2 ? " 𝐀𝐏𝐋𝐈𝐂𝐀𝐓𝐈𝐕𝐎𝐒" : " 𝐀𝐏𝐋𝐈𝐂𝐀𝐓𝐈𝐕𝐎"), title: "🛸𝐏𝐄𝐒𝐐𝐔𝐈𝐒𝐀𝐃𝐎: " + args.join(" "), buttonText: "🔮𝐒𝐄𝐋𝐄𝐂𝐈𝐎𝐍𝐀𝐑🔮", sections })
break

case'upuptload':
var { data } = await axios(args.join(" ") + "/download", { method: "get", headers: { "user-agent": 'Googlebot' } })
var $ = cheerio.load(data)
dens.sendMessage(from, { document: { url: $('button#detail-download-button').attr('data-url') }, mimetype: "application/apk", fileName: $('h1#detail-app-name').text().replace(/\n/i, "") + '.apk' })
break

case 'gerarlink':  
case 'imgpralink':    
try {
if (isQuotedImage) {
sendBtext(from, enviar.espere, `@~ usuário: ${pushname}\n@~ Grupo: ${groupName}\n@~ cmd: ${prefix + command}`, [{buttonId: `nd`, buttonText: {displayText: `Obg ${NomeDoBot}`}, type: 1}], info)
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
reply(res)
} else {
reply(`Mande uma imagem com a legenda ${prefix + command}`)
}
} catch {
reply('Ocorreu algum Error, desculpe 😔')
}
break

case 'videourl':
case 'videopralink':
try {
if ((isQuotedVideo) && args.length == 0) {
sendBtext(from, enviar.espere, `@~ usuário: ${pushname}\n@~ Grupo: ${groupName}\n@~ cmd: ${prefix + command}`, [{buttonId: `nd`, buttonText: {displayText: `Obg ${NomeDoBot}`}, type: 1}], info)
boij = isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.videoMessage : info
owgi = await getFileBuffer(boij, 'video')
res = await upload(owgi)
reply(res)
} else {
reply(`Mande vídeo com a legenda ${prefix + command}`)
}
} catch {
reply('Ocorreu algum Error, desculpe 😔/ O limite do tamanho de vídeo que gero o link, é 30 segundos.')
}
break

////////////

case 'komi-san':
case 'komi':
  const {komi} = require('./node_modules/API/animes.js')
  apikomi = komi[Math.floor(Math.random() * komi.length)]
  wew = await getBuffer(`${apikomi}`)
  buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: `⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙`}, type: 1}]
  await dens.sendMessage(from, {image: wew, caption: "komi-san👉👈", footer:  `${NomeDoBot}`, buttons}, {quoted: info})
break

case 'zero-two':
case 'zero':
  const {zero} = require('./node_modules/API/animes.js')
  apizero = zero[Math.floor(Math.random() * zero.length)]
  wew = await getBuffer(`${apizero}`)
  buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: `⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙`}, type: 1}]
  await dens.sendMessage(from, {image: wew, caption: "𝐃𝐚𝐫𝐥𝐢𝐧𝐠 Ohayo", footer:  `${NomeDoBot}`, buttons}, {quoted: info})
break


case 'nagatoro':
  const {nagatoro} = require('./node_modules/API/animes.js')
  apinagatoro = nagatoro[Math.floor(Math.random() * nagatoro.length)]
  wew = await getBuffer(`${apinagatoro}`)
  buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: `⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙`}, type: 1}]
  await dens.sendMessage(from, {image: wew, caption: "𝐒𝐞𝐧𝐩𝐚𝐢", footer:  `${NomeDoBot}`, buttons}, {quoted: info})
break

case 'suzuya':
  const {suzuya} = require('./node_modules/API/animes.js')
  apisuzuya = suzuya[Math.floor(Math.random() * suzuya.length)]
  wew = await getBuffer(`${apisuzuya}`)
  buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: `⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙`}, type: 1}]
  await dens.sendMessage(from, {image: wew, caption: "𝐣𝐮𝐮𝐳𝐨𝐮 𝐬𝐮𝐳𝐮𝐲𝐚", footer:  `${NomeDoBot}`, buttons}, {quoted: info})
break

case 'kaguya-sama':
case 'kaguya':
  const {kaguya} = require('./node_modules/API/animes.js')
  apikaguya = kaguya[Math.floor(Math.random() * kaguya.length)]
  wew = await getBuffer(`${apikaguya}`)
  buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: `⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙`}, type: 1}]
  await dens.sendMessage(from, {image: wew, caption: "𝐤𝐚𝐠𝐮𝐲𝐚-𝐬𝐚𝐦𝐚❤️", footer:  `${NomeDoBot}`, buttons}, {quoted: info})
break

case 'tanjiro':
  const {tanjiro} = require('./node_modules/API/animes.js')
  apitanjiro = tanjiro[Math.floor(Math.random() * tanjiro.length)]
  wew = await getBuffer(`${apitanjiro}`)
  buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: `⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙`}, type: 1}]
  await dens.sendMessage(from, {image: wew, caption: "𝐓𝐚𝐧𝐣𝐢𝐫𝐨 𝐞𝐬𝐩𝐚𝐝𝐚𝐜𝐡𝐢𝐦", footer:  `${NomeDoBot}`, buttons}, {quoted: info})
break

case 'neko':
  const {neko} = require('./node_modules/API/animes.js')
  apineko = neko[Math.floor(Math.random() * neko.length)]
  wew = await getBuffer(`${apineko}`)
  buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: `⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙`}, type: 1}]
  await dens.sendMessage(from, {image: wew, caption: "𝐍𝐞𝐤𝐨𝐬 𝐈𝐜𝐨𝐧𝐬", footer:  `${NomeDoBot}`, buttons}, {quoted: info})
break

case 'itsuki':
  const {itsuki} = require('./node_modules/API/animes.js')
  apiitsuki = itsuki[Math.floor(Math.random() * itsuki.length)]
  wew = await getBuffer(`${apiitsuki}`)
  buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: `⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙`}, type: 1}]
  await dens.sendMessage(from, {image: wew, caption: "𝐢𝐭𝐬𝐮𝐤𝐢-𝐢𝐜𝐨𝐧𝐬❤️", footer:  `${NomeDoBot}`, buttons}, {quoted: info})
break

case 'chizuru':
  const {chizuru} = require('./node_modules/API/animes.js')
  apichizuru = chizuru[Math.floor(Math.random() * chizuru.length)]
  wew = await getBuffer(`${apichizuru}`)
  buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: `⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙`}, type: 1}]
  await dens.sendMessage(from, {image: wew, caption: "𝐌𝐢𝐳𝐮𝐡𝐚𝐫𝐚 𝐜𝐡𝐢𝐳𝐮𝐫𝐮", footer: `${NomeDoBot}`, buttons}, {quoted: info})
break
  
case 'hinata':
  const {hinata} = require('./node_modules/API/animes.js')
  apihinata = hinata[Math.floor(Math.random() * hinata.length)]
  wew = await getBuffer(`${apihinata}`)
  buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: `⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙`}, type: 1}]
  await dens.sendMessage(from, {image: wew, caption: "𝐇𝐢𝐧𝐚𝐭𝐚 𝐇𝐲𝐮𝐮𝐠𝐚", footer: `${NomeDoBot}`, buttons}, {quoted: info})
break

case 'sakura':
  const {sakura} = require('./node_modules/API/animes.js')
  apisakura = sakura[Math.floor(Math.random() * sakura.length)]
  wew = await getBuffer(`${apisakura}`)
  buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: `⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙`}, type: 1}]
  await dens.sendMessage(from, {image: wew, caption: "𝐒𝐚𝐤𝐮𝐫𝐚 𝐇𝐚𝐫𝐮𝐧𝐨", footer: `${NomeDoBot}`, buttons}, {quoted: info})
break

case 'sakurajima':
  const {sakurajima} = require('./node_modules/API/animes.js')
  apisakurajima = sakurajima[Math.floor(Math.random() * sakurajima.length)]
  wew = await getBuffer(`${apisakurajima}`)
  buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: `⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙`}, type: 1}]
  await dens.sendMessage(from, {image: wew, caption: "𝐌𝐚𝐢 𝐒𝐚𝐤𝐮𝐫𝐚𝐣𝐢𝐦𝐚", footer: `${NomeDoBot}`, buttons}, {quoted: info})
break

case 'waifus':
  const {Waifu} = require('./node_modules/API/animes.js')
  apiWaifu = Waifu[Math.floor(Math.random() * Waifu.length)]
  wew = await getBuffer(`${apiWaifu}`)
  buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: `⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙`}, type: 1}]
  await dens.sendMessage(from, {image: wew, caption: "𝐖𝐚𝐢𝐟𝐮", footer: `${NomeDoBot}`, buttons}, {quoted: info})
break


case 'zoro':
  const {zoro} = require('./node_modules/API/animes.js')
  apizoro = zoro[Math.floor(Math.random() * zoro.length)]
  wew = await getBuffer(`${apizoro}`)
  buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: `⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙`}, type: 1}]
  await dens.sendMessage(from, {image: wew, caption: "𝐑𝐨𝐫𝐨𝐧𝐨𝐚 𝐙𝐨𝐫𝐨", footer: `${NomeDoBot}`, buttons}, {quoted: info})
break

case 'asuna':
  const {asuna} = require('./node_modules/API/animes.js')
  apiasuna = asuna[Math.floor(Math.random() * asuna.length)]
  wew = await getBuffer(`${apiasuna}`)
  buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: `⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙`}, type: 1}]
  await dens.sendMessage(from, {image: wew, caption: "𝐀𝐬𝐮𝐧𝐚 𝐘𝐮𝐮𝐤𝐢", footer: `${NomeDoBot}`, buttons}, {quoted: info})
break

case 'akame':
  const {akame} = require('./node_modules/API/animes.js')
  apiakame = akame[Math.floor(Math.random() * akame.length)]
  wew = await getBuffer(`${apiakame}`)
  buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: `⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙`}, type: 1}]
  await dens.sendMessage(from, {image: wew, caption: "𝐀𝐤𝐚𝐦𝐞 𝐠𝐚 𝐊𝐢𝐥𝐥!", footer: `${NomeDoBot}`, buttons}, {quoted: info})
break

case 'megumin':
  const {megumin} = require('./node_modules/API/animes.js')
  apimegumin = megumin[Math.floor(Math.random() * megumin.length)]
  wew = await getBuffer(`${apimegumin}`)
  buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: `⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙`}, type: 1}]
  await dens.sendMessage(from, {image: wew, caption: "𝐌𝐞𝐠𝐮𝐦𝐢𝐧", footer: `${NomeDoBot}`, buttons}, {quoted: info})
break

case 'naruto':
  const {naruto} = require('./node_modules/API/animes.js')
  apinaruto = naruto[Math.floor(Math.random() * naruto.length)]
  wew = await getBuffer(`${apinaruto}`)
  buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: `⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙`}, type: 1}]
  await dens.sendMessage(from, {image: wew, caption: "𝐍𝐚𝐫𝐮𝐭𝐨 𝐔𝐳𝐮𝐦𝐚𝐤𝐢", footer: `${NomeDoBot}`, buttons}, {quoted: info})
break

case 'nezuko':
  const {nezuko} = require('./node_modules/API/animes.js')
  apinezuko = nezuko[Math.floor(Math.random() * nezuko.length)]
  wew = await getBuffer(`${apinezuko}`)
  buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: `⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙`}, type: 1}]
  await dens.sendMessage(from, {image: wew, caption: "𝐍𝐞𝐳𝐮𝐤𝐨 𝐊𝐚𝐦𝐚𝐝𝐨", footer: `${NomeDoBot}`, buttons}, {quoted: info})
break

case 'lolis':
  const {lolis} = require('./node_modules/API/animes.js')
  apilolis = lolis[Math.floor(Math.random() * lolis.length)]
  wew = await getBuffer(`${apilolis}`)
  buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: `⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙`}, type: 1}]
  await dens.sendMessage(from, {image: wew, caption: "𝐥𝐨𝐥𝐢? 𝐂𝐮𝐢𝐝𝐚𝐝𝐨 𝐦𝐞𝐮 𝐩𝐚𝐫𝐜𝐞𝐢𝐫𝐨🕵️‍♂️", footer:`${NomeDoBot}`, buttons}, {quoted: info})
break

case 'metadinha': {
sendBtext(from, enviar.espere, `@~ usuário: ${pushname}\n@~ Grupo: ${groupName}\n@~ cmd: ${prefix + command}`, [{buttonId: `nd`, buttonText: {displayText: `Obg ${NomeDoBot}`}, type: 1}], info)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                dens.sendMessage(from, { image: { url: random.male }, caption: `homem` }, { quoted: selo })
                dens.sendMessage(from, { image: { url: random.female }, caption: `mulher` }, { quoted: selo })
            }
	    break

/////////////HENTAI/+18/////////////

case 'loli': 
if (!isNsfw) return reply(`𝐄́ 𝐧𝐞𝐜𝐞𝐬𝐬𝐚́𝐫𝐢𝐨 𝐪𝐮𝐞 𝐨 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐞𝐣𝐚 𝐚𝐭𝐢𝐯𝐚𝐝𝐨 𝐩𝐨𝐫 𝐮𝐦 𝐚𝐝𝐦\𝐄𝐱𝐞𝐦𝐩𝐥𝐨: ${prefix}+18`)
if (isBanned) return 
   const {loli} = require('./node_modules/API/hentai.js')
  apiloli = loli[Math.floor(Math.random() * loli.length)]
  wew = await getBuffer(`${apiloli}`)
  buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: `⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙`}, type: 1}]
  await dens.sendMessage(from, {image: wew, caption: "𝐥𝐨𝐥𝐢? 𝐂𝐮𝐢𝐝𝐚𝐝𝐨 𝐦𝐞𝐮 𝐩𝐚𝐫𝐜𝐞𝐢𝐫𝐨🕵️‍♂️", footer:`${NomeDoBot}`, buttons}, {quoted: info})
  break

case 'trap': 
if (!isNsfw) return reply(`𝐄́ 𝐧𝐞𝐜𝐞𝐬𝐬𝐚́𝐫𝐢𝐨 𝐪𝐮𝐞 𝐨 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐞𝐣𝐚 𝐚𝐭𝐢𝐯𝐚𝐝𝐨 𝐩𝐨𝐫 𝐮𝐦 𝐚𝐝𝐦\𝐄𝐱𝐞𝐦𝐩𝐥𝐨: ${prefix}nsfw`)
if (isBanned) return 
   const {trap} = require('./node_modules/API/hentai.js')
  apitrap = trap[Math.floor(Math.random() * trap.length)]
  wew = await getBuffer(`${apitrap}`)
  buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: `⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙`}, type: 1}]
  await dens.sendMessage(from, {image: wew, caption: "𝐓𝐫𝐚𝐩?🤨😏", footer:`${NomeDoBot}`, buttons}, {quoted: info})
  break


case 'hentai': 
if (!isNsfw) return reply(`𝐄́ 𝐧𝐞𝐜𝐞𝐬𝐬𝐚́𝐫𝐢𝐨 𝐪𝐮𝐞 𝐨 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐞𝐣𝐚 𝐚𝐭𝐢𝐯𝐚𝐝𝐨 𝐩𝐨𝐫 𝐮𝐦 𝐚𝐝𝐦\𝐄𝐱𝐞𝐦𝐩𝐥𝐨: ${prefix}nsfw`)
if (isBanned) return 
   const {hentai} = require('./node_modules/API/hentai.js')
  apihentai = hentai[Math.floor(Math.random() * hentai.length)]
  wew = await getBuffer(`${apihentai}`)
  buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: `⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙`}, type: 1}]
  await dens.sendMessage(from, {image: wew, caption: "𝐇𝐞𝐧𝐭𝐚𝐢🔞", footer:`${NomeDoBot}`, buttons}, {quoted: info})
  break

case 'waifu': 
if (!isNsfw) return reply(`𝐄́ 𝐧𝐞𝐜𝐞𝐬𝐬𝐚́𝐫𝐢𝐨 𝐪𝐮𝐞 𝐨 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐞𝐣𝐚 𝐚𝐭𝐢𝐯𝐚𝐝𝐨 𝐩𝐨𝐫 𝐮𝐦 𝐚𝐝𝐦\𝐄𝐱𝐞𝐦𝐩𝐥𝐨: ${prefix}nsfw`)
if (isBanned) return 
   const {waifu} = require('./node_modules/API/hentai.js')
  apiwaifu = waifu[Math.floor(Math.random() * waifu.length)]
  wew = await getBuffer(`${apiwaifu}`)
  buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: `⏤͟͟͞͞❑ꦽꦷ𝐏𝐑𝐎𝐗𝐈𝐌𝐎⸙`}, type: 1}]
  await dens.sendMessage(from, {image: wew, caption: "𝐇𝐞𝐧𝐭𝐚𝐢🔞", footer:`${NomeDoBot}`, buttons}, {quoted: info})
  break
  


////////////////FIM////////////////

case 'xvideo':
var { data } = await axios("https://www.xvideos.com/?k=" + args.join(" ").replace(/ /g, "+") + "&sort=random", { method: "get", headers: { "user-agent":  'Googlebot' } });
var $ = cheerio.load(data);
var g = $('p.title').length;
var n = g > 0 ? g : reply('erro');
var sections = [{ title: "cu", rows: [] }];
for (let i = 0; i < n; i++) {
sections[0].rows.push({
title: $('p.title').eq(i).find('a').attr('title'),
rowId: prefix + "xvdl " + "https://www.xvideos.com" + $('p.title').eq(i).find('a').attr('href')
})
};
await dens.sendMessage(from, { text: n + (n >= 2 ? " videos" : " video"), title: "Resultados para: " + args.join(" "), buttonText: "SELECIONAR", sections });
break

case 'xvdl': {(async () => {
if (!isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
if(!args.join(" ").includes('xvideos')) return reply("CADÊ O LINK?")
  reply(enviar.espere)
var {data} = await axios(args.join(" "), {
method: "get", headers: {
"user-agent": 'Googlebot'
}})
var $ = cheerio.load(data)
var a = $('title').text().replace(" - XVIDEOS.COM", "")
var imguff = $('html').html().split("html5player.setThumbUrl('")[1].split("');")[0]
var low = $('html').html().split("html5player.setVideoUrlLow('")[1].split("');")[0]
var high = $('html').html().split("html5player.setVideoUrlHigh('")[1].split("');")[0]
var u = a.slice(0, 50) + '...\n' + $('div.video-metadata').find('ul').find('li').find('a').find('span.name').eq(0).text() + '\n' + $('h2.page-title').find('span.duration').text() + '\n' + $('div#v-views').find('strong').eq(0).text() + ' Views : ' + $('div.good').find('span').text() + ' 👍'
sendBimg(from, `${imguff}`, `${u}`, `${NomeDoBot}`, [
{buttonId: `${prefix}xvdllow ${low}`, buttonText: {displayText: `🔥 𝐁𝐀𝐈𝐗𝐀 𝐐𝐔𝐀𝐋𝐈𝐃𝐀𝐃𝐄 🔥`}, type: 1}, {buttonId: `${prefix}xvdllow ${high}`, buttonText: {displayText: `🔥 𝐌𝐄́𝐃𝐈𝐀 𝐐𝐔𝐀𝐋𝐈𝐃𝐀𝐃𝐄 🔥`}, type: 1}], info)
})().catch((err) => reply(String("teste" ? err: "erro")))
}
break

case 'xvdllow':
if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
egirls('irei enviar no seu privado...')
anu = await getBuffer(`${q}`)
dens.sendMessage(sender, {video: anu, mimetype: 'video/mp4'}, {quoted: info})
break

case'xnxx':
var { data } = await axios("https://www.xnxx.com/search/hits/" + (args.join(" ").split("|")[1] == '10-20' ? "10-20 " : "0-10") + "min/" + args.join(" ").split("|")[0].replace(/ /g, "+"));
var $ = cheerio.load(data)
var n = $('span.name').length
if (n == 0) return reply('erro')
var sections = [{ title: 'aaaa', rows: [] }]
for (let i = 0; i < n; i++) {
sections[0].rows.push({
title: $('div.thumb-under').eq(i).find('p > a').text(),
rowId: prefix + "xnxxdl " + "https://www.xnxx.com" + $('div.thumb-under').eq(i).find('p > a').attr('href')
})
}
dens.sendMessage(from, { text: n + " videos", title: "Resultados para: " + args.join(" ").split("|")[0], buttonText: "SELECIONAR", sections })
break

case'xnxxdl':
var { data } = await axios(args.join(" "));
var $ = cheerio.load(data)
var a = $('div.clear-infobar').find('strong').text().slice(0, 50)
var u = a + '...\n' + $('div.clear-infobar').find('span.metadata').find('a.gold-plate').text() + '\n' + $('div.clear-infobar').find('span.metadata').text().split('-')[2].replace(/\n/g, "").trim() + ' Views : ' + $('div#video-votes').find('span.rating-box').text() + ' 👍'
dens.sendMessage(from, { image: { url: $('html').html().split("html5player.setThumbUrl('")[1].split("');")[0] }, caption: u, templateButtons: [{ index: 1, urlButton: { displayText: a, url: args.join(" ").split } }, { index: 2, quickReplyButton: { displayText: 'BAIXA', id: prefix + 'dlxnxx ' + $('html').html().split("html5player.setVideoUrlLow('")[1].split("');")[0] + '|' + a } }, { index: 3, quickReplyButton: { displayText: 'MÉDIA', id: prefix + 'dlxnxx ' + $('html').html().split("html5player.setVideoUrlHigh('")[1].split("');")[0] + '|' + a } }] })
break

case 'dlxnxx':
if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
egirls('irei enviar no seu privado...')
anu = await getBuffer(`${q}`)
dens.sendMessage(sender, {video: anu, mimetype: 'video/mp4'}, {quoted: info})
break

////////DOWNLOAD/PLAY//////////////////

case 'ytsearch':
try {
psq = args.join(' ')
if(psq.length < 2) return reply(`O que você deseja encontrar?, diga o nome do vídeo ou da música, e irei informar os links que correspondem.`)
blar = await fetchJson(`https://aleatoryapi.herokuapp.com/api/ytsrc?q=${psq}&apikey=${keyale}`)
pla = '==============\n\n'
for (let x of blar.resultado) {
pla += `Titulo: ${x.title}\n`
pla += `Link: ${x.url}`
pla += '\n\n=============\n\n'
}
reply(pla.trim())
} catch {
reply('Error!!')
}
break

case 'twitter':
link = args.join(' ')
if (!link) return reply('Ops, insira o link de um video do twitter')
sendBtext(from, enviar.espere, `@~ usuário: ${pushname}\n@~ Grupo: ${groupName}\n@~ cmd: ${prefix + command}`, [{buttonId: `nd`, buttonText: {displayText: `Obg ${NomeDoBot}`}, type: 1}], info)
post = await fetchJson(`https://aleatoryapi.herokuapp.com/api/twitter?link=${link}&apikey=${keyale}`)
descc = post.resultado.desc
video_hd = await getBuffer(post.resultado.HD)
dens.sendMessage(from, {video: video_hd, caption: descc}, {quoted: info}).catch(e => {
reply('Error!!')
})
break

case 'ytmp4':
qd = args.join(" ")
if(qd.length < 7) return reply('Você deve pegar o link do YouTube gerado pelo ytsearch ou do próprio YouTube mesmo, e usar com esse comando, e ele enviará seu video / música de video')
sendBtext(from, enviar.espere, `@~ usuário: ${pushname}\n@~ Grupo: ${groupName}\n@~ cmd: ${prefix + command}`, [{buttonId: `nd`, buttonText: {displayText: `Obg ${NomeDoBot}`}, type: 1}], info)
res = await fetchJson(`https://aleatoryapi.herokuapp.com/api/ytsrc?q=${qd}&apikey=${keyale}`)
blaimg = await getBuffer(res.resultado[0].image)
bla = `Titulo: ${res.resultado[0].title}\nVisualizações: ${res.resultado[0].views}\nTempo: ${res.resultado[0].duration.timestamp}\nCanal: ${res.resultado[0].author.name}\n`
dens.sendMessage(from, {image: blaimg, caption: bla}, {quoted: info})
bla = await fetchJson(`https://aleatoryapi.herokuapp.com/api/ytmp4-2?q=${q}&apikey=${keyale}`)
blabla = await getBuffer(bla[0].link)
dens.sendMessage(from, {video: blabla, mimetype: 'video/mp4'}, {quoted: info}).catch(e => {
reply('ERROR')
})
break

case 'ytmp3':
qd = args.join(" ")
if(qd.length < 7) return reply('Você deve pegar o link do YouTube gerado pelo ytsearch ou do próprio YouTube mesmo, e usar com esse comando, e ele enviará seu áudio / música')
sendBtext(from, enviar.espere, `@~ usuário: ${pushname}\n@~ Grupo: ${groupName}\n@~ cmd: ${prefix + command}`, [{buttonId: `nd`, buttonText: {displayText: `Obg ${NomeDoBot}`}, type: 1}], info)
res = await fetchJson(`https://aleatoryapi.herokuapp.com/api/ytsrc?q=${qd}&apikey=${keyale}`)
blaimg = await getBuffer(res.resultado[0].image)
bla = `Titulo: ${res.resultado[0].title}\nVisualizações: ${res.resultado[0].views}\nTempo: ${res.resultado[0].duration.timestamp}\nCanal: ${res.resultado[0].author.name}\n`
dens.sendMessage(from, {image: blaimg, caption: bla}, {quoted: info})
bla = await fetchJson(`https://aleatoryapi.herokuapp.com/api/ytmp3-2?q=${q}&apikey=${keyale}`)
audbla = await getBuffer(bla[0].link)
dens.sendMessage(from, {audio: audbla, mimetype: 'audio/mp4'}, {quoted: info}).catch(e => {
reply('ERROR!!')
})
break

case 'tiktok':
 sections = [
    {
	title: `TIKTOK PLAY`,
	rows: [
  	   {title: "[🔊] AUDIO", rowId: `${prefix}tiktokaudio ${args.join(' ')}`},
	   {title: "[🎥] VIDEO", rowId: `${prefix}tiktokvídeo ${args.join(' ')}`},
	]
    },
]
  listMessage2 = {
  text: 'ola escolha uma das opções abaixo..',
  footer: 'Selecione um formato abaixo.',
  title: `Olá ${pushname}`,
  buttonText: "Clique",
  sections
}
sendMsg = await dens.sendMessage(from, listMessage2, {quoted: selo})
break

case 'instagram':
 sections = [
    {
	title: `INSTA PLAY`,
	rows: [
  	   {title: "[▶️] AUDIO", rowId: `${prefix}instaaudio ${args.join(' ')}`},
	   {title: "[📁] VIDEO", rowId: `${prefix}instavideo ${args.join(' ')}`},
	]
    },
]
  listMessage2 = {
  text: 'ola caso queira baixar.',
  footer: 'Selecione um formato abaixo.',
  title: `Olá ${pushname}`,
  buttonText: "Clique",
  sections
}
sendMsg = await dens.sendMessage(from, listMessage2, {quoted: selo})
break

case 'facebook':
 sections = [
    {
	title: `FACE PLAY`,
	rows: [
  	   {title: "[🔊] AUDIO", rowId: `${prefix}faceaudio ${args.join(' ')}`},
	   {title: "[🎥] VIDEO", rowId: `${prefix}facevídeo ${args.join(' ')}`},
	]
    },
]
  listMessage2 = {
  text: 'ola escolha um dos formatos abaixo.',
  footer: 'Selecione de acordo com sua necessidade.',
  title: `Olá ${pushname}`,
  buttonText: "Clique",
  sections
}
sendMsg = await dens.sendMessage(from, listMessage2, {quoted: selo})
break

case 'facevídeo':
case 'instavideo':
case 'tiktokvídeo':
try {
reply(enviar.espere)
var {savefrom} = require('./armor/js/savefrom.js')
wew = await savefrom(q)
jet = {url: wew.url[0].url}
dens.sendMessage(from, {video: jet, mimetype: "video/mp4"}, {quoted: info})
} catch {
reply('Não foi possível baixar este vídeo 😔')
}
break

case 'faceaudio':
case 'tiktokaudio':
case 'instaudio':
try {
reply('fazendo download do seu comando‼️') 
var {savefrom} = require('./lib/savefrom.js')
wew = await savefrom(q)
jet = {url: wew.url[0].url}
await dens.sendMessage(from, {audio: jet, mimetype: 'audio/mpeg', contextInfo: {externalAdReply : {title: `${NomeDoBot}`, renderLargerThumbnail:false, showAdAttribution: true, body: "ESPERO QUE GOSTE DO BOT", mediaUrl: `${q}`, mediaType: 2, thumbnail: fs.readFileSync('./logos/logo2.jpg') }}}, {quoted: selo})
} catch {
reply('Não foi possível baixar este áudio 😔')
}
break

case 'playstore':
if(!q) return reply('Digite um nome de um app que deseja pesquisar.')
let play = await hx.playstore(q);
let stor = "❉─────────────────────❉\n"
for (let i of play) {
stor += `\n*「 _PLAY STORE_ 」*\n
- 📄 *Nome* : ${i.name}
- 🌀 *Link* : ${i.link}\n
- 🤵🏻 *desenvolvedor* : ${i.developer}
- 📤 *Desenvolvedor link* : ${i.link_dev}\n❉─────────────────────❉`
}
reply(stor)
break

case 'celular':
if (!q) return reply(`Qual celular você está procurando?`)
teks = args.join(' ')
anu = await fetchJson(`https://api-yogipw.herokuapp.com/api/search/gsmarena?query=${q}`)
const busca_celular = 
`
📝 Titulo: ${anu.judul}
❗Última atualização: ${anu.rilis}
📱 Tamanho do celular: ${anu.ukuran}
⚡ Tipo: ${anu.type}
🗃️ Armazenamento: ${anu.storage}
📴 Tela: ${anu.display}
📳 Polegada: ${anu.inchi}
🔰 Resolução da câmera: ${anu.pixel}
📲 Resolução do video: ${anu.videoPixel}
💭 Ram do celular: ${anu.ram}
👤 Hardware do celular: ${anu.chipset}
⚠️ Bateria: ${anu.batrai}
🔋 Tipo da bateria: ${anu.merek_batre}`
 wew = fs.readFileSync('./logos/logo2.jpg')
await dens.sendMessage(from, {image: wew, thumbnail:null, caption: `${busca_celular}`}, {quoted: info})
break


//================Play do YouTube 

case 'play':
try {
var aramas = await yts(args.join(' '))
} catch {
reply('Erro, pesquisa não encontrada')
}
var objs = []
for (let x of aramas.all) {
let data = {
rowId: `${prefix}song `+ x.title,
title: x.title,
description: `Duração: ${x.timestamp}`
}
objs.push(data)
}
var sections = [
{
title: " ",
rows: objs
}
]
var msc = {
text: `🔎 *Pesquisa:* ${q}`,
footer: '_lista completa de coisas relacionadas a sua pesquisa, escolha uma das opcoes abaixo pra mim termina de executar o download.',
title: "pesquisa concluida",
buttonText: "CLIQUE",
sections
}
dens.sendMessage(from, msc, {quoted: selo})
break

case 'videolist':
 sections = [
    {
	title: `VIDEO PLAY`,
	rows: [
  	   {title: "[🎬] 360p", rowId: `${prefix}360p ${args.join(' ')}`},
	   {title: "[🎬] 480p", rowId: `${prefix}480p ${args.join(' ')}`},
	   {title: "[🎬] 720p", rowId: `${prefix}720p ${args.join(' ')}`},
	   {title: "[🎬] 1080p", rowId: `${prefix}1080p ${args.join(' ')}`},
	]
    },
]
  listMessage2 = {
  text: 'ola escolha a qualidade do vídeos.',
  footer: 'Selecione uma das qualidades.',
  title: `Olá ${pushname}`,
  buttonText: "Clique",
  sections
}
sendMsg = await dens.sendMessage(from, listMessage2, {quoted: selo})
break

case 'audiolist':
 sections = [
    {
	title: `AUDIO PLAY`,
	rows: [
  	   {title: "[🔊] MP3", rowId: `${prefix}audioplay ${args.join(' ')}`},
	   {title: "[🔊] audio", rowId: `${prefix}audioplay2 ${args.join(' ')}`},
	]
    },
]
  listMessage2 = {
  text: 'ola escolha um dos plays abaixo..',
  footer: 'Selecione um dos plays abaixo..',
  title: `Olá ${pushname}`,
  buttonText: "Clique",
  sections
}
sendMsg = await dens.sendMessage(from, listMessage2, {quoted: selo})
break

case 'song': {
if(!q) return reply(`- Exemplo: ${prefix}play nome da música\na música será baixada, só basta escolher áudio ou vídeo ou documentário, se não baixar, o YouTube privou de não baixarem, ou algo do tipo..`)
res = await yts(q)
if(res.all[0].timestamp.length >= 7) return reply("Desculpe, este video ou audio é muito grande, não poderei realizar este pedido, peça outra música abaixo de uma hora.")
reply(enviar.espere)
bla = `
『 @${NomeDoBot} 』
┏━─────❮𖣘❯─────━┓
│⬡ 
│⬡ Titulo: ${res.all[0].title}
│⬡ Duração: ${res.all[0].timestamp}
│⬡ visualização: ${res.all[0].views}
│⬡ canal: ${res.all[0].author.name}
│⬡ Link: 
│⬡ ${res.all[0].url}
│⬡ 
┗━─────❮𖣘❯─────━┛`
let buttons = [
{buttonId: `${prefix}audiolist ${res.all[0].url}`, buttonText: {displayText: '[ 🔊 ] Audio'}, type: 1},
{buttonId: `${prefix}videolist ${res.all[0].url}`, buttonText: {displayText: '[ 🎞️ ] Video'}, type: 1},
{buttonId: `${prefix}playauxi ${res.all[0].url}`, buttonText: {displayText: '[ 📂 ] Doc'}, type: 1}
]
let buttonMessage = {
image: { url: res.all[0].image },
caption: bla,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: ``,
body: `${NomeDoBot}`,
thumbnail: fs.readFileSync("./logos/audio.jpg"),
mediaType:2,
mediaUrl: ``,
sourceUrl: res.all[0].url
}}
}
dens.sendMessage(from, buttonMessage, { quoted: selo })
}
break

case 'playauxi':
res = await yts(q)
bla = `╭╼╾╼╾『 ℙ𝕝𝕒𝕪 𝕐𝕠𝕦𝕥𝕦𝕓𝕖 』╼╾╼╾╮
│
┃⚠️ Titulo : ${res.all[0].title}
│⏰ Duração :  ${res.all[0].timestamp}
┃👥 visu : ${res.all[0].views}
┃👤 canal :${res.all[0].author.name}
╰╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾★᭄ꦿ᭄ꦿ`
sendBimgT(from, `${res.all[0].image}`, bla, `${NomeDoBot}`, [{index: 1, urlButton: {displayText: 'suporte 『👤』', url: `https://wa.me/${setting.numerodono}`}}, {index: 2, urlButton: {displayText: 'Download『🔗』', url: `http://deturl.com/${res.all[0].url}`}}, {index: 2, quickReplyButton: {displayText: 'Doc Video 『🎬』', id: `${prefix}videoplaydoc ${q}`}},
{index: 3, quickReplyButton: {displayText: 'Doc Audio『🎵』', id: `${prefix}audioplaydoc ${q}`}}], selo)
break 

case 'audioplay':
try {
sendBtext(from, enviar.espere, `@~ usuário: ${pushname}\n@~ Grupo: ${groupName}\n@~ cmd: ${prefix + command}`, [{buttonId: `nd`, buttonText: {displayText: `Obg ${NomeDoBot}`}, type: 1}], info)
res = await yts(q)
ytdl = require('ytdl-core')
wew = getRandom('.mp3')
bx = await ytdl(res.all[0].url, { quality: '249' }).pipe(fs.createWriteStream(wew))
bx.on("finish", function () {
dens.sendMessage(from, { audio: fs.readFileSync(wew), mimetype:"audio/mp4", caption:"*Sucesso*", contextInfo:{externalAdReply:{
title:``,
body: `${NomeDoBot}`,
renderLargerThumbnail: true,
showAdAttribution: true,
mediaType:2,
thumbnail: fs.readFileSync("./logos/logo2.jpg"),
sourceUrl: ``,
mediaUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`
}}}, {quoted: info}).then(() => fs.unlinkSync(wew) )
})
} catch {
reply('Não foi possível baixar este áudio 😔')
}
break

case 'audioplay2':
try {
sendBtext(from, enviar.espere, `@~ usuário: ${pushname}\n@~ Grupo: ${groupName}\n@~ cmd: ${prefix + command}`, [{buttonId: `nd`, buttonText: {displayText: `Obg ${NomeDoBot}`}, type: 1}], info)
res = await yts(q)
ytdl = require('ytdl-core')
wew = getRandom('.mp3')
bx = await ytdl(res.all[0].url, { quality: '249' }).pipe(fs.createWriteStream(wew))
bx.on("finish", function () {
dens.sendMessage(from, { audio: fs.readFileSync(wew), mimetype: "audio/mp4", ptt:true, caption:"*Sucesso*", contextInfo:{externalAdReply:{
image: `${res.all[0].image}`,
title:``,
body: `${NomeDoBot}`,
showAdAttribution: true,
mediaType:2,
thumbnail: fs.readFileSync("./logos/audio.jpg"),
sourceUrl: `${res.all[0].url}`,
mediaUrl: `${res.all[0].image}`,
}}}, {quoted: info}).then(() => fs.unlinkSync(wew) )
})
} catch {
reply('Não foi possível baixar este áudio 😔')
}
break

case '360p':
case '480p':
case '720p':
case '1080p':
ytdl = require('ytdl-core')
if (command === '360p'){
rafa = getRandom('.mp4')
bx = await ytdl(args.join(' '), { quality: '18' }).pipe(fs.createWriteStream(rafa))
bx.on("finish", function () {
dens.sendMessage(from, {video: fs.readFileSync(rafa)}, {quoted: info}).then(() => fs.unlinkSync(rafa) )
})
return
}
var { formats } = await ytdl.getInfo(args.join(' '))
var a = []
for (let i of formats) {
i.hasVideo ? a.push(i.itag) : ""
}
if (command === '480p'){
var b = a.indexOf(135) >= 0 ? '135' : a.indexOf(244) >= 0 ? '244' : a.indexOf(333) >= 0 ? '333' : a.indexOf(397) >= 0 ? '397' : a.indexOf(697) >= 0 ? '697' : 'undefined'
}
if (command === '720p'){
var b = a.indexOf(136) >= 0 ? '136' : a.indexOf(247) >= 0 ? '247' : a.indexOf(298) >= 0 ? '298' : a.indexOf(302) >= 0 ? '302' : a.indexOf(334) >= 0 ? '334' : a.indexOf(398) >= 0 ? '398' : a.indexOf(698) >= 0 ? '698' : 'undefined'
}
if (command === '1080p'){
var b = a.indexOf(137) >= 0 ? '137' : a.indexOf(248) >= 0 ? '248' : a.indexOf(299) >= 0 ? '299' : a.indexOf(303) >= 0 ? '303' : a.indexOf(335) >= 0 ? '335' : a.indexOf(399) >= 0 ? '399' : a.indexOf(699) >= 0 ? '699' : 'undefined'
}
if (b === 'undefined') return reply(`Vídeo em ${command} não encontrado`)
jet = getRandom('.mp4')
wew = getRandom('.m4a')
bx = await ytdl(args.join(' '), { quality: '140' }).pipe(fs.createWriteStream(wew))
cx = await ytdl(args.join(' '), { quality: b }).pipe(fs.createWriteStream(jet))
bx && cx.on("finish", function () {
rafa = getRandom('.mp4')
exec(`ffmpeg -i ${jet} -i ${wew} -c copy ${rafa}`, (err) => {
fs.unlinkSync(jet)
fs.unlinkSync(wew)
dens.sendMessage(from, {video: fs.readFileSync(rafa)}, {quoted: info}).then(() => fs.unlinkSync(rafa))
})
})
break

case 'audioplaydoc':
try {
sendBtext(from, enviar.espere, `@~ usuário: ${pushname}\n@~ Grupo: ${groupName}\n@~ cmd: ${prefix + command}`, [{buttonId: `nd`, buttonText: {displayText: `Obg ${NomeDoBot}`}, type: 1}], info)
res = await yts(q)
ytdl = require('ytdl-core')
wew = getRandom('.mp3')
bx = await ytdl(res.all[0].url, { quality: '249' }).pipe(fs.createWriteStream(wew))
bx.on("finish", function () {
dens.sendMessage(from, { document: fs.readFileSync(wew), mimetype: "audio/mp4", fileName: `${res.all[0].title}` }, {quoted: info}).then(() => fs.unlinkSync(wew) )
})
} catch {
reply('Não foi possível baixar este áudio 😔')
}
break

case 'videoplaydoc':
try {
sendBtext(from, enviar.espere, `@~ usuário: ${pushname}\n@~ Grupo: ${groupName}\n@~ cmd: ${prefix + command}`, [{buttonId: `nd`, buttonText: {displayText: `Obg ${NomeDoBot}`}, type: 1}], info)
res = await yts(q)
ytdl = require('ytdl-core')
rafa = getRandom('.mp4')
bx = await ytdl(res.all[0].url, { quality: '18' }).pipe(fs.createWriteStream(rafa))
bx.on("finish", function () {
dens.sendMessage(from, { document: fs.readFileSync(rafa), mimetype: "video/mp4", fileName: `${res.all[0].title}` }, {quoted: info}).then(() => fs.unlinkSync(rafa) )
})
} catch {
reply('Não foi possível baixar este vídeo 😔')
}
break

//===============================

case 'ytmp3':
case 'down_a':
try {
if(!q) return 
if(q.includes("facebook")) {
reply("Só baixo no formato fb.watch")
}
if(q.includes("youtu") && !q.includes("share")) {
res = await yts(q)
if(res.all[0].timestamp.length >= 7) return reply("Desculpe, este video ou audio é muito grande, não poderei realizar este pedido, peça outra música abaixo de uma hora.")
}
reply(enviar.espere)
conn.sendMessage(from, {audio: {url:`http://aleatoryapi.herokuapp.com/api/download/?url=${q}&apikey=${keyale}`}, mimetype: 'audio/mp4'}, {quoted: info}).catch(e => {
console.log(e)
reply("Error")
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
console.log(e)
reply('ERROR!!')
}
}
break

case 'ytmp4':
case 'down_v':
try {
if(!q) return
if(q.includes("facebook")) {
reply("Só baixo no formato fb.watch")
}
if(q.includes("youtu") && !q.includes("share")) {
res = await yts(q)
if(res.all[0].timestamp.length >= 7) return reply("Desculpe, este video ou audio é muito grande, não poderei realizar este pedido, peça outra música abaixo de uma hora.")
}
reply(enviar.espere)
conn.sendMessage(from, {video: {url:`http://aleatoryapi.herokuapp.com/api/download/?url=${q}&apikey=${keyale}`}, mimetype: 'video/mp4'}, {quoted: info}).catch(e => {
console.log(e)
reply("Error")
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
console.log(e)
reply('ERROR!!')
}
}
break

//======(CASE-BEM-VINDO/E ETC..)======\\

case 'resetarttt':
case 'rvttt':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
daily.splice([])
fs.writeFileSync('./datab/usuarios/diario.json', JSON.stringify(daily))
reply('‼️O jogo da velha TTT foi resetado com sucesso..✔️')
reply(`${prefix}reiniciar`)
break

case 'reiniciar':
if(!numerodono) return
rp = (Date.now() / 1000) - info.messageTimestamp
blar = process.uptime()
startAle()
reply(`Reiniciei em ${String(rp.toFixed(3))}m\n\nTempo Ativo : ${kyun(blar)}`)
break

case 'javolto':
if (!numerodono) reply (`somente o meu mestre...`)
dens.groupParticipantsUpdate(from, [sender], 'remove') 
reply (`calmar ai o @${setting.numerodono} voltar em aproximadamente 10 segundos`)
await sleep (10000)
dens.groupParticipantsUpdate(from, [sender], "add")
reply (`pronto ${NickDono}...Bem vindo de volta ao grupo`)
break

//========(Sticker-Stickers)=========\\

case 'emoji':
case 'semoji':
if(!q) return reply(`Exemplo: ${prefix}emoji ☹️/whatsapp`)
emot = q.split('/')[0]
jemot = q.split('/')[1]
if(jemot == 'apple'){
idemot = 0
}
else if(jemot == 'google'){
idemot = 1
}
else if(jemot == 'samsung'){
idemot = 2
}
else if(jemot == 'microsoft'){
idemot = 3
}
else if(jemot == 'whatsapp'){
idemot = 4
}
else if(jemot == 'twitter'){
idemot = 5
}
else if(jemot == 'facebook'){
idemot = 6
}
else if(jemot == 'joypixels'){
idemot = 7
}
else if(jemot == 'openmoji'){
idemot = 8
}
else if(jemot == 'emojidex'){
idemot = 9
}
else if(jemot == 'lg'){
idemot = 10
}
else if(jemot == 'htc'){
idemot = 11
}
else if(!jemot){
idemot = 4
}
else{
return reply(`Exemplo: ${prefix}emoji ☹️/whatsapp`)
}
sendBtext(from, enviar.espere, `@~ usuário: ${pushname}\n@~ Grupo: ${groupName}\n@~ cmd: ${prefix + command}`, [{buttonId: `nd`, buttonText: {displayText: `Obg ${NomeDoBot}`}, type: 1}], info)
if(idemot == undefined) return
emoji.get(emot)
.then(emoji => {
console.log(emoji.images[idemot]);
sendStickerFromUrl(from, emoji.images[idemot].url, info)
}).catch(e => {
reply("EMOJI NÃO ENCONTRADO, TENTE OUTRO EMOJI..")
})
break

case 'sc':
case 'csticker':  
case 'stcirculo':
if ((isMedia && info.message.imageMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'image')
fs.writeFileSync(rane, buffimg)
media = rane
getpunt = getRandom('.png')
inpunt = getRandom('.webp')
exec(`convert ${media} -resize 512x512^ -gravity center -extent 512x512 ${getpunt} && magick ${getpunt} -quality 50 -define webp:lossless=true ${inpunt}`, async (error) => {
fs.unlinkSync(getpunt)
fs.unlinkSync(media)
if (error) return reply("Error!")
await dens.sendMessage(from, {sticker: fs.readFileSync(inpunt)}, {quoted: info})
fs.unlinkSync(inpunt)
})
} else {
reply("Apenas image!")
}
break

case 'fstiker': 
case 'f':
await limitAdd(sender)
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'image')
fs.writeFileSync(rane, buffimg)
const media = rane
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(enviar.stikga)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
dens.sendMessage(from, {sticker: buffer}, {quoted: info})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && info.message.videoMessage.seconds < 10 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 10) && args.length == 0) {
const encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
const media = rane
ran = getRandom('.webp')
sendBtext(from, enviar.espere, `@~ usuário: ${pushname}\n@~ Grupo: ${groupName}\n@~ cmd: ${prefix + command}`, [{buttonId: `nd`, buttonText: {displayText: `Obg ${NomeDoBot}`}, type: 1}], info)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(enviar.stikga)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
dens.sendMessage(from, {sticker: buffer}, {quoted: info})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
reply(`Enviar imagem / vídeo / gif com legenda \n${prefix}sticker (duração do adesivo de vídeo de 1 a 9 segundos)`)
}
break 

case 'emojimix': {
if (!q) reply(`*Exemplo:* ${prefix + command} 🦄+🤣`)
let [emoji1, emoji2] = q.split`+`
let kuntuh = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of kuntuh.results) {
var author2 = `${NomeDoBot}`
let encmedia = await sendImageAsSticker(dens,
from, res.url, info, { packname:pack, author:author2})
await fs.unlinkSync(encmedia)
}
}
break

case 'figfundo':
case 'figvideo':
case 'figusemfundo': 
case 'sfundo':  
if(!isQuotedImage) return reply(`Marque uma imagem`)
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
rafa = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage

buff = await getFileBuffer(rafa, 'image')
bas64 = `data:image/jpeg;base64,${buff.toString('base64')}`
anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : `${pushname}`
sd = `📍Criado por↓        ${NomeDoBot}`
dua = typeof anu[1] !== 'undefined' ? anu[1] : `${sd}`
var mantap = await convertSticker(bas64, `${dua}`, `${satu}`)
var sti = new Buffer.from(mantap, 'base64');
dens.sendMessage(from, {sticker: sti}, {quoted: info})
} else {
return reply(`So imagem mn -_-`)
}
break

case 'vlink':
case 'verlink': {
if(!q) return reply("Cade o link da image?")
if(q.includes('.jpg')){
kk = await getBuffer(`${q}`)
let buttonMessage = {
image: kk,
footer: ``,
headerType: 4,
contextInfo:{externalAdReply:{
title: `Ver Image de Link`,
body: `${NomeDoBot} ©`,
showAdAttribution: true,
thumbnail: fs.readFileSync("./logos/logo2.jpg"),
mediaType:2,
sourceUrl: ``,
mediaUrl: `https://Wa.me/5585992618106`
}}
}
dens.sendMessage(from, buttonMessage, {quoted:selo})
} else {
kkkk = await getBuffer(`${q}`)
let buttonMessagek = {
video: kkkk,
mimetype: 'video/mp4',
footer: ``,
headerType: 4,
contextInfo:{externalAdReply:{
title: `Ver Vídeo de Link`,
body: `${NomeDoBot} ©`,
showAdAttribution: true,
thumbnail: fs.readFileSync("./logos/logo2.jpg"),
mediaType:2,
sourceUrl: ``,
mediaUrl: `https://Wa.me/5585992618106`
}}
}
dens.sendMessage(from, buttonMessagek, {quoted:selo})
}
}
break

case 'st':
case 'st':
case 'sticker':
case 's': {
try {
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
tesst = await getBuffer('https://telegra.ph/file/635289dc66a9ccb424735.jpg')
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'image')
fs.writeFileSync(rane, buffimg)
const media = rane
rano = getRandom('.webp')
sendBtext(from, enviar.espere, `@~ usuário: ${pushname}\n@~ Grupo: ${groupName}\n@~ cmd: ${prefix + command}`, [{buttonId: `nd`, buttonText: {displayText: `Obg ${NomeDoBot}`}, type: 1}], info)
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('bot','ale')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
reply(enviar.stick)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
fs.unlinkSync(rano)
})
let buttonMessage = {
sticker: buffer,
caption: '',
footer: ``,
headerType: 4,
contextInfo:{externalAdReply: {
title: ``,
mediaType: 1,
renderLargerThumbnail: true,
showAdAttribution: true,
body: ``,
thumbnail: tesst,
sourceUrl: `https://Wa.me/5585992618106`,
}}
}
dens.sendMessage(from, buttonMessage, {quoted:selo})
} else if ((isMedia && info.message.videoMessage.seconds < 11 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
tesst = await getBuffer('https://telegra.ph/file/635289dc66a9ccb424735.jpg')
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
const media = rane
rano = getRandom('.webp')
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('bot', 'ale')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Falha na conversão de ${tipe} para sticker`)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
let buttonMessage = {
sticker: buffer,
caption: '',
footer: ``,
headerType: 4,
contextInfo:{externalAdReply: {
title: ``,
mediaType: 1,
renderLargerThumbnail: true,
showAdAttribution: true,
body: ``,
thumbnail: tesst,
sourceUrl: `https://Wa.me/5585992618106`,
}}
}
dens.sendMessage(from, buttonMessage, {quoted:selo})
fs.unlinkSync(rano)
})
} else {
reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
} catch {
reply('Ocorreu algum Error, desculpe 😔')
}
}
break

case 'lojinha':
if (!isGroup) return reply(enviar.msg.grupo)
dens.sendMessage(from, { product: { productImage: fs.readFileSync('./logos/logo2.jpg'), description: "youth dev's", title: "DESTINY-BOT", productImageCount: 1, productId: "4939046979532720", currencyCode: "USD", priceAmount1000: "100" }, "businessOwnerJid": "559185841876@s.whatsapp.net" });
break

//=============(AKINATOR)=============\\

case 'akinator':
case 'akinato':
if (q === "reset"){
if (isGroupAdmins || SoDono){
jogo.now = true
}
}
let startAki = async () => {
global.aki = new Aki({ region })
await aki.start()
}
if (jogo.now) {
await startAki()
jogo.now = false
jogo.jogador = sender
} else return reply("Alguem está jogando")
sections = [
{
title: " ",
rows: [
{ title: "Sim", rowId: prefix + 'resp 0' },
{ title: "Não", rowId: prefix + 'resp 1' },
{ title: "Não Sei", rowId: prefix + 'resp 2' },
{ title: "Provavelmente Sim", rowId: prefix + 'resp 3' },
{ title: "Provavelmente Não", rowId: prefix + 'resp 4' },
]
}
]
dens.sendMessage(from, { 
text: aki.question + "\nEscolha uma opção.\nProgresso: " + aki.progress + '%',
title: "Questão",
buttonText: "SELECIONAR",
sections
})
break

case 'resp':
if (jogo.jogador !== sender) return dens.sendMessage(from, { text: 'Não é você que está jogando.' }, { quoted: info })
await aki.step(args)
if (aki.progress >= 90 || aki.currentStep >= 90) {
await aki.win()
jogo.now = true
let buttons = [{ buttonId: prefix + 'fimaki', buttonText: { displayText: 'SIM' }, type: 1 }, { buttonId: prefix + 'fimaki' + ' nao', buttonText: { displayText: 'NÃO' }, type: 1 }]
dens.sendMessage(from, { image: { url: aki.answers[0].absolute_picture_path },
caption: aki.answers[0].name + ": " + aki.answers[0].description + '\nPor acaso este é o seu personagem?',
buttons: buttons,
headerType: 4
})
} else {
sections = [
{
title: " ",
rows: [
{ title: "Sim", rowId: prefix + 'resp 0' },
{ title: "Não", rowId: prefix + 'resp 1' },
{ title: "Não Sei", rowId: prefix + 'resp 2' },
{ title: "Provavelmente Sim", rowId: prefix + 'resp 3' },
{ title: "Provavelmente Não", rowId: prefix + 'resp 4' },
]
}
]
dens.sendMessage(from, { 
text: aki.question + "\nEscolha uma opção.\nProgresso: " + aki.progress.toFixed(0) + '%',
title: "Questão",
buttonText: "SELECIONAR",
sections
})
}
break

case 'fimaki':
if (q === 'nao') return reply('Puxa não foi desta vez 😔') 
reply('SABIA! EU VENCI 🥳')
break

case 'reset':
if (isGroupAdmins || SoDono){
jogo.now = true
reply("Akinator, resetado com sucesso")
} else {
reply("Somente admin e o dono, podem usar este comando")
}
break

//========(PLAQUINHAS-LOGOS)=========\\

case 'plaq': 
if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}nsfw 1`)
if (args.length < 1) return reply(`${prefix}plaq e digite o seu nome`)
teks = body.slice(6)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') 
sendBtext(from, enviar.espere, `@~ usuário: ${pushname}\n@~ Grupo: ${groupName}\n@~ cmd: ${prefix + command}`, [{buttonId: `nd`, buttonText: {displayText: `Obg ${NomeDoBot}`}, type: 1}], info)
buffer = await getBuffer(`https://raptibef.sirv.com/images%20(3).jpeg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=19%25&text.0.size=45&text.0.color=000000&text.0.opacity=55&text.0.font.family=Crimson%20Text&text.0.font.weight=300&text.0.font.style=italic&text.0.outline.opacity=21`)
dens.sendMessage(from, {image: buffer, sendEphemeral: true, thumbnail: null, caption: ' *Plaquinha feita ✓* '}, {quoted: selo})
break

case 'plaq2': 
if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}nsfw 1`)
if (args.length < 1) return reply(`${prefix}plaq2 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') 
sendBtext(from, enviar.espere, `@~ usuário: ${pushname}\n@~ Grupo: ${groupName}\n@~ cmd: ${prefix + command}`, [{buttonId: `nd`, buttonText: {displayText: `Obg ${NomeDoBot}`}, type: 1}], info)
buffer = await getBuffer(`https://raptibef.sirv.com/images%20(1).jpeg?profile=Zanga%202.0&text.0.text=${teks}`)
dens.sendMessage(from, {image: buffer, sendEphemeral: true, thumbnail: null, caption: ' *Plaquinha feita ✓* '}, {quoted: selo})
break

case 'plaq3': 
if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}nsfw 1`)
if (args.length < 1) return reply(`${prefix}plaq3 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') 
buffer = await getBuffer(`https://raptibef.sirv.com/images.jpeg?profile=Zanga%203.0&text.0.text=${teks}&text.0.outline.blur=63`)
dens.sendMessage(from, {image: buffer, sendEphemeral: true, thumbnail: null, caption: ' *Plaquinha feita ✓* '}, {quoted: selo})
break

case 'plaq4':
if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}nsfw 1`) 
if (args.length < 1) return reply(`${prefix}plaq7 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres') 
sendBtext(from, enviar.espere, `@~ usuário: ${pushname}\n@~ Grupo: ${groupName}\n@~ cmd: ${prefix + command}`, [{buttonId: `nd`, buttonText: {displayText: `Obg ${NomeDoBot}`}, type: 1}], info)
buffer = await getBuffer(`https://umethroo.sirv.com/Torcedora-da-sele%C3%A7%C3%A3o-brasileira-nua-mostrando-a-bunda-236x300.jpg?text.0.text=${teks}&text.0.position.x=-64%25&text.0.position.y=-39%25&text.0.size=25&text.0.color=1b1a1a&text.0.font.family=Architects%20Daughter`) 
plaq = ` *Plaquinha feita ✓* `
dens.sendMessage(from, {image: buffer, sendEphemeral: true, thumbnail: null, caption: ' *Plaquinha feita ✓* '}, {quoted: selo})
break

case 'plaq5':
if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}nsfw 1`)
if (args.length < 1) return reply(`${prefix}plaq10 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') 
sendBtext(from, enviar.espere, `@~ usuário: ${pushname}\n@~ Grupo: ${groupName}\n@~ cmd: ${prefix + command}`, [{buttonId: `nd`, buttonText: {displayText: `Obg ${NomeDoBot}`}, type: 1}], info)
buffer = await getBuffer(`https://umethroo.sirv.com/peito1.jpg?text.0.text=${teks}&text.0.position.x=-4%25&text.0.position.y=-6%25&text.0.size=14&text.0.color=000000&text.0.font.family=Shadows%20Into%20Light&text.0.font.weight=700`)
dens.sendMessage(from, {image: buffer, sendEphemeral: true, thumbnail: null, caption: ' *Plaquinha feita ✓* '}, {quoted: selo})
break

case 'plaq6':
if (args.length < 1) return reply(`${prefix}plaq4 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') /
sendBtext(from, enviar.espere, `@~ usuário: ${pushname}\n@~ Grupo: ${groupName}\n@~ cmd: ${prefix + command}`, [{buttonId: `nd`, buttonText: {displayText: `Obg ${NomeDoBot}`}, type: 1}], info)
buffer = await getBuffer(`https://raptibef.sirv.com/images%20(2).jpeg?profile=Zanga%204.0&text.0.text=${teks}`)
dens.sendMessage(from, {image: buffer, sendEphemeral: true, thumbnail: null, caption: ' *Plaquinha feita ✓* '}, {quoted: selo})
break

////////////LOGOS/////////////

case 'logo':
case 'logos':
if(!q) return reply("𝗖𝗔𝗗𝗘̂ 𝗢 𝗧𝗘𝗫𝗧𝗢 𝗡𝗜𝗖𝗞")
sections = [
    {
title: "𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐋𝐎𝐆𝐎𝐒",
rows: [
    {title: "Business", rowId: `${prefix}business ${q}`, description: `${NomeDoBot}`},
    {title: "Bear", rowId: `${prefix}bear ${q}`, description: `${NomeDoBot}`},
    {title: "Summery", rowId: `${prefix}summery ${q}`, description: `${NomeDoBot}`},
    {title: "Candy", rowId: `${prefix}candy ${q}`, description: `${NomeDoBot}`},
    {title: "Batman", rowId: `${prefix}batman ${q}`, description: `${NomeDoBot}`},
    {title: "Christmas", rowId: `${prefix}christmas ${q}`, description: `${NomeDoBot}`},
    {title: "3dchristmas", rowId: `${prefix}3dchristmas ${q}`, description: `${NomeDoBot}`},
    {title: "Sparklechristmas", rowId: `${prefix}sparklechristmas ${q}`, description: `${NomeDoBot}`},
    {title: "Deepsea", rowId: `${prefix}deepsea ${q}`, description: `${NomeDoBot}`},
    {title: "Scifi", rowId: `${prefix}scifi ${q}`, description: `${NomeDoBot}`},
    {title: "Rainbow", rowId: `${prefix}rainbow ${q}`, description: `${NomeDoBot}`},
    {title: "Waterpipe", rowId: `${prefix}waterpipe ${q}`, description: `${NomeDoBot}`},
    {title: "Spooky", rowId: `${prefix}spooky ${q}`, description: `${NomeDoBot}`},
    {title: "Pencil", rowId: `${prefix}pencil ${q}`, description: `${NomeDoBot}`},
    {title: "Circuit", rowId: `${prefix}circuit ${q}`, description: `${NomeDoBot}`},
    {title: "Discovery", rowId: `${prefix}discovery ${q}`, description: `${NomeDoBot}`},
    {title: "Metalic", rowId: `${prefix}metalic ${q}`, description: `${NomeDoBot}`},
    {title: "Fiction", rowId: `${prefix}fiction ${q}`, description: `${NomeDoBot}`},
    {title: "Demon", rowId: `${prefix}demon ${q}`, description: `${NomeDoBot}`},
    {title: "Transformer", rowId: `${prefix}transformer ${q}`, description: `${NomeDoBot}`},
    {title: "Berry", rowId: `${prefix}berry ${q}`, description: `${NomeDoBot}`},
    {title: "Thunder", rowId: `${prefix}thunder ${q}`, description: `${NomeDoBot}`},
    {title: "Magma", rowId: `${prefix}magma ${q}`, description: `${NomeDoBot}`},
    {title: "3dstone", rowId: `${prefix}3dstone ${q}`, description: `${NomeDoBot}`},
    {title: "Neonlight", rowId: `${prefix}neonlight ${q}`, description: `${NomeDoBot}`},
    {title: "Glitch", rowId: `${prefix}glitch ${q}`, description: `${NomeDoBot}`},
    {title: "Harrypotter", rowId: `${prefix}harrypotter ${q}`, description: `${NomeDoBot}`},
    {title: "Brokenglass", rowId: `${prefix}brokenglass ${q}`, description: `${NomeDoBot}`},
    {title: "Papercut", rowId: `${prefix}papercut ${q}`, description: `${NomeDoBot}`},
    {title: "Watercolor", rowId: `${prefix}watercolor ${q}`, description: `${NomeDoBot}`},
    {title: "Multicolor", rowId: `${prefix}multicolor ${q}`, description: `${NomeDoBot}`},
    {title: "Neondevil", rowId: `${prefix}neondevil ${q}`, description: `${NomeDoBot}`},
    {title: "Underwater", rowId: `${prefix}underwater ${q}`, description: `${NomeDoBot}`},
    {title: "Graffitibike", rowId: `${prefix}graffitibike ${q}`, description: `${NomeDoBot}`},
    {title: "Snow", rowId: `${prefix}snow ${q}`, description: `${NomeDoBot}`},
    {title: "Cloud", rowId: `${prefix}cloud ${q}`, description: `${NomeDoBot}`},
    {title: "Honey", rowId: `${prefix}honey ${q}`, description: `${NomeDoBot}`},
    {title: "Ice", rowId: `${prefix}ice ${q}`, description: `${NomeDoBot}`},
    {title: "Fruitjuice", rowId: `${prefix}fruitjuice ${q}`, description: `${NomeDoBot}`},
    {title: "Biscuit", rowId: `${prefix}biscuit ${q}`, description: `${NomeDoBot}`},
    {title: "Wood", rowId: `${prefix}wood ${q}`, description: `${NomeDoBot}`},
    {title: "Chocolate", rowId: `${prefix}chocolate ${q}`, description: `${NomeDoBot}`},
    {title: "Strawberry", rowId: `${prefix}strawberry ${q}`, description: `${NomeDoBot}`},
    {title: "Matrix", rowId: `${prefix}matrix ${q}`, description: `${NomeDoBot}`},
    {title: "Blood", rowId: `${prefix}blood ${q}`, description: `${NomeDoBot}`},
    {title: "Dropwater", rowId: `${prefix}dropwater ${q}`, description: `${NomeDoBot}`},
    {title: "Toxic", rowId: `${prefix}toxic ${q}`, description: `${NomeDoBot}`},
    {title: "Lava", rowId: `${prefix}lava ${q}`, description: `${NomeDoBot}`},
    {title: "Rock", rowId: `${prefix}rock ${q}`, description: `${NomeDoBot}`},
    {title: "Bloodglas", rowId: `${prefix}bloodglas ${q}`, description: `${NomeDoBot}`},
    {title: "Hallowen", rowId: `${prefix}hallowen ${q}`, description: `${NomeDoBot}`},
    {title: "Darkgold", rowId: `${prefix}darkgold ${q}`, description: `${NomeDoBot}`},
    {title: "Joker", rowId: `${prefix}joker ${q}`, description: `${NomeDoBot}`},
    {title: "Wicker", rowId: `${prefix}wicker ${q}`, description: `${NomeDoBot}`},
    {title: "Firework", rowId: `${prefix}firework ${q}`, description: `${NomeDoBot}`},
    {title: "Skeleton", rowId: `${prefix}skeleton ${q}`, description: `${NomeDoBot}`},
    {title: "Blackpink", rowId: `${prefix}blackpink ${q}`, description: `${NomeDoBot}`},
    {title: "Sand", rowId: `${prefix}sand ${q}`, description: `${NomeDoBot}`},
    {title: "Glue", rowId: `${prefix}glue ${q}`, description: `${NomeDoBot}`},
    {title: "1917", rowId: `${prefix}1917 ${q}`, description: `${NomeDoBot}`},
    {title: "Leaves", rowId: `${prefix}leaves ${q}`, description: `${NomeDoBot}`},
]
    },
 {
  title: "Extras",
  rows: [
{title: "Dono", rowId: `${prefix}dono ${q}`, description: "◈ ━━━━━━≪ ⸙ ≫━━━━━━ ◈"},
{title: "Ping", rowId: `${prefix}ping ${q}`, description: "◈ ━━━━━━≪ ⸙ ≫━━━━━━ ◈"},
]
 }
]
listMessage2 = {
  text: `${NomeDoBot}`,
  footer: `Olá ${pushname}, Essa é minha lista de logos2. Esses são de apenas para uma palavra, ou seja, ${prefix}batman Saikyo\n\nDono: ${NickDono}\nDono: wa.me/+${setting.numerodono}`,
  title: "𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐋𝐎𝐆𝐎𝐒",
  buttonText: "𝐶𝐿𝐼𝑄𝑈𝐸 𝐴𝑄𝑈𝐼",
  sections
}
sendMsg = await dens.sendMessage(from, listMessage2, {quoted: selo})
break

case 'candy':
case 'batman':
case 'christmas': 
case '3dchristmas': 
case 'sparklechristmas':
case 'deepsea': 
case 'scifi': 
case 'rainbow': 
case 'waterpipe': 
case 'spooky': 
case 'pencil': 
case 'circuit': 
case 'discovery': 
case 'metalic': 
case 'fiction': 
case 'demon': 
case 'transformer': 
case 'berry': 
case 'thunder': 
case 'magma': 
case '3dstone': 
case 'neonlight': 
case 'glitch': 
case 'harrypotter': 
case 'brokenglass': 
case 'papercut': 
case 'watercolor': 
case 'multicolor': 
case 'neondevil': 
case 'underwater': 
case 'graffitibike':
case 'snow': 
case 'cloud': 
case 'honey': 
case 'ice': 
case 'fruitjuice': 
case 'biscuit': 
case 'wood': 
case 'chocolate': 
case 'strawberry': 
case 'matrix': 
case 'blood': 
case 'dropwater': 
case 'toxic': 
case 'lava': 
case 'rock': 
case 'bloodglas': 
case 'hallowen': 
case 'darkgold': 
case 'joker': 
case 'wicker':
case 'firework': 
case 'skeleton': 
case 'blackpink': 
case 'sand': 
case 'glue': 
case '1917': 
case 'business':
case 'bear':
case 'sand':
case 'summery':
case 'leaves': {
if (!q) return reply(`Exemplo: ${prefix + command} ${NomeDoBot}`) 
reply("Processando dados...") 
let link
if (/summery/.test(command)) link = 'https://textpro.me/create-a-summery-sand-writing-text-effect-988.html'
if (/sand/.test(command)) link = 'https://textpro.me/sand-writing-text-effect-online-990.html'
if (/bear/.test(command)) link = 'https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html'
if (/business/.test(command)) link = 'https://textpro.me/3d-business-sign-text-effect-1078.html'
if (/batman/.test(command)) link = 'https://textpro.me/make-a-batman-logo-online-free-1066.html'
if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
let anu = await maker.textpro(link, q)
let buttonMessage = {
image: { url: anu },
caption: `By ${NomeDoBot} Para minha querida`,
footer: ``,
headerType: 4,
contextInfo:{externalAdReply:{
title: ``,
body: `${NomeDoBot}`,
showAdAttribution: true,
thumbnail: fs.readFileSync("./logos/logo2.jpg"),
mediaType:2,
sourceUrl: `https://chat.whatsapp.com/E6tKxi8XP3F5wL7EfEhY8T`,
mediaUrl: `https://chat.whatsapp.com/E6tKxi8XP3F5wL7EfEhY8T`
}}
}
dens.sendMessage(from, buttonMessage, { quoted: selo })
}
break

//======(SORTEIO-VOTAR-CASES)=======\\

case 'enquete':
if (!isGroup) return reply(enviar.msg.grupo)
var texto = args.join(' ')
if (!texto || !texto.split('/')[1]) return reply(`Use assim: ${prefix + command} sexo hj?/Sim/Não/Talvez`)
if (texto.split('/').length > 13) return reply('Use no máximo 12 opções')
var opções = []
for (var i = 1; i < texto.split('/').length; i++){
opções.push({optionName: texto.split('/')[i]})
}
dens.relayMessage(from, {pollCreationMessage: {name: texto.split('/')[0], options: opções,  selectableOptionsCount: 0}}, {quoted: info})
break


case 'delvote':
case 'delvoto':  
if(!info.key.remoteJid) return
delVote(from)
reply('votação deletada com sucesso')
break

case 'votar':
case 'votacao': 
case 'votação': 
if(!isGroup) return reply(enviar.msg.grupo)
if(!budy.includes("/")) return reply(`Cade a /, exemplo ${prefix}votação @marca/Ele é total gay/ 1`)
if(!q) return reply('*Votação*\n\n'+ prefix+ 'votar @tag marcar / pergunta  / 1 (1 = 1 Minuto)')
if (info.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || info.message.extendedTextMessage.contextInfo == null) {
let id = info.message.extendedTextMessage.contextInfo.mentionedJid[0]
split = args.join(' ').replace('@', '').split('/')
if(!Number(split[2])) return reply('cade os minutos eim?\n\n1 = 1 Minuto')
await mentions('Vote ' +'@'+ id.split('@')[0]+' para' +'\n\n' + `voto = ✅\ndevoto = ❌\n\npergunta: ${split[1]}`,[id],true)
addVote(from,split[1],split[0],split[2],reply)
}
break

case 'sorteio':
if(!isGroupAdmins) return reply('Só ADM pode utilizar este comando.')
try{
if(!isGroup) return reply(enviar.msg.grupo)
if(!q) return reply(`Coloque algo, após o comando sorteio, por exemplo, ${prefix}sorteio de 100 R$`)
srtimgk = await getBuffer(`https://telegra.ph/file/d68bb6a23eeb1c99c9d2e.jpg`)
d = []
teks = `Parabéns humano, você ganhou foi sorteado: ${q}\n\n`
for(i = 0; i < 1; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🔥፝⃟  ➣ @${groupMembers[r].id.split('@')[0]}\n`
d.push(groupMembers[r].id)
}
dens.sendMessage(from, {image: srtimgk, caption: teks, mentions: d}, {quoted: info})
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'sorteionmr':
if(!isGroupAdmins) return reply('Só ADM pode utilizar este comando.')
try{
if(!isGroup) return reply(enviar.msg.grupo)
if(!q) return reply(`Coloque algo, após o comando sorteio, por exemplo, ${prefix}sorteio de +55`)
srtimgk = await getBuffer(`https://telegra.ph/file/d68bb6a23eeb1c99c9d2e.jpg`)
d = []
teks = `Parabéns humano, você ganhou foi sorteado: ${q}\n\n`
for(i = 0; i < 1; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🔥፝⃟  ➣ @${groupMembers[r].id.split('@')[0]}\n`
d.push(groupMembers[r].id)
}
dens.sendMessage(from, {image: srtimgk, caption: teks, mentions: d}, {quoted: info})
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

//========(TTPS/ATTP/TTM)==========\\

case 'attp':
if(!q) return reply("𝐂𝐀𝐃𝐄 𝐎 𝐓𝐄𝐗𝐓𝐎?")
sections = [
    {
	title: "𝚝𝚘𝚍𝚘𝚜 𝚘𝚜 𝚊𝚝𝚝𝚙𝚜",
	rows: [
{title: "𝑻𝑻𝑷", rowId: `${prefix}ttp ${q}`, description: "𝙵𝙸𝙶𝚄 𝙲𝙾𝙼 𝙽𝙾𝙼𝙴 𝙿𝙰𝚁𝙰𝙳𝙾"},
{title: "𝑨𝑻𝑻𝑷2", rowId: `${prefix}attp3 ${q}`, description: "𝙵𝙸𝙶𝚄 𝙲𝙾𝙼 𝙾 𝙽𝙾𝙼𝙴 𝙿𝙸𝚂𝙲𝙰𝙽𝙳𝙾", rowId: `${prefix}attp3 ${q}`, description: "𝙵𝙸𝙶𝚄 𝙲𝙾𝙼 𝙾 𝙽𝙾𝙼𝙴 𝙿𝙸𝚂𝙲𝙰𝙽𝙳𝙾"},
{title: "𝑨𝑻𝑻𝑷3", rowId: `${prefix}attp4 ${q}`, description: "𝙵𝙸𝙶𝚄 𝙲𝙾𝙼 𝙾 𝙽𝙾𝙼𝙴 𝙿𝙸𝚂𝙲𝙰𝙽𝙳𝙾"},
{title: "𝑨𝑻𝑻𝑷4", rowId: `${prefix}attp5 ${q}`, description: "𝙵𝙸𝙶𝚄 𝙲𝙾𝙼 𝙾 𝙽𝙾𝙼𝙴 𝙿𝙸𝚂𝙲𝙰𝙽𝙳𝙾"},
{title: "𝑨𝑻𝑻𝑷5", rowId: `${prefix}attp6 ${q}`, description: "𝙵𝙸𝙶𝚄 𝙲𝙾𝙼 𝙾 𝙽𝙾𝙼𝙴 𝙿𝙸𝚂𝙲𝙰𝙽𝙳𝙾"},
 ]
    },
{
 title: "Extras",
 rows: [
{title: "𝑳𝑶𝑮𝑶𝑺", rowId: `${prefix}logos ${q}`, description: `𝙰𝚂 𝙻𝙾𝙶𝙾 𝚅𝙴𝙼 𝙲𝙾𝙼𝙾 𝚅𝙲 𝙴𝚂𝙲𝚁𝙴𝚅𝙴𝚄 𝙰 𝙲𝙸𝙼𝙰 ${q}`},	
{title: "𝑳𝑶𝑮𝑶𝑺 2", rowId: `${prefix}logos2 ${q}/.`, description: "𝙻𝙾𝙶𝙾𝚂 2, 𝙿𝚁𝙴𝙲𝙸𝚂𝙰 𝙳𝙴 𝙳𝙾𝙸𝚂 𝙽𝙾𝙼𝙴. 𝙴𝚇: 𝚂𝙰𝙳/𝚂𝙰𝙳..."},
 ]
    }
]
listMessage2 = {
  text: `★᭄ꦿ᭄ꦿ${NomeDoBot}`,
  footer: `Olá ${pushname}, aqui está minha lista de attps atualizada.`,
  title: "𝚕𝚒𝚜𝚝𝚊-𝚊𝚝𝚝𝚙𝚜",
  buttonText: "𝐶𝐿𝐼𝑄𝑈𝐸 𝐴𝑄𝑈𝐼",
  sections
}
sendMsg = await dens.sendMessage(from, listMessage2, {quoted: selo})
break

case 'ttp':
try {
sendBtext(from, enviar.espere, `@~ usuário: ${pushname}\n@~ Grupo: ${groupName}\n@~ cmd: ${prefix + command}`, [{buttonId: `nd`, buttonText: {displayText: `Obg ${NomeDoBot}`}, type: 1}], info)
string = args.join(' ') || 'Texto indefinido'
post = `http://aleatoryapi.herokuapp.com/api/ttp?texto=${string}&apikey=${keyale}`
sendStickerFromUrl(from, post, {quoted: info})
} catch {
reply('ERROR!!')
}
break

case 'attp2':		
case 'attp3': 
case 'attp4':
case 'attp5': 
case 'attp6':  
try {
if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}attp Sad`)
sendBtext(from, enviar.espere, `@~ usuário: ${pushname}\n@~ Grupo: ${groupName}\n@~ cmd: ${prefix + command}`, [{buttonId: `nd`, buttonText: {displayText: `Obg ${NomeDoBot}`}, type: 1}], info)
url = await getBuffer(`http://brizas-api.herokuapp.com/ttp/${command}?apikey=brizaloka&text=${encodeURI(q)}`)
await dens.sendMessage(from, {sticker: url}, {quoted: info})
} catch {
reply('ERROR')
}
break	

//==========[ATIVADORES==============\\

case 'nsf':
case 'modonsfw':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (args.length < 1) return reply('Hmmmm')
if (args[0]=== 'on') {
if (isNsfw) return reply('O modo nsfw já está ativo')
nsfw.push(from)
fs.writeFileSync('./datab/grupos/nsfw.json', JSON.stringify(nsfw))
reply(`\`\`\`✓Ativado com sucesso o modo nsfw +18 no grupo\`\`\` *${groupMetadata.subject}*`)
} else if (args[0] === 'off') {
if (!isNsfw) return reply('O modo nsfw já está Desativado')  
nsfw.splice(from, 1)
fs.writeFileSync('./datab/grupos/nsfw.json', JSON.stringify(nsfw))
reply(`\`\`\`✓Modo Nsfw +18 desativado com sucesso no grupo\`\`\` *${groupMetadata.subject}*`)
} else {
reply('ON para ativar, OFF para desligar')
}
break 

case 'antispa':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args[0] === 'on') {
Banspam.push(from)
fs.writeFileSync('./datab/grupos/antispam.json', JSON.stringify(Banspam))
if (Banspam.includes(from)) return reply('anti-spam ativado, caso alguém flode msg, será removido imediatamente')
reply('ativo com sucesso')
} else if (args[0] === 'off') {
if (!Banspam.includes(from)) return reply('anti-spam desativado')
reply('anti-spam desativado')
Banspam.splice(from, 1)
fs.writeFileSync('./datab/grupos/antispam.json', JSON.stringify(Banspam))
} else {
reply('ON ou OFF')
}
break

case 'antilin':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('ON pra ligar / OFF pra desligar')
if(args[0] === 'on') {
if(isAntiLink) return reply('Ja esta ativo')
antilink.push(from)
fs.writeFileSync('./datab/ants/antilink.json', JSON.stringify(antilink))
reply('🌀 Ativou com sucesso o recurso de antilink neste grupo 📝')
} else if (args[0] === 'off') {
if(!isAntiLink) return reply('Ja esta Desativado')
pesquisar = from
processo = antilink.indexOf(pesquisar)
while(processo >= 0){
antilink.splice(processo, 1)
processo = antilink.indexOf(pesquisar)
}
fs.writeFileSync('./datab/ants/antilink.json', JSON.stringify(antilink))
reply('‼️ Desativou com sucesso o recurso de antilink neste grupo✔️')
} else {
reply('ON para ativar, OFF para desativar')
}
break

case 'autosticker':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isAutofigu) return reply('Ja esta ativo')
autofigu.push(from)
fs.writeFileSync('./datab/grupos/autofigu.json', JSON.stringify(autofigu))
reply('🌀 Ativou com sucesso o recurso de auto figurinhas neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isAutofigu) return reply('Ja esta Desativado')
pesquisar = from
processo = autofigu.indexOf(pesquisar)
while(processo >= 0){
autofigu.splice(processo, 1)
processo = autofigu.indexOf(pesquisar)
}
fs.writeFileSync('./datab/grupos/autofigu.json', JSON.stringify(autofigu))
reply('‼️ Desativou com sucesso o recurso de auto figurinhas neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antiligação':  
try {
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (args.length < 1) return reply('Hmmmm')
if (args[0] === 'on') {
if (isAnticall) return reply('Ja esta ativo')
anticall.push('Ativado')
fs.writeFileSync('./datab/usuarios/anticall.json', JSON.stringify(anticall))
reply('Ativou com sucesso o recurso de antiligação no bot✔️')
} else if (args[0] === 'off') {
if (!isAnticall) return reply('Ja esta Desativado')  
fs.writeFileSync('./datab/usuarios/anticall.json', JSON.stringify([]))
reply('Desativou com sucesso o recurso de antiligação no bot✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Falha ao ativar')
}
break

case 'antilinkhar':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('ON pra ligar / OFF pra desligar')
if(args[0] === 'on') {
if(isAntiLinkHard) return reply('Ja esta ativo')
antilinkhard.push(from)
fs.writeFileSync('./datab/ants/antilinkhard.json', JSON.stringify(antilinkhard))
reply('🌀 Ativou com sucesso o recurso de antilink hardcore neste grupo 📝')
} else if (args[0] === 'off') {
if (!isAntiLinkHard) return reply('Ja esta Desativado')
pesquisar = from
processo = antilinkhard.indexOf(pesquisar)
while(processo >= 0){
antilinkhard.splice(processo, 1)
processo = antilinkhard.indexOf(pesquisar)
}
fs.writeFileSync('./datab/ants/antilinkhard.json', JSON.stringify(antilinkhard))
reply('‼️ Desativou com sucesso o recurso de antilink harcore neste grupo✔️')
} else {
reply('ON para ativar, OFF para desativar')
}
break

case 'antiaudi':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('Hmmmm')
if(args[0] === 'on') {
if(isAntiAudio) return reply('Ja esta ativo')
antiaudio.push(from)
fs.writeFileSync('./datab/ants/antiaudio.json', JSON.stringify(antiaudio))
reply('Ativou com sucesso o recurso de anti audio neste grupo✔️')
} else if (args[0] === 'off') {
if(!isAntiAudio) return reply('Ja esta Desativado')  
antiaudio.splice(from, 1)
fs.writeFileSync('./datab/ants/antiaudio.json', JSON.stringify(antiaudio))
reply('Desativou com sucesso o recurso de anti audio neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antims':  
if(!isGroup) return reply(enviar.msg.adm)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar. info.Badmin)
if(args.length < 1) return reply(`Digite ${prefix + command} ON para ativar`)
if(args[0] === 'on') {
if(isAntiFlood) return reply(`🌀 O recurso limite de caracteres até ${limitefl} já está ativo no grupo 🌀`)
antiflood.push(from)
fs.writeFileSync('./datab/usuarios/antiflood.json', JSON.stringify(antiflood))
reply(`✔️ O recurso limite de caracteres ${limitefl} foi ativado nesse grupo📝`)
} else if (args[0] === 'off') {
 if(!isAntiFlood) return reply('✔️ O recurso limite de caracteres não está ativado no grupo 📝')
let position = false
Object.keys(antiflood).forEach((i) => {
if(antiflood[i] === from) {
position = i
}
})
if(position !== false) {
antiflood.splice(position, 1)
fs.writeFileSync('./datab/usuarios/antiflood.json', JSON.stringify(antiflood))
}
reply('O recurso limite de caracteres foi desativado nesse grupo ✔️')
} else {
reply(`Digite ${prefix + command} ON para ativar, OFF para desativar o recurso`)
}
break

case 'antivíde':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('Hmmmm')
if(args[0] === 'on') {
if(isAntiVid) return reply('Ja esta ativo')
antivid.push(from)
fs.writeFileSync('./datab/ants/antivideo.json', JSON.stringify(antivid))
reply('Ativou com sucesso o recurso de anti video neste grupo✔️')
} else if (args[0] === 'off') {
if(!isAntiVid) return reply('Ja esta Desativado')
antivid.splice(from, 1)
fs.writeFileSync('./datab/ants/antivideo.json', JSON.stringify(antivid))
reply('Desativou com sucesso o recurso de anti video neste grupo✔️')
} else {
reply('ON para ativar, OFF para desativar')
}
break

case 'antinot':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (args[0] === 'on') {
if (isAntiNotas) return reply('Já Esta ativo')
antinotas.push(from)
fs.writeFileSync('./datab/ants/antinotas.json', JSON.stringify(antinotas))
reply('Ativou com sucesso o recurso de anti notas neste grupo✔️')
} else if (args[0] === 'off') {
if (!isAntiNotas) return reply('Ja esta Desativado.')
antinotas.splice(from, 1)
fs.writeFileSync('./datab/ants/antinotas.json', JSON.stringify(antinotas))
reply('Desativou com sucesso o recurso de anti notas neste grupo✔️')
} else {
reply('ON para ativar, OFF para desativar')
}
break

case 'antisticke':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (args[0] === 'on') {
if (isAntiSticker) return reply('Já Esta ativo')
antisticker.push(from)
fs.writeFileSync('./datab/ants/antisticker.json', JSON.stringify(antisticker))
reply('Ativou com sucesso o recurso de anti sticker neste grupo✔️')
} else if (args[0] === 'off') {
if (!isAntiSticker) return reply('Ja esta Desativado.')
antisticker.splice(from, 1)
fs.writeFileSync('./datab/ants/antisticker.json', JSON.stringify(antisticker))
reply('Desativou com sucesso o recurso de anti sticker neste grupo✔️')
} else {
reply('ON para ativar, OFF para desativar')
}
break

case 'antiim':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (args[0] === 'on') {
if (isAntiImg) return reply('Já Esta ativo')
antiimg.push(from)
fs.writeFileSync('./datab/ants/antiimg.json', JSON.stringify(antiimg))
reply('Ativou com sucesso o recurso de anti imagem neste grupo✔️')
} else if (args[0] === 'off') {
if (!isAntiImg) return reply('Ja esta Desativado.')
antiimg.splice(from, 1)
fs.writeFileSync('./datab/ants/antiimg.json', JSON.stringify(antiimg))
reply('Desativou com sucesso o recurso de anti imagem neste grupo✔️')
} else {
reply('ON para ativar, OFF para desativar')
}
break

case 'antidocument':
if (!isGroup) return reply(` SOMENTE EM GRUPOS`)
if (!isGroupAdmins) return reply(`PRECISA SER ADMIN`)
if (!isBotGroupAdmins) return reply(` O BOT PRECISA SER ADMIN`)
try {														 
if (args.length < 1) return reply('ON pra ativar, OFF pra desligar')
if (args[0] === 'on') {
antidoc.push(from)
fs.writeFileSync('./datab/ants/antidoc.json', JSON.stringify(antidoc))
reply('Ativou com sucesso o recurso de anti documento neste grupo✔️')
} else if (args[0] === 'off') {
antidoc.splice(from, 1)
fs.writeFileSync('./datab/ants/antidoc.json', JSON.stringify(antidoc))
reply('Desativou com sucesso o recurso de antidocumento neste grupo✔️')
 } else {
reply('ON para ativar, OFF para desativar')
}
} catch {
reply('Deu erro, tente novamente :/')
}
break

case 'antilo':
if (!isGroup) return reply(` SOMENTE EM GRUPOS`)
if (!isGroupAdmins) return reply(`PRECISA SER ADMIN`)
if (!isBotGroupAdmins) return reply(` O BOT PRECISA SER ADMIN`)
try {														 
if (args.length < 1) return reply('ON pra ativar,OFF pra desligar')
if (args[0] === 'on') {
if(Antiloc) return reply('Já está Ativo.')
antiloc.push(from)
fs.writeFileSync('./datab/ants/antiloc.json', JSON.stringify(antiloc))
reply('Ativou com sucesso o recurso de anti loc neste grupo✔️')
} else if (args[0] === 'off') {
if(!Antiloc) return reply('Já está Desativado.')
antiloc.splice(from, 1)
fs.writeFileSync('./datab/ants/antiloc.json', JSON.stringify(antiloc))
reply('Desativou com sucesso o recurso de anti loc neste grupo✔️')
} else {
reply('ON para ativar, OFF para desativar')
}
} catch {
reply('Deu erro, tente novamente :/')
}
break

case 'antifak':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('ON pra ligar / OFF pra desligar')
if (args[0] === 'on') {
if (isAntifake) return reply('Ja esta ativo')
antifake.push(from)
fs.writeFileSync('./datab/ants/antifake.json', JSON.stringify(antifake))
reply('🌀 Ativou com sucesso o recurso de antifake neste grupo 📝')
} else if (args[0] === 'off') {
if (!isAntifake) return reply('Ja esta Desativado')
pesquisar = from
processo = antifake.indexOf(pesquisar)
while(processo >= 0){
antifake.splice(processo, 1)
processo = antifake.indexOf(pesquisar)
}
fs.writeFileSync('./datab/ants/antifake.json', JSON.stringify(antifake))
reply('‼️ Desativou com sucesso o recurso de antifake neste grupo✔️')
} else {
reply('ON para ativar, OFF para desativar')
}
break

case 'anticatalog':  
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('ON pra ligar / OFF pra desligar')
if (args[0] === on) {
if (isAnticatalogo) return reply('Ja esta ativo')
anticatalogo.push(from)
fs.writeFileSync('./datab/ants/anticatalogo.json', JSON.stringify(anticatalogo))
reply('🌀 Ativou com sucesso o recurso de anticatalogo neste grupo 📝')
} else if (args[0] === 'off') {
if (!isAnticatalogo) return reply('Ja esta Desativado')
pesquisar = from
processo = anticatalogo.indexOf(pesquisar)
while(processo >= 0){
anticatalogo.splice(processo, 1)
processo = anticatalogo.indexOf(pesquisar)
}
fs.writeFileSync('./datab/ants/anticatalogo.json', JSON.stringify(anticatalogo))
reply('‼️ Desativou com sucesso o recurso de anticatalogo neste grupo✔️')
} else {
reply('ON para ativar, OFF para desativar')
}
break

case 'antic':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('ON pra ligar / OFF pra desligar')
if (args[0] === 'on') {
if (isAntiCtt) return reply('Ja esta ativo')
antictt.push(from)
fs.writeFileSync('./datab/ants/antictt.json', JSON.stringify(antictt))
reply('🌀 Ativou com sucesso o recurso de anticontato neste grupo 📝')
} else if (args[0] === 'off') {
if (!isAntiCtt) return reply('Ja esta Desativado')
pesquisar = from
processo = antictt.indexOf(pesquisar)
while(processo >= 0){
antictt.splice(processo, 1)
processo = antictt.indexOf(pesquisar)
}
fs.writeFileSync('./datab/ants/antictt.json', JSON.stringify(antictt))
reply('‼️ Desativou com sucesso o recurso de anticontato neste grupo✔️')
} else {
reply('ON para ativar, OFF para desativar')
}
break

case 'antip':
if (!SoDono) return reply(`Apenas dono pode ativar/desativar essa função..`)
if (args.length < 1) return reply('ON pra ligar / OFF pra desligar')
if (args[0] === 'on') {
if (isAntiPv) return reply('Ja esta ativo')
antipv.push('Ativado')
fs.writeFileSync('./datab/usuarios/antipv.json', JSON.stringify(antipv))
reply('🌀 Ativou com sucesso o recurso de Anti Privado 📝')
} else if (args[0] === 'off') {
if (!isAntiPv) return reply('Ja esta Desativado')
pesquisar = 'Ativado'
processo = antipv.indexOf(pesquisar)
while(processo >= 0){
antipv.splice(processo, 1)
processo = antipv.indexOf(pesquisar)
}
fs.writeFileSync('./datab/usuarios/antipv.json', JSON.stringify(welkom))
reply('‼️ Desativou com sucesso o recurso De ANTIPV✔️')
} else {
reply('On para ativar, OFF para desativar')
}
break

case 'antipalavra':  
if(!isGroup) return reply(`[❗] SOMENTE EM GRUPOS`)
if(!isGroupAdmins) return reply(`[❗] O PRECISA SER ADMIN`)
if(!isBotGroupAdmins) return reply(`[❗] O BOT PRECISA SER ADMIN`)
if(args.length < 1) return reply(`[❗] ON / OFF, Exemplo ${prefix + command} 1`)
if(args[0] === 'on') {
if(isPalavrao) return reply('*Já esta ativado...*')
palavrao.push(from)
fs.writeFileSync('./datab/grupos/palavrao.json', JSON.stringify(palavrao))
reply(`[❗] anti palavrão ativado`)
} else if(args[0] === 'off') {
if(!isPalavrao) return reply('*Já esta Desativado...*')  
palavrao.splice(from, 1)
fs.writeFileSync('./datab/grupos/palavrao.json', JSON.stringify(palavrao))
reply(`[❗] anti palavrão desativado...`)
} else {
reply(`[❗] ON/ OFF, Exemplo ${prefix + command} OFf`)
}
await limitAdd(sender)
break

case 'welcom':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('ON pra ligar / OFF pra desligar')
if (args[0] === 'on') {
if (isWelkom) return reply('Ja esta ativo')
welkom.push(from)
fs.writeFileSync('./datab/grupos/welkom.json', JSON.stringify(welkom))
reply('🌀 Ativou com sucesso o recurso de bem vindo neste grupo 📝')
} else if (args[0] === 'off') {
if (!isWelkom) return reply('Ja esta Desativado')
pesquisar = from
processo = welkom.indexOf(pesquisar)
while(processo >= 0){
welkom.splice(processo, 1)
processo = welkom.indexOf(pesquisar)
}
fs.writeFileSync('./datab/grupos/welkom.json', JSON.stringify(welkom))
reply('‼️ Desativou com sucesso o recurso de bemvindo neste grupo✔️')
} else {
reply('ON para ativar, OFF para desativar')
}
break

///// LISTA ATIVADORES

case 'autofigu': 
 sections = [
    {
	title: `${NomeDoBot}`,
	rows: [
	    {title: "✅ Ativar Autofigu ✅", rowId: `${prefix}autosticker 1`},
	    {title: "❌ Desativar Autofigu ❌", rowId: `${prefix}autosticker 0`},
	]
    },
]
  listMessage2 = {
  text: 'Você quer ativar/desativar no autofigu',
  footer: 'Selecione uma das opções e aperte em Enviar',
  title: `Olá ${pushname}`,
  buttonText: "Escolha aqui",
  sections
}
sendMsg = await dens.sendMessage(from, listMessage2, {quoted: selo})
break

case 'antilink': 
 sections = [
    {
	title: `${NomeDoBot}`,
	rows: [
	    {title: "✅ Ativar Antilink✅", rowId: `${prefix}antilin on`},
	    {title: "❌ Desativar Antilink ❌", rowId: `${prefix}antilin off`},
	]
    },
]
  listMessage2 = {
  text: 'Você quer ativar/desativar o antilink?',
  footer: 'Selecione uma das opções e aperte em Enviar',
  title: `Olá ${pushname}`,
  buttonText: "Escolha aqui",
  sections
}
sendMsg = await dens.sendMessage(from, listMessage2, {quoted: selo})
break

case 'welcome': 
 sections = [
    {
	title: `${NomeDoBot}`,
	rows: [
	    {title: "✅ Ativar bem vindo ✅", rowId: `${prefix}welcom on`},
	    {title: "❌ Desativar bem vindo ❌", rowId: `${prefix}welcom off`},
	]
    },
]
  listMessage2 = {
  text: 'Você quer ativar/desativar o bem vindo?',
  footer: 'Selecione uma das opções e aperte em Enviar',
  title: `Olá ${pushname}`,
  buttonText: "Escolha aqui",
  sections
}
sendMsg = await dens.sendMessage(from, listMessage2, {quoted: selo})
break

case 'antipalavras': 
 sections = [
    {
	title: `${NomeDoBot}`,
	rows: [
	    {title: "✅ Ativar antipalavras ✅", rowId: `${prefix}antipalavra on`},
	    {title: "❌ Desativar antipalavras ❌", rowId: `${prefix}antipalavra off`},
	]
    },
]
  listMessage2 = {
  text: 'Você quer ativar/desativar o antipalavras',
  footer: 'Selecione uma das opções e aperte em Enviar',
  title: `Olá ${pushname}`,
  buttonText: "Escolha aqui",
  sections
}
sendMsg = await dens.sendMessage(from, listMessage2, {quoted: selo})
break

case 'antipv': 
 sections = [
    {
	title: `${NomeDoBot}`,
	rows: [
	    {title: "✅ Ativar antipv ✅", rowId: `${prefix}antip on`},
	    {title: "❌ Desativar antipv ❌", rowId: `${prefix}antip off`},
	]
    },
]
  listMessage2 = {
  text: 'Você quer ativar/desativar o antipv?',
  footer: 'Selecione uma das opções e aperte em Enviar',
  title: `Olá ${pushname}`,
  buttonText: "Escolha aqui",
  sections
}
sendMsg = await dens.sendMessage(from, listMessage2, {quoted: selo})
break

case 'antictt': 
 sections = [
    {
	title: `${NomeDoBot}`,
	rows: [
	    {title: "✅ Ativar antictt ✅", rowId: `${prefix}antic on`},
	    {title: "❌ Desativar antictt ❌", rowId: `${prefix}antic off`},
	]
    },
]
  listMessage2 = {
  text: 'Você quer ativar/desativar o antictt',
  footer: 'Selecione uma das opções e aperte em Enviar',
  title: `Olá ${pushname}`,
  buttonText: "Escolha aqui",
  sections
}
sendMsg = await dens.sendMessage(from, listMessage2, {quoted: selo})
break

case 'anticatalogo': 
 sections = [
    {
	title: `${NomeDoBot}`,
	rows: [
	    {title: "✅ Ativar anticatalogo ✅", rowId: `${prefix}anticatalog on`},
	    {title: "❌ Desativar anticatalogo ❌", rowId: `${prefix}anticatalog off`},
	]
    },
]
  listMessage2 = {
  text: 'Você quer ativar/desativar o anticatalogo',
  footer: 'Selecione uma das opções e aperte em Enviar',
  title: `Olá ${pushname}`,
  buttonText: "Escolha aqui",
  sections
}
sendMsg = await dens.sendMessage(from, listMessage2, {quoted: selo})
break

case 'antifake': 
 sections = [
    {
	title: `${NomeDoBot}`,
	rows: [
	    {title: "✅ Ativar antifake ✅", rowId: `${prefix}antifak on`},
	    {title: "❌ Desativar antifake ❌", rowId: `${prefix}antifak off`},
	]
    },
]
  listMessage2 = {
  text: 'Você quer ativar/desativar o antifake',
  footer: 'Selecione uma das opções e aperte em Enviar',
  title: `Olá ${pushname}`,
  buttonText: "Escolha aqui",
  sections
}
sendMsg = await dens.sendMessage(from, listMessage2, {quoted: selo})
break

case 'antiloc': 
 sections = [
    {
	title: `${NomeDoBot}`,
	rows: [
	    {title: "✅ Ativar antiloc ✅", rowId: `${prefix}antilo on`},
	    {title: "❌ Desativar antiloc ❌", rowId: `${prefix}antilo off`},
	]
    },
]
  listMessage2 = {
  text: 'Você quer ativar/desativar o antiloc',
  footer: 'Selecione uma das opções e aperte em Enviar',
  title: `Olá ${pushname}`,
  buttonText: "Escolha aqui",
  sections
}
sendMsg = await dens.sendMessage(from, listMessage2, {quoted: selo})
break

case 'antidocumento': 
 sections = [
    {
	title: `${NomeDoBot}`,
	rows: [
	    {title: "✅ Ativar antidocumento ✅", rowId: `${prefix}antidocument on`},
	    {title: "❌ Desativar antidocumento ❌", rowId: `${prefix}antidocument off`},
	]
    },
]
  listMessage2 = {
  text: 'Você quer ativar/desativar o antidocumento',
  footer: 'Selecione uma das opções e aperte em Enviar',
  title: `Olá ${pushname}`,
  buttonText: "Escolha aqui",
  sections
}
sendMsg = await dens.sendMessage(from, listMessage2, {quoted: selo})
break

case 'antiimg': 
 sections = [
    {
	title: `${NomeDoBot}`,
	rows: [
	    {title: "✅ Ativar antiimg ✅", rowId: `${prefix}antiim on`},
	    {title: "❌ Desativar antiimg ❌", rowId: `${prefix}antiim off`},
	]
    },
]
  listMessage2 = {
  text: 'Você quer ativar/desativar o antiimg',
  footer: 'Selecione uma das opções e aperte em Enviar',
  title: `Olá ${pushname}`,
  buttonText: "Escolha aqui",
  sections
}
sendMsg = await dens.sendMessage(from, listMessage2, {quoted: selo})
break

case 'antisticker': 
 sections = [
    {
	title: `${NomeDoBot}`,
	rows: [
	    {title: "✅ Ativar antisticker ✅", rowId: `${prefix}antisticke on`},
	    {title: "❌ Desativar antisticker ❌", rowId: `${prefix}antisticke off`},
	]
    },
]
  listMessage2 = {
  text: 'Você quer ativar/desativar o antisticker',
  footer: 'Selecione uma das opções e aperte em Enviar',
  title: `Olá ${pushname}`,
  buttonText: "Escolha aqui",
  sections
}
sendMsg = await dens.sendMessage(from, listMessage2, {quoted: selo})
break

case 'antinota': 
 sections = [
    {
	title: `${NomeDoBot}`,
	rows: [
	    {title: "✅ Ativar antinota ✅", rowId: `${prefix}antinot on`},
	    {title: "❌ Desativar antinota ❌", rowId: `${prefix}antinot off`},
	]
    },
]
  listMessage2 = {
  text: 'Você quer ativar/desativar o antiimg',
  footer: 'Selecione uma das opções e aperte em Enviar',
  title: `Olá ${pushname}`,
  buttonText: "Escolha aqui",
  sections
}
sendMsg = await dens.sendMessage(from, listMessage2, {quoted: selo})
break

case 'antivídeo': 
 sections = [
    {
	title: `${NomeDoBot}`,
	rows: [
	    {title: "✅ Ativar antivídeo ✅", rowId: `${prefix}antivíde on`},
	    {title: "❌ Desativar antivídeo ❌", rowId: `${prefix}antivíde off`},
	]
    },
]
  listMessage2 = {
  text: 'Você quer ativar/desativar o antivídeo',
  footer: 'Selecione uma das opções e aperte em Enviar',
  title: `Olá ${pushname}`,
  buttonText: "Escolha aqui",
  sections
}
sendMsg = await dens.sendMessage(from, listMessage2, {quoted: selo})
break

case 'antimsg': 
 sections = [
    {
	title: `${NomeDoBot}`,
	rows: [
	    {title: "✅ Ativar antimsg ✅", rowId: `${prefix}antims on`},
	    {title: "❌ Desativar antimsg ❌", rowId: `${prefix}antims off`},
	]
    },
]
  listMessage2 = {
  text: 'Você quer ativar/desativar o antimsg',
  footer: 'Selecione uma das opções e aperte em Enviar',
  title: `Olá ${pushname}`,
  buttonText: "Escolha aqui",
  sections
}
sendMsg = await dens.sendMessage(from, listMessage2, {quoted: selo})
break

case 'antiaudio': 
 sections = [
    {
	title: `${NomeDoBot}`,
	rows: [
	    {title: "✅ Ativar antiaudio ✅", rowId: `${prefix}antiaudi on`},
	    {title: "❌ Desativar antiaudio ❌", rowId: `${prefix}antiaudi off`},
	]
    },
]
  listMessage2 = {
  text: 'Você quer ativar/desativar o antiaudio',
  footer: 'Selecione uma das opções e aperte em Enviar',
  title: `Olá ${pushname}`,
  buttonText: "Escolha aqui",
  sections
}
sendMsg = await dens.sendMessage(from, listMessage2, {quoted: selo})
break

case 'antilinkhard': 
 sections = [
    {
	title: `${NomeDoBot}`,
	rows: [
	    {title: "✅ Ativar antilinkhard ✅", rowId: `${prefix}antilinkhar on`},
	    {title: "❌ Desativar antilinkhard ❌", rowId: `${prefix}antilinkhar off`},
	]
    },
]
  listMessage2 = {
  text: 'Você quer ativar/desativar o antilinkhard',
  footer: 'Selecione uma das opções e aperte em Enviar',
  title: `Olá ${pushname}`,
  buttonText: "Escolha aqui",
  sections
}
sendMsg = await dens.sendMessage(from, listMessage2, {quoted: selo})
break

case 'antiligação': 
 sections = [
    {
	title: `${NomeDoBot}`,
	rows: [
	    {title: "✅ Ativar antiligação ✅", rowId: `${prefix}antiligaçã on`},
	    {title: "❌ Desativar antiligação ❌", rowId: `${prefix}antiligaçã off`},
	]
    },
]
  listMessage2 = {
  text: 'Você quer ativar/desativar o antiligação',
  footer: 'Selecione uma das opções e aperte em Enviar',
  title: `Olá ${pushname}`,
  buttonText: "Escolha aqui",
  sections
}
sendMsg = await dens.sendMessage(from, listMessage2, {quoted: selo})
break

case 'antispam': 
 sections = [
    {
	title: `${NomeDoBot}`,
	rows: [
	    {title: "✅ Ativar antispam ✅", rowId: `${prefix}antispa on`},
	    {title: "❌ Desativar antispam ❌", rowId: `${prefix}antispa off`},
	]
    },
]
  listMessage2 = {
  text: 'Você quer ativar/desativar o antispam',
  footer: 'Selecione uma das opções e aperte em Enviar',
  title: `Olá ${pushname}`,
  buttonText: "Escolha aqui",
  sections
}
sendMsg = await dens.sendMessage(from, listMessage2, {quoted: selo})
break

case 'nsfw': 
 sections = [
    {
	title: `${NomeDoBot}`,
	rows: [
	    {title: "✅ Ativar nsfw ✅", rowId: `${prefix}nsf on`},
	    {title: "❌ Desativar nsfw ❌", rowId: `${prefix}nsf off`},
	]
    },
]
  listMessage2 = {
  text: 'Você quer ativar/desativar o nsfw',
  footer: 'Selecione uma das opções e aperte em Enviar',
  title: `Olá ${pushname}`,
  buttonText: "Escolha aqui",
  sections
}
sendMsg = await dens.sendMessage(from, listMessage2, {quoted: selo})
break

//==========JOGOS/COMPLETO==========\\

case 'gay':
wew = Math.floor(Math.random() * 121)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null){
txt = `╭━━━━⊱•✠•⊰━━━━
╿║🫂: ${pushname}
╿║ sua porcentagem de gay é:
╿║ 🏳️‍🌈${wew}%🏳️‍🌈
╿║ ©${NomeDoBot}
║╰━━━━⊱•✠•⊰━━━━
╰═━═━━═━═━═━═━┘`
} else {
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
txt = `╭━━━━⊱•✠•⊰━━━━
╿║🫂: @${mentioned[0].split('@')[0]}
╿║ sua porcentagem de gay é:
╿║ 🏳️‍🌈${wew}%🏳️‍🌈
╿║ ©${NomeDoBot}
║╰━━━━⊱•✠•⊰━━━━
╰═━═━━═━═━═━═━┘`
}
ravideo = [
  `https://telegra.ph/file/0be902ff4066419a6319a.mp4`,
  `https://telegra.ph/file/d0aff5622eeee9fb2937c.mp4`,
  `https://telegra.ph/file/c275cc1c5d6e3cf6285f0.mp4`,
  `https://telegra.ph/file/6728fdf0ebabda60004aa.mp4`,
  `https://telegra.ph/file/5e28566a5ec5c8c768290.mp4`,
  `https://telegra.ph/file/654ed89b663f29539252b.mp4`,
  `https://telegra.ph/file/73610a8921f8a880f5e85.mp4`,
  `https://telegra.ph/file/c166578590f3dbd0c1585.mp4`]
  ravideo = ravideo[Math.floor(Math.random() * ravideo.length)]
sendBvid(from, ravideo, txt, '', [{index: 2, quickReplyButton: {displayText: `Ok ${NomeDoBot}`, id: ``}}], selo)
break

case 'corno':
wew = Math.floor(Math.random() * 121)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null){
txt = `╭━━━━⊱•✠•⊰━━━━
╿║🫂: ${pushname}
╿║ o quanto vc e corno:
╿║ você é ${wew}% corno🐃
╿║ ©${NomeDoBot}
║╰━━━━⊱•✠•⊰━━━━
╰═━═━━═━═━═━═━┘`
} else {
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
txt = `╭━━━━⊱•✠•⊰━━━━
╿║🫂: @${mentioned[0].split('@')[0]}
╿║ o quanto vc e corno:
╿║ você é ${wew}% corno🐃
╿║ ©${NomeDoBot}
║╰━━━━⊱•✠•⊰━━━━
╰═━═━━═━═━═━═━┘`
}
ravideo = [
  `https://telegra.ph/file/f8bcf4e3e93ba1213a163.mp4`,
  `https://telegra.ph/file/c3e8de637688e5bf52ed4.mp4`,
  `https://telegra.ph/file/0aea98103b4464f10eb8f.mp4`,
  `https://telegra.ph/file/ad250057ac7d3620f5b6c.mp4`,
  `https://telegra.ph/file/04ddd318f02626456ec9e.mp4`,
  `https://telegra.ph/file/731dc3ecc266db8a2e29f.mp4`,
  `https://telegra.ph/file/9dc5c4e98682417ca14ba.mp4`,
  `https://telegra.ph/file/54eca9b17d0b5e49f1cd3.mp4`]
  ravideo = ravideo[Math.floor(Math.random() * ravideo.length)]
sendBvid(from, ravideo, txt, '', [{index: 2, quickReplyButton: {displayText: `Ok ${NomeDoBot}`, id: ``}}], selo)
break

case 'vesgo':
wew = Math.floor(Math.random() * 121)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null){
txt = `╭━━━━⊱•✠•⊰━━━━
╿║🫂: ${pushname}
╿║ o quanto vc e vesgo?
╿║ você é ${wew}% vesgo👽
╿║ ©${NomeDoBot}
║╰━━━━⊱•✠•⊰━━━━
╰═━═━━═━═━═━═━┘`
} else {
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
txt = `╭━━━━⊱•✠•⊰━━━━
╿║🫂: @${mentioned[0].split('@')[0]}
╿║ o quanto você é vesgo?
╿║ você é ${wew}% vesgo👽
╿║ ©${NomeDoBot}
║╰━━━━⊱•✠•⊰━━━━
╰═━═━━═━═━═━═━┘`
}
ravideo = [
  `https://telegra.ph/file/a2fd40d7bd51e29bd4c5a.mp4`,
  `https://telegra.ph/file/ca45aa12680b5ed377d92.mp4`,
  `https://telegra.ph/file/202d58c9ab87f0abb3ba1.mp4`,
  `https://telegra.ph/file/3de28756a1c71ca98778d.mp4`,
  `https://telegra.ph/file/91cf9ffc2864ca23a7c30.mp4`,
  `https://telegra.ph/file/20e2d354c01ab8da1decd.mp4`,
  `https://telegra.ph/file/198de23fba38b3efb56b3.mp4`,
  `https://telegra.ph/file/961266e9961ec199995d1.mp4`]
  ravideo = ravideo[Math.floor(Math.random() * ravideo.length)]
sendBvid(from, ravideo, txt, '', [{index: 2, quickReplyButton: {displayText: `Ok ${NomeDoBot}`, id: ``}}], selo)
break

case 'bebado':
wew = Math.floor(Math.random() * 121)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null){
txt = `╭━━━━⊱•✠•⊰━━━━
╿║🫂: ${pushname}
╿║ você é:
╿║ 🍻 ${wew}% bebado🍻
╿║ © 2022
║╰━━━━⊱•✠•⊰━━━━
╰═━═━━═━═━═━═━┘`
} else {
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
txt = `╭━━━━⊱•✠•⊰━━━━
╿║🫂: @${mentioned[0].split('@')[0]}
╿║ você é:
╿║ 🍻 ${wew}%👈🏻 bebado 🍻
╿║ © 2022
║╰━━━━⊱•✠•⊰━━━━
╰═━═━━═━═━═━═━┘`
}
ravideo = [
  `https://telegra.ph/file/9fc17183b24c292abb7fe.mp4`,
  `https://telegra.ph/file/96895c70aefeb2318f7c2.mp4`,
  `https://telegra.ph/file/55f3c72c3e0f849f5d3dc.mp4`,
  `https://telegra.ph/file/28ad8ed961a886b0a3a45.mp4`,
  `https://telegra.ph/file/b39236610c21afaac435f.mp4`,
  `https://telegra.ph/file/288aedf544bdcc9d58ebf.mp4`,
  `https://telegra.ph/file/90d2231cc8bac6f548e41.mp4`,
  `https://telegra.ph/file/bdccc226443dbc4869bc1.mp4`]
  ravideo = ravideo[Math.floor(Math.random() * ravideo.length)]
sendBvid(from, ravideo, txt, '', [{index: 2, quickReplyButton: {displayText: `Ok ${NomeDoBot}`, id: ``}}], selo)
break

case 'gado':
wew = Math.floor(Math.random() * 121)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null){
txt = `╭━━━━⊱•✠•⊰━━━━
╿║🫂: ${pushname}
╿║ o quanto vc e gado?
╿║ voce é ${wew}% gado🐂
╿║ ©${NomeDoBot}
║╰━━━━⊱•✠•⊰━━━━
╰═━═━━═━═━═━═━┘`
} else {
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
txt = `╭━━━━⊱•✠•⊰━━━━
╿║🫂: @${mentioned[0].split('@')[0]}
╿║ o quanto vc e gado?
╿║ você é ${wew}% gado🐂
╿║ ©${NomeDoBot}
║╰━━━━⊱•✠•⊰━━━━
╰═━═━━═━═━═━═━┘`
}
ravideo = [
  `https://telegra.ph/file/fe5cec7c667e0be572231.mp4`,
  `https://telegra.ph/file/5e174a23543ac52a7dea0.mp4`,
  `https://telegra.ph/file/e8743077ca1cb1fc12440.mp4`,
  `https://telegra.ph/file/d247842d17414f9faec6e.mp4`,
  `https://telegra.ph/file/9306b759eb26b149399c3.mp4`,
  `https://telegra.ph/file/a7ebe82804db8bb4e807d.mp4`,
  `https://telegra.ph/file/46b412d7e81696634ab98.mp4`,
  `https://telegra.ph/file/460beaddb6dadee623881.mp4`]
  ravideo = ravideo[Math.floor(Math.random() * ravideo.length)]
sendBvid(from, ravideo, txt, '', [{index: 2, quickReplyButton: {displayText: `Ok ${NomeDoBot}`, id: ``}}], selo)
break

case 'gostoso':
wew = Math.floor(Math.random() * 121)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null){
txt = `╭━━━━⊱•✠•⊰━━━━
╿║🫂: ${pushname}
╿║ o quanto vc e gostoso?
╿║ você é ${wew}% gostoso🙈
╿║ ©${NomeDoBot}
║╰━━━━⊱•✠•⊰━━━━
╰═━═━━═━═━═━═━┘`
} else {
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
txt = `╭━━━━⊱•✠•⊰━━━━
╿║🫂: @${mentioned[0].split('@')[0]}
╿║ o quanto vc e gostoso?
╿║ você é ${wew}% gostoso🙈
╿║ ©${NomeDoBot}
║╰━━━━⊱•✠•⊰━━━━
╰═━═━━═━═━═━═━┘`
}
ravideo = [
  `https://telegra.ph/file/c3f763e92027da272848d.mp4`,
  `https://telegra.ph/file/93f8971ed681b611ab439.mp4`,
  `https://telegra.ph/file/83dade84ab7274f358021.mp4`,
  `https://telegra.ph/file/981bba4f6956a620d188a.mp4`,
  `https://telegra.ph/file/9c320fbf23743c5f5b09a.mp4`,
  `https://telegra.ph/file/27d935c8b0669cf276391.mp4`,
  `https://telegra.ph/file/4d358cff63cacad32919a.mp4`,
  `https://telegra.ph/file/7b2a528845cd1124a3ba7.mp4`]
  ravideo = ravideo[Math.floor(Math.random() * ravideo.length)]
sendBvid(from, ravideo, txt, '', [{index: 2, quickReplyButton: {displayText: `Ok ${NomeDoBot}`, id: ``}}], selo)
break

case 'gostosa':
wew = Math.floor(Math.random() * 121)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null){
txt = `╭━━━━⊱•✠•⊰━━━━
╿║🫂: ${pushname}
╿║ o quanto vc e gostosa?
╿║ você  é ${wew}% gostosa🥵
╿║ ©${NomeDoBot}
║╰━━━━⊱•✠•⊰━━━━
╰═━═━━═━═━═━═━┘`
} else {
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
txt = `╭━━━━⊱•✠•⊰━━━━
╿║🫂: @${mentioned[0].split('@')[0]}
╿║ o quanto vc e gostosa?
╿║ você é ${wew}% gostosa🥵
╿║ ©${NomeDoBot}
║╰━━━━⊱•✠•⊰━━━━
╰═━═━━═━═━═━═━┘`
}
ravideo = [
  `https://telegra.ph/file/f655a85a5c8c6a02ad5f7.mp4`,
  `https://telegra.ph/file/016b6159a6d5b8aebe4aa.mp4`,
  `https://telegra.ph/file/5bd5a1911d4bf635acfcc.mp4`,
  `https://telegra.ph/file/fe498e1aefa1edbe1e673.mp4`,
  `https://telegra.ph/file/0dbbc5bcf2174983af217.mp4`,
  `https://telegra.ph/file/18085f64a4a138c145aa2.mp4`,
  `https://telegra.ph/file/a803570bb20c396424fd6.mp4`,
  `https://telegra.ph/file/3d8c62179fe14c9f22f59.mp4`]
  ravideo = ravideo[Math.floor(Math.random() * ravideo.length)]
sendBvid(from, ravideo, txt, '', [{index: 2, quickReplyButton: {displayText: `Ok ${NomeDoBot}`, id: ``}}], selo)
break

case 'shipo': {
teks = args.join(" ")
if(teks.length < 10) return reply('Marque uma pessoa do grupo para encontrar o par dela')
const suamae111 = groupMembers
const suamae211 = groupMembers
const teupai111 = suamae111[Math.floor(Math.random() * suamae111.length)]
const teupai211 = suamae211[Math.floor(Math.random() * suamae211.length)]
var shipted1 = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `100%`]
const shiptedd = shipted1[Math.floor(Math.random() * shipted1.length)]
jet = `*Shipo Vocês Dois*

┌═❪ *Shipada Do ${NomeDoBot}* ❫═┐
│╭♥️➢ ${teks}
│• Com Essa Pessoa
│╰♥️➢ @${teupai111.id.split('@')[0]}
│• Com Uma Porcentagem 
│• De: ${shiptedd} 
└═❪ *Shipada Da ${NomeDoBot}* ❫═┘`
let buttons = [
{buttonId: `nd`, buttonText: {displayText: '⭔ EU SHIPO ⭔'}, type: 1},
{buttonId: `ndnk`, buttonText: {displayText: '⭔ EU NÃO SHIPO ⭔'}, type: 1}
]
let buttonMessage = {
image: { url: `https://telegra.ph/file/0d98ec444105570aca7bd.jpg` },
caption: jet,
footer: ``,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: ``,
body: `${NomeDoBot}`,
showAdAttribution: true,
thumbnail: '',
mediaType:2,
mediaUrl: ``, 
sourceUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`
}}
}
dens.sendMessage(from, buttonMessage, { quoted: selo })
}
break

case 'casal':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
membr = []
const suamae11 = groupMembers
const suamae21 = groupMembers
const teupai11 = suamae11[Math.floor(Math.random() * suamae11.length)]
const teupai21 = suamae21[Math.floor(Math.random() * suamae21.length)]
var shipted1 = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `100%`]
const shipted = shipted1[Math.floor(Math.random() * shipted1.length)]
wew = `https://telegra.ph/file/75ee530e8eff8c7da337d.jpg`
luffyD = moment.tz('America/Sao_Paulo').format('DD/MM/YY');
jetk = `*Novo Casal Do Grupo*\n
┌───  ❪ *Casal Lindo* ❫  ───┐
│♥️ ▸ @${teupai11.id.split('@')[0]}
│♥️ ▸ @${teupai21.id.split('@')[0]}
│• Com Uma Porcentagem 
│• De: ${shipted}
└───  ❪ *Casal Lindo* ❫  ───┘`
membr.push(teupai11.id)
membr.push(teupai21.id)
let buttons = [
{buttonId: `nd`, buttonText: {displayText: '⭔ EU SHIPO ⭔'}, type: 1},
{buttonId: `ndnk`, buttonText: {displayText: '⭔ EU NÃO SHIPO ⭔'}, type: 1}
]
let buttonMessage = {
image: { url: `https://telegra.ph/file/0d98ec444105570aca7bd.jpg` },
caption: jetk,
footer: ``,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: ``,
body: `${NomeDoBot}`,
showAdAttribution: true,
thumbnail: wew,
mediaType:2,
mediaUrl: ``, 
sourceUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`
}}
}
dens.sendMessage(from, buttonMessage, { quoted: selo })
break

case 'feio': {
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
rate = body.slice(6)
reply(' ❰ Pesquisando a sua ficha de feio : '+rate+', aguarde... ❱')
wew = await getBuffer(`https://telegra.ph/file/320ef6ea91621357aaf9a.jpg`)
random = `${Math.floor(Math.random() * 110)}`
feio = random
if (feio < 20 ) {bo = 'É não é feio'} else if (feio == 21 ) {bo = '+/- feio'} else if (feio == 23 ) {bo = '+/- feio'} else if (feio == 24 ) {bo = '+/- feio'} else if (feio == 25 ) {bo = '+/- feio'} else if (feio == 26 ) {bo = '+/- feio'} else if (feio == 27 ) {bo = '+/- feio'} else if (feio == 2 ) {bo = '+/- feio'} else if (feio == 29 ) {bo = '+/- feio'} else if (feio == 30 ) {bo = '+/- feio'} else if (feio == 31 ) {bo = 'Ainda tá na média'} else if (feio == 32 ) {bo = 'Da pra pegar umas(ns) novinha(o) ainda'} else if (feio == 33 ) {bo = 'Da pra pegar umas(ns) novinha(o) ainda'} else if (feio == 34 ) {bo = 'É fein, mas tem baum coração'} else if (feio == 35 ) {bo = 'Tá na média, mas não deixa de ser feii'} else if (feio == 36 ) {bo = 'Bonitin mas é feio com orgulho'} else if (feio == 37 ) {bo = 'Feio e preguiçoso(a), vai se arrumar praga feia'} else if (feio == 3 ) {bo = 'tenho '} else if (feio == 39 ) {bo = 'Feio, mas um banho E se arrumar, deve resolver'} else if (feio == 40 ) {bo = 'FeiN,  mas não existe gente feia, existe gente que não conhece os produtos jequity'} else if (feio == 41 ) {bo = 'você é Feio, mas é legal, continue assim'} else if (feio == 42 ) {bo = 'Nada que uma maquiagem e se arrumar, que não resolva 🥴'} else if (feio == 43 ) {bo = 'Feio que dói de ver, compra uma máscara que melhora'} else if (feio == 44 ) {bo = 'Feio mas nada que um saco na cabeça não resolva né!?'} else if (feio == 45 ) {bo = 'você é feio, mas tem bom gosto'} else if (feio == 46 ) {bo = 'Feio mas tem muitos amigos'} else if (feio == 47 ) {bo = 'Feio mas tem lábia pra pegar várias novinha'} else if (feio == 4 ) {bo = 'Feio e ainda não sabe se vestir, vixi'} else if (feio == 49 ) {bo = 'Feiooo'} else if (feio == 50 ) {bo = 'você é Feio, mas não se encherga 🧐'} else if (feio > 51) {bo = 'você é Feio demais 🙈'} 
feiotxt = '  O quanto você é feio? \n\n 「 '+rate+' 」Você é: ❰ '+random+'% ❱ feio\n\n '+bo+' '
sleep(4000)
let buttonMessage = {
image: wew,
caption: feiotxt,
footer: `${NomeDoBot}`,
headerType: 4,
contextInfo:{externalAdReply:{
title: `instagram`,
body: `© Copyright ${NomeDoBot}`,
showAdAttribution: true,
mediaType:2,
thumbnail: fs.readFileSync('./logos/logo2.jpg'),
sourceUrl: `https://www.instagram.com/maysurf__/`
}}
}
dens.sendMessage(from, buttonMessage, 
{quoted:selo})}
break 

case 'beijo': {
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque alguém que vc quer da um beijo')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Você deu um beijo gostoso na(o) @${mentioned[0].split('@')[0]} 😁👉👈❤` 
wew = await getBuffer(`https://telegra.ph/file/b6938d93b461781a69cab.jpg`)
let buttonMessage = {
image: wew,
caption: susp,
footer: `${NomeDoBot}`,
headerType: 4,
contextInfo:{externalAdReply:{
title: `instagram`,
body: `© Copyright ${NomeDoBot}`,
showAdAttribution: true,
mediaType:2,
thumbnail: fs.readFileSync('./logos/logo2.jpg'),
sourceUrl: `https://www.instagram.com/maysurf__/`
}}
}
dens.sendMessage(from, buttonMessage, 
{quoted:selo})}
break

case 'chute': case 'chutar': { 
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('marque o alvo que você quer dá um chute')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
jry = await getBuffer("https://telegra.ph/file/09e1e145bb5be134bdce4.mp4")
pru = `O ${pushname}, acabou\nDe da um chute @${mentioned[0].split('@')[0]}.`
let buttonMessage = {
video: jry,
caption: pru,
footer: `oi`,
mimetype: 'video/mp4',
headerType: 4,
contextInfo:{externalAdReply:{
title: `instagram`,
body: `© Copyright ${NomeDoBot}`,
showAdAttribution: true,
mediaType:2,
thumbnail: fs.readFileSync('./logos/logo2.jpg'),
sourceUrl:`https://www.instagram.com/maysurf__/`
}}
}
dens.sendMessage(from, buttonMessage, 
{quoted:selo})}
break 

case 'dogolpe': {
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if (args.length < 1) return await dens.sendMessage(from, {text: 'coloca um nome'}, {quoted: info})
pkt = body.slice(9)
wew = await getBuffer("https://telegra.ph/file/69bc44d05f4921a7bac83.jpg")
random = `${Math.floor(Math.random() * 100)}`
jpr = `*GOLPISTA ENCONTRADO👉🏻*\n\n*GOLPISTA* : *${args[0]}*\n*PORCENTAGEM DO GOLPE* : ${random}%😂\n\nEle(a) gosta de ferir sentimentos 😢`
let buttonMessage = {
image: wew,
caption: jpr,
footer: `${NomeDoBot}`,
headerType: 4,
contextInfo:{externalAdReply:{
title: `instagram`,
body: `© Copyright ${NomeDoBot}`,
showAdAttribution: true,
mediaType:2,
thumbnail: fs.readFileSync('./logos/logo2.jpg'),
sourceUrl: `https://www.instagram.com/maysurf__/`
}}
}
dens.sendMessage(from, buttonMessage, 
{quoted:selo})}
break

case 'matar':
case 'mata':  
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('marque o alvo que você quer matar')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Você Acabou de matar o(a) @${mentioned[0].split('@')[0]} 😈👹` 
jrpp = await getBuffer("https://telegra.ph/file/1135a19fceefa7074caf8.mp4")
await dens.sendMessage(from, {video: jrpp, gifPlayback: true, caption: susp}, {quoted: selo})
break 

case 'chance': {
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
var avb = body.slice(7)
if (args.length < 1) return dens.sendMessage(from, {text: `Você precisa digitar da forma correta\nExemplo: ${prefix}chance do luuck ser gay`}, {quoted: info})
wew = await getBuffer("https://telegra.ph/file/a3f96ddb9ddaf353cad46.jpg")
random = `${Math.floor(Math.random() * 100)}`
hasil = `A chance ${body.slice(8)}\n\né de... ${random}%`
let buttonMessage = {
image: wew,
caption: hasil,
footer: `${NomeDoBot}`,
headerType: 4,
contextInfo:{externalAdReply:{
title: `instagram`,
body: `© Copyright ${NomeDoBot}`,
showAdAttribution: true,
mediaType:2,
thumbnail: fs.readFileSync('./logos/logo2.jpg'),
sourceUrl: `https://www.instagram.com/maysurf__/`
}}
}
dens.sendMessage(from, buttonMessage, 
{quoted:selo})}
break

case 'suicidio': {
if(info.key.fromMe) return 
if (!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
wew = await getBuffer("https://telegra.ph/file/59009ca812c6b54bf79ff.jpg")
jbl = `*Sinto muito por essa decisão, ${pushname}.\n Espero que um dia volte para o grupo!* 😭`
let buttonMessage = {
image: wew,
caption: jbl,
footer: `${NomeDoBot}`,
headerType: 4,
contextInfo:{externalAdReply:{
title: `instagram`,
body: `© Copyright ${NomeDoBot}`,
showAdAttribution: true,
mediaType:2,
thumbnail: fs.readFileSync('./logos/logo2.jpg'),
sourceUrl: `https://www.instagram.com/maysurf__/`
}}
}
dens.sendMessage(from, buttonMessage, 
{quoted:selo})}
await sleep(2000)
dens.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(4000)
reply('maior babaca, realmente achou que eu iria sentir falta, kk')
break

case 'nazista':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
rate = body.slice(9)
reply(' ❰ Pesquisando a sua ficha de nazista : '+rate+' aguarde... ❱')
 setTimeout(async() => {
wew = await getBuffer(`${imgnazista}`)
zxzz = 
random = `${Math.floor(Math.random() * 110)}`
await dens.sendMessage(from, {image: wew, caption: 'O quanto você é nazista? \n\n「 '+rate+' 」Você é: ❰ '+random+'% ❱  nazista 卐'}, {quoted: info})
}, 7000)
break 

case 'rankativo':
case 'rankativos':  
if (!isGroup) return reply(enviar.msg.grupo)
if(groupIdscount.indexOf(from) < 0) return reply('O bot não tem ainda dados sobre o grupo')
var ind = groupIdscount.indexOf(from)
if(countMessage[ind].numbers.length < 3) return reply('Necessita do registro de 3 usuarios')
countMessage[ind].numbers.sort((a, b) => (a.messages < b.messages) ? 1 : -1)
mentioned_jid = []
ativoimg = await getBuffer('https://telegra.ph/file/678b3b9e8daa69d69f01c.jpg')
boardi = '🔥፝⃟    Ranking dos membros mais ativos:\n\n'
try {
for (let i = 0; i < 5; i++) {
if (i == 0) boardi += `${i + 1}º 🥇 : @${countMessage[ind].numbers[i].id.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`
else if (i == 1) boardi += `${i + 1}º 🥈 : @${countMessage[ind].numbers[i].id.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`
else if (i == 2) boardi += `${i + 1}º 🥉 : @${countMessage[ind].numbers[i].id.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`
else if (i == 3) boardi += `${i + 1}º 🥉 : @${countMessage[ind].numbers[i].id.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`	
else if (i == 4) boardi += `${i + 1}º 🥉 : @${countMessage[ind].numbers[i].id.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`			
				
mentioned_jid.push(countMessage[ind].numbers[i].id)
} 
dens.sendMessage(from, {image: ativoimg, caption: boardi, mentions: mentioned_jid}, {quoted: selo})
} catch (err) {
			console.log(err)
await dens.sendMessage(from, {text: `É necessário 5 jogadores para se construir um ranking`}, {quoted: info})
}
break

case 'msgativos':
if (!isGroup) return reply(enviar.msg.grupo)
if(groupIdscount.indexOf(from) < 0) return reply('O bot não tem ainda dados sobre o grupo')
var ind = groupIdscount.indexOf(from)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque o número que deseja puxar a atividade')
checkimg = await getBuffer('https://telegra.ph/file/d9d63243fd93b982cbd9c.jpg')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
if(numbersIds.indexOf(mentioned[0]) >= 0) {
var indnum = numbersIds.indexOf(mentioned[0])
dens.sendMessage(from, {image: checkimg, caption: `𖣘⃟ᗒ Consulta das atividade de\n𖣘⃟ᗒ @${mentioned[0].split('@')[0]} no grupo\n𖣘⃟ᗒ Mensagens: ${countMessage[ind].numbers[indnum].messages}\n𖣘⃟ᗒ Comandos dados: ${countMessage[ind].numbers[indnum].cmd_messages}`, mentions: mentioned}, {quoted: selo})
}
else {
mentions(`⋆⃟ۣۜ᭪➣ Consulta da atividade de ⋆⃟ۣۜ᭪➣ @${mentioned[0].split('@')[0]} no grupo\n⋆⃟ۣۜ᭪➣ Mensagens: 0\n⋆⃟ۣۜ᭪➣ Comandos dados: 0`, mentioned, true)
}
break

case 'ranklevel':
case 'rl':
case 'rank':
_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
let leaderboardlvl = '    🏆《 Rank Niveis 》🏆\n\n'
let nom = 0
imglevel = await getBuffer('https://telegra.ph/file/bb38c1f1f2c89a0d2538a.jpg')
try {
for (let i = 0; i < 10; i++) {
nom++
leaderboardlvl += `
┏ ✘🌖 ${setting.NomeDoBot} 🌘✘┓
┃•────•───────•───•
┣❲🏆❳ [${nom}] ϟ➠ ${_level[i].id.replace('@s.whatsapp.net', '')}
┣❲🏆❳「xp」: ϟ${_level[i].xp}
┣❲🏆❳「Level」 :ϟ➠ ${_level[i].level}
┗ ──────「★」──────┚\n`
}
leaderboardlvl += `×•-•-•⟮ 🏆Ranking Level🏆⟯•-•-•×`
dens.sendMessage(from, {image: imglevel, caption: leaderboardlvl, sendEphemeral: true, templateButtons: [{index: 1, quickReplyButton: {displayText: `Ok ${NomeDoBot}`, id: `kkkk`}}]}, {quoted: selo})
} catch (err) {
console.error(err)
await reply(`Deve conter 10 pessoas com level, e o leveling deve está ativado para que aconteça a evolução de level dos membros, após as interações`)
}
break

case 'rankgay':
reply('hora de mostra os que chupam e engolem, saiam do armário, seus frangos.')
raimgs = [
  `https://telegra.ph/file/ef5e78c108f9f118ce4b8.jpg`,
  `https://telegra.ph/file/5e09e2620a434a3fd7155.jpg`,
  `https://telegra.ph/file/91e49ed04952c0b173fb1.jpg`,
  `https://telegra.ph/file/b0066d004baa756e61f44.jpg`,
  `https://telegra.ph/file/5312b0ad4d43d792d043c.jpg`,
  `https://telegra.ph/file/29d65ff0d23e6c75ecb5e.jpg`,
  `https://telegra.ph/file/9b38d3b78623d24780841.jpg`,
  `https://telegra.ph/file/af9a96e54a3a642b774cf.jpg`]
imgs = raimgs[Math.floor(Math.random() * raimgs.length)]
try{
d = []
ret = '🏳️‍🌈 Rank dos mais gays\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
ret += `🏳️‍🌈❧ @${groupMembers[r].id.split('@')[0]}\n`
d.push(groupMembers[r].id)
}
dens.sendMessage(from, {image: {url: imgs}, caption: ret, mentions: d}, {quoted: selo})
} catch (e) {
console.log(e)
}
break

case 'rankgado':
reply('hora de mostra os cara que esquenta a carne pra outro comer.')
raimgs = [
  `https://telegra.ph/file/45242957de1d5d33c8f84.jpg`,
  `https://telegra.ph/file/ed0bb6fc091afd5a3807e.jpg`,
  `https://telegra.ph/file/12fbe27e183e095b9a00f.jpg`,
  `https://telegra.ph/file/88d59b18279a861a14ddc.jpg`,
  `https://telegra.ph/file/6c0f266790605ec4e501a.jpg`,
  `https://telegra.ph/file/0fe384d138c99632e649e.jpg`,
  `https://telegra.ph/file/33998136183a5e459822a.jpg`,
  `https://telegra.ph/file/878bf4b4662245307ee8e.jpg`]
imgs = raimgs[Math.floor(Math.random() * raimgs.length)]
try{
d = []
ret = '🐂 Rank dos mais gados\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
ret += `🐂❧ @${groupMembers[r].id.split('@')[0]}\n`
d.push(groupMembers[r].id)
}
dens.sendMessage(from, {image: {url: imgs}, caption: ret, mentions: d}, {quoted: selo})
} catch (e) {
console.log(e)
}
break

case 'rankcorno':
reply('hora de mostra os cara que coça o coll com o chifre.')
raimgs = [
  `https://telegra.ph/file/4702e3b667e1834c66186.jpg`,
  `https://telegra.ph/file/d06e79fbb23c1bdd68055.jpg`,
  `https://telegra.ph/file/d66b5e199d03805f957ed.jpg`,
  `https://telegra.ph/file/2f6a7be2a654fb4649878.jpg`,
  `https://telegra.ph/file/ed69a262537ed9201c971.jpg`,
  `https://telegra.ph/file/45187c5973a0aa6e600c1.jpg`,
  `https://telegra.ph/file/264c297b348468d9d08da.jpg`,
  `https://telegra.ph/file/442d41a5c25943f5dfe31.jpg`]
imgs = raimgs[Math.floor(Math.random() * raimgs.length)]
try{
d = []
ret = '🐃 Rank dos mais cornos\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
ret += `🐃❧ @${groupMembers[r].id.split('@')[0]}\n`
d.push(groupMembers[r].id)
}
dens.sendMessage(from, {image: {url: imgs}, caption: ret, mentions: d}, {quoted: selo})
} catch (e) {
console.log(e)
}
break

case 'rankgostosos':
case 'rankgostoso':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
member = []
const p01 = groupMembers
const p02 = groupMembers
const p03 = groupMembers
const p04 = groupMembers
const p05 = groupMembers
const o01 = p01[Math.floor(Math.random() * p01.length)]
const o02 = p02[Math.floor(Math.random() * p02.length)]
const o03 = p03[Math.floor(Math.random() * p03.length)]
const o04 = p04[Math.floor(Math.random() * p04.length)]
const o05 = p05[Math.floor(Math.random() * p05.length)]
luy = `
Parados!🤚🤚\n\n1=🤚🤭@${o01.id.split('@')[0]}🤚🤭\n\n\n2=🤚🤭@${o02.id.split('@')[0]}🤚🤭\n\n\n3=🤚🤭@${o03.id.split('@')[0]}🤚🤭\n\n\n4=🤚🤭@${o04.id.split('@')[0]}🤚🤭\n\n\n5=🤚🤭@${o05.id.split('@')[0]}🤚🤭\n\n\nMulta por serem gostosos dms😳 pague pena trabalhando em nossa agência de modelos 😊 by: ${NomeDoBot}`
member.push(o01.id)
member.push(o02.id)
member.push(o03.id)
member.push(o04.id)
member.push(o05.id)
mentions(luy, member, true)
break

case 'rankgostosas':
case 'rankgostosa':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
member = []
const p1 = groupMembers
const p2 = groupMembers
const p3 = groupMembers
const p4 = groupMembers
const p5 = groupMembers
const o1 = p1[Math.floor(Math.random() * p1.length)]
const o2 = p2[Math.floor(Math.random() * p2.length)]
const o3 = p3[Math.floor(Math.random() * p3.length)]
const o4 = p4[Math.floor(Math.random() * p4.length)]
const o5 = p5[Math.floor(Math.random() * p5.length)]
luy = `
Paradas!🤚🤚\n\n1=🤚🤭@${o1.id.split('@')[0]}🤚🤭\n\n\n2=🤚🤭@${o2.id.split('@')[0]}🤚🤭\n\n\n3=🤚🤭@${o3.id.split('@')[0]}🤚🤭\n\n\n4=🤚🤭@${o4.id.split('@')[0]}🤚🤭\n\n\n5=🤚🤭@${o5.id.split('@')[0]}🤚🤭\n\n\nMultas por serem gostosas dms😳 pague pena enviando nud no PV do dono😊 by Bot`
member.push(o1.id)
member.push(o2.id)
member.push(o3.id)
member.push(o4.id)
member.push(o5.id)
mentions(luy, member, true)
break

case 'ranknazista':
reply('hora de mostra os cara que vão pro inferno com passe vip.')
raimgs = [
  `https://telegra.ph/file/f9a0baf26443ff9fb52cb.jpg`,
  `https://telegra.ph/file/d80f6e8cf8c470fc63bce.jpg`,
  `https://telegra.ph/file/9256ca98fbe6c345eef08.jpg`,
  `https://telegra.ph/file/d9d4eb36d1dffa66925d7.jpg`,
  `https://telegra.ph/file/6017402d9d7d2991d0667.jpg`,
  `https://telegra.ph/file/a49e050b0f4b9ad78e0a5.jpg`,
  `https://telegra.ph/file/512c96f23772394863889.jpg`,
  `https://telegra.ph/file/2e014de967f791a8036d1.jpg`]
imgs = raimgs[Math.floor(Math.random() * raimgs.length)]
try{
d = []
ret = '💂‍♂️ Rank dos nazistas do grupo.\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
ret += `💂‍♂️❧ @${groupMembers[r].id.split('@')[0]}\n`
d.push(groupMembers[r].id)
}
dens.sendMessage(from, {image: {url: imgs}, caption: ret, mentions: d}, {quoted: selo})
} catch (e) {
console.log(e)
}
break


case 'rankotakus':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
membr = []
const otaku1 = groupMembers
const otaku2 = groupMembers
const otaku3 = groupMembers
const otaku4 = groupMembers
const otaku5 = groupMembers
const otaku6 = groupMembers
const otaku7 = groupMembers
const otaku = groupMembers
const otaku9 = groupMembers
const otaku10 = groupMembers
const otakus1 = otaku1[Math.floor(Math.random() * otaku1.length)]
const otakus2 = otaku2[Math.floor(Math.random() * otaku2.length)]
const otakus3 = otaku3[Math.floor(Math.random() * otaku3.length)]
const otakus4 = otaku4[Math.floor(Math.random() * otaku4.length)]
const otakus5 = otaku5[Math.floor(Math.random() * otaku5.length)]
const otakus6 = otaku6[Math.floor(Math.random() * otaku6.length)]
const otakus7 = otaku7[Math.floor(Math.random() * otaku7.length)]
const otakus = otaku[Math.floor(Math.random() * otaku.length)]
const otakus9 = otaku9[Math.floor(Math.random() * otaku9.length)]
const otakus10 = otaku10[Math.floor(Math.random() * otaku10.length)]
ytb = `esses são os otakus fedidos do grupo\n@${otakus1.id.split('@')[0]}\n@${otakus2.id.split('@')[0]}\n@${otakus3.id.split('@')[0]}\n@${otakus4.id.split('@')[0]}\n@${otakus5.id.split('@')[0]}\n@${otakus6.id.split('@')[0]}\n@${otakus7.id.split('@')[0]}\n@${otakus.id.split('@')[0]}\n@${otakus9.id.split('@')[0]}\n@${otakus10.id.split('@')[0]}\n\n⚡ ${setting.NomeDoBot} ⚡`
membr.push(otakus1.id)
membr.push(otakus2.id)
membr.push(otakus3.id)
membr.push(otakus4.id)
membr.push(otakus5.id)
membr.push(otakus6.id)
membr.push(otakus7.id)
membr.push(otakus.id)
membr.push(otakus9.id)
membr.push(otakus10.id)
mentions(ytb, membr, true)
break

case 'rankpau':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
membr = []
const pauz1 = groupMembers
const pauz2 = groupMembers
const pauz3 = groupMembers
const pauz4 = groupMembers
const pauz5 = groupMembers
const paus1 = pauz1[Math.floor(Math.random() * pauz1.length)]
const paus2 = pauz2[Math.floor(Math.random() * pauz2.length)]
const paus3 = pauz3[Math.floor(Math.random() * pauz3.length)]
const paus4 = pauz4[Math.floor(Math.random() * pauz4.length)]
const paus5 = pauz5[Math.floor(Math.random() * pauz5.length)]
var pcpau1 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
var pcpau2 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
var pcpau3 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
var pcpau4 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
var pcpau5 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
const pc1 = pcpau1[Math.floor(Math.random() * pcpau1.length)]
const pc2 = pcpau2[Math.floor(Math.random() * pcpau2.length)]
const pc3 = pcpau3[Math.floor(Math.random() * pcpau3.length)]
const pc4 = pcpau4[Math.floor(Math.random() * pcpau4.length)]
const pc5 = pcpau5[Math.floor(Math.random() * pcpau5.length)]
pdr = `Esses são os caras com o menor e maior pau do Grupo\n${groupName}\n\n@${paus1.id.split('@')[0]}\n${pc1}\n@${paus2.id.split('@')[0]}\n${pc2}\n@${paus3.id.split('@')[0]}\n${pc3}\n@${paus4.id.split('@')[0]}\n${pc4}\n@${paus5.id.split('@')[0]}\n${pc5}\n\n ${setting.NomeDoBot}`
membr.push(paus1.id)
membr.push(paus2.id)
membr.push(paus3.id)
membr.push(paus4.id)
membr.push(paus5.id)
mentions(pdr, membr, true)
break 

case 'jogodavelha':
if(!isGroup) return reply('comando apenas para grupos')
joguinhodavelhajs.push(sender)
fs.writeFileSync('./datab/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.push(from)
fs.writeFileSync('./datab/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
if (fs.existsSync(`./armor/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
const matrix = boardnow._matrix;
const chatMove = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
[❗] Alguém está jogando no momento...\n\n@${boardnow.X} VS @${boardnow.O}
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
 Sua vez : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}
${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
dens.sendMessage(from, {text: chatMove}, {quoted: info,
contextInfo: {
mentionedJid: [
boardnow.X + "@s.whatsapp.net",
boardnow.O + "@s.whatsapp.net",
],
},
});
return;
}
if (argss.length === 1)
return reply(`*⟅❗⟆ Jogue com Alguem!!!!*
*para inicar a partida : ${prefix + command} @membro do gp*`);
const boardnow = setGame(`${from}`);
console.log(`Start No jogodavelha ${boardnow.session}`);
boardnow.status = false;
boardnow.X = sender.replace("@s.whatsapp.net", "");
boardnow.O = argss[1].replace("@", "");
fs.writeFileSync(`./armor/tictactoe/db/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const strChat = `*『📌ᎬՏᏢᎬᎡᎪΝᎠϴ ϴ ϴᏢϴΝᎬΝͲᎬ⚔️』*
@${sender.replace("@s.whatsapp.net",
"")} _está te desafiando para uma partida de jogo da velha..._
_[ ${argss[1]} ] Aperte S ou N, para aceitar ou para não aceitar..._
     `;
dens.sendMessage(from, {text: strChat, templateButtons: [{index: 1, quickReplyButton: {displayText: `S`, id: `S`}}, {index: 2, quickReplyButton: {displayText: `N`, id: `N`}}]}, {quoted: info,
contextInfo: {
mentionedJid: [sender, argss[1].replace("@", "") + "@s.whatsapp.net"],
},
});
break

case 'resetarvelha':
case 'resetavelha':  
case 'resetarv':
case 'resetav': 
case 'resetvelha':
case 'rv': 
if (!isJoguin && !isGroupAdmins) return reply(`Fale com quem iniciou o jogo, só ele pode resetar, ou então algum ADM`)
if (fs.existsSync("./armor/tictactoe/db/" + from + ".json")) {
fs.unlinkSync("./armor/tictactoe/db/" + from + ".json");
reply(`Jogo da velha resetado com sucesso nesse grupo!`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
} else {
reply(`Não a nenhuma sessão em andamento...`);
}
break

case "ppt":
if (args.length < 1) return reply(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
ppt = ["pedra", "papel", "tesoura"]
ppy = ppt[Math.floor(Math.random() * ppt.length)]
ppg = Math.floor(Math.random() * 1) + 10
pptb = ppy
pptimg = await getBuffer('https://telegra.ph/file/985b9432626731eebd175.jpg')
if ((pptb == "pedra" && args == "papel") ||
(pptb == "papel" && args == "tesoura") ||
(pptb == "tesoura" && args == "pedra")) {
var vit = "vitoria"
} else if ((pptb == "pedra" && args == "tesoura") ||
(pptb == "papel" && args == "pedra") ||
(pptb == "tesoura" && args == "papel")) {
var vit = "derrota"
} else if ((pptb == "pedra" && args == "pedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tesoura" && args == "tesoura")) {
var vit = "empate"
} else if (vit = "undefined") {
return reply(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
}
if (vit == "vitoria") {
var tes = "Vitória do jogador"
}
if (vit == "derrota") {
var tes = "A vitória é do BOT"
}
if (vit == "empate") {
var tes = "O jogo terminou em empate"
}
dens.sendMessage(from, {image: pptimg, caption: `${NomeDoBot} jogou: ${pptb}\nO jogador jogou: ${args}\n\n${tes}`, templateButtons: [{index: 1, quickReplyButton: {displayText: `Ok ${NomeDoBot}`, id: `kkkk`}}]}, {quoted: selo})
if (tes == "Vitória do jogador") {
}
break

case 'jogo':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply(`Marque alguém exemplo: ${prefix + command} @destiny`)
if (pptGroup(from) != undefined){
reply('Jogo em andamento aguarde...')
await sleep(30000)
var i = pptGroup(from)
if (pptgame[i].desafio === false){
pptgame.splice(i, 1)
fs.writeFileSync(pptdir, JSON.stringify(pptgame, null, 2) + '\n')
reply('O jogo foi finalizado, porque um dos participantes não aceitou')
}
return
}
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
if (pptUser(sender) != undefined || pptUser(mentioned[0]) != undefined) return reply('Jogador ocupado no momento')
var data = {
group: from,
player1: sender,
jogada1: "undefined",
player2: mentioned[0],
jogada2: "undefined",
desafio: false
}
pptgame.push(data)
fs.writeFileSync(pptdir, JSON.stringify(pptgame, null, 2) + '\n')
var texto = `O ${pushname} está desafiando @${mentioned[0].split('@')[0]}, use ${prefix}aceitar para aceitar este desafio`
var menc = [`${mentioned[0].split('@')[0]}@s.whatsapp.net`]
conn.sendMessage(from, {text: texto, mentions: menc}, {quoted: info})
break

case 'aceitar':
var i = pptUser(sender)
if (pptgame[i].player2 === sender){
pptgame[i].desafio = true
fs.writeFileSync(pptdir, JSON.stringify(pptgame, null, 2) + '\n')
var texto = 'Desafio aceito, digite uma das opções: Pedra, Papel, Tesoura'
conn.sendMessage(pptgame[i].player1, {text: texto})
conn.sendMessage(sender, {text: texto})
}
break

case 'resetppt':
fs.writeFileSync(pptdir, JSON.stringify([]))
reply('Jogo resetado')
break

case 'cassino': {
try {
ppimg = await dens.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
addFilter(from)  
const soto = [
'🍊 : 🍒 : 🍐',
'🍒 : 🔔 : 🍊',
'🍇 : 🍇 : 🍇',
'🍊 : 🍋 : 🔔',
'🔔 : 🍒 : 🍐',
'🔔 : 🍒 : 🍊',
'🍊 : 🍋 : ??',		
'🍐 : 🍒 : 🍋',
'🍐 : 🍐 : 🍐',
'🍊 : 🍒 : 🍒',
'🔔 : 🔔 : 🍇',
'🍌 : 🍒 : 🔔',
'🍐 : 🔔 : 🔔',
'🍊 : 🍋 : 🍒',
'🍋 : 🍋 : 🍌',
'🔔 : 🔔 : 🍇',
'🔔 : 🍐 : 🍇',
'🔔 : 🔔 : 🔔',
'🍒 : 🍒 : 🍒',
'🍌 : 🍌 : 🍌'
]		  

const somtoy2 = sotoy[Math.floor(Math.random() * sotoy.length)]
if ((somtoy2 == '🥑 : 🥑 : 🥑') ||(somtoy2 == '🍉 : 🍉 : 🍉') ||(somtoy2 == '🍓 : 🍓 : 🍓') ||(somtoy2 == '🍎 : 🍎 : 🍎') ||(somtoy2 == '🍍 : 🍍 : 🍍') ||(somtoy2 == '🥝 : 🥝 : 🥝') ||(somtoy2 == '🍑 : 🍑 : 🍑') ||(somtoy2 == '🥥 : 🥥 : 🥥') ||(somtoy2 == '🍋 : 🍋 : 🍋') ||(somtoy2 == '🍐 : 🍐 : 🍐') ||(somtoy2 == '🍌 : 🍌 : 🍌') ||(somtoy2 == '🍒 : 🍒 : 🍒') ||(somtoy2 == '🔔 : 🔔 : 🔔') ||(somtoy2 == '🍊 : 🍊 : 🍊') ||(somtoy2 == '🍇 : 🍇 : 🍇')) {
var Vitória = "Você ganhou!!!"
} else {
var Vitória = "Você perdeu..."
}
const cassino = `
┏━───❮◆❯───━
│= | 🎰 𝗖𝗔𝗦𝗦𝗜𝗡𝗢 🎰
│•──•─────•──•
│= |    ${somtoy2}
┗━───❮◆❯───━`
daftarimg = await getBuffer(ppimg)
let buttons = [
{
buttonId: `${prefix}cassino`, 
buttonText: {
displayText: 'ᬊ͜͡𝑷𝑹𝑶́𝑿𝑰𝑴𝑶'
}, type: 1},
]
let buttonMessage = {
image: { url: ppimg },
caption: `${cassino}`,
footer: `• Usuario: ${pushname}\n• Status: ${Vitória}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: ``,
body: `${NomeDoBot}`,
showAdAttribution: true,
thumbnail: fs.readFileSync("./logos/logo2.jpg"),
mediaType:2,
mediaUrl: ``, 
sourceUrl: `https://youtube.com/channel/UCx8b3HdonWrA71fDUCXLxqw`
}}
}
dens.sendMessage(from, buttonMessage, { quoted: selo })
}
break

case 'anagrama':
if(!isGroup) return reply('comando apenas para grupos')
const anaaleatorio = Math.floor(Math.random() * palavrasANA.length)
if(!isGroupAdmins) return reply('comando apenas para admins')
if(args.length == 0) return reply('use 1 para ativar o jogo do anagrama\npara desativar use anagrama 0')
if (args.join(' ') === '1') {
if(fs.existsSync(`./armor/anagrama-${from}.json`)) {
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./armor/anagrama-${from}.json`))
boa = `╭──≽「 👾 ANAGRAMA 👾 」
│➽ DESCUBRA A PALAVRA
│➽ ANAGRAMA: ${dataAnagrama2.embaralhada}
│➽ DICA: ${dataAnagrama2.dica}
╰────────────────`
sendBtext(from, boa, `Nome: ${pushname}\nClique No Botão Abaixo, Para cancelar, Boa Sorte!`, [{buttonId:`${prefix + command} 0`, buttonText: {displayText: '❌𝗖𝗔𝗡𝗖𝗘𝗟𝗔𝗥'}, type: 1}], info)
} else {
fs.writeFileSync(`./armor/anagrama-${from}.json`, `${JSON.stringify(palavrasANA[anaaleatorio])}`)
wew = `╭────≽「 👾 ANAGRAMA 👾 」
│➽ DESCUBRA A PALAVRA
│➽ ANAGRAMA: ${palavrasANA[anaaleatorio].embaralhada}
│➽ DICA: ${palavrasANA[anaaleatorio].dica}
╰────────────────`
sendBtext(from, wew, `Nome: ${pushname}\nClique No Botão Abaixo, Para cancelar, Boa Sorte!`, [{buttonId:`${prefix + command} 0`, buttonText: {displayText: '❌𝗖𝗔𝗡𝗖𝗘𝗟𝗔𝗥'}, type: 1}], info)
}
} else if (args.join(' ') ==='0') {
if(!fs.existsSync(`./armor/anagrama-${from}.json`)) return reply('não tem como desativar o jogo do anagrama pôs ele não foi ativado')
fs.unlinkSync(`./armor/anagrama-${from}.json`)
reply("desativado com sucesso")
}
await limitAdd(sender)
break
	    
case 'Questão':
				if (!q) return reply(`Seu texto, Exemplo : ${prefix + command} ele casou `)
					const apa = [`Sim`, `Não`, `Poderia ser`, `Isso mesmo`]
					const kah = apa[Math.floor(Math.random() * apa.length)]
dens.sendMessage(from, { text: `Questão : É ${q}\nResponda : ${kah}` }, { quoted: selo })
					break

case 'kiah2':
try {
ppimg = await dens.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
const tutu = `sua foto de perfil`
dens.sendMessage(from, {image: {url: ppimg}, caption: tutu}, {quoted: selo})
break

case 'roleta':
if(!isBotGroupAdmins) return reply("Eu Preciso de Adm Para ter Acesso Ao Meu Revolve")
sendBtext(from, `Leia As Regras Primeiro`,`ꪶ${NomeDoBot}ꫂ`,[{buttonId:`${prefix}rgroleta`, buttonText: {displayText: "「 Regras 」"}, type: 1}], info)
break

case 'rgroleta':
sendBtext(from, `1 • Você Pode Tomar Ban!\n2 • Se Perder, Leva Ban!\n3 • Se Ganhar, Você Ganha XP e Level\nSe Você For Banido Vc Vai Ser Revivido Dps De 2 Minutos No Máximo.\n4 • Bot Tem Que Ta De Adm\n• Se Não Der Certo Entre Em Contato Com Algum Adm`,`ꪶ𝑹𝑶𝑳𝑬𝑻𝑨-𝑹𝑼𝑺𝑺𝑨ꫂ`, [{buttonId:`${prefix}ctroleta`, buttonText: {displayText: `𝑪𝑶𝑵𝑻𝑰𝑵𝑼𝑨𝑹`}, type: 1}, {buttonId:`${prefix}nroleta`, buttonText: {displayText: `𝑫𝑬𝑺𝑰𝑺𝑻𝑶`}, type: 1}], selo)
break

case 'nroleta':
sendBtext(from, `Blz ${pushname}, Você foi Perdoado`, `Veja Meu Menu`, [{buttonId:`${prefix}menu`, buttonText: {displayText: `𝑀𝐸𝑁𝑈`}, type: 1}], selo)
break

case 'ctroleta':
if(!isBotGroupAdmins) return reply("Eu Preciso de Adm Para ter Acesso Ao Meu Revolve")
if (MoneyId === undefined){
rafa = {id: sender, dinheiro: 0}
dinheiro.push(rafa)
fs.writeFileSync('./datab/dinheiro/dinheiro.json', JSON.stringify(dinheiro, null, 2))
}
atk = ["SEM BALA","COM BALA","SEM BALA","SEM BALA","SEM BALA","SEM BALA","ENGANCHADO"]
calib = atk[Math.floor(Math.random() * atk.length)]
if ((calib == 'COM BALA')) {
var apt = "Perdeu [💀]..."
} else if ((calib == 'SEM BALA') || ('ENGANCHADO')) { 
var apt = "Ganhou, Teve Muita Sorte, Parabéns"
}
luffykk = `[🥁] *TAMBOU GIROU...* [🥁]`
dens.sendMessage(from, {text: luffykk}, {quoted: selo})
await sleep(2500)
luffykkk = `[💥] *GATILHO APERTADO...* [💥]`
dens.sendMessage(from, {text: luffykkk}, {quoted: selo})
await sleep(3000)
abc = `[🥶] *O TAMBOR ESTA ${calib}*\n\nHmmmn, Parece Que O(a) @${sender.split("@")[0]}, Ele(a) ${apt}`
wew = await getBuffer(`https://telegra.ph/file/16a57fff05a289b934aae.jpg`)
await dens.sendMessage(from, {image: wew, caption: abc, footer: ``}, {quoted: info})
if (apt == 'Perdeu [💀]...') {
await sleep(3500)
atkp = `Regras São Regras né @${sender.split("@")[0]}...[☠️]`
dens.sendMessage(from, {text: atkp}, {quoted: selo})
dens.groupParticipantsUpdate(from, [`${sender.split("@")[0]}@s.whatsapp.net`], "remove")
}
if (apt == 'Ganhou, Teve Muita Sorte, Parabéns') {
await sleep(3400)
dinheiro(sender, 500)
sendBtext(from, `[🍻] Parabéns @${sender.split("@")[0]} [🍻]\n----Pela sua Coragem\n🍷▸ Você Ganhou 500R$\n----Quer Tentar Novamente?`,`${NomeDoBot}`, [{buttonId:`${prefix}ctroleta`, buttonText: {displayText: '𝑹𝑬𝑽𝑨𝑵𝑪𝑯𝑬 🥂'}, type: 1}, {buttonId:`${prefix}ctroleta`, buttonText: {displayText: '𝑪𝑨𝑹𝑻𝑬𝑰𝑹𝑨 💳'}, type: 1}], selo)
}
break

case 'roletarussa': 
if(!isBotGroupAdmins) return reply("Eu Preciso Ta De Adm Pra Ter A Mira Mais Precisa, Pra Não Errar o Alvo 🤠")
if (!isGroup) return reply('Este comando só deve ser utilizado em Grupo')
if (!isGroupAdmins) return reply ('Você Não é digno de tal comando, pois so quem pode, é usuários com poder alto...')
arma = ["PARAFAL", "DESERT", "VAL", "Ak-47", "MP40", "M16", "M4A1", "Glock","Escopeta","AA12","G136","M1014","Barrete","MP5","G3","G17","AUG","MP7","P90","UZI","Kar93","AWM","PKM","M13","MP7"]
membrana = ["Na Perna","Na Cabeça","Na Bunda","Na Mão","No Braço","Na Boca","No Saco","Na Coxa","No Imbigo","Nos Peito","No Cutuvelo","No Nariz","Na Orelha"]
armon = arma[Math.floor(Math.random() * arma.length)]
menbro = membrana[Math.floor(Math.random() * membrana.length)]
reply(`Alguém Vai Morrer Jajá, Espera Só Eu Recarregar Minha ${armon}, Aguarde 5 Segundos...`)
await sleep(5000)
reply("Pronto, Agora Vamos lá, Minha Arma Ta Carregada Prontinha Para Matar Um, Quem Serar O(a) Sortudo(a)?!")
await sleep(2000)
await dens.groupSettingUpdate(from, 'announcement')
await sleep(3000)
reply("Quem Eu Devo matar...\n\nJá me decidi...")
await sleep(2000)
bah = fs.readFileSync('./audios/level.mp3');
dens.sendMessage(from, {audio: bah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
await sleep(4000)
d = []
teks = `*[💥] PÁÁÁÁ!! [💥]*\n\n`
for(i = 0; i < 1; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `O @${groupMembers[r].id.split('@')[0]} Foi baliado ${menbro} E Sangrou Até a Morte [☠️]`
d.push(groupMembers[r].id)
}
await sleep(4500)
mentions(teks, d, true)
dens.groupParticipantsUpdate(from, d, 'remove')
await sleep(4000)
await dens.groupSettingUpdate(from, 'not_announcement')
reply("[☠️] *Ninguém Viu Nada Em...* [👀]")
await sleep(180000)
for(i = 0; i < 1; i++) {
pruh = `Dps De 3 Minutos, O ${groupMembers[r].id.split('@')[0]} Foi Revivido Através Da Cura Suprema [💊]`
dens.sendMessage(from, {text: pruh}, {quoted: selo})
d.push(groupMembers[r].id)
}
mentions(pruh, d, true)
dens.groupParticipantsUpdate(from, d, 'add')
reply('[💐] Bem Vindo de Volta, Você Foi Morto Pelo Comando Death [💐]')
break

case 'round6':
blk = await getBuffer('https://telegra.ph/file/1c4af3e7854efe1859208.jpg')
dens.sendMessage(from, {image: blk, caption: "Escolha qual forma você quer jogar 🥷🏽", templateButtons: [{index: 2, quickReplyButton: {displayText: '☂️', id: `${prefix}boneca6`}}, {index: 2, quickReplyButton: {displayText: '⭐', id: `${prefix}biscoitomorte`}}, {index: 3, quickReplyButton: {displayText: '🔴', id: `${prefix}pisomorte`}}]}, {quoted: selo})
break

case 'boneca6':
blk = await getBuffer('https://telegra.ph/file/53e12a11f0387a98296d9.jpg')
var round = [ "Você perdeu o desafio pq se morreu.", "Você perdeu pq não finalizou a tempo.", "Você perdeu pq espirro.", "Você perdeu pq queria morre, então foi bônus.", "┌❑\n├❒ 🏆Você concluiu🏆\n├❒\n┣❲💰❳ 𝚁𝙴𝙲𝙾𝙼𝙿𝙴𝙽𝚂𝙰:\n├❒ 🔞𝙺𝙸𝙽𝙴-𝙲𝙷𝙰𝙽🔞\n└❒\n\nhttps://drive.google.com/file/d/1AaVQ5W6h6ajgmRPZXJkMKG2a72dCeQLJ/view?usp=drivesdk", "Você morreu pq tropeçou.", "Você morreu pq tropeçou em uma rola.", "vc perdeu pq não completou.", "Você morreu pq não conseguiu completa o desafio a tempo.", "┌❑\n├❒ 🏆Você ganho🏆\n├❒\n┣❲💰❳ 𝚁𝙴𝙲𝙾𝙼𝙿𝙴𝙽𝚂𝙰:\n├❒ 🔞𝙺𝙸𝙽𝙴-𝙲𝙷𝙰𝙽🔞\n└❒\n\nhttps://drive.google.com/file/d/1AaVQ5W6h6ajgmRPZXJkMKG2a72dCeQLJ/view?usp=drivesdk" ]
api = round[Math.floor(Math.random() * round.length)]
dens.sendMessage(from, {image: blk, caption: api, templateButtons: [{index: 2, quickReplyButton: {displayText: 'Jogar Novamente', id: `${prefix}round6`}}]}, {quoted: selo})
break

case 'pisomorte':
blk = await getBuffer('https://telegra.ph/file/9e450388d2ab2334e8e8c.jpg')
var round = [ "Você perdeu o desafio pq não chego no final a tempo.", "Você perdeu pq não finalizou a tempo.", "Você piso no local errado e caiu.", "derrubaram vc no meio do desafio.", "Parabéns vc ganho, finalizou o desafio a tempo.", "Você teve um ataque de pânico e caiu da plataforma.", "Você morreu pq tentou corre do desafio.", "vc perdeu pq não completou.", "Você morreu pq piso no lugar errado seu animal.", "┌❑\n├❒ 🏆Você concluiu🏆\n├❒\n┣❲💰❳ 𝚁𝙴𝙲𝙾𝙼𝙿𝙴𝙽𝚂𝙰:\n├❒ 🔞𝚃𝙰𝚃𝙸-𝚉𝙰𝚀𝚄𝙸🔞\n└❒\n\nhttps://drive.google.com/file/d/19yzzCWYGLsUNcF3F2RSwPfmmvyQE3CiO/view?usp=drivesdk" ]
api = round[Math.floor(Math.random() * round.length)]
dens.sendMessage(from, {image: blk, caption: api, templateButtons: [{index: 2, quickReplyButton: {displayText: 'Jogar Novamente', id: `${prefix}round6`}}]}, {quoted: selo})
break

case 'biscoitomorte':
blk = await getBuffer('https://telegra.ph/file/83746a470baabbe9331da.jpg')
var round = [ "Você perdeu o desafio pq não entrego o biscoito a tempo.", "Você perdeu pq não finalizou a tempo.", "Você derrubo o biscoito e morreu.", "derrubaram vc no meio do desafio.", "┌❑\n├❒ 🏆Você finalizou🏆\n├❒\n┣❲💰❳ 𝚁𝙴𝙲𝙾𝙼𝙿𝙴𝙽𝚂𝙰:\n├❒ 🔞𝚅𝙸𝙲𝚃𝙾𝚁𝙸𝙰🔞\n└❒\n\nhttps://drive.google.com/file/d/1AcNukvbu9Yz5EfAomIeK95kqRDTYjP6z/view?usp=drivesdk", "Você teve um ataque de pânico e quebrou o biscoito.", "Você morreu pq queria se mata.", "vc perdeu pq não completou.", "Você morreu pq escorregou e não finalizou a tempo.", "┌❑\n├❒ 🏆Você finalizou🏆\n├❒\n┣❲💰❳ 𝚁𝙴𝙲𝙾𝙼𝙿𝙴𝙽𝚂𝙰:\n├❒ 🔞𝚅𝙸𝙲𝚃𝙾𝚁𝙸𝙰🔞\n└❒\n\nhttps://drive.google.com/file/d/1AcNukvbu9Yz5EfAomIeK95kqRDTYjP6z/view?usp=drivesdk" ]
api = round[Math.floor(Math.random() * round.length)]
dens.sendMessage(from, {image: blk, caption: api, templateButtons: [{index: 2, quickReplyButton: {displayText: 'Jogar Novamente', id: `${prefix}round6`}}]}, {quoted: selo})
break

case 'batalha-z':
if (MoneyId === undefined) return reply(`Use primeiro o comando ${prefix}carteira`)
if (!args.join(' ').includes("@")) return reply(`Use assim exemplo: ${prefix}batalha-z @nero`)
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
teks = `${mentioned[0].split('@')[0]}@s.whatsapp.net`
consu = getMoneyId(teks)
if (consu === undefined) return reply('Jogador não encontrado')
wew = await getBuffer('https://telegra.ph/file/2dc90bc08895a5a0e967e.mp4')
bla = await getBuffer('https://telegra.ph/file/8deef47ad4cd883407737.mp4')
bat = Math.floor(Math.random() * 100) + 1
boa = `O ${pushname} vai lutar contra o @${mentioned[0].split('@')[0]} 🥷🏽
Sua chance de ganhar é de ${bat}%
Boa sorte 🍀`
dens.sendMessage(from, {video: wew, caption: boa, templateButtons: [{index: 2, quickReplyButton: {displayText: `Ok ${NomeDoBot}`, id: 'nada'}}]}, {quoted: info}).then(() =>
reply('*Aguarde 10 segundos, para saber o resultado ⏳*')
)
await sleep(10000)
if (bat > 50){
userg = getMoney(teks)
ncash = Math.floor(Math.random() * userg)
money(teks, -ncash)
money(sender, ncash)
userk = getMoney(sender)
rafa = `•────•───────•───•
┣❲🎯❳ ${pushname} ativo o estinto superior é ganho o duelo.
┣❲💰❳ Recompensa: ${ncash}
┣❲💵❳ Saldo: ${userk}
┣❲🏦❳ Banco: ${NomeDoBot}
┣❲☎️❳ Numero:  ${sender.split('@')[0]}
•────•───────•───•`
dens.sendMessage(from, {video: bla, caption: rafa, templateButtons: [{index: 2, quickReplyButton: {displayText: `Ok ${NomeDoBot}`, id: 'nada'}}]}, {quoted: info})
}
if (bat < 50 || bat === 50){
userg = getMoney(sender)
ncash = Math.floor(Math.random() * userg)
money(teks, ncash)
money(sender, -ncash)
userk = getMoney(sender)
rafa = `•────•───────•───•
┣❲🎯❳ ${pushname} terminou o duelo na arena, ele recebeu um ataque crítico e perdeu.
┣❲💰❳ Prejuízo: ${ncash}
┣❲💵❳ Saldo: ${userk}
┣❲🏦❳ Banco: ${NomeDoBot}
┣❲☎️❳ Numero:  ${sender.split('@')[0]}
•────•───────•───•`
dens.sendMessage(from, {video: bla, caption: rafa, templateButtons: [{index: 2, quickReplyButton: {displayText: `Ok ${NomeDoBot}`, id: 'nada'}}]}, {quoted: info})
}
break

case 'batalhapoke':
if (MoneyId === undefined) return reply(`Use primeiro o comando ${prefix}carteira`)
if (!args.join(' ').includes("@")) return reply(`Use assim exemplo: ${prefix}batalhapoke @nero`)
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
teks = `${mentioned[0].split('@')[0]}@s.whatsapp.net`
consu = getMoneyId(teks)
if (consu === undefined) return reply('Jogador não encontrado')
wew = await getBuffer('https://telegra.ph/file/2c031502ed4c4e4ac51f9.mp4')
bla = await getBuffer('https://telegra.ph/file/807349eedeb11b30bd1fa.mp4')
bat = Math.floor(Math.random() * 100) + 1
boa = `O ${pushname} vai lutar contra o @${mentioned[0].split('@')[0]} 🥷🏽
Sua chance de ganhar é de ${bat}%
evolua seu pokemon ao maximo 🍀`
dens.sendMessage(from, {video: wew, caption: boa, templateButtons: [{index: 2, quickReplyButton: {displayText: `Ok ${NomeDoBot}`, id: 'nada'}}]}, {quoted: info}).then(() =>
reply('*Aguarde 10 segundos, para saber o resultado ⏳*')
)
await sleep(10000)
if (bat > 50){
userg = getMoney(teks)
ncash = Math.floor(Math.random() * userg)
money(teks, -ncash)
money(sender, ncash)
userk = getMoney(sender)
rafa = `•────•───────•───•
┣❲🎯❳ ${pushname} acerto um ataque crítico e ganho a partida na arena.
┣❲💰❳ Recompensa: ${ncash}
┣❲💵❳ Saldo: ${userk}
┣❲🏦❳ Banco: ${NomeDoBot}
┣❲☎️❳ Numero:  ${sender.split('@')[0]}
•────•───────•───•`
dens.sendMessage(from, {video: bla, caption: rafa, templateButtons: [{index: 2, quickReplyButton: {displayText: `Ok ${NomeDoBot}`, id: 'nada'}}]}, {quoted: info})
}
if (bat < 50 || bat === 50){
userg = getMoney(sender)
ncash = Math.floor(Math.random() * userg)
money(teks, ncash)
money(sender, -ncash)
userk = getMoney(sender)
rafa = `•────•───────•───•
┣❲🎯❳ ${pushname} terminou o duelo na arena, ele recebeu um ataque crítico e perdeu.
┣❲💰❳ Prejuízo: ${ncash}
┣❲💵❳ Saldo: ${userk}
┣❲🏦❳ Banco: ${NomeDoBot}
┣❲☎️❳ Numero:  ${sender.split('@')[0]}
•────•───────•───•`
dens.sendMessage(from, {video: bla, caption: rafa, templateButtons: [{index: 2, quickReplyButton: {displayText: `Ok ${NomeDoBot}`, id: 'nada'}}]}, {quoted: info})
}
break

case 'batalhakime':
if (MoneyId === undefined) return reply(`Use primeiro o comando ${prefix}carteira`)
if (!args.join(' ').includes("@")) return reply(`Use assim exemplo: ${prefix}batalhakime @nero`)
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
teks = `${mentioned[0].split('@')[0]}@s.whatsapp.net`
consu = getMoneyId(teks)
if (consu === undefined) return reply('Jogador não encontrado')
wew = await getBuffer('https://telegra.ph/file/a7dadc54def15cd3420e2.mp4')
bla = await getBuffer('https://telegra.ph/file/5fee4d91dabf266adb705.mp4')
bat = Math.floor(Math.random() * 100) + 1
boa = `O ${pushname} vai lutar contra o @${mentioned[0].split('@')[0]} 🥷🏽
Sua chance de ganhar é de ${bat}%
concentre sua respiração 🍀`
dens.sendMessage(from, {video: wew, caption: boa, templateButtons: [{index: 2, quickReplyButton: {displayText: `Ok ${NomeDoBot}`, id: 'nada'}}]}, {quoted: info}).then(() =>
reply('*Aguarde 10 segundos, para saber o resultado ⏳*')
)
await sleep(10000)
if (bat > 50){
userg = getMoney(teks)
ncash = Math.floor(Math.random() * userg)
money(teks, -ncash)
money(sender, ncash)
userk = getMoney(sender)
rafa = `•────•───────•───•
┣❲🎯❳ ${pushname} decapito seu oponente, ganho o duelo.
┣❲💰❳ Recompensa: ${ncash}
┣❲💵❳ Saldo: ${userk}
┣❲🏦❳ Banco: ${NomeDoBot}
┣❲☎️❳ Numero:  ${sender.split('@')[0]}
•────•───────•───•`
dens.sendMessage(from, {video: bla, caption: rafa, templateButtons: [{index: 2, quickReplyButton: {displayText: `Ok ${NomeDoBot}`, id: 'nada'}}]}, {quoted: info})
}
if (bat < 50 || bat === 50){
userg = getMoney(sender)
ncash = Math.floor(Math.random() * userg)
money(teks, ncash)
money(sender, -ncash)
userk = getMoney(sender)
rafa = `•────•───────•───•
┣❲🎯❳ ${pushname} terminou o duelo, ele recebeu um ataque crítico e perdeu.
┣❲💰❳ Prejuízo: ${ncash}
┣❲💵❳ Saldo: ${userk}
┣❲🏦❳ Banco: ${NomeDoBot}
┣❲☎️❳ Numero:  ${sender.split('@')[0]}
•────•───────•───•`
dens.sendMessage(from, {video: bla, caption: rafa, templateButtons: [{index: 2, quickReplyButton: {displayText: `Ok ${NomeDoBot}`, id: 'nada'}}]}, {quoted: info})
}
break

case 'kidbengala':
blk = await getBuffer('https://telegra.ph/file/b30519fe8e45e1b517eec.jpg')
var round = [ "kid bengala enfiou:\n90cm de rola no seu coll🤩", "kid bengala enfiou:\n30cm no seu coll🥵", "Kid bengala enfiou:\n50cm de rola no seu coll🦍", "kid bengala enfiou:\n20cm no seu rabo😈", "Você tropeçou na rola do kid😞", "kid bengala enfiou:\n80cm no seu coll😔.", "kid bengala tava na seca, seu cu viro um poço😔", "Seu cu só tinha pelo, você foi poupadoKKKKKKKKK", "kid bengala broxo\nVc foi salvo😞" ]
api = round[Math.floor(Math.random() * round.length)]
dens.sendMessage(from, {image: blk, caption: api, templateButtons: [{index: 2, quickReplyButton: {displayText: '😞', id: `${prefix}nossa`}}]}, {quoted: selo})
break

//=(CASE-SIMIH)=\\

case 'simih':
if (args.length < 1) return reply('esta faltando colocar on ou off depois do comandos❗❗❗')
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (Number(args[0]) === 1) {
if (isSimi) return reply('O modo Simi está ativo agora🤙')
samih.push(from)
fs.writeFileSync('./datab/usuarios/simi.json', JSON.stringify(samih))
reply('Ativado com sucesso o modo simi neste grupo❗❗❗')
} else if (Number(args[0]) === 0) {
if(!isSimi) return reply('Já está Desativado.')
samih.splice(from, 1)
fs.writeFileSync('./datab/usuarios/simi.json', JSON.stringify(samih))
reply('Desativado modo simi com sucesso neste grupo‼️')
} else {
reply('on para ativar, 0ff para desativar.')
}
break

case 'simih2':
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (args.length < 1) return reply('esta faltando coloca o on ou off depois do comando❗❗❗')
if (Number(args[0]) === 1) {
if (isSimi2) return reply('O modo Simi está ativo')
samih2.push(from)
fs.writeFileSync('./armor/simi.json', JSON.stringify(samih2))
reply('Ativado com sucesso o modo simi neste grupo, Este simih2 ele aprende as respostas e perguntas das pessoas, conforme vai falando, por isso, só recomendo utilizar ele no termux, pois no site ou lugar diferente do termux que você utilizar, ele não vai armazenar os dados nescessarios')
} else if (Number(args[0]) === 0) {
if(!isSimi2) return reply('Já está Desativado.')
samih2.splice(from, 1)
fs.writeFileSync('./armor/simi.json', JSON.stringify(samih2))
reply('Desativado modo simi com sucesso neste grupo️‼️')
} else {
reply('on para ativar, 0ff para desativar.')
}
break

//====(ALTERADOR-DE-AUDIO)======\\

case 'videoreverse':
case 'reversevid':
if (!isQuotedVideo) return reply('Marque um vídeo')
sendBtext(from, enviar.espere, `@~ usuário: ${pushname}\n@~ Grupo: ${groupName}\n@~ cmd: ${prefix + command}`, [{buttonId: `nd`, buttonText: {displayText: `Obg ${NomeDoBot}`}, type: 1}], info)
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
dens.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: info})
fs.unlinkSync(ran)
})
break 

case 'videolento':
case 'slowvid':  
if (!isQuotedVideo) return reply('Marque um vídeo')
sendBtext(from, enviar.espere, `@~ usuário: ${pushname}\n@~ Grupo: ${groupName}\n@~ cmd: ${prefix + command}`, [{buttonId: `nd`, buttonText: {displayText: `Obg ${NomeDoBot}`}, type: 1}], info)
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
dens.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: info })
fs.unlinkSync(ran)
})
break

case 'videorapido':
case 'fastvid':  
if (!isQuotedVideo) return reply('Marque um vídeo')
sendBtext(from, enviar.espere, `@~ usuário: ${pushname}\n@~ Grupo: ${groupName}\n@~ cmd: ${prefix + command}`, [{buttonId: `nd`, buttonText: {displayText: `Obg ${NomeDoBot}`}, type: 1}], info)
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
dens.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: info })
fs.unlinkSync(ran)
})		
break

case 'tupai':
if (!isQuotedAudio) return reply('Marque um áudio')
reply('loading...')
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.5,asetrate=65100"' ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
dens.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true, caption:"*Sucesso*", contextInfo:{externalAdReply:{
title:``,
body:`${NomeDoBot}`,
thumbnail: fs.readFileSync("./logos/logo2.jpg"),
mediaType:2,
mediaUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`,
sourceUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`
}}}, {quoted:selo})
fs.unlinkSync(ran)
})
break

case 'reverse':
if (!isQuotedAudio) return reply('Marque um áudio')
reply('loading...')
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
dens.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true, caption:"*Sucesso*", contextInfo:{externalAdReply:{
title:``,
body:`${NomeDoBot}`,
thumbnail: fs.readFileSync("./logos/logo2.jpg"),
mediaType:2,
mediaUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`,
sourceUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`
}}}, {quoted:selo})
fs.unlinkSync(ran)
})
break

case 'fat':
if (!isQuotedAudio) return reply('Marque um áudio')
reply('loading...')
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
dens.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true, caption:"*Sucesso*", contextInfo:{externalAdReply:{
title:``,
body:`${NomeDoBot}`,
thumbnail: fs.readFileSync("./logos/logo2.jpg"),
mediaType:2,
mediaUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`,
sourceUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`
}}}, {quoted:selo})
fs.unlinkSync(ran)
})
break

case 'deep':
if (!isQuotedAudio) return reply('Marque um áudio')
reply('loading...')
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af "atempo=4/4,asetrate=44500*2/3" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
dens.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true, caption:"*Sucesso*", contextInfo:{externalAdReply:{
title:``,
body:`${NomeDoBot}`,
thumbnail: fs.readFileSync("./logos/logo2.jpg"),
mediaType:2,
mediaUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`,
sourceUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`
}}}, {quoted:selo})
fs.unlinkSync(ran)
})
break

case 'earrape':
if (!isQuotedAudio) return reply('Marque um áudio')
reply('loading...')
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af "volume=12'" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
dens.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true, caption:"*Sucesso*", contextInfo:{externalAdReply:{
title:``,
body:`${NomeDoBot}`,
thumbnail: fs.readFileSync("./logos/logo2.jpg"),
mediaType:2,
mediaUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`,
sourceUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`
}}}, {quoted:selo})
fs.unlinkSync(ran)
})
break

case 'blown':
if (!isQuotedAudio) return reply('Marque um áudio')
reply('loading...')
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af "acrusher=.1:1:64:0:log" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
dens.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true, caption:"*Sucesso*", contextInfo:{externalAdReply:{
title:``,
body:`${NomeDoBot}`,
thumbnail: fs.readFileSync("./logos/logo2.jpg"),
mediaType:2,
mediaUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`,
sourceUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`
}}}, {quoted:selo})
fs.unlinkSync(ran)
})
break

case 'grave2':
if (!isQuotedAudio) return reply('Marque um áudio')
reply('loading...')
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
dens.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true, caption:"*Sucesso*", contextInfo:{externalAdReply:{
title:``,
body:`${NomeDoBot}`,
thumbnail: fs.readFileSync("./logos/logo2.jpg"),
mediaType:2,
mediaUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`,
sourceUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`
}}}, {quoted:selo})
fs.unlinkSync(ran)
})
break

case 'grave':
if (!isQuotedAudio) return reply('Marque um áudio')
reply('loading...')
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
dens.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true, caption:"*Sucesso*", contextInfo:{externalAdReply:{
title:``,
body:`${NomeDoBot}`,
thumbnail: fs.readFileSync("./logos/logo2.jpg"),
mediaType:2,
mediaUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`,
sourceUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`
}}}, {quoted:selo})
fs.unlinkSync(ran)
})
break

case 'adolesc':
case 'vozmenino':  
if (!isQuotedAudio) return reply('Marque um áudio')
reply('loading...')
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
dens.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true, caption:"*Sucesso*", contextInfo:{externalAdReply:{
title:``,
body:`${NomeDoBot}`,
thumbnail: fs.readFileSync("./logos/logo2.jpg"),
mediaType:2,
mediaUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`,
sourceUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`
}}}, {quoted:selo})
fs.unlinkSync(ran)
})
break  

case 'bass3':
if (!isQuotedAudio) return reply('Marque um áudio')
reply('loading...')
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
dens.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true, caption:"*Sucesso*", contextInfo:{externalAdReply:{
title:``,
body:`${NomeDoBot}`,
thumbnail: fs.readFileSync("./logos/logo2.jpg"),
mediaType:2,
mediaUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`,
sourceUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`
}}}, {quoted:selo})
fs.unlinkSync(ran)
})
break

case 'bass': 
if (!isQuotedAudio) return reply('Marque um áudio')
reply('loading...')
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
dens.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true, caption:"*Sucesso*", contextInfo:{externalAdReply:{
title:``,
body:`${NomeDoBot}`,
thumbnail: fs.readFileSync("./logos/logo2.jpg"),
mediaType:2,
mediaUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`,
sourceUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`
}}}, {quoted:selo})
fs.unlinkSync(ran)
})
break

case 'bass2': 
if (!isQuotedAudio) return reply('Marque um áudio')
reply('loading...')
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
dens.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true, caption:"*Sucesso*", contextInfo:{externalAdReply:{
title:``,
body:`${NomeDoBot}`,
thumbnail: fs.readFileSync("./logos/logo2.jpg"),
mediaType:2,
mediaUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`,
sourceUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`
}}}, {quoted:selo})
fs.unlinkSync(ran)
})
break

case 'estourar': 
if (!isQuotedAudio) return reply('Marque um áudio')
reply('loading...')
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=90:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
dens.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true, caption:"*Sucesso*", contextInfo:{externalAdReply:{
title:``,
body:`${NomeDoBot}`,
thumbnail: fs.readFileSync("./logos/logo2.jpg"),
mediaType:2,
mediaUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`,
sourceUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`
}}}, {quoted:selo})
fs.unlinkSync(ran)
})
break

case 'fast':
case 'audiorapido':  
if (!isQuotedAudio) return reply('Marque um áudio')
reply('loading...')
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Erro')
hah = fs.readFileSync(ran)
dens.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true, caption:"*Sucesso*", contextInfo:{externalAdReply:{
title:``,
body:`${NomeDoBot}`,
thumbnail: fs.readFileSync("./logos/logo2.jpg"),
mediaType:2,
mediaUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`,
sourceUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`
}}}, {quoted:selo})
fs.unlinkSync(ran)
})
break

case 'esquilo':
if (!isQuotedAudio) return reply('Marque um áudio')
reply('loading...')
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
dens.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true, caption:"*Sucesso*", contextInfo:{externalAdReply:{
title:``,
body:`${NomeDoBot}`,
thumbnail: fs.readFileSync("./logos/logo2.jpg"),
mediaType:2,
mediaUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`,
sourceUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`
}}}, {quoted:selo})
fs.unlinkSync(ran)
})
break

case 'audiolento': 
case 'slow':
if (!isQuotedAudio) return reply('Marque um áudio')
reply('loading...')
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
dens.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true, caption:"*Sucesso*", contextInfo:{externalAdReply:{
title:``,
body:`${NomeDoBot}`,
thumbnail: fs.readFileSync("./logos/logo2.jpg"),
mediaType:2,
mediaUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`,
sourceUrl: `https://www.instagram.com/p/CiU_NkMuGKk/?igshid=YmMyMTA2M2Y=`
}}}, {quoted:selo})
fs.unlinkSync(rano)
})
break

//===(JOGO-DA-VELHA-COM-MAQUINA)===\\

case 'tttme':
if (!isGroup) return reply('SÓ EM GRUPO')
const checkTTTIdMe = getTTTId(sender)
if (checkTTTIdMe === undefined) addTTTId(sender)
dens.sendMessage(from, {text: tttme(pushname, getTTTwins(sender), getTTTdefeats(sender), getTTTties(sender), getTTTpoints(sender))}, {quoted: info})
break

case 'tttrank':
if (!isGroup) return reply(enviar.msg.grupo)
tictactoe.sort((a, b) => (a.points < b.points) ? 1 : -1)
mentioned_jid = []
let board = '*🔥Ranking dos melhores players🔥*\n\n'
try {
for (let i = 0; i < 3; i++) {
if (i == 0) {board += `${i + 1}º 🥇 : @${tictactoe[i].id.split('@')[0]}\n➻❥ *Ganhou: ${tictactoe[i].wins}*\n➻❥ *Perdeu: ${tictactoe[i].defeats}*\n➻❥ *Empates: ${tictactoe[i].ties}*\n*➻❥ Pontuação: ${tictactoe[i].points}*\n\n`
} else if (i == 1) {board += `${i + 1}º 🥈 : @${tictactoe[i].id.split('@')[0]}\n➻❥ *Ganhou: ${tictactoe[i].wins}*\n➻❥ *Perdeu: ${tictactoe[i].defeats}*\n➻❥ *Empates: ${tictactoe[i].ties}*\n*➻❥ Pontuação: ${tictactoe[i].points}*\n\n`
} else if (i == 2) {board += `${i + 1}º 🥉 : @${tictactoe[i].id.split('@')[0]}\n➻❥ *Ganhou: ${tictactoe[i].wins}*\n➻❥ *Perdeu: ${tictactoe[i].defeats}*\n➻❥ *Empates: ${tictactoe[i].ties}*\n*➻❥ Pontuação: ${tictactoe[i].points}*\n\n`
}
mentioned_jid.push(tictactoe[i].id)
} 
mentions(board, mentioned_jid, true)
} catch (err) {
console.log(err)
await dens.sendMessage(from, {text: `*É necessário 3 jogadores para se construir um ranking*`}, {quoted: info})
}
break

case 'jogar':
tttset.playertest = sender
if (!isGroup) {
reply(ptbr.group())
} else if (tttset.tttstatus == "off") {
reply(`*O jogo não foi iniciado*\n*Digite ${prefix}ttt <dificukdade> para iniciar*`)
} else if (tttset.player != tttset.playertest) {
reply(`*O jogo já foi iniciado por outro player, aguarde ele terminar...*`)
} else if (tttset.tttantibug == "on") {
reply(`Aguarde a ação anterior ser concluída...`)
} else {
tttset.tttantibug = "on"
const coordX = args
if (coordX != 'a1' && coordX != 'a2' && coordX != 'a3' &&
coordX != 'b1' && coordX != 'b2' && coordX != 'b3' && coordX != 'c1' && coordX != 'c2' && coordX != 'c3') {
reply(`*Diga a cordenada*\nExemplo: ${prefix}coord a1`)
tttset.tttantibug = "off"
} else {
switch (args[0]) {
  
case 'a1':
if (esp.a1 != "🔲") {
reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.a1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break

case 'a2':
if (esp.a2 != "🔲") {
reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.a2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break

case 'a3':
if (esp.a3 != "🔲") {
reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.a3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break

case 'b1':
if (esp.b1 != "🔲") {
reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.b1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
                
case 'b2':
if (esp.b2 != "🔲") {
reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.b2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
                
case 'b3':
if (esp.b3 != "🔲") {
reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.b3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
                
case 'c1':
if (esp.c1 != "🔲") {
 reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.c1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
                
case 'c2':
if (esp.c2 != "🔲") {
reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.c2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
                
case 'c3':
if (esp.c3 != "🔲") {
reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.c3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break

}
tttset.reActivate1 = "on"
reply(`🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`)
var randomTTTXP = 0
if (WinnerX()) {
if (isCmd) {
switch (tttset.tttdifficulty) {
              
case "EASY":
randomTTTXP = Math.floor(Math.random() * 25) + 25
addLevelingXp(tttset.player, randomTTTXP)
break

case "NORMAL":
randomTTTXP = Math.floor(Math.random() * 75) + 75
addLevelingXp(tttset.player, randomTTTXP)
break

case "HARD":
randomTTTXP = Math.floor(Math.random() * 200) + 200
addLevelingXp(tttset.player, randomTTTXP)
break
                
case "IMPOSSIBLE":
randomTTTXP = Math.floor(Math.random() * 1000) + 1000
addLevelingXp(tttset.player, randomTTTXP)
break

}
dens.sendMessage(from, {text: `*VOCÊ VENCEU, PARABENS*\n\n *VOCÊ GANHOU ${randomTTTXP}XP*`})
} else {
dens.sendMessage(from,{text: `*VOCÊ VENCEU, PARABENS*`},)
}
const currentTTTwins = getTTTwins(tttset.player)
const checkTTTIdWin = getTTTId(tttset.player)
if (currentTTTwins === undefined && checkTTTIdWin === undefined) addTTTId(tttset.player)
addTTTwin(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (WinnerO()) {
if (isCmd) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = 0 - (Math.floor(Math.random() * 200) + 200)
addLevelingXp(tttset.player, randomTTTXP)
break
					
case "NORMAL":
randomTTTXP = 0 - (Math.floor(Math.random() * 75) + 75)
addLevelingXp(tttset.player, randomTTTXP)
break
					
case "HARD":
randomTTTXP = 0 - (Math.floor(Math.random() * 25) + 25)
addLevelingXp(tttset.player, randomTTTXP)
break
					
case "IMPOSSIBLE":
randomTTTXP = 0
addLevelingXp(tttset.player, randomTTTXP)
break

}	
dens.sendMessage(from, {text: `*Você perdeu*\n\n AGORA VC PAGARÁ: ${randomTTTXP}XP`})
	
} else {
dens.sendMessage(from, {text: `*Você perdeu*`})
}
const currentTTTdefeats = getTTTdefeats(tttset.player)
const checkTTTIdDefeat = getTTTId(tttset.player)
if (currentTTTdefeats === undefined && checkTTTIdDefeat === undefined) addTTTId(tttset.player)
addTTTdefeat(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (Tie()) {
if (isCmd) {
dens.sendMessage(from, {text: `*JOGO EMPATADO, NÃO HOUVE PERDAR*`})
} else {
dens.sendMessage(from, {text: `*JOGO, EMPATADO, TENHA UM BOM DIA*`})
}
const currentTTTties = getTTTties(tttset.player)
const checkTTTIdTie = getTTTId(tttset.player)
if (currentTTTties === undefined && checkTTTIdTie === undefined) addTTTId(tttset.player)
addTTTtie(tttset.player, 1)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
}
tttset.tttantibug = "off"
}
}
break
				
case 'ttt':
const limitrl = getLimit(sender, daily)
if (!isGroup) {
sendBtext(from, enviar.espere, `@~ usuário: ${pushname}\n@~ Grupo: ${groupName}\n@~ cmd: ${prefix + command}`, [{buttonId: `nd`, buttonText: {displayText: `Obg ${NomeDoBot}`}, type: 1}], info)
} else if (tttset.tttstatus == "on") {
reply(`Alguém já está jogando no momento\nPor favor aguarde um instante...`)
} else if (tttset.waitingTime == "on") {
reply(`Alguém jogou recentemente\nPor favor aguarde o tempo de espera...`)
} else if (args == 0 || (args != 'easy' && args != 'Easy' && args != 'EASY' && args != 'normal' && args != 'Normal' && args != 'NORMAL' && args != 'hard' && args != 'Hard' && args != 'HARD'&& args != 'impossible'&& args != 'Impossible' && args != 'IMPOSSIBLE')) {
reply(`Defina a dificuldade\nEx.: ${prefix}ttt easy\n\nDificuldades: easy, normal, hard e impossible`)
} else {
tttset.tttstatus = "on"
tttset.player = sender
tttset.playerName = pushname
tttset.mentionPlayer = info
tttset.local = from
if (args == 'easy' || args == 'Easy' || args == 'EASY') {
tttset.tttdifficulty = "EASY"
} else if (args == 'normal' || args == 'Normal' || args == 'NORMAL') {
tttset.tttdifficulty = "NORMAL"
} else if (args == 'hard' || args == 'Hard' || args == 'HARD') {
tttset.tttdifficulty = "HARD"
} else if (args == 'impossible' || args == 'Impossible' || args == 'IMPOSSIBLE') {
tttset.tttdifficulty = "IMPOSSIBLE"
}
const randomStartIA = Math.floor(Math.random() * 3)
if (randomStartIA == 0) {
IA()
tttset.reActivate1 = "on"	
}
blat =  `🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`
dens.sendMessage(from, {text: `${blat}\n\nCaso não saiba como jogar digite: ${prefix}ttthelp`})
setTimeout( () => {
tttset.waitingTime = "off"
tttset.autoEndTime = "on"
}, 12000) //2 minutos
addLimit(sender, daily)
}
break

case 'ttthelp':
dens.sendMessage(from, {text: ttthelp(prefix)})
break

//==========(MARCAR)==========\\

case 'togif':
if (!isQuotedSticker) return reply('*[ ❗ ] Marque a figurinha animada!*')
if ((isMedia && !info.message.videoMessage || isQuotedSticker) && args.length == 0) {
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
reply('*「 ❗ 」 Aguarde, convertendo a figu em gif...*')
a = await webp_mp4(buff)
mp4 = await getBuffer(a)
dens.sendMessage(from, {video: mp4, gifPlayback: true, filename: `stick.gif`}, {quoted: info})
fs.unlinkSync(buff)
}
break

case 'toimg': {
if (!isQuotedSticker) return reply('❌ adesivo de resposta um ❌')
reply("Processando dados...") 
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
let buttonMessage = {
image: buff,
footer: ``,
headerType: 4,
contextInfo:{externalAdReply:{
title: ``,
body: `${NomeDoBot}`,
showAdAttribution: true,
thumbnail: fs.readFileSync("./logos/logo2.jpg"),
mediaType:2,
sourceUrl: `https://chat.whatsapp.com/HsjauxsK0QxDCbZ5GEQOip`,
mediaUrl: `https://chat.whatsapp.com/HsjauxsK0QxDCbZ5GEQOip`
}}
}
dens.sendMessage(from, buttonMessage, { quoted: selo }).catch(e => {
console.log(e);
reply('ERROR!!')
})
}
break

case 'tomp3':
if (!isQuotedVideo) return reply('Marque o video pfv')
sendBtext(from, enviar.espere, `@~ usuário: ${pushname}\n@~ Grupo: ${groupName}\n@~ cmd: ${prefix + command}`, [{buttonId: `nd`, buttonText: {displayText: `Obg ${NomeDoBot}`}, type: 1}], info)
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane 
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => { 
fs.unlinkSync(media)
if (err) return reply('❌ Falha ao converter vídeo para mp3 ❌')
buffer = fs.readFileSync(ran)
dens.sendMessage(from, {audio: buffer, mimetype: 'audio/mp4'}, {quoted: info})
fs.unlinkSync(ran)
})
break

case 'rename':
if (!isQuotedSticker) return reply('Marque uma figurinha...')
encmediats = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
var kls = q
var pack = kls.split("/")[0];
var author2 = kls.split("/")[1];
if (!q) return reply('*E o autor e o nome do pacote?*')
if (!pack) return reply(`*por favor escreve o formato certo: ${prefix + command} sad/bla*`)
if (!author2) return reply(`*por favor escreve o formato certo: ${prefix + command} sad/dms*`)
sendBtext(from, enviar.espere, `@~ usuário: ${pushname}\n@~ Grupo: ${groupName}\n@~ cmd: ${prefix + command}`, [{buttonId: `nd`, buttonText: {displayText: `Obg ${NomeDoBot}`}, type: 1}], info)
bas64 = `data:image/jpeg;base64,${encmediats.toString('base64')}`
var mantap = await convertSticker(bas64, `${author2}`, `${pack}`)
var sti = new Buffer.from(mantap, 'base64');
dens.sendMessage(from, {sticker: sti, contextInfo: { externalAdReply:{title: `${pack}|${author2}`,body:"", previewType:"PHOTO",thumbnail: sti}}}, {quoted: info})
.catch((err) => {
reply(`❎ Error, tenta mais tarde`); 
})
break

//=======(FIM-EFEITOS-MARCAR)=========\\

default:

//==========================\\

if(isBotGroupAdmins && isAntiCtt && type === 'contactMessage') {
if(isGroupAdmins) return dens.sendMessage(from, {text: 'Contato detectado, você é adm, então não irei ti remover'}, {quoted: info})
await dens.sendMessage(from, {text: 'opa fechado pelo bot detectado trava contato ou vcard, caso for um engano, fale com algum adm.'}, {quoted: selo})
await dens.groupSettingUpdate(from, 'announcement')
await sleep(2000);
Kic = `${sender.split("@")[0]}@s.whatsapp.net`
dens.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(2000);
await dens.sendMessage(from, { text: 'o grupo sera limpado para evitar fazer efeito da trava'}, {quoted:selo})
await sleep(3000);
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
dens.sendMessage(from, {text: clear}, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
await sleep(3000);
await dens.sendMessage(from, { text: 'agora enviarei destrava aguarde '}, {quoted:selo})
await sleep(2000);
await dens.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await dens.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await dens.sendMessage(from, { text: 'reporte ao adm o ocorrido '}, {quoted:selo})
await sleep(5000);
await dens.groupSettingUpdate(from, 'not_announcement')
await sleep(2000);
await dens.sendMessage(from, { text: 'Aberto nao marque a trava ou levara ban✅'}, {quoted:selo})
}

/////////////////////

if(isBotGroupAdmins && isAntiCtt && type === 'contactsArrayMessage') {
if(isGroupAdmins) return dens.sendMessage(from, {text: 'Contato detectado, você é adm, então não irei ti remover'}, {quoted: info})
await dens.sendMessage(from, {text: 'opa fechado pelo bot detectado trava contatos'}, {quoted: selo})
await dens.groupSettingUpdate(from, 'announcement')
await sleep(2000);
Kic = `${sender.split("@")[0]}@s.whatsapp.net`
dens.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(2000);
await dens.sendMessage(from, { text: 'o grupo sera limpado para evitar fazer efeito da trava'}, {quoted:selo})
await sleep(3000);
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
dens.sendMessage(from, {text: clear}, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
await sleep(3000);
await dens.sendMessage(from, { text: 'agora enviarei destrava aguarde '}, {quoted:selo})
await sleep(2000);
await dens.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await dens.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await dens.sendMessage(from, { text: 'reporte ao adm o ocorrido '}, {quoted:selo})
await sleep(5000);
await dens.groupSettingUpdate(from, 'not_announcement')
await sleep(2000);
await dens.sendMessage(from, { text: 'grupo aberto nao marque a trava ou levara ban✅'}, {quoted:selo})
}

////////////////////

if(isBotGroupAdmins && Antiloc && type === 'locationMessage') {
if(isGroupAdmins) return dens.sendMessage(from, {text: 'Localização detectada, você é adm, então não irei ti remover'}, {quoted: info})
await dens.sendMessage(from, {text: 'opa fechado pelo bot, detectado trava Localização ou localização comum, caso for um engano, fale com algum adm.'}, {quoted: selo})
await dens.groupSettingUpdate(from, 'announcement')
await sleep(2000);
Kic = `${sender.split("@")[0]}@s.whatsapp.net`
dens.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(2000);
await dens.sendMessage(from, { text: 'o grupo sera limpado para evitar fazer efeito da trava'}, {quoted:selo})
await sleep(3000);
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
dens.sendMessage(from, {text: clear}, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
await sleep(3000);
await dens.sendMessage(from, { text: 'agora enviarei destrava aguarde '}, {quoted:selo})
await sleep(2000);
await dens.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await dens.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await dens.sendMessage(from, { text: 'reporte ao adm o ocorrido '}, {quoted:selo})
await sleep(5000);
await dens.groupSettingUpdate(from, 'not_announcement')
await sleep(2000);
await dens.sendMessage(from, { text: 'grupo aberto nao marque a trava ou levara ban✅'}, {quoted:selo})
}

//////////////////////

if(isBotGroupAdmins && isAnticatalogo && type === 'productMessage') {
if(isGroupAdmins) return dens.sendMessage(from, {text: 'Catalogo detectado, você é adm, então não irei te remover'}, {quoted: info})
await dens.sendMessage(from, {text: 'opa fechado pelo bot, detectado trava Catalogo ou Catalogo comum, caso for um engano, fale com algum adm.'}, {quoted: selo})
await dens.groupSettingUpdate(from, 'announcement')
await sleep(2000);
Kic = `${sender.split("@")[0]}@s.whatsapp.net`
dens.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(2000);
await dens.sendMessage(from, { text: 'o grupo sera limpado para evitar fazer efeito da trava'}, {quoted:selo})
await sleep(3000);
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
dens.sendMessage(from, {text: clear}, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
await sleep(3000);
await dens.sendMessage(from, { text: 'agora enviarei destrava aguarde '}, {quoted:selo})
await sleep(2000);
await dens.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await dens.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await dens.sendMessage(from, { text: 'reporte ao adm o ocorrido '}, {quoted:selo})
await sleep(5000);
await dens.groupSettingUpdate(from, 'not_announcement')
await sleep(2000);
await dens.sendMessage(from, { text: ' grupo aberto nao marque a trava ou levara ban✅'}, {quoted:selo})
}

///////////

if (budy.length >= limitefl) { 
if(!isAntiFlood) return
if(isAntiFlood && isGroupAdmins && isBotGroupAdmins && isPremium) {
if(isBot) return 
reply('*Link detectado, porém usuário é admin*')
} else {
if(SoDono) return
if(isGroupAdmins) return
if(isPremium) return
var Kic = `${sender.split("@")[0]}@s.whatsapp.net`  
setTimeout( () => {
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe && !isGroupAdmins) return reply('acterísticas enviadas, eu vou afirma como risco de ser trava, por esse motivo você será removido.')
console.log(color.green('deram Spam'))
}, 100)
setTimeout( () => {
dens.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
setTimeout( () => {
}, 0)
}
}

///////COMANDOS SEM PREFIXO////////

switch(testat){
}

if (budy.toLowerCase().includes("destiny")){
if (info.key.fromMe) return
anu = await getBuffer('https://telegra.ph/file/8150a1c8fb64406e5919a.mp4')
dens.sendMessage(from, {video: anu, mimetype: 'video/mp4', caption: `Olá maestro prazer, sou a ${NomeDoBot}-bot, pra utilizar meus comandos aperte o botão logo em baixo...💬`, templateButtons: [{index: 2, quickReplyButton: {displayText: `menu`, id: `${prefix}menu`}}]}, {quoted: info})
}

if (budy.toLowerCase().includes("nero")){
if (info.key.fromMe) return
anu = await getBuffer('https://telegra.ph/file/8150a1c8fb64406e5919a.mp4')
dens.sendMessage(from, {video: anu, mimetype: 'video/mp4', caption: `Olá maestro prazer, sou a ${NomeDoBot}-bot, pra utilizar meus comandos aperte o botão logo em baixo...💬`, templateButtons: [{index: 2, quickReplyButton: {displayText: `menu`, id: `${prefix}menu`}}]}, {quoted: info})
}

//===========(ANTILINK)==============\\

switch(ants){
} 

 //======[--ANTI PALAVRÃO --]=======\\
 
if (isGroup && isPalavrao) { 
 if (palavra.includes(budy)) {
 if (!isGroupAdmins) {
 dens.sendMessage(from, {text: `[🗿] SEM XINGAMENTOS [🗿]`}, {quoted : info})   
setTimeout( () => {
dens.groupParticipantsUpdate(from, [sender], 'remove')
}, 2000)
reply("2")
setTimeout( () => {
reply("1")
}, 1000)
setTimeout( () => {
dens.sendMessage(from, {text: `[🗣️] ANTI PALAVRÃO [🗣️]*\nVocê será banido do gp, Na proxima tenha ética ao falar no grupo‼️`}, {quoted : info}).catch(e => {
dens.sendMessage(from, {text: `infelizmente, não sou um administrador desse grupo, então não posso te remover o indivíduo [ 🤬 ]`}, {quoted : info})
})       							
}, 0)
} else {
return reply(`somente o ${pushname} tem permissão`)
}
}
}

//============(SIMIH-2)=============\\

if (isSimi2 && !isCmd && isGroup) {
if (type == 'conversation' || type == 'extendedTextMessage') {
if (info.key.fromMe) return
if (type == 'extendedTextMessage' && prefix.includes(info.message.extendedTextMessage.contextInfo.quotedMessage.conversation[0])) return
insert(type, info)
const sami = await response(budy)

if (sami) dens.sendMessage(from, {text: sami, thumbnail: fs.readFileSync('./logos/logo2.jpg', 'base64')}, {quoted: info});
}
}

 //=========(SIMIH-1)=============\\
    
if (isGroup && isSimi && budy != undefined) {
if(type == 'imageMessage') return 
if(type == 'audioMessage') return 
if(type == 'stickerMessage') return   
if(info.key.fromMe) return 
console.log(budy)
muehe = await simih(budy)
console.log(muehe)
reply(muehe)
}

//=================================\\

hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
if (isCmd && lista.ativada == true){
lista.ativada = false
setTimeout( () => {
lista.ativada = true
}, 20000)
uptime = process.uptime()
try {
ppimg = await dens.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
if(isCmd){
destiny = `
┌┤
││⎔ suário: ${pushname}
││⎔ Comando Inexistente.
││⎔ Data: ${date}
││⎔ Hora: ${hora2}
└┤`
daftarimg = await getBuffer(ppimg)
let buttons = [
{
buttonId: `${prefix}lista`, 
buttonText: {
displayText: 'MENU COMPLETO'
}, type: 1},
]
let buttonMessage = {
image: { url: ppimg},
caption: destiny,
footer: `${NomeDoBot}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply: {
title: ``,
mediaType: 1,
renderLargerThumbnail: true,
showAdAttribution: true,
body: ``,
thumbnail: await getBuffer("https://telegra.ph/file/818eac82842c6fe487133.jpg"),
sourceUrl: `https://youtube.com/channel/UCx8b3HdonWrA71fDUCXLxqw`,
}}
}
await dens.sendMessage(from,
buttonMessage,
{quoted:selo}
)
}

//===================================//

}
} catch (erro) {
console.log(erro)
}
}

dens.ev.on('connection.update', (update) => {
require("./conect.js")(dens, update)
})

fs.watchFile('./index.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log(color.yellow('[@] A index foi editada, por essa questão irei reiniciar...'));
process.exit()
}
})

fs.watchFile('./dono/settings.json', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log(color.yellow('[@] settings.json foi editado, irei reiniciar...'));
process.exit()
}
})

fs.watchFile('./dono/nescessario.json', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log(color.yellow('[@] nescessario.json foi editado, irei reiniciar...'));
process.exit()
}
})

fs.watchFile('./conect.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log(color.yellow('[@] conect.js foi editado, por esse motivo irei reiniciar...'));
process.exit()
}
})
 
fs.watchFile('./consts-func.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log(color.yellow('[@] consts-func.js foi editado, por esse motivo irei reiniciar...'));
process.exit()
}
}) 
 
}
  
startAle()

module.exports = {
startAle
} 
