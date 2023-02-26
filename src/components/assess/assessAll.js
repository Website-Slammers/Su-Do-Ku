
import { rowAssessor } from "./rowAssess"
import { columnAssessor } from "./columnAssess"
import { blockAssessor } from "./blockAssess"

export function assessAll(gridArray,row,column){
    let finalSet = new Set([1,2,3,4,5,6,7,8,9])
    let maxArray = []
    maxArray.push(...rowAssessor(gridArray, row, column))
    maxArray.push(...columnAssessor(gridArray, row, column))
    maxArray.push(...blockAssessor(gridArray, row,column))
    // console.log("maxArray post", maxArray)
    // assess the set against another set of numbers to get the numbers that can still be used.
    //make a for loop to run through each array and apply them to the set then push the set back into an array and return it.
    for(let i=0; i<maxArray.length; i++){
        if(finalSet.has(maxArray[i])){
            finalSet.delete(maxArray[i])
        }
        
    }
    
    // console.log("final set" , Array.from(finalSet));
    
    return Array.from(finalSet)
}