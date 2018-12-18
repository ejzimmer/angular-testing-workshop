import { Injectable } from '@angular/core';

import { UnannotatedService } from './unannotated.service';
import { AnnoyingInitiationService } from './annoying-initiation.service';
import { EmergencyService } from './emergency.service';

@Injectable({
  providedIn: 'root'
})
export class DependencyService {
  isWeekend = [0, 6].includes((new Date()).getDay());
  unannotatedValue: string;
  stubbedValue: string;

  constructor(
    private unannotatedService: UnannotatedService,
    private annoyingService: AnnoyingInitiationService,
    private emergencyService: EmergencyService
  ) {
    this.unannotatedValue = this.unannotatedService.value;
    this.stubbedValue = this.annoyingService.getCombinedEmoji('🧑', '🏿');
  }

  getRandomEmoji() {
    if (this.annoyingService.isWeekend) {
      return '🎉';
    }
    return this.annoyingService.getEmoji();
  }

  callForHelp() {
    this.emergencyService.help();
  }
}
