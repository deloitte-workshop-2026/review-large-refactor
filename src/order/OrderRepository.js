class OrderRepository {
  constructor(db) { this.db = db; }

  async findById(id) {
    const row = await this.db('orders').where({ id }).first();
    if (!row) return null;
    return new Order(row);
  }

  async save(order) {
    const existing = await this.db('orders').where({ id: order.id }).first();
    if (existing) {
      await this.db('orders').where({ id: order.id }).update(order);
    } else {
      await this.db('orders').insert(order);
    }
  }
}

module.exports = OrderRepository;
