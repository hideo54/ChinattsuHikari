const yaml = require('js-yaml');
const fs = require('fs');
const config = yaml.safeLoad(fs.readFileSync('./ChinattsuHikari/config.yaml'));
const SLACK_CHANNEL = config.slack_channel;
const SLACK_WEBHOOK = config.slack_webhook;

const iconUrl = 'https://pbs.twimg.com/profile_images/937972459621425155/EeG-MiOQ_400x400.jpg';

const payload = {
    channel: SLACK_CHANNEL,
    username: 'チナッツ光',
    icon_url: iconUrl,
    attachments: [{
        fallback: '録画領域の残り容量がなくなります…!',
        color: 'danger',
        title: '録画領域の残り容量がなくなります…!'
    }]
};

const request = require('request');
request.post(SLACK_WEBHOOK, { form: { payload: JSON.stringify(payload) } });
