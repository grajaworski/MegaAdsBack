import express, {json} from "express";
import cors from "cors";
import 'express-async-errors';
import {handleError} from "./utils/erorrs";
import rateLimit from "express-rate-limit";
import {adRouter} from "./routers/ad.router";
import {Config} from "./config/config";

const app = express();

app.use(cors({
    origin: Config.corsOrigin,
}));
app.use(json())
app.use(rateLimit({
    windowMs: 5 * 60 * 1000, // 5 minutes
    max: 100, // Limit each IP to 100 request per 'window' (here, per 15 minutes).
}))

app.use('/api/ad', adRouter);

app.use(handleError);

app.listen(3001, '0.0.0.0', () => {
    console.log('Listening on port http://localhost:3001');
})