import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Item extends Component {
  render() {
    let productLinkName = this.props.item.toLowerCase().split(' ').join('');
    return (
      <div>
        <div>
          <Link to={`/product/${productLinkName}`}>{this.props.item}</Link>
          <p>${this.props.price}</p>
        </div>
      </div>
    )
  }
}

export default Item;