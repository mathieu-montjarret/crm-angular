import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private collection$!: Observable<Order[]>;
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient ) {
    console.log( 'service orders instanced');
    this.collection$ = this.http.get<Order[]>(`${this.urlApi}/orders`).pipe(
      map((tab) => {
        return tab.map((obj) => {
          return new Order(obj);});}));
  }

  public get collection(): Observable<Order[]>{
    return this.collection$;
  }

  public set collection(col: Observable<Order[]>){
    this.collection$ = col;
  }
}
