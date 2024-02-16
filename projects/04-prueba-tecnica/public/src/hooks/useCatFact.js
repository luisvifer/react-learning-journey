import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/facts'

export function useCatFact () {
  const [factData, setFactData] = useState({ fact: null, error: null })
  const refreshRandomFact = () => {
    getRandomFact()
      .then(fact => setFactData({ fact, error: null }))
      .catch(error => setFactData({ fact: null, error }))
  }
  useEffect(refreshRandomFact, [])

  return { factData, refreshRandomFact }
}
