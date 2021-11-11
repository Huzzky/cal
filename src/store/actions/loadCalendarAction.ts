import { LOAD_CALENDAR_USER } from '../../config'

let a = (date: number): number[] => {
  let arrayDate: number[] = []
  for (let i = 0; i < date; i++) {
    arrayDate.push(i + 1)
  }
  return arrayDate
}

const loadCalendar: Function = (dispatch: Function) => {
  dispatch({
    type: LOAD_CALENDAR_USER,
    arrDate: a(+new Date(2021, 10, 0).getDate()),
  })
}

export { loadCalendar }
