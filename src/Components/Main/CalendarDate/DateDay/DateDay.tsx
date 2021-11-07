import style from './assets/_DateDay.module.css'
import { DayInTheCalendar } from './DayInTheCalendar'

export const DateDay = () => {
  console.log(style)
  const date = +new Date(2021, 11, 0).getDate()
  let a = (date: number): number[] => {
    let arrayDate: number[] = []
    for (let i = 0; i < date; i++) {
      arrayDate.push(i + 1)
    }
    return arrayDate
  }
  return (
    <div className={style.dateDayBlock}>
      {a(date).map((value, index) => {
        return <DayInTheCalendar key={index} DayNumber={value} />
      })}
    </div>
  )
}
