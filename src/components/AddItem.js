var React = require('react');
var ReactDOM = require('react-dom');

class AddItem extends React.Component{
  handleSubmit(){
    const newItem = {}
    newItem.name = ReactDOM.findDOMNode(this.refs.name).value
    newItem.artist = ReactDOM.findDOMNode(this.refs.artist).value
    newItem.genre = ReactDOM.findDOMNode(this.refs.genre).value
    newItem.decade = ReactDOM.findDOMNode(this.refs.decade).value
    this.props.add(newItem)
    this.reset()
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input
        type="text"
        ref="name"
        className="form-control"
        placeholder="Name" />
        <input
        type="text"
        ref="artist"
        className="form-control"
        placeholder="Artist" />
        <input
        type="text"
        ref="genre"
        className="form-control"
        placeholder="Genre" />
        <input
        type="text"
        ref="decade"
        className="form-control"
        placeholder="Decade" />
        <button type="submit">Add Song</button>
      </form>

    )
  }
}

module.exports = AddItem;
