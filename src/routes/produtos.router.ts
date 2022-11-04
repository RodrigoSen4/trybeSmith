import { Router } from 'express';
import ProductController from '../controllers/product.controller';

const productsRouter = Router();

const productController = new ProductController();

productsRouter.post('/', (req, res) => productController.create(req, res));

export default productsRouter;