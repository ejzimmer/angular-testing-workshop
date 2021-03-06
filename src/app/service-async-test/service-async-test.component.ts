import { Component, OnInit } from '@angular/core';
import { AsyncService } from '../async.service';

@Component({
  selector: 'app-service-async-test',
  templateUrl: './service-async-test.component.html',
  styleUrls: ['./service-async-test.component.css']
})
export class ServiceAsyncTestComponent implements OnInit {
  words: string;
  delay: number;
  response: Promise<string>;
  spinning: boolean;
  spinnerDelay: number;
  responded = false;

  constructor(private asyncService: AsyncService) { }

  ngOnInit() {
  }

  async doEcho() {
    this.responded = false;
    this.response = this.asyncService.echo(this.words, this.delay);
    this.response.then(() => {
      this.responded = true;
    });
  }

  makeSpin() {
    const promise = new Promise(resolve => {
      setTimeout(resolve, this.spinnerDelay * 1000);
    });
    this.spinning = true;
    this.asyncService.spin(promise).then(() => {
      this.spinning = false;
    });
  }

}
