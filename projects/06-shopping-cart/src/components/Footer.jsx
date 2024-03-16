import './Footer.css'
import { IS_DEVELOPMENT } from './../config.js'
import { useFilters } from '../hooks/useFilters.js'
import { useCart } from '../hooks/useCart.js'

export function Footer () {
  const { filters } = useFilters()
  const { cart } = useCart()
  return (
    <footer className='footer'>
      <h4>Technical test ⚛️ - <span>@luisvifer</span></h4>
      <h5>Shopping cart with useContext & useReducer</h5>
      {
    //    IS_DEVELOPMENT && JSON.stringify(filters, null, 2)
      }
      {
     //   IS_DEVELOPMENT && JSON.stringify(cart, null, 2)
      }
    </footer>
  )
}
