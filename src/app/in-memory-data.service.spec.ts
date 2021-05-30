import { TestBed } from '@angular/core/testing';

import { InMemoryDataService } from './in-memory-data.service';

describe('InMemoryDataService', () => {
  let service: InMemoryDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemoryDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('createDb', () => {
    it('should create empty database', () => {
      expect(service.createDb()).toStrictEqual({});
    });
  });

  describe('genId', () => {
    it('should generate ID from empty data', () => {
      expect(service.genId({})).toBeUndefined();
    });

    it('should generate ID from existing data', () => {
      expect(service.genId({'foo': 42, 'bar': 69, 'baz': 123})).toBe(3);
    });
  });
});
