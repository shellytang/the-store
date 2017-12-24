import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
// import { bindActionCreators } from 'redux';

class ShoppingCart extends Component {

  render () {
    
    console.log('cart ', this.props.cart);
    const cartList = _.map(this.props.cart, (item) => {
      return (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.description}</p>
          <p>${item.price}</p>
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
  cart: state.cart
})

export default connect(mapStateToProps)(ShoppingCart);