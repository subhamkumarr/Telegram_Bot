const axios = require('axios');
const { Telegraf } = require('telegraf');

/**
 * How to get the secret toket for creating a bot?
 * -> Open Telegram and search for BotFather
 * -> To read instruction type /start and press enter
 * -> To create a new bot type /newbot and press enter
 * -> It will ask for a bot name, give a bot name without a / , ex: coding_bot
 * -> Then it will ask for user name ending with bot, ex: TetrisBot or tetris_bot
 *  http://t.me/code_js_cpp_bot
 */

const bot = new Telegraf('6258286671:AAEqzl_D-0KBsgvCmNLVX1ZXCUw8-CZQkck');

bot.start((ctx) => ctx.reply('Welcome to the new coding bot from subham'));

bot.command('whomadethis', (ctx) => ctx.reply('Subham chomu'));

bot.command('binarytreejs', async function (ctx) {
    const response = await axios.get('https://raw.githubusercontent.com/singhsanket143/FrontendDSA/master/Aug_29/trees.js');
    console.log(response.data);
    return ctx.reply(response.data);
})

bot.on('sticker', (ctx) => ctx.reply('🖕'));

bot.launch();
