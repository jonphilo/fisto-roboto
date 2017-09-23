const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => 
{
    console.log('Fisto Roboto Starto');
});

client.on('message', message => {
    console.log(message.content);
    if(message.content.substring(0,1) == '!')
    {
        var args = message.content.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);

        switch(cmd){
            case 'iam':
                message.reply(IamCommand(message, args[0]));
                break;
            case 'iamnot':
                message.reply(IamNotCommand(message, args[0]));
                break;
            case 'iagree':
                message.reply(IAgree(message));
                break;
            default:
                break;
        }
    }
});

function IAgree(message)
{
    var desiredRole = message.guild.roles.find(role => role.name == 'agree-to-rules');
    if(desiredRole == null)
    {
        return 'an error occurred please contact @aMooseinaBox to resolve.';
    }
    message.member.addRole(desiredRole.id, message.member.nickname + " has agreed to the rules.");
    return 'Welcome to server.'
}

function IamCommand(message, arugment)
{
    if(arugment == 'Admin')
    {
        return 'Nice try';
    }
    var desiredRole = message.guild.roles.find(role => role.name == arugment);
    if(desiredRole == null)
    {
        return 'The role ' + arugment + ' could not be found.';
    }
    else if(message.member.roles.find(role => role.id == desiredRole.id))
    {
        return 'You are already a member of: ' + arugment;
    }
    else{
        message.member.addRole(desiredRole.id, message.member.nickname + " has requested to be added to: " + arugment);
        return 'You are now a member of: ' + arugment;
    }
}

function IamNotCommand(message, arugment)
{
    if(argument == 'Admin')
    {
        return 'Did you think the great Fisto Roboto would let you go that quick. Admin is for life.';
    }
    var desiredRole = message.guild.roles.find(role => role.name == arugment);
    if(desiredRole == null)
    {
      return 'You are not a member of ' + arugment;
    }
    else if(message.member.roles.find(role => role.id == desiredRole.id))
    {
        message.member.removeRole(desiredRole.id, message.member.nickname + " has requested to be removed from: " + argument);
        return 'You are no longer a member of: ' + arugment;
    }
    else{
        return 'You are not a member of: ' + arugment;
    }
}

client.login('[TOKEN HERE]');