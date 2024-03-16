import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { Products } from './components/Products.jsx'
import { products as initialProduct } from './mocks/products.json'
import { useFilters } from './hooks/useFilters.js'
import { Cart } from './components/Cart.jsx'
import { CartProvider } from './contexts/cart.jsx'

function App () {
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(initialProduct)

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      <Footer />

    </CartProvider>
  )
}
export default App
