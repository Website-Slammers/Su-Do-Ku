export const tokenCreator = (emptyPuzzle,puzzleState, answeredPuzzle) =>{
    if(emptyPuzzle) localStorage.setItem("emptyPuzzle",JSON.stringify(emptyPuzzle))
    if(puzzleState) localStorage.setItem("puzzleState",JSON.stringify(puzzleState))
    if(answeredPuzzle) localStorage.setItem("answeredPuzzle",JSON.stringify(answeredPuzzle))
}