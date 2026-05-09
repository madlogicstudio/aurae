import { useIsMobile } from "../hooks/useIsMobile"

type BenefitsProps = {
    isDark: boolean;
}

function Benefits({isDark}: BenefitsProps) {

    const isMobile = useIsMobile();

    return (
        <div className={`${isMobile? "flex-col h-auto py-[calc(0.4vw+0.6rem)]" : "flex-row h-auto w-full"}
            flex items-center justify-center p-[calc(0.4vw+0.6rem)] gap-[calc(0.4vw+0.6rem)]`}>

            <div id="box-1" className={`${isMobile? "max-w-[320px]" : "max-w-[380px] min-h-[420px]"}
                h-auto flex flex-col items-center justify-center shadow-lg gap-[calc(0.4vw+0.6rem)] p-[calc(0.4vw+0.6rem)]`}>
                <i className="bx bx-thumb-up text-[length:var(--logo-size)] hovered cursor-pointer fadeIn" />
                <span className='text-[length:var(--medium-font-size)] hovered cursor-pointer fadeIn elms font-bold'>
                    Best Product
                </span>
                <span title='info' className='text-[length:var(--normal-font-size)] hovered leading-relaxed break-words text-center max-w-full cursor-pointer fadeIn'>
                    Crafted with premium fragrance oils and long-lasting extrait-inspired blends, Aurae perfumes are designed to leave a memorable impression from day to night. 
                </span>
            </div>
            <div id="box-2" className={`${isMobile? "max-w-[320px]" : "max-w-[380px] min-h-[420px]"}
                h-auto flex flex-col items-center justify-center shadow-lg gap-[calc(0.4vw+0.6rem)] p-[calc(0.4vw+0.6rem)]`}>
                <i className="bx bx-truck text-[length:var(--logo-size)] hovered cursor-pointer fadeIn" />
                <span className='text-[length:var(--medium-font-size)] hovered cursor-pointer fadeIn elms font-bold'>
                    Free Shipping
                </span>
                <span title='info' className='text-[length:var(--normal-font-size)] hovered leading-relaxed break-words text-center max-w-full cursor-pointer fadeIn'>
                    Enjoy free nationwide shipping on selected orders. Every Aurae package is securely packed to ensure your fragrance arrives safely, beautifully presented, and ready to wear or gift.
                </span>
            </div>
            <div id="box-3" className={`${isMobile? "max-w-[320px]" : "max-w-[380px] min-h-[420px]"}
                h-auto flex flex-col items-center justify-center shadow-lg gap-[calc(0.4vw+0.6rem)] p-[calc(0.4vw+0.6rem)]`}>
                <i className="bx bx-seal-check text-[length:var(--logo-size)] hovered cursor-pointer fadeIn" />
                <span className='text-[length:var(--medium-font-size)] hovered cursor-pointer fadeIn elms font-bold'>
                    Guarantee
                </span>
                <span title='info' className='text-[length:var(--normal-font-size)] hovered leading-relaxed break-words text-center max-w-full cursor-pointer fadeIn'>
                    We stand behind the quality of every Aurae fragrance. If your order arrives damaged or incorrect, our support team will assist you with a replacement or resolution to ensure a smooth shopping experience.
                </span>
            </div>


        </div>
    )
}

export default Benefits