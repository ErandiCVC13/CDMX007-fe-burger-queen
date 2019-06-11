import React, { Component } from "react";
import less from "../assets/borrar.png";

class Ticket extends Component {
  render() {
    const { order, btnDelete, btnCancel } = this.context;
    return (
      <div className="ticket-order">
        {order.map((order, index) => (
          <ul key={index} className="produc-list">
            <li>
              <div className="btn-ticket">
                <div className="btn-text-ticket">
                  {order.lastname} {order.name}
                </div>
                <div className="btn-cant-ticket">{order.cant} </div>
                <div className="btn-total-ticket">${order.total} </div>
                <button className="btn-less" onClick={() => btnDelete(order)}>
                  <img className="img-burger " src={less} alt="drinks" />
                </button>
              </div>
            </li>
          </ul>
        ))}
        <div className="total-ticket">
          Total &nbsp; &nbsp;$&nbsp;
          {order.reduce((sum, newPrice) => {
            return sum + newPrice.total;
          }, 0)}
        </div>
        <div className="btn-can-send">
          <button className="btns-ticket" onClick={() => btnCancel(order)}>
            Cancelar orden
          </button>
          <button className="btns-ticket">Confirmar orden</button>
        </div>
      </div>
    );
  }
}

export default Ticket;
