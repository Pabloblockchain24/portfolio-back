import express  from "express";

import contactRouter from "./routes/contact.routes.js"

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api", contactRouter)

export default app