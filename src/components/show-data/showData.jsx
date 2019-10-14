import * as React from 'react';
import { Icon } from 'antd';
import './showData.css';

class ShowData extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='show-data'>
        <p className='count'>{ this.props.count }</p>
        <p className='desc'>
          <Icon type={ this.props.type } />
          <span>{ this.props.desc }</span>
        </p>
      </div>
    );
  }
}

export default ShowData;