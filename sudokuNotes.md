Hey Drew, dunno if you're gonna check this file out but:

I'm going to make my puzzle notes in this file, figured I should see if there's a substantial difference in the number of missing numbers on easy, medium, and hard, and what kind of logic is required to solve each number--- this should really help me write the puzzle algorithym.

Lets describe the methods I use to solve sudoku puzzles into 3 types:
type 1: a number is missing from a block, column, or row IE 1,2,3,4,5,6,8,9 7 is missing
type 2: a number is missing from a single type of number IE the 1's in a row or column  hint at the final 1 to be in a block
type 3: a number HAS to be in a specific row or column (but I don't know which location exactly) and that tells me where to put a different number (since the solution HAS to be a certain way somewhere else, it clues me in to where I have to put my numbers)

I noticed a 4th mechanism for solving paying attention to solutions that have to go somewhere in a block or row by neccessity

Puzzle 1
Easy :43 total missing spaces
Most pre-filled block 6 
Most empty block 2
block fillage amount array [6, 4, 3, 2, 5, 5, 5, 5, 3]

Solutions by value: 14 minutes while keeping track of these numbers
1: 17
2: 25
3: 0
4: 0

Puzzle 2
Easy : 43 total missing spaces (maybe I should try a different site)
Most pre-filled bloc:6
Most empty block :2
block fillage amount array [6,4,5,4,4,5,4,4,2]

Solutions by value: 
1: 15
2: 22
3: 0
4: 4

Puzzle 3
Medium : 51 total missing spaces
Most pre-filled block:5
Most empty block:2
block fillage amounts array [3,4,3,3,5,5,2,3,2]

Solutions by value: 16 minutes while keeping track of these numbers
1 : 20
2 : 27
3 : 4
4 : 1

