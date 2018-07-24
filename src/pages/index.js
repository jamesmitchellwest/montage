import React from 'react'
import Link from 'gatsby-link'
import SongList from '../components/songList'
import Shows from '../components/shows'
import Contactform from '../components/form'



const IndexPage = (props) => {
  return (
    <div>
    <section className="banner">
    <div className="background"></div>
    <ul className="list-inline social-links">
    <li><a href="https://www.facebook.com/montagekc/" className="btn-social btn-outline" title="Facebook"><span className="icon-facebook"></span></a>
    </li>
        <li><a href="https://www.youtube.com/channel/UC-5g9WInfE6VSGnkQ307Ozg/" className="btn-social btn-outline" title="Youtube"><span className="icon-youtube"></span></a>
        </li>
      </ul>
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
    <div id="song_container" className="container">
    <SongList />
      </div>
      <div className="container">
      <div id="show_more_songs" className="show_more_songs">Show All Songs</div>
      </div>
    </section>
    <section className="m_videos">
      <h1>Videos</h1>
    <div className="container">
    <div className="row">
    <div className="col-md-6 vid">
    <div className="iframe_wrap">
    <iframe className="iframe" src="https://www.youtube.com/embed/dBENIjewLFc" frameBorder="0" allowFullScreen></iframe>
    </div>
    </div>
    <div className="col-md-6 vid">
    <div className="iframe_wrap">
    <iframe className="iframe" src="https://www.youtube.com/embed/7i7QF8Wfe0E" frameBorder="0" allowFullScreen></iframe>
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
      <li><a href="https://www.facebook.com/montagekc/" className="btn-social btn-outline" title="Facebook"><span className="icon-facebook"></span></a>
      </li>
          <li><a href="https://www.youtube.com/channel/UC-5g9WInfE6VSGnkQ307Ozg/" className="btn-social btn-outline" title="Youtube"><span className="icon-youtube"></span></a>
          </li>
        </ul>
      </section>

    </div>

  )
}

export default IndexPage
