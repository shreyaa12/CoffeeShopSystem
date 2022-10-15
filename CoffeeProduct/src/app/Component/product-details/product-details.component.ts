import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Coffee } from 'src/app/Model/coffee.model';
import { Router,ActivatedRoute } from '@angular/router';
import { CoffeeProductListService } from 'src/app/Service/coffee-product-list.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ProductDetailsComponent implements OnInit {

  @Input() viewMode = false;
  @Input() currentCoffee : Coffee | any;
  // message: string | undefined;

  constructor() { }

  ngOnInit(): void {
    
  }

}
