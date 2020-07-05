const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const bot = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTTION"]});
const prefix = "!";

client.on('ready', () => {
    console.log('っ◔◡◔)っ Kyna Bot Onilne!');
    client.user.setActivity("Dm으로 보내진건 TOKEN이 털려서 보내진겁니다. 죄송합니당;;");
  });

  client.on("message", message => {
    if (!message.guild) return;
  
    if (message.content.startsWith("k/kick")) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member
            .kick("Optional reason that will display in the audit logs")
            .then(() => {
              message.reply(`Successfully kicked ${user.tag}`);
            })
            .catch(err => {
              message.reply("I was unable to kick the member");
              console.error(err);
            });
        } else {
          message.reply("That user isn't in this guild!");
        }
      } else {
        message.reply("You didn't mention the user to kick!");
      }
    }
  });
  
  client.on("message", message => {
    if (!message.guild) return;
  
    if (message.content.startsWith("k/ben")) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member
            .ban({
              reason: "They were bad!"
            })
            .then(() => {
              message.reply(`Successfully banned ${user.tag}`);
            })
            .catch(err => {
              message.reply("I was unable to ban the member");
              console.error(err);
            });
        } else {
          message.reply("That user isn't in this guild!");
        }
      } else {
        message.reply("You didn't mention the user to ban!");
      }
    }
  });

  client.on("message", message => {
    if (message.content === "happy") {
      message.react("😄");
    }
  });

  client.on("message", message => {
    if (message.content === "k/di LOL") {
      const embed = new MessageEmbed()
        .setTitle("**Dveloper Lil_Bloody information**")
        .setColor("RANDOM")
        .setThumbnail(
          "https://cdn.discordapp.com/attachments/644776656203939850/723703299227910174/unknown.png"
        )
        .addField("**Where to live** ", "[Korea]")
        .addField("**Birthday** ", "[April 6]")
        .addField("**Team** ", "[Kyna TM]")
        .addField("**Kyna Support server rank** ", "[Owner]")
        .addField(
          "**Twitter:**",
          "[LilBloody_Twitter](https://twitter.com/LilBloody_)",
          true
        )
        .addField(
            "**Twitter:**",
            "[Kyna_Twitter](https://twitter.com/KynaDiscord)",
            true
          )
        .setFooter("Can I help? | k/help", "https://cdn.discordapp.com/attachments/644776656203939850/723703299227910174/unknown.png");
      message.channel.send(embed);
    }
  });

 client.on("message", message => {
    if (message.content === "k/help") {
      const embed = new MessageEmbed()
        .setTitle("**Dveloper Lil_Bloody information**")
        .setColor("0xfbe3fd")
        .setThumbnail("https://cdn.discordapp.com/attachments/644776656203939850/723703299227910174/unknown.png")
        .addField("**Where to live** ", "[Korea]")
        .addField("**Birthday** ", "[April 6]")
        .addField("**Team** ", "[Kyna TM]")
        .addField("**Kyna Support server rank** ", "[Owner]")
        .addField("**Twitter:**", "[LilBloody_Twitter](https://twitter.com/LilBloody_)", true)
        .addField("[Twitter](https://twitter.com/ShellyDev_TwT)", true)
        .setFooter("Can I help? | k/help", "https://cdn.discordapp.com/attachments/644776656203939850/723703299227910174/unknown.png");
      message.channel.send(embed);
    }
  });

client.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    const messageArray = message.content.split(' ');
	const cmd = messageArray[0];
	const args = messageArray.slice(1);

    if (cmd === '-poll'){
        let pollChannel = message.mentions.channels.first();
        let pollDescription = args.slice(1).join(' ');

        let embedPoll = new Discord.MessageEmbed()
        .setTitle('**POLL**')
        .setDescription(pollDescription)
        .setColor('RANDOM')
        let msgEmbed = await pollChannel.send(embedPoll);
        await msgEmbed.react('👍')
        await msgEmbed.react('👎')
    }

})

client.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    const messageArray = message.content.split(' ');
	const cmd = messageArray[0];
	const args = messageArray.slice(1);

    if (cmd === '-rule'){
        let pollChannel = message.mentions.channels.first();
        let pollDescription = args.slice(1).join(' ');

        let embedPoll = new Discord.MessageEmbed()
        .setTitle('RULES')
        .setDescription(pollDescription)
        .setColor('RANDOM')
        let msgEmbed = await pollChannel.send(embedPoll);
    }

})
bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

  let prefix = botsettings.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.content.substring(message.content.indexOf(' ')+1);
	
  if(!message.content.startsWith(prefix)) return;
  let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
  if(commandfile) commandfile.run(bot,message,args)

  if (cmd === `${prefix}reaction`){
       let embed = new Discord.MessageEmbed()
       .setTitle('Verify')
       .setDescription('TexT')
       .setColor('RANDOM')
       let msgEmbed = await message.channel.send(embed)
       msgEmbed.react('😐︎')
     }
})

bot.on('messageReactionAdd', async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.farch();
    if (reaction.partial) await reaction.fetch();

    if(user.bot) return;
    if (!reaction.message.guild) return;

    if(reaction.message.channel.id === '723112243079675947') {
       if(reaction.emoji.name ==== '😐︎'){
          await reaction.message.guild.members.cache.get(user.id).roles.add('727395458833580062')
       }
    }
})

bot.on('messageReactionRemove', async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.farch();
    if (reaction.partial) await reaction.fetch();

    if(user.bot) return;
    if (!reaction.message.guild) return;

    if(reaction.message.channel.id === '723112243079675947') {
       if(reaction.emoji.name ==== '😐︎'){
          await reaction.message.guild.members.cache.get(user.id).roles.remove('727395458833580062')
       }
    }
})

client.login(process.env.token);
