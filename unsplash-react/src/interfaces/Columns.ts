export interface Photo {
  label: string;
  id: number;
  link: string;
}

export interface Columns {
  one: Array<{
    label: string;
    id: number;
    link: string;
  }>;
  two: Array<{
    label: string;
    id: number;
    link: string;
  }>;
  three: Array<{
    label: string;
    id: number;
    link: string;
  }>;
}
