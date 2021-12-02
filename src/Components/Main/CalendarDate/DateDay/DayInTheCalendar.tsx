import { useSelector } from 'react-redux'
import { BtnDayOnTheCalendar } from './atoms/BtnDayOnTheCalendar'

export const DayInTheCalendar = (value: any): JSX.Element => {
  const state = useSelector(
    ({ userActionsReducer }: { userActionsReducer: { selectedDay: string } }) =>
      userActionsReducer.selectedDay,
  )

  const cheekerOfSelectedDay = () => {
    // проврка на пустое хранилище
    return !state ? cheekerOfDisabledFields() : funcReturnBtn()
  }

  // проверка на то, что именно та да отмечена, а другие нет
  // отмеченная будет активна
  // другие просто заблокированы, пока открыто окно заметки
  const cheekerOfDisabledFields = () => {
    return +state === value.DayNumber ? <button>321</button> : funcReturnBtn()
  }

  const funcReturnBtn = () => {
    return <BtnDayOnTheCalendar value={value} />
  }

  return cheekerOfSelectedDay()
}
