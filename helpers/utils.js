export const range = (start, end) => {
  console.log(1)
  console.log(2)
  return [...Array(end).keys()].map(el => el + start)
}
