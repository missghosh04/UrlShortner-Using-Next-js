import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-800 text-white py-10 position-fixed bottom-0 w-full h-full flex justify-between items-center px-6">
                <div className="container mx-auto text-center">
                    <p className="text-sm"> ©  {new Date().getFullYear()} Bitlinks. All rights reserved.</p>
                </div>
                <div className="flex space-x-4">
                    <a href="https://github.com/missghosh04/UrlShortner-Using-Next-js" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        GitHub
                    </a>
                    <a href="mailto:youremail@example.com" className="hover:text-gray-400">
                        Contact
                    </a>
                </div>
            </footer>
        </div>
    )
}

export default Footer
