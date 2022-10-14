import { Component, OnInit } from '@angular/core';
import { Coffee } from 'src/app/Model/coffee.model';
import { CoffeeProductListService } from 'src/app/Service/coffee-product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

      coffees: Coffee[] = [];
      currentCoffee: Coffee = {};
      currentIndex = -1;
      blend_name = '';

      page = 1;
      count = 10;
      pageSize = 5;
     
  constructor(private CoffeeService: CoffeeProductListService) { }

  ngOnInit(): void {
    this.retrieveCoffeeList();
  }
  
  retrieveCoffeeList(): void {
  

    this.CoffeeService.getAll().subscribe({
      next:(response) => {
        this.coffees = response;
        console.log("retrieved list",response);
      },
      error:(e) => console.error(e)
    });
  }

  setActiveCoffee(c: Coffee, index: number): void {
    this.currentCoffee = c;
    this.currentIndex = index;
    console.log("current Coffee on click of every data",this.currentCoffee);
  }




}
