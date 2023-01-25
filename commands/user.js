const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('user')
    .setDescription('Provides information about a user'),
    async execute(interaction) {
        await interaction.reply(`This command was ran by ${interaction.user.username}, who joined on ${interaction.user.joinedAt}`);
    },
};