import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { connect } from 'react-redux';
import ReactSpinner from 'react-spinjs';

import Header from '../components/header'
import Drawer from '../components/drawer'
import './index.scss'
import '../assets/scss/global.scss'

const Layout = (props) => {
  // debugger;
  const { children, data, spinnerShowing } = props;
  return (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />

    <Drawer />
    <Header siteTitle={data.site.siteMetadata.title} />
    <div className="global_wrapper">
      {children(props)}
    </div>
    {spinnerShowing && <ReactSpinner/>}
  </div>
)
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default connect(
  state => ({ spinnerShowing: state.app.spinnerShowing }),
  dispatch => ({
    showSpinner: () => dispatch(showSpinner()),
    hideSpinner: () => dispatch(hideSpinner()),
   }),
)(Layout);
export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
