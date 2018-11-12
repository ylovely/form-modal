import * as React from 'react'
import { Layout } from 'element-react'
import qrcode from '../assets/qrcode.png'

export default () => {
  return (
    <Layout.Row>
      <Layout.Col span={24} className="qrcode">
        <div className="qrcode-img">
          <img src={qrcode} alt="qrcode"/>
        </div>
        <div className="qrcode-desc">
          <p>扫一扫分享给朋友</p>
          <p>表单信息将汇总到关联的工作表</p>
        </div>
      </Layout.Col>
    </Layout.Row>
  )
}