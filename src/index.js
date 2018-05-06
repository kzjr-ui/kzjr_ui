/* Automatically generated by './build/bin/build-entry.js' */

import Button from '../packages/button/index.js';
import Input from '../packages/input/index.js';
import Modal from '../packages/modal/index.js';
import AjaxLoading from '../packages/ajax-loading/index.js';
import MessageBox from '../packages/message-box/index.js';
import Pagination from '../packages/pagination/index.js';
import Radio from '../packages/radio/index.js';
import RadioButton from '../packages/radio-button/index.js';
import RadioGroup from '../packages/radio-group/index.js';
import CollapseTransition from 'kzjr_ui/src/transitions/collapse-transition';

const components = [
  Button,
  Input,
  Modal,
  AjaxLoading,
  Pagination,
  Radio,
  RadioButton,
  RadioGroup,
  CollapseTransition
];

const install = function(Vue, opts = {}) {

  components.map(component => {
    Vue.component(component.name, component);
  });

  Vue.use(Loading.directive);

  const ELEMENT = {};
  ELEMENT.size = opts.size || '';

  Vue.prototype.$loading = Loading.service;
  Vue.prototype.$msgbox = MessageBox;
  Vue.prototype.$alert = MessageBox.alert;
  Vue.prototype.$confirm = MessageBox.confirm;
  Vue.prototype.$prompt = MessageBox.prompt;
  Vue.prototype.$notify = Notification;
  Vue.prototype.$message = Message;

  Vue.prototype.$ELEMENT = ELEMENT;
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

module.exports = {
  version: '0.0.8',
  install,
  CollapseTransition,
  Loading,
  Button,
  Input,
  Modal,
  AjaxLoading,
  MessageBox,
  Pagination,
  Radio,
  RadioButton,
  RadioGroup
};

module.exports.default = module.exports;
