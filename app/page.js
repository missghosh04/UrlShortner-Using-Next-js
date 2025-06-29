import Image from "next/image";
import Link from 'next/link'
export default function Home() {
  return (
    <main>
      <section className="grid grid-cols-2 h-[75vh] bg-gray-200">
        <div className="  flex flex-col justify-center items-center p-10 space-y-4  text-gray-800">
          <h1 className="text-3xl font-bold">Welcome to Bitlinks</h1>
          <p >We are most straightforward URL shortener in the world.</p>
          <div className='flex space-x-4'>
        <Link href="/shorten"><button className='bg-gray-700 hover:bg-gray-600 text-white py-1 px-4 rounded font-bold'>Try now</button></Link>
        <Link href="/github" target="_blank"><button className='bg-gray-700 hover:bg-gray-600 text-white py-1 px-4 rounded font-bold'>Github</button></Link>
        </div>
        </div>
        
        <div className="flex justify-start items-center p-10 ">
          <Image
            src="/urlshortner.png"
            alt="urlshortner Image"
            width={500}
            height={500}
            className="flex "
            priority={true}
          />
        </div>
      </section>
    </main>
  );
}
