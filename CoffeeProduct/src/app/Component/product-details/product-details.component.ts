import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Coffee } from 'src/app/Model/coffee.model';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ProductDetailsComponent implements OnInit {

  @Input() viewMode = false;
  @Input() currentCoffee : Coffee | any;

  constructor() { }

  ngOnInit(): void {
    
  }
  

}
