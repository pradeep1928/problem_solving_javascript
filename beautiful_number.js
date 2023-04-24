/*
 Beautiful element An element in the array A at an index ind is called beautiful if i=0∑ind−1​A[i]≤A[ind]. In other words, an element is beautiful if it is greater than or equal to the sum of elements before it. The first element of the array is always considered to be beautiful. You are given an array A of N integers. Task Determine the maximum number of beautiful elements in the array after rearranging the array. Example Assumptions - N=4 - A=[4,2,1,3] Approach You can rearrange the array as [1,2,4,3]. - 1 becomes beautiful as there is no element before it. - 2 becomes beautiful as the sum of elements before it is 1. - 4 becomes beautiful as the sum of elements before it is 3. - 3 is not beautiful as the sum of elements before it is 7(1+2+5) wh is higher than 3 . Thus the answer is 3. Function description Complete the function 
*/


/**
 * The function takes an array of numbers, sorts them, removes duplicates, and returns a new array with
 * only the "beautiful" numbers (numbers that are either increasing or have a higher number later in
 * the array).
 * @param arr - The input array of numbers. In this case, it is [4, 2, 1, 3, 54, 12, 101, 21].
 * @returns an array of unique numbers sorted in ascending order.
 */
function beautiNumber (arr) {
  const sortArr = arr.sort(function (a, b) { return a - b })
  const a = [sortArr[0]]
  const b = []
  sortArr.reduce((t, c, ci, i) => {
    if (t < c) {
      a.push(c)
    } else {
      for (let x = ci; x < i.length; x++) {
        if (t < i[x]) {
          a.push(i[x])
          return t + i[x]
        } else {
          b.push(i[x])
        }
      }
    }
    return t + c
  })
  console.log('----Number of count ------', a.length)
  const c = [...new Set(b)]
  const d = [...a, ...c]
  console.log("--bb--", d)
  console.log("--bb set --", new Set(d))
  return [...new Set(d)]
// let
}
const a = [4, 2, 1, 3, 54, 12, 101, 21]
console.log('-----------------------------', beautiNumber(a))