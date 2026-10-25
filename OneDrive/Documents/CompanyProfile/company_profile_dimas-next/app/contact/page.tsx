"use client";
import React, { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="container py-5 mt-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Contact Us</h1>
        <p className="text-muted">Customer Service Dims Meathouse siap melayani keluhan atau reservasi kencan anda sepenuh hati.</p>
      </div>

      <div className="row g-5 justify-content-center">
        <div className="col-md-5">
          <div className="card border-0 shadow-sm p-4">
            <h4 className="fw-bold mb-4">Informasi Kontak</h4>
            <p><strong>📍 Lokasi:</strong> Jl. Untar No. 1, Jakarta</p>
            <p><strong>📞 Telepon:</strong> +62 451-4324-2134</p>
            <p><strong>✉️ Email:</strong> cs@dimsmeathouse.com</p>
          </div>
        </div>
        
        <div className="col-md-5">
          <form className="card border-0 shadow-sm p-4" onSubmit={handleSubmit}>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Nama Anda" required />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Email Anda" required />
            </div>
            <div className="mb-3">
              <textarea className="form-control" rows={4} placeholder="Pesan, komplain, atau curhat..." required></textarea>
            </div>
            <button type="submit" className="btn btn-dark w-100 rounded-pill">Kirim Pesan</button>
            {submitted && <div className="alert alert-success mt-3 text-center">Pesan berhasil dikirim!</div>}
          </form>
        </div>
      </div>
    </div>
  );
}