import { TestBed } from '@angular/core/testing';

import { CalixUiService } from './calix-ui.service';

describe('CalixUiService', () => {
  let service: CalixUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalixUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
