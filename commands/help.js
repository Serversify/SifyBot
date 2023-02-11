const { SlashCommandBuilder } = require('discord.js');

Modules.export = {
    data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('shows all commands and what they do'),
    async execute(interaction) {
await interaction.reply('This command is not available for the moment. Stay tuned for');
    }
}