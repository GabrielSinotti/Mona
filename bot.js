const Discord = require('discord.js');
const bot = new Discord.Client();

const config = require('./config.json');

const links = require('./links.json');


bot.login(config.token);

bot.on("guildMemberAdd", member => {
    member.guild.channels.get('481531594805346306').send(  member.user.username  +  ' acaba de se juntar à equipe! Agora, qual seria um bom codinome pra ele...?');

});

bot.on("guildMemberRemove", member => {
    member.guild.channels.get('481531594805346306').send(member.user.username + ' deixou o Palace')
})

bot.on('message', message => {
    bot.user.setActivity('Persona 5')
    console.log('logado');
});

bot.on('message', message => {
    responseObject = links; 

    if(responseObject[message.content]){
        message.channel.send(responseObject[message.content]);
	}    
	
	if(message.content.startsWith("!roleta")){
		RandomNumber = Math.floor(Math.random() * (4 - 1) + 1 );
		if(RandomNumber == 2){
			message.reply("você morreu");
		}
		else{
			message.reply("ufa você sobreviveu");
		}
	}
