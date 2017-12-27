import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem, updateQty } from '../../actions/index';
import CartItem from '../cart-item/index';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemQty: 1
    }
    this.handleQty = this.handleQty.bind(this);
  }

  handleQty(qty) {
    this.props.updateQty(qty);
  }

  render () {
    const { cart, items } = this.props;
    let subTotal = 0;

    const cartList = cart.itemIds.map(id => {
      let itemTotal = cart.quantityById[id] * items[id].price;
      subTotal+= itemTotal;
      return (
        <CartItem key={id} itemId={id}/>
      );
    });

    return (
      <div>
        <h2>This is the shopping cart!</h2>
        <Link to='/'>Back to products</Link>
        { cart.itemIds.length === 0 ? <div>Cart is empty</div> :
          <div>
            <ul>
              {cartList}
            </ul>
            <div>
              <h2>Subtotal: ${subTotal}</h2>
            </div>
          </div>
        }
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