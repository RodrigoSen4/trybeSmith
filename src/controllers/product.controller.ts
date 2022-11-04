import { Request, Response } from 'express';
import ProductService from '../service/product.service';

export default class ProductController {
  constructor(private productService = new ProductService()) { }

  async create(req: Request, res: Response) {
    const product = req.body;
    const productCreate = await this.productService.create(product);
    res.status(201).json(productCreate);
  }

  async getAll(req: Request, res: Response) {
    const products = await this.productService.getAll();
    res.status(200).json(products);
  }
}
