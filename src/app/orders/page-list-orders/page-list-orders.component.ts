import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {
  public myTitle = { name: 'Liste des commandes' };
  // public changeTitle(): void {
  //   this.myTitle = { name: "My Order's list" };
  // }
  public collection$!: Observable<Order[]>;
  public headers = ['Type', 'Client', 'NbJours', 'TjmHT', 'Total HT', 'Total TTC', 'Etat'];
  public states = Object.values(StateOrder);
  constructor(private ordersService: OrdersService) {
    this.collection$ = this.ordersService.collection
   }

  ngOnInit(): void {
  }

  public changeState(item: Order, e: any): void {
    const state = e.target.value;
    this.ordersService.changeState(item, state).subscribe((res) =>{
      Object.assign(item, res);
    });
  }
}



