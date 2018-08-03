import { Component, OnInit } from '@angular/core';
import { TimeQuoteInterface } from './app.models';
import { LitTimeService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LitTimeService]
})
export class AppComponent implements OnInit {
  litTime: TimeQuoteInterface
  constructor(private litService: LitTimeService) {
  }

  ngOnInit() {
    this.litTime = this.litService.getTime();
    this.litService.shuffleArray();

    setInterval(() => {
      this.litTime = this.litService.getTime();
    }, 1);

  }

}
