import React from "react"
import { Link, graphql } from "gatsby"
import { H1 } from "../components/ui"

export default function BlogPage({ data }) {
  let articles = data.allMdx.edges.map(edge => ({
    title: edge.node.frontmatter.title,
    date: edge.node.frontmatter.date,
    url: `/blog/${edge.node.parent.relativePath
      .replace(/\/index.mdx?/, "")
      .toLowerCase()}`,
  }))

  return (
    <div className="mb-16">
      <H1>Blog</H1>

      <ul className="mt-12 leading-tight">
        {articles.map(article => (
          <li className="mt-6 md:mt-10" key={article.url}>
            <p className="text-xs font-medium text-gray-400 md:text-sm">
              {article.date}
            </p>
            <Link to={article.url}>
              <h2 className="mt-1 text-lg font-bold md:text-xl">
                {article.title}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const query = graphql`
  query BlogIndexQuery {
    allMdx(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { listed: { ne: false } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
          }
          parent {
            ... on File {
              relativePath
            }
          }
        }
      }
    }
  }
`
