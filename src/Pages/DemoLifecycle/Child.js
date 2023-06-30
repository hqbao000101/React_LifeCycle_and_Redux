import axios from "axios";
import React, { Component } from "react";

// ! Pure Component được lấy từ react
// ! PureComponent tự động xác định các props truyền xuống component có thay đổi hay không để quyết định việc render lại giao diện, nếu có thay đổi sẽ cho component render lại và ngược lại là không render khi props không thay đổi
// ! PureComponent có thể sử dụng cho các giao diện tĩnh, không nhận các props vd như footer,...
export default class Child extends Component {
  constructor(props) {
    super();
    this.state = {
      numberChild: 1,
      product: [],
      id: "",
    };
    console.log("constructor child");
  }

  componentDidMount() {
    console.log("componentDidMount Child");
  }

  // shouldComponentUpdate(newProps, newState) {
  // ! Mình sẽ check nếu như người dùng bấm vào nút lấy sản phẩm để lấy dữ liệu cho arrProduct thì sẽ không render lại vì arrProduct không phải là props được truyền vào nên sẽ không liên quan gì tới component child
  //   if (newProps.number !== this.props.number) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  static getDerivedStateFromProps(newProps, currentState) {
    let url = window.location.href.slice("/");
    let id = url[url.length - 1];
    return {
      ...currentState,
      id,
    };
  }

  /** componentDidUpdate chạy sau khi component render lại giao diện
   * Ứng dụng của componentDidUpdate giúp check các dữ liệu từ state và props có thay đổi hay không để xử lý tiếp các hành động tiếp theo
   * Ở phiên bản router dom v5, lấy params bằng cách gọi this.props.match.params nên có thể check trong componentDidUpdate và xử lý gọi giao diện mới
   * @param {*} prevProps props trước
   * @param {*} prevState state trước
   * @returns
   */
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate Child");
    console.log("prevProps: ", prevProps, "prevState: ", prevState);

    if (
      prevState.numberChild !== this.state.numberChild &&
      this.state.numberChild <= 19
    ) {
      console.log("Number Child is changed !");
      this.getProductById(this.state.numberChild);
    }
  }

  getProductById = async (id) => {
    let res = await axios({
      method: "get",
      url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
    });
    this.setState({
      ...this.state,
      product: res.data.content,
    });
  };

  render() {
    const { name, price, image } = this.state.product;
    console.log("render child");
    return (
      <div>
        <h2>Demo shouldComponentUpdate</h2>
        <p className="fs-3 p-4">{this.props.number}</p>
        <p className="fs-3 p-4">{this.props.thongTin.hoTen}</p>
        <div className="container my-5">
          <h3>Demo về componentDidUpdate</h3>
          <p>{this.state.numberChild}</p>
          <button
            className="btn btn-success"
            onClick={() => {
              this.setState({
                numberChild: this.state.numberChild + 1,
              });
            }}
          >
            Tăng một điểm
          </button>
          <button
            className="btn btn-success ms-3"
            onClick={() => {
              this.setState({
                numberChild: this.state.numberChild - 1,
              });
            }}
          >
            Giam một điểm
          </button>
          <div className="row">
            <div className="col-4">
              <img src={image} alt="" />
              <p>{name}</p>
              <p>{price}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
