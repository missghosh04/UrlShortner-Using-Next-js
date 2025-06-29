"use client";
import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! Thank you for contacting us!");
    // In a real app, you'd send formData to an API here
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main className=" mx-auto p-6 text-gray-800 bg-gray-200 h-[75vh] flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h1>

      <p className="mb-2">
        Have questions, feedback, or need help? We'd love to hear from you! Fill out the form below or reach out via email.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 bg-gray-200 p-5 rounded-lg shadow-lg w-1/2">
        <div>
          <label className="block font-semibold mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
            className="w-full border border-gray-800 rounded p-2 focus:outline-none focus:ring-1 focus:ring-gray-800"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Your Email"
            className="w-full border border-gray-800 rounded p-2 focus:outline-none focus:ring-1 focus:ring-gray-800"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Message</label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Type your message here..."
            className="w-full border border-gray-800 rounded p-2 focus:outline-none focus:ring-1 focus:ring-gray-800"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
        >
          Send Message
        </button>
      </form>

      <div className="mt-3 text-sm text-gray-600">
        Or email us directly at:{" "}
        <a href="mailto:missghosh042002@gmail.com" className="text-gray-700 hover:underline">
          missghosh042002@gmail.com
        </a>
      </div>
    </main>
  );
}
