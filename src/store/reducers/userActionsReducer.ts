import {
  CLOSE_FORM_FOR_WRITE_TO_DAY_NOTE,
  OPEN_FORM_FOR_WRITE_TO_DAY_NOTE,
} from '../../config'

const initialState: object = {
  openNoteForDate: false,
  selectedDay: '',
  selectedYear: '',
  selectedMonth: '',
}

type userActionsReducerProps = {
  type: string
  openNoteForDate: boolean
  selectedDay: string
  selectedYear: string
  selectedMonth: string
}

export const userActionsReducer = (
  state = initialState,
  { type, selectedDay, selectedMonth, selectedYear }: userActionsReducerProps,
) => {
  switch (type) {
    case OPEN_FORM_FOR_WRITE_TO_DAY_NOTE:
      return {
        ...state,
        openNoteForDate: true,
        selectedDay: selectedDay,
        selectedMonth: selectedMonth,
        selectedYear: selectedYear,
      }
    case CLOSE_FORM_FOR_WRITE_TO_DAY_NOTE:
      return {
        ...state,
        openNoteForDate: false,
        selectedDay: '',
      }
    default:
      return state
  }
}
