import React, { Component } from "react";
import { connect } from "react-redux";

class ShoesStore extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container-fluid">
        <h1 className="min-vh-100">Bài tập Redux Tạo Giỏ Hàng</h1>
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
