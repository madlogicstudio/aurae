'use client'

import { useIsMobile } from '../hooks/useIsMobile'
import DarkAfterLight from '../assets/Dark-afterlight.png'
import DarkImage from '../assets/Dark-afterlight-img.jpg'
import PinkImage from '../assets/Pink-afterlight-img.png'
import OrangeImage from '../assets/Orange-afterlight-img.png'
import RedImage from '../assets/Red-afterlight-img.png'
import PurpleImage from '../assets/Purple-afterlight-img.jpg'
import RedTransparent from '../assets/Red-afterlight-img-transparent.png'
import ImageCarousel from '../components/ImageCarousel'

type HeroProps = {
    isDark: boolean;
}

function Hero({isDark}: HeroProps) {

    const isMobile = useIsMobile();

    return (
        <div className={`${isMobile? "relative h-auto" : "h-auto w-full"}
            flex flex-col items-center justify-center`}>
            
            <div className={`${isMobile? "flex-col py-[calc(0.4vw+0.6rem)]" : "flex-row p-[calc(0.4vw+0.6rem)]"}
                flex items-center justify-center gap-[calc(0.4vw+0.6rem)]`}>
                
                {!isMobile && <div className='h-full p-[calc(0.4vw+0.6rem)] [writing-mode:vertical-rl] tracking-[0.2em] flex justify-center gap-[calc(0.4vw+0.6rem)]'>
                    <span className='text-[length:var(--normal-font-size)] hovered cursor-pointer fadeIn'>@aurae.auraeperfume</span>
                    <div className='w-full flex flex-row items-center justify-end gap-[calc(0.4vw+0.6rem)]'>
                        <i className="bxl bx-facebook text-[length:var(--icon-size)] hovered cursor-pointer fadeIn" />
                        <i className="bxl bx-instagram text-[length:var(--icon-size)] hovered cursor-pointer fadeIn" />
                        <i className="bxl bx-tiktok text-[length:var(--icon-size)] hovered cursor-pointer fadeIn" />
                    </div>
                </div>} 
                {!isMobile && <div className='flex-1 flex flex-col items-center justify-center'>
                    <ImageCarousel />
                </div>}
                <div className="flex-1 flex flex-col items-start justify-center p-[calc(0.4vw+0.6rem)] gap-[calc(0.4vw+0.6rem)]">
                    {!isMobile && <span className={`${isMobile? "w-full text-center" : ""}
                        text-[length:var(--normal-font-size)] bg-[var(--pink-color)] hover:text-[var(--white-color)] hover:bg-[var(--blue-color)] 
                        transition duration-300 ease-in-out cursor-pointer fadeIn`}>
                        Featured Perfume
                    </span>}
                    {isMobile && 
                        <div className='w-full flex flex-row items-center justify-center'>
                            <span className={`${isMobile? "text-center" : ""}
                                text-[length:var(--normal-font-size)] bg-[var(--pink-color)] hover:text-[var(--white-color)] hover:bg-[var(--blue-color)] 
                                transition duration-300 ease-in-out cursor-pointer fadeIn`}>
                                Featured Perfume
                            </span>
                        </div>
                    }
                    <span className={`${isMobile? "w-full text-center" : ""}
                        text-[length:var(--hero-font-size)] text-[var(--blue-color)] hovered cursor-pointer fadeIn elms font-bold`}>
                        Afterlight
                    </span>
                    {isMobile && 
                        <>
                            <div className='flex-1 w-full flex flex-col items-end justify-center'>
                                {/* <img src={RedImage.src} className='brightness-80 cursor-pointer h-full w-full fadeIn' alt="" /> */}
                                <ImageCarousel />
                            </div>
                            <div className={`${isMobile? "w-full text-center" : ""}
                                p-[calc(0.4vw+0.6rem)]`}>
                                <span className='tracking-[0.2em] text-[length:var(--normal-font-size)] hovered cursor-pointer fadeIn'>@aurae.auraeperfume</span>
                            </div>
                        </>
                    }
                    <div className={`${isMobile? "w-full justify-center" : "justify-start"}
                        flex flex-row items-start gap-[calc(0.4vw+0.6rem)] flex-wrap`}>
                        <span className={`text-[length:var(--hero-font-size)] text-[var(--pink-color)] hover:text-[var(--blue-color)] 
                            transition duration-300 ease-in-out cursor-pointer fadeIn elms font-bold`}>
                            Aurae
                        </span>
                        <span className='text-[length:var(--hero-font-size)] hovered cursor-pointer fadeIn elms font-bold'>
                            Perfume
                        </span>
                    </div>
                    <span className={`${isMobile? "w-full text-center" : ""}
                        text-[length:var(--hero-font-size)] hovered cursor-pointer fadeIn elms font-bold`}>
                        Collection
                    </span>
                    <span title='info' className={`${isMobile? "w-full text-center" : ""}
                        text-[length:var(--normal-font-size)] hovered cursor-pointer fadeIn`}>
                        Step into the glow of the unseen with the Aurae Afterlight Collection — a fragrance experience inspired by the quiet beauty that lingers after sunset 
                        Crafted to capture emotion, mystery, and modern elegance, each scent in the collection blends luminous florals, warm woods, soft musks, and sensual 
                        amber notes into unforgettable compositions.
                    </span>
                </div>

            </div>

        </div>  
    )
}

export default Hero