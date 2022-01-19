const aoijs = require("aoi.js")
const bot = new aoijs.Bot({
token: "Add your bot token in here", //Discord Bot Token
prefix: ["$getServerVar[prefix1]", "$getServerVar[prefix2]", "$getServerVar[prefix3]", "Cool", "cool", "<@!$clientID>","<@$clientID>"],//Discord Bot Prefix
intents: "all",
mobilePlatform : true,
debugs:{

interpreter:false

},
fetchInvites: true,
//only for danbot users:
dbhToken:"add you danbot apikey"
})
const Lavalink = new aoijs.Lavalink(bot);
Lavalink.addNode({
 url: "lava.link:80",
 password: "neo",
 name: "aoi.js",
 secure: false,
 })
//only for danbot users:
var DanBotHosting = require("danbot-hosting");
 
async () => {

  const API = new DanBotHosting.Client("your danbot apikey", bot);
 
  // Start posting
  let initalPost = await API.autopost();

  if (initalPost) {
    console.error(initalPost); // console the error
  }
    let res = await API.botInfo()
 console.log(res)
};
//Events
bot.onMessage({
respondToBots: true,
guildOnly: true
})
//Command Example
bot.command({
name: "ping",
code: `$onlyIf[$guildID==$guildID;] 
$onlyIf[$getServerVar[channel]==$channelID; ]
$description[1;Pong!]
$addField[1;Host server ping;$ping ms]
$addField[1;DataBase ping;$dbPing ms]`
});
bot.command({
    name:"name",
    code:`$serverName[$message]`
})
bot.command({
    name:"8ball",
    code:`$jsonRequest[https://api.popcat.xyz/8ball?q=$replaceText[$message; ;+];answer;Please retry]
$sendMessage[:8ball: is 🤔]
$onlyIf[$guildID==$guildID;]
$onlyIf[$channelID==$getServerVar[channel];]`
});
bot.command({
    name:"server",
    code:`$serverIDs[ , ]`
})
bot.command({
    name:"ml",
    aliases:["message log"],
    code:`You setted <#$mentionedChannels[1]> for the message logs
$setServerVar[guildID;$guildID]
$setServerVar[ml;$mentionedChannels[1]]
$onlyPerms[manageserver;sorry but this command needs you to have manage Server Perm]`
});
bot.command({
    name:"remove ml",
    aliases:["remove message log"],
    code:`The bot will no longer send info about message edits or deletes.
$setServerVar[ml;922789993133518899]
$onlyPerms[manageserver; you need to have manage server perm]`
})
bot.command({
    name:"purge",
    aliases:["clear","delete"],
    code: `$if[$mentioned[1;no]==$mentioned[1;no];$clear[$noMentionMessage;$mentioned[1;no];$mentionedChannels[1]];$clear[$message]]
$deleteCommand
$argsCheck[>0;tell the amount of messages to clear]
$onlyBotPerms[managemessages;I don't have the required perm: Manage Messages]
$onlyPerms[managemessages;Take your big head away from this command]`
    //This will search in the latest 50 messages and will delete those from the author and returns the amount of deleted messages.
});
bot.command({
    name:"blur",
    code:`$djsEval[
const Discord = require('discord.js');
(async() => {
const DIG = require('discord-image-generation')
const attach = await new DIG.Blur().getImage('$userAvatar[$mentioned[1];4096;;png]', '$random[1;100]'); 
let attac = new Discord.MessageAttachment(attach, "delete.png");
 message.channel.send({files: [attac]}) ;
})() 
;yes]  
$onlyIf[$guildID==$guildID;]
$onlyIf[$channelID==$getServerVar[channel];]`
});
bot.command({
  name: "blend",
  code: `$djsEval[(async () => { 
    const Discord = require('discord.js');
const discordImgGen = require('image-generation-for-discord');
const image = await discordImgGen.avatarfusion('$userAvatar[$mentioned[1];4096;;png]', '$userAvatar[$mentioned[2];4096;;png]');
message.channel.send({
    files: [new Discord.MessageAttachment(image, "avatarfusion.png")]
})
})();yes]
$onlyIf[$guildID==$guildID;]$onlyIf[$channelID==$getServerVar[channel];]`
});
bot.command({
    name:"trash",
    code:`$djsEval[(async () => { 
    const Discord = require('discord.js');
const discordImgGen = require('image-generation-for-discord');
const image = await discordImgGen.trash('$userAvatar[$mentioned[1];4096;;png]');
message.channel.send({
    files: [new Discord.MessageAttachment(image, "trash.png")]
})
})();yes]
$onlyIf[$guildID==$guildID;]$onlyIf[$channelID==$getServerVar[channel];]`
})
bot.command({
name: "echo",
aliases:["say","repeat"],
code: `$onlyIf[$guildID==$guildID;] $onlyIf[$channelID==$getServerVar[channel];] 
$deleteCommand
$message`
});
bot.command({
name: "channel",
code: `
$setServerVar[channel;$mentionedChannels[1]]
$onlyPerms[managechannel; you can't do this]
$onlyBotPerms[sendmessage;readmessagehistory;Oi dumbo you think I can send a message without have the perm to send a message? or reading your message?]
<:success:918359316170408017> The bot will only respond in $channelName[$mentionedChannels[1]]
$onlyIf[$hasPerms[$clientID;viewchannel;readmessagehistory;sendmessages]==true;]`
});
bot.command({
    name: "calculate",
    aliases:["math"],
    code:`
$message = $math[$message]
$suppressErrors[please provide a vaild mathematical equation]`
})
bot.command({
    name:"jl",
    aliases:["join","leave","join/leave","join leave","wb","welcome","bye","welcome and bye"],
    code:`You successfully setted <#$mentionedChannels[1]> as join logs channel and <#$mentionedChannels[2]> as the leave logs channel
$setServerVar[guildID;$guildID]
$setServerVar[wc;$mentionedChannels[1]]
$setServerVar[bc;$mentionedChannels[2]]
$onlyPerms[manageserver;do what you're capable of!]`
});
bot.command({
    name:"hitler",
    code:`$image[1;https://api.devs-hub.xyz/hitler?image=$userAvatar[$mentioned[1]]]
$onlyIf[$guildID==$guildID;]
$onlyIf[$channelID==$getServerVar[channel];]`
});
bot.command({
    name:"rainbow",
    code:`$image[1;https://api.devs-hub.xyz/rainbow?image=$userAvatar[$mentioned[1]]]
$onlyIf[$guildID==$guildID;]
$onlyIf[$channelID==$getServerVar[channel];]`
});
bot.command({
    name:"triggered",
    code:`$djsEval[
const Discord = require('discord.js');
(async() => {
const DIG = require('discord-image-generation')
const attach = await new DIG.Triggered().getImage('$userAvatar[$mentioned[1];4096;;png]'); 
let attac = new Discord.MessageAttachment(attach, "delete.gif");
 message.channel.send({files: [attac]}) ;
})() 
;yes]
$onlyIf[$guildID==$guildID;]$onlyIf[$channelID==$getServerVar[channel];]`
})
bot.command({
    name:"usd",
    aliases:["upsidedown","up side down" ],
    code:`$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message;z;z];y;ʎ];x;x];w;ʍ];v;ʌ];u;n];t;ʇ];s;s];r;ɹ];q;b];p;d];o;o];n;u];m;ɯ];l;l];k;ʞ];j;ɾ];i;ı];h;ɥ];g;ɓ];f;ɟ];e;ǝ];d;p];c;ɔ];b;q];a;ɐ]
$onlyIf[$channelID==$getServerVar[channel];]$onlyIf[$guildID==$guildID;]`
})
bot.command({
    name:"server prefix",
    code: `$description[1;My prefix here are:] $addField[1;Prefix 1;$getServerVar[prefix1]]
$addField[1;Prefix 2;$getServerVar[prefix2]]
$addField[1;Prefix 3;$getServerVar[prefix3]]`
})
bot.command({

name: "prefix",

code: `$setServerVar[prefix1;$message[1]]
$setServerVar[prefix2;$message[2]]
$setServerVar[prefix3;$message[3]]
The bot's prefix are now $message[1] , $message[2] and $message[3]
$onlyPerms[manageserver;You can't do this]`

});
bot.command({
    name:"glitch", 
    code:`$image[1;https://api.devs-hub.xyz/glitch?image=$userAvatar[$mentioned[1]]]
$onlyIf[$guildID==$guildID;]$onlyIf[$channelID==$getServerVar[channel];]`
});
bot.command({
    name:"pika",
    code:`$image[1;https://api.popcat.xyz/pikachu?text=$replaceText[$message; ;+]]
$onlyIf[$guildID==$guildID;]$onlyIf[$channelID==$getServerVar[channel];]`
});
bot.command({
    name:"info",
    code:`$author[1;$username[$findUser[880462812537843754]];$userAvatar[$finduser[880462812537843754]]]
$title[1;My info]
$description[1;Yo! I'm cool, Livin' in thug.
My prefix is: cool.
My prefix is customisable.
I'm a multi purpose bot I've music, mod, fun, economy(soon),games(soon).]
$addField[1;Useful links:; [My support server](https://discord.gg/FSMTeH3hse) | [Invite me](https://discord.com/api/oauth2/authorize?client_id=918718860365033523&permissions=140500135382&scope=bot%20applications.commands)]
$addField[1;CPU usage:;$cpu%]
$addField[1;Ram used:;$ram mb /unlimited]
$addField[1;uptime;$uptime]
$addField[1;node.js version:;$nodeVersion]
$addField[1;name; $username[$clientID]]
$addField[1;discrminiator;$discriminator[$clientID]]
$addField[1;ID;$clientID]$addField[1;mentioning;<@!$clientID>]
$addField[1;Total Users;$allMembersCount]
$addField[1;Total servers;$serverCount]
$thumbnail[1;$userAvatar[$clientID]]
$footer[1;$userTag[$findUser[$clientID]]]
$if[$authorID==880462812537843754;$serverNames[ , ];]
$onlyIf[$guildID==$guildID;]
$onlyIf[$channelID==$getServerVar[channel];]`
});
bot.command({
    name:"hack",
    code: `
 **__Starting a dangerous Hack on $username[$findUser[$message;no]]__**
 
 $editIn[2s;[▗] Hacking $username[$findUser[$message;no]];[▖] Got the token of the user: **$randomString[15]**;[▘] Email of the user: **$replaceText[$username[$findUser[$message;no]]; ;_;-1]@gmail.com**;[▝] Password: **$randomString[8]**;[▗] Recent contacts: **$username[$randomUserID]**;[▖] Most used word: **$randomText[meme;lol;nah;lmao;dude;bruh;wut;nou;f;k;huh;bruh;breh;wtf?;bro;Noob]**;[▘]**Most used emoji: $randomText[<:huh:918357831864942603> ; <:wtf:918357862240092233> ; <:success:918359316170408017> ; <:nooooooice:919102171440619530> ; <:panik:919623206309085225> ; <:LMAO:919621619792621649> ; <:dare_u_lemme_think:919510178129412126>]**;[▘] Most recent dm message: **$randomText[I think you are mad af;bye;Why u blocked me;I am mad]**;[▝] Hacking medical records;[▗] Hacked Email(bypassed 2FA too);[▘] 50% Hack Complete;[▖] Injecting Latest version of Dengi into the account;[▘] Hacking microsoft account;[▝] Microsoft password: **$randomText[ZapIsZap@Zap.com;IAmNoob@gmail.com;ByeBye@ok.co.in;$replaceText[$username; ;_;-1]IsSmart@yahoo.com]**;[▗] Checking User Games Account;[▖] Plays $randomText[Fortnite(....);Subway Surfers;Temple Run;Clash of Clans;Roblox;Brawl Stars;Minecraft;Pubg;GTA V];[▘] Hacking epic games account;[▝] Epic games account hacked and deleted;[▝] 99% Hack completed......;
[▗] Discord IP: **$numberSeparator[$random[100000000;900000000];.]**;__The *totally* dangerous, risky and scary hack on $username[$findUser[$message;no]] is 100% complete!__]
 
 $onlyIf[$findUser[$message;no]!=;{newEmbed:{description: Invalid Args
Usage:
\`hack <user id | name | mention>\`}{color:RED}}]
 
$cooldown[5m; stop or I'll report you for cyber crime]
$onlyIf[$guildID==$guildID;]
$onlyIf[$channelID==$getServerVar[channel];]`
});
bot.command({
    name:"help",
    aliases:["commands","command list","cmd","Help","HELP"],
    code:`$title[1;Command list]
$description[1;Hi I'm $username[918718860365033523] My prefix is cool(customizeable)
Here are all of my current cmds:]
$addField[1;<:unv_bot:921303586669989890> utility; channel, prefix, server prefix, ping, avatar, dm, bdm, ubdm, info, jl, ml, remove ml, remove jl]
$addField[1;<a:troll:919224258167730208> fun; emojify, repeat, 8ball, usd(up side down), pika, hack]
$addField[1;:mag: search; lyrics, google, yt, playstore, weather]
$addField[1;<:big_brain:920910495974821908> facts; fact, dog, cat, koala, fox, panda, red panda, bird, racoon, kangaroo]
$addField[1;<:dankek:918740745127600209> IMAGES; avatar, gun, wasted, busted, imposter, grab, hitler, rainbow, triggered(to see it animated click on the image), glitch, slap, spank, bed, blur, trash]
$addField[1;<a:DJ:918357588607897630> music; play, queue, np, skip, stop, pause, resume, loop, tpr, volume, equalizer, 8D]
$addField[1;:speaking_head: Chatbot; Set an AI channel by running cool ai <#mention a channel> recommend that the channel is different from <#$getServerVar[channel]>. Then just type your message without prefix or anything ]
$onlyIf[$guildID==$guildID;]
$onlyIf[$channelID==$getServerVar[channel];]
$onlyIf[$getServerVar[channel]>0;Ask a person with manage channel perm to set a channel for me by running : cool channel <#mention a channel>]`
})
bot.command({

name: "avatar",

code: `$onlyIf[$guildID==$guildID;] 
$title[1;Avatar of $username[$findUser[$message]] #$discriminator[$findUser[$message]]
$description[1;Link as:
[JPG]($replaceText[$userAvatar[$findUser[$message]];webp;jpg;1] 'avatar jpg') | [PNG]($replaceText[$userAvatar[$findUser[$message]];webp;png;1] 'avatar png') | [WEBP]($userAvatar[$findUser[$message]] 'avatar webp')] 
$image[1;$replaceText[$userAvatar[$findUser[$message]];?size=2048;?size=4096;1]]`

});
bot.command({

name: "gun",
aliases:["gangster","GANGSTER"],
code: `$onlyIf[$channelID==$getServerVar[channel];]
$onlyIf[$guildID==$guildID; ]
$image[1;https://api.devs-hub.xyz/gun?image=$userAvatar[$mentioned[1;yes]]]`

});
bot.command({

name: "wasted",
aliases:["killed","dead"],
code: ` $onlyIf[$channelID==$getServerVar[channel];]
$onlyIf[$guildID==$guildID;]
$description[1;$username Wasted $username[$mentioned[1;yes]]]
$image[1;https://api.devs-hub.xyz/wasted?image=$userAvatar[$mentioned[1;yes]]]
$deletecommand 
$cooldown[10s;waittttttttt]`

});
bot.command({

name: "busted",
aliases:["jail"],
code: `$onlyIf[$channelID==$getServerVar[channel];]
$onlyIf[$guildID==$guildID]
$title[1;🚨 **YOU HAVE BEEN JAILED** 🚨]
$image[1;https://api.devs-hub.xyz/jail?image=$userAvatar[$mentioned[1;yes]]]
$color[1;$random[0;999999]]
$cooldown[10s;waitttttttt]`

});
bot.command({

name: "imposter",

code: `$onlyIf[$channelID==$getServerVar[channel];]
$onlyIf[$guildID==$guildID;]
$image[1;https://vacefron.nl/api/ejected?name=$replaceText[$username[$mentioned[1]]; ;+]&impostor=$randomText[true;false]&crewmate=$randomText[black;blue;brown;cyan;darkgreen;lime;orange;pink;purple;red;white;yellow]]
$title[1;let's see if $username[$mentioned[1;yes]] is an imposter]
$cooldown[2m; $randomText[wait %time% let everyone join; I'm connecting to the server %time%]]
$footer[1;The cooldown is 2m]`

});
bot.command({
    name:"spank",
    code:`$image[1;https://api.devs-hub.xyz/spank?face=$userAvatar[$mentioned[1]]L&face2=$userAvatar[$mentioned[2]]]
$onlyIf[$guildID==$guildID;]
$onlyIf[$channelID==$getServerVar[channel];]`
});
bot.command({
    name:"bed",
code:`$image[1;https://api.devs-hub.xyz/bed?user1=$userAvatar[$mentioned[1]]&user2=$userAvatar[$mentioned[2]]]
$onlyIf[$channelID==$getServerVar[channel];]$onlyIf[$guildID==$guildID;]`
    });
bot.command({
    name:"slap",
    code:`$image[1;https://vacefron.nl/api/batmanslap?text1=$replaceText[$randomText[Soory $username[$mentioned[1]] for my mistake; forgive me for my mistakes; It wasn't my fault please leave me]; ;+]&text2=$replaceText[$noMentionMessage; ;+]&batman=$userAvatar[$mentioned[1]]&robin=$userAvatar[$mentioned[2]]
$argsCheck[>2;please write the reason $username[$mentioned[1]] is slapping $username[$mentioned[2]]]
$onlyIf[$channelID==$getServerVar[channel];]$onlyIf[$guildID==$guildID;]`
})
bot.command({

name: "grab",

code: `$onlyIf[$channelID==$getServerVar[channel];]
$onlyIf[$guildID==$guildID]$title[1;I wil from $noMentionMessage $username[$mentioned[1;yes]]]

$image[1;https://api.devs-hub.xyz/grab?image=$userAvatar[$authorID]]

$argsCheck[>2; $randomText[Tell what to grab and from whom?; Idk wwhatyou want and of or from whom]]

$cooldown[5s; wait let my hands have some rest]`

});
bot.command({
    name:"fact",
    code:`$jsonRequest[https://api.popcat.xyz/fact;fact;no facts found]
$onlyIf[$channelID==$getServerVar[channel];]$onlyIf[$guildID==$guildID;]`
});
bot.command({
name: "dog",
aliases: ["fact dog","dog fact"],
code: `$description[1;$httpRequest[https://some-random-api.ml/animal/dog;GET;;fact]]
$image[1;$httpRequest[https://some-random-api.ml/animal/dog;GET;;image]]
$onlyIf[$channelID==$getServerVar[channel];]$onlyIf[$guildID==$guildID;]`
});
bot.command({
name: "cat",
aliases: ["fact cat","cat fact"],
code: `$description[1;$httpRequest[https://some-random-api.ml/animal/cat;GET;;fact]]
$image[1;$httpRequest[https://some-random-api.ml/animal/cat;GET;;image]]
$onlyIf[$channelID==$getServerVar[channel];]$onlyIf[$guildID==$guildID;]`
});
bot.command({
name: "panda",
aliases: ["fact panda","panda fact"],
code: `$description[1;$httpRequest[https://some-random-api.ml/animal/panda;GET;;fact]]
$image[1;$httpRequest[https://some-random-api.ml/animal/panda;GET;;image]]
$onlyIf[$channelID==$getServerVar[channel];]$onlyIf[$guildID==$guildID;]`
});
bot.command({
name: "fox",
aliases: ["fact fox","fox fact"],
code: `$description[1;$httpRequest[https://some-random-api.ml/animal/fox;GET;;fact]]
$image[1;$httpRequest[https://some-random-api.ml/animal/fox;GET;;image]]
$onlyIf[$channelID==$getServerVar[channel];]$onlyIf[$guildID==$guildID;]`
});
bot.command({
name: "red panda",
aliases: ["fact red panda","red panda fact"],
code: `$description[1;$httpRequest[https://some-random-api.ml/animal/red_panda;GET;;fact]]
$image[1;$httpRequest[https://some-random-api.ml/animal/red_panda;GET;;image]]
$onlyIf[$channelID==$getServerVar[channel];]$onlyIf[$guildID==$guildID;]`
});
bot.command({
name: "koala",
aliases: ["fact koala","koala fact"],
code: `$description[1;$httpRequest[https://some-random-api.ml/animal/koala;GET;;fact]]
$image[1;$httpRequest[https://some-random-api.ml/animal/koala;GET;;image]]
$onlyIf[$channelID==$getServerVar[channel];]$onlyIf[$guildID==$guildID;]`
});
bot.command({
name: "bird",
aliases: ["fact bird","bird fact"],
code: `$description[1;$httpRequest[https://some-random-api.ml/animal/bird;GET;;fact]]
$image[1;$httpRequest[https://some-random-api.ml/animal/bird;GET;;image]]
$onlyIf[$guildID==$guildID;]$onlyIf[$channelID==$getServerVar[channel];]`
});
bot.command({
name: "racoon",
aliases: ["fact raccoon","racoon fact"],
code: `$description[1;$httpRequest[https://some-random-api.ml/animal/racoon;GET;;fact]]
$image[1;$httpRequest[https://some-random-api.ml/animal/racoon;GET;;image]]
$onlyIf[$guildID==$guildID;]
$onlyIf[$channelID==$getServerVar[channel];]`
});
bot.command({
name: "kangaroo",
aliases: ["fact kangaroo","kangaroo fact"],
code: `$description[1;$httpRequest[https://some-random-api.ml/animal/kangaroo;GET;;fact]]
$image[1;$httpRequest[https://some-random-api.ml/animal/kangaroo;GET;;image]]
$onlyIf[$guildID==$guildID;]
$onlyIf[$channelID==$getServerVar[channel];]`
});
bot.command({
    name:"blink",
    code:`$djsEval[

const Discord = require('discord.js');

(async() => {

const DIG = require('discord-image-generation')

const attach = await new DIG.Blink().getImage('$userAvatar[$mentioned[1];4096;;png]', '$userAvatar[$mentioned[2];4096;;png]'); 

let attac = new Discord.MessageAttachment(attach, "delete.gif");

 message.channel.send({files: [attac]}) ;

})() 

;yes]
$onlyIf[$guildID==$guildID;]$onlyIf[$channelID==$getServerVar[channel];]`
})
bot.command({
    name: "lyrics",
    code: `$title[1;$httpRequest[https://api.popcat.xyz/lyrics?song=$replaceText[$message; ;+];GET;;full_title];$jsonRequest[https://api.popcat.xyz/lyrics?song=$replaceText[$message; ;+];url;error while fetching links]]
$author[1;$httpRequest[https://api.popcat.xyz/lyrics?song=$replaceText[$message;  ;+];GET;;artist];$authorAvatar]
$description[1;$httpRequest[https://api.popcat.xyz/lyrics?song=$replaceText[$message;  ;+];GET;;lyrics]]
$thumbnail[1;$jsonRequest[https://api.popcat.xyz/lyrics?song=$replaceText[$message;  ;+];image;error occurred]
$footer[1;$jsonRequest[https://api.popcat.xyz/lyrics?song=$replaceText[$message;;+];title]]
$botTyping
$sendMessage[searching for the lyrics of $message]
$onlyIf[$guildID==$guildId;]$onlyIf[$channelID==$getServerVar[channel];]`
    });
bot.command({

name: "emojify",
aliases: ["text emoji"],
code: `$httpRequest[https://api.devs-hub.xyz/emojify?text=$replaceText[$message; ;+];GET;;emojify;]`

});
bot.command({
    name:"ai",
    aliases:["ai channel","chat channel "],
    code:`$setServerVar[ai;$mentionedChannels[1]] 
$sendMessage[Bot's ai is setted for <#$mentionedChannels[1]>]
$onlyPerms[managechannel;you ought have manage channels perm for this]`
})
bot.command({
    name:"unknown",
    code: `
$jsonRequest[https://api.popcat.xyz/chatbot?msg=$replaceText[$message; ;+]&owner=$replaceText[$username[880462812537843754]; ;+]&botname=$replaceText[$username[918718860365033523]; ;+];response;error occurred]
$botTyping
$onlyIf[$channelID==$getServerVar[ai];]
`,
    nonPrefixed:false
});
bot.command({
    name: "dm",
    aliases:["direct message","DM","message"],
    code:` $sendDM[$username has messaged you: $noMentionMessage **A msg from me**:If you don't want ppl to send u dm's pls run cool bdm. This DM was sent to   from $servername;$mentioned[1;yes]]
$argsCheck[>1;mention someone and the message to send]
$onlyIf[$guildID==$guildID;]
$onlyIf[$channelID==$getServerVar[channel];]
$onlyIf[$getGlobalUserVar[DND;$mentioned[1;yes]]==false;they are not having their DM's open for your messages]`
});
bot.command({
    name:"bdm",
    aliases:["block dm","block direct messages","BDM"],
    code: `<:success:864376134182895626> now no one will send you DM's through me
$setGlobalUserVar[DND;true;$authorID]
$onlyIf[$guildID==$guildID;]$onlyIf[$channelID==$getServerVar[channel];]`
});
bot.command({
    name:"udm",
    aliases:["ubdm","UDM","UBDM","unblock dm","unblock direct message"],
    code: `<:success:864376134182895626> now people can send you messages through me
$setGlobalUserVar[DND;false;$authorID]
$onlyIf[$guildID==$guildID; ]
$onlyIf[$channelID==$getServerVar[channel];]`
});
bot.command({
    name: "google",
    code: `$onlyIf[$channelID==$getServerVar[channel];]
$deletecommand
$author[1;Google Search;https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2000px-Google_%22G%22_Logo.svg.png]
$description[1;[Searching Google...](https://www.google.com/search?q=$replaceText[$message; ;+])
Search : $message
Author : $username]
$color[1;$random[111111;999999]]
$image[1;https://image.thum.io/get/https://google.com/search?q=$replaceText[$message; ;+]]
$argsCheck[>1; what am I going to search? ]
$onlyIf[$guildID==$guildID;]
`
});
bot.command({

    name:"yt",

    aliases:["youtube"],

code:`
$title[1;$getObjectProperty[title];$getObjectProperty[url]]

$description[1;$getObjectProperty[description]]

$author[1;YouTube;https://cdn.discordapp.com/attachments/576017761831092225/579033167185444904/youtube-logo-png-2069_thumb1200_4-3.webp]

$createObject[$JsonRequest[https://normal-api.ml/youtube/searchvideo?query=$replaceText[$message; ;+]]]

$footer[1;By google]
    $sendMessage[Searching YouTube for $message;no]

$onlyIf[$guildID==$guildID;]

$onlyIf[$channelID==$getServerVar[channel];]`

});
bot.command({
    name:"no jl",
    aliases:["remove jl"],
    code:`Bot will now no longer send jl logs
$setServerVar[wc;922789993133518899]
$setServerVar[bc;922789993133518899]
$onlyPerms[manageserver;you need to have manage server perm for this]`
})
bot.command({
    name:"playstore",
    code:`$title[1;$getObjectProperty[title];$getObjectProperty[url]]
$description[1;$getObjectProperty[summary]]
$addField[1;Developer;$getObjectProperty[developer]]
$addField[1;price;$getObjectProperty[priceText]]
$addField[1;ratings;$getObjectProperty[scoreText]⭐]
$addField[1;genre;$jsonRequest[https://api.popcat.xyz/playstore?q=$replaceText[$message; ;+];genre]]
$addField[1;Installs;$jsonRequest[https://api.popcat.xyz/playstore?q=$replaceText[$message; ;+];installations]]
$addField[1;Recent Comments;$jsonRequest[https://api.popcat.xyz/playstore?q=$replaceText[$message; ;+];comment]]
$thumbnail[1;$getObjectProperty[icon]]
$sendMessage[search for $message on play store ]
$createObject[$jsonRequest[https://api.miduwu.ml/playstore?q=$replaceText[$message; ;+]&key=get your own]]
$onlyIf[$guildID==$guildID;]$onlyIf[$channelID==$getServerVar[channel];]`
});
bot.command({
    name: "image",
    code: `
$image[1;$jsonRequest[https://normal-api.ml/image-search?query=$replaceText[$message; ;+]&redirect=false;image;erroroccurred]
$sendMessage[searching for the image of $message]
$onlyIf[$guildID==$guildID;]
$onlyIf[$channelID==$getServerVar[channel];]`
});
bot.command({
    name: "gif",
    code: `
$image[1;$jsonRequest[https://normal-api.ml/image-search?query=$replaceText[$message; ;+]+gif&redirect=false;image;erroroccurred]
$sendMessage[searching for the gif of $message]
$onlyIf[$guildID==$guildID;]
$onlyIf[$channelID==$getServerVar[channel];]`
})
//for the following command explaination contact me coz I may or may not add it the readme.md file
bot.command({
    name:"$alwaysExecute",
    code:`$channelSendMessage[932589549853474846;$UserTag[$findUser[$message]] Just voted me]
$sendDM[thanks for voting me, vote rewards are coming soon;$message]
$onlyForIDs[your second bot ID;your ID; ]
$onlyIf[$channelID==channelID where your second bot will send the voterID;]`,
    nonPrefixed:true
})
bot.command({
    name: "weather",
    aliases:["weather forecast","forecast"],
    code: `$image[1;https://api.cool-img-api.ml/weather-card?location=$replaceText[$message; ;+]]
$argsCheck[>0;weather of? ]
$onlyIf[$guildID==$guildID;]
$onlyIf[$channelID==$getServerVar[channel];]`
});
bot.command({
    name:"8D",
    aliases:["8d"],
    code:` enabled 8D
$lavalinkExecute[addFilters;rotation={"rotationHz": $message[1]}]
$onlyIf[$isNumber[$message[1]]==true;rotation speed only numbers]
$argsCheck[1;usage: cool 8D <rotation speed>]`
});
bot.command({
 name: "play",
 code: `
 Added $lavalinkExecute[songInfo;title] to queue
 $let[a;$lavalinkExecute[$replaceText[$replaceText[$lavalinkExecute[isIdling];true;play];false;volume]]]
 $log[$lavalinkExecute[isIdling]|$lavalinkExecute[isPlaying]|$lavalinkExecute[isPaused]]
 $let[a;$lavalinkExecute[addtrack;$get[key];1]]
 $let[key;$lavalinkExecute[search;$message]]
 $lavalinkExecute[connect]
$argsCheck[>; type the name of a song! ]
`
});
bot.command({
  name: "nowplaying",
  aliases: ["np"],
  code: `
  $thumbnail[1;$lavalinkExecute[getthumbnail;$get[a];hqdefault]]
  $let[a;$lavalinkExecute[songinfo;identifier]]
  $description[1;
Volume is $lavalinkExecute[volume]%
Track Ends in $lavalinkExecute[songinfo;duration_left]
Current position is $lavalinkExecute[songinfo;current_duration]
Track duration is $lavalinkExecute[songinfo;duration]]
  $color[1;RANDOM]
  $author[1;Track playing - $lavalinkExecute[songinfo;title]]
 $suppressErrors[nothing playing rn]`
});
bot.command({
    name:"equalizer",
    code:`applied filter: Equalizer
$lavalinkExecute[addFilters;equalizer={"band": $splitText[1], "gain": $splitText[2]}]
$onlyIf[$splitText[1]!=;please enter the value like 1/4 , 6/5 etc., The value before the / is of band and the one after / is of gain]
$onlyIf[$splitText[2]!=;pls enter values like 1/4,6/8 etc. values before / is for band and value after / is of gain]
$onlyIf[$isNumber[$splitText[1]]==true; values to be in numbers only]
$onlyIf[$isNumber[$splitText[2]]==true; values to be in numbers only]
$textSplit[$message;/]`
});
bot.command({
    name: "queue",
    code: `
    $title[1;Player's queue]
    $image[1;$lavalinkExecute[getthumbnail;$lavalinkExecute[songinfo;identifier];hqdefault]]
    $description[1;Now playing [$lavalinkExecute[songinfo;title]]($lavalinkExecute[songinfo;url])
$lavalinkExecute[queue]
$suppressErrors[no songs in queue]
    $color[1;RANDOM]
   `
});
bot.command({
    name:"loop song",
    aliases: ["loop track"],
    code: `$lavalinkExecute[loopmode;track] song looped
$suppressErrors[no songs playing]`
});
bot.command({
    name:"time",
    aliases:["tpr","pitch","rate","time pitch rate"],
    code:`Changed speed to $message[1], pitch to $message[2],rate to $message[3].
$lavalinkExecute[addFilters;timescale={"speed": $message[1], "pitch": $message[2], "rate": $message[3]}]`
});
bot.command({
    name:"volume",
    code: `volume changed to $message
values more than 100 may cause earraping
$lavalinkExecute[volume;$message[1]
$onlyif[$isNumber[$message[1]]==true; volume only in numbers]`
});
bot.command({
    name: "skip",
    aliases:["skip song","play next","forward"],
    code: `Skipped the song to $lavalinkExecute[songinfo;title]
$lavalinkExecute[skip;$message[1]]
$suppressErrors[No songs in queue]
$onlyIf[$isNumber[$message[1]]==true;type the songs to skip]`
});
bot.command({
    name: "pause",
    code: `Paused the current track
$lavalinkExecute[pause]
$suppressErrors[No song playing currently]`
});
bot.command({
    name: "resume",
    code: `resumed the current track
$lavalinkExecute[resume]
$suppressErrors[No song playing currently]`
});
bot.command({
    name: "stop",
    aliases: ["clear queue","stop queue"],
    code: `Stopped the current track and cleared the queue $lavalinkExecute[stop]
$suppressErrors[No song in queue]`
});
bot.command({
    name: "join",
    aliases: ["join vc","connect"],
    code: `$lavalinkExecute[connect]
$suppressErrors[please join a vc first]`
});
bot.command({
    name: "leave",
    aliases:["leave vc","disconnect"],
    code: `$lavalinkExecute[disconnect]`
});
Lavalink.trackStartCommand({
    channel: "$channelID",
    code: `
    Track started - $lavalinkExecute[songinfo;title]`
});
Lavalink.trackEndCommand({
    channel: "$channelID",
    code: `
    Track ended - $lavalinkExecute[songInfo;title]`
});
//Ready Event
bot.readyCommand({
    channel: "channelID of your bot logs",
    code: `I'm online $log[Ready on $userTag[$clientID]]`
});
bot.readyCommand({
channel:"make a channel where a bot will post the voter and enter the channelID here",
code: `$djsEval[const { AutoPoster } = require('topgg-autoposter');
AutoPoster('your top.gg webhook token', client).on('posted', () => { client.channels.cache.get("same ID as in the channel we add for this command").send('Posted stats to Top.gg') 
});no]`
});
bot.readyCommand({
    channel:"same as above",
    code:`$djsEval[const { AutoPoster } = require('topgg-autoposter')

const poster = AutoPoster('your top.gg webhook token', client)

poster.on('posted', (stats) => {
  client.channels.cache.get("same as channelID you entered").send('Posted stats to Top.gg | bot in $servercount servers')
});no]`
})
bot.variables({
channel: "0", 
Money: "0",
bank: "10000",
wealth: "0",
DND:"false",
passive:"off",
heist:"on",
rob:"on", 
friendly: "false",
prefix1: "CoOl",
prefix2: "thug",
prefix3: "Thug",
ai:"0",
guildID:"",
wc:"",
bc:"",
ml:"",
wcm:"Hello (username) to (servername), hope you will enjoy here",
bcm:"Bye (username), Hope you had a good Time in (servername)"
})
bot.status({
        text: "Rock music",
        type: "LISTENING",
        time: 12
    });
bot.status({
    text: "$allMembersCount users",
    type: "WATCHING",
    time: 12
})
bot.onGuildLeave()
bot.guildLeaveCommand({
channel: "your bot server log channelID",
code: `
I have left $serverName!
`
})
bot.onGuildJoin()
bot.guildJoinCommand({
channel: "same as above",
code: `
Ive joined $serverName!
`
});
bot.loopCommand({
code: `
I'm online rn.
`,
channel: "your bot status logs channelID",
executeOnStartup: true,
every: 300000
})

/*
This command will send 'I'm online rn' to the given channel id every 5 minutes. 
ExecuteOnStartup means when the bot starts/comes online, the loop will start
*/

bot.guildJoinCommand({
    channel: "$systemChannelID[$guildID]",
    code:`Hi, I'm $username[$clientID] my prefix is enter your own prefix, and my help command is your prefix and help command name before you start you need to ask a person with manage channel perm to set a response channel for me`
})
bot.onJoin()
bot.joinCommand({ 
        channel: "$getServerVar[wc]", 
        code: `$replaceText[$replaceText[$getServerVar[wcm];(username);$username];(servername);$servername]

$onlyIf[$guildID==$guildID;]
$onlyIf[$getServerVar[guildID]==$guildID;]`
        /*
                Code Breakdown
        $serverName - The name of the server the user left
        $username - The user who left the server
        */
});
bot.onLeave()
bot.leaveCommand({ 

        channel: "$getServerVar[bc]", 

        code:`$replaceText[$replaceText[$getServerVar[bcm];(username);$username];(servername);$servername]
$onlyIf[$guildID==$guildID;]
$onlyIf[$getServerVar[guildID]==$guildID;]`

        /*

                Code Breakdown

        $serverName - The name of the server the user left

        $username - The user who left the server

        */

})
bot.onMessageDelete()
bot.deletedCommand({
    channel: "$getServerVar[ml]",
    code: `$title[1;A message deletation was detected!]
$description[1;A Message was deleted in <#$channelUsed> from $username]
$thumbnail[1;$authorAvatar]
$addField[1;Message;$message]
$onlyIf[$guildID==$guildID;]
$onlyIf[$getServerVar[guildID]==$guildID;]
$onlyIf[$isBot==false;]
$suppressErrors`
    /*
        Code Breakdown
        $username - The user who wrote the message
        $channelUsed - The channel where the message was deleted
        $message - The message that was deleted
    */
})
bot.onMessageUpdate()
bot.updateCommand({
        channel: "$getServerVar[ml]", 
        code: `$title[1;A message edit was found!]
$description[1;Message edited from $username in <#$channelUsed>]
$addField[1;New message:;$message]
$addField[1;Old message:;$oldMessage]
$onlyIf[$guildID==$guildID;]
$onlyIf[$getServerVar[guildID]==$guildID;]
$onlyIf[$isBot==false;]
$suppressErrors`
/*
        Code Breakdown
$message - The new message
$oldMessage - The message before it was edited (This function only works in this callback)
$username - The person who edited the message
$channelUsed - Where the person edited the message
*/
})
