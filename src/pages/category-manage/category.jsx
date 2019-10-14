/*
 * @Description: 品类页面
 * @Author: Jensen
 * @Github: https://github.com/Jensen02
 * @Date: 2019-09-19 17:24:54
 * @LastEditors: Jensen
 * @LastEditTime: 2019-09-20 21:43:22
 */

import * as React from 'react';
import { Button, Table, Divider, Modal, Form, Select, Input, message } from 'antd';
import PageTitle from '../../components/page-title/pageTitle';
import { changeData } from '../../utils/util';
import {
  addCategory,
  getCategoryFirstList,
  getCategorySecondList,
  updateCategoryName
} from '../../api/api';
import './category.css';

const { Option } = Select;

class Category extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      isChange: false,
      changeId: 0,
      firstList: [],
      secondList: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getFirst = this.getFirst.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (err && (values.first === undefined || values.second === undefined || values.name === undefined)) {
        return;
      }
      addCategory(parseInt(values.first), parseInt(values.second), values.name)
      .then(res => {
        if(res.code === 200) {
          message.success(res.msg, 4);
          this.getFirst();
        }
      })
      this.setState({visible: false})
    });
  };

  onChange = value => {
    if(parseInt(value) === 0) {
      return;
    }
    getCategorySecondList(parseInt(value)).then(res => {
      const data = res.data.rows;
      changeData(data);
      this.setState({
        secondList: data
      })
    })
  }
  getFirst = async () => {
    const res = await getCategoryFirstList(0, 0)
    const data = res.data.rows;
    changeData(data);
    this.setState({
      firstList: data
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
          this.getFirst();
        }
      })
      form.resetFields();
      this.setState({ isChange: false });
    });
  };
  componentDidMount() {
    this.getFirst();
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 8 },
    };
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
            <Divider type="vertical" />
            <Button
              type='link'
              title='查看该品类所属的子品类'
              onClick={() => {
                this.props.history.push('/category/child/' + record.id)
              }}
            >查看子品类</Button>
          </span>
        ),
      },
    ];
    return (
      <div className='category'>
        <PageTitle title='品类管理'>
          <Button
            type='primary'
            shape='round'
            icon='plus'
            size='large'
            className='add'
            onClick={() => {this.setState({visible: true})}}
          >添加品类</Button>
        </PageTitle>
        <Table
          className='category-info'
          bordered
          columns={columns}
          dataSource={this.state.firstList} />
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
        <Modal
          title="添加品类"
          visible={this.state.visible}
          onOk={this.handleSubmit}
          onCancel={() => {this.setState({visible: false})}}
          okText="确认"
          cancelText="取消"
        >
          <Form>
            <div className='item'>
              <Form.Item label="所属品类" {...formItemLayout} hasFeedback  className='item1'>
                {getFieldDecorator('first', {
                  rules: [{ required: true, message: '请选择一级品类!' }],
                })(
                  <Select placeholder="一级品类" onChange={this.onChange}>
                    <Option value="0">无</Option>
                    {
                      this.state.firstList.map((item) => {
                        return (
                          <Option value={item.id} key={item.key}>{item.name}</Option>
                        )
                      })
                    }
                  </Select>
                )}
              </Form.Item>
              <Form.Item {...formItemLayout} hasFeedback className='item2'>
                {getFieldDecorator('second', {
                  rules: [{ required: true, message: '请选择二级品类!' }],
                })(
                  <Select placeholder="二级品类">
                    <Option value="0">无</Option>
                    {
                      this.state.secondList.map((item) => {
                        return (
                          <Option value={item.id} key={item.key}>{item.name}</Option>
                        )
                      })
                    }
                  </Select>,
                )}
              </Form.Item>
            </div>
            <Form.Item label="品类名称" labelCol={{span: 6}} wrapperCol={{span: 16}} >
              {getFieldDecorator('name', {
                rules: [
                  {
                    required: true,
                    message: '请输入品类名称!',
                  },
                ],
              })(<Input placeholder="请输入品类名称" />)}
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}

Category = Form.create({ name: 'validate_other' })(Category);

export default Category;