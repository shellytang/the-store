import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

class Navbar extends Component {

  render() {
    const cartTotal = _.reduce(this.props.cart.quantityById, (result, value, key) => {
      result += value;
      return result;
    }, 0);

    return (
      <div>
        <h1>This is the navbar!</h1>
        <p>Cart {cartTotal}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, null)(Navbar);