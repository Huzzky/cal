const ChangeEndOfAMonthTrue = (month: string) => {
  if (month[month.length - 1] === 'ь') {
    month = month.replace('ь', 'я')
  } else if (month === 'Март' || month === 'Август') {
    month = month + 'а'
  } else if (month === 'Май') {
    month = month.replace('й', 'я')
  }
  return month
}

export { ChangeEndOfAMonthTrue }
