'use client'

import { useIsMobile } from '../hooks/useIsMobile'
import DarkAfterLight from '../assets/Dark-afterlight.png'
import DarkImage from '../assets/Dark-afterlight-img.jpg'
import PinkImage from '../assets/Pink-afterlight-img.png'
import OrangeImage from '../assets/Orange-afterlight-img.png'
import RedImage from '../assets/Red-afterlight-img.png'
import PurpleImage from '../assets/Purple-afterlight-img.jpg'

type HeroProps = {
    isDark: boolean;
}

function Hero({isDark}: HeroProps) {

    const isMobile = useIsMobile();

    return (
        <div className={`${isMobile? "relative h-auto" : "max-w-screen h-screen shrink-0"}
            flex flex-col items-center justify-center`}>
            
            <div className={`${isMobile? "flex-col" : "flex-row p-[calc(0.4vw+0.6rem)]"}
                w-full flex items-center justify-center gap-[calc(0.4vw+0.6rem)]`}>
                
                {!isMobile && <div className='p-[calc(0.4vw+0.6rem)]'>
                    <span className='[writing-mode:vertical-rl] tracking-[0.2em] text-[length:var(--normal-font-size)] hovered cursor-pointer fadeIn'>@aurae.auraeperfume</span>
                </div>} 
                {!isMobile && <div className='flex flex-col items-end justify-center'>
                    <img src={RedImage.src} className='brightness-80 cursor-pointer h-full w-full fadeIn' alt="" />
                </div>}
                <div className="max-w-[520px] flex flex-col items-start justify-center p-[calc(0.4vw+0.6rem)] gap-[calc(0.4vw+0.6rem)]">
                    <span className={`text-[length:var(--normal-font-size)] bg-[var(--pink-color)] hover:text-[var(--white-color)] hover:bg-[var(--blue-color)] 
                        transition duration-300 ease-in-out cursor-pointer fadeIn`}>
                        Featured Perfume
                    </span>
                    <span className='text-[length:var(--hero-font-size)] text-[var(--blue-color)] hovered cursor-pointer fadeIn elms font-bold'>
                        Afterlight
                    </span>
                    {isMobile && 
                        <>
                            <div className='flex-1 w-full flex flex-col items-end justify-center'>
                                <img src={RedImage.src} className='brightness-80 cursor-pointer h-full w-full fadeIn' alt="" />
                            </div>
                            <div className='p-[calc(0.4vw+0.6rem)]'>
                                <span className='tracking-[0.2em] text-[length:var(--normal-font-size)] hovered cursor-pointer fadeIn'>@aurae.auraeperfume</span>
                            </div>
                        </>
                    }
                    <div className='flex flex-row items-start justify-start gap-[calc(0.4vw+0.6rem)] flex-wrap'>
                        <span className={`text-[length:var(--hero-font-size)] text-[var(--pink-color)] hover:text-[var(--blue-color)] 
                            transition duration-300 ease-in-out cursor-pointer fadeIn elms font-bold`}>
                            Aurae
                        </span>
                        <span className='text-[length:var(--hero-font-size)] hovered cursor-pointer fadeIn elms font-bold'>
                            Perfume
                        </span>
                    </div>
                    <span className={`text-[length:var(--hero-font-size)] hovered cursor-pointer fadeIn elms font-bold`}>
                        Collection
                    </span>
                    {!isMobile && <span title='info' className='text-[length:var(--normal-font-size)] hovered leading-relaxed break-words text-left max-w-full cursor-pointer fadeIn'>
                        Step into the glow of the unseen with the Aurae Afterlight Collection<br /> — a fragrance experience inspired by the quiet beauty that lingers after sunset.<br /> 
                        Crafted to capture emotion, mystery, and modern elegance, each scent<br /> in the collection blends luminous florals, warm woods, soft musks, and<br /> sensual 
                        amber notes into unforgettable compositions.
                    </span>}
                    {isMobile && <span title='info' className='text-[length:var(--normal-font-size)] hovered leading-relaxed break-words text-left max-w-full cursor-pointer fadeIn'>
                        Step into the glow of the unseen with the Aurae Afterlight Collection — a fragrance experience inspired by the quiet beauty that lingers after sunset. 
                        Crafted to capture emotion, mystery, and modern elegance, each scent in the collection blends luminous florals, warm woods, soft musks, and sensual 
                        amber notes into unforgettable compositions.
                    </span>}
                </div>
                {!isMobile && <div className='p-[calc(0.4vw+0.6rem)]'>
                    <i className="bx bx-chevron-right text-[length:var(--logo-size)]  hovered cursor-pointer fadeIn" />
                </div>}

            </div>

        </div>  
    )
}

export default Hero