import React from 'react'



class SongList extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      songList: []
    }
  }

  componentDidMount() {
    fetch('https://montagekc-b4268.firebaseio.com/.json')
    .then(response => response.json())
    .then(data => this.setState({ songList: Object.values(data) }));

  }

  render () {

    const { songList } = this.state;

    return (
      <div>
        <h1>Setlist</h1>
        <table className="table table-striped">
          <thead>
            <th><h3>Song</h3></th>
            <th><h3>Artist</h3></th>
          </thead>
          <tbody>
            {songList.map(song =>
            <tr key={song.objectID}>
              <th>{song.title}</th>
              <th>{song.artist}</th>
            </tr>
            )}
          </tbody>
        </table>
      </div>

    )
  }
}



export default SongList
