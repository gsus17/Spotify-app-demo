import { TestBed } from '@angular/core/testing';

import { SpotifyConnectionService } from './spotify-connection.service';

describe('SpotifyConnectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpotifyConnectionService = TestBed.get(SpotifyConnectionService);
    expect(service).toBeTruthy();
  });
});
