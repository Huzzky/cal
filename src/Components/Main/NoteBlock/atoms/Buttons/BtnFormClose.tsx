import { useDispatch } from 'react-redux'
import { userOpenOrCloseNote } from '../../../../../store/actions/userOpenOrCloseNote'
import { variableNoteArr } from '../../../../../config'

export const BtnFormClose = () => {
  const dispatch = useDispatch()

  return (
    <button
      onClick={(e) => {
        e.preventDefault()
        userOpenOrCloseNote(dispatch, variableNoteArr[0])
      }}
    >
      Close
    </button>
  )
}
