export const range = (start, end) => {
  console.log(1)
  return [...Array(end).keys()].map(el => el + start)
}
