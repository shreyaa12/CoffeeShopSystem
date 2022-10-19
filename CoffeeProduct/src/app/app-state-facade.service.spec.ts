import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { AppStateFacadeService } from './app-state-facade.service';
import { StoreModule } from '@ngrx/store';

describe('AppStateFacadeService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule,StoreModule.forRoot({})], 
    providers: [AppStateFacadeService]
  }));

   it('should be created', () => {
    const service: AppStateFacadeService = TestBed.get(AppStateFacadeService);
    expect(service).toBeTruthy();
   });

   

});
