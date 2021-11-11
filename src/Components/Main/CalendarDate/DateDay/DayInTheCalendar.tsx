import { useDispatch, useSelector } from 'react-redux'
import { loadCalendar } from '../../../../store/actions/loadCalendarAction'
import style from './assets/_DayInTheCalendar.module.css'
export const DayInTheCalendar = (value: any): JSX.Element => {
  const dispatch = useDispatch()
  const state = useSelector(
    ({ monthDateReducer }: { monthDateReducer: { arrDate: number[] } }) =>
      monthDateReducer,
  )

  if (state.arrDate.length < 1) {
    console.log(state)
    loadCalendar(dispatch)
  }

  return (
    <div className={style.DayBlock}>
      <p className={style.DayNumber}>{value.DayNumber}</p>
    </div>
  )
}
