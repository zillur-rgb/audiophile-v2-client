export type IProduct = {
  _id: string;
  name: string;
  category: ICategory;
  features: string[];
  description: string;
  added_by: any;
  image: string[];
  price: number;
  quantity: number;
  sold: number;
};
export type ICategory = string;
