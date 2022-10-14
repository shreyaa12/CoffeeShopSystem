import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './Component/product-list/product-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'coffees', pathMatch: 'full' },
  { path: 'coffees', component: ProductListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
