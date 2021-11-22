import style from './assets/_NoteBlock.module.css'
import { BackgroundFormNote } from './atoms/BackgroundFormNote'
import { NoteBlockForm } from './NoteBlockForm'

export const NoteBlock = () => {
  return (
    <div className={style.NoteBlock}>
      <NoteBlockForm />
      <BackgroundFormNote />
    </div>
  )
}
