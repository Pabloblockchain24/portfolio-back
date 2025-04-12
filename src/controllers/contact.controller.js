import nodemailer from "nodemailer"
import config from "../config/config.js"

const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    auth: {
        user:config.user ,
        pass:config.gmail
    }
})

export const contactMail = (req, res) => {
    const {name, email, message} = req.body

   const mailOptions = {
    from: "Formulario contacto Portfolio",
    to: "parcepaiva@gmail.com",
    subject: `Solicitud de contacto Portfolio ${email}`,
    html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9;">
                <h2 style="color: #333;">📬 Nuevo mensaje desde el portfolio</h2>
                <div style="background-color: #fff; padding: 15px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <p><strong>👤 Nombre:</strong> ${name}</p>
                <p><strong>✉️ Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>📝 Mensaje:</strong></p>
                <p style="margin-left: 10px; padding: 10px; background-color: #f1f1f1; border-left: 4px solid #4CAF50;">${message}</p>
                </div>
                <p style="margin-top: 20px; font-size: 0.9em; color: #888;">Este mensaje fue enviado desde el formulario de contacto de tu portfolio.</p>
            </div>
          `
   }

   transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        res.status(500).json({message: "Error al enviar el correo"})
    } else {
        console.log("Correo enviado: " + info.response)
        res.status(200).json({message: "Correo enviado correctamente"})
    }
   })
}

