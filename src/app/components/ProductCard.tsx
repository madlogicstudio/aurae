'use client'

import { useIsMobile } from '../hooks/useIsMobile';
import { useRef, useState } from 'react';

type ProductCardProps = {
    name: string;
    image: string;
    price: string;
}

export const ProductCard = ({name, image, price}: ProductCardProps) => {

    const isMobile = useIsMobile();
    const [quantity, setQuantity] = useState(1);

    const [scale, setScale] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const imageDragging = useRef(false);
    const imageStart = useRef({ x: 0, y: 0 });

    const containerRef = useRef<HTMLDivElement>(null);

    const [x, setX] = useState(0);
    const [swipeDragging, setSwipeDragging] = useState(false);
    const [bought, setBought] = useState(false);

    const swipeStart = useRef(0);

    const onImageMouseDown = (e: React.MouseEvent) => {
        if (scale <= 1) return;

        imageDragging.current = true;

        imageStart.current = {
            x: e.clientX - position.x,
            y: e.clientY - position.y,
        };
    };

    const onImageMouseMove = (e: React.MouseEvent) => {
        if (!imageDragging.current) return;

        setPosition({
            x: e.clientX - imageStart.current.x,
            y: e.clientY - imageStart.current.y,
        });
    };

    const stopImageDragging = () => {
        imageDragging.current = false;
    };

    const onSwipeMouseDown = (e: React.MouseEvent) => {
        if (bought) return;

        setSwipeDragging(true);

        swipeStart.current = e.clientX - x;
    };

    const onSwipeMouseMove = (e: React.MouseEvent) => {
        if (!swipeDragging || !containerRef.current) return;

        const containerWidth = containerRef.current.offsetWidth;
        const buttonWidth = 90;

        let newX = e.clientX - swipeStart.current;

        const maxX = containerWidth - buttonWidth;

        newX = Math.max(0, Math.min(newX, maxX));

        setX(newX);

        if (newX >= maxX - 10) {
            setBought(true);
            setSwipeDragging(false);

            alert('Succesfully Bought!');
        }
    };

    const stopSwipeDragging = () => {
        setSwipeDragging(false);

        if (!bought) {
            setX(0);
        }
    };

    return (
        <div className={`${isMobile? "max-w-[160px]" : ""}
            relative flex flex-col items-center justify-center shadow-lg gap-[calc(0.6vw+0.4rem)] bg-[#ffffff] overflow-hidden`}>

            <div className={`${isMobile? "" : ""}
                overflow-hidden flex items-center justify-center bg-[#F5F5F5]`}
                onMouseMove={onImageMouseMove}
                onMouseUp={stopImageDragging}
                onMouseLeave={stopImageDragging}>
                <img src={image}
                    alt="Obelisk Perfume"
                    draggable={false}
                    onMouseDown={onImageMouseDown}
                    onWheel={(e) => {
                        e.preventDefault();

                        const nextScale =
                            e.deltaY < 0
                                ? Math.min(scale + 0.2, 3)
                                : Math.max(scale - 0.2, 1);

                        setScale(nextScale);

                        if (nextScale === 1) {
                            setPosition({ x: 0, y: 0 });
                        }
                    }}
                    style={{transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                        cursor:
                            scale <= 1
                                ? 'default'
                                : imageDragging.current
                                    ? 'grabbing'
                                    : 'grab',
                        transition:
                            imageDragging.current
                                ? 'none'
                                : 'transform 120ms ease',
                    }}
                    className={`${isMobile? "max-h-[160px] w-full" : "max-h-[360px] max-w-[360px]"}
                        select-none will-change-transform`}
                />
            </div>

            <div className='gap-[calc(0.6vw+0.4rem)] p-[calc(0.6vw+0.4rem)] w-full flex flex-col items-start justify-center'>

                <span className='italic text-[#CDC9C3] text-[length:var(--normal-font-size)]'>
                    Hover & scroll up to inspect
                </span>
                
                <div className='flex flex-row items-center justify-center gap-[calc(0.4vw+0.3rem)]'>
                    <span className='font-semibold text-[#555555] text-[length:var(--normal-font-size)]'>
                        {name}
                    </span>
                </div>

                <div className='w-full flex flex-col items-start justify-start gap-[calc(0.4vw+0.3rem)]'>

                    {!isMobile && <div className='w-full flex flex-row items-center justify-between gap-[calc(0.4vw+0.3rem)] py-[calc(0.4vw+0.3rem)]'>

                        <div className='flex flex-row items-center justify-start gap-[calc(0.4vw+0.3rem)] flex-wrap'>

                            <span className='text-[length:var(--normal-font-size)]'>Quantity</span>

                            <div className='flex flex-row items-center justify-center gap-[calc(0.4vw+0.3rem)] bg-gray-100'>

                                <i className="bx bx-minus text-[calc(0.6vw+0.4rem)] cursor-pointer pl-[1rem] pr-[0.5rem]"
                                    onClick={() =>
                                        setQuantity(Math.max(1, quantity - 1))
                                    }
                                />

                                <span className='py-[0.5rem] text-[length:var(--small-font-size)]'>
                                    {quantity}
                                </span>

                                <i className="bx bx-plus text-[calc(0.6vw+0.4rem)] cursor-pointer pl-[0.5rem] pr-[1rem]"
                                    onClick={() =>
                                        setQuantity(quantity + 1)
                                    }
                                />
                            </div>

                        </div>

                        <i className="bx bx-cart-plus text-[1.8rem] text-[#555555] cursor-pointer hover:text-[#CDC9C3]
                            transition duration-300 ease-in-out" onClick={() => alert("Added to cart")} />
                    </div>}

                    {!isMobile && <div ref={containerRef}
                        className='w-full relative flex flex-row items-center justify-between rounded-xl bg-[#CDC9C3] overflow-hidden'
                        onMouseMove={onSwipeMouseMove}
                        onMouseUp={stopSwipeDragging}
                        onMouseLeave={stopSwipeDragging}>
                        <span onMouseDown={onSwipeMouseDown}
                            style={{
                                transform: `translateX(${x}px)`,
                                transition:
                                    swipeDragging
                                        ? 'none'
                                        : 'transform 0.2s ease',
                            }}
                            className='text-white cursor-grab active:cursor-grabbing bg-[#555555] p-[calc(0.4vw+0.6rem)] rounded-xl z-10 select-none
                                text-[length:var(--normal-font-size)]'>
                            {bought ? '$30' : '$30'}
                        </span>

                        <span className='italic text-sm p-[calc(0.4vw+0.6rem)] text-white w-full text-center pointer-events-none
                            text-[length:var(--normal-font-size)]'>
                            {bought ? 'Purchase complete' : 'Swipe to buy'}
                        </span>
                    </div>}

                    {isMobile && 
                        <div className='w-full flex flex-row items-center justify-between'>
                            <span className='text-[#555555] text-[length:var(--small-font)]'>
                                {price}
                            </span>
                            <i className="bx bx-cart-plus text-[length:var(--icon-size)] text-[#555555] cursor-pointer hover:text-[#CDC9C3]
                                transition duration-300 ease-in-out" onClick={() => alert("Added to cart")} />
                        </div>
                    }

                </div>
            </div>
        </div>
    );
};