import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div className="header_wrapper">
    <div className="header_inner">
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
