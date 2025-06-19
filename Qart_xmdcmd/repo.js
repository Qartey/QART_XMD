const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

zokou({ nomCom: "repo", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");
    var coms = {};
    var mode = "public";
    
    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }


    

    cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('Etc/GMT');

// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

  let infoMsg =  `
      *𝑸𝑨𝑹𝑻-𝑴𝑫 𝑩𝑶𝑻  𝑰𝑴𝑷𝑶𝑹𝑻𝑨𝑵𝑻 𝑰𝑵𝑭𝑶* 
🔰───────────────────🔰
*GITHUB LINK*
>https://github.com/Qartey/Qart_Md
🔰───────────────────🔰
*WHATSAPP CHANNEL*
> https://whatsapp.com/channel/0029VatokI45EjxufALmY32X
⁠
╭───────────────────🔰
│🔰⁠⁠⁠⁠ *RAM* : ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
│🔰⁠⁠⁠⁠ *DEV1* : *𝑸𝑨𝑹𝑻-𝑴𝑫 𝑩𝑶𝑻 *
│🔰⁠⁠⁠ *DEV2* : *𝑸𝑨𝑹𝑻-𝑴𝑫 𝑩𝑶𝑻 *
⁠⁠⁠⁠╰───────────────────🔰
  `;
    
let menuMsg = `
     *𝑸𝑨𝑹𝑻-𝑴𝑫*

🔰────────────────────🔰`;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Beltahmd*, déveloper Beltah Tech" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Beltahmd*, déveloper Beltah Tech" }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    
    repondre(infoMsg + menuMsg);
    
}

});
