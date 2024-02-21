import { useRef, useState, useMemo, useCallback } from 'react'
import { searchMovies } from '../service/movies'

export function useMovies ({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef(search)

  /**
   * useMemo para funciones es igual que useCallback, pero useCallback es azucar sintáctico
   * const getMovies = useMemo(() => {
    return async ({ search }) => {
      if (search !== previousSearch.current) {
        try {
          setLoading(true)
          setError(null)
          previousSearch.current = search
          const newMovies = await searchMovies({ search })
          setMovies(newMovies)
        } catch (e) {
          setError(e.message)
        } finally {
          setLoading(false)
        }
      }
    }
  }, [])
  **/
  const getMovies = useCallback(async ({ search }) => {
    if (search !== previousSearch.current) {
      try {
        setLoading(true)
        setError(null)
        previousSearch.current = search
        const newMovies = await searchMovies({ search })
        setMovies(newMovies)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
  }, [])
  /* const getSortedMovies = () => {
    console.log('getSortedMovies')
    const sortedMovies = sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
    return sortedMovies
  } */
  const sortedMovies = useMemo(() => {
    console.log('memoSortedMovies')
    if (movies === undefined || movies === null) return
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  return { movies: sortedMovies, loading, searchError: error, getMovies }
}
