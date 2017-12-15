import React, { Component } from 'react';

class ItemList extends Component {
  render() {
    return (
      <div>
        <h2>This is the Item List Component!</h2>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default ItemList;