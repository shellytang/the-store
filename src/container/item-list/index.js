import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';

class ItemList extends Component {

  render() {
    const product = _.map(this.props.items, item => {
      return (
        <Link 
          to={`/products/${item.id}`} 
          key={item.id}
        >
           <div>
            <p>{item.name}</p>
            <p>${item.price}</p>
          </div>
        </Link>
      );

    });

    return (
      <div>
        <h2>This is the ITEMS CONTAINER!</h2>
        {product}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  items: state.items
})

export default connect(mapStateToProps, null)(ItemList);