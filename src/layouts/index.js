import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import './index.css'

const Header = () => (
  <div
    style={{
      background: 'steelblue',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Kyle Savage
        </Link>
        <ul className="nav">
          <li><Link to="/resume/">Resume</Link></li>
          <li><Link to="/portfolio/">Portfolio</Link></li>
          <li><Link to="/contact/">Contact</Link></li>
        </ul>
      </h1>
    </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Kyle Savage"
      meta={[
        { name: 'description', content: 'Portfolio website for Kyle Savage' },
        { name: 'keywords', content: 'developer, javascript, c#, f#' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
