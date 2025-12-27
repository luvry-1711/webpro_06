const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

let dome = [
  { id:1, place:"東京", name:"東京ドーム", station:"JR中央線・総武線「水道橋駅」", capa:"約55000人", gate:[{num: 11, type: "70~75%"}, {num: 20, type: "15~25%"}, {num: 21, type: "20~30%"}, {num: 22, type: "25~35%"}, {num: 23, type: "20~30%"}, {num: 24, type: "25~35%"}, {num: 25, type: "65~70%"}, {num: 30, type: "10~15%"}, {num: 33, type: "5~15%"}, {num: 40, type: "5~15%"}, {num: 41, type: "10~15%"}] },
  { id:2, place:"大阪", name:"京セラドーム大阪", station:"大阪メトロ長堀鶴見緑地線「ドーム前千代崎駅」", capa:"約51000人", gate:[{num: 1, type: "55~70%"}, {num: 3, type: "30~40%"}, {num: 4, type: "35~45%"}, {num: 6, type: "55~60%"}, {num: 10, type: "25~30%"}, {num: 11, type: "25~30%"}] },
  { id:3, place:"愛知", name:"バンテリンドーム ナゴヤ", station:"名古屋市営地下鉄名城線「ナゴヤドーム前矢田駅」", capa:"約50000人", gate:[{num: 1, type: "35~40%"}, {num: 2, type: "45~55%"}, {num: 3, type: "25~35%"}, {num: 7, type: "25~35%"}, {num: 8, type: "45~55%"}] },
  { id:4, place:"福岡", name:"みずほPayPayドーム福岡", station:"福岡市地下鉄「唐人町駅」", capa:"約52500人", gate:[{num: 1, type: "35~45%"}, {num: 2, type: "30~35%"}, {num: 4, type: "35~40%"}, {num: 5, type: "35~45%"}, {num: 6, type: "30~35%"}, {num: 8, type: "35~40%"}] },
  { id:5, place:"北海道", name:"大和ハウス プレミストドーム", station:"地下鉄東豊線「福住駅」", capa:"約54000人", gate:[{num: "北", type: "40~45%"}, {num: "南", type: "40~45%"}, {num: "西", type: "35~40%"}] },
];

let member = [
  { id:1, color:"黄", name:"岩本 照(いわもと ひかる)", birth:"1993年5月17日", from:"埼玉県出身", DNA:"A型", tall:"182cm", admission:"2004年8月12日", hobby:"サウナ，ボルダリング，神社巡り", skill:"振付" },
  { id:2, color:"紫", name:"深澤 辰哉(ふかざわ たつや)", birth:"1992年5月5日", from:"東京都出身", DNA:"B型", tall:"174cm", admission:"2006年10月1日", hobby:"テレビゲーム，キャラグッズ収集", skill:"モノマネ，クレーンゲーム，早食い" },
  { id:3, color:"赤", name:"宮舘 涼太(みやだて りょうた)", birth:"1993年3月25日", from:"東京都出身", DNA:"A型", tall:"174cm", admission:"2005年6月26日", hobby:"料理，ファッション，靴を集めること", skill:"サーフィン，スケートボード" },
  { id:4, color:"青", name:"渡辺 翔太(わたなべ しょうた)", birth:"1992年11月5日", from:"東京都出身", DNA:"B型", tall:"172cm", admission:"2005年10月1日", hobby:"美容関連，肌のケア", skill:"歌" },
  { id:5, color:"ピンク", name:"佐久間 大介(さくま だいすけ)", birth:"1992年7月5日", from:"東京都出身", DNA:"O型", tall:"168cm", admission:"2005年9月25日", hobby:"アニメ，漫画鑑賞，アニメグッズ収集，動物と触れ合う", skill:"アクロバットヲタ芸，動物と仲良くなる（人間も含む）" },
  { id:6, color:"緑", name:"阿部 亮平(あべ りょうへい)", birth:"1993年11月27日", from:"千葉県出身", DNA:"AB型", tall:"178cm", admission:"2004年8月12日", hobby:"クイズ，勉強，読書", skill:"天気予報，円周率100桁暗唱" },
  { id:7, color:"オレンジ", name:"向井 康二(むかい こうじ)", birth:"1994年6月21日", from:"奈良県出身", DNA:"A型", tall:"175.5cm", admission:"2006年10月8日", hobby:"スノーボード，カメラ，コーヒー，古着屋巡り", skill:"タイ語（日常会話），ムエタイ，カメラ，テニス（壁打ちは苦手）" },
  { id:8, color:"黒", name:"目黒 蓮(めぐろ れん)", birth:"1997年2月16日", from:"東京都出身", DNA:"B型", tall:"185cm", admission:"2010年10月30日", hobby:"星を観ること", skill:"虫を採ること，サッカー，水泳，マラソン" },
  { id:9, color:"白", name:"ラウール", birth:"2003年6月27日", from:"東京都出身", DNA:"A型", tall:"192cm", admission:"2015年5月2日", hobby:"散歩，食事", skill:"ダンス，どんな服も着こなせる" },
];

let volleyball = [
  { id:1, place:"宮城", school:"烏野高校", chara: [{num: 1, name: "澤村大地（さわむらだいち）", CV: "日野聡", age: "3年", position: "ウイングスパイカー", tall: "176.8cm", weight: "70.1kg", jamp: "310cm", birth: "12月31日", like: "しょうゆラーメン"}, {num: 2, name: "菅原孝支（すがわらこうし）", CV: "入野自由", age: "3年", position: "セッター", tall: "174.3cm", weight: "63.5kg", jamp: "299cm", birth: "6月13日", like: "激辛麻婆豆腐"}, {num: 3, name: "東峰旭（あずまねあさひ）", CV: "細谷佳正", age: "3年", position: "ウイングスパイカー", tall: "184.7cm", weight: "75.2kg", jamp: "330cm", birth: "1月1日", like: "とんこつラーメン"}, {num: 4, name: "西谷夕（にしのやゆう）", CV: "岡本信彦", age:"2年" , position:"リベロ" , tall:"159.3cm" , weight:"51.1kg" , jamp:"300cm" , birth:"10月10日" , like:"ガリガリ君（ソーダ味）"}, {num: 5, name: "田中龍之介（たなかりゅうのすけ）", CV: "林勇", age: "2年", position: "ウイングスパイカー", tall: "177.2cm", weight: "68.8kg", jamp: "322cm", birth: "3月3日", like: "メロンパン"}, {num: 6, name: "縁下力（えんのしたちから）", CV: "増田俊樹", age:"2年" , position:"ウイングスパイカー" , tall:"175.4cm" , weight:"66.4kg" , jamp:"305cm" , birth:"12月26日" , like:"ホヤ酢"}, {num: 7, name: "木下久志（きのしたひさし）", CV: "相楽信頼", age:"2年" , position:"ウイングスパイカー" , tall:"174.7cm" , weight:"65.5kg" , jamp:"297cm" , birth:"2月15日" , like:"紅しょうが"}, {num: 8, name: "成田一仁（なりたかずひと）", CV: "西山宏太朗", age:"2年" , position:"ミドルブロッカー" , tall:"180.2cm" , weight:"70.2kg" , jamp:"322cm" , birth:"8月17日" , like:"すし（タマゴ）"}, {num: 9, name: "影山飛雄（かげやまとびお）", CV: "石川界人", age:"1年" , position:"セッター" , tall:"180.6cm" , weight:"66.3kg" , jamp:"335cm" , birth:"12月22日" , like:"ポークカレー温卵のせ"}, {num: 10, name: "日向翔陽（ひなたしょうよう）", CV: "村瀬歩", age:"1年" , position:"ミドルブロッカー" , tall:"162.8cm" , weight:"51.9kg" , jamp:"327cm" , birth:"6月21日" , like:"たまごかけごはん"}, {num: 11, name: "月島蛍（つきしまけい）", CV: "内山昴輝", age:"1年" , position:"ミドルブロッカー" , tall:"188.3cm" , weight:"68.4kg" , jamp:"332cm" , birth:"9月27日" , like:"ショートケーキ"}, {num: 12, name: "山口忠（やまぐちただし）", CV: "斉藤壮馬", age:"1年" , position:"ミドルブロッカー" , tall:"179.5cm" , weight:"63.0kg" , jamp:"315cm" , birth:"11月10日" , like:"ふにゃふにゃになったフライドポテト"}, 
    {num: "マネージャー", name: "清水潔子（しみずきよこ）", CV: "名塚佳織", age:"3年" , position:"" , tall:"166.2cm" , weight:"51.4kg" , jamp:"" , birth:"1月6日" , like:"天むす"}, {num: "マネージャー", name: "谷地仁花（やちひとか）", CV: "諸星すみれ", age:"1年" , position:"" , tall:"149.7cm" , weight:"42.5kg" , jamp:"" , birth:"9月4日" , like:"ふ菓子"}, {num: "監督", name: "武田一鉄（たけだいってつ）", CV: "神谷浩史", age:"29歳" , position:"" , tall:"166.5cm" , weight:"59.4kg" , jamp:"" , birth:"1月10日" , like:"肉じゃが"}, {num: "コーチ", name: "烏養繋心（うかいけいしん）", CV: "田中一成→江川央生", age:"26歳" , position:"ミドルブロッカー" , tall:"178.2cm" , weight:"72.2kg" , jamp:"" , birth:"4月5日" , like:"玉こんにゃく"}, {num: "田中の姉", name: "田中冴子（たなかさえこ）", CV: "小松由佳", age:"21歳" , position:"" , tall:"155.2cm" , weight:"48.8kg" , jamp:"" , birth:"5月5日" , like:"ホームランバー"}, {num: "月島の兄", name: "月島明光（つきしまあきてる）", CV: "櫻井孝宏", age:"22歳" , position:"" , tall:"185.2cm" , weight:"79.5kg" , jamp:"" , birth:"3月8日" , like:"葉ワサビしょうゆ漬け"}] },
  { id:2, place:"宮城", school:"青葉城西高校", chara: [{num: 1, name: "及川徹（おいかわとおる）", CV: "浪川大輔", age: "3年", position: "セッター", tall: "184.3cm", weight: "72.2kg", jamp: "335cm", birth: "7月20日", like: "牛乳パン"}, {num: 2, name: "松川一静（まつかわいっせい）", CV: "祐仙勇", age: "3年", position: "ミドルブロッカー", tall: "187.9cm", weight: "73.8kg", jamp: "331cm", birth: "3月1日", like: "チーズINハンバーグ"}, {num: 3, name: "花巻貴大（はなまきたかひろ）", CV: "櫻井トオル", age: "3年", position: "ウイングスパイカー", tall: "184.7cm", weight: "72.0kg", jamp: "327cm", birth: "1月27日", like: "シュークリーム"}, {num: 4, name: "岩泉一（いわいずみはじめ）", CV: "吉野裕行", age: "3年", position: "ウイングスパイカー", tall: "179.3cm", weight: "70.2kg", jamp: "327cm", birth: "6月10日", like: "揚げ出し豆腐"}, {num: 6, name: "矢巾秀（やはばしげる）", CV: "河西健吾", age: "2年", position: "セッター", tall: "181.9cm", weight: "69.0kg", jamp: "320cm", birth: "3月1日", like: "いくら丼"}, {num: 7, name: "渡親治（わたりしんじ）", CV: "ランズベリー・アーサー", age: "2年", position: "リベロ", tall: "171.2cm", weight: "62.5kg", jamp: "290cm", birth: "4月3日", like: "ゆでたまご（カチカチ茹で）"}, {num: 12, name: "金田一勇太郎（きんだいちゆうたろう）", CV: "古川慎", age: "1年", position: "ミドルブロッカー", tall: "189.2cm", weight: "74.3kg", jamp: "332cm", birth: "6月6日", like: "焼きとうもろこし"}, {num: 13, name: "国見英（くにみあきら）", CV: "田丸篤志", age: "1年", position: "ウイングスパイカー", tall: "182.8cm", weight: "66.1kg", jamp: "320cm", birth: "3月25日", like: "塩キャラメル"}, {num: 16, name: "京谷賢太郎（きょうたにけんたろう）", CV: "武内駿輔", age: "2年", position: "ウイングスパイカー", tall: "178.8cm", weight: "70.8kg", jamp: "327cm", birth: "12月7日", like: "ハミマのチキン"}] },
  { id:3, place:"宮城", school:"伊達工業高校", chara: [{num: 1, name: "鎌先靖志（かまさきやすし）", CV: "佐藤拓也", age: "3年", position: "セッター", tall: "186.8cm", weight: "82.2kg", jamp: "330cm", birth: "11月8日", like: "もなか（白あん）"}, {num: 2, name: "茂庭要（もにわかなめ）", CV: "小野塚貴志", age: "3年", position: "セッター", tall: "176.3cm", weight: "67.5kg", jamp: "305cm", birth: "9月6日", like: "ごはんですよ"}, {num: 3, name: "笹谷武仁（ささやたけひと）", CV: "間島淳司", age: "3年", position: "ウイングスパイカー", tall: "174.3cm", weight: "68.1kg", jamp: "310cm", birth: "2月10日", like: "笹かまぼこ"}, {num: "6→2", name: "二口堅治（ふたくちけんじ）", CV: "中澤まさとも", age: "2年", position: "ウイングスパイカー", tall: "184.2cm", weight: "71.5kg", jamp: "325cm", birth: "11月10日", like: "すっぱいグミ"}, {num: "7→1", name: "青根高伸（あおねたかのぶ）", CV: "松川裕輝", age: "2年", position: "ミドルブロッカー", tall: "191.8cm", weight: "88.2kg", jamp: "335cm", birth: "8月13日", like: "栗きんとん"},{num: 8, name: "女川太郎（おながわたろう）", CV: "千葉翔也", age: "2年", position: "ウイングスパイカー", tall: "175.2cm", weight: "61.5kg", jamp: "310cm", birth: "12月14日", like: "カップヌードル"}, {num: "12→3", name: "小原豊（おばらゆたか）", CV: "祐仙勇", age: "2年", position: "ウイングスパイカー", tall: "186.2cm", weight: "83.1kg", jamp: "323cm", birth: "12月15日", like: "テリ焼きチキン"}, {num: 7, name: "黄金川貫至（こがねがわかんじ）", CV: "庄司将之", age: "1年", position: "セッター", tall: "191.5cm", weight: "80.2kg", jamp: "340cm", birth: "7月9日", like: "カツ丼"}, {num: 11, name: "吹上仁悟（ふきあげじんご）", age: "1年", position: "ミドルブロッカー", tall: "186.3cm", weight: "73.3kg", jamp: "325cm"}, {num: 13, name: "作並浩輔（さくなみこうすけ）", CV: "大西真央→寺島惇太", age: "1年", position: "リベロ", tall: "164.1cm", weight: "59.5kg", jamp: "295cm", birth: "8月30日", like: "柿ピー"}] },
  { id:4, place:"宮城", school:"白鳥沢高校", chara: [{num: 1, name: "牛島若利（うしじまわかとし）", CV: "竹内良太", age: "3年", position: "ウイングスパイカー", tall: "189.5cm", weight: "84.8kg", jamp: "345cm", birth: "8月13日", like: "ハヤシライス"}, {num: 3, name: "瀬見英太（せみえいた）", CV: "寺島拓篤", age: "3年", position: "セッター", tall: "179.5cm", weight: "70.5kg", jamp: "325cm", birth: "11月11日", like: "鉄火巻き"}, {num: 4, name: "大平獅音（おおひられおん）", CV: "丹沢晃之", age: "3年", position: "ウイングスパイカー", tall: "182.7cm", weight: "82.4kg", jamp: "332cm", birth: "10月30日", like: "サバの味噌煮"}, {num: 5, name: "天童覚（てんどうさとり）", CV: "木村昴", age: "3年", position: "ミドルブロッカー", tall: "187.7cm", weight: "71.1kg", jamp: "327cm", birth: "5月20日", like: "チョコのアイス"}, {num: 8, name: "五色工（ごしきつとむ）", CV: "土屋神葉", age: "1年", position: "ウイングスパイカー", tall: "181.5cm", weight: "69.5kg", jamp: "328cm", birth: "8月22日", like: "カレイの煮付け"}, {num: 10, name: "白布賢二郎（しらぶけんじろう）", CV: "豊永利行", age: "2年", position: "セッター", tall: "174.8cm", weight: "64.4kg", jamp: "305cm", birth: "5月4日", like: "しらす"}, {num: 12, name: "川西太一（かわにしたいち）", CV: "大森大樹", age: "2年", position: "ミドルブロッカー", tall: "188.3cm", weight: "74.0kg", jamp: "330cm", birth: "4月15日", like: "すきやき"}, {num: 14, name: "山形隼人（やまがたはやと）", CV: "福田賢二", age: "3年", position: "リベロ", tall: "174.3cm", weight: "66.5kg", jamp: "305cm", birth: "2月14日", like: "うに丼"}]},
  { id:5, place:"宮城", school:"条善寺高校", chara: [{num: 1, name: "照島遊児（てるしまゆうじ）", CV: "江口拓也", age: "2年", position: "ウイングスパイカー", tall: "177.2cm", weight: "66.7kg", jamp: "327cm", birth: "4月18日", like: "ウインナー挟まってるパンのやつ"}, {num: 2, name: "母畑和馬（ぼばたかずま）", CV: "千葉翔也", age: "2年", position: "ミドルブロッカー", tall: "185.9cm", weight: "71.8kg", jamp: "325cm", birth: "", like: ""}, {num: 3, name: "二岐丈春（ふたまたたけはる）", CV: "寺島惇太", age: "2年", position: "セッター", tall: "178.5cm", weight: "65.5kg", jamp: "320cm", birth: "", like: ""}, {num: 4, name: "東山勝道（ひがしやまかつみち）", CV: "中務貴幸", age: "2年", position: "ウイングスパイカー", tall: "175.5cm", weight: "65.7kg", jamp: "315cm", birth: "", like: ""}, {num: 5, name: "飯坂信義（いいざかのぶよし）", CV: "松田修平", age: "2年", position: "ミドルブロッカー", tall: "186.2cm", weight: "76.5kg", jamp: "327cm", birth: "", like: ""}, {num: 7, name: "沼尻凛太郎（ぬまじりりんたろう）", CV: "村田太志", age: "2年", position: "ウイングスパイカー", tall: "176.8cm", weight: "64.7kg", jamp: "310cm", birth: "", like: ""}, {num: 11, name: "土湯新（つちゆあらた）", CV: "橘潤二", age: "2年", position: "リベロ", tall: "168.5cm", weight: "58.3kg", jamp: "288cm", birth: "", like: ""}, {num: "マネージャー", name: "三咲華（みさきはな）", CV: "藤村歩", age: "3年", position: "", tall: "163.2cm", weight: "49.5kg", jamp: "", birth: "5月30日", like: "ベビーカステラ"}] },
  { id:6, place:"宮城", school:"和久谷南高校", chara: [{num: 1, name: "中島猛（なかしまたける", CV: "阿部敦", age: "3年", position: "ウイングスパイカー", tall: "173.4cm", weight: "65.8kg", jamp: "324cm", birth: "8月20日", like: "ずんだ餅"}, {num: 2, name: "川渡瞬己（かわたびしゅんき）", CV: "堀井茶渡", age: "3年", position: "ウイングスパイカー", tall: "174.2cm", weight: "63.8kg", jamp: "322m", birth: "6月11日", like: "ふき"}, {num: 4, name: "白石優希（しろいしゆうき）", CV: "松田修平", age: "3年", position: "ウイングスパイカー", tall: "177.2cm", weight: "67.8kg", jamp: "310cm", birth: "", like: ""}, {num: 5, name: "花山一雅（はなやまかずまさ）", CV: "木内太郎", age: "3年", position: "セッター", tall: "176.6cm", weight: "68.5kg", jamp: "315cm", birth: "4月16日", like: "ほっけ"}, {num: 8, name: "鳴子哲平（なるこてっぺい）", CV: "金城大和", age: "3年", position: "ミドルブロッカー", tall: "184.7cm", weight: "70.2kg", jamp: "328cm", birth: "", like: ""}, {num: 10, name: "秋保和光（あきうかずてる）", CV: "水中雅章", age: "2年", position: "リベロ", tall: "172.5cm", weight: "63.8kg", jamp: "298cm", birth: "", like: ""}, {num: 11, name: "松島剛（まつしまつよし", CV: "小田久史", age: "1年", position: "ミドルブロッカー", tall: "186.2cm", weight: "68.8kg", jamp: "325cm", birth: "", like: ""}] },
  { id:7, place:"宮城", school:"扇南高校", chara: [{num: 1, name: "十和田良樹（とわだよしき）", CV: "西田雅一", age: "2年", position: "ウイングスパイカー", tall: "182.1cm", weight: "75.0kg", jamp: "320cm", birth: "8月24日", like: "コロッケパン"}, {num: "前主将", name: "秋宮昇（あきみやのぼる）", CV: "菅沼久義", age: "3年", position: "", tall: "170.2cm", weight: "62.3kg", jamp: "", birth: "10月18日", like: "肉ぎょうざ"}] },
  { id:8, place:"宮城", school:"常波高校", chara: [{num: 4, name: "池尻隼人（いけじりはやと）", CV: "宮崎寛務", age: "3年", position: "ウイングスパイカー", tall: "177.2cm", weight: "67.5kg", jamp: "295cm", birth: "2月19日", like: "オムそば"}] },
  { id:9, place:"宮城", school:"角川学園高校", chara: [{num: 9, name: "百沢雄大（ひゃくざわゆうだい）", CV: "山本祥太", age: "1年", position: "ウイングスパイカー", tall: "201.2cm", weight: "88.2kg", jamp: "347cm", birth: "4月3日", like: "やきそば"}] },
  { id:10, place:"東京", school:"音駒高校", chara: [{num: 1, name: "黒尾鉄朗（くろおてつろう）", CV: "中村悠一", age: "3年", position: "ミドルブロッカー", tall: "187.7cm", weight: "75.3kg", jamp: "330cm", birth: "11月17日", like: "サンマの塩焼き"}, {num: 2, name: "海信行（かいのぶゆき）", CV: "星野貴紀", age: "3年", position: "ウイングスパイカー", tall: "176.5cm", weight: "68.9kg", jamp: "309cm", birth: "4月8日", like: "海ぶどう"}, {num: 3, name: "夜久衛輔（やくもりすけ）", CV: "立花慎之介", age: "3年", position: "リベロ", tall: "165.2cm", weight: "60.2kg", jamp: "301cm", birth: "8月8日", like: "野菜炒め"}, {num: 4, name: "山本猛虎（やまもとたけとら）", CV: "横田成吾", age: "2年", position: "ウイングスパイカー", tall: "176.7cm", weight: "69.1kg", jamp: "322cm", birth: "2月22日", like: "ヤキソバパン"}, {num: 5, name: "狐爪研磨（こづめけんま）", CV: "梶裕貴", age: "2年", position: "セッター", tall: "169.2cm", weight: "58.3kg", jamp: "295cm", birth: "10月16日", like: "アップルパイ"}, {num: 6, name: "福永招平（ふくながしょうへい）", CV: "長南翔太", age: "2年", position: "ウイングスパイカー", tall: "178.3cm", weight: "68.3kg", jamp: "315cm", birth: "9月29日", like: "あたりめ"}, {num: 7, name: "犬岡走（いぬおかそう）", CV: "池田恭祐", age: "1年", position: "ミドルブロッカー", tall: "185.3cm", weight: "74.3kg", jamp: "333cm", birth: "11月1日", like: "鶏の唐揚げとご飯！"}, {num: 9, name: "手白球彦（てしろたまひこ）", CV: "汐谷文康", age: "1年", position: "セッター", tall: "172.2cm", weight: "59.2kg", jamp: "", birth: "1月14日", like: "タラの塩焼き"}, {num: 11, name: "灰羽リエーフ（はいばりえーふ）", CV: "石井マーク", age: "1年", position: "ミドルブロッカー", tall: "194.3cm", weight: "79.7kg", jamp: "345cm", birth: "10月30日", like: "おいなりさん"}, {num: 12, name: "芝山優生（しばやまゆうき）", CV: "渡辺拓海", age: "1年", position: "リベロ", tall: "162.5cm", weight: "53.3kg", jamp: "280cm", birth: "12月16日", like: "オムライス"}] },
  { id:11, place:"東京", school:"梟谷学園高校", chara: [{num: 2, name: "鷲尾辰生（わしおたつき）", CV: "古賀明", age: "3年", position: "", tall: "187.8cm", weight: "80.5kg", jamp: "335cm", birth: "8月29日", like: "ぶりの照り焼き"}, {num: 3, name: "猿杙大和（さるくいやまと）", CV: "橘潤二", age: "3年", position: "ウイングスパイカー", tall: "181.5cm", weight: "74.2kg", jamp: "328cm", birth: "8月2日", like: "大根おろし"}, {num: 4, name: "木兎光太郎（ぼくとこうたろう）", CV: "木村良平", age: "3年", position: "ウイングスパイカー", tall: "185.3cm", weight: "78.3kg", jamp: "339cm", birth: "9月20日", like: "焼き肉!!"}, {num: 5, name: "赤葦京治（あかあしけいじ）", CV: "逢坂良太", age: "2年", position: "セッター", tall: "182.3cm", weight: "70.7kg", jamp: "327cm", birth: "12月5日", like: "菜の花からし和え"}, {num: 7, name: "木葉秋紀（このはあきのり）", CV: "村田太志", age: "3年", position: "ウイングスパイカー", tall: "178.8cm", weight: "65.9kg", jamp: "322cm", birth: "9月30日", like: "竜田揚げ"}, {num: 11, name: "小見春樹（こみはるき）", CV: "菊池幸利", age: "3年", position: "リベロ", tall: "164.7cm", weight: "60.5kg", jamp: "298cm", birth: "1月23日", like: "エビフライ"}, {num: 12, name: "尾長渉（おながわたる）", CV: "原俊之", age: "1年", position: "ミドルブロッカー", tall: "191.3cm", weight: "81.1kg", jamp: "330cm", birth: "4月14日", like: "プリン（濃厚なやつ"}] },
  { id:12, place:"埼玉", school:"森然高校高校", chara: [{num: 7, name: "千鹿谷栄吉（ちがやえいきち）", CV: "長南翔太", age: "1年", position: "ミドルブロッカー", tall: "193.2cm", weight: "78.5kg", jamp: "", birth: "10月19日", like: "焼きたらこおにぎり"}] },
  { id:13, place:"東京", school:"戸美学園高校", chara: [{num: 1, name: "大将優（だいしょうすぐる）", CV: "興津和幸", age: "3年", position: "ウイングスパイカー", tall: "178.6cm", weight: "66.5kg", jamp: "", birth: "7月1日", like: "パピコ"}, {num: 4, name: "沼井和馬（ぬまいかずま）", CV: "柳田淳一", age: "3年", position: "ウイングスパイカー", tall: "178.8cm", weight: "71.5kg", jamp: "", birth: "8月4日", like: "高菜チャーハン"}, {num: 12, name: "潜尚保（くぐりなおやす）", CV: "大塚剛央", age: "1年", position: "", tall: "180.6cm", weight: "68.2kg", jamp: "", birth: "9月9日", like: "山菜そば"}, {num: "大将の彼女", name: "山架美華（やまかみか）", CV: "美山加恋", age: "3年", position: "", tall: "156.3cm", weight: "44.3kg", jamp: "", birth: "12月19日", like: "プリッツ（ロースト）"}] },
  { id:14, place:"兵庫", school:"稲荷崎高校", chara: [{num: 1, name: "北信介（きたしんすけ）", CV: "野島健児", age: "3年", position: "ウイングスパイカー", tall: "175.2cm", weight: "67.5kg", jamp: "", birth: "7月5日", like: "豆腐ハンバーグ"}, {num: 2, name: "大耳練（おおみみれん）", CV: "宮園拓夢", age: "3年", position: "ミドルブロッカー", tall: "191.5cm", weight: "80.5kg", jamp: "", birth: "2月17日", like: "白身魚の刺身"}, {num: 4, name: "尾白アラン（おじろあらん）", CV: "笠間淳", age: "3年", position: "ウイングスパイカー", tall: "184.7cm", weight: "80.2kg", jamp: "", birth: "4月4日", like: "リッツ"}, {num: 5, name: "銀島結（ぎんじまひとし）", CV: "山本匠馬", age:"2年" , position:"ウイングスパイカー" , tall:"180.3cm" , weight:"72.7kg" , jamp:"" , birth:"8月21日" , like:"肉巻きポテト"}, {num: 7, name: "宮侑（みやあつむ）", CV: "宮野真守", age: "2年", position: "セッター", tall: "183.6cm", weight: "73.3kg", jamp: "", birth: "10月5日", like: "トロ"}, {num: 10, name: "角名倫太郎（すなりんたろう）", CV: "島﨑信長", age:"2年" , position:"ミドルブロッカー" , tall:"185.7cm" , weight:"73.2kg" , jamp:"" , birth:"1月25日" , like:"チューペット"}, {num: 11, name: "宮治（みやおさむ）", CV: "株元英彰", age:"2年" , position:"ウイングスパイカー" , tall:"183.8cm" , weight:"74.5kg" , jamp:"" , birth:"10月5日" , like:"めし"}, {num: 14, name: "理石平介（りせきへいすけ）", CV: "福西勝也", age:"1年" , position:"ウイングスパイカー" , tall:"185.2cm" , weight:"71.5kg" , jamp:"" , birth:"3月13日" , like:"テリヤキピザ"}, {num: 15, name: "赤木路成（あかぎみちなり）", CV: "松浦義之", age:"1年" , position:"リベロ" , tall:"174.2cm" , weight:"70.8kg" , jamp:"" , birth:"4月12日" , like:"さけるチーズ"}] },
  { id:15, place:"神奈川", school:"椿原学園高校", chara: [{num: 1, name: "丸山一喜（まるやまかずき）", CV: "中島ヨシキ", age: "3年", position: "ウイングスパイカー", tall: "177.8cm", weight: "67.0kg", jamp: "", birth: "11月4日", like: "ホルモン焼"}, {num: 2, name: "越後栄（えちごさかえ）", CV: "石毛翔弥", age: "3年", position: "セッター", tall: "183.2cm", weight: "71.5kg", jamp: "", birth: "10月9日", like: "ヤングコーン"}, {num: 4, name: "寺泊基希（てらどまりもとき）", CV: "内田修一", age: "3年", position: "ウイングスパイカー", tall: "190.5cm", weight: "80.7kg", jamp: "", birth: "4月12日", like: "つけ麺全般"}, {num: 10, name: "舞子侑志（まいこゆうし）", CV: "須田祐介", age: "2年", position: "ウイングスパイカー", tall: "174.9cm", weight: "65.3kg", jamp: "", birth: "", like: ""}, {num: 14, name: "姫川葵（ひめかわあおい）", CV: "井上雄貴", age: "1年", position: "ウイングスパイカー", tall: "173.2cm", weight: "61.5kg", jamp: "", birth: "1月19日", like: "鉄火丼"}] },
  { id:16, place:"石川", school:"早流川工業高校", chara: [{num: 1, name: "白峰周（しらみねいたる）", CV: "宮崎遊", age: "3年", position: "セッター", tall: "181.2cm", weight: "71.8kg", jamp: "", birth: "", like: ""}] },
  { id:17, place:"大分", school:"狢坂高校", chara: [{num: 1, name: "桐生八（きりゅうわかつ）", CV: "", age: "3年", position: "ウイングスパイカー", tall: "188.3cm", weight: "85.6kg", jamp: "", birth: "4月8日", like: "生牡蠣"}] },
  { id:18, place:"長野", school:"鴎台高校", chara: [{num: 5, name: "星海光来（ほしうみこうらい）", CV: "花江夏樹", age: "2年", position: "ウイングスパイカー", tall: "169.7cm", weight: "61.7kg", jamp: "", birth: "4月16日", like: "かっぱえびせん梅味"}, {num: 6, name: "昼神幸郎（ひるがみさちろう）", CV: "宮崎遊", age: "2年", position: "ミドルブロッカー", tall: "190.4cm", weight: "80.8kg", jamp: "", birth: "2月3日", like: "具が大きいシュウマイ"}] },
  { id:19, place:"東京", school:"井闥山学院高校", chara: [{num: 10, name: "佐久早聖臣（さくさきようみ）", CV: "鳥海浩輔", age: "2年", position: "ウイングスパイカー", tall: "189cm", weight: "72.4kg", jamp: "", birth: "3月20日", like: "梅干し"}, {num: 13, name: "古森元也（こもりもとや）", CV: "上村祐翔", age: "2年", position: "リベロ", tall: "180.2cm", weight: "66.8kg", jamp: "", birth: "7月30日", like: ""}] },
];

// dome一覧
app.get("/dome", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('dome', {data: dome} );
});

// Create
app.get("/dome/create", (req, res) => {
  res.redirect('/public/dome.html');
});

// Read
app.get("/dome/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = dome[ number ];
  res.render('dome_detail', {id: number, data: detail,} );
});

app.get("/dome_detail/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = dome[ number ];
  res.render('dome_gate', {id: number, data: detail} );
});


// 削除
app.get("/dome/delete/:number", (req, res) => {
  // 本来は削除の確認ページを表示する
  // 本来は削除する番号が存在するか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  dome.splice( req.params.number, 1 );
  res.redirect('/dome' );
});

// 追加
app.post("/dome", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const id = dome.length + 1;
  const place = req.body.place;
  const name = req.body.name;
  const station = req.body.station;
  const capa = req.body.capa;
  const gate = [];
  dome.push( { id: id, place: place, name: name, station: station, capa: capa, gate: gate } );
  console.log( dome );
  res.render('dome', {data: dome} );
});

// 編集
app.get("/dome/edit/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = dome[ number ];
  res.render('dome_edit', {id: number, data: detail} );
});

// 更新
app.post("/dome/update/:number", (req, res) => {
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  dome[req.params.number].place = req.body.place;
  dome[req.params.number].name = req.body.name;
  dome[req.params.number].station = req.body.station;
  dome[req.params.number].capa = req.body.capa;
  dome[req.params.number].gate = req.body.gate;
  console.log( dome );
  res.redirect('/dome' );
});

// member一覧
app.get("/sn", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('sn', {data: member} );
});

// 追加
app.get("/sn/create", (req, res) => {
  res.redirect('/public/sn.html');
});

// Read
app.get("/sn/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = member[ number ];
  res.render('sn_detail', {id: number, data: detail} );
});

// 削除
app.get("/sn/delete/:number", (req, res) => {
  // 本来は削除の確認ページを表示する
  // 本来は削除する番号が存在するか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  member.splice( req.params.number, 1 );
  res.redirect('/sn' );
});

// 追加
app.post("/sn", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const id = member.length + 1;
  const color = req.body.color;
  const name = req.body.name;
  const birth = req.body.birth;
  const from = req.body.from;
  const DNA = req.body.DNA;
  const tall = req.body.tall;
  const admission = req.body.admission;
  const hobby = req.body.hobby;
  const skill = req.body.skill;
  member.push( { id: id, color: color, name: name, birth: birth, from: from, DNA: DNA, tall: tall, admission: admission, hobby: hobby, skill: skill } );
  console.log( member );
  res.render('sn', {data: member} );
});

// 編集
app.get("/sn/edit/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = member[ number ];
  res.render('sn_edit', {id: number, data: detail} );
});

// 更新
app.post("/sn/update/:number", (req, res) => {
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  member[req.params.number].color = req.body.color;
  member[req.params.number].name = req.body.name;
  member[req.params.number].birth = req.body.birth;
  member[req.params.number].from = req.body.from;
  member[req.params.number].DNA = req.body.DNA;
  member[req.params.number].tall = req.body.tall;
  member[req.params.number].admission = req.body.admission;
  member[req.params.number].hobby = req.body.hobby;
  member[req.params.number].skill = req.body.skill;
  console.log( member );
  res.redirect('/sn' );
});

//volleyball一覧
app.get("/volleyball", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('volleyball', {data: volleyball} );
});

// 追加
app.get("/volleyball/create/:id", (req, res) => {
  const number = req.params.id;
  res.render('volleyball_add', { id: number });
});

// Read
app.get("/volleyball/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = volleyball[ number ];
  res.render('volleyball_member', {id: number, data: detail,} );
});

app.get("/volleyball_detail/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = volleyball[ number ];
  res.render('volleyball_detail', {id: number, data: detail} );
});

// Character Profile (キャラクター個別プロフィール)
app.get("/volleyball/profile/:school_id/:char_num", (req, res) => {
  const number = req.params.school_id;
  const charNum = req.params.char_num;
  const school = volleyball[ number ];
  const chara = school.chara.find( c => c.num == charNum );
  res.render('volleyball_profile', { id: number, school: school, chara: chara });
});

// 削除
app.get("/volleyball/delete/:number", (req, res) => {
  // 本来は削除の確認ページを表示する
  // 本来は削除する番号が存在するか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  volleyball.splice( req.params.number, 1 );
  res.redirect('/volleyball' );
});

// メンバー削除 (新規追加)
app.get("/volleyball/member/delete/:id/:member_id", (req, res) => {
  const schoolId = req.params.id;
  const memberId = req.params.member_id;
  if( volleyball[schoolId] && volleyball[schoolId].chara ){
     volleyball[schoolId].chara.splice( memberId, 1 );
  }
  res.redirect('/volleyball/' + schoolId );
});

// 追加
app.post("/volleyball", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const id = volleyball.length + 1;
  const place = req.body.place;
  const school = req.body.school;
  const station = req.body.station;
  const capa = req.body.capa;
  const gate = [];
  volleyball.push( { id: id, place: place, school: school, station: station, capa: capa, gate: gate } );
  console.log( volleyball );
  res.render('volleyball', {data: volleyball} );
});

// 編集
app.get("/volleyball/edit/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = volleyball[ number ];
  res.render('volleyball_edit', {id: number, data: detail} );
});

// 更新
app.post("/volleyball/update/:number", (req, res) => {
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  volleyball[req.params.number].place = req.body.place;
  volleyball[req.params.number].school = req.body.school;
  volleyball[req.params.number].station = req.body.station;
  volleyball[req.params.number].capa = req.body.capa;
  volleyball[req.params.number].gate = req.body.gate;
  console.log( volleyball );
  res.redirect('/volleyball' );
});

// メンバー登録 (新規追加)処理
app.post("/volleyball/member/add/:id", (req, res) => {
  const schoolId = req.params.id;
  const newMember = {
      num: req.body.num,
      name: req.body.name,
      position: req.body.position,
      age: req.body.age,
      CV: req.body.CV,
      tall: req.body.tall,
      weight: req.body.weight,
      jamp: req.body.jamp,
      birth: req.body.birth,
      like: req.body.like
  };
  // 指定された高校の chara 配列に追加する
  if (volleyball[schoolId]) {
      if (!volleyball[schoolId].chara) {
          volleyball[schoolId].chara = [];
      }
      volleyball[schoolId].chara.push(newMember);
  }
  // 終わったらメンバー一覧画面に戻る
  res.redirect('/volleyball/' + schoolId);
});


app.listen(8080, () => console.log("Example app listening on port 8080!"));

