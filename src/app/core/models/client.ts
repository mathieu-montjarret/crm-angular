import { StateClient } from '../enums/state-client';
import { ClientI } from '../interfaces/client-i';

export class Client implements ClientI {
  state = StateClient.ACTUEL;
  tva = 20;
  id!: number;
  name!: string;
  totalCaHt = 0;
  comment!: string;
  constructor(obj?: Partial<Client>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
  totalTTC(): number {
    return this.totalCaHt * (1 + this.tva / 100);
  }
}
