import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'

export const PageLayout = ({ children }) => (
  <div className='container'>
    <div className='navbar-datr'>
      <div className='datr'>datr</div>
      <div className='nav-items'>
        <IndexLink to='/' className='page-layout__nav-item' activeClassName='page-layout__nav-item--active'>Home</IndexLink>
        <Link to='/counter' className='page-layout__nav-item' activeClassName='page-layout__nav-item--active'>Counter</Link>
        <Link to='/example' className='page-layout__nav-item' activeClassName='page-layout__nav-item--active'>Example</Link>
      </div>
    </div>
    <div className='page-layout__viewport'>
      {children}
    </div>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
