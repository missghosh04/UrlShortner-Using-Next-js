"use client"
import React from 'react'
import { useState } from 'react';
import Link from 'next/link';
const page = () => {
    const [url, seturl] = useState("");
    const [shortUrl, setShortUrl] = useState("");
    const [generated, setgenerated] = useState("");
    const generate = (e) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shortUrl": shortUrl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`);
                console.log(result);
                alert(result.message);
                setShortUrl("");
                seturl("");
            })
            .catch((error) => console.error(error));
    }

    return (
        <div className='flex flex-col h-[70vh] justify-center items-center p-5 space-y-4 text-gray-800 bg-gray-200'>
            <div className='flex flex-col justify-center items-center space-y-2'>
                <h1 className="text-3xl font-bold">Shorten your URL</h1>
                <p>Enter your URL below to get started:</p>
            </div>
            <div className="flex flex-col space-y-4">
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
                <button onClick={generate} className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 my-5 rounded-md">Generate</button>

            </div>
            <div>
                {generated && <div>
                    <span className='font-bold text-lg'>Your Link : </span> <code><Link  target="_blank"  className='text-blue-500 underline ' href={generated}>{generated}</Link></code>
                </div>}
            </div>
        </div>
    )
}

export default page
