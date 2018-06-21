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
