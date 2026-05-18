import React from 'react'
import HeroSlider from '@/components/home/hero-slider'
import Testimonials from '@/components/home/testimonials'
import PromoBanner from '@/components/home/promo-banner'

const page = () => {
    return (
        <>
            <HeroSlider />
            <PromoBanner />
            <Testimonials />
        </>
    )
}

export default page
