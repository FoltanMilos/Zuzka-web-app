export class Item {
  public id: number;
  public name: string;
  public description: string;
  public price: number;
  public imgPath: string;

  constructor(id: number, name: string, description: string, price: number, imgPath: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.imgPath = imgPath;
  }

  public getPrice(): number {
    return this.price;
  }
}
