import {
  CHANGE_MONTH_ON_CALENDAR,
  CHANGE_YEAR_ON_CALENDAR,
  LOADING_MONTH_AND_YEAR,
  OPEN_FORM_FOR_WRITE_TO_DAY_NOTE,
} from '../../config'

// Передача  месяца, года
const addMonth = (dispatch: Function, selectedMonth: string) => {
  dispatch({
    type: CHANGE_MONTH_ON_CALENDAR,
    selectedMonth: selectedMonth,
  })
}
const addYear = (dispatch: Function, selectedYear: string) => {
  dispatch({
    type: CHANGE_YEAR_ON_CALENDAR,
    selectedYear: selectedYear,
  })
}

const addMonthAndYearWhenAppLoading = (
  dispacth: Function,
  selectedMonth: string,
  selectedYear: string,
) => {
  dispacth({
    type: LOADING_MONTH_AND_YEAR,
    selectedMonth: selectedMonth,
    selectedYear: selectedYear,
  })
}

// const openedNoteBlock = (dispatch: Function, openedNoteBlock: boolean) => {
//   dispatch({
//     type: OPEN_FORM_FOR_WRITE_TO_DAY_NOTE,
//     openedNoteBlock: !openedNoteBlock,
//   })
// }

export { addMonth, addYear, addMonthAndYearWhenAppLoading }
