import { Component, OnInit, OnDestroy } from '@angular/core';
import { TimeQuoteInterface } from './app.models';
import { LitTimeService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LitTimeService]
})
export class AppComponent implements OnInit, OnDestroy {
  litTime: TimeQuoteInterface;
  private timeoutId: any;
  private intervalId: any;

  constructor(private litService: LitTimeService) {
  }

  ngOnInit() {
    this.litService.shuffleArray();
    this.litTime = this.litService.getTime();

    const now = new Date();
    const msToNextMinute = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();
    this.timeoutId = setTimeout(() => {
      this.litTime = this.litService.getTime();
      this.intervalId = setInterval(() => {
        this.litTime = this.litService.getTime();
      }, 60000);
    }, msToNextMinute);

  }

  ngOnDestroy() {
    clearTimeout(this.timeoutId);
    clearInterval(this.intervalId);
  }

}
