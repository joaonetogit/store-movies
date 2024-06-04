export interface IProduct {
  id: number;
  title: string;
  price: number;
  image: string;
}

export interface IProductOnCart extends IProduct {
  quantity: number;
}

export interface IProductList {
  products: IProduct[];
}
