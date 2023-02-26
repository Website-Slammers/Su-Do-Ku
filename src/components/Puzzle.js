import React, {useState, useEffect} from 'react'
import sudGenerator from './boardGenerator/SudGenerator'
import sudValidator from './boardGenerator/SudValidator'
import sudPuzAlgo from './boardGenerator/SudPuzAlgo'


const Puzzle =()=>{
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
        let newPuzzle = sudGenerator()
        const solution = newPuzzle

        while(newPuzzle === false || sudValidator(newPuzzle) === false){
            newPuzzle = sudGenerator()
        }
        console.log("puzzle Solution", solution)
        sudPuzAlgo(newPuzzle)
        setPuzzleState(newPuzzle);
        
    },[])
    
    useEffect(()=>{
        // console.log(puzzleState)
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