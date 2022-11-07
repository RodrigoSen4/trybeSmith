import { Pool } from 'mysql2/promise';
import Order from '../interfaces/order.interface';

export default class OrderModel {
  public connection: Pool;
  
  constructor(connection: Pool) {
    this.connection = connection;
  }
  
  async getAll():Promise<Order[]> {
    const [result] = await this.connection.execute(
      `SELECT pr.orderId AS id, Ord.userId, JSON_ARRAYAGG(pr.id) as productsIds 
      FROM Trybesmith.Products as pr        
      INNER JOIN
        Trybesmith.Orders as Ord
      ON
        pr.orderId = Ord.Id
      GROUP BY pr.orderId`,
    );
  
    return result as Order[];
  }
}
