import { Component } from '@angular/core';

@Component({
  selector: 'challenge',
  templateUrl: './challenge.component.html',
  styles: [
    `
      .hide {
        display: none;
      }

      .white {
        color: white;
      }
    `,
  ],
})
export class ChallengeComponent {
  flag = true;
  stamps = [];
  i = 0;
  util() {
    this.flag = !this.flag;
    this.stamps.push(this.i);
    this.i += 1;
    console.log(this.stamps);
  }
}
