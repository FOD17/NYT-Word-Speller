import wordList from "./wordlist.js"

/**
 * Get longest word possible - early check done once
 *
 * Get every combination of letters
 *
 * Go through array, lower case, and ask
 */

// Get Random Letters - 7
const consonant = [
  "b",
  "c",
  "d",
  "f",
  "g",
  "h",
  "k",
  "l",
  "m",
  "n",
  "p",
  "q",
  "r",
  "s",
  "t",
  "v",
  "w",
  "x",
  "y",
  "z",
]

const vowels = ["a", "e", "i", "o", "u"]

const getLettersForGame = () => {
  const consonantSet = new Set()
  const vowelSet = new Set()

  let stop = 0
  while (consonantSet.size < 4) {
    let letter = consonant[Math.floor(Math.random() * consonant.length)]

    consonantSet.add(letter)
    stop++
  }

  while (vowelSet.size < 3) {
    let letter = vowels[Math.floor(Math.random() * vowels.length)]
    vowelSet.add(letter)
  }

  const lettersForGame = [...consonantSet, ...vowelSet]
  console.log(lettersForGame)
  return lettersForGame
}
const findCorrespondingWords = () => {
  let letters = getLettersForGame()
  let possibleWords = []
  const letterSet = Array.from(new Set(letters))
  let isSubset = false

  for (let i = 0; i < wordList.length; i++) {
    const wordSplit = Array.from(new Set(wordList[i].split("")))
    isSubset = wordSplit.every((letter) => letterSet.includes(letter))

    if (isSubset) {
      const fullWord = wordList[i]
      possibleWords.push(fullWord)
    }
  }
  console.log(possibleWords)
  return possibleWords
}

console.log(findCorrespondingWords())

// Assign Letters To SVGS

let svgs = document.getElementsByTagName("svg")

for (const child of svgs) {
  child.addEventListener("click", () => {
    childrenHTML = child.children
    console.log(childrenHTML[1].innerHTML)
  })
}
