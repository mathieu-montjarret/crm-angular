export interface OrderI {
  state: string;
  id: number;
  client: string;
  typePresta: string;
  comment: string;
  tjmHt: number;
  nbJours: number;
  tva: number;
  totalHT(): number;
  totalTTC(): number;
}
