import { redirect } from "next/navigation"
import clientPromise from "../lib/mongodb"

export default async function Page({ params }) {
  const { shortUrl } = (await params).shortUrl
  const client = await clientPromise
  const db = client.db("Bitlinks")
  const collection = db.collection("urls")
  const doc = await collection.findOne({ shortUrl })
  console.log(doc)
  if(doc) {
    redirect(doc.url)
  }
  else{
    redirect(`${process.env.NEXT_PUBLIC_HOST}` || "/")
  }

  return <p>Redirecting...</p>
}