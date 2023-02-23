// import React from 'react'

const sudGenerator=()=>{
    let gridArray = []
    let tempArray = [1,2,3,4,5,6,7,8,9];
    let validNumberArray = [1,2,3,4,5,6,7,8,9]
    let currentColumn = []
    let currentArray = []
    let currentBlock =[]

    for(let row =0; row<9; row++){
        console.log("hello")
        let passArray = []

        for(let column=0; column<9; column++){
            
            currentColumn.push()
        }


        // for(let j =0; j<9; j++){
        //     let location =Math.floor(Math.random()*tempArray.length)
        //     let addedNumber = tempArray[location]
        //     console.log('tempArray ', tempArray, tempArray.length)
        //     console.log("added ", addedNumber)
        //     passArray.push(addedNumber)
        //     tempArray.splice(location,1)
        //     // console.log(passArray)
        // }
        gridArray.push(passArray)
        passArray = []
        tempArray = [1,2,3,4,5,6,7,8,9];
    }
    console.log(gridArray)
    return gridArray
   
}


function assessAll(gridArray,row,column){
    let finalSet = new Set()
    rowAssessor(gridArray, row, column)
    columnAssessor(gridArray, row, column)
    blockAssessor(gridArray, row,column)
}


function columnAssessor(gridArray,row, column ){
    let returnArrayC = []
    for(let i=0; i<row; i++){
        returnArrayC.push( gridArray[i][column])
    }
    console.log("returnArray" , returnArrayC)
    return returnArrayC
}

function rowAssessor(gridArray,row,column){
    let returnArrayR = []
    for(let i=0; i<column; i++){
        returnArrayR.push( gridArray[row][i])
    }
    console.log("returnArray" , returnArrayR)
    return returnArrayR
}

function blockAssessor(gridArray,row,column){
    let returnSet = new set()
    let rowStart =0;
    let rowEnd=2 ;
    let columnStart = 0;
    let columnEnd =2;
    if(row<=5 &&row>2)rowStart =3, rowEnd=5;
    if(row>5) rowStart =6, rowEnd=8;
    if(column<=5 && column >2) columnStart =3, columnEnd=5;
    if(column>5) columnStart=6, columnEnd =8
    for(let i=rowStart; i<=rowEnd; i++){
        for(let j=columnStart; j<=columnEnd; j++){
            returnSet.add(gridArray[i][j])
        }
    }
    if(returnSet.has(undefined)) returnSet.delete(undefined)
    console.log(returnSet)
    return Array.from(returnSet)
}


sudGenerator();
export default sudGenerator;
