import { TestBed } from '@angular/core/testing';
 
import { DependencyService } from './dependency.service';
import { UnannotatedService } from './unannotated.service';
import { AnnoyingInitiationService } from './annoying-initiation.service';
import { EmergencyService } from './emergency.service';
 
describe('DependencyService', () => {
  let service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: []
    });
    // TestBed.configureTestingModule({
    //   providers: [ 
    //     // UnannotatedService,
    //     {
    //       provide: AnnoyingInitiationService,
    //       useValue: {
    //         getCombinedEmoji: () => '🇲🇶'
    //       }
    //     },
    //     // {
    //     //   provide: HelpService,
    //     //   useValue: {
    //     //     callForHelp: () => ''
    //     //   }
    //     // }
    //   ]
    // });

    service = TestBed.get(DependencyService);
  });

  fit('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the value from the unannotated service', () => {
    expect(service.unannotatedValue).toBe('👩‍👩‍👧‍👧');
  });

  it('should get the combined emoji from the annoying initiation service', () => {
    expect(service.stubbedValue).toBe('🇲🇶')
  });

  it('should get an emoji from the list', () => {
    expect(service.getRandomEmoji()).toBe('👩‍🔬');
  });

  it('should get the special weekend emoji on weekends', () => {
    expect(service.getRandomEmoji()).toBe('🎉');
  });

  it('should call for help', () => {
    service.callForHelp();
    //expect(emergency.help).toHaveBeenCalled(); uncomment this line!
  })
});
