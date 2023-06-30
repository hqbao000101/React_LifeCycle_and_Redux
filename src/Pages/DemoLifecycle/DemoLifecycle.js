import React, { Component } from "react";
import Child from "./Child";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default class DemoLifecycle extends Component {
  constructor(props) {
    super();
    this.state = {
      login: "",
      arrProduct: [],
      number: 1,
      thongTinNguoiDung: {
        hoTen: "Khanh",
      },
    };
    console.log("constructor");
  }

  componentDidMount() {
    // ! componentDidMount sẽ chạy sau khi phương thức render chạy xong
    // ! Trong componentDidMount thường sẽ chạy phương thức gọi dữ liệu từ server để hiển thị len giao diện cho người dùng
    console.log("componentDidMount");
    this.getAllProduct();

    this.capNhatTinTuc();
  }

  // ! shouldcomponentUpdate khi xử lý trả về 2 giá trị: true (component được phép update lại), false (ngăn component update)
  // ! shouldComponentUpdate sẽ chạy khi updating nghĩa là khi có state hoặc props(nhận vào state) thay đổi
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }

  getAllProduct = async () => {
    let res = await axios({
      method: "get",
      url: "https://shop.cyberlearn.vn/api/Product",
    });
    // promise.then((res) => {
    //   console.log(res);
    // })
    // promise.catch((err) => {
    //   console.log(err);
    // })
    this.setState({
      ...this.state,
      arrProduct: res.data.content,
    });
  };

  // ! static cho phép gọi trực tiếp thông qua tên Class mà không cần khởi tạo new
  /** getDerivedStateFromProps giúp can thiệp vào state và props trước quá trình render lên giao diện
   *
   * @param {*} newProps props trước khi render
   * @param {*} currentState state ngay trước thời điểm render
   * @returns
   */
  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps");
    console.log(newProps, currentState);
    if (localStorage.getItem("userLogin")) {
      let userLogin = localStorage.getItem("userLogin");
      return (currentState = {
        ...currentState,
        login: userLogin,
      });
    }
    return true;
  }

  capNhatTinTuc = () => {
    // this.demoInterval = setInterval(() => {
    //   console.log("New Updated Version");
    // }, [5000]);
  };

  // ! can thiệp vào khi component bị xóa nghĩa là component không hiển thị trên giao diện nữa
  componentWillUnmount() {
    console.log("componentWillUnmount");

    // ! clearInterval giúp xóa đi setInterval đang hoạt động, khi xóa truyền id cảu setInterval có thể dùng một biến để gán setInterval và gọi tên biến đó trong hàm clear
    clearInterval(this.demoInterval);
  }

  render() {
    console.log("render");
    return (
      <div>
        <h2>DemoLifecycle</h2>
        <p>{this.state.login}</p>
        <Child
          number={this.state.number}
          thongTin={this.state.thongTinNguoiDung}
        />
        <button
          onClick={() => {
            // ! Shallow compare
            // ! ở đây khi gọi tới state để thay đổi dữ liệu nhưng state của chúng ta là một object, nếu không clone ra trước sẽ gặp vấn đề về tham chiếu, lúc này Purecomponent sẽ không xác định được props đó đã thay đổi hay chưa nên sẽ bị lỗi cập nhật
            // let newThongTin = this.state.thongTinNguoiDung;
            // newThongTin.hoTen = "Long"
            // this.setState({
            //   thongTinNguoiDung: newThongTin,
            // });
            let newThongTin = { ...this.state.thongTinNguoiDung };
            newThongTin.hoTen = "Long";
            this.setState({
              thongTinNguoiDung: newThongTin,
            });
          }}
          className="btn btn-warning"
        >
          Đổi tên
        </button>
        <button
          className="btn btn-dark"
          onClick={() => {
            this.setState({
              ...this.state,
              number: this.state.number + 1,
            });
          }}
        >
          Nhấn em đi
        </button>
        <div className="container">
          <button className="btn btn-dark mb-4" onClick={this.getAllProduct}>
            Lay San Pham
          </button>
          <div className="row">
            {this.state.arrProduct.map((item, index) => {
              const { id, image, name, price } = item;
              return (
                <div className="col-3 mb-4" key={index}>
                  <div className="card h-100">
                    <img src={image} alt={`Shoe Pic ${id}`} />
                    <div className="card-body">
                      {/* name, price */}
                      <h3>{name}</h3>
                      <p>${price}</p>
                      <NavLink
                        to={`/lifecycle/${id}`}
                        className="btn btn-danger"
                      >
                        Get Details
                      </NavLink>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
