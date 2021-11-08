import {
  ERROR_LOAD_CALENDAR_USER,
  LOAD_CALENDAR_USER,
  SUCCESS_LOAD_CALENDAR_USER,
} from '../../config'

const initialState: object = {
  isLoading: false,
  isError: false,
}

type IMonthDateReducerProps = {
  isLoading: boolean
  isError: boolean
  type: string
}

export const monthDateReducer = (
  state = initialState,
  { isLoading, isError, type }: IMonthDateReducerProps,
) => {
  switch (type) {
    case LOAD_CALENDAR_USER:
      return {
        ...state,
        isLoading: true,
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
