"use client";
import { Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#5E9EA8] to-[#87CEEB] text-white text-center">
      <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
      <p className="mb-6">Reach out today and let’s start building your business in Qatar.</p>
      <div className="flex flex-col md:flex-row justify-center gap-6">
        <div className="flex items-center gap-2">
          <Phone /> <span>+974 123 456 789</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail /> <span>info@businessqatar.com</span>
        </div>
      </div>
    </section>
  );
}
