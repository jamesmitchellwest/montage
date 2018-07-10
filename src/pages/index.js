import React from 'react'
import Link from 'gatsby-link'
import SongList from '../components/songList'
import Shows from '../components/shows'

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
    <section className="shows">
    <div className="container">
    <Shows />
      </div>
    </section>
    <section className="songs">
    <div className="container">
    <SongList />
      </div>
    </section>
    </div>

  )
}

export default IndexPage
