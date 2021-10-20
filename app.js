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
  let alphabet = $radio('alphabet')
  let letters = $input('letters').getValue()
  let button = colorButtonSwitch(alphabet, letters)
  $button('a').click(button)
  $button('b').click(button)
  $button('c').click(button)
  $button('d').click(button)
  $window('quiz')
}

$app(() => {
  let input = $input('letters')
  $button('minus').click(input.stepDown)
  $button('plus').click(input.stepUp)
  $button('start').click(setQuizForm)
})