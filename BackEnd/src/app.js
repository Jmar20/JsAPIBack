import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.routes.js';
import { requestLogger } from './middlewares/RequestLogger.js';

const app = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())
app.use(requestLogger)
app.use('/api/auth', authRoutes)

app.get('/', (req, res) => {
    res.send('<h1> Inicio </h1>')
})

export default app