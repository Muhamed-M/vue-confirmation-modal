import { createApp, App } from 'vue';
import { Modal } from '../components';
import type { Options } from '../types';
import { getSystemTheme, mergeOptions } from '../utils';
import { globalOptions } from '../store';

// Use an IIFE (Immediately Invoked Function Expression) to encapsulate private members and expose only what's necessary.
export const confirmationModal = (() => {
  let modalInstance: App | null = null;
  let resolvePromise: (value: boolean) => void;

  const baseProps = {
    confirm: () => {
      if (resolvePromise) resolvePromise(true);
      close();
    },
    reject: () => {
      if (resolvePromise) resolvePromise(false);
      close();
    }
  };

  function close() {
    if (modalInstance) {
      const container = document.querySelector('#modalPlug');
      if (container) document.body.removeChild(container);
      modalInstance.unmount();
      modalInstance = null;
    }
  }

  function createInstance(options: Options) {
    if (!modalInstance) {
      const finalOptions = mergeOptions(globalOptions, options, baseProps) as Options & Record<string, unknown>;

      if (finalOptions.theme === 'auto') {
        finalOptions.theme = getSystemTheme();
      }

      const container = document.createElement('div');
      container.id = 'modalPlug';
      document.body.appendChild(container);

      modalInstance = createApp(Modal, finalOptions);
      modalInstance.mount(container);
    }
  }

  return {
    show(options: Options) {
      return new Promise<boolean>(resolve => {
        resolvePromise = resolve;
        createInstance(options);
      });
    }
  };
})();
