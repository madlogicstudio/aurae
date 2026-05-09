'use client'

import Marquee from "react-fast-marquee"
import { useIsMobile } from '../hooks/useIsMobile'

export default function BrandCarousel() {

    const isMobile = useIsMobile()

    return (
        <div className="relative w-full overflow-hidden py-[calc(0.4vw+0.6rem)]">

            <div
                className={`w-full p-[calc(0.4vw+0.6rem)]
                    [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
                    [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
                `}
            >

                <Marquee speed={40} gradient={false} pauseOnHover={true}>

                    {Array(10).fill(0).map((_, i) => (
                        <div key={i} className="cursor-pointer flex">
                            <span title='info' className={`${isMobile? "w-full text-center" : ""}
                            text-[length:var(--normal-font-size)] hovered cursor-pointer fadeIn mx-[calc(0.4vw+0.6rem)]`}>Aurae Afterlight Collection</span>
                            <span title='info' className={`${isMobile? "w-full text-center" : ""}
                            text-[length:var(--normal-font-size)] hovered cursor-pointer fadeIn mx-[calc(0.4vw+0.6rem)]`}>30% Off First Checkout</span>
                        </div>
                    ))}

                </Marquee>

            </div>

        </div>
    )
}