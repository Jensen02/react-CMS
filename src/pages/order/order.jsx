/*
 * @Description: 订单页面
 * @Author: Jensen
 * @Github: https://github.com/Jensen02
 * @Date: 2019-09-17 13:07:09
 * @LastEditors: Jensen
 * @LastEditTime: 2019-09-17 22:20:45
 */

import * as React from 'react';
import { Table, Button, Pagination, Tag } from 'antd';
import PageTitle from '../../components/page-title/pageTitle';
import { getOrderList } from '../../api/api';
import './order.css';

class Order extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orderList: [],
      total: 0,
      loading: true,
    }
    this.changeData = this.changeData.bind(this)
    this.getOrder = this.getOrder.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  changeData = (dataArr = []) => {
    dataArr.forEach(item => {
      Object.defineProperty(item, 'key', {
        value: item['id']
      });
      item['created_time'] = new Date(item['created_time']).toLocaleString()
    })
  }
  onChange = (pageNum) => {
    this.getOrder(10, (pageNum - 1) * 10)
  }
  detail = (id) => {
    this.props.history.push('/order/detail/' + id);
  }
  getOrder = (limit, offset) => {
    getOrderList(limit, offset).then(res => {
      let data = res.data.rows;
      this.changeData(data)
      this.setState({
        total: res.data.count,
        orderList: data,
        loading: false
      })
    })
  }
  componentDidMount() {
    this.getOrder(10, 0)
  }
  render() {
    const columns = [
      {
        title: '订单号',
        dataIndex: 'id',
      },{
        title: '收件人',
        dataIndex: 'receiver_name',
      },{
        title: '订单状态',
        dataIndex: 'status',
        render: tag => {
          let color = tag === '已取消' ? 'volcano' : (tag === '已支付' ? 'green' : 'geekblue');
          return (
            <Tag color={color} key={tag}>
              {tag}
            </Tag>
          );
        },
      },{
        title: '订单金额(￥)',
        dataIndex: 'payment',
      },{
        title: '创建时间',
        dataIndex: 'created_time',
      },{
        title: '操作',
        dataIndex: 'operation',
        render: (text, record) => {
          return (
            <Button type="link" onClick={(e) => this.detail(record.id, e)}>订单详情</Button>
          );
        }
      }
    ];
    return (
      <div className='user-list'>
        <PageTitle title='订单列表' />
        <Table
          bordered
          loading={ this.state.loading }
          pagination={false}
          columns={columns}
          dataSource={this.state.orderList} />
        <Pagination
          className='pagination'
          showQuickJumper
          defaultCurrent={1}
          total={ this.state.total }
          onChange={this.onChange} />
      </div>
    );
  }
}

export default Order;