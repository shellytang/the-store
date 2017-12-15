import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../actions/index';
import { bindActionCreators } from 'redux';
import ItemList from '../../component/item-list/index';
import Item from '../../component/item/index';

class Items extends Component {
  render() {
    return (
      <div>
        <h2>This is the ITEMS component!</h2>
        
        <ItemList 
          items={this.props.items}
          onClick={this.props.addToCart}
        >
       
        {this.props.items.map((item, index) =>
          <Item
            key={index}
            item={item.name}
            price={item.price}
            clickToAddItem={() => this.props.addToCart(item.name)} 
          />
        )}

        </ItemList>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    items: state.items
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addToCart: addToCart }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Items);