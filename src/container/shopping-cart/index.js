import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
// import { bindActionCreators } from 'redux';

class ShoppingCart extends Component {

  render () {
    
    console.log('cart ', this.props.cart);
    console.log('items ', this.props.items[1]);
    console.log('items ', this.props.cart[0]);

    const { cart, items } = this.props;

    let cartList = cart.map(id => {
      return (
        <div key={id}>
          <p>{items[id].name}</p>
          <p>{items[id].description}</p>
          <p>${items[id].price}</p>
        </div>
      );
    });

    return (
      <div>
        <h2>This is the shopping cart!</h2>
        { this.props.cart === null ? <div>Cart is empty</div> :
          <ul>
            {cartList}
          </ul>
        }
        <Link to='/'>Back to products</Link>
      </div>
    );

  }

}

const mapStateToProps = state => ({
  cart: state.cart,
  items: state.items
})

export default connect(mapStateToProps)(ShoppingCart);