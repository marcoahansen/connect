import { AppTheme } from "../presentation/theme/themes";

declare module 'styled-components/native' {
  export interface DefaultTheme extends AppTheme {}
}