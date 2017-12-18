// import React, { Component } from 'react';
// import { connect } from 'react-redux';


// class ShoppingCart extends Component {

//   render () {

//     if (this.props.cart.length === 0) {
//       return <div>Cart is empty</div>;
//     }

//     const cartList = this.props.cart.map((item, index) => {
//       return (
//         <div key={index}>
//           <p>{item.name}</p>
//           <p>{item.description}</p>
//           <p>${item.price}</p>
//         </div>
//       );
//     });

//     return (
//       <div>
//         <h2>This is the shopping cart!</h2>
//         <ul>
//           {cartList}
//         </ul>
//       </div>
//     );

//   }

// }

// function mapStateToProps(state) {
//   return {
//     cart: state.cart
//   }
// }


// export default connect(mapStateToProps, null)(ShoppingCart);