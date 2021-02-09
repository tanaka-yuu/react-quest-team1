# コーディング規約

## 目的

コーディング規約を設ける目的は
* ファイルの`場所`
* ファイルやフォルダや変数の`名前`
などにおいて、`むだな『誤解』や『疑問』を生まないため`です。

無駄な悩みを生まないためにも、コーディング規約に沿って
効率よく開発を進めていきましょう！

## ディレクトリ構成について

基本的な知識
* `langdemy-app`フォルダは`create-react-app`で生成したフォルダです。
* 編集するファイルはほとんど、`srcフォルダ`の中にあります。
* 画面を表示している部分に当たるのが、`./langdemy-app/src/App.js`です。

```
※以降は、langdemy-app/srcフォルダの中の話を前提に話を勧めていきます。
```
本プロジェクトではディレクトリ構成は、Re-ducksパターンを参考に設定しました。

このディレクトリ構成を使うことのメリットとしては、
* 機能ページごとにまとまっていてわかりやすい。
* 
* 

逆にデメリットは、
* React Questの講義とは違うのでとっかかりにくい
* 部品間の値のやり取りが、やや面倒くさいかもしれない。

ディレクトリ構成を自分なりに考えてみたのは初めてなので、問題点もさらに出てくるかもしれませんが、そのときは追加で改善策を加える可能性があることをご了承ください。

### ディレクトリ構成図
```
srcフォルダ
├ Componentsフォルダ
│ ├ pagesフォルダ (ページ単位でフォルダを作る (React-Routerにいれる画面))
│ │ ├ SignInフォルダ  (機能ごとにこの形式のフォルダを作成)
│ │ │ ├ index.jsx         （View部分）
│ │ │ ├ styles.module.css （レイアウトを指定）
│ │ │ ├ actions.js        （Actionを定義）
│ │ │ ├ reducer.js        （Reducerを定義）
│ │ │ ├ operations.js     （Reduxの非同期処理）
│ │ │ └ selectors.js      （Storeの値を参照）
│ │ │
│ │ ├ SignUpフォルダ  (SignInフォルダと同様の形式)
│ │ │ ├ index.jsx         （View部分）
│ │ │ // 以下省略
│ │
│ ├ partsフォルダ (各部品単位でフォルダを作る (ボタンやテキストボックスなど))
│ │ ├ SignInButtonフォルダ  (SignInフォルダと同様の形式)
│ │ │ ├ index.jsx         （View部分）
│ │ │ // 以下省略
│ │ 
│
├ storeフォルダ
│ ├ createStore.js  
│ ├ rootSaga.js
│ └ rootReducer.js
│
├ App.js
├ index.js
// 以下省略
```

### ディレクトリ構成図の説明

まずsrcフォルダの直下には`components`フォルダと`store`フォルダを用意します。
storeフォルダはこれまで同様、ReduxのStoreの設定ファイルを格納します。
componentsフォルダ直下は、以下の二種類のフォルダを用意します。
* pagesフォルダ → `ページ単位`  （SignInやLessonReady）
* partsフォルダ → `部品単位`    （ボタンやテキストボックス）

#### pagesやpartsの直下のフォルダ

pagesフォルダやpartsフォルダの中には、それぞれ`『ページの名前』`、`『部品の名前』`のフォルダを作成します。
例で言えば、pagesフォルダの中の`SignIn`フォルダや、partsフォルダの`SignInButton`フォルダが該当します。

これらのフォルダの中身は次のようになります。
```
index.jsx         （** 必須 **。ページまたは部品の見た目部分）
styles.module.css （index.jsxのレイアウトを指定）
actions.js        （Actionを定義)
  → 例：counterAction.js
reducer.js        （Reducerを定義)
  → 例：counterReducer.js
operations.js     （Reduxの非同期処理)
  → 例：expressController.js
selectors.js      （React-ReduxをPropsで連携)
  → 例：containers/counter.js

index.jsx以外は必ずしもないといけないわけではない。
```


## 命名規則

変数の単語の選び方は、それぞれのセンスにおまかせします。
ただし、ローマ字ではなく英語でお願いします。
わかりにくいものに対してはコメントを振って頂けるとありがたいです。

### フォルダ名
フォルダ名を指定するのは、基本的にはpagesフォルダかpartsフォルダの中のページの中しかないと思われます。

命名規則は、`すべての単語の先頭を大文字にする『アッパーキャメルケース』`とします。
例： LessonReady, Schedule, SignOutButton

こうする理由としては、jsxのエクスポートするクラス名と合わせるとimportのときに便利だからです。


### ファイル名

基本的には、`pagesやpartsの直下のフォルダ`の章で前述した通り、
役割ごとに、
`index.jsx`, `styles.module.css`, `actions.js`, `reducer.js`, `operations.js`, `selectors.js`
の名前を使用するようにしてください。

どれにも当てはまらない場合の命名規則は、`先頭の単語以外すべての単語の先頭を大文字にする『キャメルケース』`とします。
例： createStore.js, rootSaga.js


### クラス名

命名規則は`すべての単語を小文字で、複数単語をハイフンで繋ぐケバブケース`とします。
例： header-container, form-button

### JS部分の変数

命名規則は、ファイル名同様キャメルケースとします。
例： zoomPassword, meetingURL (URLやIDなど普段大文字で使われる単語はそのまま大文字で)


## 動作確認
```
// リポジトリをローカルにインストール
git clone git@github.com:tanaka-yuu/react-quest-team1.git

// プロジェクトフォルダに移動
cd react-quest-team1/langdemy-app

// パッケージのインストール
npm i

// 実行確認
npm run start
```
