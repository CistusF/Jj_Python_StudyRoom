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

    if (!cron.validate(time)) {
        throw new Error("Invalid time\nplease change time");
    }

    cron.schedule("55 20 * * *", () => {
        console.log("Triggered")
        students.forEach(i => {
            member = guild.members.cache.get(i);
            if (!member) {
                failed.push(i);
            } else {
                let embed = new MessageEmbed({
                    title: "시험 안내",
                    description: "시험까지 5분 남아 안내 드립니다!\n이제 준비 해주시길 바랍니다.",
                    color: "BLURPLE",
                });
                member.send({ embeds: [embed] });
            };
        });
    })

    cron.schedule(time, () => {
        students.forEach(i => {
            member = guild.members.cache.get(i);
            if (!member) {
                failed.push(i);
            } else {
                let embed = new MessageEmbed({
                    title: "시험 시작 안내",
                    description: "[https://github.com/vendettadelsangue/Jj_Python_StudyRoom/archive/refs/heads/master.zip](https://github.com/vendettadelsangue/Jj_Python_StudyRoom/archive/refs/heads/master.zip)",
                    color: "BLURPLE",
                    fields: [{
                        name: "KR",
                        value: "위 링크를 누르면 파일이 다운됩니다!\n압축을 푼 뒤 Quizzes에 있는 문제들을 풀어서 Answers.txt에 저장후 저에게 보내주세요!\n시험 시간은 1시간 30분이며 못푼 문제는 그냥 두고 보내시면 됩니다!\n파이썬 파일을 직접 실행해 보시는 것에 대해서는 부정행위이오니 메모장 또는 노트에서 풀어봐 주시길 바라오며\n2차 공유는 금하고 있습니다!"
                    }, {
                        name: "EN",
                        value: "Click the link above to download the file!\nAfter unpacking, unpack the questions in Quizzes, save it to Answers.txt and send it to me!\nThe duration of the exam is 1 hour and 30 minutes, and you can just leave the questions you can't solve!\nTrying to run the Python file directly is cheating, so please try it out in notepad or notebook.\nSecondary sharing is prohibited!"
                    }]
                });
                member.send({ embeds: [embed] });
            };
        });
        console.log(`All of the messages are sended\nfailed to send message list\n\n${failed}`);

        process.exit(1);
    });
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

    console.log(message.attachments);
    client.channels.cache.get("898007999463968778").send({ embeds: [embed] });
});


client.login(token);