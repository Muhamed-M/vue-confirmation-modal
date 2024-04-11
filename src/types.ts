export interface Options {
  /**
   * The title of the modal.
   */
  title?: string;
  /**
   * The body text of the modal.
   */
  text?: string;
  /**
   * The text of the primary button. (btn that resolves the promise)
   */
  primaryBtnText?: string;
  /**
   * The color theme of modal
   */
  theme?: ConfirmationModalTheme;
  /**
   * The animation of modal
   */
  animation?: ConfirmationModalAnimation;
}

export type ConfirmationModalTheme = 'auto' | 'light' | 'dark';
export type ConfirmationModalAnimation = 'none' | 'slideUp' | 'slideDown' | 'roadRunner' | 'bounce';
