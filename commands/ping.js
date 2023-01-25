const { SlashCommandBuilder } = require('discord.js');

module.exports = {
 data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Anwsers Pong!'),
async execute(interaction) {
    await interaction.reply('Pong!');
   },
};