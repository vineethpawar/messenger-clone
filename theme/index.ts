import {extendTheme} from 'native-base';
import {configTheme} from './configTheme';
import {colorsTheme} from './colorsTheme';
import {fontsConfigTheme, fontsTheme} from './fontsTheme';
import {componentsTheme} from './componentsTheme';

export const theme = extendTheme({
  fontConfig: fontsConfigTheme,
  fonts: fontsTheme,
  colors: colorsTheme,
  config: configTheme,
  components: componentsTheme,
});
