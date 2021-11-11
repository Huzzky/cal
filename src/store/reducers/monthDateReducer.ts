import {
  ERROR_LOAD_CALENDAR_USER,
  LOAD_CALENDAR_USER,
  SUCCESS_LOAD_CALENDAR_USER,
} from '../../config'

const initialState: object = {
  isLoading: false,
  isError: false,
  arrDate: [],
}

type IMonthDateReducerProps = {
  isLoading: boolean
  isError: boolean
  type: string
  arrDate: number[]
}

export const monthDateReducer = (
  state = initialState,
  { arrDate, isLoading, isError, type }: IMonthDateReducerProps,
) => {
  switch (type) {
    case LOAD_CALENDAR_USER:
      console.log(arrDate)
      return {
        ...state,
        isLoading: true,
        arrDate: arrDate,
      }
    case ERROR_LOAD_CALENDAR_USER:
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
    case SUCCESS_LOAD_CALENDAR_USER:
      return {
        ...state,
        isLoading: false,
      }

    default:
      return state
  }
}
