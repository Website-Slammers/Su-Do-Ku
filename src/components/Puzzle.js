import React, {useState, useEffect} from 'react'
import sudGenerator from './boardGenerator/SudGenerator'
import sudValidator from './boardGenerator/SudValidator'
import sudPuzAlgo from './boardGenerator/SudPuzAlgo'
import { tokenCreator } from './tokens/tokenCreator'


const Puzzle =()=>{
    const [initialState, setInitialState] = useState([])
    const [boardSolution, setBoardSolution] = useState([])
    const [puzzleState, setPuzzleState] = useState([
            [1,2,3,4,5,6,7,8,9],
            [1,2,3,4,5,6,7,8,9],
            [1,2,3,4,5,6,7,8,9],
            [1,2,3,4,5,6,7,8,9],
            [1,2,3,4,5,6,7,8,9],
            [1,2,3,4,5,6,7,8,9],
            [1,2,3,4,5,6,7,8,9],
            [1,2,3,4,5,6,7,8,9],
            [1,2,3,4,5,6,7,8,9]])
    
        //ooh look a dangerous while statement in the whild
    useEffect(()=>{
        // console.log('hellosss')
        if(localStorage.getItem("puzzleState")&&localStorage.getItem("initialState")&& localStorage.getItem("boardSolution")){
            setPuzzleState(localStorage.getItem("puzzleState"))
            setInitialState(localStorage.getItem("initialState"))
            setBoardSolution(localStorage.getItem("boardSolution"))
        }else{
            let newPuzzle = sudGenerator()
            console.log("what " ,newPuzzle);
            setBoardSolution(newPuzzle)

            while(newPuzzle === false || sudValidator(newPuzzle) === false){
                newPuzzle = sudGenerator()
            }
            sudPuzAlgo(newPuzzle)
            setInitialState(newPuzzle)
            setPuzzleState(newPuzzle);
        }
    },[])
    //token maker
    useEffect(()=>{
        tokenCreator(initialState, puzzleState, boardSolution)
    },[puzzleState])
    
    return(
        // <div className='flex-box'>
            <div className="puzzle">
                {
                    !puzzleState[0][0]?<div>There's no data</div> :
                    puzzleState.map((row, index)=>{
                        return(
                            <div className='puzzle__row'>
                                {
                                    row.map((column, idx)=>{
                                        return(
                                            <div className='puzzle__number-box'>  {column}  </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        // </div>

    )
}

export default Puzzle;