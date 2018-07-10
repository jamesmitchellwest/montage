import React from 'react'
import Link from 'gatsby-link'
import SongList from '../components/songList'
import Shows from '../components/shows'
import '../assets/scss/home.scss'

const IndexPage = (props) => {
  return (
  <div>
  <section className="banner">
    <div className="background"></div>
    <div className="container">
      <div className="img_wrap">
       <img className="logo_img img-fluid" src={require("../assets/img/montagelogo2_1.png")} />
      </div>
    </div>
  </section>

    <Shows />

    <SongList />

  </div>

)
}

export default IndexPage
