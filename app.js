import express from 'express'
import { customerRouter } from './routes/customer.js'
import { productRouter } from './routes/product.js'

const app = express();
const port = 3000;

app.use(express.json({
    limit: '50mb'
}));
app.listen(port, () => {
    console.log(`Server is running. http://localhost:${port}`);
});

app.use('/customer', customerRouter);
app.use('/product', productRouter);