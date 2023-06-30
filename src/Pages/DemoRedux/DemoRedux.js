import React, { Component } from "react";
import { connect } from "react-redux";

class DemoRedux extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <h2>Thay Đổi Họ Tên</h2>
        <p>{this.props.hoTen}</p>
        <button
          className="btn btn-dark"
          onClick={() => {
            const action = {
              type: "setHoTen",
              payload: "Nguyên",
            };
            // ! dùng phương thức dispatch để đưa dữ liệu từ component lên redux
            this.props.dispatch(action);
          }}
        >
          Đổi tên thành Nguyên
        </button>
      </div>
    );
  }
}

// ! Closure Function
// let closureFunction = () => {
//   return () => {
//     //! this is closure function
//   }
// }

// ! Bước gọi state tới từ redux về
const mapStateToProps = (state) => {
  // * giúp lấy dữ liệu từ redux về
  // * state đóng vai trò là tham số đại diện cho reducer giúp lấy dữ liệu từ store của redux
  return {
    hoTen: state.hoTen,
  };
};

// ! setup connect component với redux
// ! Gọi phương thức connect tới từ react-redux để kết nối. Khi gọi component này để sử dụng sẽ gọi tên class chứ không gọi ReduxComponent
const ReduxComponent = connect(mapStateToProps)(DemoRedux);
// ! thì ReduxComponent sẽ trả về component có tên là DemoRedux nhưng có gắn thêm các phương thức tới từ redux
export default ReduxComponent;
