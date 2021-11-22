import {
  OPEN_FORM_FOR_WRITE_TO_DAY_NOTE,
  CLOSE_FORM_FOR_WRITE_TO_DAY_NOTE,
  variableNoteArr,
} from '../../config'

const userOpenOrCloseNote: Function = (
  dispatch: Function,
  variableNote: string,
) => {
  if (variableNote === variableNoteArr[1]) {
    dispatch({
      type: OPEN_FORM_FOR_WRITE_TO_DAY_NOTE,
    })
  } else if (variableNote === variableNoteArr[0]) {
    dispatch({
      type: CLOSE_FORM_FOR_WRITE_TO_DAY_NOTE,
    })
  }
}

export { userOpenOrCloseNote }
