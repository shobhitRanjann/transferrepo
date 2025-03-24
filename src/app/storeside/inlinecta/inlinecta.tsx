export default function Inlinecta() {
      return (
            <>
                  <div className="w-full grid gap-7 sm:px-5 lg:px-80 bg-white dark:bg-gray-800">
                        <div className="grid gap-3">
                              <h2 className="text-center text-gray-900 dark:text-white text-3xl font-bold font-manrope leading-10">Ready to Superpower Your Ideas?</h2>
                              <p className="xl:max-w-2xl w-auto mx-auto text-center text-gray-500 dark:text-gray-200 text-base font-normal leading-relaxed">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry&apos;s standard.</p>
                        </div>
                        <div className="grid gap-2.5">
                              <h2 className="text-center text-gray-500 dark:text-gray-300 text-sm font-semibold leading-snug">Subscribe for Update</h2>
                              <div className="pl-7 pr-1.5 py-1.5 rounded-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 justify-between items-center inline-flex">
                                    <input className="focus:outline-none text-black dark:text-white dark:bg-gray-700 text-base font-normal leading-relaxed w-full h-full" placeholder="Enter email to Subscribe" />
                                    <button className="px-5 py-3 bg-indigo-600 hover:bg-indigo-700 transition-all duration-500 rounded-full shadow-sm">
                                          <span className="px-2 text-white dark:text-black text-base font-semibold">Subscribe</span>
                                    </button>
                              </div>
                        </div>
                  </div>

            </>
      )
}