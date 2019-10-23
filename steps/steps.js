// write a function that accepts a positive number N
// it should console.log a triangle shape


function steps(n) {
    for(let row=0;row < n;row++){
        let stair = ''; 

        for(let colum = 0;colum < n;colum++){
            if(colum<= row) {
                stair +='#';
            }else {
                stair += ' '
            }
        }
        console.log(stair);
    }
}