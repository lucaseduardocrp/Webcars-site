import { TImageItem } from './TImageItem';

export interface TCars {
  id: string;
  name: string;
  year: string;
  uid: string;
  price: string | number;
  city: string;
  km: string;
  images: TImageItem[];
}
