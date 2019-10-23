// write a function that returns the number of vowels used in a string
// vowels are characters 'a','e','i','o','u'

// the first way
 function vowels(str) {
     let count = 0;
     const checker = ['a','e','i','o','u'];

     for(char of str.toLowerCase()) {
         if(checker.includes(char)) {
             count++
         }
     }
     return count;
 }