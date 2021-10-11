let baseElement = element => ({
  class: name => element.className = name,
  disable: () => element.disabled = true,
  enable: () => element.disabled = false,
})

let getElement = id => document.getElementById(id)

let findActiveWindow = () => Array.from(document.getElementsByTagName('window'))
  .filter(v => !v.hidden)[0]

let findWindows = () => Array.from(document.getElementsByTagName('window'))

let initCustomHtmlTagAttributes = () => {
  Array.from(document.body.getElementsByTagName('*')).forEach(v => {
    let getval = v.getAttribute('getval')
    if (getval) {
      let update = () => v.innerHTML = $element(getval).getValue()
      update()
      window.addEventListener('input', update)
    }
  })
}

let $form = formId => option => {
  let obj = getElement(formId)
  return {
    disable: index => obj[option][index].disabled = true,
    enable: index => obj[option][index].disabled = false,
    setValue: val => obj[option].value = `${val}`,
    getValue: () => obj[option].value,
  }
}

let $element = elementId => {
  let obj = getElement(elementId)
  return {
    opacity: val => obj.style.opacity = `${val}%`,
    setHTML: val => obj.innerHTML = `${val}`,
    getHTML: () => obj.innerHTML,
    setValue: val => obj.value = `${val}`,
    getValue: () => obj.value,
    ...baseElement(obj),
  }
}

let $input = inputId => {
  let obj = getElement(inputId)
  return {
    setValue: val => obj.value = `${val}`,
    getValue: () => obj.value,
    setMin: val => obj.min = `${val}`,
    getMin: () => obj.min,
    setMax: val => obj.max = `${val}`,
    getMax: () => obj.max,
    ...baseElement(obj),
  }
}

let $window = windowId => {
  let win = getElement(windowId)
  findActiveWindow().hidden = true
  win.hidden = false
  history.replaceState({ window: location.hash }, location.hash)
  location.hash = `#${win.id}`
}

let $button = buttonId => {
  let button = getElement(buttonId)
  return {
    click: fn => button.onclick = () => fn(button.id),
    label: name => button.innerHTML = `${name}`,
    ...baseElement(button),
  }
}

let $toggleFullScreen = () => {
  if (!document.fullscreenElement)
    document.documentElement.requestFullscreen()
  else if (document.exitFullscreen)
    document.exitFullscreen()
}

let $app = fn => {
  window.onload = fn
  window.onpopstate = () => {
    findWindows().forEach(w => {
      if (location.hash.slice(1) === w.id && w.getAttribute('ignore') === null)
        $window(w.id)
    })
  }
  location.hash = `#${findActiveWindow().id}`
  initCustomHtmlTagAttributes()
}
