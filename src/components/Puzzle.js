import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'


import { tokenCreator } from './tokens/tokenCreator'
import { getPuzzleById } from './api/puzzle'
import  {sudGenerator}  from './boardGenerator/SudGenerator'
import {sudPuzAlgo} from './boardGenerator/SudPuzAlgo'
import { sudValidator } from './boardGenerator/SudValidator'


const Puzzle =()=>{
    let difficulty = 1
    const [winningClass, setWinningClass] = useState("u-hidden")
    const [answerIterator, setAnswerIterator] = useState(0)
    const [targetCoordinates, setTargetCoordinates] = useState([])
    const [puzzleObj, setPuzzleObj] = useState({})
    const [emptyPuzzle, setEmptyPuzzle] = useState([])
    const [answeredPuzzle, setAnsweredPuzzle] = useState([])
    const [puzzleId, setPuzzleId] = useState()
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

        // console.log(puzzleState);
    async function getAndParsePuzzle(){
        try{
        let id = Math.ceil(Math.random()*366)
        const puzzleData = await getPuzzleById(id)
        if(puzzleData) setPuzzleObj(puzzleData)
        else{
            console.log('api not found, generating puzzle seperately')

            let answeredPuzzle = sudGenerator()
            if(!sudValidator(answeredPuzzle)){
                answeredPuzzle = sudGenerator()
            }

                let emptyPuzzle = JSON.parse(JSON.stringify(answeredPuzzle))
                emptyPuzzle = sudPuzAlgo(emptyPuzzle);
            
                setPuzzleObj({
                    'id': 999,
                    'puzzletype':'easy',
                    'answeredpuzzle':answeredPuzzle,
                    'emptypuzzle':emptyPuzzle
                })
            }
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        // console.log('hellosss')
        if(localStorage.getItem("puzzleState")&&localStorage.getItem("emptyPuzzle")&& localStorage.getItem("answeredPuzzle")){
            let newState = JSON.parse(localStorage.getItem("puzzleState"))
            setPuzzleState(newState)
            // console.log("here ", newState)
            let newEmptyPuzzle = JSON.parse(localStorage.getItem("emptyPuzzle"))
            setEmptyPuzzle(newEmptyPuzzle)
            setAnsweredPuzzle(JSON.parse(localStorage.getItem("answeredPuzzle")))
            setPuzzleId(JSON.parse(localStorage.getItem("puzzleId")))

        }else{
            getAndParsePuzzle()
            // console.log(puzzleObj)
        }
    },[])
    //token maker
    useEffect(()=>{
        // console.log("what is happening", puzzleObj)
        if(puzzleObj.emptypuzzle){
            let emptyPuzzle = puzzleObj.emptypuzzle
            let answeredPuzzle = puzzleObj.answeredpuzzle
            // console.log("hello", emptyPuzzle)
            setEmptyPuzzle(emptyPuzzle)
            setPuzzleState(emptyPuzzle)
            setAnsweredPuzzle(answeredPuzzle)
            tokenCreator(emptyPuzzle, emptyPuzzle, answeredPuzzle)
        }     
        
    },[puzzleObj])

    useEffect(()=>{
        // console.log(answerIterator)
        if(answerIterator == difficulty){
            console.log('You won!!!')
            setAnswerIterator(0);
        }
    },[answerIterator])
    
    function holdNumber(event){
        // console.log(event.key)
        let numbers = '123456789'
        if(numbers.includes(event.key))
        {
            let state = structuredClone(puzzleState)
            let answer = structuredClone(answeredPuzzle)
            
            const [row,column] = targetCoordinates
            // console.log("answer, ", answer[row][column]," event.key ", event.key)
            if(answer[row][column] == event.key){
                state[row][column] = +event.key
                setPuzzleState(state)
                setAnswerIterator(answerIterator+1)
                // console.log(answerIterator);
            }else{
                console.log("you're wrong you dunce.")
            }
            
        }
    }

// console.log(targetCoordinates)

    return(
        // <div className='flex-box'>
            <div className="puzzle" tabIndex='0' onKeyDown={holdNumber}>
                {
                    !puzzleState || !puzzleState[0]?<div>There's no data</div> :
                    puzzleState.map((row, index)=>{
                        return(
                            <div   className='puzzle__row'>
                                {
                                    row.map((column, idx)=>{
                                        return(
                                            <div onClick={(event)=>{ setTargetCoordinates([index,idx])}} className='puzzle__number-box'>  {column === 'X'? `_` :column}  </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            <div className={winningClass}>
                <span>Great Job!</span>
                <Link to="/play">Play Again</Link>
            </div>
            </div>

    )
}

export default Puzzle;