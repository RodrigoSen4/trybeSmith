import connection from '../models/connection';
import ProductModel from '../models/product.model';
import Product from '../interfaces/product.interface';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  create(book: Product): Promise<Product> {
    return this.model.create(book);
  }

  async getAll(): Promise<Product[]> {
    const product = await this.model.getAll();
    return product;
  }
}