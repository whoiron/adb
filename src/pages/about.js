import React from "react";

export default ({data}) => (
  <div>
    <h1>About {data.site.siteMetadata.title}</h1>
    <blockquote>アイドルデータベースを更新し続けるのです！</blockquote>
    <p>これは非公式にアイマスの情報をまとめたWebサイトです。</p>
  </div>
);

export const aboutQuery = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;