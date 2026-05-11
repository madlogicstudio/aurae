import { useIsMobile } from "../hooks/useIsMobile"
import { ProductCard } from "../components/ProductCard"
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

            <div className="flex flex-col items-center justify-center flex-wrap py-[calc(0.4vw+0.6rem)] gap-[calc(0.4vw+0.6rem)]">

                <div className="flex flex-row items-center justify-center flex-wrap gap-[calc(0.4vw+0.6rem)]">
                    <ProductCard name={"Dark Eau Perfume"} image={Dark.src} price={"$30"} />
                    <ProductCard name={"Dark Eau Perfume"} image={Dark.src} price={"$30"} />
                    <ProductCard name={"Dark Eau Perfume"} image={Dark.src} price={"$30"} />
                    <ProductCard name={"Dark Eau Perfume"} image={Dark.src} price={"$30"} />
                </div>
                <div className="flex flex-row items-center justify-center flex-wrap gap-[calc(0.4vw+0.6rem)]">
                    <ProductCard name={"Dark Eau Perfume"} image={Dark.src} price={"$30"} />
                    <ProductCard name={"Dark Eau Perfume"} image={Dark.src} price={"$30"} />
                    <ProductCard name={"Dark Eau Perfume"} image={Dark.src} price={"$30"} />
                    <ProductCard name={"Dark Eau Perfume"} image={Dark.src} price={"$30"} />
                </div>

            </div>

        </div>
    )
}

export default Shop