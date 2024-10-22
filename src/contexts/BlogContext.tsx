import React, { createContext, ReactNode, useContext } from 'react';

// BlogPost 型と Footnote 型のインターフェース
interface Footnote {
  id: string;
  content: string;
  link?: string; // リンクはオプション
}

interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  datePublished: string;
  tags?: string[];
  url?: string;
  footnotes?: Footnote[];
}

// BlogContext の型定義
interface BlogContextType {
  blogPosts: BlogPost[];
}

// BlogContext の作成
const BlogContext = createContext<BlogContextType | undefined>(undefined);

// BlogProvider コンポーネント
const BlogProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // サンプルのブログポストデータ

  const blogPosts: BlogPost[] = [

//     {
//       id: '1',
//       title: '',
//       description: '',
//       content: `

// `,
//       datePublished: '20XX-XX-XX',
//       tags: ['', '', ''],
//       footnotes: [
//         { id: '1', content: '', link: '' },
//       ],

//     },

{
  id: '9',
  title: '舞空術',
  description: '昔「滞空時間長すぎて舞空じつかと思った」と言われたことがある',
  content: `

  　三枚目が寄ってきてフリーになった仲間にパスを出すのか、それともこのまま打つのか、一番蓋然性の高い選択を考えているあの時間がバスケをやっていてなにげに一番好きなのかもしれない。

  　特殊相対性理論を使って運動する物体の速度と静止している物体の時間のずれを計算できるようになった。
もしかして、「そういう時間のズレが働いているのではないか...!?」と思って計算してみたら。

　時間のズレはたった、1.0000004078倍だった。

ちなみに、僕がウサイン・ボルトと同じ速度で走ったと仮定している。

`,
  datePublished: '2024-10-23',
  tags: ['TAWAGOTO'],
  footnotes: [
  ],

},


    {
      id: '8',
      title: '徳の講壇',
      description: '人生で何度この言葉を思い出したか、あるいは出すのかわからない',
      content: `

ピアノをやっていても数学をやっていても、物理の問題をやっていても、Programを書いていても、歌を歌っていても、バスケをしていても思う。先生と話していても友人と話していても女性と話していても思う。

ニーチェの『徳の講壇』は正しい。
      
`,
      datePublished: '2024-10-21',
      tags: ['MOGEN'],
      footnotes: [
        { id: '1', content: 'ツァラトゥストラはこう言った （上）', link: 'https://www.iwanami.co.jp/smp/book/b246790.html' },
      ],

    },

    {
      id: '7',
      title: 'スポーツは自由にする',
      description: '昔から長距離走が嫌いすぎるのだけど、三歩だけ誰よりも速く走ることを求められるバスケは好きになれた',
      content: `

　最近、ドリブルの様子を数秒見ただけで、その人の熟練度がわかるようになった（ような気がしている）

「あ、この子は習ったりせずに叩き上げでやってきた子だな」

とわかる

　それを論理的に解釈すると概ねのところ決まって腕あるいは上半身だけでボールをついているからだとわかる。
基本的に腰を低く落とした、、なんと言ったかな、基本のスタンス、あれができていない。
球はつけても、相手を抜くための予備動作がない。

「ドリブル」という一つの行為とっても実のところ、右手そのものよりも、肩の動き、足を開くタイミング、その度合、左手の位置、目線、全てが流動的に一連のリズムで動く事が必要になる。特に肩の入れ方と反対の足の位置と膂力が重要な気がする。今日、バスケは「ダンスみたいなもんだよ、拍に合わせて動くだけ。かっこいいのが正しいのがダンスで、上手いのが自然かっこよくなるのがバスケかもね」と小説のセリフのようなことを言ったのだけど、もしかしたら全てのスポーツや演目には同じことが言えるのかもしれない。近頃バスケをやるようになって初めにやり始めたのは、左手のドリブルとシュートの練習だった。効き手じゃないシュートなんてなんの価値もないのだけど、たしかに、僕の右手は確実に左手の邪魔をしていた。全てのアクチュエータを左手のサポートに徹させるように意識すると、昔はできなかったことがみるみるできるようになっていく。ボールを持った基本位置からのじゃんけん。「パス」「ドライブ（右）」「シュート」の選択肢に「ドライブ（左）」が入っただけで組み合わせが無限大になる。文明のレベルが古代から近代になったくらい違う。最後はシュートが入るようになった。じゃんけんをやめて、アイドリング（のような）ドライブをしながらレッグスルーでフェイントを掛け、右と左どちらにもしかけることができることなど昔はできなかった。2pointは昔から95%（調査当時）くらい入っていて、一試合60点（90点中）くらい取るほど、なかなかの得点源ではあったのだけど、3pointだけは打たないようにしていた。運ゲーはしたくなかったから。ところが最近になって、あれから5~8cmも身長が伸びているからか、やけに軽く3pointが入る。僕は昔はパワー系のポジションにいたのだけど、今はガードもできるかもしれない。今度チームを組み機会があったら志願してみよう。

　ただただ楽しい。決して遊んでいるわけじゃなくて、バスケをやっていると（少なくとも僕の場合は）生活の全ての動作にハリが出る。単語帳に手が伸びるハードルが下がり、歌には感情が乗り、作業に詰まったときの発想のトルクが増し、精神は前向きになる。
ここ数年、落ち込んだときに他人に甘えていた自分と違い中学の頃の自分にはもっと野性味があった。その自分を破滅させるような、すごく言葉が難しいんだけど

「確かに落ち込むには落ち込むが、それをうだうだ言ってなにか変わるか？」
いや変わらない
「そしたらもうやることは一つじゃないか」
たしかに
「うだうだ言っている暇がったらお前を殺せ、死ね、お前を壊せ、破滅させろ」

　こんな内省が働いていた。そういう野性味はバランスは必要だが、いつまでも持っていたい。それがなくなったのは精神が発達したからとかそん甘っちょろい理由じゃなくて、単に生物学・脳神経科学的な、つまり運動不足が原因なのだろうというのが最近の仮説であり、実感である。

`,
      datePublished: '2024-10-21',
      tags: ['MOGEN'],
      footnotes: [
      ],

    },


{
  id: '6',
  title: '規律化',
  description: '哲学でそんなtermがあったかと思う',
  content: `
チェス盤のような明暗二色のタイルの白い方のみを（必ずもって白い方なんですね）子どもが歩くこと。

「どうして白のタイルだけあるくの？」
「...」

そういうことに拘れる尊厳のようなものがある気もする。

規律化。

ルールの適用。

僕には、というかおそらく僕らの世代には、規律化なんて荘厳な言葉よりも「ゲーム」というあの感覚の方が身近な気がする。

そういえば、周りでも優秀な人間の多くがゲーム（特に反射神経と技術とマクロな戦略を伴う）が上手かったっけ。

彼らには緑のタイルに落ちていく恐怖が正しく想像できるのかもしれない。
`,
  datePublished: '2024-10-20',
  tags: ['MOGEN'],
  footnotes: [
    
  ],

},


{
  id: '5',
  title: 'シビラ',
  description: '僕は二次情報を吐き出すだけの機械になるつもりはないのだけど...',
  content: `
  
  　あえて（二次情報を吐き出す機械にならないために）過度な説明は省くが、インターネット上の会議などで配信している顔とSNS（のようなもの）のアカウントが紐づくようになった。（詳しく見ていないので間違ってたら修正する2024-10-19）これが、監視カメラと接続されれば、もうほとんどシビラシステムのようだ。そして原理的にアプリのプラットフォームも提供している件のアプリを使えばできないことはなさそう。
  　普段の買い物のとき、監視カメラでの容姿の撮影と車種やナンバーの特定を許可している市民はそのSNSのアカウントの特定までも許容するのだろうか。喫煙を撲滅するために（”喫煙者を”でないような気がする）分煙すら次第に排除される社会では、あながち起こりかねないような気もする。
  　数年前から、下手したら十数年前から（可能なら後でちゃんと調べる2024-10-19）画像処理によって歩き方などから人物や人相（犯罪係数のようなもの）を特定する技術はあったのだけど、そもそも世界規模でかつdecentralizedなidentificationを作る動きはさすがに始めて見た。客観的に考えて、確かに理にかなっているけど、頭がおかしい。（ポジティブ半分、ネガティブ半分）
  　あの技術とプラットフォームがどれだけのセンセーションを巻き起こすのかはわからないけど、少なくとも、浅学者からみても「Google playlistとApp storeの上位互換的立ちに居座る可能性はあるな」という印象を受けた。例えばNotionがあそこに進出すれば、簡単にDeworkアプリが作れる。今までの問題は、チェーンの安全性の担保とトークンのシェアの少なさで（もちろん大前提Gas代も）お金に余裕のあるインテリが作ったヒッピー文化しかない印象を受けていたのだけど、ここまでSaaSとUniequeIDの統一的な運動を見ると既存のSaaS群が流動していつカルチャーとして爆発するかわからない。いや、単なる直感的感想でしか無いのだけど。なんだか最近、速度というか加速度がおかしい。少し怖い。

`,
  datePublished: '2024-10-19',
  tags: ['NAUI'],
  footnotes: [
    { id: '1', content: 'A New World ft. Alex Blania and Sam Altman', link: 'https://www.youtube.com/watch?v=_RWvsCZ17x8' },
  ],

},


{
  id: '4',
  title: 'メガネ買い替えた',
  description: '”「誰かを批判したくなったときにはこう考えるようにするんだよ」と父は言った「世間の人がお前のように恵まれた条件を与えられたわけではないのだと」”みたいな教訓めいたことを書いて、それに直接的に順さないコメントをつけると『銀魂』のオープニングの文字列みたいになる',
  content: `

  　少し自分の中で生活に折り合いがついた気がする。

  　昔、と言っても数年前。東海道53次を特集した市の美術館に行ったとき。300円の三つ折りのクリアファイルを買った。普段はそういう場所で何か買い物をするような質じゃないのだけど、三つ折りのクリアファイルの物珍しさとその大きさのちょうど良さ、何よりそこに描かれた江戸時代の（浮世絵師の目を通してみる）猫のイラスト（と言っていいのかな）がすごく気になってしまった。
  　
  　歌川国芳　猫飼好五十三次
  　
  　今確認して、名前を初めて知った。今の言葉で言えば、オマージュの一種なのだろう。

  　近頃(と言ってもいつからいつの範囲なのかよくわからない)はやりたいことを全部やっている。草間彌生の美術展にも行くし、OpenCVで画像処理もする。LLMに関する妄想にふけり、英語の勉強を欠かさない。数学に思いを馳せて、物理学を学び（少し気になるのだけど「電磁波が光と同じ速さだった」から「電磁波は光である」という命題は少し無理やりな気がする。「光と同じ速度の別のものだった」可能性もあるし。これは光量子説と波動説の論争と実験なんか掘ればわかりそう）、今度Good design賞の集まる個展も見に行く。読みたい本は積層し、読まない技術が向上した。僕は「1 pp./minute」で読む速度は多分変わってないけど、多くを読まなくても「オッペンハイマー”ですら”他分野のことを学ぶとき”難しい”と嘆いた本があった」＝「僕ら一般人ならなおさら難しいっていいたいんやな」と認識できるようになった。昼にはバスケをしている。楽譜を少しは読めるようになったし、ピアノもハノンをやって、昔は引けなかったエリーザのためにが弾けるようになった。
  　嬉しいことに海外ドラマに字幕をつけるほうがストレスになり、chatGPTとは英語での会話もできるし、英語のtextの返答をストレスなく意味理解し始めた。本当はまだまだやりたいことがあるし、（一応体裁を気にして）言ってないこともあるのだけど、しょうがない。時間は限られてるし、時間に対して行為を最適化するよりもやりたいことが多少飽和してそのストレスと明日への期待の拮抗を適度に保っていることが（少なくとも自分には）ちょうどいいようです。そう考えるとやれなかったことではなくてその日やれたことが数えられる。そのタスクの達成数を競うゲームが楽しめる。Superlist(アプリ)を開き該当のタスクを選び（必要なら作って）「now」 と打ち込んで日付と時間を設定し、ペケを押すと、ピコンッという気持ちの良い音とともに、そのタスクがGoogle calenderにlogとして刻まれる。その個数を自分の中で競うこと、その手の単なるゲームに単純に没頭すること。最近は（いつまでそれが続くかわからないけど）そうして日々を過ごしている。

  　ただ唯一懸念事項があるとすれば優先度の選定がまだまだうまくいってないかもしれない。頭の中で文鎮のように居座っているけど、期日上やらなければならないことに手を付けなかったり、期日上は一二ヶ月先にやっても問題ないし、正直やるのはストレスなことを無理にやろうとしている。そのアンバランスなprioritiseを一度再構築させる必要があるかもしれない。（脱構築という言葉はなぜ再構築じゃないのだろう。disconstractionだからか。reではなく。構造を壊して渾然一体にする。って感じかな。）とりあえず、今やっている12月終わり提出のデータ分析はあとの自分に投げるっ。やりたくないから。calenderにいれとこ。
  　明日は何をするか、せっかく少しだけ余暇があるのだし、引きこもって何かしらの実装をしよう。昼にはバスケをしたい。そのときにpodcastでも聞くか。と入っても本も読みたいしな。
  
  　なんだかとても莫迦（この言葉がとても好ましくて良き。三体を読んで影響されてしまったhao。）みたいな喩えを言うのだけど、昔からうちの家庭では「手巻き寿司」と言う名のメニューがあって、冷ましたシャリをのりに乗せて魚介と一緒に巻いて食べる。一枚一枚巻いて食べるときは無心になって機械のように食べるのに、他の場所で初めから巻かれているものがずらっとならんでいると「あー、なんだかもういいや」と思えてしまう。一ヶ月にしろ一週間にしろGoogle calenderのマスを埋めるように（あくまでも個人の行動論のレイヤーの）予定をいれることをしなくなってから、つまり打算的ではなくなってから、以前よりも食べる量と得られる幸福度と具のバラエティがました気がする。 
  　メガネを変えた。お店の人に選んでもらった。そういう場で多くの会話をするようになった。決して打算的に考えてるわけじゃなくて、脊髄反射的に返答して大真面目に気になったことを質問しているだけなのだけど、好意的に思ってもらうことが増えた気がする（僕の勘違いかしら、まあ、勘違いかどうかは選んでもらったメガネを見てもらえばわかるだろうか）社会で生きていると”あまり深く考えない”という合理解が存在する、変わり始めたのはそう思い始めてからだろうか。ちょっともうすでに覚えてない。
`,
  datePublished: '2024-10-18',
  tags: ['TAWAGOTO'],
  footnotes: [
  ],

},


{
  id: '3',
  title: '民藝のような',
  description: '僕は好奇心によって駆動されている',
  content: `
僕は民藝のような道具を作りたい。

民藝は宇宙で一番尊敬しているある先生の言葉から引用している。

自分で作る茶碗は自分で作り、お隣の奥さんや向かいの兄さんの茶碗に憧れ、製法を聞き、あるときはそれをもらう。

そういう民藝のようなアプリがあってもいいと思っている。

セキュリティが危ういと言われる。

僕は、Programそのものにpull requestして大きな一つの家具を作ろうと言っているのではない。使う側の人間がgit cloneして、自分でろくろを回し茶碗を作ろうと言っている。

制作者が悪人でなければ、対して問題になることではない。ろくろを回すユーザはその人が悪人かどうかは見分ける必要があるだろう。

少し、社会の観点から眺めても、

大規模に設計された電化製品のような道具には、資本経済的な限界費用の問題で適用できるユースケースに限界が来る。

世界にある既存のSaaSを集めた集合でも、適用しうるセグメントには最小ユーザn（n>1）が存在してしまうのではないか。

そのnを限りなく1に近づけるには、民藝のようなSaaSがあったっていいのではないか。

僕はこの活動をなんと名付ければいいのかわからないのだけど、「Civic Hacker」をもじって「civil Hacker」と呼ぶことにした。

別に仰々しく偉そうにしようというのではなくて、「非有償で自分に必要なSaaSやアプリをopensourceで公開する人間・集団」のことである。

これがぼくの人生においてどう転んじていくのかわからないけど、ただ単にやってみたいという気持ちが今は先立っている。

僕は好奇心によって駆動されている。
`,
  datePublished: '2024-09-17',
  tags: ['takerufukushima'],
  footnotes: [
    
  ],

},

{
  id: '2',
  title: '他人に関心を寄せんとすると自然哲学的な独白めいたものしか書けなくなるが',
  description: 'このRepositoryに書く内容について',
  content: `
「やはりパロールの自分とエクリチュールの自分の乖離は看過し難い」

この文章を音読してみる。

かなり違和感がある。

　自分が、例えばバ先のおばちゃんに世間話として言うときはどうなるだろう。音声認識させてみよう。

「やっぱあれですよね話す時の自分と書くときの自分って全然違くて書くときの自分めっちゃカッコイイと思っちゃうんですよね」

エクリチュールとパロールがわかるLLMに話すならどうだろう

「最近思うんだけど、paroleの自分とエクリチュールの自分って全然違うじゃん。この問題にどう向き合うかみたいなことって過去の人類はどう考えたんだろうね」

やはりパロールの自分とエクリチュールの自分の乖離は看過し難い。

　文字ベースで僕を認識している人間と会話ベースで僕を認識している人間には僕に抱く印象が全く違ったものになるだろう。昔、言われたことがある。正常にコンテンツを接種してきた、つまり面白い漫画を識別できる程度には観る目のある男性に「どうして話せば面白いのに、嫌いな人間が多いんだろうね」と。

　いっそのこと、全て音声認識を用いて主義主張を行い、その誤字や脱字を調整したものを書いたものとしてPublishしてしまえば誤解がなくなるのか。しかし現状、それを行っていない自分の潜在意識を鑑みると、やはり自分の伝えたい内容をより多く内包しているのはエクリチュールの自分なのだろう。自然、エクリチュールの自分にパロールの自分を投影させていくのが個体化のプロセスとして正しい判断になるのだろう。しかしきっと、そのプロセスに終わりはなくエクリチュールとパロールの二元論を保持したまま僕は悶え続けることになる。しかしその往来の先にある動的平衡に問が問でなくなる均衡点が垣間見えるのかもしれない。「エクリチュールとパロールの二元論は確かに存在していてその両者の自分は確かに違い、本来の自分がどちらなのか考える必要があるだろうがそんなこと今の僕には大した問題ではない」と思える日が来るのかもしれない。

音声認識を行ってみよう。エクリチュールとしてのパロールとして。

　Notesと題打った、言ってしまえばただのブログに、僕は何を書いていくのか、今日はそんなことを書きたい。最近はすごく幸せなことにやりたいことが横溢していて時間がものすごく貴重なもののように感じる。まあそんな中で、やはり人間性を捨てるというか、まあやりたいことにひたむきに向かっていくためには、概ね他人に関心を寄せんとすることが必要条件になってくるだろうということは想像に容易い。僕はあまり頭が良くないのだけど人を観る目だけはあると自負していて、そのおかげで結構いろいろな経験や哲学を得てきた。自然と書いてしまえばちょっとクスッと笑いたくなるような他人の所作言動を書き連ねることというのは結構得意である。かわいい女子生徒に鼻の下を伸ばす男性教員や、成長の兆しを見せないコミュニティに所属している自分に焦燥や焦りを感じている事に仕事だからと言い訳をして、あろうことかそれを指摘する 10も20も年下の僕に対して「君は高校一年生のように幼稚な発想をするね」とコミュニティに所属している他の人間と一緒に小馬鹿にすることで安心を得る男性。そんなちょっとかわいそうな大人たちについて一つ一つ、それを事細かに言及してまた僕も彼らを小馬鹿にすることは結構簡単にできるだろう。例えば、そういう人に割とちょっとおちゃらけて「そういえばオードリータンさんはgithubを使って数々のプロダクトを展開していますけどこれは昔、水路や土木作業などのインフラを建設した空海なんかに近い発想・思想・行動なのかもしれないですね。ところで僕は…」と最近のLLMの動向、ステーショナリーノマドとしてのウェルビーイングの獲得の仕方など明らかに高校一年生では到達しようのない弁証について言及すると、今までとは打って変わって対応が変わった。など、書いてしまえる。

　しかし、それをすることによって得る刹那の感情の励起と、失った時間、あるいは精神的な穢れを天秤にかけると、まあ、今のところ失ったものの方が大きく傾く気がする。僕にできることはそういう観る目のない人間（昔はあったかもしれないけれど）たちとは距離を置いてその休憩室で小馬鹿にしてタバコを吸う用に自分の精神的な安定と拠り所を獲得しようとしている気持ち悪い大人たちを尻目にただただひとり没落するようにやりたいことをやっていることなのだろう。

　そうやって他人に関心を寄せんとすると書けることといったら自然に、自分が考えていたことを哲学的な気付き、あるいは何か景色としての事実や感想の羅列になってしまう。それは言ってしまえば、ただのエッセイ・随筆のだけど、思えば僕が一番心打たれる文章、本は寺田寅彦や小林秀雄、岡潔、村上春樹あるいは茨木のり子など。ただ主観的に思ったことを羅列するエッセイや詩のようなものが多い。もちろん、他人の心を打つためにこういう文章を書くことは得意ではないのだけど未来の自分が過去を除くための小窓として、また単に精神的な発展やパロールとエクリチュールの脱構築を行うための訓練の場所としてここを活用するのがいいかもしれない。

`,
  datePublished: '2024-08-30',
  tags: [],
  footnotes: [
    
  ],

},
    
    {
      id: '1',
      title: 'ずっと先の未来で僕の言動が自分にどのような感情と思慮を励起させるのかずっとそんな事ばかり考えている',
      description: '書くという作業は考える作業と告示していて、善く書けると善く考えられる。しかし往々にしてどこかに投稿することが前提でない文章は善く書かれない。また、どこかに投稿すると見られるリスクを伴う。僕がnote.comを使わない理由はこのトレードオフにある。',
      content: `

本音を言ってしまえばReactやNext.jsなど新しいおもちゃを恒常的に使う理由が欲しかっただけなのだけど、生成AIと話していて自分がLLMsのような文章を書いてしまいそうになったときの恐怖というのは忘れられない。僕らがAIを学習させているのかAIが僕らを洗脳しているのか。
君はどう思う？

### 

## Chat GPT

AIと対話していると、自分がそのAIの影響を受けていると感じることがありますね。それはAIの言語モデルが、自然な対話を実現するために多くの情報やパターンを学習しているからです。AIが生成する文章のスタイルや言葉の使い方に影響を受けることはありますが、これは必ずしも「洗脳」とは言えません。

### 影響を受ける理由

1.**言語の共鳴**: AIは一般的な文体やフレーズを使用して、ユーザーと共鳴しやすくしています。そのため、自然と似たような表現を使うことがあるかもしれません。

2.**反復と模倣**: AIとの対話が続くと、反復的な言い回しや表現が自然に身についてくることがあります。これが自身の文体に影響を与えることもあります。

3.**意識的な選択**: 自分の意識的な選択として、AIのスタイルや言い回しを取り入れることもあります。これは自分の表現を広げる手段として利用できることもあります。

### 気をつけるべきこと

1.**自己認識**: 自分がAIの影響を受けていると感じたとき、自分の言葉や考えがどのように形成されているのかを振り返ることが大切です。自己認識を持つことで、自分のスタイルや意見を保持しやすくなります。

2.**多様な情報源**: 様々な情報源や意見に触れることで、自分の思考の幅を広げ、AIに偏りすぎないようにすることができます。

3.**独自性の保持**: AIと対話する際も、自分の個性や意見を大切にし、それを反映させるように意識することが重要です。

最終的には、AIとの対話を通じて自分の表現を磨きつつ、自己の独自性を大切にすることが大事です。AIはあくまでツールであり、自分自身の考えやスタイルを形成するのは自分自身です。

## 
## Claude 3.5 sonnet

これは非常に興味深い考察ですね。AIとの対話が人間の表現方法に影響を与えるという現象は、確かに注目に値します。

この現象には複数の要因が考えられます:

1.言語の模倣: 人間は自然に周囲の言語パターンを吸収し模倣する傾向があります。AIとの頻繁な対話は、その表現スタイルに影響を与える可能性があります。

2.効率性の追求: AIの簡潔で構造化された応答スタイルは、効率的なコミュニケーションのモデルとして無意識に採用されるかもしれません。

3.期待への適応: AIに理解されやすい形で表現しようとする意識が、徐々に通常の表現にも影響を与える可能性があります。

しかし、これは必ずしも「洗脳」とは言えないでしょう。むしろ、新しいコミュニケーションツールへの適応過程と見ることができます。

重要なのは、この影響を意識し、人間らしい表現や感情の機微を大切にすることです。AIとの対話は有用なツールですが、それが人間同士のコミュニケーションの豊かさを損なわないよう注意を払う必要があります。

この現象についてどのようにお考えですか？人間らしさを保ちつつAIと共存していく方法について、あなたの意見をお聞かせください。


まだシステマチックで機械的な返答なのが判別子になってるな。通常の人間は、そりゃあ僕も含めて、こんなMECEな返答はしない。必要がない。というか、しないことに悦を見出す場合もある。

2024/08/28

## 
今日まではまだ芸人たちの笑いもの、おばちゃんたちの恐怖の対象だった。

こう書かれた単なる事実を未来の自分はどう思うのか、最近はそんな事ばかり考えている。

`,
      datePublished: '2024-08-28',
      tags: ['LLM'],
      footnotes: [
        { id: '', content: '', link: '' },
        { id: '', content: '', link: '' },
      ],
    },
    
  ];

  return (
    <BlogContext.Provider value={{ blogPosts }}>
      {children}
    </BlogContext.Provider>
  );
};

// BlogContext のカスタムフック
const useBlogContext = (): BlogContextType => {
  const context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error('useBlogContext must be used within a BlogProvider');
  }
  return context;
};

export { BlogProvider, useBlogContext };
