const API_URL = 'https://www.omdbapi.com/'
const API_KEY = 'b61ba1c5'

export async function searchMovies ({ search }) {
  if (search === '') return null
  try {
    const response = await fetch(`${API_URL}?apikey=${API_KEY}&s=${search}`)
    const json = await response.json()

    const movies = json.Search

    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))
  } catch (e) {
    throw new Error('Error searching movies')
  }
}
