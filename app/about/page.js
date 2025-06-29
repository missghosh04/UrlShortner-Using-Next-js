"use client";
import React from "react";

export default function AboutPage() {
  return (
    <main className=" mx-auto p-6 text-gray-800 bg-gray-200 h-[75vh] flex flex-col justify-center items-center ">
      <h1 className="text-3xl  font-bold mb-4 text-gray-800">About Bitlinks</h1>
      
      <p className="mb-4">
        <strong>Bitlinks</strong> is a lightweight and user-friendly URL shortener built with 
        <span className="text-gray-800 font-semibold"> Next.js</span>. It enables users to convert long, messy links into clean, short ones that are easy to share.
      </p>

      <p className="mb-4">
        Whether you're sharing links on social media, messaging apps, or emails, Bitlinks helps you make your links look professional and trackable.
      </p>

      <p className="mb-4">
        This project was created by <span className="font-semibold text-gray-800">Soumi Ghosh</span> as a part of a learning journey in full-stack web development. It's powered by modern technologies like MongoDB, Tailwind CSS, Next.js, and Vercel for deployment.
      </p>
        <p className="mb-4 ">
            The application allows users to input a long URL and generate a short URL that redirects to the original link. It also provides a simple interface for users to manage their shortened links.
      </p>
      <p>
        You can check out the source code on 
        <a 
          href="https://github.com/missghosh04/UrlShortner-Using-Next-js" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-800 hover:underline ml-1"
        >
          GitHub
        </a>.
      </p>
    </main>
  );
}
