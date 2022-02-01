const getRandomNumber = (from, to) => {
  return Math.floor(Math.random() * (to + 1 - from) + from)
}

export {
  getRandomNumber
}