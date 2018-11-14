import { UPDATE_LINK, UPDATE_DATE, UPDATE_TIME, UPDATE_PASSWORD, TOGGLE_FORM_MODAL, TOGGLE_DATE_TIME_PICKER, TOGGLE_PASSWORD, TOGGLE_REPLY_ONCE, TOGGLE_REPLY_ONCE_PERDAY } from './actionTypes';
import { FormModalAction } from './actions';
import { getNowDate, getNowTime } from '../utils/index'

export interface FormModalState {
  link?: string
  date?: Date
  time?: Date
  password?: string
  showFormModal?: boolean
  showDateTimePicker?: boolean
  showPassword?: boolean
  showReplyOnce?: boolean
  showReplyOncePerday?: boolean
}

export default (state: FormModalState = {
  link: '',
  date: getNowDate(),
  time: getNowTime(),
  password: '',
  showFormModal: false,
  showDateTimePicker: false,
  showPassword: false,
  showReplyOnce: false,
  showReplyOncePerday: false
}, action: FormModalAction) => {
  switch(action.type) {
    case UPDATE_LINK: {
      return { ...state, link: action.link }
    }
    case UPDATE_DATE: {
      return { ...state, date: action.date }
    }
    case UPDATE_TIME: {
      return { ...state, time: action.time }
    }
    case UPDATE_PASSWORD: {
      return { ...state, password: action.password }
    }
    case TOGGLE_FORM_MODAL: {
      return { ...state, showFormModal: action.showFormModal }
    }
    case TOGGLE_DATE_TIME_PICKER: {
      return { ...state, showDateTimePicker: action.showDateTimePicker }
    }
    case TOGGLE_PASSWORD: {
      return { ...state, showPassword: action.showPassword }
    }
    case TOGGLE_REPLY_ONCE: {
      return { ...state, showReplyOnce: action.showReplyOnce }
    }
    case TOGGLE_REPLY_ONCE_PERDAY: {
      return { ...state, showReplyOncePerday: action.showReplyOncePerday }
    }
    default: 
      return state
  }
}
