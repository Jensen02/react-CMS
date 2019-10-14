import * as React from 'react';
import { connect } from 'react-redux';
import Action from '../../action/action';
import { Link } from 'react-router-dom';
import PageTitle from '../../components/page-title/pageTitle';
import ShowData from '../../components/show-data/showData';
import { Row, Col } from 'antd';
import './home.css';

class Home extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // console.log('route: ', this.props)
  }
  render() {
    const { toUser, toProduct, toOrder } = this.props;

    return (
      <div className='home'>
        <PageTitle title='首页' />
        <Row type="flex" justify="space-around" className='col-data'>
          <Col span={7} className='brown' onClick={() => toUser()}>
            <Link to='/user-list'>
              <ShowData
                count='4480'
                type='user'
                desc='用户总数' />
            </Link>
          </Col>
          <Col span={7} className='green' onClick={() => toProduct()}>
            <Link to='/product'>
              <ShowData
                count='5480'
                type='shop'
                desc='商品总数' />
            </Link>
          </Col>
          <Col span={7} className='blue' onClick={() => toOrder()}>
            <Link to='/order'>
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

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

export default connect(mapStateToProps, Action)(Home);