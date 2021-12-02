import style from './assets/_DateDay.module.css'
import { BtnDayOnTheCalendar } from './atoms/BtnDayOnTheCalendar'

export const FieldDivWithDates = (): JSX.Element => {
  const funcReturnArrayGenerationDayInCalendar = () => {
    return generateDayInCalendar().map((value, index) => {
      return <BtnDayOnTheCalendar key={index} NumberOfDay={+value} />
    })
  }

  const generateDayInCalendar = (): number[] => {
    let arrayDate: number[] = []
    for (let i = 0; i < +new Date(2021, 10, 0).getDate(); i++) {
      arrayDate.push(i + 1)
    }
    return arrayDate
  }

  return (
    <div className={style.dateDayBlock}>
      {funcReturnArrayGenerationDayInCalendar()}
    </div>
  )
}
