const Discord = require('discord.js');
const client = new Discord.Client();
const request = require('request-promise');
const cheerio = require('cheerio');
const { Client, MessageEmbed } = require("discord.js");

client.on('ready', () => {
    console.log('(っ◔◡◔)っ ♥ Kyna ♥');
    client.user.setActivity("Twitter: @KynaDiscord");
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
    if (message.content === "k/di Lil_Bloody") {
      const embed = new MessageEmbed()
        .setTitle("**Dveloper Lil_Bloody information**")
        .setColor(0xf8a5ff)
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
        .setTitle('😲 New Poll! 😲')
        .setDescription(pollDescription)
        .setColor('RAINBOW')
        let msgEmbed = await pollChannel.send(embedPoll);
        await msgEmbed.react('👍')
        await msgEmbed.react('👎')
    }

})

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = message.content.substring(message.content.indexOf(' ')+1);

    if (cmd === '-subs'){
        let youtubechannelurl = 'https://www.youtube.com/user/bambinoonico';
        let response = await request(youtubechannelurl)
        let $ = cheerio.load(response)
        let subscriberCount = $('[class="yt-subscription-button-subscriber-count-branded-horizontal subscribed yt-uix-tooltip"]').attr('title');
        message.reply(`DashCraft Has ${subscriberCount} on YouTube!`)
    }
})


client.login(process.env.token);
