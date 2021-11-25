import { useSelector } from 'react-redux'
import { months } from '../../../../../config'

export const MonthH1 = () => {
  const state = useSelector(
    ({
      appOtherInfoReducer,
    }: {
      appOtherInfoReducer: { selectedMonth: string }
    }) => appOtherInfoReducer.selectedMonth,
  )
  return (
    <div>
      <h2>{months[+state]}</h2>
    </div>
  )
}
