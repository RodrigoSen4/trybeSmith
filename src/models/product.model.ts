import { Pool, ResultSetHeader } from 'mysql2/promise';
import { RowDataPacket } from 'mysql2';
import Product from '../interfaces/product.interface';

export default class ProductModel {
  public connection: Pool;
  
  constructor(connection: Pool) {
    this.connection = connection;
  }
  
  async create(product: Product): Promise<Product> {
    const { name, amount } = product;
    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const { insertId: id } = result;
    const newProduct: Product = { id, name, amount };
    return newProduct;
  }

  async getAll(): Promise<Product[]> {
    const [products] = await this.connection
      .execute<Product[] & RowDataPacket[]>('SELECT * FROM Trybesmith.Products');

    return products;
  }
}