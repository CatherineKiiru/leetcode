// Task
//Merge the Two Strings by adding letters in alternating order

function mergeAlternately(str1, str2) {
  let a = str1.split("").filter(Boolean);
  let b = str2.split("").filter(Boolean);
  let mergeString = "";

  for (let i = 0; i < a.length || i < b.length; i++) {
    if (i < a.length) mergeString += a[i];
    if (i < b.length) mergeString += b[i];
  }
  return mergeString;
}
console.log(mergeAlternately('abc', 'def'));
console.log(mergeAlternately('ab', 'def'));

/*result
abcdef
abdef*/

/*Main concepts in the solution
- Split method splits str1 & str2 into individual characters & stored in arrays a & b
- filter method + Boolean callback checks for any falsy values or blank characters such as 
- For loop iterates through both arrays to check if i is less than the length of each array

*/

// Alternative solution