export function Movie ({ movie }) {
  return (
    <li className='movie'>
      <h3>{movie.title}</h3>
      <p>{movie.year}</p>
      <img src={movie.poster} alt={movie.title} />
    </li>
  )
}
