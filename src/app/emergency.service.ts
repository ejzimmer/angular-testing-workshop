import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmergencyService {

  constructor() { }

  help() {
    console.log('help');
  }
}
