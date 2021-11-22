import {
  OPEN_FORM_FOR_WRITE_TO_DAY_NOTE,
  CLOSE_FORM_FOR_WRITE_TO_DAY_NOTE,
  variableNoteArr,
} from '../../config'

// Пользователь открывает или закрывает панель записи на определенную дату
const userOpenOrCloseNote: Function = (
  dispatch: Function,
  variableNote: string,
  selectedDay: string,
  selectedMonth: string,
  selectedYear: string,
) => {
  // сравнивает закрытие это или открытие
  if (variableNote === variableNoteArr[1]) {
    dispatch({
      type: OPEN_FORM_FOR_WRITE_TO_DAY_NOTE,
      // Передача дня, месяца, года после выбора дня
      selectedDay: selectedDay,
      selectedYear: selectedYear,
      selectedMonth: selectedMonth,
    })
  } else if (variableNote === variableNoteArr[0]) {
    dispatch({
      type: CLOSE_FORM_FOR_WRITE_TO_DAY_NOTE,
    })
  }
}

export { userOpenOrCloseNote }
