import { useCatImage } from '../hooks/useCatImg'

export function Otro () {
  const { imageData } = useCatImage({ fact: 'Cats' })
  return (
    <>
      {imageData.imageUrl && <img src={imageData.imageUrl} />}
    </>
  )
}
