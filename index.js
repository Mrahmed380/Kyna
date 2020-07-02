const Discord = require('discord.js');
const client = new Discord.Client();
const { MessageEmbed } = require('discord.js');
const moment = require('moment');
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
        .setColor('0x1fd3f7')
        let msgEmbed = await pollChannel.send(embedPoll);
        await msgEmbed.react('👍')
        await msgEmbed.react('👎')
    }

})

const flags = {
	DISCORD_EMPLOYEE: 'Discord Employee',
	DISCORD_PARTNER: 'Discord Partner',
	BUGHUNTER_LEVEL_1: 'Bug Hunter (Level 1)',
	BUGHUNTER_LEVEL_2: 'Bug Hunter (Level 2)',
	HYPESQUAD_EVENTS: 'HypeSquad Events',
	HOUSE_BRAVERY: 'House of Bravery',
	HOUSE_BRILLIANCE: 'House of Brilliance',
	HOUSE_BALANCE: 'House of Balance',
	EARLY_SUPPORTER: 'Early Supporter',
	TEAM_USER: 'Team User',
	SYSTEM: 'System',
	VERIFIED_BOT: 'Verified Bot',
	VERIFIED_DEVELOPER: 'Verified Bot Developer'
};

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['user', 'ui'],
			description: 'Displays information about a provided user or the message author.',
			category: 'Information',
			usage: '[user]'
		});
	}

	async run(message, [target]) {
		const member = message.mentions.members.last() || message.guild.members.cache.get(target) || message.member;
		const roles = member.roles.cache
			.sort((a, b) => b.position - a.position)
			.map(role => role.toString())
			.slice(0, -1);
		const userFlags = member.user.flags.toArray();
		const embed = new MessageEmbed()
			.setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512 }))
			.setColor(member.displayHexColor || 'BLUE')
			.addField('User', [
				`**❯ Username:** ${member.user.username}`,
				`**❯ Discriminator:** ${member.user.discriminator}`,
				`**❯ ID:** ${member.id}`,
				`**❯ Flags:** ${userFlags.length ? userFlags.map(flag => flags[flag]).join(', ') : 'None'}`,
				`**❯ Avatar:** [Link to avatar](${member.user.displayAvatarURL({ dynamic: true })})`,
				`**❯ Time Created:** ${moment(member.user.createdTimestamp).format('LT')} ${moment(member.user.createdTimestamp).format('LL')} ${moment(member.user.createdTimestamp).fromNow()}`,
				`**❯ Status:** ${member.user.presence.status}`,
				`**❯ Game:** ${member.user.presence.game || 'Not playing a game.'}`,
				`\u200b`
			])
			.addField('Member', [
				`**❯ Highest Role:** ${member.roles.highest.id === message.guild.id ? 'None' : member.roles.highest.name}`,
				`**❯ Server Join Date:** ${moment(member.joinedAt).format('LL LTS')}`,
				`**❯ Hoist Role:** ${member.roles.hoist ? member.roles.hoist.name : 'None'}`,
				`**❯ Roles [${roles.length}]:** ${roles.length < 10 ? roles.join(', ') : roles.length > 10 ? this.client.utils.trimArray(roles) : 'None'}`,
				`\u200b`
			]);
		return message.channel.send(embed);
	}

};

client.login(process.env.token);
