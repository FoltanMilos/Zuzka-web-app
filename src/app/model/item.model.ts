export class Item {
  public id: number | undefined;
  public name: string | undefined;
  public description: string | undefined;
  public price: number | undefined;
  public imgPath: string | undefined;

  constructor(id: number, name: string, description: string, price: number, imgPath: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.imgPath = imgPath;
  }
}
