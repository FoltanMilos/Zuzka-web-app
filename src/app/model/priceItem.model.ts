export class PriceItem {
  public name: string;
  public value; string = '-1'; // default pre kategoriu
  public category: string;

  constructor(name: string, value: string, category: string) {
    this.name = name;
    this.value = value === ' ' ? value : value + '€';
    this.category = category;
  }
}
