export class Product{
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public category: string,
    public price: number,
    public rating: number,
    public stock: number,
    public images: string[],
    public thumbnail: string[]
  ){}
}
