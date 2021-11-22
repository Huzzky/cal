import { useDispatch } from 'react-redux'
import { variableNoteArr } from '../../../../config'
import { userOpenOrCloseNote } from '../../../../store/actions/userOpenOrCloseNote'
import style from './assets/_DayInTheCalendar.module.css'
export const DayInTheCalendar = (value: any): JSX.Element => {
  const dispatch = useDispatch()
  return (
    <button
      className={style.DayBlock}
      onClick={() => {
        userOpenOrCloseNote(dispatch, variableNoteArr[1], value.DayNumber)
      }}
    >
      <p className={style.DayNumber}>{value.DayNumber}</p>
    </button>
  )
}
