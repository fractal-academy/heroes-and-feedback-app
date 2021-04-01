const theme = require('./customTheme')
module.exports = {
  'primary-color': theme.colors.primary,
  'error-color': theme.colors.danger,

  'border-color-base': theme.colors.textSecondary,

  'box-shadow-base': theme.colors.selectedItemBackground,

  'component-background': theme.colors.background,
  'body-background': theme.colors.background,

  'text-color': theme.colors.textPrimary,
  'text-color-secondary': theme.colors.textSecondary,
  'heading-color': theme.colors.textSecondary,

  'divider-color': theme.colors.textSecondary,

  'progress-remaining-color': theme.colors.progressRemaining,

  'menu-item-active-bg': theme.colors.selectedItemBackground,
  'item-hover-bg': theme.colors.selectedItemBackground,
  'border-color-split': 'transparent',

  'select-selection-item-bg': theme.colors.selectedItemBackground,
  'select-item-selected-bg': theme.colors.selectedItemBackground
}
