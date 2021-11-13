import './App.css'
import { ComponentsPage } from './Components/ComponentsPage/ComponentsPage'
import { NoteBlock } from './Components/Main/NoteBlock/NoteBlock'

const App: React.FunctionComponent<any> = (): JSX.Element => {
  let a: boolean = false

  return (
    <div className="App">
      {a ? <NoteBlock /> : <></>}
      <ComponentsPage />
    </div>
  )
}

export default App
