import React, { Component } from 'react';
import { connect } from 'react-redux';


class ShoppingCart extends Component {

  renderCart() {
    return this.props.cart.map(item => {
      return (
        <div key={item.name}>
          <p>{item.name}</p>
          <p>{item.description}</p>
          <p>${item.price}</p>
        </div>
      )
    })
  }

  render () {

    if(!this.props.cart) {
      return 'Cart is empty';
    }

    return (
      <div>
        <h2>This is the shopping cart!</h2>
        <ul>
          {this.renderCart()}
        </ul>
      </div>
    )

  }

}

function mapStateToProps(state) {
  return {
    cart: state.cart
  }
}


export default connect(mapStateToProps, null)(ShoppingCart);