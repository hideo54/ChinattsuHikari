title=`echo $2 | jq -r '.fullTitle'`
id=`echo $2 | jq -r '.id'`
host='https://example.moe'
program_url="${host}/#!/program/view/id=${id}/"

channel='#anime'
username='チナッツ光'
text="録画終了です〜♡: ${title}\n${program_url}"
icon_url="https://pbs.twimg.com/profile_images/656000710069260288/SaNxv89-.png"
hook_url="https://hooks.slack.com/services/*********/*********/************************"

curl -X POST --data-urlencode "payload={\"channel\": \"${channel}\", \"username\": \"${username}\", \"text\": \"${text}\", \"icon_url\": \"${title}\"}" ${hook_url}
