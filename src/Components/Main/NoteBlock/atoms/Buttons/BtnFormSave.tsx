import style from '../../assets/_BtnsForm.module.css'

export const BtnFormSave = () => {
  return (
    <input
      className={style.BtnOpenFormNote}
      type="button"
      value="Save"
      onClick={(e) => {
        e.preventDefault()
      }}
    />
  )
}
