"use client"
import { useRouter } from "next/navigation";

export default function Newarrivals() {
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
  const router = useRouter();
  const handleCardClick = (productname: string, productid: string) => {
    // Encode the productname to include %20 for spaces
    const encodedProductName = productname.replace(/\s+/g, "-");

    // Navigate to the dynamic product page
    router.push(`/storeside/${encodedProductName}/${productid}`);
  };
  return (
    <>
      <section className="py-24 bg-white dark:bg-gray-800">
        <div className="mx-auto px-5 sm:px-5 lg:px-20">
          <div className="flex overflow-x-auto gap-8">
            {allproducts.map((product) => (
              <a onClick={() => handleCardClick(product.productName, product.id.toString())}
                className="mx-auto sm:mr-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500 flex-none dark:bg-gray-800" key={product.id}>
                <div className="">
                  <img src={product.imglink} alt="face cream image"
                    className="w-full aspect-square rounded-2xl object-cover" />
                </div>
                <div className="mt-5">
                  <div className="flex items-center justify-between">
                    <h6
                      className="font-semibold text-xl leading-8 text-black dark:text-white  transition-all duration-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-300">
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
    </>
  )
}