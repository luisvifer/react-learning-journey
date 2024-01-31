export function loadBoardGameFromStorage () {
    const boardFromStorage = JSON.parse(window.localStorage.getItem('board')) 
    return boardFromStorage
  }
export function loadTurnFromStorage ()  {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage
  }
export function saveBoardGameToStorage(newBoard)  {
    window.localStorage.setItem('board', JSON.stringify(newBoard))
  }
export function saveTurnToStorage(turn)  {
    window.localStorage.setItem('turn', turn)
  }

  export function resetBoardAndTurnFromStorage(){
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }
