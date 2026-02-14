'use server'

import { z } from "zod";
import nodemailer from "nodemailer";

const ContactSchema = z.object({
  email: z.string().email({ message: "Email tidak valid" }),
  subject: z.string().min(5, { message: "Subjek minimal 5 karakter" }),
  message: z.string().min(10, { message: "Pesan minimal 10 karakter" }),
});

type ContactFormState = {
  errors?: {
    email?: string[];
    subject?: string[];
    message?: string[];
  };
  message?: string;
  success?: boolean;
};


export async  function sendEmail(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  // 1. Validasi Input dengan Zod
  const validatedFields = ContactSchema.safeParse({
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Input tidak valid.",
      success: false,
    };
  }

  const { email, subject, message } = validatedFields.data;

  // 2. Konfigurasi Transporter
const transporter =  nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    }
})

  // 3. Eksekusi Pengiriman
  try {
    await transporter.sendMail({
      from: `"Next.js App" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // Mengirim ke diri sendiri (admin)
      replyTo: email, // Agar bisa reply langsung ke pengirim
      subject: `New Message: ${subject}`,
      text: message,
      html: `<p><strong>From:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message}</p>`,
    });

    return { success: true, message: "Pesan berhasil dikirim!" };
  } catch (error) {
    console.error("SMTP Error:", error);
    return { success: false, message: "Gagal mengirim email. Silakan coba lagi." };
  }
}



