import {
  CLOSE_FORM_FOR_WRITE_TO_DAY_NOTE,
  OPEN_FORM_FOR_WRITE_TO_DAY_NOTE,
} from '../../config'

const initialState: object = {
  openNoteForDate: false,
}

type userActionsReducerProps = {
  type: string
  openNoteForDate: boolean
}

export const userActionsReducer = (
  state = initialState,
  { type }: userActionsReducerProps,
) => {
  switch (type) {
    case OPEN_FORM_FOR_WRITE_TO_DAY_NOTE:
      return {
        ...state,
        openNoteForDate: true,
      }
    case CLOSE_FORM_FOR_WRITE_TO_DAY_NOTE:
      return {
        ...state,
        openNoteForDate: false,
      }
    default:
      return state
  }
}
