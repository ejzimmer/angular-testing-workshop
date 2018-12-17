import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hint-box',
  templateUrl: './hint-box.component.html',
  styleUrls: ['./hint-box.component.css']
})
export class HintBoxComponent implements OnInit {
  showAnswer = false;

  constructor() { }

  ngOnInit() {
  }

  toggleAnswer() {
    this.showAnswer = !this.showAnswer;
  }

}
