// write a function that takes a positive number N 
// it should console.log a pyramid shape with N levels using the # character
//make sure the pyramid has spaces on both left and right hand side

function pyramid(n) {
    const midpoint = math.floor((2 * n - 1) /2); 

     for(let row=0;row<n;row++) {
         let level = '';

         for(let colum=0;colum<2*n-1;colum++) {
             if(midpoint - row <=colum && midpoint + row >=colum) {
                 level +='#';
             }else{
                 level += ' '
             }
         } 
         console.log(level)
     }
}