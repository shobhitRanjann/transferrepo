"use client";

import React, { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { Radio, RadioGroup } from '@headlessui/react'
import SimilarProducts from '../../similarproducts/similarproducts';
import { UseCart } from '../../content/CartContext';


function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

function ClientComponent({
    product,
    productname,
    productid,
}: {
    product: {
        id: string
        name: string;
        price: string;
        originalprice: string,
        href: string;
        breadcrumbs: { id: number; name: string; href: string }[];
        images: { src: string; alt: string }[];
        colors: { name: string; class: string; selectedClass: string }[];
        sizes: { name: string; inStock: boolean }[];
        description: string;
        highlights: string[];
        details: string;
    };
    productname: string;
    productid: string;
}) {
    const [selectedColor, setSelectedColor] = useState(product.colors[0]);
    const [selectedSize, setSelectedSize] = useState(product.sizes[2]);


    const reviews = { href: '#', average: 3, totalCount: 117 }

    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = product.images;

    const totalSlides = slides.length;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1));
    };

    type CartItem = {
        id: string;
        productname: string;
        imagelink: string;
        productPrice: number;
        originalprice: number;
        quantity: number;
        productId: string;
    };

    const { addToCart } = UseCart();
    const handleAddToCart = (product: CartItem, event: React.MouseEvent) => {
        event.preventDefault();
        console.log('from Clientcomponent , ', product);
        addToCart(product);
    };

    return (
        <div className="bg-white dark:bg-gray-800">
            <div className="pt-6">
                <nav aria-label="Breadcrumb">
                    <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        {product.breadcrumbs.map((breadcrumb) => (
                            <li key={breadcrumb.id}>
                                <div className="flex items-center">
                                    <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900 dark:text-gray-50">
                                        {breadcrumb.name}
                                    </a>
                                    <svg
                                        fill="currentColor"
                                        width={16}
                                        height={20}
                                        viewBox="0 0 16 20"
                                        aria-hidden="true"
                                        className="h-5 w-4 text-gray-300 dark:text-gray-100"
                                    >
                                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                    </svg>
                                </div>
                            </li>
                        ))}
                        <li className="text-sm">
                            <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-400">
                                {productname}
                            </a>
                        </li>
                    </ol>
                </nav>

                {/* Image gallery */}
                <div className="mx-auto mt-6 max-w-2xl px-4 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">






                    {/* <div className="duration-700 ease-in-out" data-carousel-item>
            <img key={index} src= className="aspect-4/5 size-full object-cover sm:rounded-lg lg:aspect-auto" alt={item.alt}/>
        </div> */}

                    <div className="carousel carousel-center bg-neutral rounded-box max-w-md space-x-4" key={1}>



                        <div className="relative w-full max-w-3xl mx-auto mt-8">
                            {/* Carousel Wrapper */}
                            <div className="overflow-hidden relative">
                                <div
                                    className="flex transition-transform duration-500 ease-in-out"
                                    style={{
                                        transform: `translateX(-${currentIndex * 100}%)`,
                                    }}
                                >
                                    {/* Slides */}
                                    {slides.map((src, index) => (
                                        <div key={index} className="flex-none w-full h-full bg-gray-200 flex justify-center items-center dark:bg-gray-800">
                                            <img src={src.src} alt={`Slide ${index + 1}`} className="aspect-4/5 size-full object-cover sm:rounded-lg lg:aspect-auto" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Carousel Controls */}
                            <button
                                onClick={prevSlide}
                                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-600 text-white px-4 py-2 rounded-full focus:outline-none dark:text-gray-400"
                            >
                                ←
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-600 text-white px-4 py-2 rounded-full focus:outline-none dark:text-gray-400"
                            >
                                →
                            </button>
                        </div>
                    </div>



                    <div className="mt-4 lg:row-span-1 lg:mt-0">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-gray-50">{productname}</h1>
                        <p className="text-3xl tracking-tight text-gray-900 leading-10 line-through dark:text-gray-50">₹ {product.originalprice}</p>
                        <span className="text-sm text-red-500 bg-yellow-100 px-2 py-1 rounded-md">
                            {(((Number(product.originalprice) - Number(product.price)) / Number(product.originalprice)) * 100).toFixed(2)} % OFF
                        </span>
                        <p className="text-3xl tracking-tight text-gray-900 leading-10 dark:text-gray-50">₹ {product.price}</p>

                        {/* Reviews */}
                        <div className="mt-6">
                            <h3 className="sr-only">Reviews</h3>
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    {[0, 1, 2, 3, 4].map((rating) => (
                                        <StarIcon
                                            key={rating}
                                            aria-hidden="true"
                                            className={classNames(
                                                reviews.average > rating ? 'text-gray-900 dark:text-gray-500' : 'text-gray-200 dark:text-gray-100',
                                                'size-5 shrink-0',
                                            )}
                                        />
                                    ))}
                                </div>
                                <p className="sr-only">{reviews.average} out of 5 stars</p>
                                <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                    {reviews.totalCount} reviews
                                </a>
                            </div>
                        </div>
                        {/*Small Details of product*/}
                        <div className="mt-10">
                            <div className="flex items-center">
                                <h3 className="text-2xl font-medium text-gray-900 dark:text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, voluptates!</h3>
                            </div>
                        </div>

                        <form className="mt-10">
                            {/* Colors */}
                            <div>
                                <h3 className="text-sm font-medium text-gray-900 dark:text-gray-300">Color</h3>

                                <fieldset aria-label="Choose a color" className="mt-4">
                                    <RadioGroup value={selectedColor} onChange={setSelectedColor} className="flex items-center gap-x-3">
                                        {product.colors.map((color) => (
                                            <Radio
                                                key={color.name}
                                                value={color}
                                                aria-label={color.name}
                                                className={classNames(
                                                    color.selectedClass,
                                                    'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-hidden data-checked:ring-2 data-focus:data-checked:ring-3 data-focus:data-checked:ring-offset-1',
                                                )}
                                            >
                                                <span
                                                    aria-hidden="true"
                                                    className={classNames(color.class, 'size-8 rounded-full border border-black/10 dark:border-gray-200')}
                                                />
                                            </Radio>
                                        ))}
                                    </RadioGroup>
                                </fieldset>
                            </div>

                            {/* Sizes */}
                            <div className="mt-10">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-sm font-medium text-gray-900 dark:text-gray-300">Size <p className='dark:text-orange-500'>{selectedSize.name}</p></h3>
                                    <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                        Size guide
                                    </a>
                                </div>

                                <fieldset aria-label="Choose a size" className="mt-4">
                                    <RadioGroup
                                        value={selectedSize}
                                        onChange={setSelectedSize}
                                        className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                                    >
                                        {product.sizes.map((size) => (
                                            <Radio
                                                key={size.name}
                                                value={size}
                                                disabled={!size.inStock}
                                                className={classNames(
                                                    size.inStock
                                                        ? 'cursor-pointer  text-gray-900 shadow-xs dark:bg-gray-500 dark:text-gray-50'
                                                        : 'cursor-not-allowed bg-gray-50 text-gray-200 dark:bg-gray-500',
                                                    'group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-hidden data-focus:ring-2 data-focus:ring-indigo-500 sm:flex-1 sm:py-6',
                                                    selectedSize.name === size.name ? 'bg-orange-300 dark:bg-orange-800' : '',
                                                )}
                                            >
                                                <span>{size.name}</span>
                                                {size.inStock ? (
                                                    <span
                                                        aria-hidden="true"
                                                        className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-checked:border-indigo-500 group-data-focus:border"
                                                    />
                                                ) : (
                                                    <span
                                                        aria-hidden="true"
                                                        className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                                    >
                                                        <svg
                                                            stroke="currentColor"
                                                            viewBox="0 0 100 100"
                                                            preserveAspectRatio="none"
                                                            className="absolute inset-0 size-full stroke-2 text-gray-200"
                                                        >
                                                            <line x1={0} x2={100} y1={100} y2={0} vectorEffect="non-scaling-stroke" />
                                                        </svg>
                                                    </span>
                                                )}
                                            </Radio>
                                        ))}
                                    </RadioGroup>
                                </fieldset>
                            </div>

                            <button
                                type="submit"
                                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
                                onClick={(e) => handleAddToCart({
                                    id: productid,
                                    productname: productname,
                                    imagelink: slides[0].src,
                                    originalprice: Number(product.originalprice),
                                    productPrice: Number(product.price),
                                    quantity: 1,
                                    productId: product.id,
                                }, e)}
                            >
                                Add to bag
                            </button>
                        </form>
                    </div>
                </div>

                {/* Product info */}
                <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-12 lg:pb-24">
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-gray-200">{productname}</h1>
                    </div>

                    <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
                        {/* Description and details */}
                        <div>
                            <h3 className="sr-only">Description</h3>

                            <div className="space-y-6">
                                <p className="text-base text-gray-900 dark:text-gray-300">{product.description}</p>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">Highlights</h3>

                            <div className="mt-4">
                                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                    {product.highlights.map((highlight) => (
                                        <li key={highlight} className="text-gray-400 dark:text-gray-300">
                                            <span className="text-gray-600 dark:text-gray-300">{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h2 className="text-sm font-medium text-gray-900 dark:text-gray-100">Details</h2>

                            <div className="mt-4 space-y-6">
                                <p className="text-sm text-gray-600 dark:text-gray-300">{product.details}</p>
                            </div>
                        </div>
                    </div>

                    {/* Options addd here more*/}
                    <section className="mt-4 lg:row-span-3 lg:mt-0">
                        <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
                            <div className="grid grid-cols-12 py-2 border-y-8 border-gray-200 dark:border-gray-400 mb-6">
                                <div className="col-span-12 lg:col-span-10 ">
                                    <h5 className="font-manrope font-semibold text-2xl leading-9 text-black text-center dark:text-white">Reviews
                                    </h5>
                                </div>

                            </div>
                            <div className="grid grid-cols-1 gap-4">

                                <div className="grid-cols-12 max-w-sm sm:max-w-full mx-auto">
                                    <div className="col-span-12 lg:col-span-10 ">
                                        <div className="sm:flex gap-6">
                                            <div className="text">
                                                <p className="font-medium text-lg leading-8 text-gray-900 mb-2 dark:text-gray-200">Robert Karmazov</p>
                                                <div className="flex  items-center gap-2 lg:justify-between w-full mb-5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                                                        fill="none">
                                                        <g clipPath="url(#clip0_13624_2090)">
                                                            <path
                                                                d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                                                                fill="#FBBF24" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_13624_2090">
                                                                <rect width="30" height="30" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                                                        fill="none">
                                                        <g clipPath="url(#clip0_13624_2090)">
                                                            <path
                                                                d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                                                                fill="#FBBF24" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_13624_2090">
                                                                <rect width="30" height="30" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                                                        fill="none">
                                                        <g clipPath="url(#clip0_13624_2090)">
                                                            <path
                                                                d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                                                                fill="#FBBF24" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_13624_2090">
                                                                <rect width="30" height="30" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                                                        fill="none">
                                                        <g clipPath="url(#clip0_13624_2090)">
                                                            <path
                                                                d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                                                                fill="#FBBF24" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_13624_2090">
                                                                <rect width="30" height="30" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                                                        fill="none">
                                                        <g clipPath="url(#clip0_13624_2090)">
                                                            <path
                                                                d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                                                                fill="#FBBF24" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_13624_2090">
                                                                <rect width="30" height="30" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                <p className="font-normal leading-6 text-gray-500 mb-0 lg:pr-0 dark:text-gray-300">One of the standout features of Pagedone is its intuitive and user-friendly interface. Navigating through the system feels natural, and the layout makes it easy to locate and utilize various design elements. This is particularly beneficial for designers looking to streamline their workflow.  </p>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="pb-0 border-b border-gray-100 w-full"></div>
                                <div className="grid-cols-12 max-w-sm sm:max-w-full mx-auto">
                                    <div className="col-span-12 lg:col-span-10 ">
                                        <div className="sm:flex gap-6">

                                            <div className="text">
                                                <p className="font-medium text-lg leading-8 text-gray-900 mb-2 dark:text-gray-200">Robert Karmazov</p>
                                                <div className="flex  items-center gap-2 lg:justify-between w-full mb-5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                                                        fill="none">
                                                        <g clipPath="url(#clip0_13624_2090)">
                                                            <path
                                                                d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                                                                fill="#FBBF24" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_13624_2090">
                                                                <rect width="30" height="30" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                                                        fill="none">
                                                        <g clipPath="url(#clip0_13624_2090)">
                                                            <path
                                                                d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                                                                fill="#FBBF24" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_13624_2090">
                                                                <rect width="30" height="30" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                                                        fill="none">
                                                        <g clipPath="url(#clip0_13624_2090)">
                                                            <path
                                                                d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                                                                fill="#FBBF24" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_13624_2090">
                                                                <rect width="30" height="30" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                                                        fill="none">
                                                        <g clipPath="url(#clip0_13624_2090)">
                                                            <path
                                                                d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                                                                fill="#FBBF24" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_13624_2090">
                                                                <rect width="30" height="30" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                                                        fill="none">
                                                        <g clipPath="url(#clip0_13624_2090)">
                                                            <path
                                                                d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                                                                fill="#FBBF24" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_13624_2090">
                                                                <rect width="30" height="30" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                <p className="font-normal leading-6 text-gray-500 mb-0 lg:pr-0 dark:text-gray-300">Pagedone excels in addressing the demand for responsive design. Its features ensure that designs not only look great on desktop but also seamlessly adapt to various screen sizes, providing a consistent user experience across devices.

                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pb-0 border-b border-gray-100 w-full"></div>
                                <div className="grid-cols-12 max-w-sm sm:max-w-full mx-auto">
                                    <div className="col-span-12 lg:col-span-10 ">
                                        <div className="sm:flex gap-6">
                                            <div className="text">
                                                <p className="font-medium text-lg leading-8 text-gray-900 mb-2 dark:text-gray-200">Robert Karmazov</p>
                                                <div className="flex  items-center gap-2 lg:justify-between w-full mb-5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                                                        fill="none">
                                                        <g clipPath="url(#clip0_13624_2090)">
                                                            <path
                                                                d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                                                                fill="#FBBF24" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_13624_2090">
                                                                <rect width="30" height="30" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                                                        fill="none">
                                                        <g clipPath="url(#clip0_13624_2090)">
                                                            <path
                                                                d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                                                                fill="#FBBF24" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_13624_2090">
                                                                <rect width="30" height="30" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                                                        fill="none">
                                                        <g clipPath="url(#clip0_13624_2090)">
                                                            <path
                                                                d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                                                                fill="#FBBF24" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_13624_2090">
                                                                <rect width="30" height="30" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                                                        fill="none">
                                                        <g clipPath="url(#clip0_13624_2090)">
                                                            <path
                                                                d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                                                                fill="#FBBF24" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_13624_2090">
                                                                <rect width="30" height="30" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                                                        fill="none">
                                                        <g clipPath="url(#clip0_13624_2090)">
                                                            <path
                                                                d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                                                                fill="#FBBF24" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_13624_2090">
                                                                <rect width="30" height="30" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                <p className="font-normal leading-6 text-gray-500 mb-0 lg:pr-0 dark:text-gray-300">Collaboration is made seamless with Pagedone&apos;s collaboration tools. Whether working within a team or seeking client feedback, the system facilitates effective communication and real-time collaboration, enhancing the overall design process.
                                                </p>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="pb-0 border-b border-gray-100 w-full"></div>
                                <div className="grid-cols-12 max-w-sm sm:max-w-full mx-auto">
                                    <div className="col-span-12 lg:col-span-10 ">
                                        <div className="sm:flex gap-6">
                                            <div className="text">
                                                <p className="font-medium text-lg leading-8 text-gray-900 mb-2 dark:text-gray-200">Robert Karmazov</p>
                                                <div className="flex  items-center gap-2 lg:justify-between w-full mb-5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                                                        fill="none">
                                                        <g clipPath="url(#clip0_13624_2090)">
                                                            <path
                                                                d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                                                                fill="#FBBF24" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_13624_2090">
                                                                <rect width="30" height="30" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                                                        fill="none">
                                                        <g clipPath="url(#clip0_13624_2090)">
                                                            <path
                                                                d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                                                                fill="#FBBF24" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_13624_2090">
                                                                <rect width="30" height="30" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                                                        fill="none">
                                                        <g clipPath="url(#clip0_13624_2090)">
                                                            <path
                                                                d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                                                                fill="#FBBF24" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_13624_2090">
                                                                <rect width="30" height="30" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                                                        fill="none">
                                                        <g clipPath="url(#clip0_13624_2090)">
                                                            <path
                                                                d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                                                                fill="#FBBF24" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_13624_2090">
                                                                <rect width="30" height="30" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                                                        fill="none">
                                                        <g clipPath="url(#clip0_13624_2090)">
                                                            <path
                                                                d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                                                                fill="#FBBF24" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_13624_2090">
                                                                <rect width="30" height="30" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                <p className="font-normal leading-6 text-gray-500 mb-0 lg:pr-0 dark:text-gray-300">Pagedone doesn&apos;t disappoint when it comes to the variety and richness of its design components. From pre-built templates to customizable elements, the system caters to both beginners and seasoned designers. The extensive library ensures a diverse range of options to bring creative visions to life.  </p>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <SimilarProducts productname={productname} producttype={'cleaning'} />



        </div>

    );
}

export default ClientComponent;
