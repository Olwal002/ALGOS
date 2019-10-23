// write a function that takes a positive number N 
// it should console.log a pyramid shape with N levels using the # character
//make sure the pyramid has spaces on both left and right hand side

function pyramid(n) {
    const midpoint = Math.floor((2 * n - 1) /2); 

     for(let row=0;row<n;row++) {
         let level = '';

         for(let column=0;column<2*n-1;column++) {
             if(midpoint - row <=column && midpoint + row >=column) {
                 level +='#';
             }else{
                 level += ' '
             }
         } 
         console.log(level);
     }
} 