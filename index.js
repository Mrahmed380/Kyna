const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
let config = require("./config.json");

client.on('ready', () => {
    console.log('っ◔◡◔)っ Kyna Bot Onilne!');
    client.user.setActivity("K/help");
  });

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
  if (!channel) return;
  channel.send(`Welcome to the server, ${member}`);
});

    if(command === 'ping') {
    let embed = new Discord.RichEmbed()
    .setColor(3447003)
    .setTitle("Pong!!")
    .setDescription(`${client.ping} ms,`)
    .setFooter(`Requested by | ${msg.author.tag}`);
    msg.channel.send(embed);
    }

  client.on("message", message => {
    if (message.content === "sss") {
      const embed = new MessageEmbed()
        .setTitle("**s**")
        .setColor("fff000")
        .setThumbnail("https://cdn.discordapp.com/attachments/644776656203939850/723703299227910174/unknown.png")
        .addField("**Where to live** ", "[Korea]")
        .addField("**Birthday** ", "[April 6]")
        .addField("**Team** ", "[Kyna TM]")
        .addField("**Kyna Support server rank** ", "[Owner]")
        .addField("**Twitter:**", "[LilBloody_Twitter](https://twitter.com/LilBloody_)", true)
        .addField("**Twitter:**", "[Kyna_Twitter](https://twitter.com/KynaDiscord)", true)
        .setFooter("Can I help? | k/help", "https://cdn.discordapp.com/attachments/644776656203939850/723703299227910174/unknown.png");
      message.channel.send(embed);
    }
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

client.on('message', message => {
    if (message.content.toLowerCase() === '!test'){
        let filter = m => m.author.id === message.author.id;
        let q1 = new Discord.MessageCollector(message.channel, filter, {
            max: 1
        })
        message.channel.send('Which Channel you want me to send');

        q1.on('collect', async (message, col) => {
            let channel = message.mentions.channels.first();

            message.channel.send('What is the message you want to send in there?')
            q1.stop();
            let q2 = new Discord.MessageCollector(message.channel, filter, {
                max: 1
            })
            q2.on('collect', async (message, col) => {
                channel.send(message.content);
                await message.react('😀');
                message.channel.send(`Its working! go to ${channel} to check your message out!!`)
                q2.stop();
            })
        })


    }
})


client.login(process.env.token);
