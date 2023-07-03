import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class ShoesItem extends Component {
  render() {
    const { id, name, price, image } = this.props.item;
    return (
      <div className="card shadow p-3">
        <img src={image} className="card-img-top" alt={`Shoe ${id}`} />
        <div className="card-body">
          <h5 className="card-text">{name}</h5>
          <p className="card-text">$ {price}.00</p>
          <NavLink
            to={`/shoes-detail/${id}`}
            className="text-white p-2 bg-success rounded-1"
            style={{ textDecoration: "none" }}
          >
            More Details
          </NavLink>
        </div>
      </div>
    );
  }
}
