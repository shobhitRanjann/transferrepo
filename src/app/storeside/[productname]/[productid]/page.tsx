import ClientComponent from "./clientcomponent"

export default async function Page({
      params,
}: {
      params: Promise<{ productname: string, productid: string }>
}) {
      
   //   const resolvedParams = React.use(params); // Resolve the params promise
   const resolvedParams = await params;

  //const { productname, productid } = resolvedParams;
  const product = {
      id: '1',
      name: 'Basic Tee 6-Pack',
      price: '192',
      originalprice: '384',
      href: '#',
      breadcrumbs: [
            { id: 1, name: 'Men', href: '#' },
            { id: 2, name: 'Clothing', href: '#' },
      ],
      images: [
            {
                  src: 'https://images.meesho.com/images/products/405048121/a49eg_512.webp',
                  alt: 'Two each of gray, white, and black shirts laying flat.',
            },
            {
                  src: 'https://images.meesho.com/images/products/375061729/y9d5s_512.webp',
                  alt: 'Model wearing plain black basic tee.',
            },
            {
                  src: 'https://images.meesho.com/images/products/465400387/whv4j_512.webp',
                  alt: 'Model wearing plain gray basic tee.',
            },
            {
                  src: 'https://images.meesho.com/images/products/382519791/yzcii_512.webp',
                  alt: 'Model wearing plain white basic tee.',
            },
      ],
      colors: [
            { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
            { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
            { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
      ],
      sizes: [
            { name: 'XXS', inStock: false },
            { name: 'XS', inStock: true },
            { name: 'S', inStock: true },
            { name: 'M', inStock: true },
            { name: 'L', inStock: true },
            { name: 'XL', inStock: true },
            { name: '2XL', inStock: true },
            { name: '3XL', inStock: true },
      ],
      description:
            'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
      highlights: [
            'Hand cut and sewn locally',
            'Dyed with our proprietary colors',
            'Pre-washed & pre-shrunk',
            'Ultra-soft 100% cotton',
      ],
      details:
            'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
      return <>
           <ClientComponent
      product={product}
      productname={resolvedParams.productname}
      productid={resolvedParams.productid}
   
    />
      </>
}