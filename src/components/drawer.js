import React from 'react'
import Link from 'gatsby-link'
import { slide as Menu } from 'react-burger-menu'

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    right: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

class Drawer extends React.Component {

  constructor (props) {
  super(props)
  this.state = {
    menuOpen: false
  }
}

handleStateChange (state) {
  this.setState({menuOpen: state.isOpen})
}

closeMenu () {
  this.setState({menuOpen: false})
}

toggleMenu () {
  this.setState({menuOpen: !this.state.menuOpen})
}

  render () {
      return (
        <Menu right styles={ styles } isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)}>

            <Link to="/" style={{color: 'white'}} onClick={() => this.closeMenu()}>Home</Link>
            <Link to="/shows/" style={{color: 'white'}} onClick={() => this.closeMenu()}>Shows</Link>
            <Link to="/setlist/" style={{color: 'white'}} onClick={() => this.closeMenu()}>Setlist</Link>
        </Menu>
      );
    }
}



export default Drawer
