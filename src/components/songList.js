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
            <tr>
              <th colSpan="1"><h3>Song</h3></th>
              <th colSpan="1"><h3>Artist</h3></th>
            </tr>
          </thead>
          <tbody>
            {songList.map((song,index) =>{
              return (<tr key={index}>
                <th>{song.title}</th>
                <th>{song.artist}</th>
              </tr>)
            })
                  }
          </tbody>
        </table>
      </div>

    )
  }
}



export default SongList
