import * as React from 'react';
import { Table, Input, Button, Icon, Pagination } from 'antd';
import Highlighter from 'react-highlight-words';
import PageTitle from '../../components/page-title/pageTitle';
import { getUserList } from '../../api/api';
import './userList.css';

class UserList extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
    this.state = {
      searchText: '',
      userList: [],
      total: 0,
      loading: true,
      // pageNum: 1
    }
    this.changeData = this.changeData.bind(this)
    this.getUser = this.getUser.bind(this)
  }
  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: text => (
      <Highlighter
        highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
        searchWords={[this.state.searchText]}
        autoEscape
        textToHighlight={ text.toString() }
      />
    ),
  });

  handleSearch = (selectedKeys, confirm) => {
    confirm();
    this.setState({ searchText: selectedKeys[0] });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };
  changeData = (dataArr = []) => {
    dataArr.forEach(item => {
      Object.defineProperty(item, 'key', {
        value: item['id']
      });
      item['created_time'] = new Date(item['created_time']).toLocaleString()
      const str = item['phone'];
      item['phone'] = str.substr(0, 3) + ' ' + str.substr(3, 4) + ' ' + str.substr(7, 4)
    })
  }
  onChange = (pageNum) => {
    this.getUser(10, (pageNum - 1) * 10)
  }
  /**
   * @description: 获取用户列表
   * @param {type}: limit, offset
   * @return: 
   */
  getUser = (limit, offset) => {
    getUserList({
      limit: limit,
      offset: offset
    }).then(res => {
      const data = res.data.rows;
      this.changeData(data)
      this.setState({
        userList: data,
        loading: false,
        total: res.data.count
      })
    }).catch(error => {
      console.log(error)
    })
  }
  componentDidMount() {
    this.getUser(10, 0)
  }
  render() {
    const columns = [
      {
        title: 'ID',
        dataIndex: 'id',
      },{
        title: '用户名',
        dataIndex: 'username',
        ...this.getColumnSearchProps('username'),
      },{
        title: '邮箱',
        dataIndex: 'email',
        ...this.getColumnSearchProps('email'),
      },{
        title: '手机号码',
        dataIndex: 'phone',
        ...this.getColumnSearchProps('phone'),
      },{
        title: '注册时间',
        dataIndex: 'created_time',
      },
    ];
    return (
      <div className='user-list'>
        <PageTitle title='用户列表' />
        <Table
          loading={ this.state.loading }
          pagination={false}
          columns={columns}
          dataSource={this.state.userList} />
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

export default UserList;