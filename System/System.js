const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://sysagain.glitch.me/`);
}, 280000);

const Discord = require("discord.js");
const replace = require("replace"); //npm i replace
const replies = require("canvas-constructor");
const client = new Discord.Client();
const ros = require("ros");
const bot = new Discord.Client();
const hero = client;
const HypixelAPI = require("hypixel-api");
const Hypixel = new HypixelAPI("4856cc0d-031c-4b27-9d49-2edb7679853b");
const fs = require("fs");
const ms = require("ms");
const giphy = require("giphy-api")();
const googl = require("goo.gl");
const emojis = require("emojis");
const Data = require("data");
const os = require("os");
const Enmap = require("enmap");
const notes = new Enmap();
const translate = require("google-translate-api");
const UserBlocked = new Set();
const math = require("math-expression-evaluator");
const stripIndents = require("common-tags").stripIndents;
const YouTube = require("simple-youtube-api");
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const message = require("message");
const { Client, Util } = require("discord.js");
const canvas = require("canvas");
const prettyMs = require("pretty-ms");
const sqlite = require("sqlite");
const moment = require("moment");
const { getInfoFromName } = require("myanimelists");
const pretty = require("pretty-ms");
const Jimp = require("jimp");
const superagent = require("superagent");
const hastebins = require("hastebin-gen");
const jimp = require("jimp");
const convert = require("hh-mm-ss");
const db = require("quick.db");
const google = require("google-it");
const fetchVideoInfo = require("youtube-info");
const getYoutubeID = require("get-youtube-id");
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const simpleytapi = require("simple-youtube-api");
const opus = require("node-opus");
const guild = require("guild");
const ytdl = require("ytdl-core");
const figlet = require("figlet");
const botversion = require("./package.json").version;
const cmd = require("cmd");
const util = require("util");
const gif = require("gif-search");
const queue = new Map();
const rainbow = {};
const dateFormat = require("dateformat");
const { get } = require("snekfetch");
const invites = {};
const wait = require("util").promisify(setTimeout);
const cool = [];
const yt = require("ytdl-core");
const table = require("table");
const p = {};
const emoji = require("emoji");
const { User, MessageMentions } = require("discord.js"); // Disocrd Package Classes
const Canvas = require("canvas-prebuilt"); // Canvas Package for photo stuffs
const SQLite = require("sqlite"); // SQLite Package to read & write to sql files and databases
const path = require("path"); // Path Package to get paths easily
var API = require("apextab-api");
var ApexTab_API = API.Apextab_API;
var movie = require("movie-info");
var commands = {};
var commandsCheck = [];

const prefix = "-";
require("events").EventEmitter.defaultMaxListeners = 15;
var mysql = require("mysql");
var ti = {},
  spee = {},
  attentions = {};

client.on("ready", () => {

console.log("╔[═════════════════════════════════════════════════════════════════]╗");
console.log(`Successfully Linked To 《 ${client.user.username} 》`);
console.log("╚[═════════════════════════════════════════════════════════════════]╝");

});


client.on('message', async msg => {
var prefix = "-";
var user = msg.author;
if (msg.content === (prefix +'help')) {
if(!msg.channel.guild) return msg.channel.send('**This Command Is Only For Servers**').then(m => m.delete(5000));
msg.channel.send({embed: new Discord.RichEmbed()
.setAuthor(client.user.username , client.user.avatarURL)
.setThumbnail(msg.author.avatarURL)
.setTitle(`Welcome To ${msg.guild.name}`)
.setFooter(`By: ${msg.author.tag}`,msg.author.avatarURL)
.setURL('')
.setDescription(`**<a:Right:657996403490160650>| ~~HelpMenu~~ |<a:Left:657995629552992278>**

《《☾═══════════<a:nar:672077130988912668>${client.user.username}<a:nar:672077130988912668>══════════☽》》
> 
> <a:RainbowHeart:657996847125757972>**Public** | ⇏Public Commands                                                                                                                   
> 
> ☠▬▬▬▬▬▬▬✦<a:nar:672077130988912668>${client.user.username}<a:nar:672077130988912668>✧▬▬▬▬▬▬▬☠
> 
> <a:Loading:657996792264392705>**Admin** | ⇏Admin Commands                                                                                                                            
> 
> ☠▬▬▬▬▬▬▬✦<a:nar:672077130988912668>${client.user.username}<a:nar:672077130988912668>✧▬▬▬▬▬▬▬☠                                                                                             
> 
> <a:Warn:657996732654813214>**Protection** | ⇏Protection Commands                                                                                                             
> 
> ☠▬▬▬▬▬▬▬✦<a:nar:672077130988912668>${client.user.username}<a:nar:672077130988912668>✧▬▬▬▬▬▬▬☠                                                                                            
> 
> <a:music:662423335380189184>**Music** | ⇏Music Commands                                                                                                               
> 
> ☠▬▬▬▬▬▬▬✦<a:nar:672077130988912668>${client.user.username}<a:nar:672077130988912668>✧▬▬▬▬▬▬▬☠                                                                                              
> 
> <a:blackheart:661523838718312448>**Games** | ⇏Games Commands
> 
> ☠▬▬▬▬▬▬▬✦<a:nar:672077130988912668>${client.user.username}<a:nar:672077130988912668>✧▬▬▬▬▬▬▬☠
> 
> <a:partydiscord:657997130904109081>**Profile** | ⇏Profile Commands
> 
> ☠▬▬▬▬▬▬▬✦<a:nar:672077130988912668>${client.user.username}<a:nar:672077130988912668>✧▬▬▬▬▬▬▬☠
> 
> <a:give:656778370541027331>**Giveaway** | ⇏Giveaway commands
> 
《《☾═══════════<a:nar:672077130988912668>${client.user.username}<a:nar:672077130988912668>══════════☽》》`)
 
 .setTimestamp()
}).then(zg => {
zg.react('657996847125757972').then(r=>{
zg.react('657996792264392705').then(r=>{
zg.react('657996732654813214').then(r=>{
zg.react('662423335380189184').then(r=>{
zg.react('661523838718312448').then(r=>{
zg.react('657997130904109081').then(r=>{
zg.react('656778370541027331').then(r=>{
zg.react('658743450107117568').then(r=>{
var one = (reaction, user) => reaction.emoji.id === '657996847125757972' && user.id === msg.author.id;
var two = (reaction, user) => reaction.emoji.id === '657996792264392705' && user.id === msg.author.id;
var three = (reaction, user) => reaction.emoji.id === '657996732654813214' && user.id === msg.author.id;
var four = (reaction, user) => reaction.emoji.id === '662423335380189184' && user.id === msg.author.id;
var five = (reaction, user) => reaction.emoji.id === '661523838718312448' && user.id === msg.author.id;
var six = (reaction, user) => reaction.emoji.id === '657997130904109081' && user.id === msg.author.id;
var seven = (reaction, user) => reaction.emoji.id === '656778370541027331' && user.id === msg.author.id;
var eight = (reaction, user) => reaction.emoji.id === '658743450107117568' && user.id === msg.author.id; 
var one = zg.createReactionCollector(one, { maxMatches:1 , time: 60000 , });
var two = zg.createReactionCollector(two, { maxMatches:1 , time: 60000 , });
var three = zg.createReactionCollector(three, { maxMatches:1 , time: 60000 , });
var four = zg.createReactionCollector(four, { maxMatches:1 , time: 60000 , });
var five = zg.createReactionCollector(five, { maxMatches:1 , time: 60000 , });
var six = zg.createReactionCollector(six, { maxMatches:1 , time: 60000 , });
var seven = zg.createReactionCollector(seven, { maxMatches:1 , time: 60000 , });
  var eight = zg.createReactionCollector(eight, { maxMatches:1 , time: 60000 , });
      
 
one.on("collect", r => {
zg.edit({embed: new Discord.RichEmbed()
.setAuthor(client.user.username , client.user.avatarURL)
.setThumbnail(msg.author.avatarURL)
.setTitle(`Welcome To ${msg.guild.name}`)
.setFooter(`By: ${msg.author.tag}`,msg.author.avatarURL)
.setURL('')
.setDescription(`✧▬▬▬▬▬▬✦Public<a:RainbowHeart:657996847125757972>✧▬▬▬▬▬▬✦
> <a:RainbowHeart:657996847125757972>⇏${prefix}Avatar===>Shows You Current Avatar
> <a:RainbowHeart:657996847125757972>⇏${prefix}Link===>Creating Unlimited Uses Link For Server
> <a:RainbowHeart:657996847125757972>⇏${prefix}Marry===>Offer To Marry A Girl
> <a:RainbowHeart:657996847125757972>⇏${prefix}Love===>Send A Love For Your SweetHeart
> <a:RainbowHeart:657996847125757972>⇏${prefix}User===>Shows Your Discord Info
> <a:RainbowHeart:657996847125757972>⇏${prefix}Boom===>Bombing Front Of Your Friend
> <a:RainbowHeart:657996847125757972>⇏${prefix}Hug===>Give Your Friend A Hug
> <a:RainbowHeart:657996847125757972>⇏${prefix}Kiss===>To Kiss Your Girl Friend
> <a:RainbowHeart:657996847125757972>⇏${prefix}Slap===>Slap Your Friend About His Fault
> <a:RainbowHeart:657996847125757972>⇏${prefix}Report===>Report A Member Profile
> <a:RainbowHeart:657996847125757972>⇏${prefix}Bot===>Shows Bot Info
> <a:RainbowHeart:657996847125757972>⇏${prefix}Server===>Shows Server Info
> <a:RainbowHeart:657996847125757972>⇏${prefix}Color===>To Chaneg Your Color
> <a:RainbowHeart:657996847125757972>⇏${prefix}Colors===>To See Color List

✧▬▬▬▬▬▬✦${client.user.username}<a:RainbowHeart:657996847125757972>✧▬▬▬▬▬▬✦`)
.setTimestamp()
});
})
two.on("collect", r => {
zg.edit({embed: new Discord.RichEmbed()
.setAuthor(client.user.username , client.user.avatarURL)
.setThumbnail(msg.author.avatarURL)
.setTitle(`Welcome To ${msg.guild.name}`)
.setFooter(`By: ${msg.author.tag}`,msg.author.avatarURL)
.setURL('')
.setDescription(`✧▬▬▬▬▬▬✦Admin<a:Loading:657996792264392705>✧▬▬▬▬▬▬✦
> <a:Loading:657996792264392705>⇏${prefix}Ping===>Shows The Bot Crunntly Ping
> <a:Loading:657996792264392705>⇏${prefix}Mc===>Mute The Selected Channel
> <a:Loading:657996792264392705>⇏${prefix}Unmc===>Unmute The Selected Channel
> <a:Loading:657996792264392705>⇏${prefix}Savatar===>Shows Server Avatar
> <a:Loading:657996792264392705>⇏${prefix}Unpan===>Unban Selected Member
> <a:Loading:657996792264392705>⇏${prefix}Unbanall===>Unban All Members
> <a:Loading:657996792264392705>⇏${prefix}Clear===>Clearing The Chat
> <a:Loading:657996792264392705>⇏${prefix}Rules===>Shows All The Server Rules
> <a:Loading:657996792264392705>⇏${prefix}Obc===>Sent A BroadCast For All Serer Members
> <a:Loading:657996792264392705>⇏${prefix}Bans===>Shows All Server Bans
> <a:Loading:657996792264392705>⇏${prefix}Topinv===>Shows Top Invite Members
> <a:Loading:657996792264392705>⇏${prefix}Kick===>Kick Mentiond Member
> <a:Loading:657996792264392705>⇏${prefix}Ban===>Ban Mentiond Member
> <a:Loading:657996792264392705>⇏${prefix}Mute===>Mute The Specified Member
> <a:Loading:657996792264392705>⇏${prefix}Unmute===>Unmute The Specified Member
> <a:Loading:657996792264392705>⇏${prefix}mc===>Mute The Chat
> <a:Loading:657996792264392705>⇏${prefix}unmc===>UnMute Chat
> <a:Loading:657996792264392705>⇏${prefix}setMedia===>To Set Media Channel
> <a:Loading:657996792264392705>⇏${prefix}toggleMedia===>to Turn On Media Or Off
> <a:Loading:657996792264392705>⇏${prefix}infoMedia===>Shows Info About Media Code
> <a:Loading:657996792264392705>⇏${prefix}Warn===>The Warn Number 3 Ban The Member
✧▬▬▬▬▬▬✦${client.user.username}<a:Loading:657996792264392705>✧▬▬▬▬▬▬✦`)
.setTimestamp()
});
})
three.on("collect", r => {
zg.edit({embed: new Discord.RichEmbed ()
.setAuthor(client.user.username , client.user.avatarURL)
.setThumbnail(msg.author.avatarURL)
.setTitle(`Welcome To ${msg.guild.name}`)
.setFooter(`By: ${msg.author.tag}`,msg.author.avatarURL)
.setURL('')
.setDescription(`✧▬▬▬▬▬▬✦Protection<a:Warn:657996732654813214>✧▬▬▬▬▬▬✦
> <a:Warn:657996732654813214>⇏${prefix}settings limitsban===>LimitsBan
> <a:Warn:657996732654813214>⇏${prefix}settings limitskick===>LimitsKick
> <a:Warn:657996732654813214>⇏${prefix}settings limitsroled===>LimitsRoleDelete
> <a:Warn:657996732654813214>⇏${prefix}settings limitsrolec===>LimitsRoleCreate
> <a:Warn:657996732654813214>⇏${prefix}settings limitschanned===>LimitsChannelDelete
> <a:Warn:657996732654813214>⇏${prefix}Antibots On
> <a:Warn:657996732654813214>⇏${prefix}Antibots Off
> <a:Warn:657996732654813214>⇏${prefix}antispread on===>Prevent Links From Share
✧▬▬▬▬▬▬✦${client.user.username}<a:Warn:657996732654813214>✧▬▬▬▬▬▬✦
`)
 
.setTimestamp()
}); 
})
four.on("collect", r => {
zg.edit({embed: new Discord.RichEmbed()
.setAuthor(client.user.username , client.user.avatarURL)
.setThumbnail(msg.author.avatarURL)
.setTitle(`Welcome To ${msg.guild.name}`)
.setFooter(`By: ${msg.author.tag}`,msg.author.avatarURL)
.setURL('')
.setDescription(`✧▬▬▬▬▬▬✦Music<a:music:662423335380189184>✧▬▬▬▬▬▬✦
> <a:music:662423335380189184>⇏${prefix}Play===>Start Playing Music
> <a:music:662423335380189184>⇏${prefix}Skip===>Skips The Current Song
> <a:music:662423335380189184>⇏${prefix}Stop===>Stop The Current Song
> <a:music:662423335380189184>⇏${prefix}Pause===>Pause The Current Song
> <a:music:662423335380189184>⇏${prefix}Resume===>Resuming The Current Song
> <a:music:662423335380189184>⇏${prefix}Np===>Show The Song You Are Currently Playing
> <a:music:662423335380189184>⇏${prefix}Vol===>Change The Sound Volume From 10 To 150
✧▬▬▬▬▬▬✦${client.user.username}<a:music:662423335380189184>✧▬▬▬▬▬▬✦`)
.setTimestamp()
});
})
five.on("collect", r => {
zg.edit({embed: new Discord.RichEmbed()
.setAuthor(client.user.username , client.user.avatarURL)
.setThumbnail(msg.author.avatarURL)
.setTitle(`Welcome To ${msg.guild.name}`)
.setFooter(`By: ${msg.author.tag}`,msg.author.avatarURL)
.setURL('')
.setDescription(`✧▬▬▬▬▬▬✦Games<a:blackheart:661523838718312448>✧▬▬▬▬▬▬✦
> <a:blackheart:661523838718312448>⇏${prefix}Coin===>ملك او كتابه
✧▬▬▬▬▬▬✦${client.user.username}<a:blackheart:661523838718312448>✧▬▬▬▬▬▬✦`)
.setTimestamp()
});
})
six.on("collect", r => {
zg.edit({embed: new Discord.RichEmbed()
.setAuthor(client.user.username , client.user.avatarURL)
.setThumbnail(msg.author.avatarURL)
.setTitle(`Welcome To ${msg.guild.name}`)
.setFooter(`By: ${msg.author.tag}`,msg.author.avatarURL)
.setURL('')
.setDescription(`✧▬▬▬▬▬▬✦Profile<a:partydiscord:657997130904109081>✧▬▬▬▬▬▬✦
> <a:partydiscord:657997130904109081>⇏${prefix}Profile===>To See Your Profile
> <a:partydiscord:657997130904109081>⇏${prefix}Level===>To See Your Level
> <a:partydiscord:657997130904109081>⇏${prefix}Rep+UserMention===>To Rep Your Friend
> <a:partydiscord:657997130904109081>⇏${prefix}Rank===>To Show You Rank
> <a:partydiscord:657997130904109081>⇏${prefix}Credits===>Shows Your Credits Ratio
> <a:partydiscord:657997130904109081>⇏${prefix}Daily===>To Get Your Daily Credits
> <a:partydiscord:657997130904109081>⇏${prefix}ID===>Shows Your Discord ID
✧▬▬▬▬▬▬✦${client.user.username}<a:partydiscord:657997130904109081>✧▬▬▬▬▬▬✦`)
.setTimestamp()
});
})
seven.on("collect", r => {
zg.edit({embed: new Discord.RichEmbed()
.setAuthor(client.user.username , client.user.avatarURL)
.setThumbnail(msg.author.avatarURL)
.setTitle(`Welcome To ${msg.guild.name}`)
.setFooter(`By: ${msg.author.tag}`,msg.author.avatarURL)
.setURL('')
.setDescription(`✧▬▬▬▬▬▬✦Giveaway<a:give:656778370541027331>✧▬▬▬▬▬▬✦
> <a:give:656778370541027331>⇏${prefix}Gstart===>Start Making A Giveaway
> <a:give:656778370541027331>⇏${prefix}Groll===>Rolling The Last Giveaway
> <a:give:656778370541027331>⇏${prefix}Gend===>End The Giveaway
✧▬▬▬▬▬▬✦${client.user.username}<a:give:656778370541027331>✧▬▬▬▬▬▬✦`)
.setTimestamp()
});
})           
eight.on("collect", r => {
zg.delete();
msg.delete();
}).then(msg => msg.delete(15000));
})
})
})
})
})
})
})
})
})
}
});


client.on("ready", () => {
  client.user.setStatus("idle");
});




client.on("message", message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(" ").slice(1);
  var argresult = args.join(" ");
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + "avatar")) {
    var mentiooned = message.mentions.users.first();

    var doma;
    if (mentiooned) {
      var doma = mentiooned;
    } else {
      var doma = message.author;
    }

    let embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setAuthor("Avatar Link")
      .setTitle("ClickHere")
      .setURL(doma.avatarURL)
      .setImage(doma.avatarURL)
      .setFooter(`${client.user.username}`, client.user.avatarURL);
    message.channel.send(embed);
  }
});

client.on("message", function(message) {
  let prefix = "-";
  let args = message.content
    .split(" ")
    .slice(1)
    .join(" ");
  if (message.content.startsWith(prefix + "say")) {
    message.delete(0);
    if (!args) return;
    message.channel.send(`**${args}**`);
  }
});


client.on("message", message => {
  if (message.author.bot) return;
  if (message.content === "السلام عليكم") {
    message.channel.send("<a:hello:657537636461707274>عليكم السلام يلا بره ");
    message.channel.sendFile(
      "https://cdn.discordapp.com/attachments/659816483760635934/663820140659474443/images.jpg"
    );
  }
});
client.on("message", message => {
  if (message.content.startsWith(prefix + "add")) {
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args)
      return message.channel.send(
        "**Please type the emoji ID after the command!**"
      );
    if (args.length < "18" || args.length > "18" || isNaN(args))
      return message.channel.send(`**This emoji Can't be Found :x:**`);
    message.guild
      .createEmoji(`https://cdn.discordapp.com/emojis/${args}.png`, `${args}`)
      .catch(mstry => {
        return message.channel.send(`**This emoji Can't be Found :x:**`);
      });
    message.channel.send(`**Successfully Added The Emoji ✅**`);
  }
});


client.on('ready', () => {
    client.user.setStatus('available')
    client.user.setPresence({
        game: {
          name:  `BrokenHeart💔`,
            type: "WATCHING",
        }
    });
});
//https://discordapp.com

let anti = JSON.parse(fs.readFileSync("./antigreff.json", "UTF8"));
let config = JSON.parse(fs.readFileSync("./config.json", "UTF8"));
client.on("message", message => {
  if (!message.channel.guild) return;
  let user = anti[message.guild.id + message.author.id];
  let num = message.content
    .split(" ")
    .slice(2)
    .join(" ");
  if (!anti[message.guild.id + message.author.id])
    anti[message.guild.id + message.author.id] = {
      actions: 0
    };
  if (!config[message.guild.id])
    config[message.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30
    };
  if (message.content.startsWith(prefix + "settings limits")) {
    if (!message.member.hasPermission("MANAGE_GUILD")) return;
    if (message.content.startsWith(prefix + "settings limitsban")) {
      if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
      if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
      config[message.guild.id].banLimit = num;
      message.channel.send(
        `**⇏ | تم التغيير اِلي : ${config[message.guild.id].banLimit} **`
      );
    }
    if (message.content.startsWith(prefix + "settings limitskick")) {
      if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
      if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
      config[message.guild.id].kickLimits = num;
      message.channel.send(
        `**⇏ | تم التغيير اِلي : ${config[message.guild.id].kickLimits}**`
      );
    }
    if (message.content.startsWith(prefix + "settings limitsroled")) {
      if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
      if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
      config[message.guild.id].roleDelLimit = num;
      message.channel.send(
        `**⇏ | تم التغيير اِلي : ${config[message.guild.id].roleDelLimit}**`
      );
    }
    if (message.content.startsWith(prefix + "settings limitsrolec")) {
      if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
      if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
      config[message.guild.id].roleCrLimits = num;
      message.channel.send(
        `**⇏ | تم التغيير اِلي : ${config[message.guild.id].roleCrLimits}**`
      );
    }
    if (message.content.startsWith(prefix + "settings limitschanned")) {
      if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
      if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
      config[message.guild.id].chaDelLimit = num;
      message.channel.send(
        `**⇏ | تم التغيير اِلي : ${config[message.guild.id].chaDelLimit}**`
      );
    }
    if (message.content.startsWith(prefix + "settings limitstime")) {
      if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
      if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
      config[message.guild.id].time = num;
      message.channel.send(
        `**⇏ | تم التغيير اِلي : ${config[message.guild.id].time}**`
      );
    }
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
});
client.on("channelDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "CHANNEL_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaDelLimit
    ) {
      channel.guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**⇏ | ${entry.username} قام بمسح الكثير من الرومات **`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("roleDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleDelLimit
    ) {
      channel.guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**⇏ | ${entry.username} قام بمسح الكثير من الرتب **`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("roleCreate", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleCrLimits
    ) {
      channel.guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**⇏ | ${entry.username} قام بأنشاء الكثير من الرتب **`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("guildBanAdd", async (guild, user) => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "MEMBER_BAN_ADD"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      channel.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.owner.send(`**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`)
        );
      anti[guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("guildKickAdd", async (guild, user) => {
  const entry1 = await channel
    .fetchAuditLogs({
      type: "MEMBER_KICK"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      channel.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.owner.send(`**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`)
        );
      anti[guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("guildMemberRemove", async member => {
  const entry1 = await member.guild
    .fetchAuditLogs()
    .then(audit => audit.entries.first());
  if (entry1.action === "MEMBER_KICK") {
    const entry2 = await member.guild
      .fetchAuditLogs({
        type: "MEMBER_KICK"
      })
      .then(audit => audit.entries.first());
    const entry = entry2.executor;
    if (!config[member.guild.id])
      config[guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
      };
    if (!anti[member.guild.id + entry.id]) {
      anti[member.guild.id + entry.id] = {
        actions: 1
      };
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = "0";
      }, config[member.guild.id].time * 1000);
    } else {
      anti[member.guild.id + entry.id].actions = Math.floor(
        anti[member.guild.id + entry.id].actions + 1
      );
      console.log("TETS");
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = "0";
      }, config[member.guild.id].time * 1000);
      if (
        anti[member.guild.id + entry.id].actions >=
        config[member.guild.id].kickLimits
      ) {
        member.members
          .get(entry.id)
          .ban()
          .catch(e =>
            member.owner.send(
              `**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`
            )
          );
        anti[member.guild.id + entry.id].actions = "0";
        fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
          e
        ) {
          if (e) throw e;
        });
        fs.writeFile(
          "./antigreff.json",
          JSON.stringify(anti, null, 2),
          function(e) {
            if (e) throw e;
          }
        );
      }
    }

    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
});

client.on("message", message => {
  if (message.content.startsWith("-link")) {
    message.channel
      .createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
      })
      .then(invite => message.author.sendMessage(invite.url));
    message.channel.send("**:link:.تم ارسال الرابط برسالة خاصة**");

    message.author.send(`**مدة الرابط : يـوم
عدد استخدامات الرابط : 100**`);
  }
});

let log = JSON.parse(fs.readFileSync("./log.json", "utf8")); // اعمل ملف باسم log.json

client.on("message", message => {
  if (!message.channel.guild) return;

  let room = message.content.split(" ").slice(1);
  let findroom = message.guild.channels.find("name", `${room}`);
  if (message.content.startsWith(prefix + "setlog")) {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!room) return message.channel.send("Please Type The Channel Name");
    if (!findroom)
      return message.channel.send("Please Type The Log Channel Name");
    let embed = new Discord.RichEmbed()
      .setTitle(
        "<a:dance:654069077593292830>| **Done The Log Code Has Been Setup**"
      )
      .addField("Channel:", `${room}`)
      .addField("Requested By:", `${message.author}`)
      .setThumbnail(message.author.avatarURL)
      .setFooter(`${client.user.username}`);
    message.channel.sendEmbed(embed);
    log[message.guild.id] = {
      channel: room,
      onoff: "On"
    };
    fs.writeFile("./log.json", JSON.stringify(log), err => {
      if (err) console.error(err);
    });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "togglelog")) {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!log[message.guild.id])
      log[message.guild.id] = {
        onoff: "Off"
      };
    if (log[message.guild.id].onoff === "Off")
      return [
        message.channel.send(`**The log Is __On__ !**`),
        (log[message.guild.id].onoff = "On")
      ];
    if (log[message.guild.id].onoff === "On")
      return [
        message.channel.send(`**The log Is __Off__ !**`),
        (log[message.guild.id].onoff = "Off")
      ];
    fs.writeFile("./log.json", JSON.stringify(log), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});
client.on("messageDelete", message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  if (!message.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
    return;
  if (!log[message.guild.id])
    log[message.guild.id] = {
      onoff: "Off"
    };
  if (log[message.guild.id].onoff === "Off") return;
  var logChannel = message.guild.channels.find(
    c => c.name === `${log[message.guild.id].channel}`
  );
  if (!logChannel) return;

  let messageDelete = new Discord.RichEmbed()
    .setTitle("**[MESSAGE DELETE]**")
    .setColor("RED")
    .setThumbnail(message.author.avatarURL)
    .setDescription(
      `**\n**:wastebasket: Successfully \`\`DELETE\`\` **MESSAGE** In ${message.channel}\n\n**Channel:** \`\`${message.channel.name}\`\` \n**Sent By:** <@${message.author.id}> \n\n**Message:**\n\n\`\`\`${message}\`\`\``
    )
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL);

  logChannel.send(messageDelete);
});
client.on("messageUpdate", (oldMessage, newMessage) => {
  if (oldMessage.author.bot) return;
  if (!oldMessage.channel.type === "dm") return;
  if (!oldMessage.guild.member(client.user).hasPermission("EMBED_LINKS"))
    return;
  if (!oldMessage.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
    return;
  if (!log[oldMessage.guild.id])
    log[oldMessage.guild.id] = {
      onoff: "Off"
    };
  if (log[oldMessage.guild.id].onoff === "Off") return;
  var logChannel = oldMessage.guild.channels.find(
    c => c.name === `${log[oldMessage.guild.id].channel}`
  );
  if (!logChannel) return;

  if (oldMessage.content.startsWith("https://")) return;

  let messageUpdate = new Discord.RichEmbed()
    .setTitle("**[MESSAGE EDIT]**")
    .setThumbnail(oldMessage.author.avatarURL)
    .setColor("BLUE")
    .setDescription(
      `**\n**:wrench: Successfully EDIT **MESSAGE** In ${oldMessage.channel}\n\n\n**Channel:** ${oldMessage.channel.name}\n\n\n**Sent By:** <@${oldMessage.author.id}> \n\n\n**Old Message:**\n\`\`\` ${oldMessage} \`\`\`\n **New Message:** \n \`\`\`${newMessage}\`\`\` `
    )
    .setTimestamp()
    .setFooter(oldMessage.guild.name, oldMessage.guild.iconURL);

  logChannel.send(messageUpdate);
});
client.on("roleCreate", role => {
  if (!role.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!role.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[role.guild.id])
    log[role.guild.id] = {
      onoff: "Off"
    };
  if (log[role.guild.id].onoff === "Off") return;
  var logChannel = role.guild.channels.find(
    c => c.name === `${log[role.guild.id].channel}`
  );
  if (!logChannel) return;

  role.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let roleCreate = new Discord.RichEmbed()
      .setTitle("**[ROLE CREATE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`CREATE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` \n**By:** <@${userID}>`
      )
      .setColor("GREEN")
      .setTimestamp()
      .setFooter(role.guild.name, role.guild.iconURL);

    logChannel.send(roleCreate);
  });
});
client.on("roleDelete", role => {
  if (!role.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!role.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[role.guild.id])
    log[role.guild.id] = {
      onoff: "Off"
    };
  if (log[role.guild.id].onoff === "Off") return;
  var logChannel = role.guild.channels.find(
    c => c.name === `${log[role.guild.id].channel}`
  );
  if (!logChannel) return;

  role.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let roleDelete = new Discord.RichEmbed()
      .setTitle("**[ROLE DELETE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`DELETE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` \n**By:** <@${userID}>`
      )
      .setColor("RED")
      .setTimestamp()
      .setFooter(role.guild.name, role.guild.iconURL);

    logChannel.send(roleDelete);
  });
});
client.on("roleUpdate", (oldRole, newRole) => {
  if (!oldRole.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!oldRole.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[oldRole.guild.id])
    log[oldRole.guild.id] = {
      onoff: "Off"
    };
  if (log[oldRole.guild.id].onoff === "Off") return;
  var logChannel = oldRole.guild.channels.find(
    c => c.name === `${log[oldRole.guild.id].channel}`
  );
  if (!logChannel) return;

  oldRole.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (oldRole.name !== newRole.name) {
      if (log[oldRole.guild.id].onoff === "Off") return;
      let roleUpdateName = new Discord.RichEmbed()
        .setTitle("**[ROLE NAME UPDATE]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`EDITED\`\` Role Name.\n\n**Old Name:** \`\`${oldRole.name}\`\`\n**New Name:** \`\`${newRole.name}\`\`\n**By:** <@${userID}>`
        )
        .setTimestamp()
        .setFooter(oldRole.guild.name, oldRole.guild.iconURL);

      logChannel.send(roleUpdateName);
    }
    if (oldRole.hexColor !== newRole.hexColor) {
      if (oldRole.hexColor === "#000000") {
        var oldColor = "`Default`";
      } else {
        var oldColor = oldRole.hexColor;
      }
      if (newRole.hexColor === "#000000") {
        var newColor = "`Default`";
      } else {
        var newColor = newRole.hexColor;
      }
      if (log[oldRole.guild.id].onoff === "Off") return;
      let roleUpdateColor = new Discord.RichEmbed()
        .setTitle("**[ROLE COLOR UPDATE]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`EDITED\`\` **${oldRole.name}** Role Color.\n\n**Old Color:** ${oldColor}\n**New Color:** ${newColor}\n**By:** <@${userID}>`
        )
        .setTimestamp()
        .setFooter(oldRole.guild.name, oldRole.guild.iconURL);

      logChannel.send(roleUpdateColor);
    }
  });
});
client.on("channelCreate", channel => {
  if (!channel.guild) return;
  if (!channel.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!channel.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[channel.guild.id])
    log[channel.guild.id] = {
      onoff: "Off"
    };
  if (log[channel.guild.id].onoff === "Off") return;
  var logChannel = channel.guild.channels.find(
    c => c.name === `${log[channel.guild.id].channel}`
  );
  if (!logChannel) return;

  if (channel.type === "text") {
    var roomType = "Text";
  } else if (channel.type === "voice") {
    var roomType = "Voice";
  } else if (channel.type === "category") {
    var roomType = "Category";
  }

  channel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let channelCreate = new Discord.RichEmbed()
      .setTitle("**[CHANNEL CREATE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`CREATE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\`\n**By:** <@${userID}>`
      )
      .setColor("GREEN")
      .setTimestamp()
      .setFooter(channel.guild.name, channel.guild.iconURL);

    logChannel.send(channelCreate);
  });
});
client.on("channelDelete", channel => {
  if (!channel.guild) return;
  if (!channel.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!channel.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[channel.guild.id])
    log[channel.guild.id] = {
      onoff: "Off"
    };
  if (log[channel.guild.id].onoff === "Off") return;
  var logChannel = channel.guild.channels.find(
    c => c.name === `${log[channel.guild.id].channel}`
  );
  if (!logChannel) return;

  if (channel.type === "text") {
    var roomType = "Text";
  } else if (channel.type === "voice") {
    var roomType = "Voice";
  } else if (channel.type === "category") {
    var roomType = "Category";
  }

  channel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let channelDelete = new Discord.RichEmbed()
      .setTitle("**[CHANNEL DELETE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`DELETE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\`\n**By:** <@${userID}>`
      )
      .setColor("RED")
      .setTimestamp()
      .setFooter(channel.guild.name, channel.guild.iconURL);

    logChannel.send(channelDelete);
  });
});
client.on("channelUpdate", (oldChannel, newChannel) => {
  if (!oldChannel.guild) return;
  if (!log[oldChannel.guild.id])
    log[oldChannel.guild.id] = {
      onoff: "Off"
    };
  if (log[oldChannel.guild.id].onoff === "Off") return;
  var logChannel = oldChannel.guild.channels.find(
    c => c.name === `${log[oldChannel.guild.id].channel}`
  );
  if (!logChannel) return;

  if (oldChannel.type === "text") {
    var channelType = "Text";
  } else if (oldChannel.type === "voice") {
    var channelType = "Voice";
  } else if (oldChannel.type === "category") {
    var channelType = "Category";
  }

  oldChannel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (oldChannel.name !== newChannel.name) {
      let newName = new Discord.RichEmbed()
        .setTitle("**[CHANNEL EDIT]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:wrench: Successfully Edited **${channelType}** Channel Name\n\n**Old Name:** \`\`${oldChannel.name}\`\`\n**New Name:** \`\`${newChannel.name}\`\`\n\n**By:** <@${userID}>`
        )
        .setTimestamp()
        .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL);

      logChannel.send(newName);
    }
    if (oldChannel.topic !== newChannel.topic) {
      if (log[oldChannel.guild.id].onoff === "Off") return;
      let newTopic = new Discord.RichEmbed()
        .setTitle("**[CHANNEL EDIT]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:wrench: Successfully Edited **${channelType}** Channel Topic\n\n**Old Topic:**\n\`\`\`${oldChannel.topic ||
            "NULL"}\`\`\`\n**New Topic:**\n\`\`\`${newChannel.topic ||
            "NULL"}\`\`\`\n**Channel:** ${oldChannel} \n**By:** <@${userID}>`
        )
        .setTimestamp()
        .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL);

      logChannel.send(newTopic);
    }
  });
});

client.on("guildBanAdd", (guild, user) => {
  if (!guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[user.guild.id])
    log[guild.guild.id] = {
      onoff: "Off"
    };
  if (log[user.guild.id].onoff === "Off") return;
  var logChannel = guild.channels.find(
    c => c.name === `${log[guild.guild.id].channel}`
  );
  if (!logChannel) return;

  guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (userID === client.user.id) return;

    let banInfo = new Discord.RichEmbed()
      .setTitle("**[BANNED]**")
      .setThumbnail(userAvatar)
      .setColor("DARK_RED")
      .setDescription(
        `**\n**:airplane: Successfully \`\`BANNED\`\` **${user.username}** From the server!\n\n**User:** <@${user.id}> \n**By:** <@${userID}>`
      )
      .setTimestamp()
      .setFooter(guild.name, guild.iconURL);

    logChannel.send(banInfo);
  });
});
client.on("guildBanRemove", (guild, user) => {
  if (!guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[guild.guild.id])
    log[guild.guild.id] = {
      onoff: "Off"
    };
  if (log[guild.guild.id].onoff === "Off") return;
  var logChannel = guild.channels.find(
    c => c.name === `${log[guild.guild.id].channel}`
  );
  if (!logChannel) return;

  guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (userID === client.user.id) return;

    let unBanInfo = new Discord.RichEmbed()
      .setTitle("**[UNBANNED]**")
      .setThumbnail(userAvatar)
      .setColor("GREEN")
      .setDescription(
        `**\n**:unlock: Successfully \`\`UNBANNED\`\` **${user.username}** From the server\n\n**User:** <@${user.id}>\n**By:** <@${userID}>`
      )
      .setTimestamp()
      .setFooter(guild.name, guild.iconURL);

    logChannel.send(unBanInfo);
  });
});

client.on("guildMemberUpdate", (oldMember, newMember) => {
  if (!oldMember.guild) return;
  if (!log[oldMember.guild.id])
    log[oldMember.guild.id] = {
      onoff: "Off"
    };
  if (log[oldMember.guild.id].onoff === "Off") return;
  var logChannel = oldMember.guild.channels.find(
    c => c.name === `${log[(oldMember, newMember.guild.id)].channel}`
  );
  if (!logChannel) return;

  oldMember.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;
    var userTag = logs.entries.first().executor.tag;

    if (oldMember.nickname !== newMember.nickname) {
      if (oldMember.nickname === null) {
        var oldNM = "`His Orginal Name`";
      } else {
        var oldNM = oldMember.nickname;
      }
      if (newMember.nickname === null) {
        var newNM = "`His Orginal Name`";
      } else {
        var newNM = newMember.nickname;
      }

      let updateNickname = new Discord.RichEmbed()
        .setTitle("**[UPDATE MEMBER NICKNAME]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:spy: Successfully \`\`CHANGE\`\` Member Nickname.\n\n**User:** ${oldMember}\n**Old Nickname:** ${oldNM}\n**New Nickname:** ${newNM}\n**By:** <@${userID}>`
        )
        .setTimestamp()
        .setFooter(oldMember.guild.name, oldMember.guild.iconURL);

      logChannel.send(updateNickname);
    }
    if (oldMember.roles.size < newMember.roles.size) {
      let role = newMember.roles
        .filter(r => !oldMember.roles.has(r.id))
        .first();
      if (!log[oldMember.guild.id])
        log[oldMember.guild.id] = {
          onoff: "Off"
        };
      if (log[oldMember.guild.id].onoff === "Off") return;
      let roleAdded = new Discord.RichEmbed()
        .setTitle("**[ADDED ROLE TO MEMBER]**")
        .setThumbnail(oldMember.guild.iconURL)
        .setColor("GREEN")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`ADDED\`\` Role to **${oldMember.user.username}**\n\n**User:** <@${oldMember.id}>\n**Role:** \`\`${role.name}\`\`\n**By:** <@${userID}>`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(roleAdded);
    }
    if (oldMember.roles.size > newMember.roles.size) {
      let role = oldMember.roles
        .filter(r => !newMember.roles.has(r.id))
        .first();
      if (!log[oldMember.guild.id])
        log[oldMember.guild.id] = {
          onoff: "Off"
        };
      if (log[(oldMember, newMember.guild.id)].onoff === "Off") return;
      let roleRemoved = new Discord.RichEmbed()
        .setTitle("**[REMOVED ROLE FROM MEMBER]**")
        .setThumbnail(oldMember.guild.iconURL)
        .setColor("RED")
        .setDescription(
          `**\n**:negative_squared_cross_mark: Successfully \`\`REMOVED\`\` Role from **${oldMember.user.username}**\n\n**User:** <@${oldMember.user.id}>\n**Role:** \`\`${role.name}\`\`\n**By:** <@${userID}>`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(roleRemoved);
    }
  });
  if (oldMember.guild.owner.id !== newMember.guild.owner.id) {
    if (!log[oldMember.guild.id])
      log[oldMember.guild.id] = {
        onoff: "Off"
      };
    if (log[(oldMember, newMember.guild.id)].onoff === "Off") return;
    let newOwner = new Discord.RichEmbed()
      .setTitle("**[UPDATE GUILD OWNER]**")
      .setThumbnail(oldMember.guild.iconURL)
      .setColor("GREEN")
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`TRANSFER\`\` The Owner Ship.\n\n**Old Owner:** <@${oldMember.user.id}>\n**New Owner:** <@${newMember.user.id}>`
      )
      .setTimestamp()
      .setFooter(oldMember.guild.name, oldMember.guild.iconURL);

    logChannel.send(newOwner);
  }
});

client.on("voiceStateUpdate", (voiceOld, voiceNew) => {
  if (!voiceOld.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!voiceOld.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[voiceOld.guild.id])
    log[voiceOld.guild.id] = {
      onoff: "Off"
    };
  if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
  var logChannel = voiceOld.guild.channels.find(
    c => c.name === `${log[(voiceOld, voiceNew.guild.id)].channel}`
  );
  if (!logChannel) return;

  voiceOld.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userTag = logs.entries.first().executor.tag;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (voiceOld.serverMute === false && voiceNew.serverMute === true) {
      let serverMutev = new Discord.RichEmbed()
        .setTitle("**[VOICE MUTE]**")
        .setThumbnail(
          "https://images-ext-1.discordapp.net/external/pWQaw076OHwVIFZyeFoLXvweo0T_fDz6U5C9RBlw_fQ/https/cdn.pg.sa/UosmjqDNgS.png"
        )
        .setColor("RED")
        .setDescription(
          `**User:** ${voiceOld}\n**By:** <@${userID}>\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\``
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(serverMutev);
    }
    if (voiceOld.serverMute === true && voiceNew.serverMute === false) {
      if (!log[voiceOld.guild.id])
        log[voiceOld.guild.id] = {
          onoff: "Off"
        };
      if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
      let serverUnmutev = new Discord.RichEmbed()
        .setTitle("**[VOICE UNMUTE]**")
        .setThumbnail(
          "https://images-ext-1.discordapp.net/external/u2JNOTOc1IVJGEb1uCKRdQHXIj5-r8aHa3tSap6SjqM/https/cdn.pg.sa/Iy4t8H4T7n.png"
        )
        .setColor("BLUE")
        .setDescription(
          `**User:** ${voiceOld}\n**By:** <@${userID}>\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\``
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(serverUnmutev);
    }
    if (voiceOld.serverDeaf === false && voiceNew.serverDeaf === true) {
      if (!log[voiceOld.guild.id])
        log[voiceOld.guild.id] = {
          onoff: "Off"
        };
      if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
      let serverDeafv = new Discord.RichEmbed()
        .setTitle("**[VOICE DEAF]**")
        .setThumbnail(
          "https://images-ext-1.discordapp.net/external/7ENt2ldbD-3L3wRoDBhKHb9FfImkjFxYR6DbLYRjhjA/https/cdn.pg.sa/auWd5b95AV.png"
        )
        .setColor("RED")
        .setDescription(
          `**User:** ${voiceOld}\n**By:** <@${userID}>\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\``
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(serverDeafv);
    }
    if (voiceOld.serverDeaf === true && voiceNew.serverDeaf === false) {
      if (!log[voiceOld.guild.id])
        //////Create By The Leader#0187
        log[voiceOld.guild.id] = {
          onoff: "Off"
        };
      if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
      let serverUndeafv = new Discord.RichEmbed()
        .setTitle("**[VOICE UNDEAF]**")
        .setThumbnail(
          "https://images-ext-2.discordapp.net/external/s_abcfAlNdxl3uYVXnA2evSKBTpU6Ou3oimkejx3fiQ/https/cdn.pg.sa/i7fC8qnbRF.png"
        ) //////Create By The ! .₳Ⱨ₥ɆĐ ♡#0561
        .setColor("GREEN") //////Create By The ! .₳Ⱨ₥ɆĐ ♡#0561
        .setDescription(
          `**User:** ${voiceOld}\n**By:** <@${userID}>\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\``
        ) //////Create By The ! .₳Ⱨ₥ɆĐ ♡#0561
        .setTimestamp() //////Create By The ! .₳Ⱨ₥ɆĐ ♡#0561
        .setFooter(userTag, userAvatar); //////Create By The ! .₳Ⱨ₥ɆĐ ♡#0561

      logChannel.send(serverUndeafv); //////Create By The ! .₳Ⱨ₥ɆĐ ♡#0561
    }
  }); //////Create By The ! .₳Ⱨ₥ɆĐ ♡#0561

  if (
    voiceOld.voiceChannelID !== voiceNew.voiceChannelID &&
    voiceNew.voiceChannel &&
    voiceOld.voiceChannel != null
  ) {
    if (!log[voiceOld.guild.id])
      //////Create By The ! .₳Ⱨ₥ɆĐ ♡#0561
      log[voiceOld.guild.id] = {
        onoff: "Off"
      };
    if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
    let voiceLeave = new Discord.RichEmbed() //////Create By The Leader#0187
      .setTitle("**[CHANGED VOICE ROOM]**")
      .setColor("GREEN")
      .setThumbnail(voiceOld.user.avatarURL)
      .setDescription(
        `**\n**:repeat: Successfully \`\`CHANGED\`\` The Voice Channel.\n\n**From:** \`\`${voiceOld.voiceChannel.name}\`\`\n**To:** \`\`${voiceNew.voiceChannel.name}\`\`\n**User:** ${voiceOld}`
      ) //////! .₳Ⱨ₥ɆĐ ♡#0561
      .setTimestamp() //////Create By The ! .₳Ⱨ₥ɆĐ ♡#0561
      .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL); //////Create By The ! .₳Ⱨ₥ɆĐ ♡#0561
    //////Create By The ! .₳Ⱨ₥ɆĐ ♡#0561
    logChannel.send(voiceLeave);
  }
});

client.on("message", message => {
  const prefix = "-";

  if (!message.channel.guild) return;
  if (message.author.bot) return;
  if (message.content === prefix + "savatar") {
    const embed = new Discord.RichEmbed()

      .setTitle(`ServerAvatar${message.guild.name}`)
      .setAuthor(message.author.username, message.guild.iconrURL)
      .setColor(0x164fe3)
      .setImage(message.guild.iconURL)
      .setURL(message.guild.iconrURL)
      .setTimestamp();

    message.channel.send({ embed });
  }
});

client.on("message", message => {
  if (message.channel.type === "dm" || message.author.type === "bot") return;
  let args = message.content.split(" ");
  let command = args[0];
  if (command === `${prefix}clear`) {
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        "**للأسف لا تمتلك صلاحية** `MANAGE_MESSAGES`"
      );
    let argstement = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!argstement) argstement = "100";
    message.channel.bulkDelete(argstement).then(messages => {
      let embed = new Discord.RichEmbed()
        .addField(
          "**Done**",
          `**${messages.size} <a:Done:662430350705950754>**`
        )
        .setColor("#fca503");
      return message.channel
        .send(embed)
        .then(m => m.delete(3000))
        .catch(console.error);
    });
  }
});

client.on("message", message => {
  if (!message.channel.guild) return;
  if (message.content == "-count")
    var IzRo = new Discord.RichEmbed().addField(
      "Mmeber Count",
      `${message.guild.memberCount}<a:Done:662430350705950754>`
    );
  message.channel.send(IzRo);
});

const perfix = "-";
client.on("message", msg => {
  if (msg.content.startsWith(prefix + "send")) {
    let args = msg.content.split(" ").slice(1);
    if (!args[0]) return msg.reply(`**منشن الشخص اولا**`);
    if (!args[1]) return msg.reply(`**ما هي الرساله المطلوب ارسالها**`);
    let haru = msg.mentions.members.first();
    if (!haru) return msg.reply(`**يجب تحديد الشخص**`);
    let haruEmbed = new Discord.RichEmbed()
      .setTitle(`**رسالة جديده لك من شخص ما**`)
      .setDescription(args.join(" "));

    client.users.get(`${haru.id}`).send(haruEmbed);
    msg.reply(`**تم ارسال الرساله<a:Done:662430350705950754>**`);
  }
});

client.on("message", message => {
  let user =
    message.mentions.users.first() ||
    client.users.get(message.content.split(" ")[1]);
  if (message.content.startsWith(prefix + "unban")) {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("❌|**`ADMINISTRATOR`لا توجد لديك رتبة`**");
    if (!user)
      return message.channel.send(
        "Mention User<a:false:658743450107117568>"
      );
    message.guild.unban(user);
    message.guild.owner.send(
      `لقد تم فك الباند عن الشخص \n ${user} \n By : <@${message.author.id}><a:Done:662430350705950754>`
    );
    var embed = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURl)
      .setColor("RANDOM")
      .setTitle("**●Unban** !")
      .setField("Mention User?")
      .setAuthor(message.guild.name);
    message.channel.sendEmbed(embed);
  }
});

client.on("message", message => {
  var prefix = "-";
  if (message.content.startsWith(prefix + "move")) {
    if (!message.member.hasPermission("MOVE_MEMBERS"))
      return message.channel.send("**:x: You Dont Have Perms `MOVE_MEMBERS`**");
    if (!message.guild.member(client.user).hasPermission("MOVE_MEMBERS"))
      return message.reply("**:x: I Dont Have Perms `MOVE_MEMBERS`**");
    if (message.member.voiceChannel == null)
      return message.channel.send(`**You Have To Be In Room Voice**`);
    var author = message.member.voiceChannelID;
    var m = message.guild.members.filter(m => m.voiceChannel);
    message.guild.members
      .filter(m => m.voiceChannel)
      .forEach(m => {
        m.setVoiceChannel(author);
      });
    message.channel.send(
      `**<a:Done:662430350705950754>Success Moved All To Your Channel**`
    );
  }
});

client.on("message", omar => {
  var prefix = "-";
  if (omar.content.split(" ")[0] == prefix + "dc") {
    if (!omar.channel.guild) return;
    if (!omar.guild.member(omar.author).hasPermission("MANAGE_CHANNELS"))
      return omar.reply("**You Don't Have ` MANAGE_CHANNELS ` Permission**");
    if (!omar.guild.member(client.user).hasPermission("MANAGE_CHANNELS"))
      return omar.reply("**I Don't Have ` MANAGE_CHANNELS ` Permission**");
    omar.guild.channels.forEach(m => {
      m.delete();
    });
  }
  if (omar.content.split(" ")[0] == prefix + "dr") {
    if (!omar.channel.guild) return;
    if (
      !omar.guild
        .member(omar.author)
        .hasPermission("MANAGE_ROLES_OR_PERMISSIONS")
    )
      return omar.reply(
        "**You Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**"
      );
    if (
      !omar.guild
        .member(client.user)
        .hasPermission("MANAGE_ROLES_OR_PERMISSIONS")
    )
      return omar.reply(
        "**I Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**"
      );
    omar.guild.roles.forEach(m => {
      m.delete();
    });
    omar.reply(
      "<a:Done:662430350705950754> `Success Deleted All Roles - Ranks`"
    );
  }
});

client.on("message", message => {
  if (message.content.startsWith("-obc")) {
    if (!message.member.hasPermission("ADMINISTRATOR")) return;
    let args = message.content.split(" ").slice(1);
    var argresult = args.join(" ");
    message.guild.members
      .filter(m => m.presence.status !== "all")
      .forEach(m => {
        m.send(`${argresult}\n ${m}`);
      });
    message.channel.send(
      `\`${
        message.guild.members.filter(m => m.presence.status !== "all").size
      }\`<a:Done:662430350705950754>  عدد المستلمين `
    );
    message.delete();
  }
});

client.on("message", message => {
  if (message.content.startsWith("-bans")) {
    message.guild
      .fetchBans()
      .then(bans =>
        message.channel.send(
          `${bans.size} <a:Done:662430350705950754>عدد اشخاص المبندة من السيرفر `
        )
      )
      .catch(console.error);
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "topinv")) {
    message.guild.fetchInvites().then(i => {
      var invites = [];

      i.forEach(inv => {
        var [invs, i] = [{}, null];

        if (inv.maxUses) {
          invs[inv.code] = +inv.uses + "/" + inv.maxUses;
        } else {
          invs[inv.code] = +inv.uses;
        }
        invites.push(
          `invite: ${inv.url} inviter: ${inv.inviter} \`${invs[inv.code]}\`;`
        );
      });
      var embed = new Discord.RichEmbed()
        .setColor("#000000")
        .setDescription(
          `${invites.join(`\n`) + "\n\n**By:** " + message.author}`
        )
        .setThumbnail(
          "https://cdn.discordapp.com/attachments/442414506430169098/489929808244113409/JPEG_20180913_232108.jpg"
        );
      message.channel.send({ embed: embed });
    });
  }
});

client.on("message", message => {
  if (message.channel.type === "dm") return;
  if (message.content.startsWith("-marry")) {
    if (!message.channel.guild)
      return message.reply(" This command only for servers ");
    var proposed = message.mentions.members.first();

    if (!message.mentions.members.first())
      return message.reply("لازم تطلب ايد وحدة").catch(console.error);
    if (message.mentions.users.size > 1)
      return message.reply("ولد ما يضبط لازم بنت").catch(console.error);
    if (proposed === message.author) return message.reply(`**خنتى ؟ **`);
    if (proposed === client.user) return message.reply(`** تبي تتزوجني؟ **`);
    message.channel.send(`**${proposed}
بدك تقبلي عرض الزواج من ${message.author}
العرض لمدة 10 ثواني
اكتبي موافقه او لا**`);

    const filter = m => m.content.startsWith("موافقه");
    message.channel
      .awaitMessages(filter, { max: 1, time: 15000, errors: ["time"] })
      .then(collected => {
        message.channel.send(
          `**${message.author} و ${proposed} الف الف مبروك انشاء الله تستمتعون بحياتكم الزوجية ويطول اعماركم ولا تنسون شهر العسل**`
        );
      })
      .catch(collected =>
        message.channel.send(`**السكوت علامة الرضا نقول مبرووك**`)
      );

    const filte = m => m.content.startsWith("لا");
    message.channel
      .awaitMessages(filte, { max: 1, time: 15000, errors: ["time"] })
      .then(collected => {
        message.channel.send(`**${message.author} تم رفض عرضك**`);
      });
  }
});

client.on("message", function(message) {
  if (message.content.startsWith(prefix + "report")) {
    let messageArgs = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    let messageReason = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    if (!messageReason)
      return message.reply("**<a:Done:662430350705950754>Specify a reason!**");
    let mUser = message.mentions.users.first();
    if (!mUser) return message.channel.send("Couldn't find user.");
    let Rembed = new Discord.RichEmbed()
      .setTitle("`New Report!`")
      .setThumbnail(message.author.avatarURL)
      .addField("**# - Reported User:**", mUser, true)
      .addField("**# - Reported User ID:**", mUser.id, true)
      .addField("**# - Reason:**", messageReason, true)
      .addField("**# - Channel:**", message.channel, true)
      .addField("**# - Time:**", message.createdAt, true)
      .setFooter("Done<a:Done:662430350705950754>");
    message.channel.send(Rembed);
    message.channel
      .send("__Are you sure you want to send this to the Server owner??__")
      .then(msg => {
        msg.react("<a:Done:662430350705950754>");
        msg
          .react("<a:636495709239246848:641694170880409600>")
          .then(() => msg.react("<a:636495709239246848:641694170880409600>"))
          .then(() => msg.react("<a:Done:662430350705950754>"));
        let reaction1Filter = (reaction, user) =>
          reaction.emoji.name === "<a:Done:662430350705950754>" &&
          user.id === message.author.id;
        let reaction2Filter = (reaction, user) =>
          reaction.emoji.name === "<a:636495709239246848:641694170880409600>" &&
          user.id === message.author.id;

        let reaction1 = msg.createReactionCollector(reaction1Filter, {
          time: 12000
        });
        let reaction2 = msg.createReactionCollector(reaction2Filter, {
          time: 12000
        });
        reaction1.on("collect", r => {
          message.guild.owner.send(Rembed);
          message.reply("**# - Done! 🎇**");
        });
        reaction2.on("collect", r => {
          message.reply("**# - Canceled!**");
        });
      });
  }
});

client.on("message", message => {
  if (message.content.startsWith("-love")) {
    let user = message.mentions.users.first();
    if (!user) {
      return message.emit("commandUsage", message, this.help);
    }
    let loves = [
      "https://media.giphy.com/media/YDB4EF3U6i6IM/giphy.gif",
      "https://media.giphy.com/media/l41JWw65TcBGjPpRK/giphy.gif",
      "https://media.giphy.com/media/3o6gDZ9unSrDk3EuR2/giphy.gif",
      "https://media.giphy.com/media/ymkLJAxVz2la/giphy.gif",
      "https://media.giphy.com/media/ZOln4JxCoZay4/giphy.gif",
      "https://media.giphy.com/media/l0K4kWJir91VEoa1W/giphy.gif",
      "https://media.giphy.com/media/X3FmqQ7ehoCBy/giphy.gif",
      "https://media.giphy.com/media/VlzUkJJzvz0UU/giphy.gif",
      "https://media.giphy.com/media/NbPJFUS6Vkx7q/giphy.gif",
      "https://media.giphy.com/media/wDEWXcisSjrQQ/giphy.gif",
      "https://media.giphy.com/media/xT8qBuhwq0OyL7UkdW/giphy.gif",
      "https://media.giphy.com/media/gfvxlwRKH1y5q/giphy.gif",
      "https://media.giphy.com/media/PuTSgeacS3Z7i/giphy.gif",
      "https://media.giphy.com/media/l49JBwneyflgjm5zO/giphy.gif",
      "https://media.giphy.com/media/QKUA2bIAgjFgk/giphy.gif",
      "https://media.giphy.com/media/T3Uzzre7Ap0mk/giphy.gif",
      "https://media.giphy.com/media/3oeSB6pawq6G99xCXS/giphy.gif",
      "https://media.giphy.com/media/iKIgD5j0I3hMQ/giphy.gif",
      "https://media.giphy.com/media/hhHcFH0xAduCs/giphy.gif",
      "https://media.giphy.com/media/3o7qDJKIO5rSeyHhvO/giphy.gif",
      "https://media.giphy.com/media/92bGINsmjAuUE/giphy.gif",
      "https://media.giphy.com/media/bErElGdAHUmoE/giphy.gif",
      "https://media.giphy.com/media/jQqU9dCKUOdri/giphy.gif",
      "https://media.giphy.com/media/10uJ0IFxlCA06I/giphy.gif",
      "https://media.giphy.com/media/bMLGNRoAy0Yko/giphy.gif",
      "https://media.giphy.com/media/3osxYcry2fDfqyhOQ8/giphy.gif",
      "https://media.giphy.com/media/3ohs84a6AyArTscVsk/giphy.gif",
      "https://media.giphy.com/media/3o6Zt6D0wctP0kpuwg/giphy.gif",
      "https://media.giphy.com/media/4zmFt0xpke8AU/giphy.gif",
      "https://media.giphy.com/media/l3vR9O3vpOCDRo8rC/giphy.gif",
      "https://media.giphy.com/media/13sgibUDaaaEU0/giphy.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username}Loves You${user.username}!`,
          image: {
            url: loves[Math.floor(Math.random() * loves.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
client.on("message", message => {
  if (message.content.startsWith("-kiss")) {
    let user = message.mentions.users.first();
    if (!user) {
      return message.emit("commandUsage", message, this.help);
    }
    var kiss = [
      "https://media.giphy.com/media/dP8ONh1mN8YWQ/giphy.gif",
      "https://media.giphy.com/media/CzCi6itPr3yBa/giphy.gif",
      "https://media.giphy.com/media/hnNyVPIXgLdle/giphy.gif",
      "https://media.giphy.com/media/bGm9FuBCGg4SY/giphy.gif",
      "https://media.giphy.com/media/G3va31oEEnIkM/giphy.gif",
      "https://media.giphy.com/media/G3va31oEEnIkM/giphy.gif",
      "https://media.giphy.com/media/BaEE3QOfm2rf2/giphy.gif",
      "https://media.giphy.com/media/OSq9souL3j5zW/giphy.gif",
      "https://giphy.com/gifs/kiss-anime-nISHppsUAzosMhttps://media.giphy.com/media/nISHppsUAzosM/giphy.gif",
      "https://media.giphy.com/media/ll5leTSPh4ocE/giphy.gif",
      "https://media.giphy.com/media/10r6oEoT6dk7E4/giphy.gif",
      "https://media.giphy.com/media/YC4QEtFmz64sE/giphy.gif",
      "https://media.giphy.com/media/KH1CTZtw1iP3W/giphy.gif",
      "https://media.giphy.com/media/flmwfIpFVrSKI/giphy.gif",
      "https://media.giphy.com/media/Z21HJj2kz9uBG/giphy.gif",
      "https://media.giphy.com/media/mGAzm47irxEpG/giphy.gif",
      "https://media.giphy.com/media/JynbO9pnGxPrO/giphy.gif",
      "https://media.giphy.com/media/7z1xs4Fl9Kb8A/giphy.gif",
      "https://media.giphy.com/media/EP9YxsbmbplIs/giphy.gif",
      "https://media.giphy.com/media/q7MxQyarcDHDW/giphy.gif",
      "https://media.giphy.com/media/uSHX6qYv1M7pC/giphy.gif",
      "https://media.giphy.com/media/EVODaJHSXZGta/giphy.gif",
      "https://media.giphy.com/media/EVODaJHSXZGta/giphy.gif",
      "https://media.giphy.com/media/fHtb1JPbfph72/giphy.gif",
      "https://media.giphy.com/media/pwZ2TLSTouCQw/giphy.gif",
      "https://media.giphy.com/media/DfzHC09hY64Gk/giphy.gif",
      "https://media.giphy.com/media/l0MYB8Ory7Hqefo9a/giphy.gif",
      "https://media.giphy.com/media/Y9iiZdUaNRF2U/giphy.gif",
      "https://media.giphy.com/media/CTo4IKRN4l4SA/giphy.gif",
      "https://media.giphy.com/media/jR22gdcPiOLaE/giphy.gif",
      "https://media.giphy.com/media/pFg4Ko6pXqQVy/giphy.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} Kissed You ${user.username}!`,
          image: {
            url: kiss[Math.floor(Math.random() * kiss.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
client.on("message", message => {
  if (message.content.startsWith("-boom")) {
    let user = message.mentions.users.first();
    if (!user) {
      return message.emit("commandUsage", message, this.help);
    }
    let bombs = [
      "https://media.giphy.com/media/Xp98Vi5OBvhXpwA0Zp/giphy.gif",
      "https://media.giphy.com/media/POnwee2RZBWmWWCeiX/giphy.gif",
      "https://media.giphy.com/media/oywQ7OhnYupINQa0L4/giphy.gif",
      "https://media.giphy.com/media/5aLrlDiJPMPFS/giphy.gif",
      "https://media.giphy.com/media/l1BgS9aNtdCdjgkaQ/giphy.gif",
      "https://media.giphy.com/media/d0NnEG1WnnXqg/giphy.gif",
      "https://media.giphy.com/media/NmrqUdwGXPOog/giphy.gif",
      "https://media.giphy.com/media/dpnfPvaCIHBrW/giphy.gif",
      "https://media.giphy.com/media/mks5DcSGjhQ1a/giphy.gif",
      "https://media.giphy.com/media/8wfoaIjVc0FBaLu5xH/giphy.gif",
      "https://media.giphy.com/media/xThtanBNixj1O1m5oY/giphy.gif",
      "https://media.giphy.com/media/fdGkCOiM0oOqI/giphy.gif",
      "https://media.giphy.com/media/c862b2dAhJXYA/giphy.gif",
      "https://media.giphy.com/media/CepTYjGRbV1ba/giphy.gif",
      "https://media.giphy.com/media/sRGCQ7INgSD0qbTqB5/giphy.gif",
      "https://media.giphy.com/media/ZJYOwl8SbFsic/giphy.gif",
      "https://media.giphy.com/media/3oEhmKspQX9EN48HNm/giphy.gif",
      "https://media.giphy.com/media/l1KVcAP6jvP9r4MaA/giphy.gif",
      "https://media.giphy.com/media/j2mY6orBJqAdG/giphy.gif",
      "https://media.giphy.com/media/3oz8xEqn8AGAQbR0yY/giphy.gif",
      "https://media.giphy.com/media/l4lQW9KfRQscU0ds4/giphy.gif",
      "https://media.giphy.com/media/XathaB5ILqSME/giphy.gif",
      "https://media.giphy.com/media/26AHvF2p5pridaSf6/giphy.gif",
      "https://media.giphy.com/media/Nlur5uO8GkjC0/giphy.gif",
      "https://media.giphy.com/media/l1J3preURPiwjRPvG/giphy.gif",
      "https://media.giphy.com/media/8cdZit2ZcjTri/giphy.gif",
      "https://media.giphy.com/media/3o7btNa0RUYa5E7iiQ/giphy.gif",
      "https://media.giphy.com/media/V88pTEefkoOFG/giphy.gif",
      "https://media.giphy.com/media/rfWAomOTPeOo8/giphy.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username}ooooooooooooooooooooooh${user.username}!`,
          image: {
            url: bombs[Math.floor(Math.random() * bombs.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
client.on("message", message => {
  if (message.content.startsWith("-hug")) {
    let user = message.mentions.users.first();
    if (!user) {
      return message.emit("commandUsage", message, this.help);
    }
    let hugs = [
      "https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif",
      "https://media.giphy.com/media/13YrHUvPzUUmkM/giphy.gif",
      "https://media.giphy.com/media/wnsgren9NtITS/giphy.gif",
      "https://media.giphy.com/media/qscdhWs5o3yb6/giphy.gif",
      "https://media.giphy.com/media/hi0VuTUqLrmuc/giphy.gif",
      "https://media.giphy.com/media/xJlOdEYy0r7ZS/giphy.gif",
      "https://media.giphy.com/media/7WQQXPg6o3YNa/giphy.gif",
      "https://media.giphy.com/media/LWTxLvp8G6gzm/giphy.gif",
      "https://media.giphy.com/media/xZshtXrSgsRHy/giphy.gif",
      "https://media.giphy.com/media/BXrwTdoho6hkQ/giphy.gif",
      "https://media.giphy.com/media/10BcGXjbHOctZC/giphy.gif",
      "https://media.giphy.com/media/49mdjsMrH7oze/giphy.gif",
      "https://media.giphy.com/media/xUPGcgtKxm4PADy3Cw/giphy.gif",
      "https://media.giphy.com/media/JTjSlqiz63j5m/giphy.gif",
      "https://media.giphy.com/media/aD1fI3UUWC4/giphy.gif",
      "https://media.giphy.com/media/5eyhBKLvYhafu/giphy.gif",
      "https://media.giphy.com/media/ddGxYkb7Fp2QRuTTGO/giphy.gif",
      "https://media.giphy.com/media/pXQhWw2oHoPIs/giphy.gif",
      "https://media.giphy.com/media/ZRI1k4BNvKX1S/giphy.gif",
      "https://media.giphy.com/media/ZQN9jsRWp1M76/giphy.gif",
      "https://media.giphy.com/media/s31WaGPAmTP1e/giphy.gif",
      "https://media.giphy.com/media/wSY4wcrHnB0CA/giphy.gif",
      "https://media.giphy.com/media/aVmEsdMmCTqSs/giphy.gif",
      "https://media.giphy.com/media/C4gbG94zAjyYE/giphy.gif",
      "https://media.giphy.com/media/ArLxZ4PebH2Ug/giphy.gif",
      "https://media.giphy.com/media/kFTKQfjK4ysZq/giphy.gif",
      "https://media.giphy.com/media/vVA8U5NnXpMXK/giphy.gif",
      "https://media.giphy.com/media/2q2qHJu838EyQ/giphy.gif",
      "https://media.giphy.com/media/q3kYEKHyiU4kU/giphy.gif",
      "https://media.giphy.com/media/3ZnBrkqoaI2hq/giphy.gif",
      "https://media.giphy.com/media/ExQqjagJBoECY/giphy.gif",
      "https://media.giphy.com/media/3o6Yg5fZCGeFArIcbm/giphy.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username}Missed You${user.username}!`,
          image: {
            url: hugs[Math.floor(Math.random() * hugs.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});

client.on("message", message => {
  if (
    message.content.match(
      /([A-Z0-9]|-|_){24}\.([A-Z0-9]|-|_){6}\.([A-Z0-9]|-|_){27}|mfa\.([A-Z0-9]|-|_){84}/gi
    )
  ) {
    if (
      !message.guild.members
        .get(client.user.id)
        .hasPermission("MANAGE_MESSAGES")
    )
      return message.channel.send(
        "**I need Permission `MANAGE_MESSAGE`To delete Tokens**"
      );
    message.member.addRole(message.guild.roles.find("name", "Muted"));
    message.delete();
    message.reply(`ممنوع نشر التوكنات في هذا السيرفر !!`);
    return;
  }
});
client.on("message", message => {
  if (message.content.startsWith(prefix + "bot")) {
    message.channel.send({
      embed: new Discord.RichEmbed()
        .setAuthor(client.user.username, client.user.avatarURL) //Me » Khaled
        .setThumbnail(client.user.avatarURL)
        .setColor("RANDOM")
        .setTitle("About Bot")
        .addField(
          "My Ping",
          `${Date.now() - message.createdTimestamp}` + "MS",
          true
        )
        .addField(
          "RAM Usage",
          `${(process.memoryUsage().rss / 1048576).toFixed()}MB`,
          true
        )
        .addField("servers", client.guilds.size, true)
        .addField("channels", ` ${client.channels.size} `, true)
        .addField("Users", ` ${client.users.size} `, true)
        .addField("My Name", ` ${client.user.tag} `, true)
        .addField("My ID", ` ${client.user.id} `, true)
        .addField("My Prefix", ` ${prefix} `, true)
        .addField("My Language", ` Java Script `, true)
        .addField("By | ", ` <@672118394702659616> `, true)
    });
  }
});

client.on("message", message => {
  if (message.content.startsWith("-slap")) {
    let user = message.mentions.users.first();
    if (!user) {
      return message.emit("commandUsage", message, this.help);
    }
    let slaps = [
      "https://cdn.weeb.sh/images/HkHCm1twZ.gif",
      "https://cdn.weeb.sh/images/H16aQJFvb.gif",
      "https://cdn.weeb.sh/images/Byjqm1tDW.gif",
      "https://cdn.weeb.sh/images/S1ylxxc1M.gif",
      "https://cdn.weeb.sh/images/B1jk41KD-.gif",
      "https://cdn.weeb.sh/images/HkskD56OG.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} Slapped ${user.username}!`,
          image: {
            url: slaps[Math.floor(Math.random() * slaps.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});

client.on("message", async message => {
  if (message.content.startsWith(prefix + "restart")) {
    if (message.author.id !== "672118394702659616")
      return message.reply("You aren't the bot owner.");
    message.channel
      .send(`Don't Forget About Me<a:Tenor:659119222701424650>`)
      .then(msg => {
        setTimeout(() => {
          msg.edit("**i Am Back SweetHeart<a:hello:657537636461707274>**");
        }, 5000);
      });
    console.log(
      `${message.author.tag} [ ${message.author.id} ] has restarted the bot.`
    );
    console.log(`Restarting<a:647115773537419270:651858365278060574>`);
    setTimeout(() => {
      client.destroy();
      client.login(process.env.BOT_TOKEN);
    }, 3000);
  }
});

client.on("message", message => {
  if (message.content === "-rules") {
    message.react("✅");
    message.react("❌");
    const embed = new Discord.RichEmbed().setColor("#ffff00").setDescription(`
✧▬▬▬▬▬▬▬▬▬▬▬▬✦ஜ۩۞۩ஜ✧▬▬▬▬▬▬▬▬▬▬▬▬✦
                                                [ ★・rules | قوانين السيرفر ]          
✧▬▬▬▬▬▬▬▬▬▬▬▬✦ஜ۩۞۩ஜ✧▬▬▬▬▬▬▬▬▬▬▬▬✦
 《1》ممنوع السب او الشتم
 《2》ممنوع السبام
 《3》ممنوع الأعلان عن اي سيرفر
 《4》ممنوع نشر روابط والباتشات
 《5》ممنوع أستخدام مغير صوت
 《6》ممنوع استخدام البوتات الا في المكان المخصص لها
 《7》ممنوع طلب الرتب من الادارة لاي سبب
 《7》ممنوع كتابة الاوامر في روم الغير مخصص لها
 《8》ممنوع استغلال الأخطاء او الثغرات
 《9》يمنع ازعاج الاعضاء
 《10》اذا احد ازعجك او خالف القوانين اخبر الاونر او الادمن و لا تسوي مشاكل
 《11》ملاحظة اذا احد نشر توكن في السرفر هياخد ميوت و اذا احد نشر رابط سرفر اخر في سرفرنا هياخد بان
:heart_exclamation: اتمنى من كل قلبي ان تستمتعو في سرفرنا:heart_exclamation: 
✧▬▬▬▬▬▬▬▬▬▬▬▬✦ஜ۩۞۩ஜ✧▬▬▬▬▬▬▬▬▬▬▬▬✦
@everyone || @here
●▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬●
@! , Haru#4900
 
    `);

    message.channel.sendEmbed(embed);
  }
});

client.on("message", async message => {
  if (message.content == "-unbanall") {
    if (
      message.author.bot ||
      message.channel.type == "dm" ||
      !message.member.hasPermission("BAN_MEMBERS")
    )
      return;
    message.guild
      .fetchBans()
      .then(ba => {
        ba.forEach(ns => {
          message.guild.unban(ns);
        });
      })
      .then(() => {
        let embed = new Discord.RichEmbed()
          .setAuthor(message.author.username)
          .addField("Done?|تم إزالة الباند عن جميع الأعضاء");
        message.channel.send(embed);
      });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "user")) {
    var args = message.content.split(" ").slice(1);
    let user = message.mentions.users.first();
    var men = message.mentions.users.first();
    var heg;
    if (men) {
      heg = men;
    } else {
      heg = message.author;
    }
    var mentionned = message.mentions.members.first();
    var h;
    if (mentionned) {
      h = mentionned;
    } else {
      h = message.member;
    }
    moment.locale("en-us");
    var id = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor("#707070")
      .addField(
        "Joined Discord Since :",
        `${moment(heg.createdTimestamp).format(
          "YYYY/M/D HH:mm:ss"
        )} **\n** \`${moment(heg.createdTimestamp).fromNow()}\``,
        true
      )
      .addField(
        "Joined Server Since :",
        `${moment(h.joinedAt).format("YYYY/M/D HH:mm:ss")} \n \`${moment(
          h.joinedAt
        ).fromNow()}\``,
        true
      )
      .setFooter(
        `Flash Bot`,
        "https://images-ext-2.discordapp.net/external/RTODtRqBQf83I6TQAVouGM7qnzXtnV1SE9KJ5smZhQg/%3Fv%3D1/https/cdn.discordapp.com/emojis/657996847125757972.gif"
      )
      .setThumbnail(heg.avatarURL);
    message.channel.send(id);
  }
});

client.on("message", message => {
  var prefix = "-";
  if (message.author.kick) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
    if (!message.channel.guild) return;

    if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS"))
      return message
        .reply(
          "You Don't Have KICK_MEMBERS Permission<a:Warn:657996732654813214>"
        )
        .then(msg => msg.delete(5000));
    if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS"))
      return message.reply(
        "I Don't Have KICK_Members Permission<a:Warn:657996732654813214>"
      );
    let user = message.mentions.users.first();
    let reason = message.content
      .split(" ")
      .slice(2)
      .join(" ");

    if (message.mentions.users.size < 1)
      return message.reply("Mention Someone<a:Warn:657996732654813214>");
    if (!reason) reason = "Null";
    if (!message.guild.member(user).bannable)
      return message.reply(
        "I can not be higher than my rank<a:Warn:657996732654813214>"
      );

    message.guild.member(user).kick(7, user);

    message.channel.send(`**Cya <@${user.id}><a:Done:662430350705950754>**`);
    user.send(`**Cya ${message.guild.name} reason: ${reason}**`);
    message.delete();
  }
});

client.on("ready", () => {
client.user.setStatus("idle");
});

client.on("message", message => {
  var prefix = "-";
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
    if (!message.channel.guild)
      return message.reply(
        "** This command only for servers<a:Warn:657996732654813214>**"
      );

    if (!message.guild.member(message.author).hasPermission("BAN_MEMBERS"))
      return message.reply(
        "**You Don't Have ` BAN_MEMBERS ` Permission<a:Warn:657996732654813214>**"
      );
    if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS"))
      return message.reply(
        "**I Don't Have ` BAN_MEMBERS ` Permission<a:Warn:657996732654813214>**"
      );
    let user = message.mentions.users.first();
    let reason = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    if (message.mentions.users.size < 1)
      return message.channel.send(`Mention user<a:Warn:657996732654813214>`);
    if (!message.guild.member(user).bannable)
      return message.reply(
        `This User Is Have High Role<a:Warn:657996732654813214>`
      );

    message.guild.member(user).ban(7, user);

    message.channel.send(`**Bye${user}<a:Done:662430350705950754>**`);
  }
});

client.on("message", async message => {
  let args = message.content.split(" ");
  if (message.content.startsWith(prefix + "mute")) {
    if (!message.member.hasPermission("MUTE_MEMBERS"))
      return message.channel.send("").then(msg => {
        msg.delete(3500);
        message.delete(3500);
      });

    if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
      return message.channel.send("").then(msg => {
        msg.delete(3500);
        message.delete(3500);
      });

    let mention = message.mentions.members.first(); //حقوق مي كودز
    if (!mention)
      return message.channel.send("").then(msg => {
        //حقوق مي كودز
        msg.delete(3500);
        message.delete(3500);
      });

    if (mention.id === message.author.id)
      return message.channel
        .send(
          "**You Cannot give mute to your self <a:636495709239246848:641694170880409600>**"
        )
        .then(msg => {
          msg.delete(3500);
          message.delete(3500); //حقوق مي كودز
        });

    if (mention.hasPermission("ADMINISTRATOR"))
      return message.channel.send(
        `**You can't give mute for a staff member. :x:**`
      ); //حقوق مي كودز

    if (message.guild.member(mention).roles.find("name", "Muted"))
      return message.channel.send(
        `**:information_source: ${mention.user.username} Already Muted**`
      );

    if (mention.position >= message.guild.member(message.author).positon)
      return message.channel
        .send(
          "You Donot Have Permission <a:636495709239246848:641694170880409600>** "
        )
        .then(msg => {
          msg.delete(3500);
          message.delete(3500);
        });

    if (mention.positon >= message.guild.member(client.user).positon)
      return message.channel
        .send(
          "I Donot Have Permission <a:636495709239246848:641694170880409600>**"
        )
        .then(msg => {
          msg.delete(3500);
          message.delete(3500); //حقوق مي كودز
        });

    let duration = args[2];
    if (isNaN(duration))
      message.channel.send("").then(msg => {
        msg.delete(3500);
        message.delete(3500);
      });

    let reason = message.content
      .split(" ")
      .slice(3)
      .join(" ");
    if (!reason) reason = " [ **No Reason.** ] ";

    let thisEmbed = new Discord.RichEmbed()
      .setAuthor(mention.user.username, mention.user.avatarURL)
      .setTitle("**You Have been Muted<a:Done:662430350705950754>**")
      .addField("**Server**", [message.guild.name]) //حقوق مي كودز
      .addField("**BY:**", [message.author])
      .addField("**Reason:**", reason)
      .addField("**Time:**", duration);

    let role =
      message.guild.roles.find("name", "Muted") ||
      message.guild.roles.get(r => r.name === "Muted");
    if (!role)
      try {
        message.guild
          .createRole({
            name: "Muted",
            permissions: 0 //حقوق مي كودز
          })
          .then(r => {
            message.guild.channels.forEach(c => {
              c.overwritePermissions(r, {
                SEND_MESSAGES: false, //حقوق مي كودز
                READ_MESSAGES_HISTORY: false,
                ADD_REACTIONS: false
              });
            });
          }); //حقوق مي كودز
      } catch (e) {
        console.log(e.stack);
      }
    mention.addRole(role).then(() => {
      mention.send(thisEmbed);
      message.channel.send(
        `**${mention.user}Muted<a:Done:662430350705950754>**`
      );
      mention.setMute(true); //حقوق مي كودز
    });
    setTimeout(() => {
      if (duration === 0) return;
      mention.setMute(false);
      mention.removeRole(role);
    }, duration * 60000); //حقوق مي كودز
  }
});

/// un mute

client.on("message", async message => {
  let mention = message.mentions.members.first();
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = message.content.split(" ").slice(1); //حقوق مي كودز
  if (command === `unmute`) {
    2;
    if (!message.member.hasPermission("MUTE_MEMBERS"))
      return message.channel
        .sendMessage(
          "**You Donot HavePermission <a:636495709239246848:641694170880409600>**"
        )
        .then(m => m.delete(5000));
    if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
      return message
        .reply(
          "**I donot Have Permission <a:636495709239246848:641694170880409600>**"
        )
        .then(msg => msg.delete(6000));

    let kinggamer =
      message.guild.member(message.mentions.users.first()) ||
      message.guild.members.get(args[0]);
    if (!kinggamer)
      return message.channel.send("").then(msg => {
        msg.delete(3500);
        message.delete(3500); //حقوق مي كودز
      });

    let role = message.guild.roles.find(r => r.name === "Muted");

    if (!role || !kinggamer.roles.has(role.id))
      return message.channel.sendMessage(
        `**${mention.user}Is Allready Unmuted<a:Done:662430350705950754>**`
      );

    await kinggamer.removeRole(role); //حقوق مي كودز
    message.channel.sendMessage(
      `**${mention.user} UnMuted <a:Done:662430350705950754>**`
    );

    return;
  }
});

client.on('message', message => {
if (message.content === prefix + 'ping') {
message.channel.send(`Ping: ${Date.now() - message.createdTimestamp}ms | Websocket: ${Math.round(client.ping)}ms`)
.then(m => m.edit(`Ping: ${Date.now() - message.createdTimestamp}ms | Websocket: ${Math.round(client.ping)}ms`).then(m => m.delete(10000)));  
}
});

client.on("message", message => {
  if (message.content === "-mute") {
    message.reply("Mention User<a:650262910786076682:651758477596819456>");
  }
});

client.on("message", message => {
  if (message.content === "-unmute") {
    message.reply("Mention User<a:650262910786076682:651758477596819456>");
  }
});

client.on("message", message => {
  if (message.content === "-server") {
    let embed = new Discord.RichEmbed();
    embed.addField(
      ` <a:Warn:657996732654813214>| Server ID :`,
      ` **~~${message.guild.id}~~**`,
      true
    );

    embed.addField(
      ` <a:Loading:657996792264392705>| Created on :`,
      ` **~~${moment(message.guild.createdAt).format(
        `D/M/YYYY h:mm`
      )} \n ${moment(message.guild.createdAt)
        .locale("EN-us")
        .fromNow()}~~**`,
      true
    );

    embed.addField(
      ` <a:blackheart:661523838718312448>| OwnedBy :`,
      ` **~~${message.guild.owner.user.tag}~~**`,
      true
    );

    embed.addField(
      ` <a:Right:657996403490160650>| Members : **~~${message.guild.members.size}~~**`,
      ` **~~${
        message.guild.members.filter(c => c.presence.status !== "offline").size
      }~~** Online`,
      true
    );

    embed.addField(
      ` <a:Left:657995629552992278>| Channels : **~~${message.guild.channels.size}~~**`,
      ` **~~${
        message.guild.channels.filter(f => f.type === "text").size
      }~~** Text | **~~${
        message.guild.channels.filter(f => f.type === "voice").size
      }~~** Voice`,
      true
    );

    embed.addField(
      ` <a:HyperBlobOnDrug:657997202597216266>| Others : `,
      ` Region: **~~${message.guild.region}~~**`,
      true
    );

    embed.addField(
      ` <a:RainbowHeart:657996847125757972>| Roles : `,
      `**~~${message.guild.roles.size}~~**`
    );

    embed.addField(`Bot Creator |`, `<@672118394702659616>`, true);

    embed.addField(`Emoji By: `, `<@498862265697697792>`, true);

    embed.setFooter(`Demon Bot`);

    embed.setThumbnail(`${message.author.avatarURL}`); //Emoji has Been Coded By ! ŚwêêŘ❄#2020
    message.channel.sendEmbed(embed);
  }
});

client.on("message", async Message => {
  var defineduser = Message.author.username;
  let filter = r => r.author.id === Message.author.id;
  var TAJRAS;
  var prix;
  var transfer;
  var winner;
  var Images = [
      {
        url:
          "https://cdn.discordapp.com/attachments/649570457695289351/652560409072631818/Kingtutcoinrev.jpg",
        name: "كتابه"
      },
      {
        url:
          "https://cdn.discordapp.com/attachments/649570457695289351/652559792841293830/app_image_big_12515.webp",
        name: "ملك"
      }
    ],
    Image = Images[Math.floor(Math.random() * Images.length)];
  if (Message.content != prefix + "coin") return undefined;
  else Message.channel.send("**ملك ولا كتابه**");
  var c = await Message.channel.awaitMessages(filter, {
    max: 1,
    time: 90000,
    errors: ["time"]
  });
  TAJRAS = c.first().content;
  var Words_fail = [
    ":diamonds: ينووب",
    ":diamonds: حمااار",
    ":diamonds: كل زق",
    ":diamonds: لا تحاول",
    ":diamonds: اه شيت هير وي قو اقين",
    ":diamonds: ههههههههههههههههههههههههه"
  ];
  var hehe = Words_fail[Math.floor(Math.random() * Words_fail.length)];
  var Words_win = [
    ":diamonds: كفوووو",
    ":diamonds: مستخدم شارينقان ؟؟",
    ":diamonds: الله عليك يا فخر العرب",
    ":diamondsاللله:هه",
    ":diamonds: يا بطل",
    ":diamonds: يا جدعع"
  ];
  var kfo = Words_win[Math.floor(Math.random() * Words_win.length)];
  let win;
  if (TAJRAS == Image.name) {
    win = defineduser + kfo;
  } else {
    if (TAJRAS != Image.name) win = defineduser + hehe;
  }
  Message.channel.send(
    new (require("discord.js")).RichEmbed()
      .setColor("#df3d3d")
      .setTitle(win)
      .setThumbnail(Message.author.avatarURL)
      .setAuthor(`${defineduser}`, `${Message.author.avatarURL}`)
      .setFooter(`${defineduser}`, `${Message.author.avatarURL}`)
      .setImage(Image.url)
      .setDescription(`**${Image.name}**`)
  );
});

client.on("message", msg => {
  if (msg.content === "welcome") {
    msg.channel.send(`**The Welcome is Being Repaired**${msg.guild.name}`);
  }
});

client.on("message", message => {
  if (message.content === "-mc") {
    if (!message.channel.guild)
      return message.reply(" هذا الامر فقط للسيرفرات !!");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply(" ليس لديك صلاحيات");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      })
      .then(() => {
        message.reply("Chat Closed successfully<a:Done:662430350705950754>");
      });
  }
  if (message.content === "-unmc") {
    if (!message.channel.guild)
      return message.reply(" هذا الامر فقط للسيرفرات !!");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply("ليس لديك صلاحيات");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true
      })
      .then(() => {
        message.reply("Chat Opened successfully<a:Done:662430350705950754>");
      });
  }
});

client.on("message", message => {
  let roleembed = new Discord.RichEmbed()
    .setDescription(
      `
    أمثله على الأوامر :
    -role @mention rolename : لأعطاء رتبة لعضو معين
    -role all rolename : لأعطاء رتبة للجميع
    -role humans rolename : لأعطاء رتبة للاشخاص فقط
    -role bots rolename : لأعطاء رتبة لجميع البوتات`
    )
    .setFooter(
      "Requested by " + message.author.username,
      message.author.avatarURL
    );
  var args = message.content.split(" ").slice(1);
  var msg = message.content.toLowerCase();
  if (!message.guild) return;
  if (!msg.startsWith(prefix + "role")) return;
  if (!message.member.hasPermission("MANAGE_ROLES"))
    return message.channel.send(" **__ليس لديك صلاحيات__**");
  if (msg.toLowerCase().startsWith(prefix + "roleembed")) {
    if (!args[0]) return message.channel.sendEmbed(roleembed);
    if (!args[1]) return message.channel.sendEmbed(roleembed);
    var role = msg
      .split(" ")
      .slice(2)
      .join(" ")
      .toLowerCase();
    var role1 = message.guild.roles
      .filter(r => r.name.toLowerCase().indexOf(role) > -1)
      .first();
    if (!role1)
      return message.reply("**:x: يرجى وضع الرتبة المراد اعطاءها الى الشخص**");
    if (message.mentions.members.first()) {
      message.mentions.members.first().addRole(role1);
      return message.reply(
        "**:white_check_mark: [ " +
          role1.name +
          " ] رتبة [ " +
          args[0] +
          " ] تم اعطاء الى **"
      );
    }
    if (args[0].toLowerCase() == "all") {
      message.guild.members.forEach(m => m.addRole(role1));
      return message.reply(
        "**:white_check_mark: [ " + role1.name + " ] تم اعطاء الى الكل رتبة**"
      );
    } else if (args[0].toLowerCase() == "bots") {
      message.guild.members
        .filter(m => m.user.bot)
        .forEach(m => m.addRole(role1));
      return message.reply(
        "**:white_check_mark: [ " +
          role1.name +
          " ] تم اعطاء الى البوتات رتبة**"
      );
    } else if (args[0].toLowerCase() == "humans") {
      message.guild.members
        .filter(m => !m.user.bot)
        .forEach(m => m.addRole(role1));
      return message.reply(
        "**:white_check_mark: [ " +
          role1.name +
          " ] تم اعطاء الى البشريين رتبة**"
      );
    }
  } else {
    if (!args[0])
      return message.reply("**:x: يرجى وضع الشخص المراد اعطائها الرتبة**");
    if (!args[1])
      return message.reply("**:x: يرجى وضع الرتبة المراد اعطائها للشخص**");
    var role = msg
      .split(" ")
      .slice(2)
      .join(" ")
      .toLowerCase();
    var role1 = message.guild.roles
      .filter(r => r.name.toLowerCase().indexOf(role) > -1)
      .first();
    if (!role1)
      return message.reply("**:x: يرجى وضع الرتبة المراد اعطائها للشخص**");
    if (message.mentions.members.first()) {
      message.mentions.members.first().addRole(role1);
      return message.reply(
        "**:white_check_mark: [ " +
          role1.name +
          " ] رتبة [ " +
          args[0] +
          " ] تم اعطاء **"
      );
    }
    if (args[0].toLowerCase() == "all") {
      message.guild.members.forEach(m => m.addRole(role1));
      return message.reply(
        "**:white_check_mark: [ " + role1.name + " ] تم اعطاء الكل رتبة**"
      );
    } else if (args[0].toLowerCase() == "bots") {
      message.guild.members
        .filter(m => m.user.bot)
        .forEach(m => m.addRole(role1));
      return message.reply(
        "**:white_check_mark: [ " + role1.name + " ] تم اعطاء البوتات رتبة**"
      );
    } else if (args[0].toLowerCase() == "humans") {
      message.guild.members
        .filter(m => !m.user.bot)
        .forEach(m => m.addRole(role1));
      return message.reply(
        "**:white_check_mark: [ " + role1.name + " ] تم اعطاء البشريين رتبة**"
      );
    }
  }
});

client.on("message", message => {
  let args = message.content.split(" ").slice(1);
  if (message.content.split(" ")[0] == `${prefix}color`) {
    const embedd = new Discord.RichEmbed()
      .setFooter("ReGuild Server")
      .setFooter(
        "Requested by " + message.author.username,
        message.author.avatarURL
      )
      .setDescription(
        `**There Is no Color With This Number**<a:hello:657537636461707274>`
      )
      .setColor(`ff0000`);

    if (!isNaN(args) && args.length > 0)
      if (!message.guild.roles.find("name", `${args}`))
        return message.channel.sendEmbed(embedd);

    var a = message.guild.roles.find("name", `${args}`);
    if (!a) return;
    const embed = new Discord.RichEmbed()
      .setFooter("ReGuild Server")
      .setFooter(
        "Requested by " + message.author.username,
        message.author.avatarURL
      )
      .setDescription(
        `**Color Changed Successfully<a:hello:657537636461707274>**`
      )

      .setColor(`${a.hexColor}`);
    message.channel.sendEmbed(embed);
    if (!args) return;
    setInterval(function() {});
    let count = 0;
    let ecount = 0;
    for (let x = 1; x < 201; x++) {
      message.member.removeRole(message.guild.roles.find("name", `${x}`));
    }
    message.member.addRole(message.guild.roles.find("name", `${args}`));
  }
});
client.on("message", message => {
  if (message.channel.type === "dm") {
    if (message.author.id === client.user.id) return;
    let yumz = new Discord.RichEmbed()
      .setTimestamp()
      .setTitle("A Direct Massege From Person To Bot")
      .addField(`By`, `<@${message.author.id}>`)
      .setColor("RANDOM")
      .setThumbnail(message.author.displayAvatarURL)
      .addField(`Massege :`, `\n\n\`\`\`${message.content}\`\`\``)
      .setFooter(`Demon Bot`);
    client.users.get("672118394702659616").send(yumz);
  }
});








  //! ,Haru#6204
 //! ,Haru#6204

const pics = JSON.parse(fs.readFileSync("./pics.json", "utf8"));
client.on("message", message => {
  if (!message.channel.guild) return;

  let room = message.content.split(" ").slice(1);
  let findroom = message.guild.channels.find("name", `${room}`);
  if (message.content.startsWith(prefix + "setMedia")) {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!room) return message.channel.send("Please Type The Channel Name");
    if (!findroom) return message.channel.send("Cant Find This Channel");
    let embed = new Discord.RichEmbed()
      .setTitle(
        "**<a:Done:662430350705950754>Done The MediaOnly Code Has Been Setup**"
      )
      .addField("Channel:", `${room}`)
      .addField("Requested By", `${message.author}`)
      .setThumbnail(message.author.avatarURL)
      .setFooter(`${client.user.username}`);
    message.channel.sendEmbed(embed);
    (pics[message.guild.id] = {
      channel: room,
      onoff: "On"
    }),
      fs.writeFile("./pics.json", JSON.stringify(pics), err => {
        if (err) console.error(err);
      });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "toggleMedia")) {
    if (!message.channel.guild) return;

    if (!message.channel.guild) return;
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!pics[message.guild.id])
      pics[message.guild.id] = {
        onoff: "Off"
      };
    if (pics[message.guild.id].onoff === "Off")
      return [
        message.channel.send(`**ON |<a:Done:662430350705950754>**`),
        (pics[message.guild.id].onoff = "On")
      ];
    if (pics[message.guild.id].onoff === "On")
      return [
        message.channel.send(`**OFF |<a:Warn:657996732654813214>**`),
        (pics[message.guild.id].onoff = "Off")
      ];
    fs.writeFile("./pics.json", JSON.stringify(pics), err => {
      if (err) console.error(err);
    });
  }
});

client.on("message", message => {
  if (!message.channel.guild) return;
  if (message.author.bot) return;

  if (!pics[message.guild.id])
    pics[message.guild.id] = {
      onoff: "Off"
    };
  if (pics[message.guild.id].onoff === "Off") return;

  if (message.channel.name !== `${pics[message.guild.id].channel}`) return;

  let types = ["jpg", "jpeg", "png", "http://prntscr.com/"];
  if (message.attachments.size <= 0) {
    message.delete();
    message.channel
      .send(
        `${message.author} Sorry But This Channel For Media Only <a:Warn:657996732654813214>`
      )
      .then(msg => {
        setTimeout(() => {
          msg.delete();
        }, 3000);
      });
    return;
  }
  if (message.attachments.size >= 1) {
    let filename = message.attachments.first().filename;
    console.log(filename);
    if (!types.some(type => filename.endsWith(type))) {
      message.delete();
      message.channel
        .send(
          `${message.author},Sorry But This Channel For Media Only <a:Warn:657996732654813214>`
        )
        .then(msg => {
          setTimeout(() => {
            msg.delete();
          }, 3000);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
});
client.on("message", message => {
  if (message.content.startsWith(prefix + "infoMedia")) {
    let embed = new Discord.RichEmbed()
      .addField("Channel Status", `${pics[message.guild.id].onoff}`)
      .addField("Media Channel", `${pics[message.guild.id].channel}`)
      .addField("Requested By", `${message.author}`)
      .setThumbnail(message.author.avatarURL)
      .setFooter(`${client.user.username}`);
    message.channel.sendEmbed(embed);
  }
});

client.on("message", msg => {
  if (msg.author.bot) return undefined;
  if (msg.channel.type == "dm") {
    setTimeout(() => {
      msg.delete();
    }, 3000);
    msg.channel.send(msg.content);
  }
});

client.on("message", message => {
  if (message.content === prefix + "cc") {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel
        .send("**You Dont Have** `ADMINISTRATOR` **premission**")
        .then(msg => msg.delete(6000));
    message.guild.createRole({
      name: "1",
      color: "#000001",
      permissions: []
    });
    message.guild.createRole({
      name: "2",
      color: "#0a0a0a",
      permissions: []
    });
    message.guild.createRole({
      name: "3",
      color: "#131313",
      permissions: []
    });
    message.guild.createRole({
      name: "4",
      color: "#1f1f1f",
      permissions: []
    });
    message.guild.createRole({
      name: "5",
      color: "#242424",
      permissions: []
    });
    message.guild.createRole({
      name: "6",
      color: "#333333",
      permissions: []
    });
    message.guild.createRole({
      name: "7",
      color: "#5c5c5c",
      permissions: []
    });
    message.guild.createRole({
      name: "8",
      color: "#797979 ",
      permissions: []
    });
    message.guild.createRole({
      name: "9",
      color: "#a0a0a0",
      permissions: []
    });
    message.guild.createRole({
      name: "10",
      color: "#cecece",
      permissions: []
    });
    message.guild.createRole({
      name: "11",
      color: "#ffffff",
      permissions: []
    });
    message.guild.createRole({
      name: "12",
      color: "#110000",
      permissions: []
    });

    message.guild.createRole({
      name: "13",
      color: "#2c0000",
      permissions: []
    }); //master killer

    message.guild.createRole({
      name: "14",
      color: "#380401",
      permissions: []
    });

    message.guild.createRole({
      name: "15",
      color: "#4b0101",
      permissions: []
    });

    message.guild.createRole({
      name: "16",
      color: "#520000",
      permissions: []
    });

    message.guild.createRole({
      name: "17",
      color: "#580000",
      permissions: []
    });

    message.guild.createRole({
      name: "18",
      color: "#810000",
      permissions: []
    });

    message.guild.createRole({
      name: "19",
      color: "#a00000",
      permissions: []
    });

    message.guild.createRole({
      name: "20",
      color: "#c90000",
      permissions: []
    });

    message.guild.createRole({
      name: "21",
      color: "#f10000",
      permissions: []
    });

    message.guild.createRole({
      name: "22",
      color: "#ff0000",
      permissions: []
    });
    message.guild.createRole({
      name: "23",
      color: "#310d00",
      permissions: []
    });
    message.guild.createRole({
      name: "24",
      color: "#471d00",
      permissions: []
    });

    message.guild.createRole({
      name: "25",
      color: "#632500",
      permissions: []
    });

    message.guild.createRole({
      name: "26",
      color: "#702900",
      permissions: []
    });

    message.guild.createRole({
      name: "27",
      color: "#743300",
      permissions: []
    }); //master killer

    message.guild.createRole({
      name: "28",
      color: "#793600",
      permissions: []
    });
    message.guild.createRole({
      name: "29",
      color: "#8a4600",
      permissions: []
    });

    message.guild.createRole({
      name: "30",
      color: "#b34700",
      permissions: []
    });

    message.guild.createRole({
      name: "31",
      color: "#d86300",
      permissions: []
    });

    message.guild.createRole({
      name: "32",
      color: "#ee6900",
      permissions: []
    });

    message.guild.createRole({
      name: "33",
      color: "#ff8100",
      permissions: []
    });

    message.guild.createRole({
      name: "34",
      color: "#02001a",
      permissions: []
    });

    message.guild.createRole({
      name: "35",
      color: "#040027",
      permissions: []
    });
    message.guild.createRole({
      name: "36",
      color: "#000250",
      permissions: []
    });

    message.guild.createRole({
      name: "37",
      color: "#00006b",
      permissions: []
    });

    message.guild.createRole({
      name: "38",
      color: "#09008b ",
      permissions: []
    });

    message.guild.createRole({
      name: "39",
      color: "#020094",
      permissions: []
    });

    message.guild.createRole({
      name: "40",
      color: "#0005b9",
      permissions: []
    });
    message.guild.createRole({
      name: "41",
      color: "#0f00db",
      permissions: []
    });
    message.guild.createRole({
      name: "42",
      color: "#0300f7",
      permissions: []
    });
    message.guild.createRole({
      name: "43",
      color: "#002bff",
      permissions: []
    });
    message.guild.createRole({
      name: "44",
      color: "#0047ff",
      permissions: []
    });

    message.guild.createRole({
      name: "45",
      color: "#001601",
      permissions: []
    });

    message.guild.createRole({
      name: "46",
      color: "#002501",
      permissions: []
    });

    message.guild.createRole({
      name: "47",
      color: "#052900",
      permissions: []
    });

    message.guild.createRole({
      name: "48",
      color: "#003b03",
      permissions: []
    });

    message.guild.createRole({
      name: "49",
      color: "#005802",
      permissions: []
    });

    message.guild.createRole({
      name: "50",
      color: "#007715",
      permissions: []
    });

    message.guild.createRole({
      name: "51",
      color: "#179600",
      permissions: []
    });

    message.guild.createRole({
      name: "52",
      color: "#00a50e",
      permissions: []
    });

    message.guild.createRole({
      name: "53",
      color: "#00ad06",
      permissions: []
    });

    message.guild.createRole({
      name: "54",
      color: "#00be00",
      permissions: []
    });

    message.guild.createRole({
      name: "55",
      color: "#00ff0f",
      permissions: []
    });

    message.guild.createRole({
      name: "56",
      color: "#292800",
      permissions: []
    });

    message.guild.createRole({
      name: "57",
      color: "#3a3601",
      permissions: []
    });

    message.guild.createRole({
      name: "58",
      color: "#474500",
      permissions: []
    });

    message.guild.createRole({
      name: "59",
      color: "#5e5c00",
      permissions: []
    });

    message.guild.createRole({
      name: "60",
      color: "#818100",
      permissions: []
    });

    message.guild.createRole({
      name: "61",
      color: "#999800",
      permissions: []
    });

    message.guild.createRole({
      name: "62",
      color: "#aca600",
      permissions: []
    });

    message.guild.createRole({
      name: "63",
      color: "#bcc500",
      permissions: []
    });

    message.guild.createRole({
      name: "64",
      color: "#d1d100",
      permissions: []
    });

    message.guild.createRole({
      name: "65",
      color: "#c9d800",
      permissions: []
    });

    message.guild.createRole({
      name: "66",
      color: "#ffee00",
      permissions: []
    });

    message.guild.createRole({
      name: "67",
      color: "#1b0030",
      permissions: []
    });

    message.guild.createRole({
      name: "68",
      color: "#1e003a",
      permissions: []
    });

    message.guild.createRole({
      name: "69",
      color: "#2c004b",
      permissions: []
    });

    message.guild.createRole({
      name: "70",
      color: "#3e005e",
      permissions: []
    });

    message.guild.createRole({
      name: "71",
      color: "#5d0097",
      permissions: []
    });

    message.guild.createRole({
      name: "72",
      color: "#6b009c",
      permissions: []
    });

    message.guild.createRole({
      name: "73",
      color: "#8c00b8",
      permissions: []
    });

    message.guild.createRole({
      name: "74",
      color: "#a200c7",
      permissions: []
    });

    message.guild.createRole({
      name: "75",
      color: "#aa00e0",
      permissions: []
    });

    message.guild.createRole({
      name: "76",
      color: "#cc00db",
      permissions: []
    });

    message.guild.createRole({
      name: "77",
      color: "#e200ff",
      permissions: []
    });

    message.guild.createRole({
      name: "78",
      color: "#4d0037",
      permissions: []
    });

    message.guild.createRole({
      name: "79",
      color: "#660041",
      permissions: []
    });

    message.guild.createRole({
      name: "80",
      color: "#91005c",
      permissions: []
    });

    message.guild.createRole({
      name: "81",
      color: "#b4006a",
      permissions: []
    });

    message.guild.createRole({
      name: "82",
      color: "#ca0076",
      permissions: []
    });

    message.guild.createRole({
      name: "83",
      color: "#cc008e",
      permissions: []
    });

    message.guild.createRole({
      name: "84",
      color: "#d60089",
      permissions: []
    });

    message.guild.createRole({
      name: "85",
      color: "#e900a3",
      permissions: []
    });

    message.guild.createRole({
      name: "86",
      color: "#ff00b3",
      permissions: []
    });

    message.guild.createRole({
      name: "87",
      color: "#ff2dbe",
      permissions: []
    });

    message.guild.createRole({
      name: "88",
      color: "#ff73d4",
      permissions: []
    });

    message.channel.sendMessage({
      embed: new Discord.RichEmbed()
        .setColor("#502faf")
        .setAuthor(`${message.author.username}'`, message.author.avatarURL)
        .setDescription("``Colors Has Been Created ``")
    });
  }
});

let vojson = JSON.parse(fs.readFileSync("vojson.json", "utf8"));
client.on("message", message => {
  if (message.content.startsWith(prefix + "setvvc")) {
    let channel = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    let channelfind = message.guild.channels.find("name", `${channel}`);
    if (!channel)
      return message.channel.send(
        "Please Type The Voice Channel Name Example: #setVc <Channel name>"
      );
    if (!channelfind)
      return message.channel.send(
        "Please Type The Voice Channel Name Example: #setVc <Channel name>"
      );
    vojson[message.guild.id] = {
      stats: "enable",
      chid: channelfind.id,
      guild: message.guild.id
    };
    message.channel.send("**Done The Voice Online  Is Turned On**");
  }
  if (message.content.startsWith(prefix + "vc off")) {
    vojson[message.guild.id] = {
      stats: "disable",
      chid: ch.id,
      guild: message.guild.id
    };
    message.channel.send("**Done The Voice Online Is Turned Off**");
  }
  fs.writeFile("./vojson.json", JSON.stringify(vojson), err => {
    if (err) console.error(err);
  });
});

client.on("voiceStateUpdate", (oldMember, newMember) => {
  if (!vojson[oldMember.guild.id])
    vojson[oldMember.guild.id] = {
      stats: "disable",
      chid: "undefined",
      guild: "undefined"
    };
  if (vojson[oldMember.guild.id].stats === "enable") {
    let ch = vojson[oldMember.guild.id].chid;
    let channel = oldMember.guild.channels.get(ch);
    let guildid = vojson[oldMember.guild.id].guild;
    channel.setName(
      `LoneLiness[${oldMember.guild.members.filter(m => m.voiceChannel).size}]`
    );
  }
  if (vojson[oldMember.guild.id].stats === "disable") {
    return;
  }
});

//

client.on("message", message => {
  var args = message.content.split(" ");
  var command = args[0];
  if (command === prefix + "warn") {
    // Warn2 و Warn1  اصنع رتبة ب اسم
    var user = message.guild.member(message.mentions.users.first());
    var warn1 = message.guild.roles.find("name", "⚠1");
    var warn2 = message.guild.roles.find("name", "⚠2");
    if (!message.channel.guild) {
      message.channel.send("هذه الأوامر للسيرفرات فقط !!");
      if (!message.member.hasPermission("ADMINISTRATOR"))
        return message.reply("**You Dont Have ADMINISTRATOR Permission**");
    } else if (!warn1) {
      message.channel.send("i Can't Find `⚠1`");
    } else if (!warn2) {
      message.channel.send("i Can't Find `⚠2`");
    } else if (!user) {
      message.channel.send("Name Of The Person?");
    } else if (!message.guild.member(user).roles.has(warn1.id)) {
      message.channel.send("Done !");
      user.addRole(warn1);
      message.channel.send("It's The Warn Number 1");
    } else if (!message.guild.member(user).roles.has(warn2.id)) {
      message.channel.send("Done !");
      user.addRole(warn2);
      message.channel.send("It's The Warn Number 2");
    } else {
      user.ban();
      message.channel.send(
        "⚠|The Member Has Been Banned Because He Crossed Our Rules|⚠"
      );
    }
  }
});



client.on('message', async message => {
if(message.content.startsWith(prefix + "botowner")) {
  let i = client.users.size;
  if(message.author.id !== '672118394702659616') return message.reply(`You Aren't The Bot Owner`);
  message.reply("**You Are The Bot Owner** ")
}
})





const developers = ['672118394702659616'];
const adminprefix = "#";
client.on('message', msg => {
var argresult = msg.content.split(` `).slice(1).join(' ');
if (!developers.includes(msg.author.id)) return;
if (msg.content.startsWith(adminprefix + 'setavatar')) {
client.user.setAvatar(argresult);
msg.channel.send(`Changing The Avatar To :**${argresult}** `);
}
if (msg.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then
msg.channel.send(`Changing The Name To ..**${argresult}** `)
}
});




client.login(process.env.BOT_TOKEN);
