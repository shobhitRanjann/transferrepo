import type { Metadata } from "next";
import { Inter, Roboto_Mono } from 'next/font/google'
import "./globals.css";


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
 
const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "SmallStore",
  description: "For People, By People",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto_mono.variable}`}>
     
      <body>  
     
      {/* className={`${geistSans.variable} ${geistMono.variable} antialiased  bg-white dark:bg-gray-900`}  */}
        {/* <CartProvider>
          <Navbar/> */}
        {children}
        {/* <Footer/>
        </CartProvider> */}
      </body>
    </html>
  );
}
