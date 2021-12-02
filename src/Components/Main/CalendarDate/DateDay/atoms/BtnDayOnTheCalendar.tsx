import { useDispatch, useSelector } from 'react-redux'
import { variableNoteArr } from '../../../../../config'
import { userOpenOrCloseNote } from '../../../../../store/actions/userOpenOrCloseNote'
import style from '../assets/_DayInTheCalendar.module.css'

type BtnDayOnTheCalendarProps = {
  value: {
    DayNumber: number
  }
}

export const BtnDayOnTheCalendar = ({ value }: BtnDayOnTheCalendarProps) => {
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
      disabled={!state.openNoteForDate ? false : true}
      className={style.DayBlock}
      onClick={() => {
        userOpenOrCloseNote(dispatch, variableNoteArr[1], value.DayNumber)
      }}
    >
      <p className={style.DayNumber}>{value.DayNumber}</p>
    </button>
  )
}
