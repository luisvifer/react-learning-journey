import { Movie } from './Movie'
function ListOfMoview ({ movies }) {
  return (
    <ul className='movies'>
      {
            movies.map(movie => (
              <Movie key={movie.id} movie={movie} />

            ))
        }
    </ul>
  )
}

function NoMoviesResults () {
  return (<p>No se encontraron películas para la búsqueda </p>)
}
export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0
  return (
    hasMovies
      ? <ListOfMoview movies={movies} />
      : <NoMoviesResults />

  )
}
