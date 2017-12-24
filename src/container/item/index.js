import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '../../actions/index';

class Item extends Component {
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
        <button onClick={() => this.props.addToCart(selectedItem) }>Add to cart</button>
        <Link to='/cart'>Cart</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  items: state.items,
})

const mapDispatchToProps = (dispatch) => ({
  addToCart: (item) => dispatch(addToCart(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Item);