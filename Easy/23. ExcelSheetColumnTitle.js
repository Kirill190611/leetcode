//Task: Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.
//
// For example:
//
// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28
// ...
//
//
// Example 1:
//
// Input: columnNumber = 1
// Output: "A"
// Example 2:
//
// Input: columnNumber = 28
// Output: "AB"
// Example 3:
//
// Input: columnNumber = 701
// Output: "ZY"
//
//
// Constraints:
//
// 1 <= columnNumber <= 2^31 - 1


//Link: https://leetcode.com/problems/excel-sheet-column-title/


//Solution:
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    var num = n;
    var tmp = 0;
    var res = '';
    while (num > 0) {
        tmp = num % 26;
        if (tmp === 0) tmp = 26;
        res = getChar(tmp) + res;
        num = (num - tmp) / 26;
    }
    return res;
};

var getChar = function (num) {
    var start = 'A'.charCodeAt(0);
    return String.fromCharCode(start + num - 1);
};