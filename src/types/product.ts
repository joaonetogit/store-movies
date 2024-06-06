export interface IProduct {
  id: number;
  new: boolean;
  title: string;
  price: number;
  image: string;
  priceWithDiscount: number | null;
  quantityAvailable: number;
  description: string;
  durationFilm: number;
}

export interface IProductOnCart extends IProduct {
  quantity: number;
}

export interface IProductList {
  products: IProduct[];
}
