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
        // установка выбранного дня
        selectedDay: selectedDay,
        // установка выбранного месяца
        selectedMonth: selectedMonth,
        // установка выбранного года
        selectedYear: selectedYear,
      }
    case CLOSE_FORM_FOR_WRITE_TO_DAY_NOTE:
      return {
        ...state,
        openNoteForDate: false,
        selectedDay: '',
        selectedMonth: '',
        selectedYear: '',
      }
    default:
      return state
  }
}
