export class Item {
  public id: number | undefined;
  public name: string | undefined;
  public description: string | undefined;
  public price: number | undefined;
  public imgPath: string | undefined;

  constructor(name: string, description: string, price: number, imgPath: string) {
    this.id = 1;  // from DB unique
    this.name = name;
    this.price = price;
    this.description = description;
    this.imgPath = imgPath;
  }
}
