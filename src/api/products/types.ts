export interface ProductPostData {
  name: string;
  description: string;
  quantity: number;
  price: number;
}

export interface ProductData extends ProductPostData {
  id: number;
}
