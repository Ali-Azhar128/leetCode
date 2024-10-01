var searchInsert = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === target){
            return i
        }
        if(nums[0] > target){
            return 0
        }
        if(target > nums[nums.length - 1]){
            return nums.length
        }
        if(nums[i] < target && nums[i + 1] > target){
            return i + 1
        }
    }
};

console.log(searchInsert([1, 3, 4, 5], 2))