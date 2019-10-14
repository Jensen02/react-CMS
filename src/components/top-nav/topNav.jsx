/* eslint-disable no-useless-constructor */
import * as React from 'react';

import './topNav.css';

class TopNav extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='page-head'>
        <div className='logo'>
          <h1>cms</h1>
        </div>
        <div className='user'>
          <h1>user</h1>
        </div>
      </div>
    );
  }
}

export default TopNav;