import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';

import './sideNav.css';

class SideNav extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
    
    this.state = {
      theme: 'dark',
      current: "1"
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = e => {
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <div>
        <Menu
          theme={this.state.theme}
          onClick={this.handleClick}
          className='side-nav'
          defaultOpenKeys={["sub1"]}
          selectedKeys={[this.state.current]}
          mode="inline"
          inlineIndent="10"
        >
          <Menu.SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="home" />
                <span>首页</span>
              </span>
            }
          >
            <Menu.Item key="1">
              <Link to='/'>首页</Link>
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="shop" />
                <span>商品</span>
              </span>
            }
          >
            <Menu.Item key="2">
              <Link to='/product'>商品管理</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to='/category'>品类管理</Link>
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu
            key="sub3"
            title={
              <span>
                <Icon type="form" />
                <span>订单</span>
              </span>
            }
          >
            <Menu.Item key="4">
              <Link to='/order'>订单管理</Link>
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu
            key="sub4"
            title={
              <span>
                <Icon type="user" />
                <span>用户</span>
              </span>
            }
          >
            <Menu.Item key="5">
              <Link to='user-list'>用户列表</Link>
            </Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </div>
    );
  }
}

// 将组件的props与store的state进行映射，
// 获取store state的值
const mapStateToProps = (state) => {
  return {
    openKey: state.navReducer.openKey,
    selectedKey: state.navReducer.selectedKey
  }
}

export default connect(mapStateToProps)(SideNav);