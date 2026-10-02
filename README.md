# Relive Applications Bot

A Discord-native application system for Relive.

## What it does
- Application panel with configurable application types
- DM-only questionnaire flow that asks every configured question
- Automatic `RELIVE-000001` IDs
- Separate submission channels per application type
- Review role pinging
- Clean review cards with **Accept**, **Accept with Reason**, **Deny**, **Deny with Reason**, and **Details**
- Reason dialogs are native Discord modals
- Applicant DM notifications
- Configurable role automation
- Local JSON persistence; no separate web backend/API required
- `/relive-ticket-panel` ticket panel with configurable buttons
- Native pre-ticket questionnaire (up to 5 questions) before a private channel is created
- Configurable ticket category, staff roles, welcome text, and close button
- Dashboard ticket editor for adding, disabling, deleting, and customizing panel buttons

## Setup
1. Install Node.js 18+.
2. `cd bot && npm install`
3. Copy `.env.example` to `.env` and fill in the bot token, client ID, and server ID.
4. `npm run deploy`
5. `npm start`
6. In Discord use `/relive-config`, then `/relive-panel` or `/relive-ticket-panel`.
7. Give the bot **Manage Channels** so it can create private ticket channels.
8. Optionally set a ticket category ID and staff role IDs from the Relive dashboard.

The bot needs the Server Members Intent and Message Content Intent enabled in the Discord Developer Portal.
Applicants must allow DMs from server members.
