'use client'

import { useIsMobile } from "../hooks/useIsMobile";
import { useRef, useEffect, useState } from "react";
import Hero from "./Hero"
import Benefits from "./Benefits";
import BrandCarousel from "../components/BrandCarousel";
import Shop from "./Shop";

type ContentProps = {
    isDark: boolean;
}

function Content({isDark}: ContentProps) {

    const isMobile = useIsMobile();

    return (
        
        <div className={`${isMobile? "h-auto" : "h-auto"}
            ${isDark? "text-[var(--light-color)] bg-[var(--dark-color)]" : "bg-[var(--light-color)] text-[var(--dark-color)]"}
            w-full flex flex-col items-start justify-start scroll-smooth`}>
            
            <div className="flex">
                <Hero isDark={isDark}/>
            </div>
            <div className="w-full flex">
                <BrandCarousel />
            </div>
            <div className="w-full">
                <Benefits isDark={isDark}/>
            </div>
            <div className="w-full">
                <Shop isDark={isDark}/>
            </div>
            
        </div>
        
    )
}

export default Content