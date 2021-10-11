import { randomButtonList, randomAlphabetList } from './random.js'

let setQuiz = alphabet => {
  let chars = randomAlphabetList(alphabet)
  let buttons = randomButtonList()

  buttons.map((v, i) => {
    let button = $button(v)
    button.label(chars[i].name)
    button.class('default')
  })

  let showChar = $element('char')
  showChar.setHTML(chars[0].token)
  showChar.opacity(100)
  return { ok: buttons[0], ...chars[0] }
}

let setQuizScore = score => {
  let s = score.join('\n')
  $element('quiztable').setHTML(s)
  $window('quizscore')
}

let disableQuizButtons = () => ['a', 'b', 'c', 'd'].forEach(v => $button(v).disable())
let enableQuizButtons = () => ['a', 'b', 'c', 'd'].forEach(v => $button(v).enable())

let colorButtonSwitch = (alphabet, lettersLength) => {
  let setting = setQuiz(alphabet)
  let length = lettersLength - 1
  let score = new Array(letters)
  return (id) => {
    if (id === setting.ok) {
      score[length] = `<p class=ok>${setting.token} ${setting.name}</p>`
    } else {
      $button(id).class('bad')
      score[length] = `<p class=bad>${setting.token} ${setting.name}</p>`
    }
    $button(setting.ok).class('ok')
    disableQuizButtons()

    $element('char').opacity(0)
    setTimeout(() => {
      enableQuizButtons()
      setting = setQuiz(alphabet)
      if (length === 0)
        setQuizScore(score)
      else
        length--
    }, 500)
  }
}

let setQuizForm = () => {
  let form = $form('quizform')
  let alphabet = form('alphabet').getValue()
  let letters = form('letters').getValue()
  let button = colorButtonSwitch(alphabet, letters)
  $button('a').click(button)
  $button('b').click(button)
  $button('c').click(button)
  $button('d').click(button)
  $window('quiz')
}

let updateLettersLength = (id) => {
  let input = $input('letters')
  let value = parseInt(input.getValue())
  let min = parseInt(input.getMin())
  let max = parseInt(input.getMax())
  if (id === 'minus')
    if (min < value)
      input.setValue(value - 1)
  if (id === 'plus')
    if (max > value)
      input.setValue(value + 1)
}

$app(() => {
  $button('minus').click(updateLettersLength)
  $button('plus').click(updateLettersLength)
  $button('start').click(setQuizForm)
})