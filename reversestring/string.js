// the first way

function reverse(str){
    let reversed= ''; 

    for(let character of str ){
        reversed=character + reversed;
    }
    return reversed;
}

// the second way

function reverse(str){
return str 
     .split('')
     .reverse()
     .join('')
}

// the third way\

function reverse(str){
    return str.split('').reduce((prev,char) => char + prev,'')
}