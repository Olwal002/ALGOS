//check to see if two provided strings are anagram of each other i.e. 
//contains equal quantities of same letters
//one string is anagram of another if it uses the same characters
// in the same quantity,only consider characters,not spaces

function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
    return str.replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('')
}

module.exports = anagrams;