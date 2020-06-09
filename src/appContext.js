import React from "react";

export const AppContext = React.createContext();

export class AppContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      order: [],
    };
    this.btnSelect = this.btnSelect.bind(this);
    this.btnDelete = this.btnDelete.bind(this);
    this.btnCancel = this.btnCancel.bind(this);
  }
  componentDidMount() {
    fetch("https://buger-queen.firebaseio.com/products.json").then((res) =>
      res.json().then((json) => {
        this.setState({
          items: json,
        });
      })
    );
  }

  btnSelect(item) {
    let uniqs = [...this.state.order];

    if (uniqs.includes(item)) {
      item.cant = item.cant + 1;
      item.total = item.price + item.total;
    } else {
      uniqs.push(item);
    }

    this.setState({
      order: uniqs,
    });
  }

  btnDelete(item) {
    let uniqs = [];

    if (item.cant > 1) {
      item.cant = item.cant - 1;
      item.total = item.total - item.price;
      uniqs = this.state.order;
    } else {
      uniqs = this.state.order.filter((elemnt) => {
        return elemnt !== item;
      });
    }

    this.setState({
      order: [...uniqs],
    });
  }

  btnCancel() {
    let cancel = [];

    this.state.order.map((item) => {
      if (item.cant > 1) {
        item.cant = 1;
        item.total = item.price;
      }

      return this.state.order;
    });

    this.setState({
      order: cancel,
    });
  }

  render() {
    const { order } = this.state;

    return (
      <AppContext.Provider
        value={{
          items: this.state.items,
          btnSelect: this.btnSelect,
          btnDelete: this.btnDelete,
          btnCancel: this.btnCancel,
          order,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export const AppContextConsumer = AppContext.Consumer;
