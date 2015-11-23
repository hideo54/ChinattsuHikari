title=`echo $2 | jq -r '.fullTitle'`
curl -X POST --data-urlencode "payload={\"channel\": \"#anime\", \"username\": \"チナッツ光\", \"text\": \"録画終了です〜♡:  ${title}\", \"icon_url\": \"https://pbs.twimg.com/profile_images/656000710069260288/SaNxv89-.png\"}" https://hooks.slack.com/services/*********/*********/************************
