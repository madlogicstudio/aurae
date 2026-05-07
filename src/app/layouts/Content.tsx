'use client'

import { useIsMobile } from "../hooks/useIsMobile";
import { useRef, useEffect } from "react";
import Hero from "./Hero"

type ContentProps = {
    isDark: boolean;
}

function Content({isDark}: ContentProps) {

    const isMobile = useIsMobile();

    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.5;
        }
    }, []);

    return (
        <>
            {!isMobile && <div className={`${isMobile? "h-auto" : "h-screen"}
                ${isDark? "text-[var(--light-color)] bg-[var(--dark-color)]" : "bg-[var(--light-color)] text-[var(--dark-color)]"}
                h-screen w-screen flex flex-row items-center justify-start overflow-x-scroll overflow-y-hidden
                snap-x snap-mandatory scrollbar-hide whitespace-nowrap`}>
                
                <div className="min-w-screen shrink-0 h-screen snap-start flex flex-col items-center justify-center"> 
                    <Hero isDark={isDark}/>
                </div>
                <div className="min-w-screen shrink-0 h-screen snap-start flex flex-col items-center justify-center">   
                    Page 2
                    {/* <Hero isDark={isDark}/> */}
                </div>
                
            </div>}
            {isMobile && <div className={`${isMobile? "h-auto" : "h-screen"}
                ${isDark? "text-[var(--light-color)] bg-[var(--dark-color)]" : "bg-[var(--light-color)] text-[var(--dark-color)]"}
                h-screen w-screen flex flex-col items-center justify-start overflow-hidden`}>
                
                <Hero isDark={isDark}/>
                
            </div>}
        </>
        
    )
}

export default Content