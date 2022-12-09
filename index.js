const config = require('./config.json');
const Discord = require('discord.js');
const garryshost = require('garryshost');

const client = new Discord.Client();

client.on('message', message => {
    if (message.content === '!playercount') {
      // Query the Garry's Mod server and get the player count
      garryshost.query(config.server, (err, data) => {
        if (err) {
          // Handle the error
          return message.reply('Sorry, there was an error getting the player count.');
        }
  
        // Respond with the player count
        message.reply(`The player count is ${data.players.length}`);
      });
    }
  });

client.login(config.token);