export const tokenMaker = (initialState,boardState, boardSolution) =>{
    if(initialState) localStorage.setItem("initialState",JSON.stringify({initialState}))
    if(boardState) localStorage.setItem("boardState",JSON.stringify({boardState}))
    if(boardSolution) localStorage.setItem("boardSolution",JSON.stringify({boardSolution}))
}