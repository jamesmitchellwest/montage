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
      if(song_container.style.height != 'auto'){
        song_container.style.transition = 'all .5s ease-in-out';
        song_container.style.height = 'auto';
        this.innerText  = 'Show Less Songs';
      }else{
        song_container.style.transition = 'all .5s ease-in-out';
        song_container.style.height = '600px';
        this.innerText  = 'Show All Songs';
        song_container.scrollIntoView({behavior: "smooth"});
      }
      };
  }
  render () {
    const {sortValue} = this.props;
    return (
      <div>
        <h1>Setlist</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th colSpan="1"><h3>Artist</h3></th>
              <th colSpan="1"><h3>Song</h3></th>
              <th colSpan="1"><h3>Decade</h3></th>
              <th colSpan="1"><h3>Genre</h3></th>
            </tr>
          </thead>
          <tbody>
            {this.props.songs && [].concat(this.props.songs).sort(function(a, b) {
          var textA = a[sortValue].toUpperCase();
          var textB = b[sortValue].toUpperCase();
          return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      }).map((song,i) =>{
        return(
              <tr key={i}>
                <th>{song.artist}</th>
                <th>{song.name}</th>
                <th>{song.decade}</th>
                <th>{song.genre}</th>
              </tr> )}
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
