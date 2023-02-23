// import React from 'react'

const sudGenerator=()=>{
    let gridArray = []
    let tempArray = [1,2,3,4,5,6,7,8,9];
    for(let i =0; i<9; i++){
        console.log("hello")
        let passArray = []

        for(let j =0; j<9; j++){
            let location =Math.floor(Math.random()*tempArray.length)
            let addedNumber = tempArray[location]
            console.log('tempArray ', tempArray, tempArray.length)
            console.log("added ", addedNumber)
            passArray.push(addedNumber)
            tempArray.splice(location,1)
            // console.log(passArray)
        }
        gridArray.push(passArray)
        passArray = []
        tempArray = [1,2,3,4,5,6,7,8,9];
    }
    console.log(gridArray)
    return gridArray
   
}

sudGenerator();
export default sudGenerator;