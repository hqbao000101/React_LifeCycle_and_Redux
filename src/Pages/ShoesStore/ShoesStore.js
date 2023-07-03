import React, { Component } from "react";
import { connect } from "react-redux";
import ShoesItem from "./ShoesItem";

class ShoesStore extends Component {
  render() {
    return (
      <div className="container mb-5">
        <h1 className="my-5">Bài tập Redux Tạo Giỏ Hàng</h1>
        <div className="row">
          {this.props.product.arrProduct.map((item, index) => {
            return (
              <div className="col-md-4 mb-4" key={index}>
                <ShoesItem item={item} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.product,
  };
};

const ReduxComponent = connect(mapStateToProps)(ShoesStore);
export default ReduxComponent;
