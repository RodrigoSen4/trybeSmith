import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use('/products', routes.productsRouter);
app.use('/users', routes.userRouter);
app.use('/orders', routes.orderRouter);

export default app;
