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

app.use((req, res, next) => {
    const allowedOrigins = ['http://localhost:5173'];

    const origin = req.headers.origin;
    if (allowedOrigins.indexOf(origin) > -1 || !origin) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.setHeader('Access-Control-Allow-Credentials', true);
    return next();
});

app.get('/', (reqc, res) => {
    res.send('<h1> Inicio </h1>');
});

export default app;