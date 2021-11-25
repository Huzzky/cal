import { months } from '../../../../config'
import { DateDay } from '../DateDay/DateDay'

export const DateMonth = () => {
  return (
    <>
      <h1>{[new Date().getFullYear()]}</h1>
      <h2>
        {
          months[
            new Date(
              new Date().getFullYear(),
              new Date().getMonth() + 1,
              0,
            ).getMonth()
          ]
        }
      </h2>
      <DateDay />
    </>
  )
}
