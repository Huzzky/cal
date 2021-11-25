import {
  CLOSE_FORM_FOR_WRITE_TO_DAY_NOTE,
  OPEN_FORM_FOR_WRITE_TO_DAY_NOTE,
} from '../../config'

const initialState: object = {
  openNoteForDate: false,
  selectedDay: '',
}

type userActionsReducerProps = {
  type: string
  openNoteForDate: boolean
  selectedDay: string
}

export const userActionsReducer = (
  state = initialState,
  { type, selectedDay }: userActionsReducerProps,
) => {
  switch (type) {
    case OPEN_FORM_FOR_WRITE_TO_DAY_NOTE:
      return {
        ...state,
        openNoteForDate: true,
        // установка выбранного дня
        selectedDay: selectedDay,
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
