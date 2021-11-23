import { InputFormFromNote } from './atoms/InputFormFromNote'
import style from './assets/_NoteBlock.module.css'
import { NoteBlockFormBtns } from './NoteBlockFormBtns'

export const NoteBlockForm = () => {
  return (
    <form className={style.FormNoteBlock}>
      <InputFormFromNote />
      <NoteBlockFormBtns />
    </form>
  )
}
