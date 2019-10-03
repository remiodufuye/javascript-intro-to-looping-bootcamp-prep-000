
function forLoop(array) {
      for ( let i = 0; i < 25; i++) {
          if ( i===1) {
           array.push("I am 1 strange loop.") ; 
          }
          else {
            array.push(`I am ${i} strange loops.`);
          }
      }
      return array ; 
}

function whileLoop(number) {
  const string = 'done' ;
  while (number > 0 ) {
    console.log(--number) ; 
  }
  return string ; 
}

function doWhileLoop() {
  
}

