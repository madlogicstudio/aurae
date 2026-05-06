'use client'

import Landing from '../assets/Landing.webp'

type ContentProps = {
    isDark: boolean;
}

function Content({isDark}: ContentProps) {
  return (
    <div className={`h-screen w-full flex flex-col items-center justify-center overflow-hidden`}>
        <div className='relative h-screen w-full flex-1 w-full'>
            <img src={Landing.src} className='h-[120%] w-full object-cover brightness-80' alt="" />
            <div className="absolute inset-0 flex flex-col items-start justify-end p-[calc(0.4vw+0.6rem)] gap-[calc(0.4vw+0.6rem)]">
                <span className="text-[length:var(--medium-font-size)] text-[color:var(--light-color)] fadeIn">
                    New unique collection
                </span>
                <span className="text-[clamp(3.5rem,5.5vw,12rem)] font-bold text-[color:var(--light-color)] fadeIn">
                    Aurae Fragrance
                </span>
                <span className="text-[length:var(--medium-font-size)] max-w-[460px] text-[color:var(--light-color)] fadeIn">
                    Aurae Radiance is a fragrance designed to capture the first radiant moments of morning. 
                    It is a captivating, balanced blend that settles intimately on the skin, offering a warm and inviting trail throughout the day. 
                    Embrace your inner aura.
                </span>
                <div className='flex flex-row items-center justify-center py-[calc(0.4vw+0.6rem)] gap-[calc(0.4vw+0.6rem)]'>
                    <span className="text-[length:var(--medium-font-size)] text-[color:var(--white-color)] fadeIn">
                        Learn more
                    </span>
                    <i className="bx bx-chevron-right p-[calc(0.4vw+0.6rem)] text-[clamp(20px,1vw+0.5rem,24px)] rounded-full bg-white cursor-pointer
                        hover:bg-[var(--pink-color)] text-[color:var(--dark-color)] transition duration-300 ease-in-out" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Content