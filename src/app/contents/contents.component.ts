import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {
  chapters = [
    { title: 'A service' },
    { title: 'A service with dependencies' },
    { title: 'A service that uses HTTP' },
    { title: 'A service that does something asynchronously' },
    { title: 'A service with Observables' },
    { title: 'A component' },
    { title: 'A component with dependencies' },
    { title: 'A component with other components inside' },
    { title: 'A component with inputs and outputs' },
    { title: 'A component that does something asynchronously' },
    { title: 'A component with Observables' }
  ]

  constructor() { 
    console.log(this.chapters)
  }

  ngOnInit() {
  }

}
