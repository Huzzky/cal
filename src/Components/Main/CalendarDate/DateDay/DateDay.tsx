import style from './assets/_DateDay.module.css'
import { DayInTheCalendar } from './DayInTheCalendar'

export const DateDay = () => {
  let generateDayInCalendar = (): number[] => {
    let arrayDate: number[] = []
    for (let i = 0; i < +new Date(2021, 10, 0).getDate(); i++) {
      arrayDate.push(i + 1)
    }
    return arrayDate
  }

  return (
    <div className={style.dateDayBlock}>
      {generateDayInCalendar().map((value, index) => {
        return <DayInTheCalendar key={index} DayNumber={value} />
      })}
    </div>
  )
}
