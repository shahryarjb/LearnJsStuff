import React, { Component } from "react";
import Product from "../Product/Product";

class ProductList extends Component {
    shouldComponentUpdate(nextProps, nextState) {
      console.log("shouldComponentUpdate")
      return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
      console.log("getSnapshotBeforeUpdate")
      return null
    }

    componentDidUpdate() {
      console.log("componentDidUpdate")
    }

    render() {
      console.log(this.props)
      return this.props.products.map((item, index) => {
          return (
            <Product
              key={item.id}
              click={() => this.props.click(index)} 
              title={item.title} 
              price={item.price} 
              change={(event) => this.props.change(event, item.id)}
            />
          )
      })
    }
}
export default ProductList;