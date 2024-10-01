var lengthOfLastWord = function(s) {
    let count = 0
    const str = s.trim()
    for(let i = str.length - 1; i >= 0; i--){
        if(str[i] !== ' '){
            count++
        }else{
            return count
        }
        if(i === 0){
            return count
        }
    }
};

console.log(lengthOfLastWord('My Name is Ali'))