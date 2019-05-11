import { TestBed } from '@angular/core/testing';

import { FetchDatabaseService } from './fetch-database.service';

describe('FetchDatabaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchDatabaseService = TestBed.get(FetchDatabaseService);
    expect(service).toBeTruthy();
  });
});
