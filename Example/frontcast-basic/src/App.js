import React from 'react';

import ProductList from './components/ProductList/ProductList';
import Main from './components/Main/Main';

import Wrapper from './hoc/Wrapper';
import Container from './hoc/Container';
import AuthContext from './context/auth-context';

import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    products: [
      {id: 1, title: 'Book1', price: 100},
      {id: 2, title: 'Book2', price: 200},
      {id: 3, title: 'Book3', price: 300},
    ],
    showProducts: false,
    showMain: true,
    auth: false
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  shouldComponentUpdate() {
    console.log("App.js shouldComponentUpdate")
    return true
  }

  componentDidUpdate() {
    console.log("App.js componentDidUpdate")
  }

  changeTitleHandler = (event, id) => {
    console.log(event.target.value)
    const productIndex = this.state.products.findIndex((item) => {
      return item.id === id
    })

    const product = {
      ...this.state.products[productIndex]
    }

    product.title = event.target.value

    const products = [...this.state.products]
    products[productIndex] = product

    this.setState({ products: products})
  }

  toggleProductHandler = () => {
    const show = this.state.showProducts
    this.setState({ showProducts: !show })
  };
  
  deleteProductHandler = (productIndex) => {
    console.log(productIndex)
    const products = [...this.state.products]
    products.splice(productIndex, 1)
    this.setState({ products: products })
  };

  loginHandler = () => {
    this.setState({ auth: true })
  }

  render() {
    let products = null

    if (this.state.showProducts) {
      products = (
        <div>
          <ProductList 
            products={this.state.products}
            click={this.deleteProductHandler}
            change={this.changeTitleHandler}
            isAuth={this.state.auth}
          />
        </div>
      )
    }

    return (
      <Container>
        <button onClick={() => {this.setState({ showMain: false })}}>Remove Main</button>
        <AuthContext.Provider value={{ auth: this.state.auth, login: this.loginHandler }}>
          {this.state.showMain ? (
            <Main 
              products={this.state.products} 
              click={this.toggleProductHandler} 
            />
          ) : null }
          {products}
        </AuthContext.Provider>
      </Container>
    )
  }
}

export default Wrapper(App, 'center');
