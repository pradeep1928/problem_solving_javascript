function beautiNumber (arr) {
  const sortArr = arr.sort(function (a, b) { return a - b })
  const a = [sortArr[0]]
  const b = []
  sortArr.reduce((t, c, ci, i) => {
    if (t < c) {
      a.push(c)
    } else {
        console.log("ciiiiiiiii", ci, i)
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
  return [...new Set(d)]
// let
}
const a = [4, 2, 1, 3, 54, 12]
console.log('-----------------------------', beautiNumber(a))