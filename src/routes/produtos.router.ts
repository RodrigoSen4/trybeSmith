import { Router } from 'express';
import ProductController from '../controllers/product.controller';

const productsRouter = Router();

const productController = new ProductController();

productsRouter.post('/', (req, res) => productController.create(req, res));
productsRouter.get('/', (req, res) => productController.getAll(req, res));

export default productsRouter;
