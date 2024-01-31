import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'
import { Square } from './components/Square'
import { TURNS } from './constants'
import { checkWinnerFrom, checkEndGame } from './logic/board'
import { WinnerModal } from './components/WinnerModal'
import { Turn } from './components/Turn'
import { loadBoardGameFromStorage, loadTurnFromStorage, saveBoardGameToStorage, saveTurnToStorage, resetBoardAndTurnFromStorage } from './logic/storage/index'

function App () {
  // const [board, setBoard] = useState(['x','x','x','o','x','o','o','x','x'])
  const [board, setBoard] = useState(() => {
    const boardFromStorage = loadBoardGameFromStorage()
    return boardFromStorage ?? Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = loadTurnFromStorage()
    return turnFromStorage ?? TURNS.X
  })

  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    resetBoardAndTurnFromStorage()
  }

  const updateBoard = (index) => {
    if (board[index] || winner) return
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    const newBoard = [...board] // spread operator parecido al rest operator
    newBoard[index] = turn
    setBoard(newBoard)
    setTurn(newTurn)
    // save match
    saveBoardGameToStorage(newBoard)
    saveTurnToStorage(newTurn)

    const newWinner = checkWinnerFrom(newBoard) // usar siempre de tus variables locales actualizadas
    if (newWinner) {
      confetti()
      setWinner(newWinner)// actualización del estado es asíncrono
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}> Reset del juego</button>
      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>
      <Turn turn={turn} />
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default App
