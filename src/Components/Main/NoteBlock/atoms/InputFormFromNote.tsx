import { useSelector } from 'react-redux'
import { months } from '../../../../config'
import { ChangeEndOfAMonthTrue } from '../../../../utils/ChangeEndOfAMonthTrue'
import style from '../assets/_NoteBlock.module.css'

export const InputFormFromNote = () => {
  const stateAppInfoDate = useSelector(
    ({
      appOtherInfoReducer,
    }: {
      appOtherInfoReducer: { selectedMonth: string }
    }) => appOtherInfoReducer.selectedMonth,
  )
  const state = useSelector(
    ({ userActionsReducer }: { userActionsReducer: { selectedDay: string } }) =>
      userActionsReducer.selectedDay,
  )
  return (
    <textarea
      placeholder={
        `Запись на ` +
        state +
        ' ' +
        ChangeEndOfAMonthTrue(months[+stateAppInfoDate])
      }
      className={style.FormNoteBlock__Input}
    />
  )
}
