import React, { Component } from "react";

class Products extends Component {
  render() {
    const { items, btnSelect } = this.context;

    if (window.location.href.includes("drinks")) {
      return (
        <div className="menu-burger">
          {items
            .filter(items => items.type.includes("drinks"))
            .map(item => (
              <div key={item.id} className="btns-burgers-right">
                <button
                  className="btn-burger-style"
                  onClick={() => btnSelect(item)}
                >
                  <div className="btn-circulo">
                    <img className="img-burger " src={item.img} alt="drinks" />
                  </div>
                  <div className="btn-text">{item.name} </div>
                  <div className="btn-price">${item.price} </div>
                </button>
              </div>
            ))}
        </div>
      );
    } else if (window.location.href.includes("burgers")) {
      return (
        <div className="menu-burger-more">
          {items
            .filter(items => items.type.includes("burgers"))
            .map(item => (
              <div key={item.id} className="btns-burgers">
                <button
                  className="btn-burger-style"
                  onClick={() => btnSelect(item)}
                >
                  <div className="btn-circulo">
                    <img className="img-burger " src={item.img} alt="burgers" />
                  </div>
                  <div className="btn-text">{item.name} </div>
                  <div className="btn-price">${item.price} </div>
                </button>
              </div>
            ))}
        </div>
      );
    } else if (window.location.href.includes("complements")) {
      return (
        <div className="menu-burger">
          {items
            .filter(items => items.type.includes("complements"))
            .map(item => (
              <div key={item.id} className="btns-burgers-right">
                <button
                  className="btn-burger-style"
                  onClick={() => btnSelect(item)}
                >
                  <div className="btn-circulo">
                    <img
                      className="img-burger "
                      src={item.img}
                      alt="complements"
                    />
                  </div>
                  <div className="btn-text-break">{item.name} </div>
                  <div className="btn-price">${item.price} </div>
                </button>
              </div>
            ))}
        </div>
      );
    } else if (window.location.href.includes("breakfast")) {
      return (
        <div className="menu-burger-break">
          {items
            .filter(items => items.type.includes("breakfast"))
            .map(item => (
              <div key={item.id} className="btns-burgers">
                <button
                  className="btn-burger-style"
                  onClick={() => btnSelect(item)}
                >
                  <div className="btn-circulo">
                    <img
                      className="img-burger "
                      src={item.img}
                      alt="breakfast"
                    />
                  </div>
                  <div className="btn-text-break">{item.name} </div>
                  <div className="btn-price">${item.price} </div>
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
