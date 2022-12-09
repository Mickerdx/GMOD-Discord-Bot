# GMOD-Discord-Bot

## A Discord Bot to check a Garry's Mod server's playercount
This is a Discord Bot that will check a playercount of a Garry's Mod Server

In the config.json, enter your Discord Bot Token in the "token" section.

In the config.json, enter the IP of the server of which you would like to keep track of.

## How do I run this bot?
To run a Discord bot, you will need to have Node.js installed on your computer. Node.js is a JavaScript runtime environment that allows you to run JavaScript code outside of a web browser.

Once you have Node.js installed, you can use the npm command to install any necessary dependencies for your bot. For example, if your bot uses the discord.js and garryshost libraries, you can run the following commands to install them:

```
npm install discord.js
npm install garryshost
```
After installing the dependencies, you can run your bot by using the node command and specifying the name of your bot's main file. For example:
```
node my-bot.js
```
This will start your bot and it will begin running until you stop it or it encounters an error. You can use the Ctrl + C key combination to stop the bot if necessary.

It's also possible to use a tool such as pm2 to manage and run your bot. This can make it easier to keep your bot running in the background and automatically restart it if it crashes. You can learn more about pm2 and how to use it on the npm website.