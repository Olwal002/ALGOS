// write a program that console log the numbers from 1 to n.But for multiples of three print


function fizzBuzz(n) {
    for(let i = 1;1 <=n;i++) {
        // is the number a multiple of 3 and 5?
        if(i %3===0 && i %5===0) {
            console.log('fizzBuzz');
        }else if(1 %3===0) {
            //is the number a multiple of 3?
            console.log('fizz');
        }else if(1 %5===0){
            //is the number a multiple of 5?
            console.log('buzz')
        }else{
            console.log(i)
        }
    }
}