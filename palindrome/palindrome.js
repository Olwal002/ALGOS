//palindrome-a string that form the same word if reversed

//the first way

function palindrome(str){
    const reversed=str
        .split('')
        .reverse()
        .join('')

        return str ===reversed
}

// The second way

function palindrome(str){
    return str.split('').every((char, i) =>{
        return char ===str[str.length - i - 1];
    })
}
    