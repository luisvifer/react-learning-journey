import { useEffect, useState, useRef } from 'react'

export function useSearch () {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      // Primera vez que se renderiza
      isFirstInput.current = search === ''
      return
    }
    if (search === '') {
      setError('No se puede buscar una película vacía')
      return
    }
    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una película vacía')
      return
    }
    if (search.length < 3) {
      setError('No se puede buscar una película vacía')
      return
    }
    setError(null)
  }, [search])

  return { search, updateSearch, error }
}
