export const setItem = (key, token) => {
  try {
    localStorage.setItem(key, JSON.stringify(token))
  } catch (e) {
  }
}

export const getItem = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key))
  } catch (e) {
  }
}
