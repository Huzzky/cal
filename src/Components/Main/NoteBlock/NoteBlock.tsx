import style from './assets/_NoteBlock.module.css'

export const NoteBlock = () => {
  return (
    <div className={style.NoteBlock}>
      <form className={style.FormNoteBlock}>
        <input type="text" className={style.FormNoteBlock__Input} />
      </form>
    </div>
  )
}
