import React from 'react'
import { connect } from 'react-redux';
import { showSpinner, hideSpinner, getSongs, setSongs } from '../state/app';

class SongList extends React.Component {

  constructor (props) {
    super(props)
  }

  componentDidMount() {
    this.props.showSpinner();
    this.props.getSongs();
    var show_more_songs = document.getElementById("show_more_songs");
    show_more_songs.onclick = function() {
      var song_container = document.getElementById("song_container");
        song_container.style.transition = 'height .5s ease-in-out';
        song_container.style.height = '100%';
        this.style.display = 'none';
      };
  }

  render () {

    return (
      <div>
        <h1>Setlist</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th colSpan="1"><h3>Song</h3></th>
              <th colSpan="1"><h3>Artist</h3></th>
            </tr>
          </thead>
          <tbody>
            {this.props.songs && this.props.songs.map((song,index) =>(
              <tr key={index}>
                <th>{song.title}</th>
                <th>{song.artist}</th>
              </tr> )
            )}
          </tbody>
        </table>
      </div>

    )
  }
}

export default connect(
  state => ({ spinnerShowing: state.app.spinnerShowing, songs:state.app.songs }),
  dispatch => ({
    getSongs: () => getSongs().then((data) => {
      dispatch({type:"SET_SONGS", payload: data})
      dispatch({ type: "HIDE_SPINNER", payload: false });
   }),
   showSpinner: () => dispatch(showSpinner()),
   hideSpinner: () => dispatch(hideSpinner()),
 }),
)(SongList);
