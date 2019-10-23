// write a function that accepts a string.The function should capitalize the first
// letter of each word in the string then return the capitalized a string
// the first way

function capitalize(str) {
    const words=[];
    for(let word of str.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1));
    }
    return word.join(' ');
}


//the second way

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1,str.length);
 }
