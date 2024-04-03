import { Plugin } from 'vue';
import { mergeOptions, saveGlobalOptions } from './utils';
import { defaultOptions } from './utils/constants';
import { Option } from './types';

const ConfirmationModal: Plugin = {
  install(_, options: Option) {
    const mergedOptions = mergeOptions(defaultOptions, options);
    saveGlobalOptions(mergedOptions);
  }
};

// CDN compatibility
if (typeof window !== 'undefined') {
  (window as any).ConfirmationModal = ConfirmationModal;
}

export default ConfirmationModal;
export * from './core';
export * from './types';
export * from './components';
