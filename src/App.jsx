import * as React from 'react';
import Layout from './components/layout/layout';
import Home from './pages/home/home';
import Product from './pages/product-manage/product';
import Category from './pages/category-manage/category';
import Order from './pages/order/order';
import UserList from './pages/user/userList';
import Login from './pages/login/Login';
import OrderDetail from './pages/order_detail/order_detail';
import ChildCategory from './pages/child_category/child';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
          <Router>
            <Switch>
              <Route path='/login' component={ Login } />
              <Route path='/' render={() => (
                <Layout>
                  <Switch>
                    <Route exact path='/' component={ Home } />
                    <Route path='/product' component={ Product } />
                    <Route exact path='/category' component={ Category } />
                    <Route path='/category/child/:id' component={ ChildCategory }  />
                    <Route exact path='/order' component={ Order } />
                    <Route path='/order/detail/:orderId' component={ OrderDetail } />
                    <Route path='/user-list' component={ UserList } />
                  </Switch>
                </Layout>
              )} />
            </Switch>
          </Router>
      </div>
    );
  }
}

export default App;
