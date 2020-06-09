import React, { Component } from "react";

class Products extends Component {
  render() {
    const { items, btnSelect } = this.context;

    const path = window.location.pathname;

    if (path) {
      return (
        <div className="menu-burger">
          {items
            .filter((items) => items.type.includes(path.slice(1)))
            .map((item) => (
              <div key={item.id}>
                <button onClick={() => btnSelect(item)}>
                  <div>
                    <img src={item.img} alt={path.slice(1)} />
                  </div>
                  <div>{item.name} </div>
                  <div>${item.price} </div>
                </button>
              </div>
            ))}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Products;
