import type { Plugin, VNode } from 'vue';

declare const ConfirmationModal: Plugin;
export default ConfirmationModal;

declare global {
  interface Window {
    // confirmation modal for CDN compatibility
    ConfirmationModal?: typeof ConfirmationModal;
  }
}
