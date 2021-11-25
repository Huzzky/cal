import { BtnFormClose } from './atoms/Buttons/BtnFormClose'
import { BtnFormSave } from './atoms/Buttons/BtnFormSave'
import style from './assets/_NoteBlockFormBtns.module.css'

export const NoteBlockFormBtns = () => {
  return (
    <div className={style.NoteBlockFormBtnsBlock}>
      <BtnFormSave />
      <BtnFormClose />
    </div>
  )
}
