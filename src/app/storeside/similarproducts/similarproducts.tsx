"use client";

import { useRouter } from "next/navigation";
export default function SimilarProducts({
    productname,
    producttype,
}: {
    productname: string,
    producttype: string
}) {
    const similarproducts = [
        {
            id: 1,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://images.meesho.com/images/products/367327785/xc905_400.webp',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            originalprice: '$45',
            percentoff: '15% off',
            color: 'Black',
        },
        {
            id: 2,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://images.meesho.com/images/products/367327785/xc905_400.webp',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            originalprice: '$55',
            percentoff: '25% off',
            color: 'Black',
        },
        {
            id: 3,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://images.meesho.com/images/products/367327785/xc905_400.webp',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            originalprice: '$45',
            percentoff: '15% off',
            color: 'Black',
        },
        {
            id: 4,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://images.meesho.com/images/products/367327785/xc905_400.webp',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            originalprice: '$45',
            percentoff: '15% off',
            color: 'Black',
        },
        {
            id: 5,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://images.meesho.com/images/products/367327785/xc905_400.webp',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            originalprice: '$45',
            percentoff: '15% off',
            color: 'Black',
        },
        {
            id: 6,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://images.meesho.com/images/products/367327785/xc905_400.webp',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            originalprice: '$45',
            percentoff: '15% off',
            color: 'Black',
        },

        {
            id: 7,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://images.meesho.com/images/products/367327785/xc905_400.webp',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            originalprice: '$45',
            percentoff: '15% off',
            color: 'Black',
        }, {
            id: 8,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://images.meesho.com/images/products/367327785/xc905_400.webp',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            originalprice: '$45',
            percentoff: '15% off',
            color: 'Black',
        },
        {
            id: 9,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://images.meesho.com/images/products/367327785/xc905_400.webp',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            originalprice: '$45',
            percentoff: '15% off',
            color: 'Black',
        },
        {
            id: 10,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://images.meesho.com/images/products/367327785/xc905_400.webp',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            originalprice: '$45',
            percentoff: '15% off',
            color: 'Black',
        },
        {
            id: 11,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://images.meesho.com/images/products/367327785/xc905_400.webp',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            originalprice: '$45',
            percentoff: '15% off',
            color: 'Black',
        },
        {
            id: 12,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://images.meesho.com/images/products/367327785/xc905_400.webp',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            originalprice: '$45',
            percentoff: '15% off',
            color: 'Black',
        },
        {
            id: 13,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://images.meesho.com/images/products/367327785/xc905_400.webp',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            originalprice: '$45',
            percentoff: '15% off',
            color: 'Black',
        },
        {
            id: 14,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://images.meesho.com/images/products/367327785/xc905_400.webp',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            originalprice: '$45',
            percentoff: '15% off',
            color: 'Black',
        },
        {
            id: 15,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://images.meesho.com/images/products/367327785/xc905_400.webp',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            originalprice: '$35',
            percentoff: '19% off',
            color: 'Black',
        },
        {
            id: 16,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://images.meesho.com/images/products/367327785/xc905_400.webp',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            originalprice: '$65',
            percentoff: '12% off',
            color: 'Black',
        },
        {
            id: 17,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://images.meesho.com/images/products/367327785/xc905_400.webp',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            originalprice: '$55',
            percentoff: '20% off',
            color: 'Black',
        },
        // More products...
    ]
    const router = useRouter();
    const handleCardClick = (productname: string, productid: string) => {
        // Encode the productname to include %20 for spaces
        const encodedProductName = productname.replace(/\s+/g, "-");

        // Navigate to the dynamic product page
       // router.push(`${pathname}/${encodedProductName}/${productid}`);
        router.push(`/storeside/${encodedProductName}/${productid}`);
    };

    return <>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Similar Product {productname} type {producttype}</h2>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {similarproducts.map((product) => (
                    <div key={product.id} className="group relative" onClick={() => handleCardClick(product.name, product.id.toString())}>
                        <img
                            alt={product.imageAlt}
                            src={product.imageSrc}
                            className="aspect-square w-full rounded-md bg-gray-200 dark:bg-gray-400 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                        />
                        {/* <div className="mt-4 flex justify-between"> */}
                        <div className="mt-4">
                            <h3 className="text-sm font-bold text-gray-700 dark:text-gray-50">
                                <a href={product.href}>
                                    <span aria-hidden="true" className="absolute inset-0" />
                                    {product.name}
                                </a>
                            </h3>
                        </div>
                        <div className="mt-1 flex items-center space-x-2">
                            {/* Discounted Price */}
                            <p className="text-base font-medium text-gray-900 dark:text-gray-100">
                                {product.price}
                            </p>

                            {/* Original Price with Strikethrough */}
                            <p className="text-sm font-normal text-gray-500 dark:text-gray-300 line-through">
                                {product.originalprice}
                            </p>

                            {/* Discount Percentage */}
                            <p className="text-sm font-medium text-green-600">
                                {product.percentoff}
                            </p>
                        </div>
                        {/* </div> */}
                    </div>
                ))}
            </div>
        </div>
    </>
}