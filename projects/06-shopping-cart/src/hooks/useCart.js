import { useContext } from 'react'
import { CartContext } from '../contexts/cart.jsx'

export const useCart = () => {
  const context = useContext(CartContext)

  if (context === undefined) {
    throw new Error('userCart must be within a CartProvider')
  }

  return context
}
