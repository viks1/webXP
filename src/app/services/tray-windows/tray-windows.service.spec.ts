import { TestBed } from '@angular/core/testing';

import { TrayWindowsService } from './services/tray-windows.service';

describe('TrayWindowsService', () => {
  let service: TrayWindowsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrayWindowsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
