export interface ClientI {
  state: string;
  id: number;
  name: string;
  comment: string;
  totalCaHt: number;
  tva: number;
  totalTTC(): number;
}
