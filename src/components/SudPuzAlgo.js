//I'm going to make 3 different functions at a minimum
// I was thinking about using a random number generator to pick which algorythm to use to remove numbers as 
// well as an algorythm that pays attention to blocks and where numbers are to prevent an estranged disbalance

//to sum up my sudo code

// sudPuzAlgo(){
    //blockselector (picks blocks based on a random algorithym that also pays attention to amounts of numbers left)
    //logical solver algorithym (removes one number based on a percentage based random choice (aka, 
    //the final pieces of the sudoku puzzle always involve alogrithym 1, what number is left so the first 10 ish pieces will be removed by this algo)
    // after the iterator of blocks removed hits a certain amount it'll start using the second algorithym (mixed in with the first)
    // to determine which blocks to remove and then the third algorithym (the most complicated for sure)
    // easy mode (43 blocks removed) 10 : algo 1(100%), 10-20 algo 1(30%)algo2 (70%), 20-43 algo2(90%) algo3(10%)
    //
    //(in the specific block), analyzes it for valid logic)

//}


const sudPuzAlgo =(gridArray)=>{
    let numberOfBlocksRemoved = 0;
    let easy = 43;
    let medium =52;
    let rowRemoved = []
    let modeValue = easy;

    if(gridArray != undefined){
        rowRemoved = rowSelector(gridArray)
    }   
    //the literally impossible chance of hitting a 9 exactly prevented
    while(numberOfBlocksRemoved < modeValue){
        if(numberOfBlocksRemoved <= 10){
            
        }
        numberOfBlocksRemoved += 43
        
    }
    

    
    // if(gridArray !=undefined ){
    //     blockSelector(gridArray);
    // }
    

}



const rowSelector = (gridArray)=>{
    //return an array from 0-8 telling us how many numbers (unhidden) are in each row ()
    //then determine which row should be pulled from. with a math.random, 
    //a higher chance of rerolling if the number
    // is below certain thresholds
    let rowArray = [0,0,0,0,0,0,0,0,0]

    for(let row = 0; row<9; row++){
        for(let column=0; column<9; column++)
        if(gridArray[row][column] != 'x'){
            rowArray[row]= rowArray[row]+1
        }
    }
    console.log("rowArray ", rowArray)
    let rowIndex = pickingAlgo(rowArray)

    //if the selected row is above rounded value, set the index and return it
    

    return rowIndex
}

//dude I can't wait to work on this
const pickingAlgo = (rowArray)=>{
    
    let arrayMean = meanOfArray(rowArray)
    //picks a random location 
    let rowSelect = Math.floor(Math.random()*8.9999999);
    let rowIndex= 0
    if(rowArray[rowSelect] > arrayMean ){
        rowIndex = rowSelect
    }else if(rowArray[rowSelect] < arrayMean ){
        let rowReset = Math.random()
        if(rowReset < .2){
            pickingAlgo()
        } else{
            rowIndex = rowSelect
        }
        
    }
}


const meanOfArray = (rowArray) =>{
    const initialValue = 0;
    let roundedValue = Math.round(rowArray.reduce((accumulator, currentValue)=>
        accumulator + currentValue, initialValue
    )/9)
    console.log("rounded value", roundedValue);
    return roundedValue
}





//first lets slice all the arrays up into blocks
// function blockSelector(gridArray){
//     let momSaidGlobalVariablesAreBad = 9;
//     // left to right, top to bottom 0-8
//     //  ___ ___ ___
//     // | 0 | 1 | 2 |
//     //  --- --- --- 
//     // | 3 | 4 | 5 |
//     //  --- --- ---
//     // | 6 | 7 | 8 |
//     //  --- --- --- 
//     let blockArray = [];
//     let blockNumber = 0
//     let iterator =0;
    
//     for(let row=0; row<momSaidGlobalVariablesAreBad; row+=3){
//         for(let column= 0; column <momSaidGlobalVariablesAreBad; column +=3){
//             if(row )
//             let currentRow = gridArray[row]
//             let currentSlice = currentRow.slice(column, column+3)
//             console.log("currentSlice", currentSlice)
//             blockArray[blockNumber] = [currentSlice]
//         }
        
//     }
    






export default sudPuzAlgo