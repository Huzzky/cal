import { useSelector } from 'react-redux'
import style from '../assets/_NoteBlock.module.css'

export const InputFormFromNote = () => {
  const state = useSelector(
    ({ userActionsReducer }: { userActionsReducer: { selectedDay: string } }) =>
      userActionsReducer,
  )
  return (
    <textarea
      placeholder={`Запись на ` + state.selectedDay + ' число'}
      className={style.FormNoteBlock__Input}
    />
  )
}
