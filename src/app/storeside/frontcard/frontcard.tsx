'use client'

import { useState } from 'react'
import { usePathname } from "next/navigation";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import { useRouter } from 'next/navigation'

const sortOptions = [


  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]
const subCategories = [


  { name: 'Totes', href: '#' },
  { name: 'Backpacks', href: '#' },
  { name: 'Travel Bags', href: '#' },
  { name: 'Hip Bags', href: '#' },
  { name: 'Laptop Sleeves', href: '#' },
]
const filters = [
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White', checked: false },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blue', label: 'Blue', checked: true },
      { value: 'brown', label: 'Brown', checked: false },
      { value: 'green', label: 'Green', checked: false },
      { value: 'purple', label: 'Purple', checked: false },
    ],
  },
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'new-arrivals', label: 'New Arrivals', checked: false },
      { value: 'sale', label: 'Sale', checked: false },
      { value: 'travel', label: 'Travel', checked: true },
      { value: 'organization', label: 'Organization', checked: false },
      { value: 'accessories', label: 'Accessories', checked: false },
    ],
  },
  {
    id: 'size',
    name: 'Size',
    options: [
      { value: '2l', label: '2L', checked: false },
      { value: '6l', label: '6L', checked: false },
      { value: '12l', label: '12L', checked: false },
      { value: '18l', label: '18L', checked: false },
      { value: '20l', label: '20L', checked: false },
      { value: '40l', label: '40L', checked: true },
    ],
  },
]

function classNames(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}
export default function FrontCard() {

  const allproducts = [
    {
      id: 1,
      imglink: "https://pagedone.io/asset/uploads/1700726158.png",
      productName: "Face cream",
      productPrice: 100,
      productType: "Orange & Aloe Vera"
    },
    {
      id: 2,
      imglink: "https://pagedone.io/asset/uploads/1700726174.png",
      productName: "Plstic bottle",
      productPrice: 120,
      productType: "Black color"
    },
    {
      id: 3,
      imglink: "https://pagedone.io/asset/uploads/1700726191.png",
      productName: "Men cream",
      productPrice: 44,
      productType: "Aloe Vera and Neem"
    },
    {
      id: 4,
      imglink: "https://pagedone.io/asset/uploads/1700726158.png",
      productName: "Face cream",
      productPrice: 100,
      productType: "Orange & Aloe Vera"
    },
    {
      id: 5,
      imglink: "https://pagedone.io/asset/uploads/1700726158.png",
      productName: "Face cream",
      productPrice: 100,
      productType: "Orange & Aloe Vera"
    },
    {
      id: 6,
      imglink: "https://pagedone.io/asset/uploads/1700726158.png",
      productName: "Face cream",
      productPrice: 100,
      productType: "Orange & Aloe Vera"
    },
    {
      id: 7,
      imglink: "https://pagedone.io/asset/uploads/1700726158.png",
      productName: "Face cream",
      productPrice: 100,
      productType: "Orange & Aloe Vera"
    },
    {
      id: 8,
      imglink: "https://pagedone.io/asset/uploads/1700726174.png",
      productName: "Plstic bottle",
      productPrice: 120,
      productType: "Black color"
    },
    {
      id: 9,
      imglink: "https://pagedone.io/asset/uploads/1700726191.png",
      productName: "Men cream",
      productPrice: 44,
      productType: "Aloe Vera and Neem"
    },
    {
      id: 10,
      imglink: "https://pagedone.io/asset/uploads/1700726158.png",
      productName: "Face cream",
      productPrice: 100,
      productType: "Orange & Aloe Vera"
    },
    {
      id: 11,
      imglink: "https://pagedone.io/asset/uploads/1700726158.png",
      productName: "Face cream",
      productPrice: 100,
      productType: "Orange & Aloe Vera"
    },
    {
      id: 12,
      imglink: "https://pagedone.io/asset/uploads/1700726158.png",
      productName: "Face cream",
      productPrice: 100,
      productType: "Orange & Aloe Vera"
    },
  ]

  const [rangeval, setRangeval] = useState('');
  const [maxpricetoggle, setMaxpricetoggle] = useState(false);
  const [minpricetoggle, setMinpricetoggle] = useState(false);
  const pathname = usePathname();

  const onChangeminpricetoggle = () => {
    setMaxpricetoggle(false);
    setMinpricetoggle(minpricetoggle ? false : true);
  }
  const onChangemaxpricetoggle = () => {
    setMaxpricetoggle(maxpricetoggle ? false : true);
    setMinpricetoggle(false);
  }

  const router = useRouter();
  const handleCardClick = (productname: string, productid: string) => {
    // Encode the productname to include %20 for spaces
    const encodedProductName = productname.replace(/\s+/g, "-");

    // Navigate to the dynamic product page
    router.push(`${pathname}/${encodedProductName}/${productid}`);
  };
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  return (
    <>
      <div className="bg-white dark:bg-gray-800">
        <div>
          {/* Mobile filter dialog */}
          <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
            <DialogBackdrop
              transition
              className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
            />

            <div className="fixed inset-0 z-40 flex">
              <DialogPanel
                transition
                className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white dark:bg-gray-800 py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
              >
                <div className="flex items-center justify-between px-4">
                  <h2 className="text-lg font-medium text-gray-900 dark:text-gray-50">Filters</h2>
                  <button
                    type="button"
                    onClick={() => setMobileFiltersOpen(false)}
                    className="-mr-2 flex size-10 items-center justify-center rounded-md bg-white dark:bg-gray-800 p-2 text-gray-400 dark:text-gray-200"
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon aria-hidden="true" className="size-6" />
                  </button>
                </div>

                {/* Filters */}
                <form className="mt-4 border-t border-gray-200 dark:border-gray-400">
                  <h3 className="sr-only">Categories</h3>
                  <ul role="list" className="px-2 py-3 font-medium text-gray-900 dark:text-gray-50">
                    {subCategories.map((category) => (
                      <li key={category.name}>
                        <a href={category.href} className="block px-2 py-3">
                          {category.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                  {/* Addding Price Mobile */}
                  <Disclosure as="div" className="border-t border-gray-200 dark:border-gray-400 px-4 py-6">
                    <h3 className="-mx-2 -my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white dark:bg-gray-800 px-2 py-3 text-gray-400 dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-200">
                        <span className="font-medium text-gray-900 dark:text-gray-50">Price</span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon aria-hidden="true" className="size-5 group-data-[open]:hidden" />
                          <MinusIcon aria-hidden="true" className="size-5 group-[&:not([data-open])]:hidden" />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-6">
                        <ul role="list" className="px-2 py-3 font-medium text-gray-900 dark:text-white">
                          <li>
                            <label className="inline-flex items-center cursor-pointer">
                              <input type="checkbox" onChange={onChangemaxpricetoggle} className="sr-only peer" checked={maxpricetoggle} />
                              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                              <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Max price</span>
                            </label>

                            {maxpricetoggle ? <>
                              <label htmlFor="steps-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Range Upto</label>
                              <input id="steps-range" type="range" min="100" max="10000" value={rangeval} onChange={(e) => { console.log(e.target.value); setRangeval(e.target.value) }} step="0.5" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                              <a className="text-gray-700 dark:text-gray-200">{rangeval}</a></> : ''}
                          </li>
                          <li>
                            <label className="inline-flex items-center cursor-pointer">
                              <input type="checkbox" onChange={onChangeminpricetoggle} className="sr-only peer" checked={minpricetoggle} />
                              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                              <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Min Price</span>
                            </label>

                            {minpricetoggle ? <>
                              <label htmlFor="steps-range" className="my-2 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Range Starts From</label>
                              <input id="steps-range" type="range" min="100" max="10000" value={rangeval} onChange={(e) => { console.log(e.target.value); setRangeval(e.target.value) }} step="0.5" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                              <a className="text-gray-700 dark:text-gray-200">{rangeval}</a> </> : ''}
                          </li>
                        </ul>
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                  {/* End Addding Price Mobile  */}

                  {filters.map((section) => (
                    <Disclosure key={section.id} as="div" className="border-t border-gray-200 dark:border-gray-400 px-4 py-6">
                      <h3 className="-mx-2 -my-3 flow-root">
                        <DisclosureButton className="group flex w-full items-center justify-between bg-white dark:bg-gray-800 px-2 py-3 text-gray-400 dark:text-gray-100 hover:text-gray-500 dark:hover:text-gray-200">
                          <span className="font-medium text-gray-900 dark:text-white">{section.name}</span>
                          <span className="ml-6 flex items-center">
                            <PlusIcon aria-hidden="true" className="size-5 group-data-[open]:hidden" />
                            <MinusIcon aria-hidden="true" className="size-5 group-[&:not([data-open])]:hidden" />
                          </span>
                        </DisclosureButton>
                      </h3>
                      <DisclosurePanel className="pt-6">
                        <div className="space-y-6">
                          {section.options.map((option, optionIdx) => (
                            <div key={option.value} className="flex gap-3">
                              <div className="flex h-5 shrink-0 items-center">
                                <div className="group grid size-4 grid-cols-1">
                                  <input
                                    defaultValue={option.value}
                                    id={`filter-mobile-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    type="checkbox"
                                    className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white dark:bg-gray-800 checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                  />
                                  <svg
                                    fill="none"
                                    viewBox="0 0 14 14"
                                    className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                  >
                                    <path
                                      d="M3 8L6 11L11 3.5"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="opacity-0 group-has-[:checked]:opacity-100"
                                    />
                                    <path
                                      d="M3 7H11"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="opacity-0 group-has-[:indeterminate]:opacity-100"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <label
                                htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                className="min-w-0 flex-1 text-gray-500 dark:text-gray-300"
                              >
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </DisclosurePanel>
                    </Disclosure>
                  ))}
                </form>
              </DialogPanel>
            </div>
          </Dialog>

          <main className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-8">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Products</h1>
              <div className="flex items-center">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-50">
                      Sort
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500 dark:text-gray-50 dark:group-hover:text-gray-50"
                      />
                    </MenuButton>
                  </div>

                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white dark:bg-gray-700 shadow-2xl ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <MenuItem key={option.name}>
                          <a
                            href={option.href}
                            className={classNames(
                              option.current ? 'font-medium text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-100',
                              'block px-4 py-2 text-sm data-[focus]:bg-gray-100 data-[focus]:outline-none',
                            )}
                          >
                            {option.name}
                          </a>
                        </MenuItem>
                      ))}
                    </div>
                  </MenuItems>
                </Menu>

                <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7 dark:text-gray-50 dark:hover:text-gray-100">
                  <span className="sr-only">View grid</span>
                  <Squares2X2Icon aria-hidden="true" className="size-5" />
                </button>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(true)}
                  className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden dark:text-gray-50 dark:hover:text-gray-100"
                >
                  <span className="sr-only">Filters</span>
                  <FunnelIcon aria-hidden="true" className="size-5" />
                </button>
              </div>
            </div>

            <section aria-labelledby="products-heading" className="pb-24 pt-6">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                {/* Filters */}
                <form className="hidden lg:block">
                  <h3 className="sr-only">Categories</h3>
                  <ul role="list" className="space-y-4 border-b border-gray-200 dark:border-gray-400 pb-6 text-sm font-medium text-gray-900 dark:text-white">
                    {subCategories.map((category) => (
                      <li key={category.name}>
                        <a href={category.href}>{category.name}</a>
                      </li>
                    ))}
                  </ul>

                  {/* Adding slider */}

                  <Disclosure as="div" className="border-b border-gray-200 py-6 dark:border-gray-400">
                    <h3 className="-my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white dark:bg-gray-800 py-3 text-sm text-gray-400 dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-200">
                        <span className="font-medium text-gray-900 dark:text-white">Price</span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon aria-hidden="true" className="size-5 group-data-[open]:hidden" />
                          <MinusIcon aria-hidden="true" className="size-5 group-[&:not([data-open])]:hidden" />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-4">
                        <ul role="list" className="space-y-4 border-b border-gray-200 dark:border-gray-400 pb-6 text-sm font-medium text-gray-900 dark:text-white">
                          <li>
                            <label className="inline-flex items-center cursor-pointer">
                              <input type="checkbox" onChange={onChangemaxpricetoggle} className="sr-only peer" checked={maxpricetoggle} />
                              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                              <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Max price</span>
                            </label>

                            {maxpricetoggle ? <>
                              <label htmlFor="steps-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Range Upto</label>
                              <input id="steps-range" type="range" min="100" max="10000" value={rangeval} onChange={(e) => { console.log(e.target.value); setRangeval(e.target.value) }} step="0.5" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                              <a>{rangeval}</a></> : ''}
                          </li>
                          <li>
                            <label className="inline-flex items-center cursor-pointer">
                              <input type="checkbox" onChange={onChangeminpricetoggle} className="sr-only peer" checked={minpricetoggle} />
                              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                              <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Min Price</span>
                            </label>

                            {minpricetoggle ? <>
                              <label htmlFor="steps-range" className="my-2 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Range Starts From</label>
                              <input id="steps-range" type="range" min="100" max="10000" value={rangeval} onChange={(e) => { console.log(e.target.value); setRangeval(e.target.value) }} step="0.5" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                              <a>{rangeval}</a> </> : ''}
                          </li>
                        </ul>
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                  {/* Adding slider end */}

                  {filters.map((section) => (
                    <Disclosure key={section.id} as="div" className="border-b border-gray-200 py-6">
                      <h3 className="-my-3 flow-root">
                        <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500 dark:bg-gray-800 dark:text-gray-100 dark:hover:text-gray-200">
                          <span className="font-medium text-gray-900 dark:text-white">{section.name}</span>
                          <span className="ml-6 flex items-center">
                            <PlusIcon aria-hidden="true" className="size-5 group-data-[open]:hidden" />
                            <MinusIcon aria-hidden="true" className="size-5 group-[&:not([data-open])]:hidden" />
                          </span>
                        </DisclosureButton>
                      </h3>
                      <DisclosurePanel className="pt-6">
                        <div className="space-y-4">
                          {section.options.map((option, optionIdx) => (
                            <div key={option.value} className="flex gap-3">
                              <div className="flex h-5 shrink-0 items-center">
                                <div className="group grid size-4 grid-cols-1">
                                  <input
                                    defaultValue={option.value}
                                    defaultChecked={option.checked}
                                    id={`filter-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    type="checkbox"
                                    className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-500 checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                  />
                                  <svg
                                    fill="none"
                                    viewBox="0 0 14 14"
                                    className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                  >
                                    <path
                                      d="M3 8L6 11L11 3.5"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="opacity-0 group-has-[:checked]:opacity-100"
                                    />
                                    <path
                                      d="M3 7H11"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="opacity-0 group-has-[:indeterminate]:opacity-100"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <label htmlFor={`filter-${section.id}-${optionIdx}`} className="text-sm text-gray-600 dark:text-gray-100">
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </DisclosurePanel>
                    </Disclosure>
                  ))}
                </form>


                <div className="lg:col-span-3">
                  <section>
                    <div className="mx-auto px-4 sm:px-6 lg:px-8 relative">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {allproducts.map((product) => (
                          <a onClick={() => handleCardClick(product.productName, product.id.toString())}
                            className="mx-auto sm:mr-0 group cursor-pointer lg:mx-auto bg-white dark:bg-gray-800 transition-all duration-500" key={product.id}>
                            <div className="">
                              <img src={product.imglink} alt="face cream image"
                                className="w-full aspect-square rounded-2xl object-cover" />
                            </div>
                            <div className="mt-5">
                              <div className="flex items-center justify-between">
                                <h6
                                  className="font-semibold text-xl leading-8 text-black dark:text-white transition-all duration-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-300">
                                  {product.productName}</h6>
                                <h6 className="font-semibold text-xl leading-8 text-indigo-600 dark:text-indigo-300">$ {product.productPrice}</h6>
                              </div>
                              <p className="mt-2 font-normal text-sm leading-6 text-gray-500 dark:text-gray-300">{product.productType}</p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>


  )
};