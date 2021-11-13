import { MainPage } from '../Main/MainPage/MainPage'
import styles from './_ComponentsPage.module.css'

export const ComponentsPage = (): JSX.Element => {
  return (
    <div className={styles.BlockOfComponents}>
      <header>123</header>
      {/*Header*/}
      <MainPage />
      {/*Footer*/}
      <div>Footer</div>
    </div>
  )
}
