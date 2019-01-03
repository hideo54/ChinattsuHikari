const CHINACHU_HOST = 'https://example.com';
const SLACK_CHANNEL = '#tv';
const SLACK_WEBHOOK = 'https://hooks.slack.com/services/XXXXXXXXX/XXXXXXXXX/XXXXXXXXXXXXXXXXXXXXXXXX';

const process = require('process');
const path = process.argv[2];
const data = JSON.parse(process.argv[3]);
const title = data.fullTitle;
const id = data.id;
const detail = data.detail;
const channel = data.channel.name;
const minutes = Math.ceil(parseInt(data.seconds) / 60);

const iconUrl = 'https://pbs.twimg.com/profile_images/937972459621425155/EeG-MiOQ_400x400.jpg';

const payload = {
    channel: SLACK_CHANNEL,
    username: 'チナッツ光',
    text: '録画終了です〜♡',
    icon_url: iconUrl,
    attachments: [{
        fallback: `録画終了です〜♡: ${title}`,
        color: 'good',
        title: title,
        title_link: `${CHINACHU_HOST}/#!/program/view/id=${id}/`,
        text: detail,
        fields: [
            {
                title: "放送局",
                value: channel,
                short: true
            },
            {
                title: "放送時間",
                value: minutes,
                short: true
            }
        ],
        image_url: `${CHINACHU_HOST}/api/recorded/${id}/preview.png?pos=30`
    }]
};

const request = require('request');
request.post(SLACK_WEBHOOK, { form: { payload: JSON.stringify(payload) } });
