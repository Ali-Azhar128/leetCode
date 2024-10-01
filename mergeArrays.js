const removeDup = {}
const arr = [1, 2, 3, [4, 5, 6]]
let nestedArr = []
let count = 0

for(let i = 0; i < arr.length; i++){
    if(arr[i] !== undefined && arr[i][0] !== undefined){
        nestedArr = arr[i]
        nestedIndex = i
        while(nestedArr[count] !== undefined){

            if(count === 0){
                arr[i] = nestedArr[count]
                count++
                continue
            }
            arr.push(nestedArr[count])
            count++
        }
    }

}

console.log(arr)

