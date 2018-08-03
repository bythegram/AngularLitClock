import { Injectable } from '@angular/core';
import { TimeQuoteInterface } from './app.models';

import * as clock from './litclock.json';

@Injectable()
export class LitTimeService {
  array = clock.default;

  constructor() { }

  /**
   * Convert Time to Lit Quote
   */
  getTime() {
    let litTime: TimeQuoteInterface;
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
      litTime = {
        quote: quote.replace(label, '<strong>' + label + '</strong>'),
        author: '-' + randomItem.author,
        book: randomItem.book
      }
    } else {
      litTime = {
        quote: time,
        book: '',
        author: ''
      }
    }
    return litTime;
  }

  /**
   * Shuffle The Array
   */
  shuffleArray() {
    for (let i = this.array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.array[i], this.array[j]] = [this.array[j], this.array[i]];
    }
  }
}
