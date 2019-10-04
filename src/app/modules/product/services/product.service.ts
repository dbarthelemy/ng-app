import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs/internal/observable/of';
import { map, filter, reduce } from 'rxjs/operators';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts() {
    //    this.http.get();
  }

  testObservable() {
    // Create simple observable that emits three values
    const myObservable = of(1, 2, 3);

    // Create observer object
    const myObserver = {
      next: x => console.log('Observer got a next value: ' + x),
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };

    // Execute with the observer object
    myObservable.subscribe(myObserver);
    // Logs:
    // Observer got a next value: 1
    // Observer got a next value: 2
    // Observer got a next value: 3
    // Observer got a complete notification

    myObservable
      .pipe(
        map(x => x * 2),
        filter(x => x > 3),
        reduce((accumulator, x) => accumulator + x, 5)
      )
      .subscribe(
        (x) => { console.log('Partial observer got a next value: ' + x); }
      );
  }
}
