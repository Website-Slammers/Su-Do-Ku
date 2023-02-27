export const tokenCreator = (initialState,puzzleState, boardSolution) =>{
    if(initialState) localStorage.setItem("initialState",JSON.stringify({initialState}))
    if(puzzleState) localStorage.setItem("boardState",JSON.stringify({puzzleState}))
    if(boardSolution) localStorage.setItem("boardSolution",JSON.stringify({boardSolution}))
}