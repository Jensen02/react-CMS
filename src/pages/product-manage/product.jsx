import * as React from 'react';
import PageTitle from '../../components/page-title/pageTitle';
import './product.css';

class Product extends React.Component {
  render() {
    return (
      <div className='product'>
        <PageTitle title='商品管理' />
        
      </div>
    );
  }
}

export default Product;