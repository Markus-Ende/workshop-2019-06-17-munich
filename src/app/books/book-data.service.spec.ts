import { TestBed } from '@angular/core/testing';

import { BookDataService } from './book-data.service';

describe('BookDataService', () => {
  it('should be created', () => {
    const service: BookDataService = new BookDataService();
    expect(service).toBeTruthy();
  });
});
