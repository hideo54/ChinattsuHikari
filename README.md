# チナッツ光

結衣「じゃあ私の家に来てくれるかな、実は…(Slackへ通知しに行って欲しいんだけど…)」  
ちなつ「今すぐ行きます、飛んでいきます、光になります、チナッツ光です〜!!!!♡」

## 概要

[Chinachuの"recordedCommand"機能](https://github.com/kanreisa/Chinachu/wiki/Configuration-recordedCommand)を利用して、録画終了時にその旨をSlackへpostします。

アイコンはChinachuのTwitter公式アカウント  [@Chinachu_REC](https://twitter.com/Chinachu_REC) のアイコンを使っています。

## バージョン

Ver 1.1

## 使い方

### Slack Incoming Webhook

1. Slackにアクセス
2. "Configure Integrations"
3. "Incoming WebHooks"
4. "Post to Channel"でpost先channelを指定
5. "Add Incoming WebHooks Integration"
6. "Webhook URL"を控えておく

### Chinachuが置いてあるServer

1. (入っていない場合は)jqをインストール
2. このリポジトリを落とす
3. post-to-slack.shをChinachuが実行可能となるようにする
4. post-to-slack.shを編集し、
    * 3行目のアドレスを使用しているChinachuのアドレスで上書き (**末尾"/"なし**)
    * 10行目のURLを控えておいたWebhook URLで上書き
5. Chinachuのconfig.jsonに"recordedCommand"を追加、post-to-slack.shのパスを指定

## 連絡先

* Twitter: [@hideo54](https://twitter.com/hideo54)
* Email: contact@hideo54.com
