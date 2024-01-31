import { WINNER_COMBOS } from "../constants"

export   const checkWinnerFrom = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      //console.log('primero'+a+boardToCheck[a]+ 'segundo'+b+boardToCheck[b]+'tercer'+c+boardToCheck[c])
      if (boardToCheck[a] &&
        boardToCheck[a] == boardToCheck[b] &&
        boardToCheck[a] == boardToCheck[c]

      ) {
        return boardToCheck[a]
      }
    }
    return null
  }

  export const checkEndGame = (newBoard) => {
    // return newBoard.every((square) => square != null)

    return !newBoard.includes(null)

  }