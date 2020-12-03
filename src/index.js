module.exports = {
  items: 2,
  getItems() {
    return this.items;
  },
  setItems(value) {
    debugger;
    return (this.items = this.items + value);
  },
};
