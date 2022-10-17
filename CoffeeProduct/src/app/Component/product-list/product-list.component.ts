import { Component, OnDestroy, OnInit,ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AppStateFacadeService } from 'src/app/app-state-facade.service';
import { Coffee } from 'src/app/Model/coffee.model';
import { ProductDetailsComponent } from '../product-details/product-details.component';

//imports before @NgRx Selectors
// import { Store } from '@ngrx/store';
// import { DashboardState,dashboardFeatureKey } from 'src/app/reducers';
// import { coffees } from 'src/app/selectors/app.selectors';
// import { CoffeeProductListService } from 'src/app/Service/coffee-product-list.service';
// import { AppState } from 'src/app/Store';
// import { fetchCoffeeList, loadCoffeeItems } from 'src/app/action/app.actoin';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit,OnDestroy {

      coffees: Coffee[] = [];
      coffees$ : Observable<Coffee[]> | undefined;
      currentCoffee: Coffee = {};
      currentIndex = -1;
      blend_name = '';
      page = 1;
      count = 10;
      pageSize = 5;
      coffeeSubscribe :Subscription | undefined;
      // @ViewChild(ProductDetailsComponent) viewMode!: boolean;
     viewChildComponent =false;

     
  constructor(public appStateService :AppStateFacadeService ) { }
  

  ngOnInit(): void {
    //Before using @NgRx Selectors
    // this.retrieveCoffeeList();
    
    //After using NgRx Selectors
    this.coffees$ = this.appStateService.getCoffeeList;
    this.coffeeSubscribe =  this.coffees$.subscribe((coffees)=>{
      console.log(coffees);
      this.coffees = coffees;
    })
    
    this.appStateService.fetchCoffees();
    
  }

  // before introducing the ngRx Store. The base assignment done with the following HTTP request
        // retrieveCoffeeList(): void {
        
        //   this.CoffeeService.getAll().subscribe({
        //     next:(response) => {
        //       this.coffees = response;
        //       console.log("retrieved list",response);
        //     },
        //     error:(e) => console.error(e)
        //   });
        // }

  setActiveCoffee(c: Coffee, index: number): void {
    this.currentCoffee = c;
    this.currentIndex = index;
    this.viewChildComponent = true;
    console.log("current Coffee on click of every data",this.viewChildComponent);
  }

  handlePageChange(event:number){
    this.page = event;
    this.viewChildComponent = false;
    console.log("THIS.VIEWmODE",this.viewChildComponent);
   
    }

    
    ngOnDestroy(): void {
    if(this.coffeeSubscribe){
      this.coffeeSubscribe.unsubscribe;
    }
    
  }


}

