import express  from "express";
import cors from "cors"

import contactRouter from "./routes/contact.routes.js"

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const allowedOrigins = [
    'https://portafolio-pablo-arce.vercel.app',
    "http://localhost:8080"
];

const corsOptions = {
    origin: (origin, callback) => {
        if (!origin) return callback(null, true);

        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Cookie'],
    credentials: true
};



app.use(cors(corsOptions));
app.use("/api", contactRouter)

export default app