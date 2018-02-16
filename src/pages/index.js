import React from "react"
import Link from "gatsby-link";

export default ({data}) => (
  <div>
    <h1>{data.site.siteMetadata.title}</h1>

    <Link to={`/discord/`}>
      アイドルDiscord・アイドルサイトまとめ
    </Link>
  </div>
);

export const indexQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;