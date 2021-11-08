import { months } from '../../../../config'
import { DateDay } from '../DateDay/DateDay'

export const DateMonth = () => {
  return (
    <>
      <h1>{[new Date().getFullYear()]}</h1>
      <h2>{months[new Date(2021, 11, 0).getMonth()]}</h2>
      <DateDay />
    </>
  )
}
