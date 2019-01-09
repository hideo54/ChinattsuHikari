# チナッツ光

結衣「じゃあ私の家に来てくれるかな、実は…(Slackへ通知しに行って欲しいんだけど…)」  
ちなつ「今すぐ行きます、飛んでいきます、光になります、チナッツ光です〜!!!!♡」

## 概要

[Chinachuの"recordedCommand"機能](https://github.com/Chinachu/Chinachu/wiki/Configuration-recordedCommand)を利用して、録画終了時にその旨をSlackへpostします。
ついでに`storageLowSpaceCommand`も雑に実装した。

アイコンはChinachuのTwitter公式アカウント  [@Chinachu_REC](https://twitter.com/Chinachu_REC) のアイコンを使っています。

## バージョン

Ver 2.1

## 使い方

### Slack Incoming Webhook

1. Slackにアクセス
1. "Configure Integrations"
1. "Incoming WebHooks"
1. "Post to Channel"でpost先channelを指定
1. "Add Incoming WebHooks Integration"
1. "Webhook URL"を控えておく

### Chinachuが置いてあるServer

1. (入っていない場合は)Node.js, requestライブラリ, jqをインストール
1. Chinachuのディレクトリのトップに移動
1. このリポジトリをcloneする
1. 各`.sh`ファイルをChinachuが実行可能となるようにする
1. 各`.js`ファイルの1~3行目の値を適宜上書き (**`CHINACHU_HOST`の値は末尾`/`なし**)
1. Chinachuの`config.json`に以下を追加
`"recordedCommand": "./ChinattsuHikari/recordedCommand.sh,"
"storageLowSpaceCommand": "./commands/storageLowSpaceCommand.sh"`

## 連絡先

* Twitter: [@hideo54](https://twitter.com/hideo54)
* Email: contact@hideo54.com
