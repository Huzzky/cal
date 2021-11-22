import { InputFormFromNote } from './atoms/InputFormFromNote'
import style from './assets/_NoteBlock.module.css'

export const NoteBlockForm = () => {
  return (
    <form className={style.FormNoteBlock}>
      <InputFormFromNote />
    </form>
  )
}
