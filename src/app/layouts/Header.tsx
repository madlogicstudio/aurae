'use client';

import { useState, useEffect } from 'react'
import IconDark from '../assets/Icon-dark.png'
import IconLight from '../assets/Icon-light.png'
import ThemeToggle from '../components/ThemeToggle'
import TopNav from '../components/TopNav'
import Cart from '../components/Cart';

type HeaderProps = {
    isDark: boolean;
    setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

function Header({isDark, setIsDark} : HeaderProps) {

    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        if (isNavOpen) {
            setIsCartOpen(false);
        }
    }, [isNavOpen]);

    useEffect(() => {
        if (isCartOpen) {
            setIsNavOpen(false);
        }
    }, [isCartOpen]);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDark);
    }, [isDark]);

    return (
        <div className={`${isDark? "text-[var(--light-color)] bg-[var(--dark-color)]" : "bg-[var(--light-color)] text-[var(--dark-color)]"}
            relative w-full sticky top-0 z-10`}>

            <div className={`h-auto w-full flex flex-col items-center justify-center`}>
                
                <div className={`h-auto max-w-[1080px] w-full flex flex-row items-center justify-between gap-[calc(0.4vw+0.6rem)] p-[calc(0.4vw+0.6rem)]`}>

                    <div className="flex-1 flex flex-row items-center justify-start gap-[calc(0.4vw+0.6rem)]">
                        <img src={(isDark ? IconLight : IconDark).src} alt="Logo" 
                            className='h-[length:var(--logo-size)] w-[length:var(--logo-size)] cursor-pointer fadeIn spin'/>
                        <span className='text-[length:var(--medium-font-size)] hovered font-semibold cursor-pointer hover:border-[#5A9CB5] fadeIn'>Aurae</span>
                    </div>

                    <div className="flex-1 flex flex-row items-center justify-end gap-[calc(0.4vw+0.6rem)]">
                        <ThemeToggle isDark={isDark} setIsDark={setIsDark}/>   
                        <i className={`${isCartOpen? "bx bx-x" : "bx bx-cart-alt"}
                            bx-tada-hover text-[length:var(--icon-size)] hovered cursor-pointer fadeIn`} 
                            onClick={() => setIsCartOpen(prev => !prev)}/>      
                        <i className={`${isNavOpen? "bx bx-x" : "bx bx-menu-right"}
                            bx-tada-hover text-[length:var(--icon-size)] hovered cursor-pointer fadeIn`} 
                            onClick={() => setIsNavOpen(prev => !prev)}/>
                    </div>

                </div>

            </div>

            <div className="w-full flex flex-row items-center justify-center absolute top-full">
                <TopNav isDark={isDark} isNavOpen={isNavOpen}/>
            </div> 
            <div className="w-full flex flex-row items-center justify-center relative">
                <Cart isDark={isDark} isCartOpen={isCartOpen}/>
            </div> 

        </div>
    )
}

export default Header