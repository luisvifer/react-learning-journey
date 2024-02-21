import { useState, useCallback } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import debunce from 'just-debounce-it'

function App () {
  // const inputRef = useRef()
  const [sort, setSort] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const { movies, loading, searchError, getMovies } = useMovies({ search, sort })

  const debouncedGetMovies = useCallback(
    debunce(search => {
      console.log('search')
      getMovies({ search })
    }, 300)
    , [getMovies])

  const handleSubmit = (event) => {
    // Gestión no contralada a través del DOM del formulario
    event.preventDefault()
    getMovies({ search })
    // const fields = new window.FormData(event.target)
    // const query = fields.get('query')
    // const { query } = Object.fromEntries(new window.FormData(event.target))
    // cambiar en el form para el uso del no controlada <input name='query' placeholder='Avengers, Star Wars, The Matrix,..' />
    // const inputElement = inputRef.current
    // const value = inputElement.value
    // console.log(value)
  }
  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (event) => {
    // Gestión controlada a través de REACT
    const newSearch = event.target.value
    updateSearch(newSearch)
    debouncedGetMovies(newSearch)
  }

  // Si se usa useRef se necesita en input la prop  ref={inputRef}
  return (
    <div className='page'>
      <header>
        <h1>Buscador de películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} name='query' placeholder='Avengers, Star Wars, The Matrix,..' />
          <input type='checkbox' onChange={handleSort} checked={sort} />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {searchError && <p style={{ color: 'red' }}>{searchError}</p>}
      </header>

      <main>
        {
        loading
          ? <p> Cargando..</p>
          : <Movies movies={movies} />
         }

      </main>
    </div>

  )
}

export default App
