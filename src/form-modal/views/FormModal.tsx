import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { FormModalState } from '../reducer'
import * as actions from '../actions'

interface Props {
  link: string,
  showFormModal: boolean,
  showDateTimePicker: boolean,
  showPassword: boolean,
  showReplyOnce: boolean,
  showReplyOncePerday: boolean,
  onToggleFormModal: (showFormModal: boolean) => any
}

function FormModal({
  link,
  showFormModal,
  showDateTimePicker,
  showPassword,
  showReplyOnce,
  showReplyOncePerday,
  onToggleFormModal
}: Props) {
  return (
    <div className="form-container">
      <div className="submit-btn">
        <button onClick={ onToggleFormModal(true) }>提交</button>
      </div>
      <div className="form-modal">
        <div className="modal-header">
          <span onClick={ onToggleFormModal(false) }>X</span>
        </div>
        <div className="modal-body">
          <span>这是一段信息</span>
        </div>
      </div>
    </div>
  )
}

function mapStateToProps({
  link,
  showFormModal,
  showDateTimePicker,
  showPassword,
  showReplyOnce,
  showReplyOncePerday
}: FormModalState) {
  return {
    link,
    showFormModal,
    showDateTimePicker,
    showPassword,
    showReplyOnce,
    showReplyOncePerday
  }
}

function mapDispatchToProps(dispatch: Dispatch<actions.FormModalAction>) {
  return {
    onToggleFormModal: () => dispatch(actions.updateShowFormModal(true))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormModal)