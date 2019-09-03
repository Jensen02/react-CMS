import * as React from 'react';
import PageTitle from '../../components/page-title/pageTitle';
import './category.css';

class Category extends React.Component {
  render() {
    return (
      <div className='category'>
        <PageTitle title='品类管理' />
        
      </div>
    );
  }
}

export default Category;