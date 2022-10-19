import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CoffeeProductListService } from './coffee-product-list.service';

describe('CoffeeProductListService', () => {
  let service: CoffeeProductListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
    });
    service = TestBed.inject(CoffeeProductListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
