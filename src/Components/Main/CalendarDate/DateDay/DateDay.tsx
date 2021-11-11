import { useDispatch, useSelector } from 'react-redux'
import { loadCalendar } from '../../../../store/actions/loadCalendarAction'
import style from './assets/_DateDay.module.css'
import { DayInTheCalendar } from './DayInTheCalendar'

export const DateDay = () => {
  const state = useSelector(
    ({ monthDateReducer }: { monthDateReducer: { arrDate: number[] } }) =>
      monthDateReducer.arrDate,
  )
  return (
    <div className={style.dateDayBlock}>
      {state.map((value, index) => {
        return <DayInTheCalendar key={index} DayNumber={value} />
      })}
    </div>
  )
}
