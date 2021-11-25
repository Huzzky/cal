import { useDispatch } from 'react-redux'
import { userOpenOrCloseNote } from '../../../../../store/actions/userOpenOrCloseNote'
import { variableNoteArr } from '../../../../../config'
import style from '../../assets/_BtnsForm.module.css'
export const BtnFormClose = () => {
  const dispatch = useDispatch()

  return (
    <input
      className={style.BtnCloseFormNote}
      value="Close"
      type="submit"
      onClick={(e) => {
        e.preventDefault()
        userOpenOrCloseNote(dispatch, variableNoteArr[0])
      }}
    />
  )
}
