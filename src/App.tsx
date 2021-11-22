import { useSelector } from 'react-redux'
import './App.css'
import { ComponentsPage } from './Components/ComponentsPage/ComponentsPage'
import { NoteBlock } from './Components/Main/NoteBlock/NoteBlock'

const App: React.FunctionComponent<any> = (): JSX.Element => {
  const state = useSelector(
    ({
      userActionsReducer,
    }: {
      userActionsReducer: { openNoteForDate: boolean }
    }) => userActionsReducer,
  )
  console.log(state)
  return (
    <div className="App">
      {!state.openNoteForDate ? <></> : <NoteBlock />}
      <ComponentsPage />
    </div>
  )
}

export default App
