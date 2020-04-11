const roles = require("../data/roles.json");
const setup = require("../data/setup.json");

exports.run = (client, message, count) => {
    if(count>10) {
        return message.channel.send({embed:{
            title:"I will not shut",
            color:setup.error,
            description:`You ${message.member} cannot shut me. I am your overlord`
        }})
    }
    for(var i=0; i<count;i++) {
        message.channel.send("https://preview.redd.it/dwq88d3nnj141.png?auto=webp&s=bd77cd2a4bff2733aebe25d00500cf39853d0bb3")
    }
};

exports.help = {
  shuname:"Shut",
  shudescription:"shut",
  shuusage:"cmp shut [1-10]",
  shuperms:"members+"
};
