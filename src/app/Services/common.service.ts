import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public number = 0;

  constructor() { }

  public calculate(n : number): number {
    return n * n;
  }
}
