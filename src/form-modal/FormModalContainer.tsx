import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import CopyToClipboard from 'react-copy-to-clipboard';
import { FormModalState } from './reducer';
import * as actions from './actions';
import { Layout, Button, Dialog, Input, Checkbox, DatePicker, TimeSelect } from 'element-react';
import QRCode from './QRCode';
import './form.css';
import { generateDynamicKey, generateDynamicPassword, showSuccessMessage, displayStyle } from '../utils/index';

interface Props {
  link: string,
  date: Date,
  time: Date,
  password: string,
  showFormModal: boolean,
  showDateTimePicker: boolean,
  showPassword: boolean,
  showReplyOnce: boolean,
  showReplyOncePerday: boolean,
  onChangeDate: (date: Date) => any,
  onChangeTime: (time: Date) => any,
  onRefreshPassword: () => any,
  onToggleFormModal: (showFormModal: boolean) => any,
  onToggleDateTimePicker: (showDateTimePicker: boolean) => any,
  onTogglePassword: (showPassword: boolean) => any,
  onToggleReplyOnce: (showReplyOnce: boolean) => any,
  onToggleReplyOncePerday: (showReplyOncePerday: boolean) => any
}

function FormModalContainer({
  link,
  date,
  time,
  password,
  showFormModal,
  showDateTimePicker,
  showPassword,
  showReplyOnce,
  showReplyOncePerday,
  onChangeDate,
  onChangeTime,
  onRefreshPassword,
  onToggleFormModal,
  onToggleDateTimePicker,
  onTogglePassword,
  onToggleReplyOnce,
  onToggleReplyOncePerday
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
        size={'tiny'}
        visible={ showFormModal }
        closeOnClickModal={false}
        closeOnPressEscape={false}
        onCancel={ () => onToggleFormModal(false) }
      >
        <Dialog.Body>
          <div>
            <Layout.Row>
              <Layout.Col span={24}>
                <Input className="link-value" value={ link } append={<CopyToClipboard text={ link } onCopy={ copyPath }><Button>复制链接</Button></CopyToClipboard>} />
              </Layout.Col>
            </Layout.Row>
          </div>
          <div className="p-20"><QRCode /></div>
          <div className="mb-20">
            <Layout.Row>
              <Layout.Col span={24}>
                <Checkbox onChange={ () => onToggleDateTimePicker(!showDateTimePicker) } checked={ showDateTimePicker }/> <span className="text">限制表单提交日期</span>
                <div style={ displayStyle(showDateTimePicker) }>
                  <div className="date-time-picker">
                    <DatePicker value={ date } placeholder="选择日期" onChange={ d => onChangeDate(d) }/>
                    <TimeSelect value={ time } placeholder="选择时间" onChange={ t => onChangeTime(t) } start="00:00" step="01:00" end="23:00"/>
                  </div>
                </div>
              </Layout.Col>
            </Layout.Row>
          </div>
          <div className="mb-20">
            <Layout.Row>
              <Layout.Col span={24} className="need-pwd-box">
                <div className="need-pwd-check">
                  <Checkbox onChange={ () => onTogglePassword(!showPassword) } checked={ showPassword }/>
                  <span className="text">需要密码访问</span>
                </div>
                <div style={ displayStyle(showPassword) }>
                  <Input className="pwd-input" value={ password } readOnly={ true }/>
                  <Button type="text" onClick={ () => onRefreshPassword() }>更换密码</Button>
                </div>
              </Layout.Col>
            </Layout.Row>
          </div>
          <div className="mb-20">
            <Layout.Row>
              <Layout.Col span={24}>
                <Checkbox onChange={ () => onToggleReplyOnce(!showReplyOnce) } checked={ showReplyOnce }/> <span className="text">仅限回复一次</span>
                <p style={ displayStyle(showReplyOnce) } className="text reply-desc">每个IP限填一次，对公司内网或公共WIFI网络环境下的用户可能会有影响</p>
              </Layout.Col>
            </Layout.Row>
          </div>
          <div>
            <Layout.Row>
              <Layout.Col span={24}>
                <Checkbox onChange={ () => onToggleReplyOncePerday(!showReplyOncePerday) } checked={ showReplyOncePerday }/> <span className="text">仅限每天回复一次</span>
              </Layout.Col>
            </Layout.Row>
          </div>
        </Dialog.Body>
      </Dialog>
    </div>
  )
}

function mapStateToProps({
  link,
  date,
  time,
  password,
  showFormModal,
  showDateTimePicker,
  showPassword,
  showReplyOnce,
  showReplyOncePerday
}: FormModalState) {
  return {
    link,
    date,
    time,
    password,
    showFormModal,
    showDateTimePicker,
    showPassword,
    showReplyOnce,
    showReplyOncePerday
  }
}

function mapDispatchToProps(dispatch: Dispatch<actions.FormModalAction>) {
  return {
    onChangeDate: (date: Date) => {
      dispatch(actions.updateDate(date));
      showSuccessMessage('设置成功！');
    },
    onChangeTime: (time: Date) => {
      dispatch(actions.updateTime(time));
      showSuccessMessage('设置成功！');
    },
    onRefreshPassword: () => {
      const password = generateDynamicPassword();
      dispatch(actions.updatePassword(password));
      showSuccessMessage('设置成功！');
    },
    onToggleFormModal: (showFormModal: boolean) => {
      dispatch(actions.updateShowFormModal(showFormModal));
      if (showFormModal) {
        dispatch(actions.updateLink(generateDynamicKey()));
      }
    },
    onToggleDateTimePicker: (showDateTimePicker: boolean) => {
      dispatch(actions.updateShowDateTimePicker(showDateTimePicker));
      showSuccessMessage('设置成功！');
    },
    onTogglePassword: (showPassword: boolean) => {
      dispatch(actions.updateShowPassword(showPassword));
      if (showPassword) {
        const password = generateDynamicPassword();
        dispatch(actions.updatePassword(password));
      }
      showSuccessMessage('设置成功！');
    },
    onToggleReplyOnce: (showReplyOnce: boolean) => {
      dispatch(actions.updateShowReplyOnce(showReplyOnce));
      showSuccessMessage('设置成功！');
    },
    onToggleReplyOncePerday: (showReplyOncePerday: boolean) => {
      dispatch(actions.updateShowReplyOncePerday(showReplyOncePerday));
      showSuccessMessage('设置成功！');
    }
  }
}

function copyPath(): void {
  showSuccessMessage('复制成功！');
}

export default connect(mapStateToProps, mapDispatchToProps)(FormModalContainer)