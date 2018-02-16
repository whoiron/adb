import React from "react"
import Link from "gatsby-link";

export default ({data}) => (
  <div>
    <h1>adb</h1>
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
          <td>
            {/*<Link to={node.fields.character___slug}>*/}
              {node.character}
            {/*</Link>*/}
          </td>
          <td>{node.link && <a href={node.link} target="_blank">{node.id}</a>}</td>
        </tr>
      ))}
      </tbody>
    </table>
  </div>
);

export const indexQuery = graphql`
  query IndexQuery {
    allDiscordYaml {
      edges {
        node {
          id
          link
          character
          fields {
            character___slug
          }
        }
      }
    }
  }
`