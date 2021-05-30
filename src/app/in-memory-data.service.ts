import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {
  }

  public createDb(): Record<string, any> {
    return {};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  public genId(data: Record<string, any>): number | undefined | null {
    const keys: string[] = Object.keys(data);
    return keys.length > 0 ? keys.length : undefined;
  }
}
