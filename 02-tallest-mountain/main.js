/*
  TALLEST MOUNTAIN

  1. From scratch, create an array containing a bunch of numbers representing
     the heights of various mountains.
  2. Write a WHILE loop which identifies the height of the tallest of the
     available mountains in the array.
  3. Display the tallest height value on the page.
*/

// YOUR CODE HERE

let height = [0,123,85,79,63,12,75,42,780,1080,463,425]

let tallest = 0
let position = 0

while (position < height.length) {
   let currentHeight = height[position]
   if ( currentHeight > tallest) [
      tallest = currentHeight
   ]
  
   position += 1
}

console.log(tallest)
