import HeroSlider from '@/components/home/hero-slider'
import Testimonials from '@/components/home/testimonials'
import PromoBanner from '@/components/home/promo-banner'
import ProductGrid from '@/components/product/product-grid'
import OrderingProcess from '@/components/home/ordering-process'
import PromoVideo from '@/components/home/promo-video'
import WhyModfirst from '@/components/home/why-modfirst'
import BlogSection from '@/components/home/blog-section'
import CtaSection from '@/components/home/cta-section'

const data = [
    {
        name: "DTF Adhesive Powder – 1kg Bag",
        price: "PKR 7,100.00",
        imgage_url: "/images/products/DTFAdhesivePowder_2.png",
        id: "1",
        slug: "/home/DTFAdhesivePowder-1"
    },
    {
        name: "DTF Ink (CMYK)",
        price: "PKR 12,800.00",
        imgage_url: "/images/products/DTF_Ink_CMYK.png",
        id: "2",
        slug: "/home/DTFInkCMYK-2"
    },
    {
        name: "DTF White Ink",
        price: "PKR 14,200.00",
        imgage_url: "/images/products/white-ink.png",
        id: "3",
        slug: "/home/DTFWhiteInk-3"
    },
    {
        name: "60cm Hot Peel DTF Film Roll",
        price: "PKR 36,800.00",
        imgage_url: "/images/products/60cmHotPeelDTFFilmRoll.png",
        id: "4",
        slug: "/home/60cmHotPeelDTFFilmRoll-4"
    },
    {
        name: "60cm Cold Peel DTF Film Roll",
        price: "PKR 36,800.00",
        imgage_url: "/images/products/60cmColdPeelDTFFilmRoll_2.png",
        id: "5",
        slug: "/home/60cmColdPeelDTFFilmRoll-5"
    }
];

const page = () => {
    return (
        <>
            <HeroSlider />
            <ProductGrid heading="DTF SUPPLIES Products" data={data} className="py-8 md:py-14" />
            <WhyModfirst />
            <ProductGrid heading="Transfers" data={data} className="py-8 md:py-14" />
            <OrderingProcess />
            <PromoBanner />
            <PromoVideo />
            <Testimonials />
            <BlogSection />
            <CtaSection />
        </>
    )
}

export default page
