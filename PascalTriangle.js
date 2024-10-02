let arr = [[1], [1, 1]]
const PascalTriangle = (n) => {
    let newArr = [1]
   for(let i = 2; i < n; i++){
        for(let j = 0; j <= i; j++){
            if(j === 0){
                newArr[j] = 1
            }
            if(j === i){
                newArr[j] = 1
                break
            }
            newArr[j + 1] = arr[i - 1][j] + arr[i - 1][j + 1]
            
            
        }
        arr.push(newArr)
        newArr = []
   }
}
PascalTriangle(6)

console.log(arr)