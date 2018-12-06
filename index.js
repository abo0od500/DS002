var discord = require("discord.js");
var request = require('request');
var Jimp = require('jimp');
var inServer = 512728601041305600 ;
var stringLength = require("string-length");

var fs = require("fs");


var cl = new discord.Client();


 cl.on("ready", () => {
  console.log("READY");

  });   
  

cl.on("guildMemberAdd", (member) => {

    // setTimeout(() => { 
    var server = member.guild.id;
    var servername = member.guild.name;
    var d = new Date();
    var user = cl.users.get(member.id); // USER MAP
    
    if(server != inServer){
        
    
        cl.users.get(user.id).send(`${process.env.MSG}`).catch(console.error.message);
        
    


   
    }


  });

  cl.login(process.env.TOKEN);
