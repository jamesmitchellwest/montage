var React = require('react');
var ReactDOM = require('react-dom');
var Rebase = require('re-base');
var List = require('./List');
var AddItem = require('./AddItem');


class Songeditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      loading: true
    };
  }
  componentDidMount() {
var base = require('./rebase');
    this.ref = base.syncState('song_list', {
      context: this,
      state: 'list',
      asArray: true,
      then() {
        this.setState({ loading: false });
      }
    });
  }
  handleAddItem(newItem) {
    this.setState({
      list: this.state.list.concat([newItem])
    });
  }
  handleRemoveItem(index) {
    var newList = this.state.list;
    newList.splice(index, 1);
    this.setState({
      list: newList
    });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="col-sm-12">
              <h3 className="text-center"> Edit Song List </h3>
              <AddItem add={this.handleAddItem.bind(this)} />
              {this.state.loading === true
                ? <h3> LOADING... </h3>
                : <List
                    items={this.state.list}
                    remove={this.handleRemoveItem.bind(this)}
                  />}
            </div>
        </div>
      </div>
    );
  }
}

export default Songeditor;
