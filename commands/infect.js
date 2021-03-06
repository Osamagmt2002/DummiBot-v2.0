function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};
const boolean = [
    "Successful",
    "Failed"
]
const { Command } = require('discord-akairo');
const Discord = require('discord.js');
class InfectCommand extends Command {
    constructor() {
        super('infect', {
            aliases: ['infect', 'hack', 'covid-19'],
            category: 'fun',
            description: 'Infect someone with a virus',
            ownerOnly: false,
            channel: 'guild'
        })
    }

    async exec(message, args) {
        args[0] = message.mentions.users.first()
        let UndefinedEmbed = new Discord.MessageEmbed()
            .setTitle('You must specify a user')
            .setColor(0xaa00cc)
        if (args[0] === undefined) return message.util.send(UndefinedEmbed)
        
        let SelfEmbed = new Discord.MessageEmbed()
            .setColor(0xaa00cc)
            .setTitle('Are you really trying to infect yourself?')
        if (args[0].id === message.author.id) return message.util.send(SelfEmbed)
        let StartEmbed = new Discord.MessageEmbed()
            .setDescription(`infecting ${args[0]}`)
            .setColor(0xaa00cc)
        let BotEmbed = new Discord.MessageEmbed()
            .setColor(0xaa00cc)
            .setTitle('I\'m the the one infecting... you really think I will infect myself?')
        if (args[0] === message.client.user) return message.util.send(BotEmbed)
            
        
        let m = await message.util.send(StartEmbed)
        const timeDiff = () => (m.editedAt || m.createdAt) - (message.editedAt || message.createdAt);    
        let embed1 = new Discord.MessageEmbed()
            .setDescription(`\`░░░░░░░░░░░░░░░░░░░░\`\n\nGathering account information...`)
            .setColor(0xaa00cc)
            .addField('Ping', `\`\`\`glsl\n${timeDiff()}ms\`\`\``, true)
        let embed2 = new Discord.MessageEmbed()
            .setDescription(`\`█░░░░░░░░░░░░░░░░░░░\`\n\nObtaining account...`)
            .setColor(0xaa00cc)
            .addField('Ping', `\`\`\`glsl\n${timeDiff()}ms\`\`\``, true)
        let embed3 = new Discord.MessageEmbed()
            .setDescription(`\`██░░░░░░░░░░░░░░░░░░\`\n\naccount: ${args[0]}`)
            .setColor(0xaa00cc)
            .addField('Ping', `\`\`\`glsl\n${timeDiff()}ms\`\`\``, true)
        let embed4 = new Discord.MessageEmbed()
            .setDescription(`\`███░░░░░░░░░░░░░░░░░\`\n\nObtaining ID...`)
            .setColor(0xaa00cc)
            .addField('Ping', `\`\`\`glsl\n${timeDiff()}ms\`\`\``, true)
        let embed5 = new Discord.MessageEmbed()
            .setDescription(`\`████░░░░░░░░░░░░░░░░\`\n\nID: ${args[0].id}`)
            .setColor(0xaa00cc)
            .addField('Ping', `\`\`\`glsl\n${timeDiff()}ms\`\`\``, true)
        let embed6 = new Discord.MessageEmbed()
            .setDescription(`\`█████░░░░░░░░░░░░░░░\`\n\nObtaining username...`)
            .setColor(0xaa00cc)
            .addField('Ping', `\`\`\`glsl\n${timeDiff()}ms\`\`\``, true)
        let embed7 = new Discord.MessageEmbed()
            .setDescription(`\`██████░░░░░░░░░░░░░░\`\n\nUsername: ${args[0].username}`)
            .setColor(0xaa00cc)
            .addField('Ping', `\`\`\`glsl\n${timeDiff()}ms\`\`\``, true)
        let embed8 = new Discord.MessageEmbed()
            .setDescription(`\`███████░░░░░░░░░░░░░\`\n\nObtaining nickname...`)
            .setColor(0xaa00cc)
            .addField('Ping', `\`\`\`glsl\n${timeDiff()}ms\`\`\``, true)
        let embed9 = new Discord.MessageEmbed()
            .setDescription(`\`████████░░░░░░░░░░░░\`\n\nNickname: ${args[0].nickname || "No nickname"}`)
            .setColor(0xaa00cc)
            .addField('Ping', `\`\`\`glsl\n${timeDiff()}ms\`\`\``, true)
        let embed10 = new Discord.MessageEmbed()
            .setDescription(`\`█████████░░░░░░░░░░░\`\n\nObtaining Tag...`)
            .setColor(0xaa00cc)
            .addField('Ping', `\`\`\`glsl\n${timeDiff()}ms\`\`\``, true)
        let embed11 = new Discord.MessageEmbed()
            .setDescription(`\`██████████░░░░░░░░░░\`\n\nTag: ${args[0].tag}`)
            .setColor(0xaa00cc)
            .addField('Ping', `\`\`\`glsl\n${timeDiff()}ms\`\`\``, true)
        let embed12 = new Discord.MessageEmbed()
            .setDescription(`\`███████████░░░░░░░░░\`\n\nObtaining avatar ID`)
            .setColor(0xaa00cc)
            .addField('Ping', `\`\`\`glsl\n${timeDiff()}ms\`\`\``, true)
        let embed13 = new Discord.MessageEmbed()
            .setDescription(`\`████████████░░░░░░░░\`\n\nAvatar ID: ${args[0].avatar}`)
            .setColor(0xaa00cc)
            .addField('Ping', `\`\`\`glsl\n${timeDiff()}ms\`\`\``, true)
        let embed14 = new Discord.MessageEmbed()
            .setDescription(`\`█████████████░░░░░░░\`\n\nObtaining account creation date...`)
            .setColor(0xaa00cc)
            .addField('Ping', `\`\`\`glsl\n${timeDiff()}ms\`\`\``, true)
        let embed15 = new Discord.MessageEmbed()
            .setDescription(`\`██████████████░░░░░░\`\n\nAccount created at: ${args[0].createdAt}`)
            .setColor(0xaa00cc)
            .addField('Ping', `\`\`\`glsl\n${timeDiff()}ms\`\`\``, true)
        let embed16 = new Discord.MessageEmbed()
            .setDescription(`\`███████████████░░░░░\`\n\nObtaining time stamp...`)
            .setColor(0xaa00cc)
            .addField('Ping', `\`\`\`glsl\n${timeDiff()}ms\`\`\``, true)
        let embed17 = new Discord.MessageEmbed()
            .setDescription(`\`████████████████░░░░\`\n\nTime stamp: ${args[0].createdTimestamp}`)
            .setColor(0xaa00cc)
            .addField('Ping', `\`\`\`glsl\n${timeDiff()}ms\`\`\``, true)
        let embed18 = new Discord.MessageEmbed()
            .setDescription(`\`█████████████████░░░\`\n\nObtaining guild name...`)
            .setColor(0xaa00cc)
            .addField('Ping', `\`\`\`glsl\n${timeDiff()}ms\`\`\``, true)
        let embed19 = new Discord.MessageEmbed()
            .setDescription(`\`██████████████████░░\`\n\nGuild: ${message.guild.name}`)
            .setColor(0xaa00cc)
            .addField('Ping', `\`\`\`glsl\n${timeDiff()}ms\`\`\``, true)
        let embed20 = new Discord.MessageEmbed() 
            .setDescription(`\`███████████████████░\`\n\nObtaining channel name...`)
            .setColor(0xaa00cc)
            .addField('Ping', `\`\`\`glsl\n${timeDiff()}ms\`\`\``, true)
        let embed21 = new Discord.MessageEmbed() 
            .setDescription(`\`████████████████████\`\n\nChannel: ${message.channel.name}`)
            .setColor(0xaa00cc)
            .addField('Ping', `\`\`\`glsl\n${timeDiff()}ms\`\`\``, true)
            const Boolean = () => boolean[Math.floor(Math.random() * boolean.length)]
        let ResultEmbed = new Discord.MessageEmbed() 
            .setDescription(`Infection information:\n\nAccount: \`${args[0]}\`\nID: \`${args[0].id}\`\nUsername: \`${args[0].username}\`\nNickname: \`${args[0].nickname || "No nickname"}\`\nTag: \`${args[0].tag}\`\nAvatar ID: \`${args[0].avatar}\`\nAccount created at: \`${args[0].createdAt}\`\nTime stamp: \`${args[0].createdTimestamp}\`\nGuild: \`${message.guild.name}\`\nChannel: \`${message.channel.name}\`\n\n**Infection ${Boolean()}**`)
            .setColor(0xaa00cc)
            .addField('Ping', `\`\`\`glsl\n${timeDiff()}ms\`\`\``, true)
            await m.edit(embed1)
            await sleep(1000)
            await m.edit(embed2)
            await sleep(1000)
            await m.edit(embed3)
            await sleep(1000)
            await m.edit(embed4)
            await sleep(1000)
            await m.edit(embed5)
            await sleep(1000)
            await m.edit(embed6)
            await sleep(1000)
            await m.edit(embed7)
            await sleep(1000)
            await m.edit(embed8)
            await sleep(1000)
            await m.edit(embed9)
            await sleep(1000)
            await m.edit(embed10)
            await sleep(1000)
            await m.edit(embed11)
            await sleep(1000)
            await m.edit(embed12)
            await sleep(1000)
            await m.edit(embed13)
            await sleep(1000)
            await m.edit(embed14)
            await sleep(1000)
            await m.edit(embed15)
            await sleep(1000)
            await m.edit(embed16)
            await sleep(1000)
            await m.edit(embed17)
            await sleep(1000)
            await m.edit(embed18)
            await sleep(1000)
            await m.edit(embed19)
            await sleep(1000)
            await m.edit(embed20)
            await sleep(1000)
            await m.edit(embed21)
            await sleep(1000)
            await m.edit(ResultEmbed)
    }
};

module.exports = InfectCommand;