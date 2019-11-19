import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import { Link as InternalLink } from "gatsby"
import { A } from "../components/ui"

export default function IndexPage({ data }) {
  return (
    <Layout>
      <SEO />

      <div className="leading-normal">
        <section className="text-lg">
          <p>
            Hi there!{" "}
            <span role="img" aria-label="wave">
              👋
            </span>
          </p>
          <p className="mt-4">
            I'm <A href="https://twitter.com/samselikoff">@samselikoff</A>, and
            since 2016 I've made a living teaching JavaScript UI development on
            the web.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-bold">
            <InternalLink to="/projects">Projects</InternalLink>
          </h2>
          <p className="mt-2">
            I'm currently working on{" "}
            <A href="https://miragejs.com/">Mirage JS</A>, an API mocking
            library that lets frontend developers build complete features
            without touching their backends.{" "}
          </p>
          <p className="mt-4">
            I also run <A href="https://embermap.com/">embermap.com</A> where I
            make videos about design, development and testing with Ember.js,
            along with my friend{" "}
            <A href="https://twitter.com/ryantotweets">Ryan Toronto</A>.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-bold">
            <InternalLink to="/podcast">Podcast</InternalLink>
          </h2>
          <p className="mt-2">
            Join me, Ryan + guests on a weekly podcast where we chat about all
            things JavaScript UI development – not just Ember!
          </p>
          <p className="mt-4">
            <A href="https://embermap.com/podcast">
              → Check out The EmberMap podcast
            </A>
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-bold">
            <InternalLink to="/talks">Talks & interviews</InternalLink>
          </h2>
          <p className="mt-2">
            I've given several conference talks and talked about my open source
            work on a few podcasts. <A to="/talks">Check them out here.</A>
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-bold">
            <InternalLink to="/blog">Blog</InternalLink>
          </h2>
          <p className="mt-2">
            You can find my writing on <A to="/blog">my blog</A>. I haven't been
            writing much lately but I'm planning on starting up again.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-bold">Life</h2>
          <p className="mt-2">
            I was born in upstate New York, lived in Florida for 15 years, and
            have since made my way back to the Northeast.
          </p>
          <p className="mt-4">
            I currently live in New York City + absolutely love it here!
          </p>

          <div className="mt-8 -mx-6">
            <div className="relative">
              <Img
                fluid={{
                  ...data.newYork.childImageSharp.fluid,
                  aspectRatio: 16 / 9,
                }}
              />
              <div
                className="absolute bottom-0 text-white w-full pl-3 pb-2 pt-2"
                style={{
                  background:
                    "linear-gradient(0deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)",
                }}
              >
                <p className="text-sm font-semibold">New York City</p>
                <p className="text-xs">2015–Present</p>
              </div>
            </div>
            <div className="flex">
              <div className="w-1/2 relative">
                <Img
                  fluid={{
                    ...data.burlington.childImageSharp.fluid,
                    aspectRatio: 1,
                  }}
                />
                <div
                  className="absolute bottom-0 text-white w-full pl-3 pb-2 pt-2"
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)",
                  }}
                >
                  <p className="text-sm font-semibold">Burlington</p>
                  <p className="text-xs">2014–2015</p>
                </div>
              </div>
              <div className="w-1/2 relative">
                <Img
                  fluid={{
                    ...data.boston.childImageSharp.fluid,
                    aspectRatio: 1,
                  }}
                />
                <div
                  className="absolute bottom-0 text-white w-full pl-3 pb-2 pt-2"
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)",
                  }}
                >
                  <p className="text-sm font-semibold">Boston</p>
                  <p className="text-xs">2010–2014</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    newYork: file(relativePath: { eq: "new-york.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    burlington: file(relativePath: { eq: "burlington.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    boston: file(relativePath: { eq: "boston.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
