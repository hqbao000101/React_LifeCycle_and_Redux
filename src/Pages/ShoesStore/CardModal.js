import React, { Component } from "react";
import { connect } from "react-redux";

class CardModal extends Component {
  render() {
    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" style={{ maxWidth: "60vw" }}>
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Shopping Cart
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col" className="text-center">
                      Image
                    </th>
                    <th scope="col" className="text-center">
                      Price
                    </th>
                    <th scope="col" className="text-center">
                      Quantity
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.arrCart.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td className="text-center">
                          <img width={100} src={item.image} alt="" />
                        </td>
                        <td className="text-center">${item.price}</td>
                        <td className="text-center">
                          <button className="btn btn-primary text-white me-4">
                            <i className="fa-solid fa-minus"></i>
                          </button>
                          {item.number}
                          <button className="btn btn-primary text-white ms-4">
                            <i className="fa-solid fa-plus"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    arrCart: state.product.arrCart,
  };
};

export default connect(mapStateToProps)(CardModal);
