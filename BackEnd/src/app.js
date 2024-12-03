import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors'; // Importa el middleware CORS
import authRoutes from './routes/auth.routes.js';
import { requestLogger } from './middlewares/RequestLogger.js';
import clientRoutes from './routes/client.routes.js';
import mandilRoutes from "./routes/mandil.routes.js";
import pedidoRoutes from "./routes/pedido.routes.js";

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(requestLogger);
app.use('/api/auth', authRoutes);
app.use('/api/client', clientRoutes);
app.use('/api/mandil', mandilRoutes);
app.use('/api/pedido', pedidoRoutes);

app.get('/', (reqc, res) => {
    res.send('<h1> Inicio </h1>');
});

export default app;