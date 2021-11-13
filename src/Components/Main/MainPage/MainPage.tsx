import { CalendarDateComponents } from '../CalendarDate/CalendarDateComponents'
import style from './_MainPage.module.css'

export const MainPage = (): JSX.Element => {
  return (
    <div className={style.MainPageBlock}>
      <CalendarDateComponents />
    </div>
  )
}
