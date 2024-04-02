import { Option } from './types';
import { Modal } from './components';
import { Plugin } from 'vue';

const defaultOptions = {
  text: 'This action will permanently delete this record! Is it ok to proceed?',
  primaryBtnText: 'Confirm'
} as Option;

const ConfirmationModal: Plugin = {
  install(app, options = defaultOptions) {
    // console.log(options);
    app.component('Modal', Modal);
  }
};

// CDN compatibility
// if (window !== undefined && 'Vue' in window) {
//   window.ConfirmationModal = ConfirmationModal;
// }

export default ConfirmationModal;
export * from './core';
export * from './types';
export * from './components';
