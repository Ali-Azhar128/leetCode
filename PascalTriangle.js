const PascalTriangle = (n) => {
    let arr = []
    let newArr = [1]
   for(let i = 0; i <= n; i++){
    if(i === 0){
        arr.push([1])
        continue
    }else if(i === 1){
        arr.push([1, 1])
        continue
    }
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
   return arr[n]
}


console.log(PascalTriangle(2))





// let arr = [[1], [1, 1]]
// const PascalTriangle = (n) => {
//     if(n === 0){
//         return arr[0]
//     }else if(n === 1){
//         return arr[1]
//     }
//     let newArr = [1]
//    for(let i = 2; i <= n; i++){
//         for(let j = 0; j <= i; j++){
//             if(j === 0){
//                 newArr[j] = 1
//             }
//             if(j === i){
//                 newArr[j] = 1
//                 break
//             }
//             newArr[j + 1] = arr[i - 1][j] + arr[i - 1][j + 1]
            
            
//         }
//         arr.push(newArr)
//         newArr = []
//    }
//    return arr[n]
// }


// console.log(PascalTriangle(4))