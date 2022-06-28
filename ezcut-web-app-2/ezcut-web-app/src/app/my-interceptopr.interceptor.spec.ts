import { TestBed } from '@angular/core/testing';

import { MyInterceptoprInterceptor } from './my-interceptopr.interceptor';

describe('MyInterceptoprInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      MyInterceptoprInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: MyInterceptoprInterceptor = TestBed.inject(MyInterceptoprInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
