import React from "react";

export default ({data}) => (
  <div>
    <h1>About {data.site.siteMetadata.title}</h1>
    <p>
      WIP...
    </p>
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