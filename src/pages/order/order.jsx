import * as React from 'react';
import PageTitle from '../../components/page-title/pageTitle';
import './order.css';

class Order extends React.Component {
  render() {
    return (
      <div className='order'>
        <PageTitle title='订单管理' />
        
      </div>
    );
  }
}

export default Order;