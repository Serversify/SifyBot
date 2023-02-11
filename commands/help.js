const { SlashCommandBuilder } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
       .setName('help')
       .setDescription('Shows all commands'),
   async execute(interaction) {
       await interaction.reply('This command is not available for the moment. Stay tuned for');
      },
   };