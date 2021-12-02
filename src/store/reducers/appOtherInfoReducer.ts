import {
  CHANGE_MONTH_ON_CALENDAR,
  CHANGE_YEAR_ON_CALENDAR,
  LOADING_MONTH_AND_YEAR,
} from '../../config'

const initialState: object = {
  selectedYear: '',
  selectedMonth: '',
  openedNoteBlock: false,
}

type appOtherInfoReducerProps = {
  type: string
  selectedYear: string
  selectedMonth: string
}

export const appOtherInfoReducer = (
  state = initialState,
  { type, selectedMonth, selectedYear }: appOtherInfoReducerProps,
) => {
  switch (type) {
    case LOADING_MONTH_AND_YEAR:
      return {
        ...state,
        selectedYear: selectedYear,
        selectedMonth: selectedMonth,
      }
    case CHANGE_YEAR_ON_CALENDAR:
      return {
        ...state,
        selectedYear: selectedYear,
      }
    case CHANGE_MONTH_ON_CALENDAR:
      return {
        ...state,
        selectedMonth: selectedMonth,
      }
    default:
      return state
  }
}
