import { Option } from '../types';

export const defaultOptions: Option = {
  title: 'Are you sure?',
  text: 'This action will permanently delete this record! Is it ok to proceed?',
  primaryBtnText: 'Confirm',
  theme: 'light'
};

export const enum Default {
  CSS_NAMESPACE = 'vue-cm'
}
