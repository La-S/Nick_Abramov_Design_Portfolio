import themeOptions from '../assets/themes';
import defaultTheme from '../assets/themes/defaultTheme';

export const setCurrentThemeNameInStorage = (theme: string) => {
  localStorage.setItem('theme', theme);
};

export const getCurrentThemeName = () => {
  const currentThemeName = localStorage.getItem('theme') || 'dark';

  return currentThemeName;
};

export const getCurrentTheme = () => {
  const currentThemeName = getCurrentThemeName();
  const currentTheme = themeOptions.find((theme) => theme.name === currentThemeName);
  return currentTheme?.value || defaultTheme;
};

export const getThemeByName = (themeName: string) => {
  const theme = themeOptions.find((theme) => theme.name === themeName);
  return theme?.value || defaultTheme;
};
