'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { useEffect } from 'react'
import { useCallback } from 'react'
import { useIsMobile } from '../hooks/useIsMobile'

import DarkImage from '../assets/Dark-afterlight-img.jpg'
import PinkImage from '../assets/Pink-afterlight-img.png'
import OrangeImage from '../assets/Orange-afterlight-img.png'
import RedImage from '../assets/Red-afterlight-img.png'
import PurpleImage from '../assets/Purple-afterlight-img.jpg'

export default function ImageCarousel() {

    const isMobile = useIsMobile();
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return

        const interval = setInterval(() => {
            emblaApi.scrollNext()
        }, 3000)

        return () => clearInterval(interval)
    }, [emblaApi])

    return (
        <div className="w-full">
            
            <div className={`${isMobile? "h-auto" : "h-[740px]"}
                h-[740px] w-full overflow-hidden`} ref={emblaRef}>
                
                <div className="flex">

                    <div className="min-w-full flex items-center justify-center">
                        <img src={RedImage.src} className={`${isMobile? "" : ""}
                            brightness-80 cursor-pointer h-full w-full fadeIn`} alt="" />
                        {/* filter saturate-0 hover:saturate-100 transition duration-300 ease-in-out */}
                    </div>
                    <div className="min-w-full flex items-center justify-center">
                        <img src={PurpleImage.src} className={`${isMobile? "" : ""}
                            brightness-80 cursor-pointer h-full w-full fadeIn`} alt="" />
                    </div>
                    <div className="min-w-full flex items-center justify-center">
                        <img src={DarkImage.src} className={`${isMobile? "" : ""}
                            brightness-80 cursor-pointer h-full w-full fadeIn`} alt="" />
                    </div>
                    <div className="min-w-full flex items-center justify-center">
                        <img src={OrangeImage.src} className={`${isMobile? "" : ""}
                            brightness-80 cursor-pointer h-full w-full fadeIn`} alt="" />
                    </div>
                    <div className="min-w-full flex items-center justify-center">
                        <img src={PinkImage.src} className={`${isMobile? "" : ""}
                            brightness-80 cursor-pointer h-full w-full fadeIn`} alt="" />
                    </div>

                </div>
            </div>

            <div className="flex flex-row items-cente justify-center gap-[calc(0.4vw+0.6rem)] p-[calc(0.4vw+0.6rem)]">
                <button onClick={scrollPrev}>
                    <i className="bx bx-chevron-left text-[length:var(--icon-size)] hovered cursor-pointer fadeIn" />
                </button>
                <button onClick={scrollNext}>
                    <i className="bx bx-chevron-right text-[length:var(--icon-size)] hovered cursor-pointer fadeIn" />
                </button>
            </div>

        </div>
    )
}