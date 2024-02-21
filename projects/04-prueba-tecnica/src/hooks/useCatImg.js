import { useEffect, useState } from 'react'
import { getComposedImageUrlFromPartial, getPartialImageUrlFromFact } from '../services/facts'

export function useCatImage ({ fact }) {
  const [imageData, setImageData] = useState({ imageUrl: null, loading: false, error: null })

  useEffect(() => {
    if (!fact) {
      setImageData({ imageUrl: null, loading: false, error: null })
      return
    }

    setImageData(prevState => ({ imageUrl: imageData.imageUrl, loading: true, error: null }))
    const firstWord = fact.split(' ')[0]
    // const thirdWords = fact.split(' ').slice(0,3).join(' ')
    // const thirdWords = fact.split(' ',3).join(' ')

    getPartialImageUrlFromFact(firstWord)
      .then(imageUrl => setImageData({ imageUrl: getComposedImageUrlFromPartial(imageUrl), loading: false, error: null }))
      .catch(error => setImageData({ imageUrl: imageData.imageUrl, loading: false, error }))

    return () => {
      setImageData({ imageUrl: imageData.imageUrl, loading: false, error: '' })
    }
  }, [fact])

  return { imageData }
}
