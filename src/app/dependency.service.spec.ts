import { TestBed } from '@angular/core/testing';

import { DependencyService, UnannotatedService, AnnoyingInitiationService, HelpService } from './dependency.service';

fdescribe('DependencyService', () => {
  let service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ 
        UnannotatedService,
        {
          provide: AnnoyingInitiationService,
          useValue: {
            getCombinedEmoji: () => '🇲🇶'
          }
        },
        HelpService
      ]
    });

    service = TestBed.get(DependencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the value from the unannotated service', () => {
    expect(service.unannotatedValue).toBe('👩‍👩‍👧‍👧');
  });

  it('should get the combined emoji from the annoying initiation service', () => {
    expect(service.stubbedValue).toBe('🇲🇶')
  });

  // This is a terrible test. I just needed something you could stub.
  it('should get an emoji from the list', () => {
    const annoyingService = TestBed.get(AnnoyingInitiationService);
    annoyingService.getEmoji = () => '🦱';
    expect(service.getRandomEmoji()).toBe('🦱');
  });

  it('should call for help', () => {
    const helpService = TestBed.get(HelpService);
    spyOn(helpService, 'callForHelp');
    service.onEmergency();
    expect(helpService.callForHelp).toHaveBeenCalled();
  });
});
