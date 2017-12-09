import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../action/index';
import { bindActionCreators } from 'redux';

class ItemList extends Component {
  renderList() {
    return this.props.items.map(item => {
      return (
        <li
          key={item.name}
          onClick={() => this.props.addToCart(item)}
        >
          {item.name}
        </li>
      )
    });
  }

  render() {
    return (
      <div>
        <h2>This is the Item List Component!</h2>
        <ul>
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.items
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addToCart: addToCart }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);