import React from 'react'



class Shows extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      shows: []
    }
  }


componentDidMount() {
    fetch('https://www.googleapis.com/calendar/v3/calendars/0sa8bl67tpn9ibp6fe1ah3gclf7murdt@import.calendar.google.com/events?fields=items(summary,id,location,start)&key=AIzaSyDN1OE5ZvCa-v7AwzfK5bALAYXMXuOrNdU')
    .then(response => response.json())
    .then(data => this.setState({ shows: data.items }));
console.log(this.state.shows)
  }

  render () {



    return (
      <div>
        <h1>Shows</h1>
        <table className="table table-striped">
          <thead>
            <th><h3>Location</h3></th>
            <th><h3>Date</h3></th>
          </thead>
          <tbody>
          { this.state.shows.map((show, index) => (
            show.location &&
              <tr key={show.id}>
                <th>{show.location}</th>
                <th>{show.start.date}</th>
              </tr> )
          )}

          </tbody>
        </table>
      </div>

    )

  }

}



export default Shows
