import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Item extends Component {
  render() {

    const products = this.props.items;
    const { id } = this.props.match.params;
    const selectedItem = products[id];
 
    return (
      <div>
       <h2>This is the item component!</h2>
        <div>
          <p>{selectedItem.name}</p>
          <p>${selectedItem.price}</p>
          <p>{selectedItem.description}</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  }
}

export default connect(mapStateToProps)(Item);