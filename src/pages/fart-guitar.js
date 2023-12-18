import React from 'react'
//import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Fartsounds from '../components/fartsounds'
import SEO from '../components/seo'
import '../assets/scss/fart-guitar.scss'

const FartGuitarPage = (props) => (
  <Layout>
    <SEO title="Fart Guitar" keywords={['fart guitar', 'farts', 'guitar', 'smelly guitar' ]} />
    <div>
    <section className="banner d-flex flex-column justify-content-center">
    <div className="container">
    <div id="playButton" className="guitarimg_wrap logo_img img-fluid">
    {props.data.fartImage && (<Img className="logo_img img-fluid" fluid={props.data.fartImage.childImageSharp.fluid} />)}
    </div>
    <Fartsounds />
    </div>
    </section>
    </div>
  </Layout>
)

export default FartGuitarPage

export const pageQuery = graphql`
  query {
    fartImage: file(relativePath: { eq: "fartguitar.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 740) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
  }
`