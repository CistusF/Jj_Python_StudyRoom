const { Client, Intents, MessageEmbed } = require("discord.js");
const { token, guildId, students, time } = require("./config");
const cron = require("node-cron");
let guild, failed = [];

const client = new Client({
    intents: Object.values(Intents.FLAGS),
    partials: ["CHANNEL", "GUILD_MEMBER", "GUILD_SCHEDULED_EVENT", "MESSAGE", "REACTION", "USER"]
});

client.once('ready', () => {
    console.log("Bot is now ready!");
    guild = client.guilds.cache.get(guildId);

    cron.schedule("00 20 * * *", () => {
        students.forEach(i => {
            member = guild.members.cache.get(i);
            if (!member) {
                failed.push(i);
            } else {
                let embed = new MessageEmbed({
                    title: "시험 시작 안내",
                    description: "[https://CistusF.github.io/Jj_Python_StudyRoom/](https://CistusF.github.io/Jj_Python_StudyRoom/)",
                    color: "BLURPLE",
                    fields: [{
                        name: "설명",
                        value: "위 링크를 클릭하여 문제를 볼 수 있습니다!\n문제에 대한 답안은 메모장과 같은곳에 옮기거나\n저에게 개인 메세지로 보내주시면 됩니다!\n\n일부러 어렵게 내보았습니다!\n화이팅입니다!"
                    }]
                });
                member.send({ embeds: [embed] });
            };
        });
        console.log("Triggered")
    })

    cron.schedule("00 21 * * *", () => {
        students.forEach(i => {
            member = guild.members.cache.get(i);
            if (!member) {
                failed.push(i);
            } else {
                let embed = new MessageEmbed({
                    title: "시험 안내",
                    description: "시험이 종료되었습니다.\n파일을 제출해주세요.",
                    color: "BLURPLE",
                });
                member.send({ embeds: [embed] });
            };
        });
    });
    console.log("Triggered")

});

client.on("message", (message) => {
    if (message.channel.type != "DM" || message.author.bot) return;
    let embed = new MessageEmbed({
        author: {
            name: message.author.tag,
            iconURL: message.author.displayAvatarURL()
        },
        description: message.content
    });
    console.log("\n\n");
    console.log(message.author.tag);
    console.log(message.attachments);
    console.log("\n\n");
    client.channels.cache.get("898007999463968778").send({ embeds: [embed] });
});


client.login(token);