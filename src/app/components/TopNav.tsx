'use client';

import { useState } from 'react';

type TopNavProps = {
    isDark: boolean;
    isNavOpen: boolean;
}

function TopNav({isDark, isNavOpen}: TopNavProps) {

    const [activeNav, setActiveNav] = useState("New Arrivals");

    return (
         <div className={`w-full flex flex-row items-center justify-center shadow-lg
            ${isDark? "text-[var(--light-color)] bg-[var(--dark-color)]" : "bg-[var(--light-color)] text-[var(--dark-color)]"}
            ${isNavOpen ? "slide-down" : "slide-up"}`}>
            {isNavOpen && 
                <div className={`
                    h-full max-w-[1080px] w-full flex flex-col items-center justify-center gap-[calc(0.4vw+0.6rem)]`}>
                    
                    <div className="h-full w-full flex flex-row items-center justify-start">
                        <span
                            onClick={() => setActiveNav("New Arrivals")}
                            className={`text-[length:var(--normal-font-size)] p-[calc(0.4vw+0.6rem)] cursor-pointer transition duration-200
                                border-b-2 fadeIn
                                ${activeNav === "New Arrivals"
                                    ? "border-[color:var(--pink-color)]"
                                    : "border-transparent hover:border-gray-400"
                                }`}
                            >
                            New Arrivals
                        </span>
                        <span
                            onClick={() => setActiveNav("Collections")}
                            className={`text-[length:var(--normal-font-size)] p-[calc(0.4vw+0.6rem)] cursor-pointer transition duration-200
                                border-b-2 fadeIn
                                ${activeNav === "Collections"
                                    ? "border-[color:var(--pink-color)]"
                                    : "border-transparent hover:border-gray-400"
                                }`}
                            >
                            Collections
                        </span>
                        <span
                            onClick={() => setActiveNav("Accesories")}
                            className={`text-[length:var(--normal-font-size)] p-[calc(0.4vw+0.6rem)] cursor-pointer transition duration-200
                                border-b-2 fadeIn
                                ${activeNav === "Accesories"
                                    ? "border-[color:var(--pink-color)]"
                                    : "border-transparent hover:border-gray-400"
                                }`}
                            >
                            Accesories
                        </span>
                        <span
                            onClick={() => setActiveNav("Contact Us")}
                            className={`text-[length:var(--normal-font-size)] p-[calc(0.4vw+0.6rem)] cursor-pointer transition duration-200
                                border-b-2 fadeIn
                                ${activeNav === "Contact Us"
                                    ? "border-[color:var(--pink-color)]"
                                    : "border-transparent hover:border-gray-400"
                                }`}
                            >
                            Contact Us
                        </span>
                    </div>
                    <div className="h-full w-full flex flex-row items-start justify-start gap-[calc(0.4vw+0.6rem)] p-[calc(0.4vw+0.6rem)] m-[calc(0.4vw+0.6rem)]">
                        <div>
                            <span className='text-[length:var(--normal-font-size)] text-gray-500'>
                                Coming Soon...
                            </span>
                        </div>
                        <div>

                        </div>
                    </div>
                    
                </div>
            }
        </div>
    )
}

export default TopNav