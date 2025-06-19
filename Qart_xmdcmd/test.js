"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "test", reaction: "🦠", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = 'Hello my name is  *𝑸𝑨𝑹𝑻-𝑴𝑫* \n\n ' + "i'm a whatsapp bot multi-device created ";
    let d = ' by *𝑸𝒂𝒓𝒕*';
    let varmess = z + d;
    var img = 'https://files.catbox.moe/2md9k8.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="☺️"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Hi my name is *Lucky V5* \n\n '+' I'm a Multi-device Whatsapp bot '
      let d =' developed by *ғʀᴇᴅɪᴇ ᴛᴇᴄʜ*'
      let varmess=z+d
      var img='https://telegra.ph/file/5a0a3058b3949a15b3501.jpg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 
