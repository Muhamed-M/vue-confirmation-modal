import { Options } from '../types';

export const defaultOptions: Options = {
  title: 'Are you sure?',
  text: 'This action will permanently delete this record! Is it ok to proceed?',
  primaryBtnText: 'Confirm',
  theme: 'light',
  animation: 'slideUp'
};

export const enum Default {
  CSS_NAMESPACE = 'vue-cm'
}
