"use client"

import { createContext, useContext, useState, ReactNode } from 'react';

type CartItem = {
    id: string;
    productname: string;
    imagelink: string;
    productPrice: number;
    originalprice: number;
    quantity: number;
    productId: string;
};

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (id: string) => void;
  incrementQuantity: (id: string)=> void;
  decrementQuantity: (id:string)=>void;
  getCartQuantity: () => number;
  getCartItems: () => CartItem[];
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const UseCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: CartItem) => {
    console.log(product.id , '  from Context', cart.findIndex(itemm => itemm.id === '10'));
    const existingProductIndex = cart.findIndex(item => item.id === product.id );
    console.log(existingProductIndex , '    check ', existingProductIndex===0);
    if (existingProductIndex !== -1) {
    //  const updatedCart = [...cart];
    //  updatedCart[existingProductIndex].quantity += 1;
    //  setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id: string) => {
    setCart(cart.filter(item => item.id !== id));
  };
  const incrementQuantity = (id: string) => {
    setCart(cart.map((item) => 
      item.id === id && item.quantity < 5 ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };
  const decrementQuantity = (id: string) => {
    setCart(cart.map((item) => 
      item.id === id && item.quantity>1 ? { ...item, quantity:  item.quantity- 1 } : item
    ));
  };

  const getCartQuantity = () => cart.reduce((total) => total + 1, 0);

  const getCartItems = () => cart;

  return (
    <CartContext.Provider value={{ cart, addToCart,removeFromCart,incrementQuantity,decrementQuantity, getCartQuantity, getCartItems }}>
      {children}
    </CartContext.Provider>
  );
};
