import { useDispatch } from 'react-redux'
import { variableNoteArr } from '../../../../config'
import { userOpenOrCloseNote } from '../../../../store/actions/userOpenOrCloseNote'
import style from '../assets/_NoteBlock.module.css'

export const BackgroundFormNote = () => {
  const dispatch = useDispatch()

  return (
    <div
      className={style.BackgroundForm}
      onClick={() => {
        // Фон используется для закрытия
        userOpenOrCloseNote(dispatch, variableNoteArr[0])
      }}
    ></div>
  )
}
