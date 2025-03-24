import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "../globals.css";
import Footer from "./footer/footer";
import {CartProvider} from './content/CartContext'
import Navbar from "./frontnav/navbar";



 
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
    
      <body >
        <CartProvider>
          <Navbar/>
        {children}
        <Footer/>
        </CartProvider>
      </body>
    </html>
  );
}
