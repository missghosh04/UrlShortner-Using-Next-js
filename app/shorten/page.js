"use client"
import React from 'react'
import { useState } from 'react';
const page = () => {
    const [url, seturl] = useState("");
    const [shortUrl, setShortUrl] = useState("");
    const [generated, setgenerated] = useState(false);
    
    return (
        <div className='flex flex-col h-[70vh] justify-center items-center p-5 space-y-4 text-gray-800 bg-gray-200'>
            <div className='flex flex-col justify-center items-center space-y-2'>
                <h1 className="text-3xl font-bold">Shorten your URL</h1>
                <p>Enter your URL below to get started:</p>
            </div>
            <form className="flex flex-col space-y-4">
                <input type="text"
                    placeholder="Enter your URL"
                    className="border p-2 rounded-md w-200"
                    value={url}
                    onChange={(e) => seturl(e.target.value)} />
                <input type="text"
                    placeholder="Enter your preferred URL"
                    className="border p-2 rounded-md"
                    value={shortUrl}
                    onChange={(e) => setShortUrl(e.target.value)} />
                <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 my-5 rounded-md">Generate</button>
            </form>
        </div>
    )
}

export default page
