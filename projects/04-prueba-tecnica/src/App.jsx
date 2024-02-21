import { useEffect, useState } from 'react'
import './App.css'
import { useCatImage } from './hooks/useCatImg'
import { useCatFact } from './hooks/useCatFact'
import { Otro } from './components/Otro'

export function App () {
  const [factError, setFactError] = useState()
  const { factData, refreshRandomFact } = useCatFact()
  const { imageData } = useCatImage({ fact: factData.fact })

  useEffect(() => {
    if (factData.error) {
      setFactError(factData.error)
    }
    if (imageData.error) {
      setFactError(imageData.error) // Asume que imageUrl contiene una propiedad de error en caso de fallo
    }
  }, [imageData.error, imageData.error])

  const handleClick = async () => {
    refreshRandomFact()
  }

  return (
    <main>
      <h1>App de gatacos</h1>
      <section>
        <button onClick={handleClick}>Refresh</button>
      </section>
      <section>
        {factData.fact && <p>{factData.fact}</p>}
        {imageData.imageUrl && <img className='random-img' src={imageData.imageUrl} alt={`Cat image extracted using the first word of cat facts:${factData.fact}`} />}

      </section>
      {factError && <section className='error'><p>{factError}</p></section>}
      <section>
        <Otro />
      </section>
    </main>
  )
}
