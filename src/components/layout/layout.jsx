import * as React from 'react';
import TopNav from '../top-nav/topNav';
import SideNav from '../side-nav/sideNav';

import './layout.css';

class Layout extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div className='container'>
        <TopNav />
        <SideNav />
        <div className='page-content'>
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default Layout;