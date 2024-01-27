import React from 'react'
//import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'

import Shows from '../components/shows'
import Contactform from '../components/form'

const IndexPage = props => (
  <Layout>
    <SEO title="Home" keywords={['montage', 'band', 'kc', 'kansas city']} />
    <div>
      <section className="banner d-flex flex-column justify-content-center">
        {props.data.montageBG && (
          <Img
            className="heroBG"
            style={{ position: 'absolute' }}
            fluid={props.data.montageBG.childImageSharp.fluid}
          />
        )}
        <div className="container">
          <div className="img_wrap logo_img img-fluid">
            {props.data.montageLogo && (
              <Img
                className="logo_img img-fluid"
                fluid={props.data.montageLogo.childImageSharp.fluid}
              />
            )}
          </div>
        </div>
        <ul className="list-inline social-links mb-3">
          <li>
            <a
              href="https://www.facebook.com/montagekc/"
              className="btn-social btn-outline"
              title="Facebook"
              target="_blank"

            >
              <span className="icon-facebook"></span>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UC-5g9WInfE6VSGnkQ307Ozg/"
              className="btn-social btn-outline"
              title="Youtube"
              target="_blank"

            >
              <span className="icon-youtube"></span>
            </a>
          </li>
          <li>
            <a
               href="mailto:montagekc@gmail.com?Subject=Interested%20in%20booking%20you!"
              className="btn-social btn-outline"
              title="Email Montage!"
              target="_blank"
            >
              <span className="icon-envelope"></span>
            </a>
          </li>
        </ul>
      </section>
      <section className="shows">
        <div className="container">
          <Shows />
        </div>
      </section>
      <section className="songs">
        <div id="song_container" className="container">
          <h1>Setlist</h1>
          <iframe
            title="Montage Setlist"
            src="https://open.spotify.com/embed/playlist/4MD2q9eW1PZPEpbP8unk9Y"
            width="100%"
            height="450"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
      </section>
      <section className="m_videos">
        <h1>Videos</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-6 vid">
              <div className="iframe_wrap">
                <iframe
                  title="All My Life(Foo Fighters)"
                  className="iframe"
                  src="https://www.youtube.com/embed/JYQZi_a814M"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="col-md-6 vid">
              <div className="iframe_wrap">
                <iframe
                title="Mississippi Queen(Mountain)"
                  src="https://www.facebook.com/plugins/video.php?height=420&href=https%3A%2F%2Fwww.facebook.com%2Fmontagekc%2Fvideos%2F196150410188591%2F&show_text=false&width=560&t=0"
                  className="iframe"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact_form">
        <h1>Contact</h1>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Contactform />
            </div>
          </div>
        </div>
      </section>
      <section className="footer">
        <ul className="list-inline social-links text-center">
          <li>
            <a
              href="https://www.facebook.com/montagekc/"
              className="btn-social btn-outline"
              title="Facebook"
            >
              <span className="icon-facebook"></span>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UC-5g9WInfE6VSGnkQ307Ozg/"
              className="btn-social btn-outline"
              title="Youtube"
            >
              <span className="icon-youtube"></span>
            </a>
          </li>
          <li>
            <a
              href="mailto:montagekc@gmail.com?Subject=Interested%20in%20booking%20you!"
              className="btn-social btn-outline"
              title="Email Montage!"
              target="_blank"
            >
              <span className="icon-envelope"></span>
            </a>
          </li>
        </ul>
      </section>
    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    montageLogo: file(relativePath: { eq: "MONTAGE_LOGO_PNG.png" }) {
      childImageSharp {
        fluid(maxWidth: 740) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
    montageBG: file(relativePath: { eq: "montage_collage.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2500) {
          ...GatsbyImageSharpFluid_tracedSVG
          presentationWidth
        }
      }
    }
  }
`
