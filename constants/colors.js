export const colors = {
  primary50: "#EAF3FF",
  primary100: "#BAD8FF",
  primary200: "#8BBDFF",
  primary600: "#1A73E8",
  primary700: "#0047A4",
  twitter: "#1DA1F2",
  facebook: "#1877F2",
  linkedin: "#0A66c2",
  gray1: "#F2F4F7",
  gray2: "#D7D7D7",
  gray3: "#667085",
  gray4: "#d9d9d9",
  gray25: "#FCFCFD",
  gray50: "#F9FAFB",
  gray100: "#F2F4F7",
  gray200: "#EAECF0",
  gray300: "#D0D5DD",
  gray400: "#98A2B3",
  gray500: "#667085",
  gray600: "#475467",
  gray700: "#344054",
  gray800: "#1D2939",
  gray900: "#101828",
  white: "#FFFFFF",
  black: "#000000",
  dark: "#101828",
  success50: "#ECFDF3",
  success200: "#A6F4C5",
  success500: "#12B76A",
  success600: "#039855",
  success700: "#027A48",
  warning50: "#FFFAEB",
  warning500: "#F79009",
  warning600: "#DC6803",
  warning700: "#B54708",
  warning100: "#FEF0C7",
  error600: "#DC3545",
  error50: "#FEF3F2",
  error500: "#F04438",
  error700: "#B42318",
  error800: "#f8284e",
  blue600: "#1570EF",
  rose600: "#E31B54",
  indigo600: "#444CE7",
  faintRed: "#ffcccb",
  notificationError: "#DC3545",
  unreadMessage: "#DC3545",
  youtube: "#FF0302",
  verifiedDark: "#3CB456",
  verifiedLight: "#E5FFEC",
  notificationSuccess: "#339900",
  notificationWarning: "#ff9966",
  purple: "#CF9FFF",
  purple50: "#E6E6FA",
};

export const randomColorGetter = () => {
  return profileColors[Math.floor(Math.random() * profileColors.length)];
};