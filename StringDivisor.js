/**Task 2
 * Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
 * This task is looking for the Greatest Common Divisor in a string
 * In math, the GDC identifies the greated divisor that can divide two numbers
 * So the GCD of two strings is the greatest substring(in length)that's present in both stringd
 */

function longestString (str1, str2) {
    let str1 = 'abcabc';
    let str2 = 'abc';

    //strictly not equal operand
    if (str1 + str2 !== str2 +str1) {
        return ("");
    } else if (str1 == str2) {
        return str1;
    } else if (str1.length > str2.length) {
        return longestString(str1.slice(str2.length), str2);
    } else {
        return longestString(str2.slice(str1.length), str1)
    }
   };
   console.log((longestString(str1, str2)));