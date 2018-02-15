import React from "react";

export default ({data}) => {
  const post = data.characterYaml;
  return (
    <div>
      <h1>{post.id}</h1>
      <p>WIP...</p>
    </div>
  );
};

export const query = graphql`
  query CharacterPostQuery($slug: String!) {
    characterYaml(fields: {slug: {eq: $slug}}) {
      id
    }
  }
`;