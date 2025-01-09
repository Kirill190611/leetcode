//Task: Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//
// An input string is valid if:
//
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
//
//
// Example 1:
//
// Input: s = "()"
//
// Output: true
//
// Example 2:
//
// Input: s = "()[]{}"
//
// Output: true
//
// Example 3:
//
// Input: s = "(]"
//
// Output: false
//
// Example 4:
//
// Input: s = "([])"
//
// Output: true
//
//
//
// Constraints:
//
// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.


//Link: https://leetcode.com/problems/valid-parentheses/description/


//Solution:
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = s => {
    let result = [];
    let length = s.length;
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    for (let i = 0; i < length; i++) {
        if (result.length > 0 && map[result[result.length - 1]] === s[i]) {
            result.pop();
        } else {
            result.push(s[i]);
        }
    }
    return result.length === 0;
};