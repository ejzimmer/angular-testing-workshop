import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DependencyService {
  unannotatedValue: string;
  stubbedValue: string;

  constructor(
    private unannotatedService: UnannotatedService,
    private annoyingService: AnnoyingInitiationService,
    private helpService: HelpService
  ) {
    this.unannotatedValue = this.unannotatedService.value;
    this.stubbedValue = this.annoyingService.getCombinedEmoji('🧑', '🏿');
  }

  getRandomEmoji() {
    return this.annoyingService.getEmoji();
  }

  onEmergency() {
    this.helpService.callForHelp();
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

  callForHelp() {
    this.http.get('help!');
  }
}
