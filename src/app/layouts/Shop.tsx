import { useIsMobile } from "../hooks/useIsMobile"
import Dark from '../assets/Dark.png'
import Red from '../assets/Red.png'
import Orange from '../assets/Orange.png'
import Purple from '../assets/Purple.png'
import Sanctum from '../assets/Sanctum.png'
import Stellar from '../assets/Stellar.png'
import Charm from '../assets/Charm.png'
import Obelisk from '../assets/Obelisk.png'

import { useEffect } from "react"

type ShopProps = {
    isDark: boolean;
}

function Shop({isDark}: ShopProps) {
    
    const isMobile = useIsMobile();

    return (
        <div className={`${isMobile ? "relative h-auto" : "w-full h-auto"}
            flex flex-col items-center justify-start my-[calc(0.4vw+0.6rem)]`}>

            <div className="w-full flex flex-row items-center justify-between p-[calc(0.4vw+0.6rem)]">

                <span className="text-[length:var(--large-font-size)] hovered cursor-pointer fadeIn elms font-bold">Fragrance</span>

                <span className="text-[length:var(--normal-font-size)] p-[calc(0.4vw+0.6rem)] hovered cursor-pointer fadeIn">[ 8 Items ]</span>

            </div>

            <div className="w-full flex flex-row items-center justify-end p-[calc(0.4vw+0.6rem)]">

                <div className="w-full flex flex-row items-center justify-end p-[calc(0.4vw+0.6rem)] gap-[calc(0.4vw+0.6rem)] shadow-lg">
                    <span className="text-[length:var(--normal-font-size)] hovered cursor-pointer fadeIn">Filter: </span>
                    <span className="text-[length:var(--normal-font-size)] hovered cursor-pointer fadeIn text-gray-300">Recommended</span>
                    <i className="bx bx-chevron-down text-[length:var(--icon-size)] hovered cursor-pointer fadeIn" />
                </div>

            </div>

            <div className="flex flex-row items-center justify-center flex-wrap py-[calc(0.4vw+0.6rem)]">

                <div className="flex flex-row items-center justify-center flex-wrap gap-[calc(0.4vw+0.6rem)]">
                    <div className="flex flex-col items-start justify-start gap-[calc(0.4vw+0.6rem)]">
                        <img src={Dark.src} className="h-[calc(13vw+7rem)] w-[calc(13vw+7rem)] cursor-pointer" alt="" />
                        <span className="text-[length:var(--normal-font-size)] hovered cursor-pointer fadeIn">Dark Eau De Parfum</span>
                        <div className="w-full flex flex-row items-center justify-between gap-[calc(0.4vw+0.6rem)]">
                            <span className="text-[length:var(--normal-font-size)] hovered cursor-pointer fadeIn text-gray-500">$20</span>
                            <i className="bx bx-cart-plus text-[length:var(--icon-size)] hovered cursor-pointer fadeIn" />
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[calc(0.4vw+0.6rem)]">
                        <img src={Red.src} className="h-[calc(13vw+7rem)] w-[calc(13vw+7rem)] cursor-pointer" alt="" />
                        <span className="text-[length:var(--normal-font-size)] hovered cursor-pointer fadeIn">Blood Eau De Parfum</span>
                        <div className="w-full flex flex-row items-center justify-between gap-[calc(0.4vw+0.6rem)]">
                            <span className="text-[length:var(--normal-font-size)] hovered cursor-pointer fadeIn text-gray-500">$20</span>
                            <i className="bx bx-cart-plus text-[length:var(--icon-size)] hovered cursor-pointer fadeIn" />
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[calc(0.4vw+0.6rem)]">
                        <img src={Orange.src} className="h-[calc(13vw+7rem)] w-[calc(13vw+7rem)] cursor-pointer" alt="" />
                        <span className="text-[length:var(--normal-font-size)] hovered cursor-pointer fadeIn">Sol Eau De Parfum</span>
                        <div className="w-full flex flex-row items-center justify-between gap-[calc(0.4vw+0.6rem)]">
                            <span className="text-[length:var(--normal-font-size)] hovered cursor-pointer fadeIn text-gray-500">$20</span>
                            <i className="bx bx-cart-plus text-[length:var(--icon-size)] hovered cursor-pointer fadeIn" />
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[calc(0.4vw+0.6rem)]">
                        <img src={Purple.src} className="h-[calc(13vw+7rem)] w-[calc(13vw+7rem)] cursor-pointer" alt="" />
                        <span className="text-[length:var(--normal-font-size)] hovered cursor-pointer fadeIn">Grape Eau De Parfum</span>
                        <div className="w-full flex flex-row items-center justify-between gap-[calc(0.4vw+0.6rem)]">
                            <span className="text-[length:var(--normal-font-size)] hovered cursor-pointer fadeIn text-gray-500">$20</span>
                            <i className="bx bx-cart-plus text-[length:var(--icon-size)] hovered cursor-pointer fadeIn" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-center flex-wrap gap-[calc(0.4vw+0.6rem)] py-[calc(0.4vw+0.6rem)]">
                    <div className="flex flex-col items-start justify-start gap-[calc(0.4vw+0.6rem)]">
                        <img src={Sanctum.src} className="h-[calc(13vw+7rem)] w-[calc(13vw+7rem)] cursor-pointer" alt="" />
                        <span className="text-[length:var(--normal-font-size)] hovered cursor-pointer fadeIn">Sanctum Eau De Parfum</span>
                        <div className="w-full flex flex-row items-center justify-between gap-[calc(0.4vw+0.6rem)]">
                            <span className="text-[length:var(--normal-font-size)] hovered cursor-pointer fadeIn text-gray-500">$30</span>
                            <i className="bx bx-cart-plus text-[length:var(--icon-size)] hovered cursor-pointer fadeIn" />
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[calc(0.4vw+0.6rem)]">
                        <img src={Charm.src} className="h-[calc(13vw+7rem)] w-[calc(13vw+7rem)] cursor-pointer" alt="" />
                        <span className="text-[length:var(--normal-font-size)] hovered cursor-pointer fadeIn">Charm Eau De Parfum</span>
                        <div className="w-full flex flex-row items-center justify-between gap-[calc(0.4vw+0.6rem)]">
                            <span className="text-[length:var(--normal-font-size)] hovered cursor-pointer fadeIn text-gray-500">$40</span>
                            <i className="bx bx-cart-plus text-[length:var(--icon-size)] hovered cursor-pointer fadeIn" />
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[calc(0.4vw+0.6rem)]">
                        <img src={Stellar.src} className="h-[calc(13vw+7rem)] w-[calc(13vw+7rem)] cursor-pointer" alt="" />
                        <span className="text-[length:var(--normal-font-size)] hovered cursor-pointer fadeIn">Stellar Eau De Parfum</span>
                        <div className="w-full flex flex-row items-center justify-between gap-[calc(0.4vw+0.6rem)]">
                            <span className="text-[length:var(--normal-font-size)] hovered cursor-pointer fadeIn text-gray-500">$50</span>
                            <i className="bx bx-cart-plus text-[length:var(--icon-size)] hovered cursor-pointer fadeIn" />
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[calc(0.4vw+0.6rem)]">
                        <img src={Obelisk.src} className="h-[calc(13vw+7rem)] w-[calc(13vw+7rem)] cursor-pointer" alt="" />
                        <span className="text-[length:var(--normal-font-size)] hovered cursor-pointer fadeIn">Obelisk Eau De Parfum</span>
                        <div className="w-full flex flex-row items-center justify-between gap-[calc(0.4vw+0.6rem)]">
                            <span className="text-[length:var(--normal-font-size)] hovered cursor-pointer fadeIn text-gray-500">$50</span>
                            <i className="bx bx-cart-plus text-[length:var(--icon-size)] hovered cursor-pointer fadeIn" />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Shop