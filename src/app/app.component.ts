import {Component, OnInit} from '@angular/core';
import * as clock from './litclock.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  book: string;
  author: string;
  quote: string;
  array = [];
  constructor() {
    this.array = JSON.parse(JSON.stringify(clock));
  }

  ngOnInit() {
    this.getTime();

    setInterval(() => {
      this.getTime();
    }, 1);

    setInterval(() => {
        this.shuffleArray();
    }, 60 * 1000);

  }

  getTime() {
    const date = new Date();
    const hour = date.getHours();
    const min = ('0' + date.getMinutes()).slice(-2);
    const time = hour + ':' + min;
    const arrayMapped = this.array.filter(currentItem => {
      return currentItem.timecode === time;
    });
    const randomItem = arrayMapped[0];
    // console.log(randomItem, time);
    if (randomItem) {
      const quote = randomItem.quote.toLowerCase();
      const label = randomItem.label.toLowerCase();
      this.quote = quote.replace(label, '<strong>' + label + '</strong>');
      this.author = '-' + randomItem.author;
      this.book = randomItem.book;
    } else {
      this.quote = time;
      this.book = '';
      this.author = '';
    }
  }

  shuffleArray() {
    for (let i = this.array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.array[i], this.array[j]] = [this.array[j], this.array[i]];
    }
  }
}
