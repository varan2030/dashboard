import { TestBed } from '@angular/core/testing';

import { NodeServerService } from './node-server.service';

describe('NodeServerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NodeServerService = TestBed.get(NodeServerService);
    expect(service).toBeTruthy();
  });
});
