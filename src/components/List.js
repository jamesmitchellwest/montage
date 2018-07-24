var React = require('react');

class List extends React.Component{
  render(){
    var styles = {
      listGroup: {
        margin: '5px 0'
      },
      removeItem: {
        fontSize: 20,
        position: "absolute",
        top: 12,
        left: 6,
        cursor: "pointer",
        color: "rgb(222, 79, 79)",
        border: "none",
        background: "none",
        padding: 0
      },
      todoItem: {
        paddingLeft: 20,
        fontSize: 17
      }
    };
    var listItems = this.props.items.map((item, index) => {
      return (

          <tr>
            <td>{item.name}</td>
            <td>{item.artist}</td>
            <td>{item.genre}</td>
            <td>{item.decade}</td>
            <td>
              <button onClick={this.props.remove.bind(null, index)}>
                Delete Song
              </button>
            </td>
          </tr>

      )
    });
    return (
      <table>
      <tr>
        <th>song</th>
        <th>artist</th>
        <th>genre</th>
        <th>decade</th>
      </tr>
          {listItems}
      </table>
    )
  }
};

module.exports = List;
