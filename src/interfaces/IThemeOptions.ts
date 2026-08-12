import { Preset } from '@primeuix/themes/types';
import { Theme } from '../enums/Theme';

export interface IThemeOption {
  name: string;
  value: Theme;
  preset: Preset;
}
