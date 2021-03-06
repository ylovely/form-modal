import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { views as FormModal } from './form-modal';
import './index.scss';
import { Provider } from 'react-redux'
import store from './Store'
import registerServiceWorker from './registerServiceWorker';
import 'element-theme-default';

ReactDOM.render(
  <Provider store={store}>
    <FormModal />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
