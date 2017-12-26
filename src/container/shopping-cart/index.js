import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { removeItem, updateQty } from '../../actions/index';

class ShoppingCart extends Component {

  render () {

    const { cart, items } = this.props;
    let subTotal = 0;

    let cartList = cart.itemIds.map(id => {
      let itemTotal = cart.quantityById[id] * items[id].price;
      subTotal+= itemTotal;

      return (
        <div key={id}>
          <p>{items[id].name}</p>
          <p>{items[id].description}</p>
          <p>${items[id].price}</p>
          <p>Quantity: {cart.quantityById[id]}</p>
          <p>Total: ${itemTotal}</p>
          <button onClick={() => this.props.removeItem(id, this.props.updateQty(0, id))}>Remove</button>
          <Link to={`products/${id}`}>Edit item</Link>
        </div>
      );
    });

    return (
      <div>
        <h2>This is the shopping cart!</h2>
        { cart.itemIds.length === 0 ? <div>Cart is empty</div> :
          <div>
            <ul>
              {cartList}
            </ul>
            <div>
              <p>Subtotal: ${subTotal}</p>
            </div>
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
  updateQty: (quantity, item) => dispatch(updateQty(quantity, item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);