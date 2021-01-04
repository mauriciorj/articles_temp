import { createMuiTheme } from '@material-ui/core/styles';

// import Manrope from "../components/assets/google-font/Manrope-Regular.ttf";

// const manrope = {
//   fontFamily: "Manrope",
//   fontStyle: "semi-bold",
//   fontDisplay: "swap",
//   fontWeight: "400",
//   src: `
// 	  local('Manrope'),
// 	  local('Manrope-Regular'),
// 	  url(${Manrope}) format('ttf')
// 	`,
//   unicodeRange:
//     "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
// };

export const theme = createMuiTheme({
	// typography: {
	// 	fontFamily: "Manrope, Arial",
	//   },
	
	  // Colors
	  colors: {
		themeBlack: "#050401",
		themeBlue: "#235789",
		themeGray: "#525257",
		themeLightGray: "#929294",
		themeWhite: "#FFFFFF",
		themeRed: "#DF2935",
		themeYellow: "#F9DB3C",
	  },

	  palette: {
		themeBlue:{
			main: '#235789'
		}
	  }
})

export const tempTheme = {
	  // Colors
	  colors: {
		themeBlack: "#050401",
		themeBlue: "#235789",
		themeGray: "#525257",
		themeLightGray: "#929294",
		themeWhite: "#FFFFFF",
		themeRed: "#DF2935",
		themeYellow: "#F9DB3C",
	  },
}
