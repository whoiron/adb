# adb

**adb is ARISA Idol Database**

> アイドルデータベースを更新し続けるのです！

これは非公式にアイマスの情報をまとめたWebサイトです。
[Gatsby](https://www.gatsbyjs.org/) を使って、YAMLファイルなどに定義されたデータを [GraphQL](http://graphql.org/) でまとめて [React](https://reactjs.org/) で表示しています。

## Running in development

node npm が入っているか確認

```bash
$ node --version
v8.0.0
$ npm --version
5.0.2
```

Gatsby をインストール

```bash
$ npm install --global gatsby-cli
```

Clone してサイト立ち上げ

```bash
$ git clone git@github.com:whoiron/adb.git
...
$ gatsby develop
```

[http://localhost:8000](http://localhost:8000) にアクセス

## Data, GraphQL and React

データを定義して

```yaml
# discord.yaml
- id: "ありさーばー☆"
  link: http://google.com
  character: "松田亜利沙"
```

GraphQL でまとめると


```
{
  allDiscordYaml {
    edges {
      node {
        id
        link
        character
      }
    }
  }
}
```

JSON が取得できます。

```json
{
  "data": {
    "allDiscordYaml": {
      "edges": [
        {
          "node": {
            "id": "ありさーばー☆",
            "link": "http://google.com",
            "character": "松田亜利沙"
          }
        },
      ]
    }
  }
}
```

この JSON を React で表示します。

```js
export default ({data}) => (
  <div>
    <table>
      <thead>
      <tr>
        <th>キャラクター</th>
        <th>discord名</th>
      </tr>
      </thead>
      <tbody>
      {data.allDiscordYaml.edges.map(({node}, i) => (
        <tr key={`${i}`}>
          <td>{node.character}</td>
          <td><a href={node.link}>リンク</a></td>
        </tr>
      ))}
      </tbody>
    </table>
  </div>
);
```

GraphQL は [http://localhost:8000/___graphql](http://localhost:8000/___graphql) で実際に試すことができます。

さらに詳しい情報は [Gatsbyのチュートリアル](https://www.gatsbyjs.org/tutorial/part-four/#recap-of-first-half-of-the-tutorial) へ


## Contributing

### Issue

[Issue](https://github.com/whoiron/adb/issues) に変更・追加してほしい情報をください。

### Pull Request

1. これを Fork ( [https://github.com/whoiron/adb/fork](https://github.com/whoiron/adb/fork) ) 
2. feature ブランチを作成 ( `git checkout -b feature/my-new-feature` )
3. 変更を Commit ( `git commit -am 'Add some feature'` )
4. Push ( `git push origin feature/my-new-feature` )
5. Pull Request を作成