import * as React from 'react';
import PageTitle from '../../components/page-title/pageTitle';
import './userList.css';

class UserList extends React.Component {
  render() {
    return (
      <div className='home'>
        <PageTitle title='用户列表' />
        
      </div>
    );
  }
}

export default UserList;