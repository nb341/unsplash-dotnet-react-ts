export interface Photo {
  label: string;
  id: number;
  link: string;
}

export interface Columns {
  one: Photo[];
  two: Photo[];
  three: Photo[];
}
