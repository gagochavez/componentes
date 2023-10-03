export interface Video {
  id: number | string;
  title: string;
  category: string;
  description: string;
  url: string;
  image: string;
  code: string;
}

export interface Categories {
  id: string | null;
  name: string;
  color: string;
  description: string;
  code: string;
}
