var React = require('react');
var ReactDOM = require('react-dom');

class AddItem extends React.Component{
  handleSubmit(e){
    e.preventDefault()
    const newItem = {}
    newItem.name = ReactDOM.findDOMNode(this.refs.name).value
    newItem.artist = ReactDOM.findDOMNode(this.refs.artist).value
    newItem.genre = ReactDOM.findDOMNode(this.refs.genre).value
    newItem.decade = ReactDOM.findDOMNode(this.refs.decade).value
    this.props.add(newItem)
    ReactDOM.findDOMNode(this.refs.addsongform).reset()
  }
  render(){
    return (
      <form ref="addsongform" onSubmit={this.handleSubmit.bind(this)}>
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
        <select className="form-control" ref="genre">
          <option value="Rock">Rock</option>
          <option value="Pop">Pop</option>
          <option value="Country">Country</option>
        </select>
        <select className="form-control" ref="decade">
          <option value="60s">60s</option>
          <option value="70s">70s</option>
          <option value="80s">80s</option>
          <option value="90s">90s</option>
          <option value="00s">00s</option>
          <option value="10s">10s</option>
        </select>
        <button className="m_btn my-4" type="submit">
          <span>Add Song</span>
          <div className="transition"></div>
        </button>
      </form>


    )
  }
}

module.exports = AddItem;
