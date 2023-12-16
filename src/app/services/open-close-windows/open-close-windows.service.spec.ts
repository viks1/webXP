import { TestBed } from '@angular/core/testing';

import { OpenCloseWindowsService } from './open-close-windows.service';

describe('OpenCloseWindowsService', () => {
  let service: OpenCloseWindowsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenCloseWindowsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
