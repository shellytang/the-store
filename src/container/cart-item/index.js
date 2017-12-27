import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem, updateQty } from '../../actions/index';
import Counter from '../../component/counter/index';

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.cart.quantityById[this.props.itemId]
    }
    this.handleQty = this.handleQty.bind(this);
    this.updateCart = this.updateCart.bind(this);
  }

  handleQty(qty) {
    this.setState({
      count: qty
    }, this.updateCart);
  }

  updateCart() {
    let initialQty = this.props.cart.quantityById[this.props.itemId];
    let diff = this.state.count - initialQty;
    return this.props.updateQty(diff, this.props.itemId);
  }

  render() {
    const id = this.props.itemId;
    const { items } = this.props;
    let itemTotal = this.state.count * items[id].price;

    return (
      <div>
        <Link to={`products/${id}`}>{items[id].name}</Link>
        <p>Price: ${items[id].price}</p>
        <Counter qty={this.state.count} handleChange={this.handleQty}/>
        <p>Total: ${itemTotal}</p>
        <button onClick={() => this.props.removeItem(id, this.props.updateQty(0, id))}>Remove</button>
      </div>

    )
  }

}

const mapStateToProps = (state) => ({
  cart: state.cart,
  items: state.items
});

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
  updateQty: (quantity, item) => dispatch(updateQty(quantity, item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
