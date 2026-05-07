'use client';

import { useState } from 'react';

type CartProps = {
    isDark: boolean;
    isCartOpen: boolean;
}

function Cart({isDark, isCartOpen}: CartProps) {

    return (
         <div className={`w-full flex flex-row items-center justify-end absolute top-0
            ${isCartOpen ? "slide-down" : "slide-up"}`}>
            {isCartOpen && 
                <div className={`${isDark? "text-[var(--light-color)] bg-[var(--dark-color)]" : "bg-[var(--light-color)] text-[var(--dark-color)]"}
                    h-auto max-w-[240px] w-full flex flex-col items-start justify-between shadow-lg`}>
                    
                    <div className='flex flex row items-center justify-between w-full p-[calc(0.4vw+0.6rem)] fadeIn border-b border-gray-300'>
                        <span className='text-[length:var(--normal-font-size)]'>Cart</span>
                        <span className='text-[length:var(--normal-font-size)]'>[0]</span>   
                    </div>

                    <div className='flex flex col items-center justify-between w-full p-[calc(0.4vw+0.6rem)] fadeIn border-b border-gray-300'>
                        {/* Cart Items */}
                        <span className='text-[length:var(--normal-font-size)] italic text-gray-500 py-[calc(0.4vw+0.6rem)]'>Coming Soon...</span>
                    </div>


                    <div className='flex flex row items-center justify-between w-full p-[calc(0.4vw+0.6rem)] fadeIn border-b border-gray-300 mt-0'>
                        <span className='text-[length:var(--normal-font-size)] font-800'>Subtotal</span>
                        <span className='text-[length:var(--normal-font-size)]'>$0</span>   
                    </div>

                    <div className='flex flex col items-center justify-center w-full fadeIn hover:text-[color:var(--white-color)] hover:bg-[color:var(--pink-color)]
                        transition duration-300 ease-in-out'>
                        <div className='h-full w-full flex flex-row items-center justify-between cursor-pointer gap-[calc(0.4vw+0.6rem)] p-[calc(0.4vw+0.6rem)] mt-0'>
                            <span className='text-[length:var(--normal-font-size)]'>Check Out</span> 
                            <i className="bx bx-arrow-right-stroke text-[length:var(--icon-size)] fadeIn" />
                        </div>
                    </div>
                    
                </div>
            }
        </div>
    )
}

export default Cart