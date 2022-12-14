import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../services/orders.service';


@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss']
})
export class PageAddOrderComponent implements OnInit {
  public item = new Order();
  public myTitle = { name: 'Ajouter une commande' };
  constructor(private ordersService: OrdersService, private router: Router) {}
  public action(item: Order): void {
    this.ordersService.add(item).subscribe(() => {
      this.router.navigate(['orders']);
    });
  }

  ngOnInit(): void {
  }

}
