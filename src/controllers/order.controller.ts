import { Request, Response } from 'express';
import OrderService from '../service/order.service';

export default class OrderController {
  constructor(private orderService = new OrderService()) { }

  async getAll(req: Request, res: Response) {
    const orders = await this.orderService.getAllOrders();
    res.status(200).json(orders);
  }
}
