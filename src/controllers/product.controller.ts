import { Request, Response } from 'express';
import ProductService from '../service/product.service';

class ProductController {
  constructor(private productService = new ProductService()) { }

  create = async (req: Request, res: Response) => {
    const product = req.body;
    const productCreate = await this.productService.create(product);
    res.status(201).json(productCreate);
  };
}

export default ProductController;