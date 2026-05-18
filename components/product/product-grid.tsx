"use client";

import React from 'react'
import ProductCard from './product-card'
import { Carousel, CarouselContent, CarouselItem, CarouselDots } from '../ui/carousel'
import { cn } from '@/lib/utils';
import Autoplay from 'embla-carousel-autoplay';

interface ProductGridProps {
    heading: string
    data: {
        name: string;
        price: string;
        imgage_url: string;
        id: string;
        slug: string;
    }[]
    className?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ heading, data, className }) => {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true }),
    );

    return (
        <>
            <div className={cn("container", className)}>
                <h2 className="font-heading font-semibold text-lg md:text-3xl lg:text-5xl mb-4">{heading}</h2>
                <Carousel
                    plugins={[plugin.current]}
                    className="w-full"
                    opts={{
                        align: "start",
                    }}
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                >
                    <CarouselContent className="-ml-2">
                        {data.map((product) => (
                            <CarouselItem key={product.id} className="pl-2 md:basis-1/2 lg:basis-1/4">
                                <div className="aspect-square p-1">
                                    <ProductCard data={product} />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselDots className="w-max mx-auto mt-6 cursor-pointer" />
                </Carousel>
            </div>
        </>
    )
}

export default ProductGrid
