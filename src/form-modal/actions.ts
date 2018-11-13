import { UPDATE_LINK, UPDATE_DATE, UPDATE_TIME, UPDATE_PASSWORD, TOGGLE_FORM_MODAL, TOGGLE_DATE_TIME_PICKER, TOGGLE_PASSWORD, TOGGLE_REPLY_ONCE, TOGGLE_REPLY_ONCE_PERDAY } from './actionTypes';

export interface UpdateLink {
  type: typeof UPDATE_LINK
  link: string
}

export interface UpdateDate {
  type: typeof UPDATE_DATE
  date: Date
}

export interface UpdateTime {
  type: typeof UPDATE_TIME
  time: Date
}

export interface UpdatePassword {
  type: typeof UPDATE_PASSWORD
  password: string
}

export interface ToggleFormModal {
  type: typeof TOGGLE_FORM_MODAL
  showFormModal: boolean
}

export interface ToggleDateTimePicker {
  type: typeof TOGGLE_DATE_TIME_PICKER
  showDateTimePicker: boolean
}

export interface TogglePassword {
  type: typeof TOGGLE_PASSWORD
  showPassword: boolean
}

export interface ToggleReplyOnce {
  type: typeof TOGGLE_REPLY_ONCE
  showReplyOnce: boolean
}

export interface ToggleReplyOncePerday {
  type: typeof TOGGLE_REPLY_ONCE_PERDAY
  showReplyOncePerday: boolean
}

export type FormModalAction = UpdateLink | UpdateDate | UpdateTime | UpdatePassword | ToggleFormModal | ToggleDateTimePicker | TogglePassword | ToggleReplyOnce | ToggleReplyOncePerday

export const updateLink = (link: string): UpdateLink => {
  return {
    type: UPDATE_LINK,
    link
  }
};

export const updateDate = (date: Date): UpdateDate => {
  return {
    type: UPDATE_DATE,
    date
  }
};

export const updateTime = (time: Date): UpdateTime => {
  return {
    type: UPDATE_TIME,
    time
  }
};

export const updatePassword = (password: string): UpdatePassword => {
  return {
    type: UPDATE_PASSWORD,
    password
  }
};

export const updateShowFormModal = (showFormModal: boolean): ToggleFormModal => {
  return {
    type: TOGGLE_FORM_MODAL,
    showFormModal
  }
};

export const updateShowDateTimePicker = (showDateTimePicker: boolean): ToggleDateTimePicker => {
  return {
    type: TOGGLE_DATE_TIME_PICKER,
    showDateTimePicker
  }
};

export const updateShowPassword = (showPassword: boolean): TogglePassword => {
  return {
    type: TOGGLE_PASSWORD,
    showPassword
  }
};

export const updateShowReplyOnce = (showReplyOnce: boolean): ToggleReplyOnce => {
  return {
    type: TOGGLE_REPLY_ONCE,
    showReplyOnce
  }
};

export const updateShowReplyOncePerday = (showReplyOncePerday: boolean): ToggleReplyOncePerday => {
  return {
    type: TOGGLE_REPLY_ONCE_PERDAY,
    showReplyOncePerday
  }
};
