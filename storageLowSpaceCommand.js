const CHINACHU_HOST = 'https://example.com';
const SLACK_CHANNEL = '#tv';
const SLACK_WEBHOOK = 'https://hooks.slack.com/services/XXXXXXXXX/XXXXXXXXX/XXXXXXXXXXXXXXXXXXXXXXXX';

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
