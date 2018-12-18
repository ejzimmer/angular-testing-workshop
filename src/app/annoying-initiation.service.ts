import { HttpClient } from '@angular/common/http';

export class AnnoyingInitiationService {
  isWeekend = [0, 6].includes((new Date()).getDay());
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
