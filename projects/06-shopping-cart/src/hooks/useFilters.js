import { useContext } from 'react'
import { FiltersContext } from '../contexts/filters.jsx'

export function useFilters () {
  const { filters, setFilters } = useContext(FiltersContext)
  console.log(filters)
  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
          (
            filters.category === 'all' ||
            product.category === filters.category
          )
      )
    })
  }
  return { filterProducts, filters, setFilters }
}
