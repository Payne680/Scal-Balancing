const Validate = () => {
  // At this point i just did the validation
  document.getElementById('error-textmsg').innerHTML = ''
  const getFirstText = document.getElementById('first-array').value
  const getSecondText = document.getElementById('second-array').value
  if (getFirstText.length == 0 || getSecondText.length == 0) {
    document.getElementById('error-textmsg').innerHTML =
        'Enter a value for the empty textbox    <br/>'
    return
  }
  const firstTextArray = getFirstText.split(',').map(function (item) {
    return parseInt(item, 10)
  })
  const secondTextArray = getSecondText.split(',').map(function (item) {
    return parseInt(item, 10)
  })

  for (let i = 0; firstTextArray.length > i; i++) {
    if (typeof firstTextArray[i] !== 'number') {
      document.getElementById('error-textmsg').innerHTML =
          'A non integer value was entered'
      return
    }
  }

  for (let i = 0; secondTextArray.length > i; i++) {
    if (typeof secondTextArray[i] !== 'number') {
      document.getElementById('error-textmsg').innerHTML =
          'A non integer value was entered'
      return
    }
  }
  if (firstTextArray.length != 2) {
    document.getElementById('error-textmsg').innerHTML =
        'The first Textbox must be with just     2 digits <br/>'
    return
  }
  // am amount to begin the sort
  const maxValue = Math.max.apply(null, firstTextArray)
  const minValue = Math.min.apply(null, firstTextArray)
  const diff = maxValue - minValue
  const firstSort = secondTextArray.includes(diff)
  if (firstSort == true) {
    const getLastValue = diff + minValue
    document.getElementById('show-result').innerHTML =
        'the output that will balance the scale is ' +
        diff +
        ' it will be added to ' +
        minValue +
        ' to make it ' +
        getLastValue
    return
  }
  let firstResult = 0
  let secondResult = 0

  for (let i = 0; secondTextArray.length > i; i++) {
    firstResult = secondTextArray[i]
    const SplicedList = secondTextArray
    const getrawSort = SplicedList.map(function (x) {
      if (secondTextArray[i] != x) {
        return x - secondTextArray[i]
      }
      return x
    })
    if (getrawSort.includes(diff)) {
      const index = getrawSort.indexOf(diff)
      secondResult = secondTextArray[index]
      document.getElementById('show-result').innerHTML =
          'The two values are ' + firstResult + ' and ' + secondResult

      var finalResult = true
      break
    }
  }
  if (finalResult != true) {
    document.getElementById('show-result').innerHTML = 'Scale Imbalanced'
  }
}
