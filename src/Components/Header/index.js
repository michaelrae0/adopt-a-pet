import React from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

import * as header from './header.module.scss'

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false
    }
  }
  
  handleOnClick = () => {
    this.setState({ redirect: true })
  }
  
  render() {
    return (
      <div className={classnames(header.navbar)}>
        <Link to='/'>
          <div
            className={classnames(header.image_container)}
            onClick={this.handleOnClick}
          >
            <img 
              src='http://placekitten.com/80/80' 
              alt='' 
              className={header.image}
            />
          </div>
        </Link>
        <div className={header.categories}>
          <h2 className={header.link} >All</h2>
          <h2 className={header.link} >Dogs</h2>
          <h2 className={header.link} >Cats</h2>
          <h2 className={header.link} >Search</h2>
        </div>
      </div>
      )
  }
}

export default Header;