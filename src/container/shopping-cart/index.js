import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { removeItem } from '../../actions/index';

class ShoppingCart extends Component {

  render () {

    const { cart, items } = this.props;
    console.log('ids in cart', cart);
    let cartList = cart.map(id => {
      return (
        <div key={id}>
          <p>{items[id].name}</p>
          <p>{items[id].description}</p>
          <p>${items[id].price}</p>
          <button onClick={() => this.props.removeItem(id)}>Remove</button>
        </div>
      );
    });

    return (
      <div>
        <h2>This is the shopping cart!</h2>
        { cart.length === 0 ? <div>Cart is empty</div> :
          <div>
            <ul>
              {cartList}
            </ul>
          </div>
        }
        <Link to='/'>Back to products</Link>
      </div>
    );

  }

}

const mapStateToProps = (state) => ({
  cart: state.cart,
  items: state.items
})

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);