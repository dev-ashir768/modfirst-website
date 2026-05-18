"use client";

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
    data: {
        name: string;
        price: string;
        imgage_url: string;
        id: string;
        slug: string;
    }
}

const ProductCard = ({ data }: ProductCardProps) => {
    return (
        <>
            <Link href={data.slug} id={data.id}>
                <Card className='shadow-none ring-0 py-0 gap-3 cursor-pointer'>
                    <CardHeader className='p-0 rounded-xl overflow-hidden'>
                        <Image
                            src={data.imgage_url}
                            alt={data.name}
                            width={500}
                            height={500}
                        />
                    </CardHeader>
                    <CardContent className='p-0'>
                        <CardTitle className='text-xl font-semibold capitalize'>{data.name}</CardTitle>
                        <p className='font-semibold text-muted-foreground text-xl'>{data.price}</p>
                    </CardContent>
                </Card>
            </Link>
        </>
    )
}

export default ProductCard;
