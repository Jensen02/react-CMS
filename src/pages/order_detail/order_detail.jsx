/*
 * @Description: 订单详情页
 * @Author: Jensen
 * @Github: https://github.com/Jensen02
 * @Date: 2019-09-17 21:52:55
 * @LastEditors: Jensen
 * @LastEditTime: 2019-09-17 22:03:48
 */

import * as React from 'react';
import PageTitle from '../../components/page-title/pageTitle';
import { getOrderDetail } from '../../api/api';
import './order_detail.css';

class OrderDetail extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      orderDetail: {
        id: 122544445657
      }
    }
  }
  componentDidMount() {
    let pathname = this.props.history.location.pathname.split('/');
    const orderId = parseInt(pathname[pathname.length - 1]);
    getOrderDetail(orderId).then(res => {
      this.setState({
        orderDetail: res.data
      });
    })
  }
  render() {
    return (
      <div className='order-detail'>
        <PageTitle title='订单详情' />
        <div className='detail-list'>
          <div className='detail-item'>
            <h3>订单号：</h3>
            <p className='input'>{ this.state.orderDetail.id }</p>
          </div>
          <div className='detail-item'>
            <h3>创建时间：</h3>
            <p className='input'>{ new Date(this.state.orderDetail.created_time).toLocaleString() }</p>
          </div>
          <div className='detail-item'>
            <h3>收件人：</h3>
            <p className='input'>{ this.state.orderDetail.receiver_name }</p>
          </div>
          <div className='detail-item'>
            <h3>收件电话：</h3>
            <p className='input'>{ this.state.orderDetail.receiver_phone }</p>
          </div>
          <div className='detail-item'>
            <h3>收件地址：</h3>
            <p className='input'>{ this.state.orderDetail.receiver_address }</p>
          </div>
          <div className='detail-item'>
            <h3>订单状态：</h3>
            <p className='input'>{ this.state.orderDetail.status }</p>
          </div>
          <div className='detail-item'>
            <h3>支付方式：</h3>
            <p className='input'>{ this.state.orderDetail.payment_type }</p>
          </div>
          <div className='detail-item'>
            <h3>订单金额(￥)：</h3>
            <p className='input'>{ this.state.orderDetail.payment }</p>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderDetail;