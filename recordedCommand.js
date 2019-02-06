const yaml = require('js-yaml');
const fs = require('fs');
const config = yaml.safeLoad(fs.readFileSync('./ChinattsuHikari/config.yaml'));
const chinachuHost = config.chinachu_host;
const slackChannel = config.slack_channel;
const slackWebhook = config.slack_webhook;

const process = require('process');
const path = process.argv[2];
const data = JSON.parse(process.argv[3]);
const title = data.fullTitle;
const id = data.id;
const detail = data.detail;
const channel = data.channel.name;
const minutes = Math.ceil(parseInt(data.seconds) / 60);

const sizeInBytes = fs.statSync(path).size;
const sizeInGiB = (sizeInBytes / (2**30)).toFixed(2);

const iconUrl = 'https://pbs.twimg.com/profile_images/937972459621425155/EeG-MiOQ_400x400.jpg';

const payload = {
    channel: slackChannel,
    username: 'チナッツ光',
    text: '録画終了です〜♡',
    icon_url: iconUrl,
    attachments: [{
        fallback: `録画終了です〜♡: ${title}`,
        color: sizeInBytes === 0 ? 'danger' : 'good',
        title: title,
        title_link: `${chinachuHost}/#!/program/view/id=${id}/`,
        text: detail,
        fields: [
            {
                title: '放送局',
                value: channel,
                short: true
            },
            {
                title: '放送時間',
                value: `${minutes}分`,
                short: true
            },
            {
                title: 'ファイル容量',
                value: `${sizeInGiB}GiB`,
                short: true
            },
            {
                title: 'ファイル',
                value: path,
                short: false
            }
        ],
        image_url: `${chinachuHost}/api/recorded/${id}/preview.png?pos=30`
    }]
};

const request = require('request');
request.post(slackWebhook, { form: { payload: JSON.stringify(payload) } });
