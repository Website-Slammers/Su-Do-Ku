export async function getPuzzleById(id){
    try{
        const response = await fetch(`http://localhost:3001/api/puzzle/${id}`,
            {
                method: "GET",
                headers:{
                    "Content-Type": "application/json",
                },
            }
        )

        const puzzleData = await response.json();
        console.log("puzzleData: ", puzzleData)
        return puzzleData
    }catch(error){
        console.log(error)
    }
}
