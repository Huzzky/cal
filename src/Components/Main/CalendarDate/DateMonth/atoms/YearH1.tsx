import { useDispatch, useSelector } from 'react-redux'
import { addMonthAndYearWhenAppLoading } from '../../../../../store/actions/addInfoToAppAction'

export const YearH1 = () => {
  const dispatch = useDispatch()
  const state = useSelector(
    ({
      appOtherInfoReducer,
    }: {
      appOtherInfoReducer: { selectedYear: string; selectedMonth: string }
    }) => appOtherInfoReducer,
  )
  if (!state.selectedMonth && !state.selectedYear) {
    addMonthAndYearWhenAppLoading(
      dispatch,
      new Date().getMonth() + '',
      new Date().getFullYear() + '',
    )
  }

  return (
    <div>
      <h1>{state.selectedYear}</h1>
    </div>
  )
}
