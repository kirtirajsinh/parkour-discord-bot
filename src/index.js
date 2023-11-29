import {
  Client,
  GatewayIntentBits,
  AttachmentBuilder,
  EmbedBuilder,
} from "discord.js";

import dotenv from "dotenv";

dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.login(process.env.DISCORD_TOKEN);

// client.on("messageCreate", (message) => {
//   if (message.author.bot) return;
//   message.reply(message.content);
// });

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("interactionCreate", (interaction) => {
  if (!interaction.isCommand()) return;
  const exampleEmbed = new EmbedBuilder()
    .setColor(0x0099ff)
    .setTitle("Parkour")
    .setURL("https://parkourparkour.xyz/")
    .setDescription("Find Freelance clients & Jobs no Fluff")
    .setThumbnail("https://imgur.com/sz1hkwY.png")
    .setImage("https://imgur.com/EBgGO4R.gif")
    .addFields(
      {
        name: "LinkedinIN",
        value: "https://www.linkedin.com/company/parkourparkour/",
        inline: true,
      },
      {
        name: "Twitter/X",
        value: "https://twitter.com/joinparkour",
        inline: true,
      },
      {
        name: "Discord",
        value: "https://discord.gg/8RCbpc9eRQ",
        inline: true,
      }
    )
    .setTimestamp();

  if (interaction.commandName === "parkour") {
    interaction.reply({ embeds: [exampleEmbed] });
  }
});
