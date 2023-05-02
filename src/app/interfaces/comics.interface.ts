export interface Comic {
  id: number;
  digitalId: number;
  title: string;
  variantDescription: string;
  thumbnail: Thumbnail;
  description: string;
  prices: Price[];
  images: any[];
  creators: Characters;
  characters: Characters;
}

export interface Characters {
  available: number;
  collectionURI: string;
  items: Item[];
}

export interface Item {
  resourceURI: string;
  name: string;
  role?: string;
  type?: string;
}

export interface Price {
  type: string;
  price: number;
}

export interface Thumbnail {
  path: string;
  extension: string;
}
