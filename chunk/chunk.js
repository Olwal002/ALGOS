// given an aray and chunk size,divide the array into manny subarrays 
// where each subarray is of length size

function chunk(array,size) {
    const chunked = [];
    let index=0;

    while(index < array.length) {
        chunked.push(array.slice(index, index + size));
        index += size;
    }
    return chunked;
}
