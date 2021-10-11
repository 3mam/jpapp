import { hiragana } from './hiragana.js'
import { katakana } from './katakana.js'

export let randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
export let randomButtonList = () => {
  let list = uniqueRandomNumberList(0, 3, 4)
  let chars = ['a', 'b', 'c', 'd']
  return list.map((v) => chars[v])
}

let selectAlphabet = (alphabet) => {
  switch (alphabet) {
    case 'hiragana': return hiragana()
    case 'katakana': return katakana()
    default: return null
  }
}

export let randomAlphabetList = alphabet => {
  let chars = selectAlphabet(alphabet)
  return uniqueRandomNumberList(0, chars.getSize() - 1, 4).map((v) => chars.getChar(v))
}

export let uniqueRandomNumberList = (min, max, size) => {
  let unique = new Set
  while (unique.size !== size)
    unique.add(randomNumber(min, max))
  return [...unique]
}
