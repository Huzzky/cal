import { LOAD_CALENDAR_USER } from '../../config'

const loadCalendar: Function = (dispatch: Function) => {
  dispatch({
    type: LOAD_CALENDAR_USER,
  })
}

export { loadCalendar }
