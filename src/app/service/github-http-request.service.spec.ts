import { TestBed } from '@angular/core/testing';

import { GithubHttpRequestService } from './github-http-request.service';

describe('GithubHttpRequestService', () => {
  let service: GithubHttpRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubHttpRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
