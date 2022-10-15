import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './Component/product-list/product-list.component';
import {HttpClientModule} from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProductDetailsComponent } from './Component/product-details/product-details.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ROOT_REDUCERS } from './Store';
import * as fromReducer from './reducers';
import { EffectsModule } from '@ngrx/effects';
import * as fromEffects from './effects/app.effects';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreModule.forFeature(fromReducer.dashboardFeatureKey, fromReducer.DashboardReducer),
    EffectsModule.forFeature([fromEffects.AppEffects]),
    EffectsModule.forRoot([fromEffects.AppEffects])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
