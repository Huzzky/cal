import style from './assets/_DayInTheCalendar.module.css'
export const DayInTheCalendar = (value: any): JSX.Element => {
  return (
    <div className={style.DayBlock}>
      <p className={style.DayNumber}>{value.DayNumber}</p>
    </div>
  )
}
