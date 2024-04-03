import { mergeProps, VNodeProps } from 'vue';
import { globalOptions } from '../store';
import { ConfirmationModalTheme } from '../types';

export function mergeOptions<T = VNodeProps>(...args: any[]) {
  return mergeProps(...(args as VNodeProps[])) as T;
}

// Utility to save global options
export function saveGlobalOptions(options: VNodeProps) {
  Object.keys(options).forEach(key => {
    // @ts-ignore
    globalOptions[key] = options[key];
  });
}

export function getSystemTheme(): ConfirmationModalTheme {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}
