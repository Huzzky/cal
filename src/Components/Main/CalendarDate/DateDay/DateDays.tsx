import { useSelector } from 'react-redux'
import { FieldDivWithDates } from './FieldDivWithDates'

export const DateDays = (): JSX.Element => {
  const state = useSelector(
    ({ userActionsReducer }: { userActionsReducer: { selectedDay: string } }) =>
      userActionsReducer.selectedDay,
  )

  const cheekerOfSelectedDay = () => {
    // проврка на пустое хранилище
    return state ? checkeerOfSelectedDayForBtnDisable() : <FieldDivWithDates />
  }

  const checkeerOfSelectedDayForBtnDisable = () => {
    // проверка, что число не больше числа дней в месяце
    return +state > 0 && +state < 32 ? (
      <FieldDivWithDates />
    ) : (
      <h1>Что-то пошло не так, перезагрутие страницу</h1>
    )
  }

  return cheekerOfSelectedDay()
}
