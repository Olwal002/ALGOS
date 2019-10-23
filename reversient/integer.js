
//returns an integer that is the reverse

function reverseInt(num) {
    const reversed = num
            .toString()
            .split('')
            .reverse()
            .join('')
         
            return parseInt(reversed) * Math.sign(num);
}