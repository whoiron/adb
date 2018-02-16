import React from "react"
import g from "glamorous";
import Link from "gatsby-link";

export default ({data}) => (
  <div>
    <g.H2>アイドルDiscord・アイドルサイトまとめ</g.H2>

    <p>各サーバーのルールに関しての注意文言(編集中)</p>

    <table>
      <thead>
      <tr>
        <th>Discord</th>
        <th>情報</th>
      </tr>
      </thead>
      <tbody>
      {data.allDiscordYaml.edges.filter(({node}) => node.type === "general").map(({node}, i) => (
        <tr key={`${i}`}>
          <td>{node.link && <a href={node.link} target="_blank">{node.id}</a>}</td>
          <td>
            {node.description}
          </td>
        </tr>
      ))}
      </tbody>
    </table>

    <table>
      <thead>
      <tr>
        <th>アイドル</th>
        <th>Discord</th>
        <th>サイト</th>
      </tr>
      </thead>
      <tbody>
      {data.allDiscordYaml.edges.filter(({node}) => node.type === null).map(({node}, i) => (
        <tr key={`${i}`}>
          <td>
            {/*<Link to={node.fields.character___slug}>*/}
            {node.character}
            {/*</Link>*/}
          </td>
          <td>{node.link && <a href={node.link} target="_blank">{node.id}</a>}</td>
          <td>
            {node.sites && node.sites.length > 0 &&
            <ul>
              {node.sites.map(({name, link}) => (
                <li><a href={link} target="_blank">{name}</a></li>
              ))}
            </ul>
            }
            {node.tbSites && node.tbSites.length > 0 &&
            <div>
              <span>TB宣伝</span>
              <ul>
                {node.tbSites.map(({name, link}) => (
                  <li><a href={link} target="_blank">{name}</a></li>
                ))}
              </ul>
            </div>
            }
          </td>
        </tr>
      ))}
      </tbody>
    </table>

    <table>
      <thead>
      <tr>
        <th>事務員</th>
        <th>Discord</th>
        <th>サイト</th>
      </tr>
      </thead>
      <tbody>
      {data.allDiscordYaml.edges.filter(({node}) => node.type === "ex").map(({node}, i) => (
        <tr key={`${i}`}>
          <td>
            {/*<Link to={node.fields.character___slug}>*/}
            {node.character}
            {/*</Link>*/}
          </td>
          <td>{node.link && <a href={node.link} target="_blank">{node.id}</a>}</td>
          <td>
            {node.sites && node.sites.length > 0 &&
            <ul>
              {node.sites.map(({name, link}) => (
                <li><a href={link} target="_blank">{name}</a></li>
              ))}
            </ul>
            }
            {node.tbSites && node.tbSites.length > 0 &&
            <div>
              <span>TB宣伝</span>
              <ul>
                {node.tbSites.map(({name, link}) => (
                  <li><a href={link} target="_blank">{name}</a></li>
                ))}
              </ul>
            </div>
            }
          </td>
        </tr>
      ))}
      </tbody>
    </table>
  </div>
);

export const discordQuery = graphql`
  query DiscordQuery {
    allDiscordYaml {
      edges {
        node {
          id
          link
          character
          type
          description
          sites {
            name
            link
          }
          tbSites {
            name
            link
          }
          fields {
            character___slug
          }
        }
      }
    }
  }
`