import { useDispatch, useSelector } from 'react-redux'
import { variableNoteArr } from '../../../../../config'
import { userOpenOrCloseNote } from '../../../../../store/actions/userOpenOrCloseNote'
import style from '../assets/_DayInTheCalendar.module.css'

export const BtnDayOnTheCalendar = (value: { NumberOfDay: number }) => {
  const state = useSelector(
    ({
      userActionsReducer,
    }: {
      userActionsReducer: { selectedDay: string; openNoteForDate: boolean }
    }) => userActionsReducer,
  )
  const dispatch = useDispatch()
  return (
    <button
      disabled={state.openNoteForDate ? true : false}
      className={style.DayBlock}
      onClick={() => {
        userOpenOrCloseNote(dispatch, variableNoteArr[1], value.NumberOfDay)
      }}
    >
      <p className={style.DayNumber}>{value.NumberOfDay}</p>
    </button>
  )
}
