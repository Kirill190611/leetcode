//Task: Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
//
// You must write an algorithm with O(log n) runtime complexity.
//
//
//
// Example 1:
//
// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:
//
// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:
//
// Input: nums = [1,3,5,6], target = 7
// Output: 4
//
//
// Constraints:
//
// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104


//Link: https://leetcode.com/problems/search-insert-position/description/


//Solution:
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
    let left = 0, right = nums.length

    while (left < right) {
        const mid = left + Math.floor((right - left) / 2)
        if(nums[mid] === target) {
            return mid
        } else if(nums[mid] > target) {
            right = mid
        } else {
            left = mid + 1
        }
    }
    return left
};