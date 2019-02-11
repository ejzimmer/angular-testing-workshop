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
<<<<<<< Updated upstream
    private annoyingService: AnnoyingInitiationService,
    private emergencyService: EmergencyService
=======
    // private annoyingService: AnnoyingInitiationService,
    // private helpService: HelpService
>>>>>>> Stashed changes
  ) {
    // this.unannotatedValue = this.unannotatedService.value;
    // this.stubbedValue = this.annoyingService.getCombinedEmoji('🧑', '🏿');
  }

  getRandomEmoji() {
<<<<<<< Updated upstream
    if (this.annoyingService.isWeekend) {
      return '🎉';
    }
    return this.annoyingService.getEmoji();
  }

=======
    // return this.annoyingService.getEmoji();
  }

  onEmergency() {
    // this.helpService.callForHelp();
  }
}

export class UnannotatedService {
  value: '👩‍👩‍👧‍👧';
}

export class AnnoyingInitiationService {
  emojis = ['🦱', '☺️', '🤾🏻‍♂️', '👨🏻‍🎨', '🇧🇹'];

  constructor(private http: HttpClient) {
    this.http.get('/subscribe'); // This isn't how this would work. Contrived, remember?
  }

  getCombinedEmoji(emoji1, emoji2) {
    return `${emoji1}${emoji2}`;
  }

  getEmoji() {
    this.emojis[Math.round(Math.random() * 5)];
  }
}

export class HelpService {

  constructor(private http: HttpClient) { }

>>>>>>> Stashed changes
  callForHelp() {
    this.emergencyService.help();
  }
}
