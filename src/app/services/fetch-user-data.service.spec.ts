import { TestBed, inject } from '@angular/core/testing';

import { FetchUserDataService } from './fetch-user-data.service';

describe('FetchUserDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchUserDataService]
    });
  });
  
  it('should be created', inject([FetchUserDataService], (service: FetchUserDataService) => {
    expect(service).toBeTruthy();}));
  it('should', inject([FetchUserDataService], (service: FetchUserDataService)=>{
    service.getUserData().subscribe(value=>{
      expect(value).toBe('observable value');
    })
  }
  ));
});
