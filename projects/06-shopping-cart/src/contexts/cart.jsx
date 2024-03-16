import { createContext } from 'react'
import { useCartReducer } from '../hooks/useCartReducer.js'

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const { state, addToCart, removeFromCart, clearCart } = useCartReducer()

  const checkProductInCart = product => {
    return state.some(item => item.id === product.id)
  }

  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      checkProductInCart,
      removeFromCart,
      clearCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
