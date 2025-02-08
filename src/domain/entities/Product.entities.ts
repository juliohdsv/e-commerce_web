import { v4 as uuidv4 } from "uuid";

export class Product {
  public readonly id: string;
  public title: string;
  public description: string;
  public category: string;
  public price: number;
  public rating: number;
  public stock: number;
  public images: string[];
  public thumbnail: string[];

  constructor(props: Omit<Product, "id">, id?: string) {
    this.id = id ?? uuidv4();
    this.title = props.title;
    this.description = props.description;
    this.category = props.category;
    this.price = props.price;
    this.rating = props.rating;
    this.stock = props.stock;
    this.images = props.images;
    this.thumbnail = props.thumbnail;
  }
}
