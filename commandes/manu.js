const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");

const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);

zokou({ nomCom: "menu", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre, prefixe, nomAuteurMessage } = commandeOptions;
    let { cm } = require(__dirname + "/../framework/zokou");
    var coms = {};
    var mode = (s.MODE.toLowerCase() === "yes") ? "PUBLIC" : "PRIVATE";

    cm.map((com) => {
        if (!coms[com.categorie]) coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault("Africa/Nairobi");
    const temps = moment().format('HH:mm:ss');
    const date = moment().format('DD/MM/YYYY');

    let infoMsg = `┏━━━🔰 *𝑸𝑨𝑹𝑻-𝑿𝑴𝑫 𝑩𝑶𝑻 * 🔰━━━┓
┃ 🔰  𝑯𝑰, *${nomAuteurMessage}*! 🔰
┣━━━━━━━━━━━━━━━━━━━━━
┃ 💥 *𝑺𝒀𝑺𝑻𝑬𝑴 𝑰𝑵𝑭𝑶:*
┃ 💻 𝑷𝑳𝑨𝑻𝑭𝑶𝑹𝑴: *${os.platform()}*
┣━━━━━━━━━━━━━━━━━━━━━
┃ ⚙️ *𝑩𝑶𝑻 𝑺𝑻𝑨𝑻𝑼𝑺:*
┃ 🕳 𝑴𝑶𝑫𝑬: *${mode}*
┃ 🪀 𝑷𝑹𝑬𝑭𝑰𝑿: *[ ${prefixe} ]*
┃ ⏱️ 𝑻𝑰𝑴𝑬: *${temps}*
┃ 📆 𝑫𝑨𝑻𝑬: *${date}*
┣━━━━━━━━━━━━━━━━━━━━━
┃ ${readMore}
┃ ✅ *𝑪𝑶𝑴𝑴𝑨𝑵𝑫 𝑴𝑬𝑵𝑼* ✅
┣━━━━━━━━━━━━━━━━━━━━━\n`;

    let menuMsg = ``;

    for (const cat in coms) {
        menuMsg += `┣ 🌟 *${cat.toUpperCase()}* 🌟\n`;
        for (const cmd of coms[cat]) {
            menuMsg += `┃   ⚡ ${cmd}\n`;
        }
        menuMsg += `┣━━━━━━━━━━━━━━━━━━━━━\n`;
    }

    menuMsg += `┗☀ *𝑸𝑨𝑹𝑻-𝑿𝑴𝑫 𝑩𝑶𝑻 - ᴅᴇᴠᴇʟᴏᴘᴇᴅ ʙʏ ᴛʜᴇ ʙᴇsᴛ!* ☀`;

    let imageUrl = "https://files.catbox.moe/2md9k8.jpg";

    try {
        zk.sendMessage(dest, { 
            image: { url: imageUrl }, 
            caption: infoMsg + menuMsg, 
            footer: "® 𝑸𝑨𝑹𝑻-𝑿𝑴𝑫 𝑩𝑶𝑻 " 
        }, { quoted: ms });
    } catch (e) {
        console.log("🥵 Menu error: " + e);
        repondre("🥵 Menu error: " + e);
    }
});
