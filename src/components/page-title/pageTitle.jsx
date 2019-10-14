import * as React from 'react';
import { Row, Col } from 'antd';
import './pageTitle.css';

class PageTitle extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    document.title = this.props.title + ' - 电商后台管理系统';
  }
  render() {
    return (
      <div className='page-title'>
        <Row type='flex'>
          <Col span={3}>
            <h1>
              { this.props.title }
            </h1>
          </Col>
          <Col span={21}>
            { this.props.children }
          </Col>
        </Row>
      </div>
    );
  }
}

export default PageTitle;