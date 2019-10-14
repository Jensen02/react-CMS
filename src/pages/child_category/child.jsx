/*
 * @Description: 子品类页面
 * @Author: Jensen
 * @Github: https://github.com/Jensen02
 * @Date: 2019-09-20 20:37:05
 * @LastEditors: Jensen
 * @LastEditTime: 2019-09-20 21:17:16
 */

import * as React from 'react';
import { Modal, Button, Table, Form, Input, message } from 'antd';
import PageTitle from '../../components/page-title/pageTitle';
import { getCategorySecondList, updateCategoryName } from '../../api/api';
import { changeData, getUrlParams } from '../../utils/util';
import './child.css';

class ChildCategory extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
    this.state = {
      isChange: false,
      changeId: 0,
      secondList: []
    }
    this.getChildren = this.getChildren.bind(this);
  }
  getChildren = async () => {
    let id = getUrlParams(this.props.history.location.pathname);
    const res = await getCategorySecondList(id);
    let data = res.data.rows;
    changeData(data);
    this.setState({
      secondList: data
    })
  }
  handleChange = () => {
    const { form } = this.props;
    form.validateFields((err, values) => {
      if (err && values.title === undefined) {
        return;
      }
      updateCategoryName(this.state.changeId, values.title).then(res => {
        if(res.code === 200) {
          message.success('修改品类名称成功!', 4);
          this.getChildren();
        }
      });
      form.resetFields();
      this.setState({ isChange: false });
    });
  };
  componentDidMount() {
    this.getChildren();
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const columns = [
      {
        title: '品类ID',
        dataIndex: 'id',
        width: '20%'
      },
      {
        title: '品类名称',
        dataIndex: 'name',
      },
      {
        title: '操作',
        key: 'action',
        width: '24%',
        render: (text, record) => (
          <span>
            <Button
              type='link'
              title='修改该品类名称'
              onClick={() => {
                this.setState({ isChange: true, changeId: parseInt(record.id)}
                )}}
            >名称修改</Button>
          </span>
        ),
      },
    ];
    return (
      <div className='child'>
        <PageTitle title='子品类列表' />
        <Table
          className='child-info'
          bordered
          columns={columns}
          dataSource={this.state.secondList} />
        <Modal
          visible={this.state.isChange}
          title="修改品类名称"
          okText="确定"
          cancelText='取消'
          onCancel={() => {this.setState({isChange: false})}}
          onOk={this.handleChange}
        >
          <Form layout="vertical">
            <Form.Item label="品类名称">
              {getFieldDecorator('title', {
                rules: [{ required: true, message: '请输入品类名称!' }],
              })(<Input type="text" />)}
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}

ChildCategory = Form.create({name: 'child_category'})(ChildCategory);

export default ChildCategory;