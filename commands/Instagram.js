const {cmd , Config , prefix,getBuffer,tlang,fetchJson } = require('../lib')
 const fetch = require('node-fetch')

cmd({ pattern: "insta", alias: ["ig"], desc: "download instagram videos", category: "downloader", use: "paste insta video link" }, async(Void,citel,text) => {
  if(!text) return citel.reply('Give me insta video link')
  let txt = text ? text.split(" ")[0]:'';
  if (!/instagram/.test(txt)) return await citel.reply(`Please give me valid instagram video link..!`);
  let data;
  try{
    data = await fetchJson(`(https://api.maher-zubair.tech/download/instagram?url=));
  } catch (err) {
    return citel.reply(`An error occurred: ${err.message}`);
  }
  return Void.sendMessage(citel.chat, {video : {url : data.result[0].url },caption: cap,width: 600,height: 490, },{ quoted: citel })
})
