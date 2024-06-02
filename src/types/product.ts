export interface IProduct {
  id: number;
  title: string;
  price: number;
  image: string;
}

export type IProductOnCart = IProduct & {
  quantity: number;
};

export interface IProductList {
  products: IProduct[];
}
