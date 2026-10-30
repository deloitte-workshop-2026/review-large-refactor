class Order {
  constructor({ id, customerId, items, status = 'pending' }) {
    this.id = id;
    this.customerId = customerId;
    this.items = items;
    this.status = status;
    this.createdAt = new Date();
  }

  get total() {
    return this.items.reduce((sum, item) => sum + item.price * item.qty, 0);
  }

  submit() {
    if (this.status !== 'pending') throw new Error('Order already submitted');
    this.status = 'submitted';
  }

  cancel() {
    if (!['pending','submitted'].includes(this.status))
      throw new Error('Cannot cancel order in status: ' + this.status);
    this.status = 'cancelled';
  }
}

module.exports = Order;
