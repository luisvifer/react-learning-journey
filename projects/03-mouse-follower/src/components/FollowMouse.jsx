import { useEffect, useState } from 'react'

export function FollowMouse () {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [enabled, setEnabled] = useState(false)
  const changeBusttonState = () => {
    setEnabled(!enabled)
  }

  // Pointer move
  useEffect(() => {
    console.log('efecto', { enabled })

    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log('handleMove', { clientX, clientY })
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    // clean up
    // -> cuando el componente se demonta
    // -> cuando cambian las dependencias, antes de ejecutar el efecto de nuevo
    return () => { // permite limpiar el efecto
      console.log('cleanup')

      window.removeEventListener('pointermove', handleMove)
      setPosition({ x: 25, y: 25 })
    }
  }, [enabled])
  // []        -> solo se ejecuta una vez cuando se monta el componente
  // [enabled] -> se ejecuta cuando se monta el componente y cuando cambia la dependencia enabled
  // undefined -> se ejecuta cada vez que se renderiza el componente

  // change body className

  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])

  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <button onClick={changeBusttonState}>{enabled ? 'Desactivar' : 'Activar'} seguir el puntero</button>
    </>
  )
}
