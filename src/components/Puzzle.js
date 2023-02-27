import React, {useState, useEffect} from 'react'
import sudGenerator from './boardGenerator/SudGenerator'
import sudValidator from './boardGenerator/SudValidator'
import sudPuzAlgo from './boardGenerator/SudPuzAlgo'
import { tokenCreator } from './tokens/tokenCreator'
import { getPuzzleById } from './api/puzzle'


const Puzzle =()=>{
    const [puzzleObj, setPuzzleObj] = useState({})
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

    async function getAndParsePuzzle(){
        let id = Math.ceil(Math.random()*366)
        const puzzleData = await getPuzzleById(id)
        setPuzzleObj(puzzleData)
    }

    useEffect(()=>{
        // console.log('hellosss')
        if(localStorage.getItem("puzzleState")&&localStorage.getItem("initialState")&& localStorage.getItem("boardSolution")){
            setPuzzleState(localStorage.getItem("puzzleState"))
            setInitialState(localStorage.getItem("initialState"))
            setBoardSolution(localStorage.getItem("boardSolution"))
            setPuzzleId(localStorage.getItem("puzzleId"))

        }else{
            getAndParsePuzzle()

            // let newPuzzle = sudGenerator()
            // console.log("what " ,newPuzzle);
            // setBoardSolution(newPuzzle)

            // while(newPuzzle === false || sudValidator(newPuzzle) === false){
            //     newPuzzle = sudGenerator()
            // }
            // sudPuzAlgo(newPuzzle)
            // setInitialState(newPuzzle)
            // setPuzzleState(newPuzzle);
        }
    },[])
    //token maker
    useEffect(()=>{
        console.log('puzzleObj', puzzleObj)
        if(puzzleObj && puzzleObj.emptyPuzzle){
            // console.log("puzzleObj", puzzleObj.emptyPuzzle)
            // let emptyPuzzle = JSON.parse(puzzleObj.emptyPuzzle)
            // console.log("hello?" , emptyPuzzle)
            // setInitialState(JSON.parse(puzzleObj.emptyPuzzle))
            // setPuzzleState(JSON.parse(puzzleObj.emptyPuzzle))
            // setBoardSolution(JSON.parse(puzzleObj.answeredPuzzle))
        }
        

        tokenCreator(initialState, puzzleState, boardSolution)
    },[puzzleObj])
    
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