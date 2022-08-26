import { StateOrder } from "../enums/state-order";
import { OrderI } from "../interfaces/order-i";

export class Order implements OrderI {
  state = StateOrder.OPTION;
  tva = 20;
  id!: number;
  client!: string;
  typePresta!: string;
  comment!: string;
  tjmHt = 1200;
  nbJours = 1;
  constructor(obj?: Partial<Order>){
    if(obj){Object.assign(this, obj);}
  }

  public totalHT(): number{
    return this.tjmHt * this.nbJours;
  }
  public totalTTC(): number{
    return this.tjmHt * this.nbJours * (1 + this.tva / 100);
  }
}
