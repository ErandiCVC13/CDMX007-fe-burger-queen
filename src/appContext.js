import React from "react";

export const AppContext = React.createContext();

export class AppContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      order: []
    };
    this.btnSelect = this.btnSelect.bind(this);
    this.btnDelete = this.btnDelete.bind(this);
  }

  btnSelect(item) {
    let uniqs = [...this.state.order];
    // uniqs.push(item);
    // console.log(productOrder);
    if (uniqs.includes(item)) {
      item.cant = item.cant + 1;
      item.total = item.price + item.total;
    } else {
      uniqs.push(item);
    }

    this.setState({
      order: uniqs
    });
  }

  btnDelete(item) {
    console.log(item);
    let uniqs = [];
    // console.log(uniqs);
    if (item.cant > 1 && this.state.order.includes(item)) {
      console.log("siesta", this.state.order);
      item.cant = item.cant - 1;
      item.total = item.total - item.price;
      uniqs = this.state.order;
    } else {
      uniqs = this.state.order.filter(elemnt => {
        return elemnt !== item;
      });
      // console.log(nuevo);
    }

    this.setState({
      order: [...uniqs]
    });
  }

  componentDidMount() {
    fetch("https://buger-queen.firebaseio.com/products.json").then(res =>
      res.json().then(json => {
        this.setState({
          items: json
        });
      })
    );
  }
  render() {
    const { order } = this.state;
    // console.log(order);
    return (
      <AppContext.Provider
        value={{
          items: this.state.items,
          btnSelect: this.btnSelect,
          btnDelete: this.btnDelete,
          order
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export const AppContextConsumer = AppContext.Consumer;
