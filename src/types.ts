export interface Option {
  title: string;
  text?: string;
  primaryBtnText?: string;
  theme?: ConfirmationModalTheme;
}

export type ConfirmationModalTheme = 'auto' | 'light' | 'dark';
