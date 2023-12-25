import themeOptions from '../assets/themes';
import defaultTheme from '../assets/themes/defaultTheme';

export const setCurrentThemeNameInStorage = (theme: string) => {
  localStorage.setItem('theme', theme);
};

export const getCurrentTheme = () => {
  const currentThemeName = localStorage.getItem('theme') || 'dark';
  const currentTheme = themeOptions.find((theme) => theme.name === currentThemeName);
  return currentTheme?.value || defaultTheme;
};
