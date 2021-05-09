import express from 'express';
import 'reflect-metadata';
import { router } from './routes';

const app = express();

app.use(express.json());
app.use(router);

export { app };
