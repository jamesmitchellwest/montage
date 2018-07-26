import React from 'react'
import { connect } from 'react-redux';
import { showSpinner, hideSpinner, getShows, setShows } from '../state/app';
import moment from 'moment'
class Shows extends React.Component {

  constructor (props) {
    super(props)
  }


  componentDidMount() {
    this.props.showSpinner();
    this.props.getShows();
  }

  render () {
    return (
      <div>
      <h1>Shows</h1>
      <table className="table table-striped">
      <thead>
        <tr>
          <th colSpan="1"><h3>Location</h3></th>
          <th colSpan="1"><h3>Date</h3></th>
        </tr>
      </thead>
      <tbody>
      { this.props.shows && this.props.shows.map((show, index) => (
        show.location &&
        <tr key={show.id}>
        <th><a href={"http://maps.google.com/?q=" + show.location} target="_blank">{show.location}</a></th>
        <th>{moment(show.start.date || show.start.dateTime).format('MM/DD/YYYY')}</th>
        </tr> )
      )}

      </tbody>
      </table>
      </div>

    )

  }

}



export default connect(
  state => ({ spinnerShowing: state.app.spinnerShowing, shows:state.app.shows }),
  dispatch => ({
    getShows: () => getShows().then((data) => {
      dispatch({type:"SET_SHOWS", payload:data.items})
      dispatch({ type: "HIDE_SPINNER", payload: false });
   }),
   showSpinner: () => dispatch(showSpinner()),
   hideSpinner: () => dispatch(hideSpinner()),
 }),
)(Shows);
