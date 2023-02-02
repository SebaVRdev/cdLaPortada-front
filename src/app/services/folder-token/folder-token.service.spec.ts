import { TestBed } from '@angular/core/testing';

import { FolderTokenService } from './folder-token.service';

describe('FolderTokenService', () => {
  let service: FolderTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FolderTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
