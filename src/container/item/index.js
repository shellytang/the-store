import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart, updateQty } from '../../actions/index';
import Counter from '../../component/counter/index';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemQty: 1,
      isClicked: false
    }
    this.handleQty = this.handleQty.bind(this);
  }

  handleQty(qty) {
    this.setState({
      itemQty: qty
    });
  }

  render() {
    const { items } = this.props;
    const { id } = this.props.match.params;
    const selectedItem = items[id];

    return (
      <div>
       <h2>This is the item component!</h2>
       <Link to='/'>Back to products</Link>
        <div>
          <p>{selectedItem.name}</p>
          <p>${selectedItem.price}</p>
          <p>{selectedItem.description}</p>
        </div>
        <Counter qty={this.state.itemQty} handleChange={this.handleQty} />
        <button onClick={ (e) => {
            e.preventDefault();
            this.props.addToCart(selectedItem);
            this.props.updateQty(this.state.itemQty, id);
            this.setState({
              isClicked: true
            });
          }
        }>
          Add to Cart
        </button>
        { this.state.isClicked ? <Link to='/cart'>View in Cart</Link> : undefined }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  items: state.items,
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (item, qty, id) => dispatch(addToCart(item, qty, id)),
  updateQty: (quantity, id) => dispatch(updateQty(quantity, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Item);
