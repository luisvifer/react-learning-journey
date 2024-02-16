import { useEffect, useState } from 'react'
import './App.css'
import { getComposedImageUrlFromPartial } from './services/facts'
import { useCatImage } from './hooks/useCatImg'
import { useCatFact } from './hooks/useCatFact'

export function App () {
  const [factError, setFactError] = useState()
  const { factData, refreshRandomFact } = useCatFact()
  const { imageData } = useCatImage({ fact: factData.fact })

  useEffect(() => {
    if (imageData.error) {
      setFactError(imageData.error) // Asume que imageUrl contiene una propiedad de error en caso de fallo
    }
  }, [imageData.error])

  useEffect(() => {
    if (factData.error) {
      setFactError(factData.error)
    }
  }, [imageData.error])

  const handleClick = async () => {
    refreshRandomFact()
  }

  const composedUrl = () => {
    return getComposedImageUrlFromPartial(imageData.imageUrl)
  }

  return (
    <main>
      <h1>App de gatacos</h1>
      <section>
        <button onClick={handleClick}>Refresh</button>
      </section>
      <section>
        {factData.fact && <p>{factData.fact}</p>}
        {imageData.imageUrl && <img src={`${composedUrl()}`} alt={`Cat image extracted using the first word of cat facts:${factData.fact}`} />}
      </section>
      {factError && <section className='error'><p>{factError}</p></section>}
    </main>
  )
}
