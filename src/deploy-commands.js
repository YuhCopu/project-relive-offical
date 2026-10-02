import 'dotenv/config';
import { REST, Routes, SlashCommandBuilder, ChannelType, PermissionFlagsBits } from 'discord.js';

const commands = [
  new SlashCommandBuilder().setName('relive-panel').setDescription('Post the Relive Applications panel.'),
  new SlashCommandBuilder().setName('relive-ticket-panel').setDescription('Post the Relive ticket panel.'),
  new SlashCommandBuilder().setName('relive-config').setDescription('Configure Relive application channels and review permissions.')
    .addChannelOption(o=>o.setName('support_channel').setDescription('Support submission channel').addChannelTypes(ChannelType.GuildText))
    .addChannelOption(o=>o.setName('creator_channel').setDescription('Creator submission channel').addChannelTypes(ChannelType.GuildText))
    .addChannelOption(o=>o.setName('staff_channel').setDescription('Staff submission channel').addChannelTypes(ChannelType.GuildText))
    .addChannelOption(o=>o.setName('partnership_channel').setDescription('Partnership submission channel').addChannelTypes(ChannelType.GuildText))
    .addRoleOption(o=>o.setName('review_role').setDescription('Role allowed to review applications')),
  new SlashCommandBuilder().setName('relive-stats').setDescription('Show application statistics.'),
  new SlashCommandBuilder().setName('relive-search').setDescription('Search stored Relive applications.')
    .addStringOption(o=>o.setName('query').setDescription('ID, username, user ID, or application type').setRequired(true))
    .addStringOption(o=>o.setName('status').setDescription('Filter by status').addChoices({name:'Pending',value:'Pending'},{name:'Accepted',value:'Accepted'},{name:'Denied',value:'Denied'},{name:'Changes Requested',value:'Changes Requested'})),
  new SlashCommandBuilder().setName('relive-applicant').setDescription('Show applications from a Discord user.')
    .addUserOption(o=>o.setName('user').setDescription('Applicant').setRequired(true)),
  new SlashCommandBuilder().setName('relive-trust').setDescription('Grant a Discord user access to the Relive dashboard.').addUserOption(o=>o.setName('user').setDescription('Trusted dashboard user').setRequired(true)),
  new SlashCommandBuilder().setName('relive-untrust').setDescription('Remove a Discord user from the Relive dashboard.').addUserOption(o=>o.setName('user').setDescription('Dashboard user').setRequired(true)),
  new SlashCommandBuilder().setName('relive-help').setDescription('Show Relive commands.')
].map(c=>c.setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild).toJSON());

const rest=new REST({version:'10'}).setToken(process.env.DISCORD_TOKEN);
const route=process.env.GUILD_ID?Routes.applicationGuildCommands(process.env.CLIENT_ID,process.env.GUILD_ID):Routes.applicationCommands(process.env.CLIENT_ID);
await rest.put(route,{body:commands});
console.log(`Registered ${commands.length} Relive commands.`);
