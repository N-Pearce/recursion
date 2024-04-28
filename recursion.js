function product(nums, i=0){
    if (i === nums.length) return 1;
    return nums[i] * product(nums, i+1)
}

function longest(words, long=0, i=0){
    if (i === words.length) return long
    if (words[i].length > long) long = words[i].length
    return longest(words, long, i+1)
}

function everyOther(str, out='', i=0){
    if (i === str.length) return out
    if (i % 2 === 0) out += str[i]
    return everyOther(str, out, i+1)
}

function isPalindrome(str, idx=0){
    let leftIdx = idx
    let rightIdx = str.length - idx - 1
    if (leftIdx >= rightIdx) return true
    console.log(str[leftIdx])
    console.log(str[rightIdx])
    if (str[leftIdx] !== str[rightIdx]) return false
    return isPalindrome(str, idx + 1)
}

function findIndex(animals, search, i=0){
    if (i === animals.length) return -1
    if (animals[i] === search) return i
    return findIndex(animals, search, i+1)
}

function revString(str, out='', i=str.length-1){
    if (i < 0) return out
    out += str[i];
    return revString(str, out, i-1)
}

function gatherStrings(obj, out=[], i=0){
    let vals = Object.values(obj)
    if (i === vals.length) return out;
    if (typeof vals[i] === 'object') gatherStrings(vals[i], out)
    if (typeof vals[i] === 'string') out.push(vals[i])
    return gatherStrings(obj, out, i+1)
}

module.exports = {
    product,
    longest,
    everyOther,
    isPalindrome,
    findIndex,
    revString,
    gatherStrings
}