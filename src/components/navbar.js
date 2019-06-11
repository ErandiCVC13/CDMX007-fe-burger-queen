import React from "react";
import { NavLink } from "react-router-dom";
import logoBurger from "../assets/ic_launcher.png";
import "../css/navbar.css";
import Ticket from "./ticket";

const Navbar = props => (
  <div className="nav">
    <div className="nav-menu">
      <h1 />
      <ul className="menu-list">
        {/* <li><NavLink className="nav-menu__link" exact to="/">Home</NavLink></li> */}
        <li>
          <img className="logo-burger " src={logoBurger} alt="logo-icon" />
        </li>
        <li>
          <NavLink className="nav-menu__link" to="/breakfast">
            Desayuno
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-menu__link" to="/burgers">
            Hamburguesas
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-menu__link" to="/drinks">
            Bebidas
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-menu__link" to="/complements">
            Complementos
          </NavLink>
        </li>
      </ul>
    </div>
    <div className="ticket-nav">
      <ul className="ticket-descri">
        <li className="space-cant">Cant.</li>
        <li className="space-product">Producto</li>
        <li className="space-product">Precio</li>
        <li>Borrar</li>
      </ul>
      <Ticket />
    </div>
  </div>
);

export default Navbar;
