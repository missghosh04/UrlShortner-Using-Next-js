import React from 'react'

const Footer = () => {
    return (

        <footer className="bg-gray-800 text-white py-5 px-5 position-fixed bottom-0 w-full h-[14vh] flex  gap-5 justify-between items-center ">
            <div className="flex flex-row gap-8 justify-center items-center text-md">
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
                <p>About Us</p>
            </div>
            <div className="text-center">
                <p className="text-sm"> ©  {new Date().getFullYear()} Bitlinks. All rights reserved.</p>
            </div>
            <div className="flex space-x-4 gap-10">
                <a href="https://github.com/missghosh04/UrlShortner-Using-Next-js" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 text-center text-md">
                    GitHub
                </a>
                <a href="mailto:missghosh042002@gmail.com" className="hover:text-gray-400 text-center text-md">
                    Email 
                </a>
                <a href="#" className="hover:text-gray-400 text-center text-md">
                    Help
                </a>
            </div>
        </footer>

    )
}

export default Footer
