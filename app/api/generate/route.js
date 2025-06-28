import clientPromise from "@/app/lib/mongodb"
import { NextResponse } from "next/server"
export async function POST(request) {
    const body = await request.json()
    const client = await clientPromise
    const db = client.db("Bitlinks")
    const collection = db.collection("urls")
    

    // if shorurl already exixsts, return error
    const doc = await collection.findOne({ shortUrl: body.shortUrl })
    if (doc) {
        return NextResponse.json({ success: false, error: true, message: 'Short URL already exists!' })
    }
    //  database logic here
    const result = await collection.insertOne({
        url: body.url,
        shortUrl: body.shortUrl
    })

    return NextResponse.json({ success: true, error: false, message: 'URL generated successfully!' })
}