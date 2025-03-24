"use client";

import { useState } from "react";
import { UseCart } from "../content/CartContext";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

export default function Page() {
  // const [cartValues, setCartValues] = useState([
  //   {
  //     id: 1,
  //     imagelink: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg',
  //     quantity: 2,
  //     productname: 'testName',
  //     productPrice: 122,
  //     productId: 1
  //   },
  //   {
  //     id: 2,
  //     imagelink: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-dark.svg',
  //     quantity: 1,
  //     productname: 'testName',
  //     productPrice: 122,
  //     productId: 2
  //   },
  //   {
  //     id: 3,
  //     imagelink: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-dark.svg',
  //     quantity: 5,
  //     productname: 'testName',
  //     productPrice: 122,
  //     productId: 2
  //   },
  //   {
  //     id: 4,
  //     imagelink: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-dark.svg',
  //     quantity: 4,
  //     productname: 'testName',
  //     productPrice: 122,
  //     productId: 2
  //   },
  //   {
  //     id: 5,
  //     imagelink: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-dark.svg',
  //     quantity: 8,
  //     productname: 'testName',
  //     productPrice: 122,
  //     productId: 2
  //   },
  // ]);

   const { cart,removeFromCart,incrementQuantity,decrementQuantity } = UseCart();
   const [open, setOpen] = useState(false)
   const [idtoremove,setIdtoremove] = useState('');
   const [deliveryprice] = useState(30);
   const [taxrate] = useState(0);

   console.log(cart);

  //  useEffect(()=>{
  //     cart.map((val)=>{
  //       console.log('orginalprice  >>  ',val.originalprice , '    naame  ',val.id);
  //      // setOriginalpriceforallproducts(0);
  //       setOriginalpriceforallproducts(originalpriceforallproducts + val.originalprice);
  //     })
  //  } , [cart.length])
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.originalprice * item.quantity, 0);
  };
  const calculateTotalSaving = ()=>{
    return cart.reduce(
      (total, item) => total + (item.originalprice - item.productPrice) * item.quantity,
      0
    );
  }

  const calculateFinalPrice = () => {
    return cart.reduce((total, item) => total + item.productPrice * item.quantity, 0) + 30;
  }

  const handleQuantityIncrease = (e: string) => {
    incrementQuantity(e);
  }
  const handleQuantityDecrease = (e: string) => {
      decrementQuantity(e);
  }

    const alertbox = (id:string)=>{
      setIdtoremove(id);
      setOpen(true);
    }

    const removeProduct=()=>{
      removeFromCart(idtoremove);
      setOpen(false);
    }

  
  return <>

<Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
          >
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                  <ExclamationTriangleIcon aria-hidden="true" className="size-6 text-red-600" />
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                    Remove Item
                  </DialogTitle>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Are you sure, you want to remove this item!!..
                      This action cannot be undone.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                onClick={() => removeProduct()}
                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
              >
                Yes
              </button>
              <button
                type="button"
                data-autofocus
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Cancel
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>

  
    <section className="bg-white py-8 antialiased md:py-16 dark:bg-gray-800">
      <div className=" border-gray-200 bg-white dark:bg-gray-800 py-8 antialiased md:py-16 px-4 mx-auto max-w-8xl">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-200 sm:text-2xl">Shopping Cart</h2>

          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              <div className="space-y-6">
                {cart.map((product) => (
                  <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-400 dark:bg-gray-500 md:p-6" key={product.id}>
                    <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                      <a href="#" className="shrink-0 md:order-1">
                        <img className="h-20 w-20 object-contain" src={product.imagelink} alt="imac image" />
                      </a>
                      <label htmlFor="counter-input" className="sr-only">Choose quantity:</label>
                      <div className="flex items-center justify-between md:order-3 md:justify-end">
                        <div className="flex items-center">
                          <button type="button" id="decrement-button" data-input-counter-decrement="counter-input" onClick={() => handleQuantityDecrease(product.id)} className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-500 dark:hover:bg-gray-400 dark:focus:ring-gray-300">
                            <svg className="h-2.5 w-2.5 text-gray-900 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                            </svg>
                          </button>
                          <input type="text" id="counter-input" data-input-counter className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-gray-200" placeholder="" value={product.quantity} required readOnly />
                          <button type="button" id="increment-button" data-input-counter-increment="counter-input" onClick={() => handleQuantityIncrease(product.id)} className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-500 dark:hover:bg-gray-400 dark:focus:ring-gray-300">
                            <svg className="h-2.5 w-2.5 text-gray-900 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                            </svg>
                          </button>
                        </div>
                        <div className="text-end md:order-4 md:w-32">
                          <p className="text-base font-bold text-gray-900 dark:text-gray-200 ">$ {product.productPrice * product.quantity}</p>
                        </div>
                      </div>

                      <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                        <a href="#" className="text-base font-medium text-gray-900 hover:underline dark:text-gray-200">{product.productname}</a>

                        <div className="flex items-center gap-4">
                          <button type="button" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-gray-300">
                            <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                            </svg>
                            Add to Favorites
                          </button>

                          <button type="button" onClick={() => alertbox(product.id)} className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-300">
                            <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                            </svg>
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                <p className="text-xl font-semibold text-gray-900 dark:text-white">Order summary</p>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Original price</dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">${calculateTotalPrice()}</dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Savings</dt>
                      <dd className="text-base font-medium text-green-600">-${calculateTotalSaving()}</dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Store Pickup</dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">${deliveryprice}</dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Tax</dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">${taxrate}</dd>
                    </dl>
                  </div>

                  <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                    <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                    <dd className="text-base font-bold text-gray-900 dark:text-white">${calculateFinalPrice()}</dd>
                  </dl>
                </div>

                <a href="#" className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Proceed to Checkout</a>

                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400"> or </span>
                  <a href="#" title="" className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">
                    Continue Shopping
                    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="voucher" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Do you have a voucher or gift card? </label>
                    <input type="text" id="voucher" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="" required />
                  </div>
                  <button type="submit" className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Apply Code</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
}