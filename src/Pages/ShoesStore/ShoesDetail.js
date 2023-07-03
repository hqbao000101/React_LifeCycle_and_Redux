import React, { Component } from "react";
import { connect } from "react-redux";

class ShoesDetail extends Component {
  render() {
    const urlSplit = window.location.href.split("/");
    const productId = urlSplit[urlSplit.length - 1];
    let product = this.props.product.find((item) => item.id === productId * 1);
    return (
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-6">
            <img src={product.image} alt={`Shoe ${product.id}`} />
          </div>
          <div className="col-6">
            <h3 className="mb-3">{product.name}</h3>
            <p>$ {product.price}.00</p>
            <p>{product.description}</p>
            <button
              className="btn btn-dark"
              onClick={() => {
                // C1
                const action = {
                  type: "ADDTOCART",
                  payload: product,
                };
                this.props.dispatch(action);
                // C2
                // this.props.addToCart(product);
              }}
            >
              Add to the Cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.product.arrProduct,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addToCart: (item) => {
//       const action = {
//         type: "ADDTOCART",
//         payload: item,
//       };
//       dispatch(action);
//     },
//   };
// };

export default connect(mapStateToProps)(ShoesDetail);
// export default connect(mapStateToProps, mapDispatchToProps)(ShoesDetail);
