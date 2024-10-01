const plusOne = (nums) => {
    console.log(nums, 'num')
    const plusOne = parseInt(nums.join('')) + 1


const strArr = plusOne.toString()
const newArr = []

for(let i = 0; i < strArr.length; i++){
    newArr.push(parseInt(strArr[i]))
}
return newArr

}
console.log(plusOne([4, 3, 2, 1]))
