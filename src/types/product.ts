export interface IProduct {
  id: string;
  new: boolean;
  title: string;
  price: number;
  image: string;
  priceWithDiscount: number | null;
  quantityAvailable: number;
  description: string;
  durationFilm: number;
  category: string;
  director: string;
}

export interface IProductOnCart extends IProduct {
  quantity: number;
}

export interface IProductList {
  products: IProduct[];
}
