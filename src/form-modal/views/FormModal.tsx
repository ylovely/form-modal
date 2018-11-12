import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { FormModalState } from '../reducer'
import * as actions from '../actions'
import { Layout, Button, Dialog } from 'element-react'
import QRCode from '../../qrcode/QRCode'

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
      <Layout.Row>
        <Layout.Col span={24} className="submit-btn-col">
          <Button type="primary" onClick={ () => onToggleFormModal(true) }>提交</Button>
        </Layout.Col>
      </Layout.Row>
      <Dialog
        title="发布表单"
        visible={ !showFormModal }
        closeOnClickModal={false}
        closeOnPressEscape={false}
        onCancel={ () => onToggleFormModal(true) }
      >
        <Dialog.Body>
          <div>here is Link component</div>
          <div className="p-20"><QRCode /></div>
          <div>here is DateTimePicker component</div>
          <div>here is Password component</div>
          <div>here is ReplyOnce component</div>
          <div>here is ReplyOncePerday component</div>
        </Dialog.Body>
      </Dialog>
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
    onToggleFormModal: (showFormModal: boolean) => dispatch(actions.updateShowFormModal(showFormModal))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormModal)