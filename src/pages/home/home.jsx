import * as React from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../../components/page-title/pageTitle';
import ShowData from '../../components/show-data/showData';
import { Row, Col } from 'antd';
import './home.css';

class Home extends React.Component {
  render() {
    return (
      <div className='home'>
        <PageTitle title='首页' />
        <Row type="flex" justify="space-around" className='col-data'>
          <Col span={7} className='brown'>
            <Link to='user'>
              <ShowData
                count='4480'
                type='user'
                desc='用户总数' />
            </Link>
          </Col>
          <Col span={7} className='green'>
            <Link to='product'>
              <ShowData
                count='5480'
                type='shop'
                desc='商品总数' />
            </Link>
          </Col>
          <Col span={7} className='blue'>
            <Link to='order'>
              <ShowData
                count='6480'
                type='form'
                desc='订单总数' />
            </Link>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;