import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface IService {
  id: number;
  icon: IconDefinition;
  title: string;
  description: string;
}
