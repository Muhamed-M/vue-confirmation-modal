import { createApp } from 'vue';
import { Modal } from '../components';
import type { Option } from '../types';
let resolvePromise: any = null;

export const confirmationModal = {
  modalInstance: null,
  baseProps: {
    confirm: () => {
      resolvePromise(true);
      confirmationModal.close();
    },
    reject: () => {
      resolvePromise(false);
      confirmationModal.close();
    }
  },

  close() {
    this.modalInstance = null;

    const container = document.querySelector('#modalPlug');
    if (container) document.body.removeChild(container);
  },

  show(options: Option) {
    this.createInstance(options);

    return new Promise((resolve, reject) => {
      resolvePromise = resolve;
    });
  },

  createInstance(options: Option) {
    if (!this.modalInstance) {
      const container = document.createElement('div');
      container.setAttribute('id', 'modalPlug');
      document.body.appendChild(container);
      // @ts-ignore
      this.modalInstance = createApp(Modal, {
        ...this.baseProps,
        ...options
      }).mount(container);
    }
  }
};
