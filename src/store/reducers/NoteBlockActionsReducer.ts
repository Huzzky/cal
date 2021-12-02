import { USER_WROTE_NOTE_AND_SAVE_IT } from '../../config'

const initialState: object = {
  userTextInNote: '',
}

type appOtherInfoReducerProps = {
  type: string
  userTextInNote: string
}

export const appOtherInfoReducer = (
  state = initialState,
  { type, userTextInNote }: appOtherInfoReducerProps,
) => {
  switch (type) {
    case USER_WROTE_NOTE_AND_SAVE_IT:
      return {
        ...state,
        userTextInNote: userTextInNote,
      }
    default:
      return state
  }
}
