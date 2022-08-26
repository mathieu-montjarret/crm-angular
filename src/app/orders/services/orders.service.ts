import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private collection$!: Observable<Order[]>;
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient ) {
    // console.log( 'service orders instanced');
    this.collection$ = this.http.get<Order[]>(`${this.urlApi}/orders`).pipe(
      tap((tab) => {
        console.log(tab);
      }),
      map((tab) => {
        return tab.map((obj) => {
          return new Order(obj);
        });
      })
    );
  }

  get collection(): Observable<Order[]>{
    return this.collection$;
  }

  set collection(col: Observable<Order[]>){
    this.collection$ = col;
  }

  public changeState(item: Order, state: StateOrder): Observable<Order> {
    const itemWithNewState = new Order({...item});
    itemWithNewState.state = state;
    return this.update(itemWithNewState);
  }

  public update(item: Order): Observable<Order> {
    return this.http.patch<Order>(`${this.urlApi}/orders/${item.id}`, item);
  }
}
