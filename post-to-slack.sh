title=`echo $2 | jq -r '.fullTitle'`
id=`echo $2 | jq -r '.id'`
host='https://example.moe'
url="${host}/#!/program/view/id=${id}/"
curl -X POST --data-urlencode "payload={\"channel\": \"#anime\", \"username\": \"チナッツ光\", \"text\": \"録画終了です〜♡:  ${title}\n${url}\", \"icon_url\": \"https://pbs.twimg.com/profile_images/656000710069260288/SaNxv89-.png\"}" https://hooks.slack.com/services/*********/*********/************************
