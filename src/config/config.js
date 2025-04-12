import dotenv from "dotenv"

dotenv.config();

export default{
    port:process.env.PORT,
    user:process.env.GAMIL_USER,
    gmail: process.env.GMAIL_KEY 
}