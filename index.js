const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");

client.on('ready', () => {
    console.log('(っ◔◡◔)っ ♥ Kyna ♥');
    client.user.setActivity("Music | k/help");
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

module.exports.run = async (client, message, args) => {
    function checkDays(date) {
        let now = new Date();
        let diff = now.getTime() - date.getTime();
        let days = Math.floor(diff / 86400000);
        return days + (days == 1 ? " day" : " days") + " ago";
    };
    let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
    let region = {
        "brazil": ":flag_br: Brazil",
        "eu-central": ":flag_eu: Central Europe",
        "singapore": ":flag_sg: Singapore",
        "us-central": ":flag_us: U.S. Central",
        "sydney": ":flag_au: Sydney",
        "us-east": ":flag_us: U.S. East",
        "us-south": ":flag_us: U.S. South",
        "us-west": ":flag_us: U.S. West",
        "eu-west": ":flag_eu: Western Europe",
        "vip-us-east": ":flag_us: VIP U.S. East",
        "london": ":flag_gb: London",
        "amsterdam": ":flag_nl: Amsterdam",
        "hongkong": ":flag_hk: Hong Kong",
        "russia": ":flag_ru: Russia",
        "southafrica": ":flag_za:  South Africa"
    };
    const embed = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .addField("Name", message.guild.name, true)
        .addField("ID", message.guild.id, true)
        .addField("Owner", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
        .addField("Region", region[message.guild.region], true)
        .addField("Total | Humans | Bots", `${message.guild.members.size} | ${message.guild.members.filter(member => !member.user.bot).size} | ${message.guild.members.filter(member => member.user.bot).size}`, true)
        .addField("Verification Level", verifLevels[message.guild.verificationLevel], true)
        .addField("Channels", message.guild.channels.size, true)
        .addField("Roles", message.guild.roles.size, true)
        .addField("Creation Date", `${message.channel.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(message.channel.guild.createdAt)})`, true)
        .setThumbnail(message.guild.iconURL)
    message.channel.send({embed});
}

module.exports.help = {
  name:"k/serverinfo"
}

client.login(process.env.token);
