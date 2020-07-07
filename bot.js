const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

function dealWith(msg) {
    msg.channel.send("recognized");
    console.log(`Message recognized: msg.content`);
}

bot.on("message", msg => {
    if (msg.content[0] == '.') {
        dealWith(msg);
    }
});

client.login(require(auth.json).token);
