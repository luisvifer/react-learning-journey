const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_ENDPOINT_IMAGE_URL_PREFIX = 'https://cataas.com/'

export const getRandomFact = async () => {
  try {
    const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
    if (!res.ok) throw new Error('Error fetching the cat fact')
    const data = await res.json()
    console.log(data)
    const { fact } = data
    return fact
  } catch (err) {
    throw new Error(err.message)
  }
}

export const getPartialImageUrlFromFact = async (words) => {
  try {
    const res = await fetch(CAT_ENDPOINT_IMAGE_URL_PREFIX + `cat/says/${words}?size=50&color=red&json=true`)
    if (!res.ok) throw new Error('Error retrieving the cat image')
    const data = await res.json()
    const { _id } = data
    const url = `cat/${_id}/says/${words}`
    return url
  } catch (error) {
    throw new Error(error.message)
  }
}

export const getComposedImageUrlFromPartial = (partialUrl) => {
  return `${CAT_ENDPOINT_IMAGE_URL_PREFIX}${partialUrl}`
}
