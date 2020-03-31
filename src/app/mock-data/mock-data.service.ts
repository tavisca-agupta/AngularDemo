import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  constructor() { }

  GetMockString(){
    return "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum reiciendis debitis animi eveniet. Harum quam deserunt ad distinctio labore, earum nihil, deleniti suscipit sint quae quas id nostrum, assumenda officia!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum reiciendis debitis animi eveniet. Harum quam deserunt ad distinctio labore, earum nihil, deleniti suscipit sint quae quas id nostrum, assumenda officia!";
  }
}
